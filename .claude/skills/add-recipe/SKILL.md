---
name: add-recipe
description: Add a recipe to the Our Table FODMAP app from a URL, a screenshot, pasted text, or the "Send to Our Table" clipper queue. Use whenever Kandy sends a recipe link or recipe text and wants it in the app — including bare URLs with no instructions, roundup pages listing several recipes ("13 Slow Cooker Dinners"), and any request to add her queued, clipped or saved recipes. Handles scraping, FODMAP assessment, duplicate checks, verification and shipping.
---

# Add a recipe to the app

Kandy sends recipes from her phone, iPad and PC. She usually just pastes a link.
Treat a bare recipe URL as "add this", no confirmation needed.

The finished job is a **merged PR**, not a local edit. She has said *"merge,
never wait"* — take it all the way through unless she says otherwise.

## 0. The clipper queue

She also has a one-tap clipper (`clip.html`, the "Send to Our Table" bookmarklet
and Android share target) that queues recipes for later. When she says *"add my
queued recipes"*, *"add my clipped recipes"* or similar:

```bash
node .claude/skills/add-recipe/inbox.js          # list what's waiting
node .claude/skills/add-recipe/inbox.js --urls   # just URLs, to loop over
```

Work through the queue exactly as if she'd pasted each link. Clips made with
the current bookmarklet also carry the page's own recipe data (the listing says
*recipe data saved*) — use it, it works even on sites that block us:

```bash
node .claude/skills/add-recipe/inbox.js --recipe "<url>" > /tmp/ld.json
node .claude/skills/add-recipe/scrape-recipe.js "<url>" --ld /tmp/ld.json
```

**Once a recipe is added, verified and pushed, take just that one off:**

```bash
node .claude/skills/add-recipe/inbox.js --done "<url>"
```

Never use `--clear` — it deletes the whole queue, including anything she
clipped while you were working. And never remove an item before it's in: the
queue is the only record of what she wanted. Exit code 5 means nothing is
queued; say so and stop.

She can also add queued recipes herself: each item in `clip.html` has an
**Add to my recipes** button, and the Add My Recipe form has an
**Import from a link** box. Those save into her own recipes (synced), not
`js/added-recipes.js`. Check her user recipes for a duplicate before adding.

## 1. Get the recipe

```bash
node .claude/skills/add-recipe/scrape-recipe.js "<url>"
```

Prints a ready-to-paste recipe object, and a one-line summary on stderr. It
reads the page's own structured recipe data, so quantities are exact — never
retype a recipe by hand when this works.

**Exit codes:**

| Code | Meaning | What to do |
|---|---|---|
| 0 | Got it | Continue to step 2 |
| 3 | Page has no recipe data | Might be a roundup — re-run with `--links` |
| 4 | Fetch failed (402/403/404) | See *When the page won't load* |

### Roundup pages

A page like "13+ Dump and Go Slow Cooker Recipes" is a list, not a recipe.
`--links` lists what it links to:

```bash
node .claude/skills/add-recipe/scrape-recipe.js "<url>" --links
```

Pick out the actual recipe links (ignore nav, author, "similar posts",
category pages), then scrape each one individually. **Add every recipe on the
page unless she says otherwise** — she sent the roundup because she wants the
set. Say how many you found before you start.

### When the page won't load

Allrecipes, Simply Recipes, Real Simple and other People Inc. sites return
**402** to datacenter IPs; others (Budget Bytes, The Mediterranean Dish) return
**403** to curl even from her home PC — bot protection, not a bug, and no retry
will fix it.

First try a real browser: open the page in the Browser pane, read the JSON-LD
Recipe out of `script[type="application/ld+json"]` with javascript_tool, save it
to a file, and run `scrape-recipe.js "<url>" --ld <file>`. Keep
`recipeInstructions` as HowToStep objects — a bare list of strings gets split
into sentences.

If the browser can't get it either, say so plainly and offer the two ways forward:
1. She pastes the ingredients and method in (best — real quantities), or
2. You write a solid version from the dish name, clearly labelled as such.

Never silently invent a recipe and present it as the page's.

## 2. Check it isn't already there

```bash
grep -ri "<dish name>" js/*.js | head
```

The cookbook holds ~750 recipes and already had a duplicate problem. If a
close match exists, look at both:

- **Same recipe, hers is thinner** (a title-derived guess, no source) → replace
  it, and move any source link onto the survivor so it isn't lost.
- **Genuinely different recipe, same name** → keep both, and give each a
  source suffix: `Lemon Bars (Taste of Home)` / `Lemon Bars (Genius Kitchen)`.
  Never leave two cards with the identical name.
- **Already there properly** → say so and stop. Don't add a second copy.

## 3. Review the scraped output before pasting

The scraper is good but not perfect. Read what it produced:

- **Ingredient splits.** `{qty, item}` should read naturally. Watch for a
  quantity swallowing part of the ingredient name.
- **Steps.** Should be discrete actions, not one wall of text.
- **Name.** Strip web-clipper junk — trailing site names (`… at
  www.foodnetwork.com`), stray `~` or `!`, "Best Ever" SEO padding.
- **Emoji and category** are guesses from the title. Fix them if wrong.
- **`serves`** is parsed from the first number in the yield string; check it
  isn't nonsense like `serves 1` for a family bake.

## 4. FODMAP note

The scraper flags high-FODMAP ingredients off the actual ingredient list.
**Read the note and sanity-check it** — this is the whole point of the app.

The trap worth knowing: packet mixes and condensed soups (ranch seasoning,
gravy mix, taco seasoning, onion soup mix, cream-of soups) are loaded with
onion and garlic powder even when neither appears in the ingredient list. The
scraper catches those, but check anything unusual it may have missed.

If a recipe genuinely is low-FODMAP, say so rather than leaving the generic
line — and consider whether it belongs in the FODMAP collection instead (see
below).

## 5. Add it

Append the object to the `ADDED_RECIPES` array in `js/added-recipes.js`.

**Where things live:**

| Kind | File | Tag |
|---|---|---|
| Anything Kandy sends in | `js/added-recipes.js` | no `fodmap` tag → Family filter |
| A genuinely low-FODMAP recipe | `KANDY_RECIPES` in `js/kandy-recipes.js` | gets `fodmap` tag automatically |
| A themed batch (10+ from one roundup) | its own `js/<theme>.js` | plus its own tag, e.g. `slow cooker` |

A new file must be added to **both** `index.html` (before `side-dishes.js`)
and the `ASSETS` list in `sw.js`.

**Always bump `CACHE` in `sw.js`** (`fodmap-vNN` → `NN+1`). Without it the
service worker keeps serving the old files and the recipe never shows up on
her phone.

## 6. Verify before shipping

```bash
node --check js/added-recipes.js
```

Then load the app for real — a syntax check does not prove a recipe renders.

**Test from a copy with sync switched off.** A fresh browser has no local
data, so `js/firebase-sync.js` merges its defaults into her real Firestore doc
and pushes them. Copy the repo (without `.git`) to a scratch folder, replace
that copy's `js/firebase-sync.js` with a one-line stub, and serve the copy:

```bash
py -3.14 -m http.server 8899 --bind 127.0.0.1     # Windows; python3 elsewhere
```

Open `http://127.0.0.1:8899/index.html` in the Browser pane (unregister its
service worker first if an older build is cached), click **Recipes**, type part
of the dish name into the search box, click the card, and confirm ingredients,
steps and the source link all render.

Check for regressions in the loaded set:

- total recipe count moved by exactly the number added
- no duplicate names introduced
- no page errors (`pageerror`)

Note: `index.html` opens on the **planner** tab, and the app has ~1100 hidden
food-guide cards, so a bare `.card` selector matches the wrong thing. Select
the recipe by its exact text.

## 7. Ship it

Branch from current `master` (never reuse a branch whose PR was merged):

```bash
git fetch origin master && git checkout -B claude/add-<slug> origin/master
```

Commit, push, open the PR, then merge it — squash, matching this repo's
convention. Tell her what landed, what the FODMAP verdict was, and anything
you had to judge (a renamed duplicate, a paywalled source, a guessed serving
size). Mention the recipe count so she can see it took.

## Reference

- `scrape-recipe.js --json` dumps raw scraped data without app formatting.
- All parsing (ingredient split, FODMAP flags, emoji/category) lives in
  `js/recipe-import.js`, shared with the app's Import button — fix it there
  and both get the fix.
- The clipper queue lives in Firestore at `fodmap/inbox` (project
  `wellness-tracker-127`), separate from the app's own `fodmap/data` sync doc so
  a clip can never race the meal planner. `clip.html` writes it, `inbox.js`
  reads it.
- Recipe shape: `{ id, name, emoji, category, time, serves, difficulty, tags,
  source, added, ingredients: [{qty, item}], steps: [string], fodmapNote }`
- `category` is one of `breakfast` `lunch` `dinner` `snacks` `desserts` `sides`.
- `added` (`YYYY-MM-DD`) is what puts it under the 🆕 Newest filter — don't omit it.
- Strip tracking parameters (`?fbclid=…`) from `source` before saving.
