// ─────────────────────────────────────────────────────────────
//  RECIPE IMPORT — turn a web page's structured recipe data (JSON-LD)
//  into the app's recipe shape.
//
//  Shared by two callers so they always agree:
//    • the app's "Import from link" button (browser: window.RecipeImport)
//    • .claude/skills/add-recipe/scrape-recipe.js (Node: require)
//
//  Pure functions only — no fetching here. The browser gets page data from
//  the Planner Worker's /recipe route or from the clipper; Node uses curl.
// ─────────────────────────────────────────────────────────────
(function (root) {
'use strict';

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ", ', frac12: '½', frac14: '¼', frac34: '¾' };
function txt(s) {
  return String(s == null ? '' : s)
    .replace(/<[^>]*>/g, '')
    .replace(/&#(\d+);/g, (m, d) => String.fromCharCode(+d))
    .replace(/&#x([0-9a-f]+);/gi, (m, d) => String.fromCharCode(parseInt(d, 16)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (m, n) => (n === 'nbsp' ? ' ' : ENT[n] || ' '))
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ── JSON-LD ───────────────────────────────────────────────────
function findRecipes(html) {
  const out = [];
  const walk = (n) => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach(walk);
    const t = n['@type'];
    if ((Array.isArray(t) ? t : [t]).includes('Recipe')) out.push(n);
    for (const k of ['@graph', 'mainEntity', 'mainEntityOfPage', 'itemListElement']) if (n[k]) walk(n[k]);
  };
  for (const m of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try { walk(JSON.parse(m[1])); } catch (e) { /* malformed block, skip */ }
  }
  return out;
}

function collectSteps(ins, acc = []) {
  if (!ins) return acc;
  if (typeof ins === 'string') {
    // A single prose blob: split into sentences so the app can number them.
    txt(ins).split(/(?<=[.!?])\s+(?=[A-Z])/).forEach(s => { if (s.length > 3) acc.push(s); });
    return acc;
  }
  if (Array.isArray(ins)) { ins.forEach(i => collectSteps(i, acc)); return acc; }
  if (ins['@type'] === 'HowToSection') return collectSteps(ins.itemListElement, acc);
  if (ins.text) acc.push(txt(ins.text));
  return acc;
}

// Some sites emit the same sentence twice inside one step. Drop the repeat.
function cleanStep(s) {
  const parts = txt(s).split(/(?<=[.!?])(?=[A-Z])/).map(x => x.trim());
  const seen = [];
  for (const part of parts) if (!seen.includes(part)) seen.push(part);
  return seen.join(' ');
}

function minutes(iso) {
  const m = /P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/.exec(iso || '');
  if (!m) return 0;
  return (+(m[1] || 0)) * 1440 + (+(m[2] || 0)) * 60 + (+(m[3] || 0));
}
function fmtTime(mins) {
  if (!mins) return '';
  const h = Math.floor(mins / 60), r = mins % 60;
  return h ? (r ? `${h} hr ${r} min` : `${h} hr`) : `${r} min`;
}

// ── ingredient "2 cups flour, sifted" → { qty, item } ─────────
const UNITS = String.raw`(?:ounces?|oz|lbs?|pounds?|cups?|tablespoons?|tbsps?|tbs|teaspoons?|tsps?|cloves?|packages?|packets?|envelopes?|cans?|jars?|bottles?|bags?|boxes|sticks?|slices?|sprigs?|heads?|stalks?|bunch(?:es)?|pinch(?:es)?|dash(?:es)?|quarts?|pints?|liters?|litres?|ml|g|kg|grams?|large|medium|small|whole)`;
const NUM = String.raw`(?:\d+(?:[\.\/]\d+)?|[¼½¾⅓⅔⅛⅜⅝⅞])`;
// \b after the unit matters: without it the "g" in "garlic" reads as grams.
const QTY_RE = new RegExp(`^((?:${NUM}(?:\\s*[-–to]+\\s*${NUM})?\\s*)+(?:\\([^)]*\\)\\s*)?(?:${UNITS}\\b\\.?\\s*)?)(.+)$`, 'i');

function splitIngredient(raw) {
  let s = txt(raw);
  // Budget Bytes prices every line: "1 tsp oregano ($0.10)".
  s = s.replace(/\s*\(\s*\$\d[\d.,]*\s*\)/g, '');
  // "1 16-ounce jar salsa" reads as two quantities unless the container size
  // is bracketed first.
  s = s.replace(/(\d+(?:\.\d+)?)\s*-\s*(ounce|oz|pound|lb|gram|g)s?\b/gi, '($1 $2)');
  const m = QTY_RE.exec(s);
  let qty = '', item = s;
  if (m && m[1].trim()) { qty = m[1].trim(); item = m[2].trim(); }
  // A metric/imperial echo left at the front of the item belongs with the qty:
  // "1/2 cup" + "(125 ml) white wine" -> "1/2 cup (125 ml)" + "white wine".
  const lead = /^\(([^)]*)\)\s*(.+)$/.exec(item);
  if (lead) { qty = `${qty} (${lead[1]})`.trim(); item = lead[2]; }
  item = item.replace(/\s*\(\((.+)\)\)\s*$/, ', $1').replace(/\s*\((.+)\)\s*$/, ', $1');
  item = item.replace(/\s*,\s*(?=,)/g, '').replace(/^[,\s]+/, '').replace(/\s+,/g, ',').trim();
  return { qty: qty || 'to taste', item };
}

// ── FODMAP flags, read off the recipe's own ingredient list ───
// Packet mixes and condensed soups matter as much as fresh alliums here —
// they're where onion and garlic powder hide.
const FODMAP_FLAGS = [
  [/\bonions?\b|shallot|scallion|leek/i, 'onion'],
  [/\bgarlic\b/i, 'garlic'],
  [/seasoning mix|soup mix|gravy mix|taco seasoning|ranch seasoning|onion soup|cream of |condensed soup|wing sauce|bbq sauce|barbecue sauce|worcestershire|stock cube|bouillon/i, 'packet mixes or sauces with onion and garlic powder'],
  [/\bwheat\b|\bflour\b|\bpasta\b|\bnoodles?\b|\bbread\b|\bbuns?\b|\brolls?\b|\btortillas?\b|\bcouscous\b|\bbarley\b|\brye\b/i, 'wheat'],
  [/\bmilk\b|heavy cream|half and half|sour cream|cream cheese|\bqueso\b|ricotta|\byogh?urt\b|ice cream|condensed milk|evaporated milk/i, 'lactose'],
  [/black beans|kidney beans|chickpeas|garbanzo|lentils|baked beans|refried|\bbeans\b/i, 'legumes'],
  // "apple cider vinegar" is fine in normal amounts — don't flag it as fruit.
  [/\bapples?\b(?!\s+cider)|\bpears?\b|\bmangos?\b|watermelon|\bcherries\b|\bpeach(?:es)?\b|\bplums?\b|dried fruit|\braisins?\b|\bfigs?\b/i, 'high-fructose fruit'],
  [/\bhoney\b|agave|high fructose|corn syrup|root beer/i, 'honey or HFCS'],
  [/\bcauliflower\b|\bmushrooms?\b|sugar snap|snow peas|\bcabbage\b|sauerkraut|\basparagus\b|\bartichokes?\b|\bceleriac\b|\bcelery\b/i, 'high-FODMAP vegetables'],
  [/cashews?|pistachios?/i, 'cashews or pistachios'],
  [/sugar[- ]free|\bsorbitol\b|\bxylitol\b|\bmannitol\b|\bmaltitol\b/i, 'polyol sweeteners'],
];
const FODMAP_ADVICE = 'Swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, replace packet mixes with your own herbs and spices, use lactose-free dairy or a hard cheese, and keep canned legumes to about 1/4 cup drained and rinsed per serve.';

function fodmapNote(ingredients) {
  const all = ingredients.map(i => `${i.qty} ${i.item}`).join(' | ');
  const flags = FODMAP_FLAGS.filter(([re]) => re.test(all)).map(([, n]) => n);
  return flags.length
    ? `Not low-FODMAP as written — ${flags.join(', ')}. ${FODMAP_ADVICE}`
    : 'Nothing obviously high-FODMAP in the ingredient list, but check it against your own tolerances.';
}

// ── emoji + category guesses ──────────────────────────────────
const EMOJI = [
  [/cookie|brownie|cake|pie|cheesecake|dessert|pudding|truffle|fudge|bar\b/i, '🍰'],
  [/ice cream|gelato|sorbet/i, '🍨'], [/smoothie|shake/i, '🥤'],
  [/taco|fajita|burrito|quesadilla|enchilada/i, '🌮'], [/pizza/i, '🍕'],
  [/burger|smash/i, '🍔'], [/sandwich|po.?boy|sub\b|melt\b/i, '🥪'],
  [/pasta|spaghetti|lasagna|ziti|penne|orzo|noodle|linguine|fettuccine/i, '🍝'],
  [/soup|stew|chili|chowder|gumbo|bisque/i, '🍲'], [/salad|slaw/i, '🥗'],
  [/shrimp|prawn|crab|lobster/i, '🍤'], [/salmon|tuna|cod|fish|tilapia|halibut/i, '🐟'],
  [/chicken|poultry/i, '🍗'], [/turkey/i, '🦃'],
  [/beef|steak|brisket|roast|meatball|meatloaf/i, '🥩'], [/pork|bacon|ham\b|sausage/i, '🐖'],
  [/egg|omelet|frittata|quiche/i, '🍳'], [/pancake|waffle|french toast/i, '🥞'],
  [/oat|granola|porridge|cereal/i, '🥣'], [/bread|roll|biscuit|naan|pita|tortilla|focaccia/i, '🫓'],
  [/rice|risotto|pilaf/i, '🍚'], [/potato|fries|mash/i, '🥔'],
  [/dip|nacho|wing|appetizer|snack/i, '🧀'], [/drink|cocktail|punch|latte|cocoa/i, '🥤'],
];
const CATEGORY = [
  [/pancake|waffle|oatmeal|granola|omelet|frittata|breakfast|muffin|scone|french toast|smoothie/i, 'breakfast'],
  [/cookie|brownie|cake|pie|cheesecake|dessert|pudding|truffle|fudge|ice cream|tart/i, 'desserts'],
  [/dip|nacho|wing|snack|popcorn|trail mix|energy ball|appetizer/i, 'snacks'],
  [/salad|sandwich|wrap|soup(?! bone)/i, 'lunch'],
  [/side|mashed|roasted vegetable|slaw|biscuit|dinner roll|bread/i, 'sides'],
];
const pick = (table, s, dflt) => (table.find(([re]) => re.test(s)) || [null, dflt])[1];
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 52);

// Recipe objects out of already-parsed JSON-LD (a block, an array, or @graph).
function findRecipesInLd(data) {
  const out = [];
  const walk = (n) => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach(walk);
    const t = n['@type'];
    if ((Array.isArray(t) ? t : [t]).includes('Recipe')) out.push(n);
    for (const k of ['@graph', 'mainEntity', 'mainEntityOfPage', 'itemListElement']) if (n[k]) walk(n[k]);
  };
  walk(data);
  return out;
}

// One JSON-LD Recipe → the object js/added-recipes.js and the Add My Recipe
// form both use. `today` is YYYY-MM-DD (the 🆕 Newest filter reads it).
function toAppRecipe(r, url, today) {
  const name = txt(r.name);
  const ingredients = (r.recipeIngredient || r.ingredients || []).map(splitIngredient);
  const steps = collectSteps(r.recipeInstructions).map(cleanStep).filter(Boolean);
  const total = minutes(r.totalTime) || (minutes(r.prepTime) + minutes(r.cookTime));
  const yieldRaw = Array.isArray(r.recipeYield) ? r.recipeYield[0] : r.recipeYield;
  const servesMatch = String(yieldRaw || '').match(/\d+/);
  const serves = parseInt(servesMatch ? servesMatch[0] : '4', 10);
  return {
    id: 'fam-add-' + slugify(name),
    name,
    emoji: pick(EMOJI, name, '🍽️'),
    category: pick(CATEGORY, name, 'dinner'),
    time: fmtTime(total),
    serves,
    difficulty: 'easy',
    tags: ['added'],
    source: cleanSourceUrl(url),
    added: today,
    ingredients,
    steps,
    fodmapNote: fodmapNote(ingredients),
  };
}

// Drop tracking parameters (?fbclid=, utm_…, _kx=) but keep real ones.
function cleanSourceUrl(url) {
  try {
    const u = new URL(url);
    const keep = new URLSearchParams();
    u.searchParams.forEach((v, k) => { if (!/^(utm_|fbclid|gclid|mc_|_kx|oid$|ref$|ref_)/i.test(k)) keep.append(k, v); });
    u.search = keep.toString();
    u.hash = '';
    return u.toString();
  } catch (e) { return String(url || '').split('?')[0]; }
}

const api = { txt, findRecipes, findRecipesInLd, collectSteps, cleanStep, minutes, fmtTime,
  splitIngredient, fodmapNote, pick, slugify, EMOJI, CATEGORY, toAppRecipe, cleanSourceUrl };
if (typeof module !== 'undefined' && module.exports) module.exports = api;
else root.RecipeImport = api;
})(typeof window !== 'undefined' ? window : globalThis);
