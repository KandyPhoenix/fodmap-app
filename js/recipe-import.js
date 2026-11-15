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
const UNITS = String.raw`(?:ounces?|oz|lbs?|pounds?|cups?|tablespoons?|tbsps?|tbs|teaspoons?|tsps?|cloves?|packages?|packets?|envelopes?|cans?|tins?|jars?|bottles?|bags?|boxes|sticks?|slices?|sprigs?|heads?|stalks?|bulbs?|fillets?|sheets?|loaf|loaves|handfuls?|knobs?|bunch(?:es)?|pinch(?:es)?|dash(?:es)?|quarts?|pints?|liters?|litres?|ml|l|g|kg|grams?|large|medium|small|whole)`;
// ".5" counts as a number too (Mob writes ".5tsp", ".25Sheet").
const NUM = String.raw`(?:\d+(?:[\.\/]\d+)?|\.\d+|[¼½¾⅓⅔⅛⅜⅝⅞])`;
// \b after the unit matters: without it the "g" in "garlic" reads as grams.
const QTY_RE = new RegExp(`^((?:${NUM}(?:\\s*[-–to]+\\s*${NUM})?\\s*)+(?:\\([^)]*\\)\\s*)?(?:${UNITS}\\b\\.?\\s*)?)(.+)$`, 'i');

// Counting words read lower-case and agree with the amount: "3 Clove" -> "3 cloves".
const COUNT_PLURAL = { clove: 'cloves', fillet: 'fillets', stalk: 'stalks', stick: 'sticks', slice: 'slices',
  sheet: 'sheets', sprig: 'sprigs', bulb: 'bulbs', loaf: 'loaves', handful: 'handfuls', knob: 'knobs',
  bunch: 'bunches', tin: 'tins', can: 'cans', head: 'heads' };
const COUNT_SINGULAR = Object.fromEntries(Object.entries(COUNT_PLURAL).map(([one, many]) => [many, one]));
const QTY_FRACTION = { 25: '¼', 5: '½', 75: '¾' };
// The amount a qty starts with, for singular/plural: "1 1/2" -> 1.5, "3/4" -> 0.75,
// "1½" -> 1.5, "3 to 4" -> 4 (a range reads plural if its top end is).
const UNI_FRACTION = { '¼': 0.25, '½': 0.5, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3, '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875 };
function leadAmount(q) {
  const one = String.raw`(?:\d+\s+\d+\/\d+|\d+\/\d+|\d*\.?\d+[¼½¾⅓⅔⅛⅜⅝⅞]?|[¼½¾⅓⅔⅛⅜⅝⅞])`;
  const m = new RegExp(`^\\s*(${one})(?:\\s*(?:-|–|to)\\s*(${one}))?`).exec(q);
  if (!m) return 1;
  const val = t => {
    t = t.trim();
    let mm;
    if ((mm = /^(\d+)\s+(\d+)\/(\d+)$/.exec(t))) return +mm[1] + mm[2] / mm[3];
    if ((mm = /^(\d+)\/(\d+)$/.exec(t))) return mm[1] / mm[2];
    if ((mm = /^(\d*\.?\d*)([¼½¾⅓⅔⅛⅜⅝⅞])$/.exec(t))) return (parseFloat(mm[1]) || 0) + UNI_FRACTION[mm[2]];
    return parseFloat(t);
  };
  return val(m[2] || m[1]);
}
function tidyQty(q) {
  const amount = leadAmount(q);
  // Only the measuring word itself, not a container size in brackets: "3 (15 ounce can)".
  q = q.replace(/\([^)]*\)|\b([A-Za-z]+)\b/g, (all, w) => {
    if (!w) return all;
    const lw = w.toLowerCase(), one = COUNT_SINGULAR[lw] || lw;
    if (!COUNT_PLURAL[one]) return all;
    return amount > 1 ? COUNT_PLURAL[one] : one;
  });
  // A spoon measure gets a space after its number: "1tbsp" -> "1 tbsp".
  q = q.replace(/(\d|[¼½¾])(?=(?:tsps?|tbsps?|tbs)\b)/gi, '$1 ');
  // Halves and quarters as fractions, like the rest of the app: 0.5 -> ½, 1.5 -> 1½.
  return q.replace(/(^|[^\d.])(\d*)\.(25|5|75)(?![\d.])/g,
    (all, pre, whole, frac) => pre + (whole && whole !== '0' ? whole : '') + QTY_FRACTION[frac]);
}

function splitIngredient(raw) {
  let s = txt(raw);
  // Mob-style shorthand: ".5tsp" -> "0.5tsp", and a counting word stuck to its
  // number gets a space ("3Clove Garlic" -> "3 Clove Garlic"). Short units
  // written that way on purpose (270g, 1tbsp) are left as they are.
  s = s.replace(/^\.(\d)/, '0.$1');
  s = s.replace(/^(\d+(?:\.\d+)?)([A-Za-z]{3,})\b/, (all, n, w) => /^(?:tsps?|tbsps?|tbs|lbs|kgs|mls)$/i.test(w) ? all : `${n} ${w}`);
  // "2 tablespoon(s)", "1 stick(s)": plural only when the amount is over 1.
  const many = leadAmount(s) > 1;
  s = s.replace(/\b([A-Za-z]+)\((e?s)\)/gi, (all, w, suf) => many ? w + suf : w);
  // Budget Bytes prices every line: "1 tsp oregano ($0.10)".
  s = s.replace(/\s*\(\s*\$\d[\d.,]*\s*\)/g, '');
  // "1 16-ounce jar salsa" reads as two quantities unless the container size
  // is bracketed first.
  s = s.replace(/(\d+(?:\.\d+)?)\s*-\s*(ounce|oz|pound|lb|gram|g)s?\b/gi, '($1 $2)');
  const m = QTY_RE.exec(s);
  let qty = '', item = s;
  if (m && m[1].trim()) { qty = tidyQty(m[1].trim()); item = m[2].trim(); }
  // A metric/imperial echo left at the front of the item belongs with the qty:
  // "1/2 cup" + "(125 ml) white wine" -> "1/2 cup (125 ml)" + "white wine".
  // Only a simple bracket: "(one (17.25 ounce) package)" stays with the item.
  const lead = /^\(([^()]*)\)\s*(.+)$/.exec(item);
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

// First usable image URL from a JSON-LD Recipe's `image` (string, array,
// or ImageObject). Undefined when the page gives none.
function ldImage(img) {
  const one = (v) => {
    if (!v) return undefined;
    if (typeof v === 'string') return /^https?:\/\//.test(v) ? v : undefined;
    if (Array.isArray(v)) { for (const x of v) { const u = one(x); if (u) return u; } return undefined; }
    if (typeof v === 'object') return one(v.url || v.contentUrl || v['@id']);
    return undefined;
  };
  return one(img);
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
  return usRecipe({
    id: 'fam-add-' + slugify(name),
    name,
    emoji: pick(EMOJI, name, '🍽️'),
    category: pick(CATEGORY, name, 'dinner'),
    time: fmtTime(total),
    serves,
    difficulty: 'easy',
    tags: ['added'],
    source: cleanSourceUrl(url),
    ...(ldImage(r.image) ? { image: ldImage(r.image) } : {}),
    added: today,
    ingredients,
    steps,
    fodmapNote: fodmapNote(ingredients),
  });
}

// ── Plain text → recipe ───────────────────────────────────────
// For sites that hide their pages from the app (Facebook, Instagram, TikTok…):
// the recipe is usually written right in the post, so Kandy pastes or
// highlights that text and this turns it into a JSON-LD-shaped Recipe for
// toAppRecipe. Best effort — she checks the form before saving.
const FRAC = '¼½¾⅓⅔⅛⅜⅝⅞';
// Leading emoji, bullets, dashes and checkmarks, but not digits, fractions or "(".
const LEAD_JUNK = new RegExp(`^[^\\p{L}\\p{N}${FRAC}(]+`, 'u');
const ING_HEAD  = /^(?:ingredients?|what you(?:'|’)?ll need|you(?:'|’)?ll need|what you need|you need|shopping list)\b[^.!?]{0,40}$/i;
const STEP_HEAD = /^(?:instructions?|directions?|method|steps?|how to make(?: it| them)?|preparation|to make)\b[^.!?]{0,40}$/i;
const NOTE_HEAD = /^(?:notes?|tips?|storage|nutrition|variations?)\b[^.!?]{0,40}$/i;
const STEP_NUM  = /^(?:step\s*)?\d{1,2}\s*[.):]\s*(?=\D)/i;
const STARTS_QTY = new RegExp(`^(?:${NUM}|a\\s+(?:pinch|dash|handful)|pinch|dash)`, 'i');

function cleanLine(s) {
  return String(s || '').replace(/ /g, ' ')
    .replace(/^\s*(\d)️?⃣/, '$1.')              // keycap emoji "1️⃣" → "1."
    .replace(LEAD_JUNK, '').replace(/\s+/g, ' ').trim();
}

// "Prep 30 min | Bake 12-13 min" etc. → total minutes (a stated total wins).
function timeFromText(text) {
  const grab = (re) => {
    const m = re.exec(text);
    if (!m) return 0;
    const n = parseFloat(m[1]);
    return /h/i.test(m[2]) ? Math.round(n * 60) : n;
  };
  const amount = String.raw`[:\s-]*(\d+(?:\.\d+)?)(?:\s*[-–]\s*\d+)?\s*(hours?|hrs?|h\b|minutes?|mins?|m\b)`;
  const total = grab(new RegExp(`total(?:\\s*time)?${amount}`, 'i'));
  if (total) return total;
  return ['prep', 'cook', 'bake', 'chill', 'freeze', 'rest']
    .reduce((sum, k) => sum + grab(new RegExp(`${k}(?:\\s*time)?${amount}`, 'i')), 0);
}

function fromText(text) {
  const raw = String(text || '');
  const lines = raw.split(/\r?\n/)
    .filter(l => !/^\s*(?:#\S+\s*)+$/.test(l))              // hashtag-only lines
    .map(cleanLine)
    .filter(l => l && !/^https?:\/\/\S+$/.test(l) && !/^(?:makes|serves|yields?)\b/i.test(l));
  let name = '', mode = 'intro', sawHeads = false;
  const ingredients = [], steps = [];
  const isSubHead = l => /:$/.test(l) && l.length < 45 && !STARTS_QTY.test(l);

  for (const line of lines) {
    const bare = line.replace(/[:：]\s*$/, '');
    if (ING_HEAD.test(bare))  { mode = 'ing';  sawHeads = true; continue; }
    if (STEP_HEAD.test(bare)) { mode = 'step'; sawHeads = true; continue; }
    if (NOTE_HEAD.test(bare) && mode !== 'intro') { mode = 'note'; continue; }
    if (!name) {
      // The title often carries the times: "Cookies Prep 30 min | Bake 12 min".
      name = line.split(/\s*[|•]\s*|\s+(?=(?:prep|cook|bake|total|serves|makes|yield)\b)/i)[0]
        .replace(/\s*#\S+/g, '').replace(/[^\p{L}\p{N})]+$/u, '').trim().slice(0, 90);
      continue;
    }
    if (mode === 'note') continue;
    if (mode === 'ing') {
      if (isSubHead(line)) continue;                       // "For the filling:"
      if (STEP_NUM.test(line) && !STARTS_QTY.test(line.replace(STEP_NUM, ''))) { mode = 'step'; }
      else { ingredients.push(line); continue; }
    }
    if (mode === 'step') {
      if (isSubHead(line)) continue;
      steps.push(line.replace(STEP_NUM, '').trim());
      continue;
    }
    // No headings yet: sort each line by its shape.
    if (STEP_NUM.test(line)) steps.push(line.replace(STEP_NUM, '').trim());
    else if (STARTS_QTY.test(line) && line.length < 90) ingredients.push(line);
    else if (!sawHeads && line.length > 60 && /[.!]$/.test(line)) steps.push(line);
  }

  // One long paragraph of directions reads better split into sentences.
  const outSteps = steps.length === 1 && steps[0].length > 160 ? collectSteps(steps[0]) : steps;
  const serves = /(?:serves|servings?|makes|yields?)\s*:?\s*(?:about\s*)?(\d+)/i.exec(raw);
  const mins = timeFromText(raw);
  return {
    '@type': 'Recipe',
    name: name || 'Untitled recipe',
    recipeYield: serves ? serves[1] : undefined,
    totalTime: mins ? `PT${mins}M` : undefined,
    recipeIngredient: ingredients,
    // As HowToSteps so each numbered step stays one step.
    recipeInstructions: outSteps.map(t => ({ '@type': 'HowToStep', text: t })),
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

// ── American kitchen: US ingredient names, US measures, °F ─────
// Kandy cooks in the US. Every recipe is shown — and every import is saved —
// with American names (yellow onion, cilantro, eggplant, heavy cream) and
// American measures (cups and spoons, ounces and pounds, °F, inches).
//
// Weights become cups only for foods Americans measure that way, using
// published grams-per-cup figures (USDA FoodData Central where available);
// everything else becomes oz / lb, which needs no density. Liquids become
// tsp / tbsp / cups. British-only kitchen words (grill = broiler, hob, tin)
// change only in recipes from British sources, because in American recipes
// "grill" means an outdoor grill.
const G_PER_OZ = 28.3495;
const ML_PER_TSP = 4.92892, ML_PER_TBSP = 14.7868, ML_PER_CUP = 236.588;
const US_FRAC = { 0.125: '⅛', 0.25: '¼', 0.5: '½', 0.75: '¾' };
US_FRAC[1 / 3] = '⅓'; US_FRAC[2 / 3] = '⅔';
// Round to the nearest whole-plus-fraction from `fracs` (never to zero).
function usNum(x, fracs) {
  const opts = [0, ...fracs, 1];
  let whole = Math.floor(x), rem = x - whole, best = 0;
  for (const f of opts) if (Math.abs(rem - f) < Math.abs(rem - best)) best = f;
  if (best === 1) { whole += 1; best = 0; }
  if (whole === 0 && best === 0) best = fracs[0];
  const fr = best ? US_FRAC[best] : '';
  return { text: (whole ? String(whole) : '') + fr, value: whole + best };
}
const plural = (v, one, many) => (v > 1 ? many : one);
function mlToUS(ml) {
  const tsp = ml / ML_PER_TSP;
  if (tsp < 2.75) { const n = usNum(tsp, [0.25, 0.5, 0.75]); return `${n.text} tsp`; }
  const tbsp = ml / ML_PER_TBSP;
  if (tbsp < 3.5) { const n = usNum(tbsp, [0.5]); return `${n.text} tbsp`; }
  const n = usNum(ml / ML_PER_CUP, [0.25, 1 / 3, 0.5, 2 / 3, 0.75]);
  return `${n.text} ${plural(n.value, 'cup', 'cups')}`;
}
function gToUS(g) {
  const oz = g / G_PER_OZ;
  if (oz < 15.5) { const n = usNum(oz, oz < 2 ? [0.25, 0.5, 0.75] : oz < 10 ? [0.5] : []); return `${n.text} oz`; }
  const n = usNum(oz / 16, [0.25, 0.5, 0.75]);
  return `${n.text} lb`;
}
// Grams per US cup (`cup`) or per tablespoon (`tbsp`) for foods measured by
// volume in American kitchens. `form` is added to the name when it says how
// the amount was measured (chopped parsley weighs more per cup than sprigs).
const US_DENSITY = [
  { re: /\bcooked (?:white |brown |basmati |jasmine |long[- ]grain )?rice\b/i, cup: 158 },
  { re: /\brice\b/i, not: /noodle|vermicelli|paper|cooked|pouch|microwav|flour|wine|vinegar|cake|milk|syrup|pasta|macaroni|spaghetti|penne|fusilli|cracker|bran|krispie|cereal/i, cup: 185 },
  { re: /\bcouscous\b/i, not: /cooked|pearl|giant|israeli/i, cup: 173 },
  { re: /\bcooked quinoa\b|\bquinoa,? cooked\b/i, cup: 185 },
  { re: /\bpeas\b/i, not: /chick|snap|snow|split|sugar|pod/i, cup: 134 },
  { re: /\bgreek yog(?:h)?urt\b/i, cup: 227 },
  { re: /\byog(?:h)?urt\b/i, not: /greek|frozen|coconut|dressing/i, cup: 245 },
  { re: /\bcheddar\b/i, need: /grated|shredded/i, cup: 113 },
  { re: /\bparmesan\b|\bparmigiano\b/i, need: /grated/i, cup: 100 },
  { re: /\bfeta\b/i, need: /crumbled/i, cup: 150 },
  { re: /\b(?:icing|powdered|confectioners'?) sugar\b/i, cup: 120 },
  { re: /\b(?:caster|granulated|white|superfine) sugar\b|^sugar\b/i, cup: 200 },
  { re: /\b(?:plain|all[- ]purpose) flour\b/i, cup: 125 },
  { re: /\bbutter\b/i, not: /peanut|almond|nut |cashew|apple|milk|cocoa|chicken|lettuce|squash|beans?\b|bean\b/i, tbsp: 14.2, wholeTbsp: true },
  { re: /\bparsley\b/i, not: /dried/i, cup: 60, form: 'chopped' },
  { re: /\b(?:coriander|cilantro)\b/i, not: /ground|seed|dried/i, cup: 16, form: 'leaves, loosely packed' },
  { re: /\bbasil\b/i, not: /dried|paste|thai basil paste/i, cup: 24, form: 'leaves' },
  { re: /\bmint\b/i, not: /dried|sauce|jelly|tea/i, tbsp: 5.5, form: 'chopped' },
  { re: /\bdill\b/i, not: /dried|seed|pickle/i, cup: 9, form: 'sprigs' },
  { re: /\bchives?\b/i, not: /dried/i, tbsp: 3, form: 'chopped' },
  { re: /\bginger\b/i, not: /ground|paste|pur[ée]e|ale|beer|syrup|pickled|stem|biscuit|snap/i, tbsp: 6, form: 'grated' },
  { re: /\bbean ?sprouts\b/i, cup: 104 },
  { re: /\bkimchi\b/i, cup: 150 },
];
function densityFor(item) {
  return US_DENSITY.find(d => d.re.test(item) && !(d.not && d.not.test(item)) && !(d.need && !d.need.test(item))) || null;
}
// A weight of something measured by volume: cups, or tbsp / tsp when small.
function gByVolume(g, d) {
  const tbsp = d.tbsp ? g / d.tbsp : (g / d.cup) * 16;
  if (d.wholeTbsp && tbsp <= 16) { const n = usNum(tbsp, tbsp < 3 ? [0.5] : []); return `${n.text} tbsp`; }
  if (tbsp < 1) { const n = usNum(tbsp * 3, [0.25, 0.5, 0.75]); return `${n.text} tsp`; }
  if (tbsp < 4) { const n = usNum(tbsp, [0.5]); return `${n.text} tbsp`; }
  const n = usNum(tbsp / 16, [0.25, 1 / 3, 0.5, 2 / 3, 0.75]);
  return `${n.text} ${plural(n.value, 'cup', 'cups')}`;
}
// A British 400 g tin is a standard US can; other sizes become exact ounces.
function usCanSize(grams, item) {
  if (grams >= 380 && grams <= 425) {
    if (/coconut/i.test(item)) return '13.5-oz';
    if (/tomato/i.test(item)) return '14.5-oz';
    if (/beans?\b|chickpea|lentil|garbanzo/i.test(item)) return '15-oz';
  }
  const oz = Math.round((grams / G_PER_OZ) * 10) / 10;
  return `${Number.isInteger(oz) ? oz : oz.toFixed(1).replace(/\.0$/, '')}-oz`;
}
// British -> American ingredient names. Applied everywhere: none of these
// British words means something different in an American recipe.
const US_NAMES = [
  [/\b(\d+)% fat (beef|pork|lamb|turkey|chicken) mince\b/gi, (a, n, m) => `lean ground ${m.toLowerCase()} (${100 - +n}% lean)`],
  [/\b(beef|pork|lamb|turkey|chicken|veal) mince\b/gi, (a, m) => `ground ${m.toLowerCase()}`],
  [/\bminced (beef|pork|lamb|turkey|chicken|veal)\b/gi, (a, m) => `ground ${m.toLowerCase()}`],
  [/\bground \(minced\) /gi, 'ground '],
  [/\baubergines?\b/gi, m => /s$/i.test(m) ? 'eggplants' : 'eggplant'],
  [/\bcourgettes?\b/gi, 'zucchini'],
  [/\bspring onion green tops\b|\bspring onion greens\b|\bgreen tops of (?:the )?spring onions?\b/gi, 'green onion tops'],
  [/\bspring onions?\b/gi, m => /s$/i.test(m) ? 'green onions' : 'green onion'],
  [/\brocket\b/gi, 'arugula'],
  [/\bplain flour\b/gi, 'all-purpose flour'],
  [/\bself[- ]raising flour\b/gi, 'self-rising flour'],
  [/\bwholemeal\b/gi, 'whole wheat'],
  [/\bdouble cream\b/gi, 'heavy cream'],
  [/\bthickened cream\b/gi, 'heavy cream'],
  [/\bsingle cream\b/gi, 'light cream'],
  [/\bsoured cream\b/gi, 'sour cream'],
  [/\bcaster sugar\b/gi, 'superfine sugar'],
  [/\bicing sugar\b/gi, 'powdered sugar'],
  [/\bicing \(powdered\) sugar\b/gi, 'powdered sugar'],
  [/\btomato purée\b/gi, 'tomato paste'],
  [/\b(?:tomato )?passata\b/gi, 'strained tomatoes (passata)'],
  [/\bgarlic pur[ée]e\b/gi, 'garlic paste'],
  [/\bginger pur[ée]e\b/gi, 'ginger paste'],
  [/\bstock cubes?\b/gi, m => /s$/i.test(m) ? 'bouillon cubes' : 'bouillon cube'],
  [/\bchilli flakes?\b/gi, 'red pepper flakes'],
  [/\bkorean chilli flakes?\b/gi, 'Korean chili flakes (gochugaru)'],
  [/\b(red|green) chill(i|ies)\b/gi, (a, c, n) => `${c.toLowerCase()} chile${n === 'ies' ? 's' : ''}`],
  [/\bfresh chill(i|ies)\b/gi, (m, n) => `fresh chile${n === 'ies' ? 's' : ''}`],
  [/\bchillies\b/gi, 'chiles'],
  [/\bchilli\b/gi, 'chili'],
  [/\byoghurt\b/gi, 'yogurt'],
  [/\bking prawns?\b/gi, 'jumbo shrimp'],
  [/\bprawns?\b/gi, 'shrimp'],
  [/\bshrimp\/shrimp\b/gi, 'shrimp'],
  [/\brapeseed oil\b/gi, 'canola oil'],
  [/\bsultanas\b/gi, 'golden raisins'],
  [/\bswede\b/gi, 'rutabaga'],
  [/\bbeetroots?\b/gi, 'beets'],
  [/\bmangetout\b/gi, 'snow peas'],
  [/\bbroad beans\b/gi, 'fava beans'],
  [/\bcos lettuce\b/gi, 'romaine lettuce'],
  [/\bcavolo nero\b/gi, 'lacinato (Tuscan) kale'],
  [/\bpak choi\b/gi, 'bok choy'],
  [/\btenderstem broccoli\b/gi, 'broccolini'],
  [/\bchestnut mushrooms\b/gi, 'cremini mushrooms'],
  [/\bstreaky bacon\b/gi, 'bacon'],
  [/\bbrown onions?\b/gi, m => /s$/i.test(m) ? 'yellow onions' : 'yellow onion'],
  [/\bcornflour\b/gi, 'cornstarch'],
  [/\bbicarbonate of soda\b/gi, 'baking soda'],
  [/\bdemerara sugar\b/gi, 'turbinado sugar'],
  [/\bfresh coriander\b|\bcoriander leaves\b/gi, 'fresh cilantro'],
  [/\btinned\b/gi, 'canned'],
  // "1 tin", "400g tins", "a tin of": a can. A "muffin tin" or "the tin" is a pan.
  [/\b((?:\d+(?:\.\d+)?\s*(?:g|ml|oz)?|a|an|one|two|three)\s+)tin(s?)\b/gi, (a, pre, s) => `${pre}can${s}`],
];
// British spellings and kitchen words, only for recipes from British sources.
const US_UK_ONLY = [
  [/\btomato puree\b/gi, 'tomato paste'],
  [/\bunder the grill\b/gi, 'under the broiler'],
  [/\b(?:pre-?heat|heat|turn on) the grill\b/gi, m => m.replace(/grill/i, 'broiler')],
  // "grill for 5 mins", "Grill the halloumi": the verb is "broil".
  [/\bgrill\b(?=\s+(?:for|until|the|it|them|on|each|both|again|briefly|over|under|in|skin|cut|\d))/gi, 'broil'],
  [/(^|[.!?]\s+)grill\b/gi, (m, p) => p + 'Broil'],
  [/\bgrill\b/gi, 'broiler'],
  [/\bgrilled\b/gi, 'broiled'],
  [/\bgrilling\b/gi, 'broiling'],
  [/\bhob\b/gi, 'stovetop'],
  [/\bto the boil\b/gi, 'to a boil'],
  [/\bon the boil\b/gi, 'boiling'],
  [/\b(roasting|cake|loaf|baking|sandwich) tins?\b/gi, (m, k) => `${k} pan${/s$/i.test(m) ? 's' : ''}`],
  [/\b((?:\d+|[¼½¾])[-\s]?inch(?:es)?(?: square| round| deep)?) tins?\b/gi, (m, k) => `${k} pan${/s$/i.test(m) ? 's' : ''}`],
  [/\bfrying pan\b/gi, 'skillet'],
  [/\bbaking tray\b/gi, 'baking sheet'],
  [/\bclingfilm\b|\bcling film\b/gi, 'plastic wrap'],
  [/\bkitchen paper\b/gi, 'paper towels'],
  [/\btin foil\b/gi, 'aluminum foil'],
  [/\baluminium\b/gi, 'aluminum'],
  [/\bflavour/gi, 'flavor'], [/\bcolour/gi, 'color'], [/\bfavourite/gi, 'favorite'],
  [/\bsavoury\b/gi, 'savory'], [/\bcentre\b/gi, 'center'], [/\blitres?\b/gi, m => m.replace(/re/, 'er')],
  [/\bcaramelis(e|ed|es|ing)\b/gi, (m, e) => 'carameliz' + e],
];
// The replacement takes the original's case: "Spring Onion" -> "Green Onion",
// "spring onion" -> "green onion", "Spring onion" -> "Green onion".
function matchCase(orig, rep) {
  if (!/[A-Z]/.test(orig)) return rep;
  const words = orig.split(/\s+/).filter(w => /[a-z]/i.test(w));
  const title = words.length > 1 && words.every(w => /^[^a-z]*[A-Z]/.test(w));
  if (title) return rep.replace(/(^|[\s(-])([a-z])/g, (a, p, c) => p + c.toUpperCase()).replace(/\b(Of|And|Or|The)\b/g, w => w.toLowerCase());
  return /^[A-Z]/.test(orig) ? rep[0].toUpperCase() + rep.slice(1) : rep;
}
function swap(s, rules) {
  let out = String(s);
  for (const [re, to] of rules) {
    const before = out;
    out = out.replace(re, (...a) => {
      const m = a[0], r = typeof to === 'function' ? to(...a.slice(0, -2), a[a.length - 2], a[a.length - 1]) : to;
      if (r === m) return m;
      // The line already names the American word: it is explaining, not British.
      const core = r.toLowerCase().replace(/\s*\(.*$/, '');
      if (core.length > 3 && before.toLowerCase().includes(core)) return m;
      return matchCase(m, r);
    });
  }
  return out;
}
const usNames = s => dedupeNames(swap(String(s).replace(/\bground \(minced\) /gi, 'ground '), US_NAMES));
const NUM_PART = String.raw`(?:\d+(?:\.\d+)?|\d*\.\d+|\d+\s+\d+\/\d+|\d+\/\d+)`;
const parseNum = t => { t = String(t).trim(); let m;
  if ((m = /^(\d+)\s+(\d+)\/(\d+)$/.exec(t))) return +m[1] + m[2] / m[3];
  if ((m = /^(\d+)\/(\d+)$/.exec(t))) return m[1] / m[2];
  return parseFloat(t); };
// Metric amounts written inside text: "(about 180g each)", "a 2cm piece", "200C".
// Patterns built from pieces are compiled once and reused (start-up converts
// thousands of lines, and compiling per line was most of the cost).
const reCache = new Map();
function cachedRe(src, flags) {
  const key = flags + '|' + src;
  let re = reCache.get(key);
  if (!re) { re = new RegExp(src, flags); reCache.set(key, re); }
  re.lastIndex = 0;
  return re;
}
const US_AMT = String.raw`[\d¼½¾⅓⅔][\d.\/¼½¾⅓⅔ ]*\s*(?:oz|ounces?|lbs?|pounds?|cups?|tbsp|tsp|tablespoons?|teaspoons?)\b`;
const MET_AMT = String.raw`\d[\d.\/]*\s*(?:kg|g|ml|l)\b`;
function dropMetricEcho(s) {
  return String(s)
    .replace(cachedRe(`(${US_AMT})\\s*\\/\\s*${MET_AMT}`, 'gi'), '$1')
    .replace(cachedRe(`${MET_AMT}\\s*\\/\\s*(${US_AMT})`, 'gi'), '$1')
    .replace(cachedRe(`(${US_AMT})\\s*\\(\\s*(?:about\\s*)?${MET_AMT}\\s*\\)`, 'gi'), '$1');
}
// "cornstarch (cornstarch)", "cornstarch / cornstarch" -> "cornstarch"
function dedupeNames(s) {
  s = String(s);
  if (!/[(\/]|\b(?:tbsp|tsp|cups?|oz|lbs?)\s+(?:tbsp|tsp|cups?|oz|lbs?)\b/i.test(s)) return s;
  return s
    .replace(/\b(tbsp|tsp|cups?|oz|lbs?)\s+\1\b/gi, '$1')
    .replace(/\b([a-z][a-z ]*?[a-z])\s*\(\s*\1\s*\)/gi, '$1')
    .replace(/\b([a-z][a-z ]*?[a-z])\s*\/\s*\1\b/gi, '$1');
}
function usInlineAmounts(s) {
  return usCm(dropMetricEcho(s)
    .replace(cachedRe(`(${NUM_PART})\\s*(kg|g|ml|l|cl)\\b(?![-\\w])(?!\\s*(?:of\\s+)?(?:protein|fib(?:er|re)|carbs?|carbohydrates?|fat\\b|sugars?|net|sodium|salt|per serv))`, 'gi'), (all, n, u) => {
      const v = parseNum(n), unit = u.toLowerCase();
      if (unit === 'g') return gToUS(v);
      if (unit === 'kg') return gToUS(v * 1000);
      if (unit === 'ml') return mlToUS(v);
      if (unit === 'cl') return mlToUS(v * 10);
      return mlToUS(v * 1000);
    }));
}
function usCm(s) {
  return s
    .replace(/(\d+(?:\.\d+)?)\s*cm\s*\/\s*(\d+(?:\.\d+)?)\s*(?:"|-?inch(?:es)?\b|in\b)/gi, '$2-inch')
    .replace(/(\d+(?:\.\d+)?\s*(?:"|-?inch(?:es)?))\s*\/\s*\d+(?:\.\d+)?\s*cm\b/gi, '$1')
    .replace(/((?:[\d¼½¾]+|\d+\/\d+)\s*-?\s*(?:"|inch(?:es)?))\s*\(\s*\d+(?:\.\d+)?\s*cm\s*\)/gi, '$1')
    .replace(/(\d+(?:\.\d+)?)\s*(?:-|–|to)\s*(\d+(?:\.\d+)?)\s*cm\b/gi, (a, x, y) => `${cmToIn(+x)}-${cmToIn(+y)} inch`)
    .replace(/(\d+(?:\.\d+)?)\s*cm\b/gi, (a, x) => `${cmToIn(+x)} inch`);
}
function cmToIn(cm) {
  const inch = cm / 2.54;
  return usNum(inch, inch >= 4 ? [] : inch >= 2 ? [0.5] : [0.25, 0.5, 0.75]).text;
}
// Oven temperatures: keep °F when a recipe gives both, convert Celsius-only
// ones to the nearest 25 °F, the way US oven dials are marked.
const GAS = { 1: 275, 2: 300, 3: 325, 4: 350, 5: 375, 6: 400, 7: 425, 8: 450, 9: 475 };
function usTemps(s) {
  const toF = c => { const f = c * 9 / 5 + 32; return c < 100 ? Math.round(f / 5) * 5 : Math.round(f / 25) * 25; };
  const C = String.raw`(\d{2,3})\s*°?\s*C\b`, F = String.raw`(\d{2,3})\s*°?\s*F\b`;
  const OVEN_TAIL = String.raw`(?:\s*\/\s*(?:(?:fan(?:\s*oven)?\s*)?\d{2,3}\s*°?\s*C(?:\s*fan)?|gas(?:\s*mark)?\s*\d+))*`;
  return String(s)
    // "350°F (175°C)", "350°F/177°C", "180C/350F", "200°C (400°F)": keep the °F.
    .replace(cachedRe(`${F}\\s*\\(\\s*${C}(?:\\s*fan)?\\s*\\)`, 'gi'), (a, f) => `${f}°F`)
    .replace(cachedRe(`${F}\\s*\\/\\s*${C}(?:\\s*fan)?`, 'gi'), (a, f) => `${f}°F`)
    .replace(cachedRe(`${C}${OVEN_TAIL}\\s*\\(\\s*${F}\\s*\\)`, 'gi'), (a, c, f) => `${f}°F`)
    .replace(cachedRe(`${C}${OVEN_TAIL}\\s*\\/\\s*${F}`, 'gi'), (a, c, f) => `${f}°F`)
    .replace(cachedRe(`${C}${OVEN_TAIL}`, 'gi'), (a, c) => `${toF(+c)}°F`)
    .replace(/\bgas(?:\s*mark)?\s*(\d)\b/gi, (a, g) => GAS[g] ? `${GAS[g]}°F` : a);
}
const METRIC_QTY = cachedRe(`^\\s*(${NUM_PART}|[¼½¾⅓⅔])\\s*(kg|g|ml|l|cl)\\b\\.?\\s*(.*)$`, 'i');
const US_UNIT_RE = /\b(?:cups?|tbsp|tsp|tablespoons?|teaspoons?|oz|ounces?|lbs?|pounds?|quarts?|pints?)\b/i;
const FRAC_CHARS = { '¼': 0.25, '½': 0.5, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3 };
const fracNum = t => FRAC_CHARS[t] !== undefined ? FRAC_CHARS[t] : parseNum(t);

const MET_RANGE = String.raw`(?:about\s*)?\d[\d.\/]*\s*(?:(?:kg|g|ml|l)\b\s*)?(?:(?:-|–|to)\s*\d[\d.\/]*\s*)?(?:kg|g|ml|l)\b`;
function stripMetric(s) {
  return String(s)
    .replace(cachedRe(`\\(\\s*${MET_RANGE}\\s*\\)`, 'gi'), '')
    .replace(cachedRe(`\\(\\s*${MET_RANGE}\\s*\\/\\s*`, 'gi'), '(')
    .replace(cachedRe(`\\(\\s*${MET_RANGE}\\s*,\\s*`, 'gi'), '(')
    .replace(cachedRe(`,\\s*${MET_RANGE}(?=\\s*[,)])`, 'gi'), '')
    .replace(cachedRe(`${MET_RANGE}\\s*\\/\\s*`, 'gi'), '')
    .replace(cachedRe(`\\s*\\/\\s*${MET_RANGE}`, 'gi'), '')
    .replace(/^\s*\/\s*/, '')
    .replace(/\(\s*\)/g, '').replace(/\s{2,}/g, ' ').replace(/\s+([,)])/g, '$1').trim();
}
// One quick look before the full conversion: almost every line in an American
// recipe has nothing to change, and skipping those keeps start-up fast.
const US_TRIGGER = /\d\s*(?:k?g|ml|l|cl|cm)\b|\d\s*°?\s*C\b|\bgas\b|aubergine|courgette|spring onion|rocket|\bmince\b|minced (?:beef|pork|lamb|turkey|chicken|veal)|\(minced\)|plain flour|self[- ]raising|wholemeal|double cream|thickened cream|single cream|soured cream|caster|icing|purée|passata|stock cube|chilli|yoghurt|prawn|rapeseed|sultana|swede|beetroot|mangetout|broad bean|cos lettuce|cavolo|pak choi|tenderstem|chestnut mush|streaky|brown onion|cornflour|bicarbonate|demerara|fresh coriander|coriander leaves|tinned|\d\s*(?:g|ml|oz)?\s*tins?\b|\b(?:a|an|one|two|three) tins?\b|\b(tbsp|tsp|cups?|oz|lbs?)\s+\1\b/i;
// Kitchen words and spellings that only change in British recipes.
const US_TRIGGER_UK = /coriander|tomato puree|grill|\bhob\b|frying pan|baking tray|\btins?\b|cling|kitchen paper|tin foil|aluminium|flavour|colour|favourite|savoury|centre|litre|caramelis|the boil/i;
const needsUS = (uk, ...parts) => parts.some(p => p && (US_TRIGGER.test(p) || (uk && US_TRIGGER_UK.test(p))));
function usIngredient(ing, uk) {
  if (!needsUS(uk, String(ing.qty == null ? '' : ing.qty), String(ing.item == null ? '' : ing.item))) return ing;
  let qty = String(ing.qty == null ? '' : ing.qty), item = String(ing.item == null ? '' : ing.item);
  item = usNames(item);
  // "2" + "x 400g Can Plum Tomatoes" / "1 × 400g tin chickpeas" -> "2 (14.5-oz) cans" + "plum tomatoes"
  const both = `${/^(?:to taste|—|-)?$/.test(qty.trim()) ? '' : qty + ' '}${item}`.trim();
  const can = /^([\d.¼½¾⅓⅔/ ]*?)\s*[x×]?\s*(\d+(?:\.\d+)?)\s*(g|ml)\s+(cans?|tins?|pouch(?:es)?|packs?|packets?|jars?|tubs?|bags?|bottles?)\b\s*(.*)$/i.exec(both);
  if (can && /[x×]|\b(?:can|tin|pouch|pack|packet|jar|tub|bag|bottle)s?\b/i.test(both)) {
    const count = can[1].trim() || '1';
    const n = fracNum(count.replace(/\s+/g, ' ')) || 1;
    let unit = can[4].toLowerCase().replace(/^tins?$/, 'can').replace(/(es|s)$/, '');
    if (unit === 'pouche') unit = 'pouch';
    const units = n > 1 ? (unit === 'pouch' ? 'pouches' : unit + 's') : unit;
    const grams = can[3].toLowerCase() === 'ml' ? +can[2] : +can[2];
    const rest = usNames(can[5]).replace(/^[,\s]+/, '');
    return { qty: `${count} (${usCanSize(grams, rest)}) ${units}`, item: rest };
  }
  // Already American with a metric echo: "500 g / 1 lb", "¾ cup (150g)",
  // "1¼ cups flour (150g, $0.22)" — keep the American amount, drop the metric.
  const inner0 = /^\s*[\d.\/]+\s*(?:g|kg|ml|l)\b\s*\(([^)]*)\)\s*$/i.exec(qty);
  if (inner0 && US_UNIT_RE.test(inner0[1])) qty = inner0[1].trim();
  if (US_UNIT_RE.test(qty) || US_UNIT_RE.test(item)) {
    qty = stripMetric(qty); item = usCm(stripMetric(item));
    if (uk) item = dedupeNames(swap(item, US_UK_ONLY));
    // "2 tbsp" + "tbsp ghee" -> "2 tbsp" + "ghee"
    const unitEnd = /\b(tbsp|tsp|cups?|oz|lbs?)\s*$/i.exec(qty);
    if (unitEnd) item = item.replace(cachedRe(`^${unitEnd[1]}\\s+`, 'i'), '');
    return { qty: qty || ing.qty, item };
  }
  const inner = /^\s*[\d.\/]+\s*(?:g|kg|ml|l)\b\s*\(([^)]*)\)\s*$/i.exec(qty);
  if (inner && US_UNIT_RE.test(inner[1])) qty = inner[1].trim();
  const m = METRIC_QTY.exec(qty);
  if (m && !US_UNIT_RE.test(qty)) {
    const v = fracNum(m[1]), unit = m[2].toLowerCase(), tail = m[3] ? ' ' + usInlineAmounts(m[3]) : '';
    let us;
    if (unit === 'g' || unit === 'kg') {
      const g = unit === 'kg' ? v * 1000 : v;
      const d = densityFor(item);
      if (d) {
        us = gByVolume(g, d);
        if (d.form && !cachedRe(d.form.split(',')[0], 'i').test(item)) item = /^(?:leaves|sprigs)/.test(d.form) ? `${item} ${d.form}` : `${item}, ${d.form}`;
      } else us = gToUS(g);
    } else if (/coconut (?:milk|cream)/i.test(item) && v >= 380 && v <= 420 && unit === 'ml') us = '1 (13.5-oz) can';
    else us = mlToUS(unit === 'l' ? v * 1000 : unit === 'cl' ? v * 10 : v);
    qty = us + tail;
  }
  item = usInlineAmounts(item);
  if (uk) item = dedupeNames(swap(item, US_UK_ONLY));
  return { qty, item };
}
function dropStepEchoes(s) {
  return String(s).replace(cachedRe(`(${US_AMT}[^()]{0,40}?)\\s*\\(\\s*(?:about\\s*)?${MET_RANGE}\\s*\\)`, 'gi'), '$1');
}
function usText(s, uk, ctx) {
  if (!needsUS(uk, s)) return s;
  let out = usTemps(usInlineAmounts(usNames(dropStepEchoes(s)))).replace(/\b([Aa]) (8|11|18|80)\b/g, '$1n $2');
  if (uk) {
    out = swap(out, US_UK_ONLY);
    // British "coriander" in a step is fresh cilantro only if the recipe uses fresh, not ground.
    if (ctx && ctx.freshCoriander && !ctx.groundCoriander) out = out.replace(/\bcoriander\b(?![- ](?:seeds?|powder))/gi, m => matchCase(m, 'cilantro'));
    out = dedupeNames(out);
  }
  return out;
}
// Recipes from British sites (or written the British way) also get the
// kitchen-word and spelling changes.
const UK_HINT = /\b(?:yoghurt|aubergine|courgette|hob|clingfilm|caster sugar|double cream|tinned|spring onion|°C|gas mark)\b|\d\s*C fan/i;
function isBritish(r) {
  if (/^fam-mob-/.test(r.id || '')) return true;
  if (/^https?:\/\/[^\/?#]+\.uk(?:[\/:?#]|$)/i.test(r.source || '')) return true;
  const text = [r.name, ...(r.ingredients || []).map(i => i && i.item), ...(r.steps || [])].join(' ');
  return UK_HINT.test(text) && !/\b\d{3}\s*°\s*F\b/.test(text);
}
const usCache = typeof WeakMap !== 'undefined' ? new WeakMap() : null;
// Cheap first look: could anything in this recipe change? (Used to put off
// the full conversion until a recipe's ingredients or steps are read.)
function usMaybe(r) {
  if (!r || typeof r !== 'object') return false;
  const uk = isBritish(r);
  const all = [r.name, r.fodmapNote, r.notes, ...(r.ingredients || []).map(i => i && `${i.qty} ${i.item}`), ...(r.steps || [])].join('\n');
  return needsUS(uk, all);
}
const usName = n => (typeof n === 'string' && needsUS(false, n) ? usNames(n) : n);
function usRecipe(r) {
  if (!r || typeof r !== 'object') return r;
  if (usCache && usCache.has(r)) return usCache.get(r);
  const uk = isBritish(r);
  const all = [r.name, r.fodmapNote, r.notes, ...(r.ingredients || []).map(i => i && `${i.qty} ${i.item}`), ...(r.steps || [])].join('\n');
  if (!needsUS(uk, all)) { if (usCache) usCache.set(r, r); return r; }
  const ingText = (r.ingredients || []).map(i => i && i.item).join('\n');
  const ctx = { freshCoriander: /fresh coriander|coriander leaves|cilantro|^coriander\b/im.test(ingText), groundCoriander: /ground coriander|coriander seeds?|coriander powder/i.test(ingText) };
  let ingChanged = false, stepChanged = false;
  const ingredients = Array.isArray(r.ingredients)
    ? r.ingredients.map(i => { if (!i || typeof i.item !== 'string') return i; const j = usIngredient(i, uk); if (j !== i && (j.qty !== i.qty || j.item !== i.item)) { ingChanged = true; return j; } return i; }) : r.ingredients;
  const steps = Array.isArray(r.steps)
    ? r.steps.map(s => { if (typeof s !== 'string') return s; const t = usText(s, uk, ctx); if (t !== s) stepChanged = true; return t; }) : r.steps;
  const name = typeof r.name === 'string' && needsUS(false, r.name) ? usNames(r.name) : r.name;
  const fodmapNote = typeof r.fodmapNote === 'string' ? usText(r.fodmapNote, uk, ctx) : r.fodmapNote;
  const notes = typeof r.notes === 'string' ? usText(r.notes, uk, ctx) : r.notes;
  const changed = name !== r.name || fodmapNote !== r.fodmapNote || notes !== r.notes || ingChanged || stepChanged;
  let out = r;
  if (changed) {
    out = Object.assign({}, r, { name, ingredients, steps });
    if (r.fodmapNote !== undefined) out.fodmapNote = fodmapNote;
    if (r.notes !== undefined) out.notes = notes;
  }
  if (usCache) usCache.set(r, out);
  return out;
}

const api = { txt, findRecipes, findRecipesInLd, collectSteps, cleanStep, minutes, fmtTime,
  splitIngredient, fodmapNote, pick, slugify, EMOJI, CATEGORY, toAppRecipe, cleanSourceUrl, fromText,
  usRecipe, usIngredient, usText, isBritish, usMaybe, usName };
if (typeof module !== 'undefined' && module.exports) module.exports = api;
else root.RecipeImport = api;
})(typeof window !== 'undefined' ? window : globalThis);
