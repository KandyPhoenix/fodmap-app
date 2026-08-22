#!/usr/bin/env node
// Pull a recipe off a web page and print it in the shape js/added-recipes.js
// wants. Reads the page's own structured recipe data (JSON-LD) rather than
// guessing from the prose, so quantities come out exact.
//
//   node scrape-recipe.js <url>            → one recipe object
//   node scrape-recipe.js <url> --links    → treat it as a roundup, list the
//                                            recipe pages it links to
//   node scrape-recipe.js <url> --json     → raw scraped data, no formatting
//
// Exit codes: 0 ok · 3 page fetched but holds no recipe data · 4 fetch failed.

const { execFileSync } = require('child_process');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

function fetchPage(url) {
  try {
    const out = execFileSync('curl', ['-sSL', '--max-time', '40', '-A', UA, '-w', '\n__HTTP__%{http_code}', url],
      { maxBuffer: 1 << 28 }).toString();
    const i = out.lastIndexOf('\n__HTTP__');
    return { body: out.slice(0, i), status: parseInt(out.slice(i + 9), 10) || 0 };
  } catch (e) {
    return { body: '', status: 0 };
  }
}

// ── text helpers ──────────────────────────────────────────────
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

// ── roundup link extraction ───────────────────────────────────
function roundupLinks(html, pageUrl) {
  const host = (() => { try { return new URL(pageUrl).host; } catch (e) { return ''; } })();
  const body = html.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  const seen = new Map();
  for (const m of body.matchAll(/<a[^>]+href="(https?:\/\/[^"#]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    const url = m[1].split('?')[0].replace(/\/+$/, '/');
    const label = txt(m[2]);
    if (label.length < 6) continue;
    if (/facebook|pinterest|twitter|instagram|youtube|tiktok|reddit|flipboard|amzn\.to|amazon\./i.test(url)) continue;
    if (/\/(category|tag|about|contact|privacy|subscribe|recipe-index|web-stories|author|shop|feed)\b/i.test(url)) continue;
    if (host && !url.includes(host)) continue;          // roundups mostly link in-site
    if (url.replace(/\/$/, '') === pageUrl.split('?')[0].replace(/\/$/, '')) continue;
    if (!seen.has(url)) seen.set(url, label);
  }
  return [...seen].map(([url, label]) => ({ url, label }));
}

// ── main ──────────────────────────────────────────────────────
const [, , url, ...flags] = process.argv;
if (!url) { console.error('usage: scrape-recipe.js <url> [--links] [--json]'); process.exit(2); }

const { body: html, status } = fetchPage(url);
if (!html || status >= 400) {
  console.error(`FETCH FAILED (HTTP ${status || 'no response'}) — ${url}`);
  console.error(status === 402 || status === 403
    ? 'This site blocks datacenter traffic. Ask for the recipe text to be pasted in instead.'
    : 'Check the URL, or ask for the recipe text to be pasted in instead.');
  process.exit(4);
}

if (flags.includes('--links')) {
  const links = roundupLinks(html, url);
  console.log(`${links.length} in-site links on ${url}\n`);
  links.forEach(l => console.log(`${l.label.slice(0, 62).padEnd(64)} ${l.url}`));
  process.exit(0);
}

const found = findRecipes(html);
if (!found.length) {
  const title = txt((/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1]);
  console.error(`NO RECIPE DATA on this page.\n  title: ${title}`);
  console.error('  If this is a roundup of several recipes, re-run with --links.');
  process.exit(3);
}

const r = found[0];
const name = txt(r.name);
const ingredients = (r.recipeIngredient || r.ingredients || []).map(splitIngredient);
const steps = collectSteps(r.recipeInstructions).map(cleanStep).filter(Boolean);
const total = minutes(r.totalTime) || (minutes(r.prepTime) + minutes(r.cookTime));
const yieldRaw = Array.isArray(r.recipeYield) ? r.recipeYield[0] : r.recipeYield;
const serves = parseInt(String(yieldRaw || '').match(/\d+/)?.[0] || '4', 10);

if (flags.includes('--json')) {
  console.log(JSON.stringify({ name, url, total, serves, ingredients, steps }, null, 2));
  process.exit(0);
}

const recipe = {
  id: 'fam-add-' + slugify(name),
  name,
  emoji: pick(EMOJI, name, '🍽️'),
  category: pick(CATEGORY, name, 'dinner'),
  time: fmtTime(total),
  serves,
  difficulty: 'easy',
  tags: ['added'],
  source: url.split('?')[0],
  added: new Date().toISOString().slice(0, 10),
  ingredients,
  steps,
  fodmapNote: fodmapNote(ingredients),
};

console.log(JSON.stringify(recipe, null, 2));
console.error(`\n✓ ${name} — ${ingredients.length} ingredients, ${steps.length} steps, ${fmtTime(total) || 'no time given'}, serves ${serves}`);
