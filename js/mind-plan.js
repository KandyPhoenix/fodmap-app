// ─────────────────────────────────────────────────────────────
//  MIND DIET — the 🧠 MIND Diet page (added 2026-10-13)
//
//  Source: SuperAge, "The MIND diet slows the physical aging of the
//  brain itself" (JNNP 2026, Framingham Offspring cohort, 12 years of MRIs).
//  MIND_DIET holds the rules shown on the page. MIND_PLAN is a 31-day
//  calendar of breakfast / lunch / dinner / snack recipe ids from
//  js/mind-*.js; the page scores each week from every recipe's `mind`
//  servings and can load a week (or the whole month) into the planner.
// ─────────────────────────────────────────────────────────────

const MIND_DIET = {
  source: 'https://superage.com/the-mind-diet-slows-the-physical-aging-of-the-brain-itself/',
  intro: 'MIND (Mediterranean-DASH Intervention for Neurodegenerative Delay) blends the Mediterranean and DASH diets around the foods most linked to a healthy brain. It is scored 0 to 15: 10 food groups to eat more of and 5 to limit, with 1 point for hitting a target, ½ for getting close and 0 for missing it.',
  findings: [
    'In 1,647 adults followed with brain MRIs for 12 years, higher MIND scores went with slower grey-matter loss and slower growth of the brain\'s fluid spaces, both signs of brain aging.',
    'Every 3 extra points was linked to about 20% less grey-matter decline, roughly 2.5 years of slower brain aging.',
    'Berries and poultry had the strongest links to a healthier brain. Sweets and fried food went with faster shrinking of the hippocampus, the memory center.',
    'The typical score was 6.8. Going from about 6 to 9 is a realistic target, and people who were also physically active benefited most.',
  ],
  // key = the recipe `mind` field that counts toward it; per: 'day' | 'week'
  // full / half = thresholds for 1 point / ½ point (limits use max values).
  groups: [
    { key: 'grain',   emoji: '🌾', label: 'Whole grains',          target: '3+ a day',        per: 'day',  full: 3, half: 1 },
    { key: 'greens',  emoji: '🥬', label: 'Leafy greens',          target: '6+ a week',       per: 'week', full: 6, half: 3 },
    { key: 'veg',     emoji: '🥕', label: 'Other vegetables',      target: '1+ a day',        per: 'day',  full: 1, half: 5 / 7 },
    { key: 'nuts',    emoji: '🥜', label: 'Nuts',                  target: '5+ a week',       per: 'week', full: 5, half: 1 },
    { key: 'beans',   emoji: '🫘', label: 'Beans & lentils',       target: '4+ meals a week', per: 'week', full: 4, half: 1 },
    { key: 'berries', emoji: '🍓', label: 'Berries',               target: '2+ a week',       per: 'week', full: 2, half: 1 },
    { key: 'poultry', emoji: '🍗', label: 'Poultry',               target: '2+ meals a week', per: 'week', full: 2, half: 1 },
    { key: 'fish',    emoji: '🐟', label: 'Fish',                  target: '1+ meal a week',  per: 'week', full: 1, half: 1 },
    { key: 'oil',     emoji: '🫒', label: 'Olive oil',             target: 'Your main fat',   per: 'fixed' },
    { key: 'redMeat', emoji: '🥩', label: 'Red meat',              target: 'Under 4 a week',  per: 'week', limit: true, full: 3, half: 6 },
    { key: 'sweets',  emoji: '🧁', label: 'Pastries & sweets',     target: 'Under 5 a week',  per: 'week', limit: true, full: 4, half: 6 },
    { key: 'cheese',  emoji: '🧀', label: 'Cheese',                target: 'Under 1 a week',  per: 'week', limit: true, full: 0, half: 6 },
    { key: 'fried',   emoji: '🍟', label: 'Fried & fast food',     target: 'Under 1 a week',  per: 'week', limit: true, full: 0, half: 3 },
    { key: 'butter',  emoji: '🧈', label: 'Butter & margarine',    target: 'Under 1 tbsp a day', per: 'week', limit: true, full: 6, half: 14 },
    { key: 'wine',    emoji: '🍷', label: 'Wine',                  target: 'Optional, up to 1 glass a day. Not needed, and this plan leaves it out, so it is scored out of 14.', per: 'skip' },
  ],
  forYou: [
    '🍀 These are the standard MIND recipes. Each one has a Low-FODMAP version button in the recipe that swaps in garlic-infused oil, scallion greens, safe bean portions and lactose-free dairy when you need it.',
    '🩸 Iron: recipes tagged iron-boost pair iron foods (lentils, tofu, greens, pumpkin seeds, lean beef, mussels, sardines) with vitamin C (peppers, tomato, citrus, strawberries) to absorb more. MIND allows up to 3 red-meat meals a week, so a few lean-beef dinners are built in.',
    '☕ Keep coffee away from your meals, especially the iron-boost ones, by about an hour.',
    '🌾 Gluten stays in (spelt sourdough, oats) until your celiac test is done. Cutting it out first can make that test falsely negative.',
    '🧀 No cheese and no butter, olive oil is the fat, and nothing is deep-fried.',
  ],
};

// 31 days: dinners rotate poultry / beans / fish / lean red meat / poultry / fish / beans (Mon–Sun);
// Tue, Fri and Sun lunches are the night before's leftovers.
const MIND_PLAN = [
  {"day":1,"breakfast":"mind-bf-spinach-egg-quinoa-bowl","lunch":"mind-lu-lentil-spinach-quinoa-bowl","dinner":"mind-dn-lemon-herb-chicken-sheet-pan-quinoa","snack":"mind-sn-strawberry-pb-rice-cakes"},
  {"day":2,"breakfast":"mind-bf-blueberry-walnut-overnight-oats","lunch":"mind-dn-lemon-herb-chicken-sheet-pan-quinoa","lunchNote":"Leftovers from last night","dinner":"mind-dn-lentil-spinach-tomato-stew-brown-rice","snack":"mind-sn-rosemary-pepita-popcorn"},
  {"day":3,"breakfast":"mind-bf-strawberry-kiwi-buckwheat-porridge","lunch":"mind-lu-lemon-chicken-kale-rice-soup","dinner":"mind-dn-miso-maple-salmon-broccoli-sheet-pan","snack":"mind-sn-smoky-chickpea-pepita-crunch"},
  {"day":4,"breakfast":"mind-bf-lentil-potato-kale-hash","lunch":"mind-lu-salmon-edamame-sushi-bowl","dinner":"mind-dn-orange-sirloin-broccoli-soba","snack":"mind-sn-veggie-sticks-lemon-dill-dip"},
  {"day":5,"breakfast":"mind-bf-chickpea-spinach-shakshuka","lunch":"mind-dn-orange-sirloin-broccoli-soba","lunchNote":"Leftovers from last night","dinner":"mind-dn-smoky-turkey-corn-tortilla-tacos","snack":"mind-sn-blueberry-walnut-yogurt-cup"},
  {"day":6,"breakfast":"mind-bf-peanut-butter-strawberry-spelt-toast","lunch":"mind-lu-chicken-chickpea-shawarma-tacos","dinner":"mind-dn-mussels-tomato-fennel-spelt-sourdough","snack":"mind-sn-dark-chocolate-almond-strawberries"},
  {"day":7,"breakfast":"mind-bf-chard-tomato-egg-scramble-toast","lunch":"mind-lu-sardine-arugula-quinoa-salad","dinner":"mind-dn-moroccan-chickpea-squash-stew-quinoa","snack":"mind-sn-maple-cinnamon-seed-oat-bites"},
  {"day":8,"breakfast":"mind-bf-make-ahead-quinoa-egg-muffins","lunch":"mind-lu-tuna-lentil-nicoise-bowl","dinner":"mind-dn-ginger-chicken-bok-choy-stir-fry","snack":"mind-sn-sesame-lime-edamame-peppers"},
  {"day":9,"breakfast":"mind-bf-raspberry-almond-quinoa-porridge","lunch":"mind-dn-ginger-chicken-bok-choy-stir-fry","lunchNote":"Leftovers from last night","dinner":"mind-dn-sesame-tofu-edamame-brown-rice-bowls","snack":"mind-sn-tamari-almond-seed-mix"},
  {"day":10,"breakfast":"mind-bf-tofu-edamame-breakfast-tacos","lunch":"mind-lu-shrimp-rice-paper-rolls","dinner":"mind-dn-seared-trout-lemon-dill-millet","snack":"mind-sn-raspberry-hemp-chia-pudding"},
  {"day":11,"breakfast":"mind-bf-green-strawberry-oat-smoothie","lunch":"mind-lu-turkey-lentil-burrito-bowl","dinner":"mind-dn-lean-beef-quinoa-stuffed-peppers","snack":"mind-sn-strawberry-pb-rice-cakes"},
  {"day":12,"breakfast":"mind-bf-miso-oats-bok-choy-egg","lunch":"mind-dn-lean-beef-quinoa-stuffed-peppers","lunchNote":"Leftovers from last night","dinner":"mind-dn-turkey-meatball-kale-rice-soup","snack":"mind-sn-rosemary-pepita-popcorn"},
  {"day":13,"breakfast":"mind-bf-spinach-egg-quinoa-bowl","lunch":"mind-lu-sesame-tofu-edamame-soba","dinner":"mind-dn-sardine-tomato-kale-polenta","snack":"mind-sn-smoky-chickpea-pepita-crunch"},
  {"day":14,"breakfast":"mind-bf-blueberry-walnut-overnight-oats","lunch":"mind-dn-sardine-tomato-kale-polenta","lunchNote":"Leftovers from last night","dinner":"mind-dn-maple-dijon-tempeh-lentil-buckwheat-bowls","snack":"mind-sn-veggie-sticks-lemon-dill-dip"},
  {"day":15,"breakfast":"mind-bf-strawberry-kiwi-buckwheat-porridge","lunch":"mind-lu-chickpea-kale-tomato-quinoa-soup","dinner":"mind-dn-chicken-souvlaki-quinoa-bowls","snack":"mind-sn-blueberry-walnut-yogurt-cup"},
  {"day":16,"breakfast":"mind-bf-lentil-potato-kale-hash","lunch":"mind-dn-chicken-souvlaki-quinoa-bowls","lunchNote":"Leftovers from last night","dinner":"mind-dn-lentil-spinach-tomato-stew-brown-rice","snack":"mind-sn-dark-chocolate-almond-strawberries"},
  {"day":17,"breakfast":"mind-bf-chickpea-spinach-shakshuka","lunch":"mind-lu-chicken-strawberry-spinach-quinoa","dinner":"mind-dn-chili-lime-cod-tacos-pineapple-salsa","snack":"mind-sn-maple-cinnamon-seed-oat-bites"},
  {"day":18,"breakfast":"mind-bf-peanut-butter-strawberry-spelt-toast","lunch":"mind-lu-smoked-salmon-wild-rice-salad","dinner":"mind-dn-cumin-orange-pork-tenderloin-wild-rice","snack":"mind-sn-sesame-lime-edamame-peppers"},
  {"day":19,"breakfast":"mind-bf-chard-tomato-egg-scramble-toast","lunch":"mind-dn-cumin-orange-pork-tenderloin-wild-rice","lunchNote":"Leftovers from last night","dinner":"mind-dn-peanut-chicken-brown-rice-noodles","snack":"mind-sn-tamari-almond-seed-mix"},
  {"day":20,"breakfast":"mind-bf-make-ahead-quinoa-egg-muffins","lunch":"mind-lu-lentil-spinach-quinoa-bowl","dinner":"mind-dn-ginger-shrimp-pineapple-brown-rice","snack":"mind-sn-raspberry-hemp-chia-pudding"},
  {"day":21,"breakfast":"mind-bf-raspberry-almond-quinoa-porridge","lunch":"mind-dn-ginger-shrimp-pineapple-brown-rice","lunchNote":"Leftovers from last night","dinner":"mind-dn-moroccan-chickpea-squash-stew-quinoa","snack":"mind-sn-strawberry-pb-rice-cakes"},
  {"day":22,"breakfast":"mind-bf-tofu-edamame-breakfast-tacos","lunch":"mind-lu-lemon-chicken-kale-rice-soup","dinner":"mind-dn-lemony-chicken-chard-brown-rice-penne","snack":"mind-sn-rosemary-pepita-popcorn"},
  {"day":23,"breakfast":"mind-bf-green-strawberry-oat-smoothie","lunch":"mind-dn-lemony-chicken-chard-brown-rice-penne","lunchNote":"Leftovers from last night","dinner":"mind-dn-sesame-tofu-edamame-brown-rice-bowls","snack":"mind-sn-smoky-chickpea-pepita-crunch"},
  {"day":24,"breakfast":"mind-bf-miso-oats-bok-choy-egg","lunch":"mind-lu-salmon-edamame-sushi-bowl","dinner":"mind-dn-miso-maple-salmon-broccoli-sheet-pan","snack":"mind-sn-veggie-sticks-lemon-dill-dip"},
  {"day":25,"breakfast":"mind-bf-spinach-egg-quinoa-bowl","lunch":"mind-lu-chicken-chickpea-shawarma-tacos","dinner":"mind-dn-orange-sirloin-broccoli-soba","snack":"mind-sn-blueberry-walnut-yogurt-cup"},
  {"day":26,"breakfast":"mind-bf-blueberry-walnut-overnight-oats","lunch":"mind-dn-orange-sirloin-broccoli-soba","lunchNote":"Leftovers from last night","dinner":"mind-dn-lemon-herb-chicken-sheet-pan-quinoa","snack":"mind-sn-dark-chocolate-almond-strawberries"},
  {"day":27,"breakfast":"mind-bf-strawberry-kiwi-buckwheat-porridge","lunch":"mind-lu-sardine-arugula-quinoa-salad","dinner":"mind-dn-mussels-tomato-fennel-spelt-sourdough","snack":"mind-sn-maple-cinnamon-seed-oat-bites"},
  {"day":28,"breakfast":"mind-bf-lentil-potato-kale-hash","lunch":"mind-lu-tuna-lentil-nicoise-bowl","dinner":"mind-dn-maple-dijon-tempeh-lentil-buckwheat-bowls","snack":"mind-sn-sesame-lime-edamame-peppers"},
  {"day":29,"breakfast":"mind-bf-chickpea-spinach-shakshuka","lunch":"mind-lu-shrimp-rice-paper-rolls","dinner":"mind-dn-smoky-turkey-corn-tortilla-tacos","snack":"mind-sn-tamari-almond-seed-mix"},
  {"day":30,"breakfast":"mind-bf-peanut-butter-strawberry-spelt-toast","lunch":"mind-dn-smoky-turkey-corn-tortilla-tacos","lunchNote":"Leftovers from last night","dinner":"mind-dn-lentil-spinach-tomato-stew-brown-rice","snack":"mind-sn-raspberry-hemp-chia-pudding"},
  {"day":31,"breakfast":"mind-bf-chard-tomato-egg-scramble-toast","lunch":"mind-lu-turkey-lentil-burrito-bowl","dinner":"mind-dn-seared-trout-lemon-dill-millet","snack":"mind-sn-strawberry-pb-rice-cakes"}
];
