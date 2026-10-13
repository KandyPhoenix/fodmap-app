// ─────────────────────────────────────────────────────────────
//  IRON GUIDE — the 🩸 Iron tab in 📚 Guides (added 2026-10-13)
//
//  Every way to get iron from food, with approximate mg per serving
//  (USDA FoodData Central values, rounded) and a low-FODMAP dot for the
//  serving shown. Heme iron (meat, fish) absorbs best; plant iron
//  absorbs far better with vitamin C at the same meal.
// ─────────────────────────────────────────────────────────────

const IRON_GUIDE = {
  need: 'Women 19–50 need about 18 mg of iron a day; after 50 it drops to 8 mg. Your body absorbs roughly 15–35% of heme iron (meat, fish, poultry) but only 2–20% of plant iron, so how you eat it matters as much as how much.',
  groups: [
    {
      label: '🥩 Heme iron: meat & poultry',
      blurb: 'Absorbs best, and eating it with plant iron helps you absorb the plant iron too.',
      items: [
        { emoji: '🍗', name: 'Chicken liver', mg: 9.9, serving: '3 oz cooked', fodmap: 'green', note: 'the richest everyday source' },
        { emoji: '🐄', name: 'Beef liver', mg: 5.2, serving: '3 oz cooked', fodmap: 'green', note: 'also very high in B12 and vitamin A, so once a week is plenty' },
        { emoji: '🥩', name: 'Lean beef (sirloin, flank, 90% ground)', mg: 2.2, serving: '3 oz cooked', fodmap: 'green', note: 'MIND allows up to 3 red-meat meals a week' },
        { emoji: '🦃', name: 'Turkey, dark meat', mg: 1.6, serving: '3 oz cooked', fodmap: 'green' },
        { emoji: '🍗', name: 'Chicken thigh', mg: 1.1, serving: '3 oz cooked', fodmap: 'green', note: 'about twice the iron of breast' },
        { emoji: '🐖', name: 'Pork tenderloin', mg: 0.9, serving: '3 oz cooked', fodmap: 'green' },
      ],
    },
    {
      label: '🐟 Heme iron: seafood',
      items: [
        { emoji: '🦪', name: 'Oysters', mg: 7.8, serving: '3 oz cooked', fodmap: 'green', note: 'also packed with zinc and B12' },
        { emoji: '🦪', name: 'Mussels', mg: 5.7, serving: '3 oz cooked (about 10–12)', fodmap: 'green' },
        { emoji: '🐚', name: 'Clams', mg: 2.5, serving: '3 oz cooked or canned', fodmap: 'green' },
        { emoji: '🐟', name: 'Sardines, canned', mg: 2.7, serving: '1 can (3.75 oz)', fodmap: 'green', note: 'the bones add calcium, so pair with vitamin C' },
        { emoji: '🐟', name: 'Light tuna, canned', mg: 1.3, serving: '3 oz', fodmap: 'green' },
        { emoji: '🐟', name: 'Salmon or trout', mg: 0.5, serving: '3 oz cooked', fodmap: 'green', note: 'low in iron but great for the brain; pair with greens' },
      ],
    },
    {
      label: '🫘 Plant iron: legumes & soy',
      blurb: 'Big iron, but always add vitamin C. Portions shown are the low-FODMAP limits.',
      items: [
        { emoji: '⬜', name: 'Firm tofu', mg: 3.4, serving: '½ cup (4 oz), pressed', fodmap: 'green', note: 'firm only; silken tofu is high FODMAP' },
        { emoji: '🫘', name: 'Lentils, canned & rinsed', mg: 2.0, serving: '½ cup', fodmap: 'green', note: 'canned and rinsed keeps them low FODMAP' },
        { emoji: '🟫', name: 'Tempeh', mg: 2.0, serving: '½ cup (3 oz)', fodmap: 'green' },
        { emoji: '🫛', name: 'Edamame, shelled', mg: 1.8, serving: '½ cup', fodmap: 'green' },
        { emoji: '🧆', name: 'Chickpeas, canned & rinsed', mg: 1.2, serving: '¼ cup', fodmap: 'green', note: 'more than ¼ cup gets high FODMAP' },
      ],
    },
    {
      label: '🥬 Plant iron: greens & vegetables',
      items: [
        { emoji: '🥬', name: 'Spinach, cooked', mg: 3.2, serving: '½ cup', fodmap: 'green', note: 'oxalates block some of it, so squeeze on lemon' },
        { emoji: '🥬', name: 'Swiss chard, cooked', mg: 2.0, serving: '½ cup', fodmap: 'green' },
        { emoji: '🥔', name: 'Potato with skin, baked', mg: 1.9, serving: '1 medium', fodmap: 'green', note: 'and it brings its own vitamin C' },
        { emoji: '🍅', name: 'Canned tomatoes', mg: 1.6, serving: '½ cup', fodmap: 'green', note: 'iron and vitamin C in one; better still in a cast-iron pan' },
        { emoji: '🥬', name: 'Bok choy, cooked', mg: 0.9, serving: '½ cup', fodmap: 'green' },
        { emoji: '🥬', name: 'Kale, cooked', mg: 0.6, serving: '½ cup', fodmap: 'green', note: 'low iron, but its vitamin C helps the rest of the meal' },
      ],
    },
    {
      label: '🌾 Plant iron: grains, seeds & extras',
      items: [
        { emoji: '🥣', name: 'Fortified breakfast cereal', mg: 8, serving: '1 serving (check the label: 4–18 mg)', fodmap: 'yellow', note: 'choose corn or rice based with no inulin, chicory root or honey' },
        { emoji: '🍫', name: 'Dark chocolate, 70–85%', mg: 3.4, serving: '1 oz (30 g)', fodmap: 'green', note: 'counts as a sweet on MIND' },
        { emoji: '🍚', name: 'Quinoa, cooked', mg: 2.8, serving: '1 cup', fodmap: 'green' },
        { emoji: '🌱', name: 'Hemp seeds', mg: 2.4, serving: '3 tbsp', fodmap: 'green' },
        { emoji: '🎃', name: 'Pumpkin seeds (pepitas)', mg: 1.2, serving: '2 tbsp', fodmap: 'green', note: 'sprinkle on oats, salads and soups' },
        { emoji: '🥣', name: 'Rolled oats', mg: 1.7, serving: '½ cup dry', fodmap: 'green' },
        { emoji: '🥄', name: 'Tahini', mg: 1.3, serving: '1 tbsp', fodmap: 'green' },
        { emoji: '🥚', name: 'Egg', mg: 0.9, serving: '1 large', fodmap: 'green', note: 'a protein in the yolk blocks some of it, so pair with vitamin C' },
      ],
    },
    {
      label: '🔴 High in iron but high FODMAP',
      blurb: 'Good iron, but likely to trigger symptoms in these portions. Test them during reintroduction before relying on them.',
      items: [
        { emoji: '🫘', name: 'White, kidney & black beans', mg: 3.5, serving: '½ cup', fodmap: 'red' },
        { emoji: '🥜', name: 'Cashews', mg: 1.9, serving: '1 oz', fodmap: 'red' },
        { emoji: '🍑', name: 'Dried apricots & figs', mg: 1.0, serving: '¼ cup', fodmap: 'red' },
        { emoji: '🍯', name: 'Blackstrap molasses', mg: 3.6, serving: '1 tbsp', fodmap: 'yellow', note: 'small amounts may be tolerated' },
      ],
    },
  ],
  boosters: [
    '🍊 Vitamin C at the same meal can double or triple plant-iron absorption. Low-FODMAP picks: red bell pepper, strawberries, kiwi, orange, tomato, broccoli heads, pineapple, lemon or lime juice.',
    '🥩 The "meat factor": a little meat, fish or poultry helps you absorb the plant iron in the same meal.',
    '🍳 Cooking acidic foods like tomato sauce in a cast-iron pan adds iron to the food.',
    '🍞 Sourdough fermentation, plus soaking or sprouting grains and legumes, breaks down phytates that block iron.',
  ],
  blockers: [
    '☕ Coffee and tea: keep them at least 1 hour away from iron-rich meals and iron pills.',
    '🥛 Calcium (dairy, calcium-set foods, calcium supplements, antacids like Tums): keep them about 2 hours away.',
    '💊 Zinc supplements and PPIs or antacids (omeprazole, Pepcid) lower iron absorption.',
    '🌾 High-bran cereals and lots of raw spinach: their phytates and oxalates bind iron, so pair them with vitamin C.',
  ],
  sampleDay: {
    title: 'A sample 18+ mg day, all low FODMAP',
    meals: [
      { slot: '🌅 Breakfast', text: '½ cup oats + 3 tbsp hemp seeds + 2 tbsp pepitas + 5 strawberries', mg: 5.3 },
      { slot: '🥗 Lunch', text: '½ cup canned lentils + ½ cup cooked spinach over 1 cup quinoa, lemon dressing, red pepper', mg: 8.0 },
      { slot: '🍴 Dinner', text: '3 oz lean sirloin + baked potato with skin + tomato salad', mg: 4.1 },
      { slot: '🥕 Snack', text: '1 oz dark chocolate (70–85%) + a kiwi', mg: 3.4 },
    ],
  },
  note: 'Food helps, but it usually can\'t fix a real deficiency alone, and your low iron still needs its cause found. Keep taking iron the way your doctor directs, and don\'t add extra supplements without asking.',
};
