#!/usr/bin/env node
// The "Send to Our Table" queue — recipes Kandy clipped from her phone, iPad
// or PC and hasn't had added yet. Written by clip.html, read from here.
//
//   node inbox.js           list what's queued
//   node inbox.js --urls    just the URLs, one per line (easy to loop over)
//   node inbox.js --recipe <url>   print the recipe data the bookmarklet saved
//                                  for that clip (JSON-LD), if any — feed it to
//                                  scrape-recipe.js --ld when the site blocks us
//   node inbox.js --done <url>     take that one recipe off the queue (use this
//                                  after each recipe is IN, not --clear)
//   node inbox.js --clear          empty the whole queue (avoid — anything she
//                                  clipped while you worked is lost too)
//
// Exit codes: 0 ok · 1 request failed · 5 queue empty / not found.

const { execFileSync } = require('child_process');

const KEY = 'AIzaSyAxqkJiZL94gR3W5TBPTRNE5AdLyCDwb2g';
const DOC = 'projects/wellness-tracker-127/databases/(default)/documents/fodmap/inbox';
const URL_ = `https://firestore.googleapis.com/v1/${DOC}?key=${KEY}`;

function curl(args) {
  return execFileSync('curl', ['-sS', '--max-time', '25', ...args], { maxBuffer: 1 << 26 }).toString();
}

const flags = process.argv.slice(2);

if (flags.includes('--clear')) {
  try {
    curl(['-X', 'DELETE', URL_]);
    console.log('Queue cleared.');
  } catch (e) {
    console.error('Could not clear the queue: ' + e.message);
    process.exit(1);
  }
  process.exit(0);
}

let doc;
try {
  doc = JSON.parse(curl([URL_]));
} catch (e) {
  console.error('Could not read the queue: ' + e.message);
  process.exit(1);
}

if (doc.error && doc.error.status !== 'NOT_FOUND') {
  console.error(`Firestore error: ${doc.error.status} — ${doc.error.message}`);
  process.exit(1);
}

const values = (doc.fields && doc.fields.queue && doc.fields.queue.arrayValue
                && doc.fields.queue.arrayValue.values) || [];
const fieldsOf = v => (v.mapValue && v.mapValue.fields) || {};
const urlOf = v => (fieldsOf(v).url || {}).stringValue || '';

// --recipe <url>: the page's own recipe data, captured in her browser.
const recipeAt = flags.indexOf('--recipe');
if (recipeAt >= 0) {
  const want = flags[recipeAt + 1];
  const hit = values.find(v => urlOf(v) === want && fieldsOf(v).recipe);
  if (!hit) { console.error('No saved recipe data for that URL — scrape the page instead.'); process.exit(5); }
  console.log(fieldsOf(hit).recipe.stringValue);
  process.exit(0);
}

// --done <url>: remove every queue entry for that URL, and nothing else.
const doneAt = flags.indexOf('--done');
if (doneAt >= 0) {
  const want = flags[doneAt + 1];
  const hits = values.filter(v => urlOf(v) === want);
  if (!hits.length) { console.error('That URL is not in the queue.'); process.exit(5); }
  const body = JSON.stringify({ writes: [{ transform: { document: DOC,
    fieldTransforms: [{ fieldPath: 'queue', removeAllFromArray: { values: hits } }] } }] });
  try {
    const out = JSON.parse(execFileSync('curl', ['-sS', '--max-time', '25', '-X', 'POST',
      '-H', 'Content-Type: application/json', '--data-binary', '@-',
      `https://firestore.googleapis.com/v1/projects/wellness-tracker-127/databases/(default)/documents:commit?key=${KEY}`],
      { input: body }).toString());
    if (out.error) throw new Error(out.error.message);
  } catch (e) {
    console.error('Could not update the queue: ' + e.message);
    process.exit(1);
  }
  console.log(`Removed ${hits.length} queue entr${hits.length === 1 ? 'y' : 'ies'} for ${want}`);
  process.exit(0);
}

// Same URL clipped twice (two devices, or a re-tap) — keep the first.
const seen = new Set();
const items = values.map(v => {
  const f = (v.mapValue && v.mapValue.fields) || {};
  return {
    url: f.url ? f.url.stringValue : '',
    title: f.title ? f.title.stringValue : '',
    addedAt: f.addedAt ? f.addedAt.stringValue : '',
    hasRecipe: !!f.recipe,
  };
}).filter(i => i.url && !seen.has(i.url) && seen.add(i.url));

if (!items.length) {
  console.log('Nothing queued.');
  process.exit(5);
}

if (flags.includes('--urls')) {
  items.forEach(i => console.log(i.url));
  process.exit(0);
}

const dropped = values.length - items.length;
console.log(`${items.length} recipe${items.length === 1 ? '' : 's'} queued` +
            (dropped ? ` (${dropped} duplicate${dropped === 1 ? '' : 's'} collapsed)` : '') + ':\n');
items.forEach((i, n) => {
  console.log(`${String(n + 1).padStart(2)}. ${i.title || '(untitled)'}`);
  console.log(`    ${i.url}`);
  if (i.addedAt) console.log(`    clipped ${i.addedAt.replace('T', ' ').slice(0, 16)} UTC` +
                             (i.hasRecipe ? '  · recipe data saved (inbox.js --recipe <url>)' : ''));
});
console.log('\nAfter each one is in, run:  node .claude/skills/add-recipe/inbox.js --done <url>');
