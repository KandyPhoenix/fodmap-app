# Our Table (FODMAP app) — working rules

## American kitchen

Kandy is American. Every recipe the app shows — and every recipe added to it —
uses American ingredient names and measurements:

- **Names:** yellow onion (not brown onion), green onion (not spring onion),
  cilantro (not fresh coriander), eggplant, zucchini, arugula, heavy cream,
  ground beef, shrimp, broiler (not grill), skillet (not frying pan).
- **Measures:** cups / tbsp / tsp, oz / lb, °F, inches. No grams,
  milliliters, °C or gas marks.

How it works: `usRecipe` in `js/recipe-import.js` converts British and metric
text. The app applies it to every recipe as it loads (`toUSRecipe` in
`js/app.js`), and the importer applies it when a recipe is added from a link,
so the data files can keep what each source wrote. Grams become cups only for
foods Americans measure that way, using published grams-per-cup figures; the
rest become oz / lb.

When writing or editing a recipe by hand, write it American from the start.

## Shipping

Bump `CACHE` in `sw.js` on every change that touches app files, or phones keep
serving the old version. Recipe additions follow `.claude/skills/add-recipe`.
