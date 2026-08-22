#!/usr/bin/env node
// The "Send to Our Table" queue — recipes Kandy clipped from her phone, iPad
// or PC and hasn't had added yet. Written by clip.html, read from here.
//
//   node inbox.js           list what's queued
//   node inbox.js --urls    just the URLs, one per line (easy to loop over)
//   node inbox.js --clear   empty the queue (only after the recipes are IN)
//
// Exit codes: 0 ok · 1 request failed · 5 queue empty.

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

// Same URL clipped twice (two devices, or a re-tap) — keep the first.
const seen = new Set();
const items = values.map(v => {
  const f = (v.mapValue && v.mapValue.fields) || {};
  return {
    url: f.url ? f.url.stringValue : '',
    title: f.title ? f.title.stringValue : '',
    addedAt: f.addedAt ? f.addedAt.stringValue : '',
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
  if (i.addedAt) console.log(`    clipped ${i.addedAt.replace('T', ' ').slice(0, 16)} UTC`);
});
console.log('\nAdd them, then run:  node .claude/skills/add-recipe/inbox.js --clear');
