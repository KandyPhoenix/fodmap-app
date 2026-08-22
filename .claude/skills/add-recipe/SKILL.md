---
name: add-recipe
description: Add a recipe to the Our Table FODMAP app from a URL, a screenshot, or pasted text. Use whenever Kandy sends a recipe link or recipe text and wants it in the app — including bare URLs with no instructions, and roundup pages listing several recipes ("13 Slow Cooker Dinners"). Handles scraping, FODMAP assessment, duplicate checks, verification and shipping.
---

# Add a recipe to the app

Kandy sends recipes from her phone, iPad and PC. She usually just pastes a link.
Treat a bare recipe URL as "add this", no confirmation needed.

The finished job is a **merged PR**, not a local edit. She has said *"merge,
never wait"* — take it all the way through unless she says otherwise.

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
**402** to datacenter IPs; some others return **403**. This is the site
blocking us, not a bug, and no retry will fix it.

Say so plainly and offer the two ways forward:
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

Then load the app for real — a syntax check does not prove a recipe renders:

```bash
python3 -m http.server 8899 &
```

Drive it with Playwright (Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`):
open `http://localhost:8899/index.html`, click the **second** nav item to reach
the recipes tab, type part of the dish name into the search box, click the
card, and confirm ingredients, steps and the source link all render.

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
- Recipe shape: `{ id, name, emoji, category, time, serves, difficulty, tags,
  source, added, ingredients: [{qty, item}], steps: [string], fodmapNote }`
- `category` is one of `breakfast` `lunch` `dinner` `snacks` `desserts` `sides`.
- `added` (`YYYY-MM-DD`) is what puts it under the 🆕 Newest filter — don't omit it.
- Strip tracking parameters (`?fbclid=…`) from `source` before saving.
