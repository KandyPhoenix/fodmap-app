#!/usr/bin/env node
// Pull a recipe off a web page and print it in the shape js/added-recipes.js
// wants. Reads the page's own structured recipe data (JSON-LD) rather than
// guessing from the prose, so quantities come out exact.
//
//   node scrape-recipe.js <url>            → one recipe object
//   node scrape-recipe.js <url> --links    → treat it as a roundup, list the
//                                            recipe pages it links to
//   node scrape-recipe.js <url> --json     → raw scraped data, no formatting
//   node scrape-recipe.js <url> --ld <file> → use recipe JSON-LD saved by the
//                                            clipper (inbox.js --recipe) instead
//                                            of fetching — for sites that block us
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

// Parsing lives in js/recipe-import.js so the app's "Import from link"
// button and this script always read a recipe the same way.
const path = require('path');
const { txt, findRecipes, collectSteps, cleanStep, minutes, fmtTime, splitIngredient,
  toAppRecipe } = require(path.join(__dirname, '..', '..', '..', 'js', 'recipe-import.js'));


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

const ldAt = flags.indexOf('--ld');
const { body: html, status } = ldAt >= 0
  ? { body: `<script type="application/ld+json">${require('fs').readFileSync(flags[ldAt + 1], 'utf8')}</script>`, status: 200 }
  : fetchPage(url);
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

const recipe = toAppRecipe(r, url, new Date().toISOString().slice(0, 10));

console.log(JSON.stringify(recipe, null, 2));
console.error(`\n✓ ${name} — ${ingredients.length} ingredients, ${steps.length} steps, ${fmtTime(total) || 'no time given'}, serves ${serves}`);
