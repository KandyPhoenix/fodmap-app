// Recipes from Kandy's weekly meal plan — marked isCustom so they show as "MY RECIPE" (amber cards)
const KANDY_RECIPES = [

  // ─── MONDAY ─────────────────────────────────────────────
  {
    id: 'kandy-mon-breakfast',
    name: 'Scrambled Eggs & Bacon',
    emoji: '🥓',
    category: 'breakfast',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein', 'dairy-free option'],
    ingredients: [
      { qty: '5–6',      item: 'large eggs' },
      { qty: '4 strips', item: 'bacon' },
      { qty: '1 tbsp',   item: 'butter' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '4',        item: 'plain rice cakes (2 per person), to serve' },
    ],
    steps: [
      'Cook bacon in skillet over medium heat until crispy, 6–8 min. Set aside on paper towels.',
      'Crack eggs into bowl and whisk with salt and pepper.',
      'Melt butter in skillet over medium-low heat.',
      'Pour in eggs and gently fold with spatula until just set — do not overcook.',
      'Serve eggs alongside bacon and rice cakes.',
    ],
    fodmapNote: 'Eggs and bacon are naturally FODMAP-free. Rice cakes replace wheat toast to avoid fructans. Check bacon packaging for added onion or garlic seasoning.',
    isCustom: true,
  },

  {
    id: 'kandy-mon-lunch',
    name: 'Chicken & Rice Bowl',
    emoji: '🍚',
    category: 'lunch',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '1.5 cups', item: 'cooked white rice, warmed' },
      { qty: '1.5 cups', item: 'cooked chicken, shredded or sliced' },
      { qty: '1 medium', item: 'cucumber, thinly sliced' },
      { qty: '1 large',  item: 'carrot, peeled and shredded or cut into matchsticks' },
      { qty: '2 tbsp',   item: 'olive oil' },
      { qty: '1',        item: 'lemon, juiced' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Divide warm rice between two bowls.',
      'Top each with chicken, cucumber, and carrot.',
      'Drizzle each bowl with 1 tbsp olive oil and lemon juice.',
      'Season with salt and pepper. Serve immediately.',
    ],
    fodmapNote: 'All ingredients are naturally FODMAP-free. Use rotisserie chicken (plain, no seasoning). Great for meal prep — keep components separate and assemble when eating.',
    isCustom: true,
  },

  {
    id: 'kandy-mon-dinner',
    name: 'Baked Salmon with Roasted Potatoes & Green Beans',
    emoji: '🐟',
    category: 'dinner',
    time: '35 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '2',        item: 'salmon fillets (6 oz each)' },
      { qty: '2 medium', item: 'potatoes, skins on, cubed into 1-inch pieces' },
      { qty: '2½ cups',  item: 'fresh green beans, trimmed' },
      { qty: '3 tbsp',   item: 'olive oil, divided' },
      { qty: '1',        item: 'lemon, sliced' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Preheat oven to 400°F (200°C).',
      'Toss the skin-on potato cubes with 1.5 tbsp olive oil, salt, and pepper. Spread on baking sheet.',
      'Roast potatoes 10 min, then push to one side.',
      'Add green beans to the other side, toss with remaining olive oil, salt, and pepper.',
      'Place salmon fillets on pan and top each with a lemon slice.',
      'Bake everything together 12–15 min until salmon flakes easily and potatoes are golden.',
    ],
    fodmapNote: 'This meal is completely FODMAP-free. Potatoes and green beans are both safe. Make sure salmon is plain with no pre-added marinades or seasonings containing garlic or onion. Leaving the skins on the potatoes and keeping a generous serve of green beans adds extra fibre while staying low FODMAP.',
    isCustom: true,
  },

  // ─── TUESDAY ────────────────────────────────────────────
  {
    id: 'kandy-tue-breakfast',
    name: 'GF Oatmeal with Blueberries',
    emoji: '🫐',
    category: 'breakfast',
    time: '10 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    ingredients: [
      { qty: '1.5 cups', item: 'gluten-free rolled oats' },
      { qty: '2.5 cups', item: 'unsweetened almond milk' },
      { qty: '1 cup',    item: 'fresh or frozen blueberries' },
      { qty: '2 tbsp',   item: 'maple syrup' },
      { qty: 'pinch',    item: 'salt' },
    ],
    steps: [
      'Bring almond milk to a gentle boil in a saucepan over medium heat.',
      'Stir in oats and salt. Reduce heat to medium-low.',
      'Cook 4–5 min, stirring occasionally, until thickened to your liking.',
      'Divide between two bowls. Top with blueberries and drizzle with maple syrup.',
    ],
    fodmapNote: 'Use GF-certified oats. Keep to 3/4 cup dry oats per person. Blueberries are low FODMAP at 1/2 cup per person — the 1 cup in this recipe is shared between 2 people, which is fine.',
    isCustom: true,
  },

  {
    id: 'kandy-tue-lunch',
    name: 'Tuna & Veggie Rice Cakes',
    emoji: '🫓',
    category: 'lunch',
    time: '10 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '2 cans (5 oz)', item: 'tuna in water, drained' },
      { qty: '2–3 tbsp',     item: 'mayonnaise (plain, no garlic/onion added)' },
      { qty: '1 tsp',        item: 'mustard (optional)' },
      { qty: '1 small',      item: 'cucumber, finely diced' },
      { qty: '1 medium',     item: 'carrot, peeled and grated' },
      { qty: 'to taste',     item: 'salt and pepper' },
      { qty: '8',            item: 'plain rice cakes (4 per person), to serve' },
    ],
    steps: [
      'In a bowl, mix drained tuna with mayo, mustard (if using), cucumber, and carrot.',
      'Season with salt and pepper. Mix well.',
      'Divide and spoon onto rice cakes. Serve immediately.',
    ],
    fodmapNote: 'Check mayo label — avoid brands with garlic or onion added. Tuna, cucumber, and carrot are all FODMAP-free. A fast and filling low-FODMAP lunch.',
    isCustom: true,
  },

  {
    id: 'kandy-tue-dinner',
    name: 'Ground Beef Taco Bowls',
    emoji: '🥩',
    category: 'dinner',
    time: '25 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein'],
    ingredients: [
      { qty: '1 lb',     item: 'ground beef (80/20)' },
      { qty: '1 tbsp',   item: 'ground flaxseed' },
      { qty: '1.5 cups', item: 'cooked brown rice (or white rice for a quicker option)' },
      { qty: '1 cup',    item: 'corn kernels, canned or frozen, drained' },
      { qty: '1 cup',    item: 'cherry tomatoes, halved' },
      { qty: '1.5 cups', item: 'shredded iceberg lettuce' },
      { qty: '1/4 cup',  item: 'crumbled feta cheese' },
      { qty: '1 tsp',    item: 'ground cumin' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '1 tbsp',   item: 'olive oil' },
    ],
    steps: [
      'Heat olive oil in skillet over medium-high heat.',
      'Add ground beef, breaking it apart. Cook 8–10 min until browned.',
      'Season with cumin, salt, and pepper. Stir in the ground flaxseed while the beef finishes browning, then remove from heat.',
      'Build bowls: brown rice on bottom, then beef, corn, tomatoes, lettuce, and feta on top.',
    ],
    fodmapNote: 'Ground beef and cumin are safe. Keep corn to 1/2 cup per person. Feta contains some lactose — keep to about 2 tbsp per person. Cherry tomatoes and lettuce are FODMAP-free. Swapping to brown rice and stirring 1 tbsp ground flaxseed into the beef boosts the fibre while staying low FODMAP.',
    isCustom: true,
  },

  // ─── WEDNESDAY ──────────────────────────────────────────
  {
    id: 'kandy-wed-breakfast',
    name: 'Spinach & Egg Scramble with Sourdough Toast',
    emoji: '🍳',
    category: 'breakfast',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'high-protein'],
    ingredients: [
      { qty: '5–6',      item: 'large eggs' },
      { qty: '2 handfuls', item: 'fresh spinach' },
      { qty: '1 medium', item: 'bell pepper (red or yellow), diced' },
      { qty: '1 tbsp',   item: 'olive oil' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '4 slices', item: 'spelt or wheat sourdough bread (2 per person) — MAX 2 slices per person' },
      { qty: 'optional', item: 'butter for toast' },
    ],
    steps: [
      'Heat olive oil in skillet over medium heat.',
      'Add bell pepper and cook 2–3 min until slightly softened.',
      'Add spinach and stir until wilted, about 1 min.',
      'Whisk eggs with salt and pepper, pour into skillet.',
      'Gently fold and scramble until just set.',
      'Toast sourdough. Serve eggs alongside toast with butter if desired.',
    ],
    fodmapNote: '⚠️ Maximum 2 slices of sourdough per person — do not exceed. Long-fermented sourdough has reduced fructans, but the limit still applies. Red and yellow bell peppers are lower in fructans than green.',
    isCustom: true,
  },

  {
    id: 'kandy-wed-lunch',
    name: 'Tofu & Veggie Salad',
    emoji: '🥗',
    category: 'lunch',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'gluten-free', 'high-protein'],
    ingredients: [
      { qty: '1 cup',    item: 'firm tofu, cubed' },
      { qty: '1 tbsp',   item: 'garlic-infused olive oil (for pan-frying the tofu)' },
      { qty: '1 medium', item: 'cucumber, diced' },
      { qty: '1 cup',    item: 'cherry tomatoes, halved' },
      { qty: '1',        item: 'bell pepper, diced' },
      { qty: '1/4 cup',  item: 'crumbled feta cheese' },
      { qty: '2 handfuls', item: 'butter or iceberg lettuce' },
      { qty: '3 tbsp',   item: 'olive oil' },
      { qty: '1',        item: 'lemon, juiced' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Press the tofu to remove moisture, then cube. Pan-fry in the garlic-infused oil over medium-high heat until golden, about 6 minutes. Let cool slightly. (Or use it raw if you prefer.)',
      'Combine tofu, cucumber, cherry tomatoes, and bell pepper in a large bowl.',
      'Dress with olive oil, lemon juice, salt, and pepper. Toss well.',
      'Divide lettuce between two plates, top with the tofu mixture and feta.',
    ],
    fodmapNote: 'Firm tofu replaces chickpeas here — it is naturally FODMAP-free and high in protein, with no legume/GOS portion limit to watch. Feta: keep to about 2 tbsp per person. Red or yellow bell peppers are lower in fructans than green.',
    isCustom: true,
  },

  {
    id: 'kandy-wed-dinner',
    name: 'Chicken Stir-Fry with Bok Choy & Rice Noodles',
    emoji: '🍜',
    category: 'dinner',
    time: '30 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '2',        item: 'boneless chicken breasts, thinly sliced' },
      { qty: '6 oz',     item: 'rice noodles (dry weight)' },
      { qty: '2 heads',  item: 'baby bok choy, halved or roughly chopped' },
      { qty: '3 medium', item: 'carrots, skin on, cut into thin matchsticks' },
      { qty: '1–2 cups', item: 'baby spinach' },
      { qty: '3',        item: 'scallions — GREEN TOPS ONLY, sliced (discard white/bulb end)' },
      { qty: '1 tsp',    item: 'fresh ginger, grated' },
      { qty: '2 tbsp',   item: 'gluten-free soy sauce or tamari' },
      { qty: '2 tbsp',   item: 'olive oil' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Cook rice noodles according to package directions. Drain and set aside.',
      'Heat olive oil in a large skillet or wok over high heat.',
      'Season chicken with salt and pepper. Cook 4–5 min until cooked through. Remove and set aside.',
      'In same pan, add more oil if needed. Add carrots and cook 2 min.',
      'Add bok choy and ginger, stir-fry 2–3 min until wilted.',
      'Return chicken to pan. Add rice noodles and soy sauce. Toss everything together 1–2 min.',
      'Add the baby spinach and toss until just wilted, about 1 min.',
      'Top with sliced scallion greens and serve immediately.',
    ],
    fodmapNote: '⚠️ Use GREEN TOPS of scallions only — the white bulb end is high in fructans. Bok choy, carrots, ginger, and rice noodles are all FODMAP-safe. Use tamari (not regular soy sauce) if strictly gluten-free. An extra carrot (skin on) and a handful of wilted baby spinach add fibre while keeping the dish low FODMAP.',
    isCustom: true,
  },

  // ─── THURSDAY ───────────────────────────────────────────
  {
    id: 'kandy-thu-breakfast',
    name: 'Lactose-Free Yogurt Parfait',
    emoji: '🫙',
    category: 'breakfast',
    time: '5 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'gluten-free', 'no-cook'],
    ingredients: [
      { qty: '2 cups',  item: 'lactose-free plain or vanilla yogurt' },
      { qty: '1 cup',   item: 'strawberries, sliced' },
      { qty: '1/2 cup', item: 'blueberries' },
      { qty: '4 tbsp',  item: 'pumpkin seeds or chopped walnuts' },
      { qty: '2 tbsp',  item: 'maple syrup (optional)' },
    ],
    steps: [
      'Spoon yogurt into two bowls or glasses.',
      'Top with strawberries and blueberries.',
      'Sprinkle pumpkin seeds or walnuts over the top.',
      'Drizzle with maple syrup if desired. Serve immediately.',
    ],
    fodmapNote: 'Lactose-free yogurt is essential here — regular yogurt is high in lactose. Strawberries are low FODMAP. Keep blueberries to 1/4 cup per person. Pumpkin seeds and walnuts are both safe.',
    isCustom: true,
  },

  {
    id: 'kandy-thu-dinner',
    name: 'Pork Chops with Mashed Potato & Sautéed Zucchini',
    emoji: '🥩',
    category: 'dinner',
    time: '35 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein'],
    ingredients: [
      { qty: '2',        item: 'boneless pork chops (6–8 oz each)' },
      { qty: '3 medium', item: 'potatoes, skin on, cubed' },
      { qty: '1/4 cup',  item: 'lactose-free milk, warmed' },
      { qty: '2 tbsp',   item: 'butter, divided' },
      { qty: '2 medium', item: 'zucchini, skin on, sliced into rounds' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '1 tbsp',   item: 'olive oil' },
    ],
    steps: [
      'Boil potato cubes in salted water 12–15 min until fork tender. Drain.',
      'Mash with warm lactose-free milk, 1 tbsp butter, salt and pepper, leaving the skins in for a rustic mash. Keep warm.',
      'While potatoes cook, heat olive oil in skillet over medium-high heat.',
      'Season pork chops generously with salt and pepper.',
      'Cook pork chops 4 min per side until golden and cooked through (internal temp 145°F). Rest 2 min.',
      'In same skillet, melt remaining butter and sauté zucchini 3–4 min until golden. Season with salt and pepper.',
      'Plate pork chops with mashed potato and zucchini.',
    ],
    fodmapNote: 'Potatoes and pork are FODMAP-free. Use lactose-free milk for the mash. Zucchini is low FODMAP at a moderate serving (1 medium per person). Season simply with salt and pepper — avoid garlic or onion powder. Keeping the skins on the potatoes (rustic mash) and on the zucchini adds extra fibre while staying low FODMAP.',
    isCustom: true,
  },

  // ─── FRIDAY ─────────────────────────────────────────────
  {
    id: 'kandy-fri-breakfast',
    name: 'Peanut Butter Strawberry Smoothie',
    emoji: '🥤',
    category: 'breakfast',
    time: '5 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    ingredients: [
      { qty: '2 cups',    item: 'unsweetened almond milk' },
      { qty: '4 tbsp',    item: 'smooth peanut butter (2 tbsp per person — do not exceed)' },
      { qty: '1.5 cups',  item: 'frozen or fresh strawberries' },
      { qty: '2 tsp',     item: 'maple syrup' },
      { qty: '1 cup',     item: 'ice' },
    ],
    steps: [
      'Add all ingredients to a blender.',
      'Blend on high 30–45 seconds until smooth.',
      'Taste and add more maple syrup if needed.',
      'Pour into two glasses. Drink immediately.',
    ],
    fodmapNote: '⚠️ Peanut butter is limited to 2 tbsp per person — do not exceed. Use plain smooth peanut butter (just peanuts + salt). Strawberries are FODMAP-free. Maple syrup is the safe sweetener here — never use honey.',
    isCustom: true,
  },

  {
    id: 'kandy-fri-lunch',
    name: 'Egg Fried Rice',
    emoji: '🍳',
    category: 'lunch',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'gluten-free', 'dairy-free'],
    ingredients: [
      { qty: '2 cups',  item: 'day-old cooked white rice, cold (works best)' },
      { qty: '3',       item: 'large eggs, beaten' },
      { qty: '1/2 cup', item: 'corn kernels, canned or frozen, drained' },
      { qty: '1 large', item: 'carrot, peeled and finely diced' },
      { qty: '2 tbsp',  item: 'gluten-free soy sauce or tamari' },
      { qty: '1 tbsp',  item: 'olive oil or butter' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Heat oil in a large skillet or wok over high heat.',
      'Add carrot and cook 2 min.',
      'Push veggies to the side. Pour eggs into the empty side and scramble until just set.',
      'Add corn and rice. Break up any clumps and stir everything together.',
      'Add soy sauce and toss well. Cook 2–3 more min until rice is heated through and slightly crispy.',
      'Season with salt and pepper. Serve hot.',
    ],
    fodmapNote: 'Cold day-old rice is essential — it separates better and gets crispier. Keep corn to 1/4 cup per person. Use tamari for strictly gluten-free. No garlic or onion — the dish gets all its flavour from soy sauce and the caramelised rice.',
    isCustom: true,
  },

  {
    id: 'kandy-fri-dinner',
    name: 'Shrimp & Quinoa with Roasted Veggies',
    emoji: '🍤',
    category: 'dinner',
    time: '35 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '1 lb',    item: 'shrimp, peeled and deveined (or 2 chicken breasts, cubed)' },
      { qty: '1 cup',   item: 'dry quinoa, rinsed' },
      { qty: '2 cups',  item: 'water or low-sodium chicken broth' },
      { qty: '1',       item: 'bell pepper, sliced' },
      { qty: '2 medium', item: 'zucchini, skin on, sliced into half-moons' },
      { qty: '1 cup',   item: 'cherry tomatoes' },
      { qty: '1–2 cups', item: 'baby spinach' },
      { qty: '3 tbsp',  item: 'olive oil, divided' },
      { qty: '1',       item: 'lemon, juiced' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Rinse quinoa well. Cook in 2 cups water or broth: bring to boil, cover, reduce to low, cook 15 min. Fluff with fork.',
      'Heat 2 tbsp olive oil in a large skillet over medium-high heat.',
      'Add bell pepper and zucchini. Cook 4–5 min until softened. Add tomatoes and cook 2 more min.',
      'Push veggies to one side. Add remaining oil and cook shrimp 2 min per side (or chicken 5–6 min total) until cooked through.',
      'Squeeze lemon over everything. Season with salt and pepper. Stir to combine.',
      'Stir the baby spinach through the veg at the end and toss until just wilted, about 1 min.',
      'Serve shrimp and veggies over quinoa.',
    ],
    fodmapNote: 'Shrimp, quinoa, and all vegetables here are low FODMAP. Red bell pepper is preferable to green (lower fructans). Zucchini is safe at this serving size. No garlic needed — lemon and olive oil do all the work. Keeping the zucchini skins on, adding a second zucchini, and wilting in a handful of baby spinach all boost the fibre while staying low FODMAP.',
    isCustom: true,
  },

  // ─── SATURDAY ───────────────────────────────────────────
  {
    id: 'kandy-sat-breakfast',
    name: 'Bacon & Egg Corn Tortilla Wraps',
    emoji: '🌮',
    category: 'breakfast',
    time: '20 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein'],
    ingredients: [
      { qty: '4',        item: 'corn tortillas (2 per person)' },
      { qty: '4–5',      item: 'large eggs' },
      { qty: '4 strips', item: 'bacon' },
      { qty: '1 medium', item: 'tomato, diced' },
      { qty: '1 handful', item: 'fresh spinach' },
      { qty: '1/4 cup',  item: 'crumbled feta or shredded cheddar' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '1 tbsp',   item: 'butter' },
    ],
    steps: [
      'Cook bacon in skillet until crispy. Remove and crumble or break into pieces.',
      'Melt butter in same skillet over medium-low heat.',
      'Scramble eggs with salt and pepper until just set.',
      'Warm corn tortillas in a dry pan or directly over flame for 20 seconds per side.',
      'Fill each tortilla with eggs, bacon, spinach, diced tomato, and cheese.',
      'Fold and eat immediately.',
    ],
    fodmapNote: 'Corn tortillas are low FODMAP — wheat tortillas are not. Cheddar is very low in lactose. Feta has slightly more lactose, so keep to about 2 tbsp per person. Spinach and tomato are FODMAP-free.',
    isCustom: true,
  },

  {
    id: 'kandy-sat-lunch',
    name: 'Tuna & Tomato Quinoa Bowl',
    emoji: '🥗',
    category: 'lunch',
    time: '10 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein', 'no-cook'],
    ingredients: [
      { qty: '1.5 cups',      item: 'leftover cooked quinoa (from Friday dinner)' },
      { qty: '2 cans (5 oz)', item: 'tuna in water, drained' },
      { qty: '1 cup',         item: 'cherry tomatoes, halved' },
      { qty: '2 tbsp',        item: 'olive oil' },
      { qty: '1/2',           item: 'lemon, juiced' },
      { qty: 'to taste',      item: 'salt and pepper' },
    ],
    steps: [
      'Divide cold or room-temperature quinoa between two bowls.',
      'Top each with drained tuna and cherry tomatoes.',
      'Drizzle with olive oil and lemon juice.',
      'Season with salt and pepper. Toss lightly and serve.',
    ],
    fodmapNote: 'A great no-cook lunch using Friday\'s leftover quinoa. All ingredients are FODMAP-free. Tuna in water is best — avoid tuna in brine or flavoured varieties.',
    isCustom: true,
  },

  {
    id: 'kandy-sat-dinner',
    name: 'Lemon Baked Chicken Thighs with Sweet Potato & Broccoli',
    emoji: '🍗',
    category: 'dinner',
    time: '50 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '4',       item: 'bone-in chicken thighs (skin-on or skinless)' },
      { qty: '1 cup',   item: 'cubed sweet potato, skin on (½ cup per person — do not exceed)' },
      { qty: '1½ cups', item: 'broccoli florets (¾ cup per person — do not exceed)' },
      { qty: '1 cup',   item: 'fresh green beans, trimmed (½ cup per person)' },
      { qty: '3 tbsp',  item: 'olive oil, divided' },
      { qty: '1',       item: 'lemon, sliced' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Preheat oven to 425°F (220°C).',
      'Place the skin-on sweet potato cubes on baking sheet, toss with 1 tbsp olive oil, salt and pepper.',
      'Pat chicken thighs dry. Rub with 1 tbsp olive oil, salt and pepper. Place on same baking sheet.',
      'Lay lemon slices over chicken. Roast 20 min.',
      'Add broccoli and green beans to pan, toss with remaining oil and season.',
      'Roast another 15 min until chicken is golden and reaches 165°F internal temp.',
      'Serve immediately.',
    ],
    fodmapNote: '⚠️ Sweet potato is limited to ½ cup cooked per person — do not exceed. Broccoli florets (not the stalk) are moderate FODMAP — keep to 3/4 cup per person. Chicken and lemon are FODMAP-free. Leaving the skin on the sweet potato (same ½ cup serve) and adding a small side of green beans (½ cup per person) adds fibre while staying low FODMAP.',
    isCustom: true,
  },

  // ─── SUNDAY ─────────────────────────────────────────────
  {
    id: 'kandy-sun-breakfast',
    name: 'GF French Toast with Berries',
    emoji: '🍞',
    category: 'breakfast',
    time: '20 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'gluten-free', 'dairy-free'],
    ingredients: [
      { qty: '4 slices', item: 'gluten-free bread' },
      { qty: '3',        item: 'large eggs' },
      { qty: '1/2 cup',  item: 'unsweetened almond milk' },
      { qty: '1 tsp',    item: 'pure vanilla extract (check label)' },
      { qty: '2 tbsp',   item: 'butter, for pan' },
      { qty: '2 tbsp',   item: 'maple syrup, to serve' },
      { qty: '1 cup',    item: 'strawberries, sliced, or blueberries' },
    ],
    steps: [
      'In a shallow bowl, whisk together eggs, almond milk, and vanilla.',
      'Heat 1 tbsp butter in skillet over medium heat.',
      'Dip each bread slice in egg mixture, letting it soak 10–15 seconds per side.',
      'Cook 2–3 min per side until golden brown. Add more butter between batches.',
      'Serve topped with fresh berries and a drizzle of maple syrup.',
    ],
    fodmapNote: 'GF bread avoids wheat fructans. Check vanilla extract label — pure vanilla is fine, but some imitation vanillas contain additives. Strawberries are FODMAP-free; keep blueberries to 1/4 cup per person.',
    isCustom: true,
  },

  {
    id: 'kandy-sun-lunch',
    name: 'Lentil & Veggie Soup',
    emoji: '🍵',
    category: 'lunch',
    time: '30 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],
    ingredients: [
      { qty: '2/3 cup',  item: 'canned green or brown lentils, rinsed thoroughly (⅓ cup per person — do not exceed)' },
      { qty: '2 medium', item: 'carrots, peeled and diced' },
      { qty: '1 medium', item: 'zucchini, diced' },
      { qty: '2 handfuls', item: 'fresh spinach' },
      { qty: '3 cups',   item: 'low-sodium chicken or vegetable broth (no garlic/onion)' },
      { qty: '1 tsp',    item: 'fresh ginger, grated' },
      { qty: '1 tbsp',   item: 'olive oil' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '1',        item: 'lemon wedge per bowl, to serve' },
    ],
    steps: [
      'Heat olive oil in a medium saucepan over medium heat.',
      'Add carrots and cook 3–4 min, stirring occasionally.',
      'Add zucchini and ginger. Cook 2 more min.',
      'Add rinsed lentils and broth. Bring to a boil.',
      'Reduce heat and simmer 10 min.',
      'Stir in spinach until wilted, about 1 min.',
      'Season with salt and pepper. Squeeze lemon over bowls before serving.',
    ],
    fodmapNote: '⚠️ Rinse canned lentils thoroughly under cold water — this reduces FODMAP content significantly. Maximum ⅓ cup lentils per person. Ginger is low FODMAP and great for digestion. Use a broth with no added garlic or onion.',
    isCustom: true,
  },

  {
    id: 'kandy-sun-dinner',
    name: 'Pan-Seared Steak with Roasted Carrots & Potato Wedges',
    emoji: '🥩',
    category: 'dinner',
    time: '40 min',
    serves: 2,
    difficulty: 'medium',
    tags: ['gluten-free', 'dairy-free', 'high-protein'],
    ingredients: [
      { qty: '2',        item: 'steaks (ribeye, sirloin, or NY strip — 6–8 oz each)' },
      { qty: '4 medium', item: 'carrots, skin on, cut into sticks' },
      { qty: '2 medium', item: 'potatoes, skins on, cut into wedges' },
      { qty: '3 tbsp',   item: 'olive oil, divided' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: '1 tbsp',   item: 'butter (optional, for basting)' },
    ],
    steps: [
      'Preheat oven to 425°F (220°C).',
      'Toss the skin-on carrot sticks and potato wedges with 2 tbsp olive oil, salt and pepper. Spread on baking sheet.',
      'Roast 25 min, flipping halfway, until golden and tender.',
      'When veggies have about 8 min left, heat remaining olive oil in a cast-iron or heavy skillet over high heat until very hot.',
      'Pat steaks completely dry. Season generously with salt and pepper on both sides.',
      'Sear steaks 3–4 min per side for medium-rare (or longer to your preference).',
      'Add butter to pan in the last minute and baste steaks if desired.',
      'Rest steaks 5 min before cutting. Serve with roasted veggies.',
    ],
    fodmapNote: 'Steak, carrots, and potatoes are all completely FODMAP-free — a safe and satisfying end to the week. Season simply with salt and pepper only — avoid steak seasonings that contain garlic or onion powder. Leaving the skins on the potato wedges and carrots, plus an extra carrot, adds fibre while staying low FODMAP.',
    isCustom: true,
  },
    {
    id: 'kandy-sourdough-bread',
    name: 'Homemade Sourdough Bread',
    emoji: '🍞',
    category: 'breakfast',
    time: '2 days (mostly hands-off)',
    serves: 12,
    difficulty: 'medium',
    tags: ['vegetarian', 'vegan', 'dairy-free', 'make-ahead'],
    starterReminder: true,
    ingredients: [
      { qty: '',          item: '── STARTER (build once, keeps forever) ──' },
      { qty: '1/3 cup',   item: 'bread flour (per feeding)' },
      { qty: '3 tbsp',    item: 'water (per feeding)' },
      { qty: '',          item: '── BREAD ──' },
      { qty: '3½ cups',   item: 'bread flour' },
      { qty: '1⅓ cups',  item: 'warm water' },
      { qty: '1½ tsp',   item: 'salt' },
      { qty: '1/3 cup',   item: 'active bubbly starter' },
    ],
    steps: [
      'BUILD YOUR STARTER — Day 1: Mix 1/3 cup flour + 3 tbsp water in a jar. Cover loosely. Leave at room temp.',
      'Days 2–7: Each day, discard half the starter, then feed with 1/3 cup flour + 3 tbsp water. Ready when bubbly and doubles in size within 4–6 hours of feeding.',
      'MAKE THE BREAD: Mix bread flour, warm water, salt, and 1/3 cup active starter until no dry flour remains. Rest 30 min.',
      'Do 4 stretch-and-folds, 30 min apart: grab one edge of the dough, pull it up and fold over the top. Rotate bowl, repeat 4 times. Takes 30 seconds each set.',
      'Let dough rise at room temp 4–6 hours until puffy and about 50% larger.',
      'Shape into a round ball. Place smooth-side down in a flour-dusted bowl. Cover and refrigerate overnight — 8 to 16 hours.',
      'Preheat oven to 500°F with a Dutch oven (lid on) inside for 1 full hour.',
      'Flip dough onto parchment paper. Score the top with one confident slash. Lower into hot Dutch oven on the parchment.',
      'Bake COVERED 20 min. Remove lid, reduce to 450°F, bake 20 more min until deeply golden. Cool on rack at least 1 hour before slicing.',
      'AFTER BAKING — put the starter jar straight back in the fridge. That is its permanent home between bakes.',
      'STORAGE: Keep starter in fridge with a loose lid (needs to breathe). Feed once a week — discard half, add 1/3 cup flour + 3 tbsp water, leave out a few hours until bubbly, then back in the fridge.',
      'BEFORE NEXT BAKE: Take starter out the night before, feed it, leave on counter overnight until bubbly, use what you need, put the rest back in the fridge.',
      'DISCARD TIP: Save discard in a second jar in the fridge — use for pancakes, waffles, crackers, or pizza dough (unfed discard works great for those).',
      'SIGNS IT IS ALIVE: Smells tangy or sour — totally normal. Dark liquid on top means it is hungry, not dead — pour it off and feed it.',
      'ONLY throw it out if you see pink, orange, or fuzzy mold (actual fuzz, not just dark liquid).',
    ],
    fodmapNote: '⚠️ Max 2 slices per person. The overnight fridge fermentation is what makes this low FODMAP — the long cold rise breaks down most of the fructans. Do NOT skip it. Longer fridge time (up to 16 hrs) = lower fructans. Store bread wrapped in a kitchen towel at room temp, not plastic — plastic softens the crust.',
    isCustom: true,
  },
  {
    id: 'kandy-lighter-chicken-bacon-ranch-soup',
    name: 'Lighter Chicken Bacon Ranch Cheesy Soup',
    emoji: '🥦',
    category: 'dinner',
    time: '45 min',
    serves: 6,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein', 'soup', 'lighter'],
    ingredients: [
      { qty: '4 slices',    item: 'center-cut bacon, chopped (check label for onion/garlic)' },
      { qty: '1 1/2 lb',    item: 'boneless skinless chicken breast, cut into small cubes' },
      { qty: '1 tbsp',      item: 'garlic-infused olive oil' },
      { qty: '1/2 cup',     item: 'green onion tops (green parts only), sliced' },
      { qty: '1',           item: 'carrot, diced' },
      { qty: '1 medium',    item: 'russet potato (about 8 oz), peeled and diced' },
      { qty: '4 cups',      item: 'low-FODMAP chicken broth (no onion or garlic)' },
      { qty: '1 cup',       item: 'lactose-free 2% milk' },
      { qty: '3 cups',      item: 'broccoli florets (heads only, no stalks), finely chopped' },
      { qty: '1 1/2 cups',  item: 'sharp cheddar, freshly shredded' },
      { qty: '8 oz',        item: 'gluten-free short pasta (or gluten-free tortellini — check the filling for garlic)' },
      { qty: '1 tsp each',  item: 'dried dill and dried parsley (homemade ranch blend)' },
      { qty: '1 tbsp',      item: 'fresh chives, chopped (ranch blend)' },
      { qty: '1 tsp',       item: 'smoked paprika' },
      { qty: 'to taste',    item: 'salt, black pepper and a pinch of cayenne' },
    ],
    steps: [
      'Cook the chopped bacon in a large pot over medium heat until crisp. Remove it to a paper towel and pour off all but about 1 teaspoon of the grease.',
      'Season the chicken with half the dill, parsley, smoked paprika, salt, pepper and cayenne. Cook in the pot over medium-high heat 2–3 minutes per side until cooked through, then remove.',
      'Add the garlic-infused oil, green onion tops and carrot. Cook 3 minutes.',
      'Add the potato and broth. Bring to a boil, then simmer 10–12 minutes until the potato is very tender.',
      'Blend the soup (an immersion blender is easiest) until smooth — the potato replaces the butter-and-flour roux as the thickener.',
      'Stir in the milk and broccoli. Simmer 6–8 minutes until the broccoli is tender.',
      'Meanwhile, cook the pasta separately in salted water until al dente and drain (cooking it apart keeps the leftovers from turning to mush).',
      'Take the pot off the heat and stir in the cheddar until smooth. Add the chicken, pasta, chives and the rest of the seasoning.',
      'Serve topped with the crumbled bacon.',
    ],
    fodmapNote: 'Built to be low-FODMAP: garlic-infused oil and green onion tops replace onion and garlic (the fructans do not dissolve into oil), lactose-free milk replaces regular, a homemade herb blend replaces ranch seasoning, and the potato thickens it instead of wheat flour. Broccoli heads are low-FODMAP at about 3/4 cup a serving — this works out to about 1/2 cup each; the stalks are higher, so skip them. Aged cheddar is naturally very low in lactose. Check the bacon, broth and pasta labels for onion, garlic or inulin.',
    nutrition: { cal: 500, protein: 41, fiber: 3 },
    added: '2026-09-27',
    isCustom: true,
  },

  // ─── SARDINES FOR TUNA LOVERS (added 2026-09-30) ───────────
  // See Guides → Tips & Guides → "Sardines for tuna lovers".
  {
    id: 'kandy-sardine-half-half-salad',
    name: 'Half & Half Tuna-Sardine Salad',
    emoji: '🐟',
    category: 'lunch',
    time: '10 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein', 'sardines', 'omega-3', 'no-cook'],
    ingredients: [
      { qty: '1 can (5 oz)',  item: 'tuna in water, drained' },
      { qty: '¼–½ can',      item: 'sardines in olive oil (King Oscar brisling is mildest), drained well' },
      { qty: '2 tbsp',        item: 'mayonnaise' },
      { qty: '1 tbsp',        item: 'lemon juice, plus a little zest' },
      { qty: '2 tbsp',        item: 'dill pickle, finely chopped (instead of relish)' },
      { qty: '2 tbsp',        item: 'cucumber, finely diced' },
      { qty: '1 tbsp',        item: 'fresh dill or chives, chopped' },
      { qty: 'to taste',      item: 'black pepper' },
      { qty: 'to serve',      item: 'GF bread, lettuce cups or rice crackers' },
    ],
    steps: [
      'Mash the sardines with a fork until very fine. The finer they are, the less you notice them.',
      'Stir in the lemon juice and let it sit 2 minutes. The acid neutralizes the fishy compound (TMA).',
      'Add the tuna, mayo, pickle, cucumber, dill and pepper and mix well.',
      'Serve on GF bread, in lettuce cups or with rice crackers.',
      'Build up slowly: start with ¼ can of sardines, then go to ½ can after a week or two, then a full can.',
    ],
    fodmapNote: 'Low-FODMAP as written: fish has no FODMAPs, and chopped dill pickle replaces relish, which can contain onion. Cucumber replaces celery, which is only low-FODMAP in small amounts. Check that the mayo has no garlic or onion. Nutrition is an estimate for the filling only (made with ½ can of sardines, no bread).',
    nutrition: { cal: 192, protein: 17, fiber: 0 },
    added: '2026-09-30',
    isCustom: true,
  },

  {
    id: 'kandy-sardine-tuna-cakes',
    name: 'Tuna-Sardine Cakes with Lemon Tartar',
    emoji: '🍋',
    category: 'dinner',
    time: '25 min',
    serves: 3,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein', 'sardines', 'omega-3'],
    ingredients: [
      { qty: '1 can (5 oz)',   item: 'tuna in water, drained' },
      { qty: '1 can (3.75 oz)', item: 'sardines in olive oil, drained and mashed fine' },
      { qty: '1 large',        item: 'egg' },
      { qty: '½ cup',          item: 'gluten-free panko or breadcrumbs' },
      { qty: '2 tbsp',         item: 'mayonnaise (for the cakes)' },
      { qty: '1 tbsp',         item: 'Dijon mustard (check it has no garlic)' },
      { qty: '1',              item: 'lemon, zested; juice reserved' },
      { qty: '2 tbsp',         item: 'fresh parsley, chopped' },
      { qty: '2 tbsp',         item: 'green scallion tops (green parts only), sliced' },
      { qty: '2 tbsp',         item: 'olive oil, for frying' },
      { qty: '3 tbsp',         item: 'mayonnaise (for the tartar)' },
      { qty: '2 tbsp',         item: 'dill pickle, finely chopped (tartar)' },
      { qty: '1 tsp',          item: 'capers, chopped (tartar)' },
    ],
    steps: [
      'In a bowl, mash the sardines with 1 tbsp lemon juice until smooth.',
      'Add the tuna, egg, panko, 2 tbsp mayo, Dijon, lemon zest, parsley and scallion tops. Mix well and form into 6 patties.',
      'Chill the patties 10 minutes if you have time so they hold together.',
      'Heat the olive oil in a skillet over medium heat. Fry the cakes 3–4 minutes per side until deep golden. Browning mellows the sardine flavor.',
      'Tartar: stir together 3 tbsp mayo, the pickle, capers and 1 tbsp lemon juice.',
      'Serve 2 cakes per person with the tartar and a lemon wedge.',
    ],
    fodmapNote: 'Low-FODMAP: green scallion tops replace onion, GF panko replaces wheat crumbs, and the homemade tartar skips store tartar, which often contains onion. Check the Dijon and mayo labels for garlic. Nutrition is an estimate that counts all the frying oil, so it is likely slightly high.',
    nutrition: { cal: 396, protein: 18, fiber: 0 },
    added: '2026-09-30',
    isCustom: true,
  },

  {
    id: 'kandy-sardine-tuna-melt',
    name: 'Tuna-Sardine Melt',
    emoji: '🧀',
    category: 'lunch',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['high-protein', 'sardines', 'omega-3'],
    ingredients: [
      { qty: '1 batch',   item: 'Half & Half Tuna-Sardine Salad (1 can tuna + ½ can sardines)' },
      { qty: '2 slices',  item: 'gluten-free or traditional sourdough-spelt bread' },
      { qty: '2 oz',      item: 'sharp cheddar, sliced or shredded' },
      { qty: 'optional',  item: 'tomato slices' },
    ],
    steps: [
      'Heat the oven or air fryer to 400°F (200°C). Lightly toast the bread.',
      'Pile the tuna-sardine salad onto the toast and add tomato slices if you like.',
      'Top with cheddar and bake 5–7 minutes (air fryer 3–4) until the cheese is bubbly.',
      'Finish with black pepper and a squeeze of lemon.',
    ],
    fodmapNote: 'Low-FODMAP with GF bread or traditional slow-fermented spelt sourdough. Aged cheddar is naturally very low in lactose. Melted sharp cheese is one of the best ways to cover sardine flavor. Nutrition is an estimate with GF bread.',
    nutrition: { cal: 386, protein: 26, fiber: 1 },
    added: '2026-09-30',
    isCustom: true,
  },

  {
    id: 'kandy-sardine-tomato-caper-pasta',
    name: 'Hidden Sardine Tomato-Caper Pasta',
    emoji: '🍝',
    category: 'dinner',
    time: '25 min',
    serves: 4,
    difficulty: 'easy',
    tags: ['gluten-free', 'sardines', 'omega-3'],
    ingredients: [
      { qty: '12 oz',            item: 'gluten-free spaghetti' },
      { qty: '2 tbsp',           item: 'garlic-infused olive oil' },
      { qty: '1 can (3.75 oz)',  item: 'sardines in olive oil, drained' },
      { qty: '1 can (14.5 oz)',  item: 'crushed tomatoes (plain, no garlic or onion)' },
      { qty: '2 tbsp',           item: 'capers, rinsed' },
      { qty: '½ tsp',            item: 'red chili flakes' },
      { qty: '½',                item: 'lemon, zest and juice' },
      { qty: '2 tbsp',           item: 'fresh parsley, chopped' },
      { qty: '¼ cup',            item: 'Parmesan, grated (optional)' },
    ],
    steps: [
      'Cook the pasta in salted water until al dente. Save ½ cup of the pasta water, then drain.',
      'Meanwhile, warm the garlic-infused oil in a large skillet over medium heat. Add the sardines and mash them with a wooden spoon for 2–3 minutes until they break down completely and disappear.',
      'Add the crushed tomatoes, capers and chili flakes. Simmer 10 minutes.',
      'Toss the pasta into the sauce, loosening it with pasta water as needed.',
      'Take off the heat and stir in the lemon zest, juice and parsley. Top with Parmesan.',
    ],
    fodmapNote: 'Low-FODMAP: garlic-infused oil gives garlic flavor without the fructans, which do not dissolve into oil. The can of tomatoes split 4 ways is about ½ cup a serving, within the low-FODMAP portion. Use GF pasta. Parmesan is naturally lactose-free. Nutrition is an estimate.',
    nutrition: { cal: 465, protein: 15, fiber: 5 },
    added: '2026-09-30',
    isCustom: true,
  },

  {
    id: 'kandy-sardine-med-chopped-salad',
    name: 'Sardine Mediterranean Chopped Salad',
    emoji: '🥗',
    category: 'lunch',
    time: '15 min',
    serves: 2,
    difficulty: 'easy',
    tags: ['gluten-free', 'high-protein', 'sardines', 'omega-3', 'no-cook'],
    ingredients: [
      { qty: '1 can (3.75 oz)', item: 'sardines in olive oil, drained, broken into chunks' },
      { qty: '2 tbsp',          item: 'extra virgin olive oil (vinaigrette)' },
      { qty: '1 tbsp',          item: 'red wine vinegar (vinaigrette)' },
      { qty: '1 tsp',           item: 'lemon juice (vinaigrette)' },
      { qty: '½ tsp',           item: 'dried oregano' },
      { qty: '2 cups',          item: 'mixed greens or chopped romaine' },
      { qty: '1 cup',           item: 'cucumber, diced' },
      { qty: '1 cup',           item: 'cherry tomatoes, halved' },
      { qty: '10',              item: 'kalamata olives' },
      { qty: '¼ cup',           item: 'feta, crumbled' },
      { qty: 'to taste',        item: 'black pepper' },
    ],
    steps: [
      'Whisk the olive oil, vinegar, lemon juice, oregano and pepper in the salad bowl.',
      'Add the sardine chunks and let them soak in the vinaigrette for 5 minutes. The acid takes the edge off the flavor.',
      'Add the greens, cucumber, tomatoes, olives and feta. Toss and serve.',
    ],
    fodmapNote: 'Low-FODMAP: all vegetables are within safe portions (cherry tomatoes about ½ cup a serving), and feta is low in lactose at this amount. This is the least hidden option, so try it once the other recipes feel easy. Nutrition is an estimate.',
    nutrition: { cal: 320, protein: 16, fiber: 2 },
    added: '2026-09-30',
    isCustom: true,
  },

  {
    id: 'kandy-shrimp-stock',
    name: 'Basic Shrimp Stock',
    emoji: '🦐',
    category: 'dinner',
    time: '40 min',
    serves: 6,
    difficulty: 'easy',
    tags: ['gluten-free', 'dairy-free', 'stock', 'make ahead', 'seafood'],
    ingredients: [
      { qty: '4 cups',   item: 'shrimp shells and heads (from about 2 lb shrimp)' },
      { qty: '1 tbsp',   item: 'garlic-infused oil' },
      { qty: '1 cup',    item: 'leek greens, chopped (green part only)' },
      { qty: '½ cup',    item: 'scallion greens, chopped' },
      { qty: '1 medium', item: 'carrot, chopped' },
      { qty: '1 tbsp',   item: 'tomato paste (optional)' },
      { qty: '8 cups',   item: 'cold water' },
      { qty: '2',        item: 'bay leaves' },
      { qty: '1 tsp',    item: 'black peppercorns' },
      { qty: '¼ cup',    item: 'parsley stems' },
      { qty: '3 sprigs', item: 'fresh thyme' },
    ],
    steps: [
      'Heat the garlic-infused oil in a large pot over medium-high. Add the shells and stir about 4 minutes, until bright pink-orange and toasty-smelling.',
      'Add the leek greens, scallion greens, carrot and tomato paste. Stir about 2 minutes, until the vegetables soften slightly.',
      'Pour in the cold water. Add the bay leaves, peppercorns, parsley stems and thyme. Bring just to a boil, then lower to a gentle simmer and skim off any foam.',
      'Simmer uncovered about 30 minutes. Don\'t go much longer, because shellfish stock can turn bitter.',
      'Strain through a fine-mesh sieve, pressing the shells to get all the liquid out. Cool, then refrigerate up to 3 days or freeze up to 3 months. Leave it unsalted so you can season the final dish. Makes about 6 cups.',
    ],
    fodmapNote: 'Low-FODMAP as written: leek and scallion greens replace onion, and garlic-infused oil replaces garlic (fructans do not move into oil). Celery is left out because it is only low-FODMAP in small servings. Check serving sizes for carrot and tomato paste in the Monash app. Not on low-FODMAP? Use ½ onion and 2 smashed garlic cloves instead of the greens, and add a celery rib. Tip: save shells in a freezer bag until you have enough.',
    added: '2026-10-18',
    isCustom: true,
  },


  // ─── ADDED FROM THE WEB (low-FODMAP as written) ─────────
  {
    "id": "kandy-egg-muffins-wellplated",
    "name": "Veggie Egg Muffins",
    "emoji": "🧁",
    "category": "breakfast",
    "time": "40 min",
    "serves": 12,
    "difficulty": "easy",
    "tags": [
      "gluten-free",
      "high-protein",
      "meal-prep",
      "freezer-friendly",
      "vegetarian"
    ],
    "source": "https://www.wellplated.com/healthy-breakfast-egg-muffins/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 cup",
        "item": "lightly packed baby spinach, chopped"
      },
      {
        "qty": "3/4 cup",
        "item": "finely diced red bell pepper, about 1 small pepper"
      },
      {
        "qty": "3/4 cup",
        "item": "finely diced green bell pepper, about 1 small pepper"
      },
      {
        "qty": "3/4 cup",
        "item": "quartered cherry tomatoes, or grape tomatoes, about 1 cup whole tomatoes"
      },
      {
        "qty": "6 large",
        "item": "eggs"
      },
      {
        "qty": "4 large",
        "item": "egg whites"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "dried basil"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "to taste",
        "item": "Pinch ground black pepper, or cayenne pepper if you like a little kick!"
      },
      {
        "qty": "1/4 cup",
        "item": "crumbled feta cheese, plus additional to sprinkle on top"
      },
      {
        "qty": "to taste",
        "item": "Optional toppings: avocado, salsa, hot sauce, freshly chopped parsley"
      }
    ],
    "steps": [
      "Place a rack in the center of your oven and preheat to 350 degrees F. Lightly coat a standard 12-cup muffin tin with nonstick spray.",
      "Divide the spinach, red bell pepper, green bell pepper, and tomatoes among the cups (they will be about two-thirds of the way full).",
      "In a large bowl or large measuring cup with a spout (my favorite because it makes the mixture easy to pour), briskly whisk together the eggs, egg whites, salt, basil, oregano, and pepper until well combined.",
      "Carefully fill each muffin cup three-quarters of the way to the top with the egg mixture. Sprinkle the feta evenly over the tops of the cups.",
      "Bake for 24 to 28 minutes, until the egg muffins are set. Let cool for a few minutes, and then run a butter knife around the edges of each muffin to loosen it. Remove them from the pan and enjoy immediately, or let cool on a wire rack and refrigerate or freeze for later (see notes for more details)."
    ],
    "fodmapNote": "Low-FODMAP as written: eggs, spinach, red and green bell pepper, cherry tomatoes, feta (a low-lactose cheese) and dried herbs. Keep to 2–3 muffins per serve so the bell pepper and tomato stay within a low-FODMAP portion. Skip the optional salsa topping unless it is a low-FODMAP one; avocado is fine in a small serve (about 1/8). Makes 12; they freeze well.",
    "isCustom": true
  },


  // ─── RACHEL PAULS FOOD — 30-minute low-FODMAP, gluten-free dinners ─────────
  {
    "id": "kandy-rp-skillet-chicken-cacciatore",
    "name": "Skillet Chicken Cacciatore",
    "emoji": "🍅",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free option",
      "one-pan",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-skillet-chicken-cacciatore-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 lb (16 ounces)",
        "item": "boneless skinless chicken breasts, of uniform thickness"
      },
      {
        "qty": "1 teaspoon",
        "item": "garlic-infused olive oil"
      },
      {
        "qty": "1 teaspoon",
        "item": "low-FODMAP certified Italian Seasoning"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "1 teaspoon + 1 tablespoon",
        "item": "onion- or shallot-infused oil, divided"
      },
      {
        "qty": "1 teaspoon",
        "item": "garlic-infused oil"
      },
      {
        "qty": "1",
        "item": "green bell pepper (75g), sliced"
      },
      {
        "qty": "4.5 ounces (127 g)",
        "item": "canned sliced mushrooms, rinsed and drained"
      },
      {
        "qty": "1 medium",
        "item": "zucchini (150 g), sliced into sticks"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "crushed red pepper flakes, optional, will add a bit of heat"
      },
      {
        "qty": "1 teaspoon",
        "item": "dried thyme"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt, plus to taste"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "black pepper, plus to taste"
      },
      {
        "qty": "1/2 cup",
        "item": "dry white wine"
      },
      {
        "qty": "1/4 cup (15g, 0.5 oz)",
        "item": "fresh basil, chopped; divided"
      },
      {
        "qty": "1/4 cup (15g)",
        "item": "fresh flat leaf parsley, chopped; divided"
      },
      {
        "qty": "15 ounces",
        "item": "diced or crushed tomatoes (canned)"
      },
      {
        "qty": "2 tablespoons",
        "item": "tomato paste"
      },
      {
        "qty": "2 tablespoons",
        "item": "capers"
      },
      {
        "qty": "to taste",
        "item": "Freshly grated parmesan cheese to taste (garnish, omit for dairy-free)"
      }
    ],
    "steps": [
      "Combine first 5 ingredients for chicken marinade in a small bowl or freezer bag. Rub the chicken into the oil and spices and place in refrigerator while you prep the other ingredients",
      "Place a large skillet (I used 11 inch cast iron) over medium high heat",
      "Add 1 tablespoon of onion-infused oil to the skillet",
      "When oil shimmers, add the chicken and the marinade to the pan",
      "Sear the chicken for about 2 minutes per side, then remove to a covered plate to keep warm (it will not be fully cooked, that is OK)",
      "Add remaining teaspoon of onion infused oil to the skillet with the garlic-infused oil",
      "Add the bell pepper, mushrooms, zucchini, crushed red pepper flakes, thyme, salt and pepper to the skillet and cook for about 3-4 minutes until the vegetables start to soften, covering if desired",
      "Add in the wine and cook for another minute or until the liquid reduces by about half, adjusting the temperature as necessary",
      "Stir in half of each of the parsley and basil",
      "Pour the canned tomatoes in the skillet, then tomato paste, and stir well, then add capers and taste and adjust seasonings as desired",
      "Replace the chicken breasts and cover with sauce",
      "Reduce the heat, cover and simmer for about 10-15 minutes or until the chicken is cooked through (internal temperature of 165F)",
      "Sprinkle the remaining herbs and shredded parmesan cheese (optional) over top and serve immediately",
      "Delicious with low-FODMAP bread, salad or low-FODMAP pasta"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Green bell pepper, zucchini, canned tomatoes and tomato paste are portioned to low-FODMAP amounts by the author; canned mushrooms rinsed are fine. White wine and capers are fine. Skip the Parmesan garnish for dairy-free.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-chicken-marsala",
    "name": "Chicken Marsala",
    "emoji": "🍷",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/homemade-low-fodmap-30-minute-chicken-marsala-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP, gluten-free rice flour"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "16 ounces",
        "item": "boneless skinless chicken breasts, pounded to 1/4 inch thickness"
      },
      {
        "qty": "3 tablespoons",
        "item": "olive oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused oil"
      },
      {
        "qty": "4.5 ounces (127 g)",
        "item": "canned, sliced mushrooms, rinsed and drained"
      },
      {
        "qty": "3/4 cup",
        "item": "dry Marsala wine"
      },
      {
        "qty": "1 1/4 cups",
        "item": "low-FODMAP chicken broth or stock"
      },
      {
        "qty": "3/4 cup",
        "item": "heavy cream"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh chopped parsley"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper to taste"
      },
      {
        "qty": "to taste",
        "item": "Optional: 1/2-1 teaspoon truffle oil (titrate to the potency of your product), or 1 tablespoon mushroom infused oil"
      }
    ],
    "steps": [
      "If not already done so, pound your chicken breasts with your mallet to ¼-inch thickness between plastic wrap or wax paper",
      "Mix the low-FODMAP rice flour, salt and pepper in a shallow bowl",
      "Set up a large skillet with your 3 tablespoons oil and allow the oil to heat until shimmering",
      "While oil is heating, dredge the chicken in the flour mixture and shake off any excess",
      "When oil is hot, fry chicken breasts until golden-brown on both sides (about 3 to 4 minutes per side) They don’t need to be fully cooked at this point",
      "Transfer browned chicken to a plate to keep warm (you will replace it in the sauce later)",
      "When all the chicken is finished, in the same pan, prepare the low-FODMAP Marsala sauce",
      "Turn down your heat as needed and place the garlic infused oil in skillet to warm, scrape pan to deglaze if needed",
      "Press your sliced, drained mushrooms between paper towels to blot dry, then add the mushrooms to the skillet to brown lightly, about 2 minutes",
      "Next, pour in the Marsala wine and the low-FODMAP Chicken broth and simmer, uncovered, until reduced by half and starting to thicken",
      "This takes a little time, about 10 minutes, adjust your heat as necessary",
      "Pour in the heavy cream and stir, then add the mushroom infused oil, if using",
      "Return the chicken to the sauce",
      "Cook until the sauce thickens more (about 3-8 minutes)",
      "Taste sauce, add salt and pepper to taste",
      "Garnish with chopped parsley prior to serving",
      "Serve with your favorite low-FODMAP, GF Pasta (I used spaghettini, Ronzoni brand)"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Rice flour replaces wheat flour, canned mushrooms (rinsed) replace fresh, and the heavy cream works out to a small serve. Marsala wine is fine in this amount.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-30-minute-chicken-quesadillas",
    "name": "30-Minute Chicken Quesadillas",
    "emoji": "🫓",
    "category": "dinner",
    "time": "25 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-gluten-free-30-minute-chicken-quesadillas/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 cups (14 ounces)",
        "item": "shredded or chopped, cooked chicken (breast or thigh meat)"
      },
      {
        "qty": "6 tablespoons",
        "item": "canned, diced fire roasted tomatoes or low-FODMAP salsa"
      },
      {
        "qty": "4",
        "item": "scallions, green tips only"
      },
      {
        "qty": "3/4 teaspoon",
        "item": "ground cumin"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "12",
        "item": "five-inch low-FODMAP and gluten-free tortillas"
      },
      {
        "qty": "2 tablespoons",
        "item": "avocado oil or other preferred oil for cooking; divided"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic-infused oil"
      },
      {
        "qty": "2 cups",
        "item": "shredded Monterey Jack cheese or mixed blend cheddar cheese; divided"
      },
      {
        "qty": "to taste",
        "item": "Desired toppings: lactose-free sour cream, low-FODMAP salsa, chopped avocado, black olives"
      }
    ],
    "steps": [
      "Preheat your oven to 400F and line a baking sheet with parchment paper, or silicone liners",
      "In a large skillet, heat 2 teaspoons of avocado oil. Gently brown the first tortilla on one side and lay it on your baking sheet. Repeat until all have been toasted",
      "Add infused oil to the skillet, followed by chicken, scallion tips, cumin, salt and oregano",
      "Cook, uncovered, over medium heat until heated through, about 5 minutes",
      "Spoon 1/6 chicken mixture over half of each tortilla; then sprinkle with 1/3 cup cheese and 1 tablespoon fire roasted tomatoes or salsa",
      "Cover with a second tortilla half (grilled side on outside) and place in preheated oven",
      "Bake until tortillas are crisp and golden brown, about 7-10 minutes",
      "To make extra crispy, press down on each one with a spatula, then broil on high for another 5 minutes",
      "Cut into wedges; serve with desired toppings"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Use low-FODMAP gluten-free tortillas and a low-FODMAP salsa or plain fire-roasted tomatoes. Monterey Jack and cheddar are low-lactose cheeses; lactose-free sour cream for topping. Serves 6.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-salisbury-steak",
    "name": "Salisbury Steak (Rachel Pauls)",
    "emoji": "🥩",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/family-favorite-30-minute-low-fodmap-salisbury-steak-recipe-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP, gluten-free breadcrumbs, such as Panko"
      },
      {
        "qty": "1 lb (16 oz)",
        "item": "lean ground beef"
      },
      {
        "qty": "1 large",
        "item": "egg"
      },
      {
        "qty": "1 teaspoon",
        "item": "onion or shallot infused oil"
      },
      {
        "qty": "1 teaspoon",
        "item": "garlic infused oil"
      },
      {
        "qty": "2 tablespoons (30 g)",
        "item": "ketchup"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "Worcestershire sauce"
      },
      {
        "qty": "3 teaspoons",
        "item": "Dijon mustard"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "each of salt and pepper"
      },
      {
        "qty": "1 teaspoon",
        "item": "oil for cooking"
      },
      {
        "qty": "",
        "item": "— For the gravy —"
      },
      {
        "qty": "1 tablespoon",
        "item": "oil"
      },
      {
        "qty": "5 ounces (127 g)",
        "item": "sliced, canned mushrooms, rinsed and drained"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "3 tablespoons",
        "item": "low-FODMAP, gluten-free rice flour or potato flour"
      },
      {
        "qty": "2 cups",
        "item": "low-FODMAP beef broth / stock, plus extra as needed"
      },
      {
        "qty": "2 teaspoons",
        "item": "Dijon mustard"
      },
      {
        "qty": "2 teaspoons",
        "item": "Worcestershire sauce"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper to taste"
      },
      {
        "qty": "to taste",
        "item": "Fresh parsley, for garnish, optional"
      }
    ],
    "steps": [
      "Place all Salisbury Steak ingredients into a large bowl and mix with your hands until combined.",
      "Divide into 4 oval patties.",
      "Heat a large non-stick cast iron skillet over high heat and add oil for cooking.",
      "Add the steaks and cook the first side for 1 minute or until browned, then flip and brown the other side (they will still be raw inside).",
      "Place onto a plate for now.",
      "Prepare the gravy: Turn heat to medium and add oil to the skillet to warm. Place the mushrooms into the skillet and cook for 2 - 3 minutes.",
      "Add the garlic infused oil then stir in the low-FODMAP, GF flour and stir for about 30 seconds. Gradually add in low-FODMAP beef broth, stirring as you go.",
      "Once mostly lump free, whisk in remaining ingredients.",
      "Taste sauce, and add salt and pepper as needed.",
      "Add the prepared steaks, then cook for 5 - 7 minutes, or until gravy is thickened, stirring occasionally. If the gravy thickens too much, add more low-FODMAP broth."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Gluten-free breadcrumbs and rice flour, canned mushrooms rinsed, and only 2 tablespoons of ketchup across 4 serves. Check that your ketchup and Worcestershire have no onion or garlic. A \"Salisbury Steak\" already exists in the cookbook, so this one carries the source name.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-sesame-glazed-tofu",
    "name": "Sesame Glazed Tofu",
    "emoji": "🥢",
    "category": "dinner",
    "time": "20 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "20-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-sesame-glazed-tofu-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "7 oz (200 g)",
        "item": "extra-firm tofu, drained and pressed"
      },
      {
        "qty": "4 tablespoons",
        "item": "cornstarch, divided (3 tbsp + 1 tbsp)"
      },
      {
        "qty": "1 teaspoon",
        "item": "paprika"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused olive oil, or canola oil, depending on your preference, for frying"
      },
      {
        "qty": "3 tablespoons",
        "item": "soy sauce or gluten-free soy sauce"
      },
      {
        "qty": "1/4 cup + 1 tablespoon",
        "item": "water, divided"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "sesame oil"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "rice vinegar (not seasoned rice vinegar)"
      },
      {
        "qty": "3 1/2 tablespoons",
        "item": "maple syrup"
      },
      {
        "qty": "2 tablespoons",
        "item": "toasted sesame seeds, plus extra for garnish"
      },
      {
        "qty": "to taste",
        "item": "Green scallion tips, chopped"
      }
    ],
    "steps": [
      "Begin by pressing your tofu, wrap it in a towel and leave something heavy on it for a 2-3 minutes While tofu is pressing, create a slurry with 1 tbsp of the cornstarch in 1 tbsp of water, mixed well.",
      "Set aside for later.",
      "Cut tofu into chunks, bite sized.",
      "Mix remaining 3 tbsp cornstarch and paprika together in a medium bowl, then add in chunks of tofu and toss to coat.",
      "Place coated tofu pieces into a non-stick medium sized saucepan over medium low heat with your oil Do not crowd your pieces, work in batches if necessary.",
      "Cook for about 5-7 minutes, flipping often until all sides are golden.",
      "While cooking, prepare sauce.",
      "In a medium pot, place soy sauce, water, sesame oil, rice vinegar and maple syrup and mix well.",
      "Place sauce on the stove and cook over medium low until heated well but not boiling.",
      "Add in the slurry and begin to stir the sauce for 3-5 mins until the cornstarch has dissolved.",
      "Remove from heat, add the tofu and 2 tbsp sesame seeds.",
      "Toss to coat everything.",
      "Serve over white rice and top with extra sesame seeds and scallion tips"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Firm tofu, cornstarch, soy sauce, maple syrup and sesame are all fine. Use gluten-free soy sauce if needed. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-sheet-pan-caprese-chicken",
    "name": "Sheet Pan Caprese Chicken",
    "emoji": "🍅",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "sheet-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/easy-low-fodmap-sheet-pan-caprese-chicken-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoons",
        "item": "olive oil or garlic infused oil; divided"
      },
      {
        "qty": "1 tablespoon",
        "item": "low-FODMAP Italian seasoning"
      },
      {
        "qty": "1 teaspoon",
        "item": "Kosher salt, plus to taste"
      },
      {
        "qty": "1 teaspoon",
        "item": "freshly ground black pepper, plus to taste"
      },
      {
        "qty": "2 large",
        "item": "tomatoes, sliced"
      },
      {
        "qty": "4-6",
        "item": "boneless, skinless chicken breasts, about 24 ounces"
      },
      {
        "qty": "1/4 cup",
        "item": "balsamic vinegar"
      },
      {
        "qty": "about 3/4 lb",
        "item": "fresh mozzarella, sliced into 6-12 rounds"
      },
      {
        "qty": "6-8",
        "item": "fresh basil leaves, torn"
      },
      {
        "qty": "3-4 cups",
        "item": "of baby arugula, for serving, optional"
      },
      {
        "qty": "to taste",
        "item": "Crusty low-FODMAP, gluten-free bread for serving"
      }
    ],
    "steps": [
      "Preheat the oven to 400 degrees F and place rack in the center of oven.",
      "Place the chicken breasts in a large bowl.",
      "Add oil or infused oil, low-FODMAP Italian seasoning, salt, and pepper to the chicken and rub the seasoning and oil over the breasts.",
      "Lay the chicken breasts on the sheet pan, and drizzle the chicken with the remaining tablespoon of oil.",
      "Place chicken in oven for about 15 minutes.",
      "While this is baking, place your balsamic vinegar in a small saucepan and bring to a boil over medium-high heat.",
      "Lower the heat to medium, and simmer until the vinegar has reduced by half and is thick enough to coat back of the spoon, about 5 minutes.",
      "Remove from heat and set aside for now After 15 minutes, remove chicken from oven, place sliced mozzarella cheese over each piece of chicken and then tomato slice Replace in oven for 5-10 minutes Chicken is done when the internal temperature is 165 degrees F When chicken is cooked, remove from oven and sprinkle the chicken with the fresh basil and drizzle with the balsamic reduction.",
      "Add salt and pepper to taste Tilting the pan, spoon the collected pan juices over the tomatoes and chicken Serve on a bed of arugula with low-FODMAP crusty bread on the side"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Fresh mozzarella is a low-lactose cheese, tomatoes and basil are fine, and the balsamic works out to 1 tablespoon per serve. Serve with gluten-free bread or over arugula.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-penne-alla-vodka",
    "name": "Penne alla Vodka",
    "emoji": "🍝",
    "category": "dinner",
    "time": "20 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "20-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-gluten-free-penne-alla-vodka/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8 ounces",
        "item": "uncooked LF, gluten-free penne pasta"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "1 tablespoon + 1 teaspoon",
        "item": "onion-infused oil, divided"
      },
      {
        "qty": "1/4 cup (2 ounces)",
        "item": "vodka"
      },
      {
        "qty": "1/2 cup",
        "item": "all-natural tomato paste"
      },
      {
        "qty": "3/4 cup + 2 tablespoons",
        "item": "heavy whipping cream"
      },
      {
        "qty": "1 teaspoon",
        "item": "Kosher salt, plus to taste"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "black pepper, plus to taste"
      },
      {
        "qty": "1/8 teaspoon",
        "item": "red pepper flakes, optional"
      },
      {
        "qty": "1/2 ounce",
        "item": "fresh basil, chopped, plus for garnish"
      },
      {
        "qty": "to taste",
        "item": "Freshly grated Parmesan, optional"
      }
    ],
    "steps": [
      "Boil a large pot of water for the penne and cook it al dente according to package instructions (about 7 minutes)",
      "While cooking, add the infused oils to a skillet over medium heat and allow to warm",
      "Add the vodka and let the sauce bubble for 30 seconds or so",
      "Stir in the tomato paste until well combined, then add the cream slowly and reduce heat",
      "As the sauce thickens, stir intermittently and season with salt, black pepper, and red pepper flakes, if using",
      "Before draining pasta, reserve 1/2 cup of the water from the pasta, set aside for later",
      "Add the pasta water to the sauce to loosen, as needed (start with 1/4 cup, then add a tablespoon at a time)",
      "Stir in the basil, and add seasoning to taste",
      "Drain pasta and toss with 1 teaspoon of infused oil, then place in the skillet to cover with the sauce",
      "Sprinkle with Parmesan before serving"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Tomato paste is 1/2 cup across four serves and heavy cream works out to a small serve each; if you are sensitive to either, make it a side portion. Vodka is fine.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-honey-walnut-shrimp",
    "name": "Honey Walnut Shrimp",
    "emoji": "🍤",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free option",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-honey-walnut-shrimp-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/2 cup",
        "item": "water"
      },
      {
        "qty": "1/2 cup",
        "item": "granulated sugar"
      },
      {
        "qty": "to taste",
        "item": "Pinch of salt"
      },
      {
        "qty": "1/2 cup (50 g)",
        "item": "walnut halves, raw"
      },
      {
        "qty": "4 large",
        "item": "egg whites"
      },
      {
        "qty": "2/3 cup",
        "item": "cornstarch"
      },
      {
        "qty": "1/4 cup",
        "item": "mayonnaise"
      },
      {
        "qty": "1 pound (18-20)",
        "item": "large shrimp, tails off, peeled and deveined"
      },
      {
        "qty": "1 tablespoon",
        "item": "light corn syrup"
      },
      {
        "qty": "1 tablespoon",
        "item": "honey"
      },
      {
        "qty": "1 tablespoon",
        "item": "sweetened condensed milk"
      },
      {
        "qty": "1 cup",
        "item": "canola or other high smoke point oil for frying"
      },
      {
        "qty": "to taste",
        "item": "Green scallion tips for garnish, optional"
      }
    ],
    "steps": [
      "Place water, salt, sugar and walnuts in small saucepan and bring to a boil over medium high heat (this will create the candied walnuts for the dish).",
      "Boil for 2 minutes, then remove the walnuts using a slotted spoon and place on a small plate to dry and cool.",
      "In a small bowl, stir together corn syrup, honey, mayonnaise and sweetened condensed milk to create your sauce.",
      "Set aside for later In a medium bowl, whisk the egg whites until they are foamy Add cornstarch, whisk again until these are well incorporated.",
      "This will create your tempura-like batter.",
      "Dip shrimp in the batter one at a time using a fork or other dipping tool The coating should be somewhat light on the shrimp.",
      "In a deep pan or pot, heat oil until shimmering, then add shrimp to brown lightly on both sides, about 5 minutes You may need to work in batches, use a cover to prevent spattering of the hot oil.",
      "Add the fried shrimp to the prepared mayonnaise sauce and toss lightly to coat.",
      "Place into your serving plate and top with the candied walnuts.",
      "Serve immediately, topped with sliced scallion tips, over white rice."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. The sweet sauce uses mayonnaise with just 1 tablespoon each of honey and condensed milk across four serves, which the author counts as low-FODMAP; if you react to fructose, treat it as borderline. Walnuts are fine in this amount. Shrimp and cornstarch batter are fine.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-lemon-artichoke-fettuccine",
    "name": "Lemon Artichoke Fettuccine",
    "emoji": "🍋",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegetarian",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-lemon-artichoke-fettuccine-pasta-gluten-free-vegetarian/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8 ounces",
        "item": "low-FODMAP, gluten-free fettuccini pasta, or your preferred alternative"
      },
      {
        "qty": "3 tablespoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "1 (14 oz) jar or can",
        "item": "artichoke hearts, quartered and drained"
      },
      {
        "qty": "to taste",
        "item": "Zest of 1 medium lemon"
      },
      {
        "qty": "to taste",
        "item": "Juice of 1 medium lemon"
      },
      {
        "qty": "1 1/2 cups",
        "item": "dry white wine, such as chardonnay"
      },
      {
        "qty": "2 tablespoons",
        "item": "chopped fresh parsley, plus additional for garnish; divided"
      },
      {
        "qty": "6",
        "item": "basil leaves, chopped, plus additional for garnish; divided"
      },
      {
        "qty": "4 tablespoons",
        "item": "unsalted butter"
      },
      {
        "qty": "1 1/2 teaspoons",
        "item": "salt, divided"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "freshly ground black pepper"
      },
      {
        "qty": "½ cup",
        "item": "freshly grated Parmesan cheese"
      },
      {
        "qty": "¼ cup",
        "item": "toasted pine nuts"
      }
    ],
    "steps": [
      "Add 1 teaspoon of the salt to a large pot of water and bring to a boil.",
      "Cook the pasta until al-dente (slightly firm).",
      "While the water is boiling, add the infused oil to a large skillet and heat over medium-high heat.",
      "Add the artichoke hearts, lemon zest, lemon juice, and white wine.",
      "Bring to a simmer for about 10 minutes, or until the liquid has reduced to half.",
      "Stir in half the parsley and basil.",
      "Add the butter and let it melt into the sauce.",
      "Season with the ½ tsp each of salt and pepper and stir, then turn down the heat on the sauce to stay just warm until pasta is ready.",
      "When the pasta is cooked, drain and toss it in the skillet with the sauce and remaining parsley and basil to coat.",
      "Sprinkle with the freshly grated Parmesan cheese, garnish with your fresh basil and parsley as well as toasted pine nuts.",
      "Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned artichoke hearts are low-FODMAP in a small serve (fresh artichoke is not); one can across four serves fits. The author notes 1 cup of white wine is one low-FODMAP serve, and this uses 1 1/2 cups across four. Parmesan and pine nuts are fine.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-pasta-alle-vongole",
    "name": "Pasta alle Vongole",
    "emoji": "🐚",
    "category": "dinner",
    "time": "25 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-pasta-alla-vongole-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 tablespoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "6 tablespoons",
        "item": "unsalted butter"
      },
      {
        "qty": "to taste",
        "item": "Pinch red pepper flakes"
      },
      {
        "qty": "2 (6.5 ounce) cans",
        "item": "chopped clams"
      },
      {
        "qty": "1 (10 ounce) can",
        "item": "whole clams"
      },
      {
        "qty": "3 tablespoons",
        "item": "white wine"
      },
      {
        "qty": "3 tablespoons",
        "item": "finely chopped Italian Parsley"
      },
      {
        "qty": "to taste",
        "item": "Zest of one lemon, optional"
      },
      {
        "qty": "to taste",
        "item": "Grated Parmesan, optional"
      },
      {
        "qty": "12 ounces",
        "item": "dry low-FODMAP, Gluten-free pasta, I like Linguini"
      }
    ],
    "steps": [
      "Drain clams and reserve clam water/juice from 2 of the cans of chopped clams.",
      "Heat infused oil in saucepan on low and simmer for about 2 minutes.",
      "Add butter and red pepper flakes.",
      "When butter is melted, add reserved clam water/juice and wine and heat until broth is reduced by half.",
      "While this is cooking, boil your pasta in a large pot with salted water until al-dente.",
      "Drain pasta when cooked.",
      "When sauce is reduced, stir in cooked pasta, clams, parsley and lemon zest until combined.",
      "Serve hot with freshly ground black pepper topped with optional Parmesan cheese, if desired."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned clams, butter, white wine and parsley are all fine. Use low-FODMAP gluten-free linguine. Serves 6.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-30-minute-korean-beef",
    "name": "30-Minute Korean Beef",
    "emoji": "🥩",
    "category": "dinner",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "15-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-korean-beef-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "garlic infused oil"
      },
      {
        "qty": "1 pound",
        "item": "lean ground beef"
      },
      {
        "qty": "1/4-1/2 cup",
        "item": "dark brown sugar, per your desired sweetness"
      },
      {
        "qty": "1/4 cup",
        "item": "soy sauce, gluten-free if necessary"
      },
      {
        "qty": "2 teaspoons",
        "item": "toasted sesame oil"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "fresh ginger, minced or grated"
      },
      {
        "qty": "1/2 – 1 teaspoon",
        "item": "crushed red pepper, titrate to taste"
      },
      {
        "qty": "4-6",
        "item": "scallions, green tips only"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper, if desired"
      },
      {
        "qty": "to taste",
        "item": "Toasted sesame seeds, for garnish"
      },
      {
        "qty": "to taste",
        "item": "Cooked white rice, or lettuce leaves/lettuce cups, for serving"
      }
    ],
    "steps": [
      "Heat infused oil in a large skillet over medium heat",
      "Add the beef, and brown it completely, breaking into pieces as it cooks with a wooden spoon or spatula (This part takes about 5-7 minutes)",
      "While beef is cooking, in a small bowl, combine your sesame oil, brown sugar, soy sauce, ginger, and red pepper flakes",
      "Once beef is cooked, drain excess grease, if necessary",
      "Pour the sauce over the beef in the skillet, and allow to simmer for a few minutes on medium, or medium-low heat",
      "Taste, and season as desired (more sugar, pepper, etc)",
      "Remove from heat and stir in scallion tips. Garnish with sesame seeds",
      "Serve over steamed rice, or in lettuce leaves/cups"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Soy sauce, brown sugar and sesame oil are fine in these amounts. Use gluten-free soy sauce if needed. Serve over rice or in lettuce cups.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-creamy-tuscan-chicken",
    "name": "Creamy Tuscan Chicken",
    "emoji": "🍗",
    "category": "dinner",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-creamy-tuscan-chicken-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 tablespoons",
        "item": "olive oil or your preferred oil for pan cooking; divided"
      },
      {
        "qty": "24 ounces",
        "item": "boneless, skinless chicken breasts"
      },
      {
        "qty": "1 tablespoon",
        "item": "low-FODMAP Italian seasoning"
      },
      {
        "qty": "5 tablespoons",
        "item": "low-FODMAP gluten-free flour, divided"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "salt, plus additional for sprinkling"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "pepper, plus additional for sprinkling"
      },
      {
        "qty": "1/2 cup (27 g)",
        "item": "chopped sun dried tomatoes"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP chicken broth, prepared"
      },
      {
        "qty": "1/2 cup",
        "item": "heavy cream or canned coconut cream for dairy-free"
      },
      {
        "qty": "1/4 cup",
        "item": "grated Parmesan cheese, plus additional for serving"
      },
      {
        "qty": "2 teaspoons",
        "item": "garlic-infused oil"
      },
      {
        "qty": "2 teaspoons",
        "item": "shallot or onion infused oil"
      },
      {
        "qty": "3 tablespoons (14g)",
        "item": "fresh basil; chopped, plus for garnish"
      },
      {
        "qty": "5 ounces (143 g)",
        "item": "fresh spinach, lightly torn"
      }
    ],
    "steps": [
      "Pound your chicken breasts using a mallet or rolling pin between plastic wrap or parchment to tenderize",
      "Place 4 tablespoons of flour, low-FODMAP Italian seasoning, salt and pepper on a shallow plate, and mix lightly",
      "Lightly dredge chicken in the flour mixture",
      "Heat the olive oil or other oil in a skillet over medium high heat",
      "When the pan is hot, add the chicken pieces and brown on both sides, about 2-4 minutes per side",
      "Remove chicken to a plate to keep warm",
      "To the skillet, add remaining 2 tablespoons olive oil and sundried tomatoes cook for 1-2 minutes or until fragrant.",
      "Whisk in the remaining 1 tablespoon LF flour and allow to thicken for approximately 1 minute",
      "Add the heavy cream, LF chicken broth, 1/4 cup parmesan cheese, 2 infused oils and stir to combine",
      "Allow to cook until the sauce begins to thicken",
      "Add the spinach and fresh basil and reduce heat to simmer",
      "Cook until the spinach wilts slightly",
      "Taste sauce and add salt and pepper to taste",
      "Add the chicken back into the skillet and turn to coat in the sauce",
      "Simmer until the chicken is heated through, and internal temperature is 165F, about 5 minutes. Garnish with additional fresh parmesan and fresh basil, and serve alongside your preferred low-FODMAP, GF Pasta or potatoes (try my low-FODMAP Rosemary Lemon Roasted Potatoes!)."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Heavy cream is a small amount per serve; use the canned coconut cream option if lactose bothers you. Keep the sun-dried tomatoes to the listed 1/2 cup across six serves. Parmesan is a hard, low-lactose cheese.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-spaghetti-alla-carbonara",
    "name": "Spaghetti alla Carbonara",
    "emoji": "🍝",
    "category": "dinner",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-spaghetti-alla-carbonara-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "16 ounces (375 g)",
        "item": "low-FODMAP, gluten-free dry spaghetti"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "6 ounces",
        "item": "pancetta or slab bacon, cubed or sliced into small strips"
      },
      {
        "qty": "2 large",
        "item": "eggs and 2 egg yolks, room temperature"
      },
      {
        "qty": "1 cup (90 g)",
        "item": "freshly grated Pecorino Romano or Parmigiano-Reggiano (Parmesan cheese), plus more for serving"
      },
      {
        "qty": "½ tsp",
        "item": "freshly ground black pepper, plus to taste"
      },
      {
        "qty": "to taste",
        "item": "Kosher salt, to taste"
      },
      {
        "qty": "1",
        "item": "handful fresh Italian (flat) parsley, chopped"
      }
    ],
    "steps": [
      "Bring a large pot of salted water to a boil.",
      "Add your pasta and cook for 7 to 10 minutes until cooked but still slightly firm (otherwise known as al-dente).",
      "Adjust this cook time based on your pasta brand (gluten-free will get mushy so do NOT overcook).",
      "In a small bowl, beat the egg, egg yolks and Pecorino or Parmesan together well, then add the 1/2 teaspoon of black pepper and whisk again.",
      "Set aside for later.",
      "It should be like a creamy sauce.",
      "Once your pasta is about halfway through cooking, heat the infused oil in a deep skillet over medium heat (I prefer a cast iron skillet for this).",
      "Add the pancetta or slab bacon and sauté until the bacon is crisp (about 3 minutes).",
      "Drain the pasta, and reserve 1/2 cup of the pasta water for later.",
      "Remove the pan from heat and turn off burner.",
      "Add the drained pasta to the pan and toss for 2 minutes to coat the noodles in the residual fat.",
      "Slowly pour the egg/cheese mixture into the pasta, whisking quickly until the eggs thicken, but do not scramble (this is done off the heat to limit the eggs from overcooking).",
      "Thin out the sauce with the reserved pasta water, a bit at a time, until it reaches your desired consistency.",
      "Season the carbonara with several turns of freshly ground black pepper and salt to taste.",
      "Serve the low-FODMAP Spaghetti Alla Carbonara garnished with the chopped parsley and additional Pecorino/Parmesan."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Pecorino and Parmesan are hard, low-lactose cheeses; pancetta, eggs and black pepper are fine. Eight ingredients.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-chicken-a-la-king",
    "name": "Chicken à la King",
    "emoji": "🍲",
    "category": "dinner",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free option",
      "one-pot",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-30-minute-chicken-a-la-king-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 1/2 tablespoons",
        "item": "onion- or shallot-infused oil"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "garlic-infused oil"
      },
      {
        "qty": "3 tablespoons",
        "item": "unsalted butter, or olive oil"
      },
      {
        "qty": "4.5 ounces",
        "item": "canned sliced mushrooms, drained and rinsed"
      },
      {
        "qty": "1 medium",
        "item": "green bell pepper, chopped"
      },
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP, gluten-free all-purpose flour"
      },
      {
        "qty": "1 1/2 cups",
        "item": "low-FODMAP chicken broth or stock"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "3/4 teaspoon",
        "item": "salt, plus to taste"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "fresh ground black pepper, plus to taste"
      },
      {
        "qty": "2 teaspoons",
        "item": "Dijon mustard"
      },
      {
        "qty": "24 ounces",
        "item": "chopped or shredded chicken breast"
      },
      {
        "qty": "1/2 cup",
        "item": "heavy cream or canned coconut cream"
      },
      {
        "qty": "1 cup",
        "item": "canned peas, rinsed and drained, about 150 g"
      },
      {
        "qty": "1/4 cup",
        "item": "finely minced red bell pepper or pimentos, drained"
      },
      {
        "qty": "6 cups",
        "item": "of your preferred choice of rice, prepared"
      }
    ],
    "steps": [
      "Melt butter or olive oil over medium-high heat in a heavy stockpot or Dutch oven, then stir in the onion/shallot and garlic infused oils.",
      "Add green pepper and cook for 5 minutes or until softens.",
      "Add mushrooms and cook until golden brown (about 2 minutes).",
      "Adjust heat to medium or medium-low, and stir in the LF,GF rice flour.",
      "Continue to stir and cook for about 1-2 minutes, the flour will slightly brown.",
      "Add in the low-FODMAP chicken broth while stirring to combine.",
      "Once well combined, add the low-FODMAP milk, salt, pepper, and Dijon mustard and simmer for about 3 minutes.",
      "It should begin to thicken.",
      "Taste sauce, and adjust seasonings to your preference.",
      "Reduce heat to low and gently add the heavy cream.",
      "Next, stir in chicken followed by canned peas and red peppers or pimentos.",
      "Cook for about 2-3 minutes, until heated through.",
      "Serve over your prepared rice."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned mushrooms, drained and rinsed, are low-FODMAP per Monash (fresh mushrooms are not). Use lactose-free milk and the coconut-cream option for dairy-free. Keep the canned peas to the listed amount.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-one-skillet-bacon-maple-and-mustard-chicken",
    "name": "One-Skillet Bacon, Maple and Mustard Chicken",
    "emoji": "🥓",
    "category": "dinner",
    "time": "30 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/one-skillet-low-fodmap-bacon-maple-and-mustard-chicken-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 1/2 cups",
        "item": "low-FODMAP chicken broth or stock"
      },
      {
        "qty": "2/3 cup",
        "item": "Dijon mustard"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "paprika"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/8 teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "8",
        "item": "strips bacon uncooked, chopped"
      },
      {
        "qty": "2 lbs",
        "item": "chicken breasts, boneless, skinless, eight 4 ounce breasts"
      },
      {
        "qty": "1 tablespoon",
        "item": "onion-infused olive oil"
      },
      {
        "qty": "3 sprigs",
        "item": "fresh rosemary, plus additional for garnish"
      },
      {
        "qty": "4 tablespoons",
        "item": "pure maple syrup"
      }
    ],
    "steps": [
      "In a small bowl or large cup, combine the 1 & 1/2 cups low-FODMAP chicken broth, mustard, paprika, salt and pepper.",
      "Set aside.",
      "In a large skillet, cook chopped bacon over medium-high heat just until it starts to brown.",
      "Remove to a plate, leaving the bacon fat in the skillet To the same skillet, add chicken breasts and brown well on both sides.",
      "You don’t need to cook them thoroughly at this point.",
      "Remove to the same plate, with bacon.",
      "Add 1 tablespoon infused olive oil to the hot skillet (there will still be bacon grease on it too, that is fine), adjusting heat to medium depending on your stovetop.",
      "Add the chicken broth mixture and stir to combine.",
      "Bring to boil, scraping the bottom of the pan as needed.",
      "Add the cooked bacon and mix well Replace the chicken breasts and add the rosemary sprigs.",
      "Reduce the heat to medium-low and cook for about 15-20 minutes, turning chicken once, until chicken breast is fully cooked and no longer pink in the center (internal temperature of 165 F).",
      "Remove the chicken to a covered dish to keep warm, leaving the bacon pieces in the skillet.",
      "Finish the sauce by allowing to boil, stirring frequently, until reduced by half.",
      "Remove the rosemary and stir in the maple syrup.",
      "Taste and add salt and pepper as desired.",
      "Serve chicken with sauce spooned over top, garnished with additional fresh rosemary."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Maple syrup, Dijon mustard, bacon and rosemary are all fine. Serves 8 as written; halve it for a family dinner.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-lemon-butter-chicken-over-pasta",
    "name": "Lemon Butter Chicken over Pasta",
    "emoji": "🍋",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-lemon-butter-chicken-with-pasta-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 (4 oz)",
        "item": "boneless skinless chicken breasts"
      },
      {
        "qty": "1/3 cup",
        "item": "low-FODMAP, gluten-free all-purpose flour"
      },
      {
        "qty": "4 tablespoons",
        "item": "butter; divided"
      },
      {
        "qty": "2 tbsp",
        "item": "chopped chives or green scallion tips"
      },
      {
        "qty": "1 tablespoon",
        "item": "shallot or onion infused oil"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP chicken broth/stock"
      },
      {
        "qty": "3 tablespoons",
        "item": "fresh lemon juice, about 1 medium lemon"
      },
      {
        "qty": "8 ounces",
        "item": "low-FODMAP, gluten-free Penne or Farfalle Pasta"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper"
      }
    ],
    "steps": [
      "Slice raw chicken crosswise into narrow strips.",
      "Place low-FODMAP flour in a shallow dish or plate and coat chicken pieces in it.",
      "Heat a large pan over medium heat and add 2 tablespoons butter.",
      "When butter is melted, add chives and let infuse the oil for 2-3 minutes.",
      "Next, add the chicken strips and saute, stirring frequently, until cooked through (about 3-5 minutes).",
      "While cooking chicken, in a separate saucepan, cook pasta until al-dente style (slightly firm).",
      "Remove pasta and drain, toss with infused oil.",
      "When chicken is cooked, place in covered dish to keep warm.",
      "Add low-FODMAP chicken broth to the pan and allow to simmer.",
      "Add lemon juice and boil until mixture is reduced to about 1/3 cup (about 4 to 5 minutes).",
      "Remove from heat and add remaining 2 tablespoons butter.",
      "Return chicken to pan and heat through.",
      "Taste sauce, and add salt and pepper as desired.",
      "Toss with pasta to coat and serve in a large bowl or casserole dish."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Chives or scallion green tips give the onion flavour. Butter is fine in this amount. Use low-FODMAP gluten-free penne or farfalle.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-vegetarian-pad-thai",
    "name": "Vegetarian Pad Thai",
    "emoji": "🍜",
    "category": "dinner",
    "time": "25 min",
    "serves": 3,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegetarian",
      "vegan option",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-pad-thai-perfection-recipe/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/3 cup",
        "item": "water or low-FODMAP vegetable stock"
      },
      {
        "qty": "2 tbsps",
        "item": "soy sauce, optional use gluten free"
      },
      {
        "qty": "3 tbsps",
        "item": "brown sugar"
      },
      {
        "qty": "3 tbsps",
        "item": "natural peanut butter, salted or unsalted"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh squeezed lime juice"
      },
      {
        "qty": "1 tbsp",
        "item": "rice wine vinegar"
      },
      {
        "qty": "2 tsps",
        "item": "Tabasco Original sauce, more to taste"
      },
      {
        "qty": "1 tsp",
        "item": "grated fresh ginger, or 1/2 tsp ground ginger"
      },
      {
        "qty": "4 ounces",
        "item": "rice noodles, cooked and rinsed per package instructions"
      },
      {
        "qty": "1/2 cup",
        "item": "bean sprouts"
      },
      {
        "qty": "1 tsp",
        "item": "garlic infused oil"
      },
      {
        "qty": "1 large",
        "item": "egg, beaten, optional for vegans"
      },
      {
        "qty": "2 cups",
        "item": "firm or extra-firm tofu, cut in cubes"
      },
      {
        "qty": "to taste",
        "item": "Chopped cilantro, crushed peanuts, bean sprouts and lime wedges"
      }
    ],
    "steps": [
      "Combine ingredients for sauce in medium bowl and mix well (I used a mini-processor to combine)",
      "Cook tofu in infused oil over medium heat",
      "If skillet large enough move to side (or remove temporarily) and add egg",
      "Scramble egg",
      "Add cooked and drained noodles to skillet with tofu/egg and pour sauce over the top",
      "Cook for 3-5 minutes until sauce thickens slightly",
      "Add bean sprouts and cook 1 minute, or less if you prefer your sprouts crunchy",
      "Plate with assorted garnish as desired",
      "Add additional Tabasco to taste"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Rice noodles, firm tofu, peanut butter and bean sprouts are low-FODMAP in these amounts; the heat comes from Tabasco rather than a garlic chilli sauce. Leave out the egg for vegan. Serves 3.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-bourbon-chicken",
    "name": "Bourbon Chicken (Rachel Pauls)",
    "emoji": "🍗",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/one-skillet-low-fodmap-bourbon-chicken-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/4 cup",
        "item": "low sodium soy sauce"
      },
      {
        "qty": "1/4 cup",
        "item": "bourbon"
      },
      {
        "qty": "1/4 cup",
        "item": "unsweetened pure cranberry juice"
      },
      {
        "qty": "1 tablespoon",
        "item": "rice wine vinegar"
      },
      {
        "qty": "1 tablespoon",
        "item": "pure maple syrup"
      },
      {
        "qty": "2 tablespoons",
        "item": "brown sugar"
      },
      {
        "qty": "1 teaspoon",
        "item": "grated fresh ginger"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "crushed red pepper, optional"
      },
      {
        "qty": "24 ounces",
        "item": "boneless, skinless chicken thighs, cut into 1/2-inch-thick strips"
      },
      {
        "qty": "1 tablespoon",
        "item": "cornstarch, plus 1 teaspoon, divided"
      },
      {
        "qty": "1 tablespoon",
        "item": "canola oil, for cooking"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused oil"
      },
      {
        "qty": "2 teaspoons",
        "item": "water"
      },
      {
        "qty": "3 cups",
        "item": "cooked rice, for serving"
      },
      {
        "qty": "to taste",
        "item": "Sliced green scallion tips for garnish"
      }
    ],
    "steps": [
      "In a medium bowl, whisk together your GF soy sauce, bourbon, cranberry juice, rice vinegar, maple syrup, brown sugar, infused oil, ginger and crushed red pepper (if using).",
      "In a second large bowl, place 1 tablespoon cornstarch and toss your chicken pieces to coat lightly.",
      "Heat a large skillet over medium high and add your 1 tablespoon of canola oil.",
      "Add the chicken pieces and cook through, until golden brown and slightly crispy, about 7 minutes.",
      "Add the soy-bourbon mixture; stir to coat pieces in the sauce.",
      "Cook, stirring often, until the sauce has reduced and the chicken is cooked through (internal temp is 165F), about another 7 minutes.",
      "In a small cup or bowl, create a slurry with the remaining cornstarch and water.",
      "Stir this into the sauce Continue mixing the chicken over heat, adjusting heat as necessary, until the sauce is thickened to your taste Serve over rice, garnished with fresh scallion tips"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Pure cranberry juice, maple syrup and brown sugar are fine in these amounts; use gluten-free soy sauce if needed. A \"Bourbon Chicken\" already exists in the cookbook, so this one carries the source name.",
    "isCustom": true
  },
  {
    "id": "kandy-rp-vegetarian-fried-rice",
    "name": "Vegetarian Fried Rice",
    "emoji": "🍚",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegetarian",
      "vegan option",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/easy-low-fodmap-vegetarian-or-vegan-fried-rice-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "21 oz (600 g)",
        "item": "extra-firm tofu, chopped (160 g is one low-FODMAP serve)"
      },
      {
        "qty": "5 teaspoons",
        "item": "toasted sesame oil, divided"
      },
      {
        "qty": "3 teaspoons",
        "item": "garlic infused olive oil; divided"
      },
      {
        "qty": "1 cup (about 2-3 medium)",
        "item": "chopped carrots"
      },
      {
        "qty": "1/2 cup (64 g)",
        "item": "fresh or fresh frozen corn kernels, do not substitute canned"
      },
      {
        "qty": "1 cup (about 1 medium)",
        "item": "zucchini, chopped"
      },
      {
        "qty": "1 cup",
        "item": "yellow squash, chopped"
      },
      {
        "qty": "2 tablespoons (8 g)",
        "item": "chopped green scallion tips, plus additional for garnish"
      },
      {
        "qty": "2 large",
        "item": "eggs, whisked, omit for vegan version"
      },
      {
        "qty": "4 cups",
        "item": "cooked rice of your choice, long grain, white rice or basmati work well"
      },
      {
        "qty": "4 tablespoons",
        "item": "low-sodium tamari (gluten free soy sauce) or soy sauce"
      },
      {
        "qty": "to taste",
        "item": "Salt and freshly ground black pepper to taste"
      }
    ],
    "steps": [
      "In a large non-stick wok or skillet, heat 2 teaspoons sesame oil and 2 teaspoons of the infused oil over medium-high heat.",
      "Once hot, add tofu pieces and season lightly with salt and pepper.",
      "Cook over medium until done, flipping once (about 4 minutes).",
      "Transfer tofu to a plate for later.",
      "Return skillet to medium-high heat, and add remaining 3 teaspoons sesame oil and 1 teaspoon garlic infused oil.",
      "Add carrots and sauté 3 minutes, then add zucchini and squash and cook until soft.",
      "Add corn and scallion tips and sauté 1 minute longer.",
      "Push veggies to one side of the pan of pan, and place eggs on the other side.",
      "Season eggs with salt and pepper lightly and scramble them Return tofu to skillet along with the cooked rice Add in tamari or soy sauce and stir fry until warmed and coated with sauce Serve immediately"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): garlic- and onion-infused oils stand in for garlic and onion, and the flour, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Firm tofu is low-FODMAP; the author sizes it at 160 g per serve. Fresh or frozen corn is kept to 1/2 cup across the batch (canned corn is higher). Carrot, zucchini, yellow squash, eggs and rice are fine. Omit the eggs for vegan.",
    "isCustom": true
  },


  // ─── RACHEL PAULS FOOD + THE FODMAP FORMULA — low-FODMAP breakfasts, lunches, Tex-Mex and one-pan dinners ─────────
  {
    "id": "kandy-rp4-air-fryer-egg-bites",
    "name": "Air-Fryer Egg Bites",
    "emoji": "🥚",
    "category": "breakfast",
    "time": "20 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "air-fryer",
      "20-min",
      "high-protein",
      "meal-prep"
    ],
    "source": "https://rachelpaulsfood.com/easy-20-minute-low-fodmap-air-fryer-egg-bites-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6 large",
        "item": "eggs"
      },
      {
        "qty": "1 tablespoon",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "4 slices",
        "item": "cooked bacon, crumbled"
      },
      {
        "qty": "1/2 cup",
        "item": "sharp cheddar cheese, shredded"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/8 teaspoon",
        "item": "pepper"
      },
      {
        "qty": "to taste",
        "item": "Pinch of paprika"
      },
      {
        "qty": "1",
        "item": "scallion, green tips only, chopped"
      },
      {
        "qty": "4",
        "item": "cherry tomatoes, sliced"
      },
      {
        "qty": "to taste",
        "item": "Baking spray"
      }
    ],
    "steps": [
      "In a large bowl, combine the eggs and low-FODMAP milk, whisk well.",
      "Mix in the crumbled cooked bacon, cheddar cheese, salt, pepper, paprika and scallion tips.",
      "Spray six 3-inch silicone baking cups, or oven-safe ramekins with baking spray.",
      "Equally divide the egg mixture into the 6 cups, about 2/3 full.",
      "Lay your cherry tomato slices on top.",
      "Place in the air-fryer basket, or on a baking sheet if you have tray air-fryer.",
      "Cook at 300 degrees F (on air-fry mode) for 8-10 minutes, or until done.",
      "Let stand one minute, then gently remove from baking cups, or enjoy straight from the ramekins.",
      "Serve immediately, alongside low-FODMAP fruit, bread, or potatoes.",
      "Store leftovers wrapped in plastic in the fridge for 5 days, or you can freeze, tightly wrapped in plastic for 1 month."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Eggs, bacon, cheddar (a low-lactose cheese), lactose-free milk and scallion green tips. Makes 6; they reheat well.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-chai-overnight-oats",
    "name": "Chai Overnight Oats",
    "emoji": "🥣",
    "category": "breakfast",
    "time": "10 min",
    "serves": 1,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "make-ahead",
      "5-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-chai-overnight-oats-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/8 tsp",
        "item": "cardamom"
      },
      {
        "qty": "1/8 tsp",
        "item": "cinnamon"
      },
      {
        "qty": "1/8 tsp",
        "item": "nutmeg"
      },
      {
        "qty": "1/4 tsp",
        "item": "vanilla"
      },
      {
        "qty": "1/8 tsp",
        "item": "ground ginger"
      },
      {
        "qty": "1/2 cup",
        "item": "almond milk, unsweetened, or other low-FODMAP milk such as lactose-free for dairy version"
      },
      {
        "qty": "1/2 cup",
        "item": "old fashioned rolled oats"
      },
      {
        "qty": "1/2 tbsp",
        "item": "pure maple syrup"
      },
      {
        "qty": "1/2 tbsp",
        "item": "chia seeds"
      },
      {
        "qty": "1/2 tablespoon",
        "item": "ground flax"
      },
      {
        "qty": "to taste",
        "item": "Optional toppings: semi-sweet chocolate chips, sliced coconut, chopped low-FODMAP nuts, almond/peanut butter, low-FODMAP hazelnut chocolate spread, or your favorite low-FODMAP fruit"
      }
    ],
    "steps": [
      "Place the oats, chia seeds, flax and spices in a small bowl or mason jar and stir to combine.",
      "Add the almond milk and maple syrup and stir or shake covered until incorporated.",
      "Cover and chill overnight."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Rolled oats, almond or lactose-free milk, chai spices and 1/2 tablespoon maple syrup. Single serve; multiply for the week. Keep optional toppings to low-FODMAP nuts.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-almond-joy-overnight-oats",
    "name": "Almond Joy Overnight Oats",
    "emoji": "🥥",
    "category": "breakfast",
    "time": "5 min",
    "serves": 1,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "make-ahead",
      "5-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-almond-joy-overnight-oats-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3/4 cup (177 ml)",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "1/2 cup (40 g)",
        "item": "traditional (old-fashioned) rolled oats"
      },
      {
        "qty": "1 tablespoon (15 ml)",
        "item": "pure maple syrup"
      },
      {
        "qty": "2 teaspoons",
        "item": "chia seeds"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "almond extract"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "vanilla extract"
      },
      {
        "qty": "to taste",
        "item": "Pinch of salt"
      },
      {
        "qty": "1 tablespoon",
        "item": "coconut flakes or shredded coconut"
      },
      {
        "qty": "1 teaspoon (2.5 g)",
        "item": "cocoa powder"
      }
    ],
    "steps": [
      "Place all the ingredients in a mason jar or other covered bowl and stir well to combine Leave overnight or longer in the refrigerator.",
      "Top with coconut, chocolate and almond slices prior to serving.",
      "Can be served cold or warmed in the microwave."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Oats, low-FODMAP milk, cocoa, almond extract and a tablespoon of shredded coconut, all within low-FODMAP serves. Single serve.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-oatmeal-blueberry-mug-muffin",
    "name": "Oatmeal Blueberry Mug Muffin",
    "emoji": "🫐",
    "category": "breakfast",
    "time": "5 min",
    "serves": 1,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "5-min",
      "microwave"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-oatmeal-blueberry-mug-muffin-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 large",
        "item": "egg"
      },
      {
        "qty": "3 tablespoons",
        "item": "sugar, plus more for sprinkling"
      },
      {
        "qty": "3 tablespoons",
        "item": "low-FODMAP milk, such as almond milk, or lactose-free milk"
      },
      {
        "qty": "3 tablespoons",
        "item": "gluten-free low-FODMAP pancake/biscuit mix"
      },
      {
        "qty": "3 tablespoons",
        "item": "quick oats"
      },
      {
        "qty": "2 tablespoons + 1 teaspoon",
        "item": "canola oil, or melted coconut oil"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "vanilla extract"
      },
      {
        "qty": "4 tablespoons (40 g)",
        "item": "fresh blueberries, I like using wild blueberries"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "ground cinnamon, plus additional for sprinkling"
      }
    ],
    "steps": [
      "Crack the egg into a cup or small bowl and whisk well.",
      "Measure out 2 tablespoons (30 ml) of this whisked egg into a 12-ounce or larger microwave-safe mug and discard or set aside the unused egg for another recipe.",
      "Add the sugar and whisk to combine well.",
      "Slowly add the low-FODMAP milk to the egg mixture while whisking.",
      "Add the GF Bisquick, quick oats, cinnamon, canola oil, and vanilla and mix until blended.",
      "Fold in the blueberries, ensuring they are below the surface of the batter, so they don’t spatter during cooking.",
      "Sprinkle with additional cinnamon and sugar, if desired.",
      "Microwave for 1 minute 15 seconds to 1 minute 30 seconds (should not bubble over).",
      "Let rest for about 1 minute then enjoy!"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Oats, blueberries, almond or lactose-free milk and sugar; made in the microwave in a mug. Single serve.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-egg-cups-with-turkey-bacon-and-cheese",
    "name": "Egg Cups with Turkey Bacon and Cheese",
    "emoji": "🧁",
    "category": "breakfast",
    "time": "45 min",
    "serves": 12,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "meal-prep",
      "freezer-friendly",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-egg-cups-with-turkey-bacon-and-cheese-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 cups",
        "item": "all-purpose, gluten-free Bisquick"
      },
      {
        "qty": "1/2 tsp",
        "item": "salt"
      },
      {
        "qty": "1/2 cup",
        "item": "melted butter or coconut oil"
      },
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP milk, such as almond or lactose-free"
      },
      {
        "qty": "13 small",
        "item": "or medium eggs, divided into 1 and 12, depending on how big your muffin cups are"
      },
      {
        "qty": "1/2 tsp",
        "item": "cayenne, optional"
      },
      {
        "qty": "1 1/2 cups",
        "item": "shredded sharp cheddar or mozzarella, divided"
      },
      {
        "qty": "to taste",
        "item": "About 3-4 tbsp finely chopped fresh basil or 2 tbsp chopped dried basil"
      },
      {
        "qty": "to taste",
        "item": "Can also substitute sliced tomato or green pepper"
      },
      {
        "qty": "6",
        "item": "pieces turkey bacon (about 2 ounce each) or regular bacon"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper to taste"
      },
      {
        "qty": "to taste",
        "item": "Vegetable shortening, or baking spray for greasing"
      }
    ],
    "steps": [
      "Pre-heat oven to 400 F Grease muffin cups or spray with baking spray (do not use liners).",
      "In a large mixing bowl, whisk together low-FODMAP gluten-free Bisquick, salt and cayenne (if using).",
      "In a smaller bowl, whisk one egg with low-FODMAP milk.",
      "Add the milk mixture to the gluten-free Bisquick and stir.",
      "Then add the melted butter to combine.",
      "You may wish to use your hands Use a trigger ice cream scoop or a 1/4 c measure, portion out 12 biscuits into muffin cups and press out on the sides Do not overhandle the dough, and try not to press too high on the cup sides.",
      "If the dough is very flaky then add more butter.",
      "In a skillet, or covered in microwave, cook bacon until softened, but not crisp.",
      "If bacon strips are large, cut in half lengthwise and then in half again horizontally You will use 2 strips in each low-FODMAP egg cup.",
      "Lay strips of bacon over the biscuit dough You may also opt for other meat, spinach or alternate low-FODMAP vegetables.",
      "Sprinkle with the cheese and chopped basil.",
      "Crack the egg in each cup, be careful not to overfill They don't have to look perfect :); They will still taste delicious.",
      "Bake at 400 F for 25-30 min until egg whites are set I put the muffin tray on a larger baking sheet in case of drips.",
      "Let sit in baking tin for about 5 minutes, then remove carefully to a cooling rack."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Eggs, turkey bacon, cheddar or mozzarella and lactose-free milk baked in a muffin tin. Makes 12; 45 minutes is mostly oven time.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-bacon-spinach-and-basil-frittata",
    "name": "Bacon, Spinach and Basil Frittata",
    "emoji": "🍳",
    "category": "breakfast",
    "time": "35 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "one-pan",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/sensational-low-fodmap-bacon-spinach-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8 large",
        "item": "organic eggs"
      },
      {
        "qty": "½ cup",
        "item": "coconut cream (canned) or coconut milk"
      },
      {
        "qty": "4 oz",
        "item": "pancetta or 4-6 pieces of bacon cut into 1″ pieces"
      },
      {
        "qty": "1 cup",
        "item": "chopped potato, pre-cooked"
      },
      {
        "qty": "¼ cup",
        "item": "corn"
      },
      {
        "qty": "2",
        "item": "TB fresh basil"
      },
      {
        "qty": "1",
        "item": "tomato, sliced"
      },
      {
        "qty": "½ cup",
        "item": "chopped deli turkey or leftover turkey/chicken breast"
      },
      {
        "qty": "½ cup",
        "item": "baby spinach"
      },
      {
        "qty": "1/2 cup",
        "item": "cheese of choice"
      },
      {
        "qty": "1 tsp",
        "item": "each salt and pepper"
      },
      {
        "qty": "¼ tsp",
        "item": "cayenne pepper"
      },
      {
        "qty": "1 tsp",
        "item": "onion-infused oil, optional"
      }
    ],
    "steps": [
      "Preheat oven to 450 FIn an oven safe 10-12″ skillet over medium heat, cook the pancetta or bacon until almost done (about 5 minutes) Leave the bacon grease in the skillet and if necessary add the optional oil to coat the sides of the pan.",
      "Place spinach in skillet and stir.",
      "Add corn and cooked potatoes and stir.",
      "When these are warmed, add the basil and then the turkey.",
      "In a medium bowl place the eggs, cream, salt, pepper and cayenne and whisk together until well blended Ensure there is oil coating the sides of the pan.",
      "Pour egg mixture into skillet.",
      "Top mixture with cheese and sliced tomato and place your oven safe skillet into the oven, add additional basil if desired.",
      "Bake 20 min or until center is fluffy.",
      "Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Eggs, bacon, spinach, basil, 1/4 cup corn and canned coconut cream in place of regular cream. Serves 6; good cold for lunch.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-blueberry-pancakes",
    "name": "Blueberry Pancakes",
    "emoji": "🥞",
    "category": "breakfast",
    "time": "20 min",
    "serves": 3,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "20-min"
    ],
    "source": "https://rachelpaulsfood.com/simply-delicious-low-fodmap-blueberry-pancakes-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 cup",
        "item": "Original Gluten-free Bisquick™ mix"
      },
      {
        "qty": "3/4 cup",
        "item": "low-FODMAP milk, almond milk for non-dairy version, or lactose-free milk"
      },
      {
        "qty": "1 large",
        "item": "egg"
      },
      {
        "qty": "1/2 tsp",
        "item": "vanilla"
      },
      {
        "qty": "1 cup",
        "item": "blueberries, I used wild blueberries"
      },
      {
        "qty": "to taste",
        "item": "Canola oil, for frying"
      }
    ],
    "steps": [
      "Crack egg in a large mixing bowl, whisk well.",
      "Add about 1/4 cup of the milk and whisk together.",
      "Begin incorporating gluten-free Bisquick a little at a time, alternating with milk until all the Bisquick is incorporated.",
      "Add additional milk to desired consistency.",
      "Add vanilla and stir together.",
      "Fold in blueberiies.",
      "Place large skillet on medium heat and add about a teaspoon of oil.",
      "When oil is hot, ladle batter onto griddle, about 1/4 cup per pancake.",
      "Cook until crispy edges and flip.",
      "Serve with low-FODMAP vegan spread, or butter, and pure maple syrup."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Six ingredients: gluten-free flour, lactose-free or almond milk, egg, blueberries, oil and baking powder. Serves 3.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-classic-french-toast",
    "name": "Classic French Toast",
    "emoji": "🍞",
    "category": "breakfast",
    "time": "30 min",
    "serves": 3,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/classic-low-fodmap-french-toast-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 large",
        "item": "eggs"
      },
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP lactose-free milk or dairy-free milk"
      },
      {
        "qty": "6 slices",
        "item": "of low-FODMAP bread"
      },
      {
        "qty": "1 tsp",
        "item": "vanilla"
      },
      {
        "qty": "1/2 tsp",
        "item": "cinnamon"
      },
      {
        "qty": "1 teaspoon",
        "item": "of other flavoring if desired, such as caramel or maple"
      },
      {
        "qty": "to taste",
        "item": "Olive, canola or other preferred oil for cooking"
      },
      {
        "qty": "to taste",
        "item": "Confectioner's sugar"
      },
      {
        "qty": "to taste",
        "item": "Maple syrup"
      },
      {
        "qty": "to taste",
        "item": "Low-FODMAP strawberry coulis or other desired toppings"
      }
    ],
    "steps": [
      "Beat eggs and milk with vanilla and cinnamon in a shallow bowl.",
      "Dip bread in egg mixture and let the bread soak up the liquid for 3 minutes on each side.",
      "Heat oil in skillet on medium heat.",
      "Place bread in skillet and cook each side until golden brown.",
      "Dust with confectioner's sugar, or your preferred low-FODMAP syrup.",
      "Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Use a low-FODMAP bread (gluten-free or true sourdough spelt) and lactose-free or dairy-free milk; eggs, cinnamon and maple syrup are fine. Serves 3.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-pbj-smoothie",
    "name": "PB&J Smoothie",
    "emoji": "🥤",
    "category": "breakfast",
    "time": "5 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "5-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-pb-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 medium",
        "item": "unripe banana"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP milk, ex: lactose-free or unsweetened almond milk"
      },
      {
        "qty": "2 tablespoons",
        "item": "peanut butter, I like creamy all-natural, no sugar added"
      },
      {
        "qty": "1/2 cup",
        "item": "frozen or fresh strawberries, chopped"
      },
      {
        "qty": "3 tablespoons",
        "item": "frozen blueberries or raspberries"
      },
      {
        "qty": "1/2 cup",
        "item": "ice cubes"
      },
      {
        "qty": "1 tablespoon",
        "item": "brown rice protein powder or other low-FODMAP protein powder"
      },
      {
        "qty": "1 tablespoon",
        "item": "maple syrup or 2 teaspoons sucralose or stevia powder for sugar-free version"
      }
    ],
    "steps": [
      "Add all ingredients to blender, and blend on high speed until completely smooth, adding more low-FODMAP milk if needed.",
      "Let blend for 1-2 minutes or longer until well blended.",
      "Adjust to taste.",
      "Serve immediately, or can be frozen up to one month in sealed container."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Peanut butter (2 tablespoons across 2 serves), strawberries as the \"jelly\", low-FODMAP milk and a little maple syrup. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-protein-waffles",
    "name": "Protein Waffles",
    "emoji": "🧇",
    "category": "breakfast",
    "time": "25 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "high-protein",
      "freezer-friendly"
    ],
    "source": "https://rachelpaulsfood.com/healthy-low-fodmap-protein-waffles-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 1/3 cups",
        "item": "gluten-free oat flour"
      },
      {
        "qty": "2 tsp",
        "item": "baking powder"
      },
      {
        "qty": "1",
        "item": "scoop vanilla flavored brown-rice protein powder or your favorite low-FODMAP protein powder"
      },
      {
        "qty": "2",
        "item": "eggs, separated"
      },
      {
        "qty": "1",
        "item": "egg white"
      },
      {
        "qty": "4 tbsp",
        "item": "melted coconut oil (for dairy-free version) or butter"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP almond milk (for dairy-free version) or other low-FODMAP milk such as lactose-free"
      },
      {
        "qty": "2 tbsp",
        "item": "maple syrup"
      },
      {
        "qty": "1 tsp",
        "item": "maple extract, optional"
      },
      {
        "qty": "1 tsp",
        "item": "vanilla extract"
      },
      {
        "qty": "1/2 tsp",
        "item": "cinnamon, optional"
      },
      {
        "qty": "to taste",
        "item": "Vegetable shortening, or spray for greasing waffle iron, if needed"
      }
    ],
    "steps": [
      "Combine low-FODMAP, gluten-free flour, baking powder, and protein powder in a large bowl.",
      "Stir until mixed well.",
      "In a separate bowl, whisk 2 egg yolks and low-FODMAP milk together.",
      "Add egg mixture to the dry ingredients and stir to combine.",
      "Add coconut oil, maple syrup and extract, cinnamon and vanilla.",
      "Stir until clumps dissolve and batter is formed.",
      "In a third smaller bowl, beat 3 egg whites until stiff peaks form.",
      "Fold egg whites into the batter.",
      "Pour a ladleful of batter into each waffle well and bake according to maker's directions until crispy.",
      "Repeat, makes 10 or more waffles depending on size."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Oat flour, protein powder, eggs, almond or lactose-free milk and maple syrup. Check your protein powder for inulin, chicory root or sugar alcohols, which are high-FODMAP. Makes 6; freeze extras.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-5-minute-banana-muffin-in-a-mug",
    "name": "5-Minute Banana Muffin in a Mug",
    "emoji": "🍌",
    "category": "breakfast",
    "time": "5 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "5-min",
      "microwave"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-5-minute-banana-muffin-mug-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 tablespoons",
        "item": "gluten-free, low-FODMAP flour, I use Authentic Foods GF Classical Blend"
      },
      {
        "qty": "1 teaspoon",
        "item": "flaxseed meal mixed with 1 tablespoon warm water, you can also substitute 2 tablespoons whisked egg, for non vegans"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "xanthan gum, if not an additive in your flour"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "baking powder"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "baking soda"
      },
      {
        "qty": "1/8 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "cinnamon"
      },
      {
        "qty": "1/3 cup (88g)",
        "item": "ripe yellow banana, mashed, 1 medium"
      },
      {
        "qty": "3 tablespoons",
        "item": "packed brown sugar"
      },
      {
        "qty": "2 tablespoons",
        "item": "canola oil, or melted coconut oil"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "pure vanilla extract"
      },
      {
        "qty": "to taste",
        "item": "Your choice of ‘stir-in’ Up to 30 g semisweet/dark chocolate chips, or up to 20 g chopped pecans or walnuts"
      },
      {
        "qty": "to taste",
        "item": "Sugar and cinnamon to sprinkle on top, optional"
      }
    ],
    "steps": [
      "Mix your flaxseed meal with water, and allow to stand to thicken, while getting other ingredients (this creates a vegan ‘egg’).",
      "In a standard sized mug combine flour, xanthan gum, cinnamon, baking powder, baking soda, and salt.",
      "Stir in mashed banana, flax meal mixture, brown sugar, oil and vanilla. Do not overmix.",
      "For non-vegan version, add 2 tablespoons beaten egg in place of the flax meal.",
      "Add chocolate chips or nuts, based on preference.",
      "Microwave, 1 minute at a time, for 1-2 minutes, until toothpick inserted comes out clean or with a few moist crumbs Mine took 2 minutes. Do not overcook, as it could become rubbery in the microwave.",
      "Allow to stand to finish cooking, then enjoy!"
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Gluten-free flour, mashed banana, oil and brown sugar in the microwave. Banana: a firm (less ripe) banana is low-FODMAP; a very ripe one is higher in fructans, so use a just-yellow banana. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-peanut-butter-and-banana-baked-oatmeal-bars",
    "name": "Peanut Butter and Banana Baked Oatmeal Bars",
    "emoji": "🍫",
    "category": "breakfast",
    "time": "30 min",
    "serves": 16,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "meal-prep",
      "30-min"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-peanut-butter-and-banana-baked-oatmeal-bars-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 1/2 cups",
        "item": "quick oats"
      },
      {
        "qty": "1 tsp",
        "item": "baking powder"
      },
      {
        "qty": "½ tsp",
        "item": "salt"
      },
      {
        "qty": "1 tsp",
        "item": "cinnamon"
      },
      {
        "qty": "2",
        "item": "ripe bananas, mashed"
      },
      {
        "qty": "1/2 cup",
        "item": "all-natural smooth peanut butter, divided into ¼ cup and ¼ cup"
      },
      {
        "qty": "1 tsp",
        "item": "pure vanilla extract"
      },
      {
        "qty": "1/2 cup",
        "item": "plus 1 tbsp pure maple syrup, divided"
      },
      {
        "qty": "1 tbsp",
        "item": "flax seed meal, mixed into 3 tbsp warm water"
      },
      {
        "qty": "¾ cup",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "1/3 cup",
        "item": "chopped peanuts plus extra for sprinkling"
      }
    ],
    "steps": [
      "Preheat oven to 350 degrees F, place rack in middle of oven.",
      "Line an 8 by 8 square square baking pan with parchment paper with a folded edge over sides to help you lift out of pan.",
      "In a small bowl, mix together the quick cooking oats, baking powder, salt and ground cinnamon.",
      "Set aside.",
      "In a large bowl, mix mashed banana and ¼ cup peanut butter together until combined.",
      "To the banana mixture, add the vanilla, ½ cup maple syrup and 'flax egg substitute' (or beaten egg).",
      "Mix until combined.",
      "Add the low-FODMAP milk and chopped peanuts and stir until batter is smooth.",
      "Add dry ingredients (the oat mixture) to wet ingredients and mix thoroughly.",
      "Pour/spread the mixture into prepared pan.",
      "Bake at 350 degrees for 25 minutes The bars are quite soft, if you prefer a harder texture then bake about 5 minutes longer.",
      "Mix remaining ¼ cup peanut butter with 1 tbsp maple syrup.",
      "Pour/drizzle it over top of the warm oat bars, sprinkle with additional chopped peanuts if desired.",
      "Cut into squares and enjoy warm, or refrigerate until serving."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Quick oats, peanut butter, banana, maple syrup and low-FODMAP milk, cut into 16 bars. Use firm bananas (ripe ones carry more fructans) and keep to one or two bars per serve.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-cajun-tuna-salad-tuna-melt",
    "name": "Cajun Tuna Salad / Tuna Melt",
    "emoji": "🐟",
    "category": "lunch",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "15-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-cajun-tuna-salad-tuna-melt-recipe-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "½ cup",
        "item": "mayonnaise"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh squeezed lemon juice"
      },
      {
        "qty": "1 tablespoon",
        "item": "paprika"
      },
      {
        "qty": "2 teaspoon",
        "item": "low-FODMAP Happy Spices Taco Seasoning"
      },
      {
        "qty": "½ tsp",
        "item": "black pepper"
      },
      {
        "qty": "3",
        "item": "five ounce cans drained white solid Albacore tuna, for best results, but you can substitute any canned tuna variety if necessary"
      },
      {
        "qty": "½ cup",
        "item": "chopped red sweet pepper"
      },
      {
        "qty": "2 tablespoons",
        "item": "finely chopped celery"
      },
      {
        "qty": "1 tablespoon",
        "item": "chopped chives, green tip only"
      },
      {
        "qty": "1-2",
        "item": "tomatoes, sliced, optional, for serving"
      }
    ],
    "steps": [
      "Place tuna in bowl and mince well with a fork until fine.",
      "Add all additional ingredients and stir to combine.",
      "Serve immediately with sliced tomatoes in low-FODMAP, gluten-free bread or bed of lettuce."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned tuna, mayonnaise, lemon, Cajun spices, 2 tablespoons celery and chive tips. Check your Cajun blend has no onion or garlic. Make it a melt on low-FODMAP bread with cheddar. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-chicken-noodle-soup",
    "name": "Chicken Noodle Soup (Rachel Pauls)",
    "emoji": "🍜",
    "category": "lunch",
    "time": "20 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "one-pot",
      "20-min",
      "soup"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-chicken-noodle-soup-recipe-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3",
        "item": "cooked and cubed boneless, skinless chicken breasts, about 12 ounces total"
      },
      {
        "qty": "2 tablespoons",
        "item": "onion or garlic infused oil, plus extra for drizzling"
      },
      {
        "qty": "to taste",
        "item": "see my recipe swap blog for tips on shopping for these oils"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "dried thyme"
      },
      {
        "qty": "1-2 teaspoons",
        "item": "each of: salt and freshly ground black pepper"
      },
      {
        "qty": "8 cups",
        "item": "low-FODMAP chicken broth, see recipe"
      },
      {
        "qty": "to taste",
        "item": "Can also try my low-FODMAP Happy Soup for easier prep!"
      },
      {
        "qty": "2 cups",
        "item": "raw low-FODMAP noodles: try Asian rice vermicelli noodles or gluten-free, low-FODMAP thin spaghetti pasta"
      },
      {
        "qty": "to taste",
        "item": "Minced fresh parsley and/or dill, for garnish"
      },
      {
        "qty": "to taste",
        "item": "Serve with gluten-free crackers (I like Glutino brand), or if you can tolerate gluten then regular saltine crackers have tested to be low-FODMAP in recent US based research"
      }
    ],
    "steps": [
      "In a pot over medium heat, pour in the chicken broth.",
      "Cover and bring to a simmer, stir in the 2 tablespoons of oil.",
      "Add the noodles and cook in the broth until al-dente.",
      "Add chopped chicken to the pot.",
      "Add salt and pepper to taste.",
      "Serve garnished with fresh dill and parsley, if desired."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Infused oil, carrot, chicken, a low-FODMAP broth (store-bought broths often hide onion and garlic in \"natural flavors\") and rice vermicelli or gluten-free thin spaghetti. Two other chicken noodle soups are already in the cookbook, so this one carries the source name. Serves 6.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-carrot-and-curry-soup",
    "name": "Carrot and Curry Soup",
    "emoji": "🥕",
    "category": "lunch",
    "time": "30 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "30-min",
      "soup"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-carrot-and-curry-soup-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 tablespoons",
        "item": "infused olive oil"
      },
      {
        "qty": "¾ pound",
        "item": "carrots, peeled and cut into 1/2-inch coins"
      },
      {
        "qty": "1 teaspoon",
        "item": "peeled, grated fresh ginger"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "ground cumin"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "ground turmeric"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "ground coriander"
      },
      {
        "qty": "½ teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "freshly ground pepper"
      },
      {
        "qty": "2 cups",
        "item": "low-FODMAP chicken or low-FODMAP vegetable stock for vegan version"
      },
      {
        "qty": "1/2 cup",
        "item": "canned coconut cream"
      },
      {
        "qty": "1/2 cup",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "to taste",
        "item": "Juice from ½ lime, about 4 tsp"
      },
      {
        "qty": "to taste",
        "item": "Fresh chopped cilantro and toasted pumpkin seeds for garnish, optional"
      }
    ],
    "steps": [
      "Heat the oil in a heavy saucepan or dutch oven.",
      "Add the chopped carrots along with the ginger, cumin, turmeric, and coriander.",
      "Stir and cook until softened, about 10 minutes.",
      "Add the stock; there should be enough to cover the carrots.",
      "Bring the pot to a boil over high heat.",
      "Reduce the heat to medium and continue cooking until the carrots are cooked through, about 10 to 15 minutes.",
      "If you have an immersion blender, purée the soup in the pot.",
      "If not, wait until the soup cools slightly, and purée in a food processor or blender.",
      "Add the coconut cream and low-FODMAP milk while you puree to get to desired consistency.",
      "If needed, add more stock or water to bring the soup to the consistency you want (I added about an additional cup of broth as I prefer a more liquidy soup).",
      "Adjust the seasonings (depending on the stock you use, you may need more or less salt), and add the lime juice to taste.",
      "Garnish with cilantro and toasted pumpkin seeds if desired."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Carrots, curry powder, low-FODMAP stock, canned coconut cream and low-FODMAP milk, blended smooth. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-light-chicken-salad",
    "name": "Light Chicken Salad",
    "emoji": "🥗",
    "category": "lunch",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "15-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/light-satisfying-low-fodmap-chicken-salad-recipe/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 cups",
        "item": "chicken, about 2-3 chicken breast/thigh pieces"
      },
      {
        "qty": "½ cup",
        "item": "green or red grapes, halved"
      },
      {
        "qty": "½ cup",
        "item": "celery, finely sliced"
      },
      {
        "qty": "¼ cup",
        "item": "green chives, finely sliced"
      },
      {
        "qty": "1/2 cup",
        "item": "mayonnaise, I like Hellman’s Real Mayonnaise or Hellmann’s Light Mayonnaise"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh lemon juice"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh rosemary, minced"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh parsley, minced"
      },
      {
        "qty": "2 tsp.",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "½ tsp.",
        "item": "kosher salt"
      },
      {
        "qty": "½ tsp.",
        "item": "ground black pepper"
      },
      {
        "qty": "to taste",
        "item": "Optional toppings: 1/3 cup almonds: toasted or raw, whole, chopped or sliced"
      },
      {
        "qty": "¼",
        "item": "c pinenuts"
      },
      {
        "qty": "3/4 cup",
        "item": "pecans: toasted or raw, whole, halves or chopped"
      },
      {
        "qty": "5",
        "item": "TB sunflower seeds"
      },
      {
        "qty": "¼ cup",
        "item": "coarsely grated parmesan cheese"
      }
    ],
    "steps": [
      "Dice chicken into small pieces.",
      "Place all the dressing ingredients together in a jar with a tight lid and shake well to combine Can also blend in mini-blender or processor.",
      "Combine salad ingredients and dressing in a medium sized bowl and mix well.",
      "Refrigerate for at least one hour, or overnight to allow the flavors to marinate.",
      "Plate on bread, bed of spinach or baby lettuce greens.",
      "Sprinkle with one or more optional toppings."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Chicken, 1/2 cup celery across 4 serves (celery is low-FODMAP in small amounts), chives, lemon, garlic-infused oil and optional almonds. The Parmesan is optional. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-classic-egg-salad",
    "name": "Classic Egg Salad",
    "emoji": "🥚",
    "category": "lunch",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegetarian",
      "dairy-free",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/the-best-low-fodmap-egg-salad-recipe-gluten-free-vegetarian-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6 large",
        "item": "eggs, hard boiled, or see directions below for boiling"
      },
      {
        "qty": "1/2 cup",
        "item": "full fat mayonnaise, Hellman's is my favorite, check to ensure no high-fructose corn syrup in your brand"
      },
      {
        "qty": "1 teaspoon",
        "item": "mustard powder"
      },
      {
        "qty": "1 tablespoon",
        "item": "chopped chives or green scallion tips"
      },
      {
        "qty": "2 tbsps (20 g)",
        "item": "finely chopped celery"
      },
      {
        "qty": "1 tbsp",
        "item": "red wine vinegar"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "paprika"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper to taste"
      },
      {
        "qty": "to taste",
        "item": "Optional: 1-2 drops hot sauce"
      },
      {
        "qty": "to taste",
        "item": "low-FODMAP bread (true sourdough) or gluten-free toasted bagel halves, to serve"
      },
      {
        "qty": "to taste",
        "item": "Garnish: Butter lettuce, torn, sliced tomatoes, avocado (1/8 avocado per serving), alfalfa sprouts (2 cups per serving), sliced cucumber, low-FODMAP Pickles"
      }
    ],
    "steps": [
      "Put the 6 eggs in a medium pot and cover with water.",
      "Place pot over high heat and let it come to a boil (about 3-5 minutes).",
      "Once it boils, take the pot off the heat, cover it, and let it stand for 10 minutes.",
      "Meanwhile, chop the chives and celery.",
      "In a small bowl or measuring cup combine mayo with the mustard powder and paprika, then add the chives and celery as well as red wine vinegar.",
      "Cover and place in fridge to allow the flavors to marinate together.",
      "Once the eggs have been in their hot bath for ten minutes, put them in a bowl with some ice and water until they are completely chilled about 30 minutes (can also put in fridge for later) This step makes them easier to peel.",
      "Once well chilled, peel and coarsely chop the eggs, then place in a medium bowl, and fold the mayo mixture into them a little at a time (if you prefer a ‘drier’ egg salad then you may not use all the mayo mixture.",
      "Adjust to your preference) Stir to combine well, taste and add salt and pepper.",
      "Add more mayo or other spices or hot sauce as needed to consistency, and desired taste.",
      "Serve with the lettuce and choice of garnishes on your low-FODMAP bread choice, or simply serve on the lettuce leaves for a low-carb version."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Eggs, mayonnaise (check for high-fructose corn syrup), Dijon, chives and 2 tablespoons celery. Serve on low-FODMAP bread with 1/8 avocado per serve. Serves 4; 25 minutes includes boiling the eggs.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-curry-chicken-salad",
    "name": "Curry Chicken Salad",
    "emoji": "🍛",
    "category": "lunch",
    "time": "10 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "10-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-curry-chicken-salad-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 cups",
        "item": "shredded or cubed, fully cooked chicken breasts or thighs"
      },
      {
        "qty": "1/4 cup",
        "item": "plus 2 tbsp real mayonnaise with low-FODMAP ingredients"
      },
      {
        "qty": "1/4 cup",
        "item": "plus 2 tbsp lactose-free sour cream"
      },
      {
        "qty": "1 tablespoon",
        "item": "yellow curry powder, plus to taste"
      },
      {
        "qty": "1 teaspoon",
        "item": "apple cider vinegar"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "ground pepper"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "sea salt"
      },
      {
        "qty": "1/8 teaspoon",
        "item": "paprika"
      },
      {
        "qty": "1 tablespoon",
        "item": "maple syrup"
      },
      {
        "qty": "40g (about 1 stalk)",
        "item": "chopped celery"
      },
      {
        "qty": "3",
        "item": "scallions, green tips only"
      },
      {
        "qty": "3/4 cup (100g)",
        "item": "seedless grapes, cut in half"
      },
      {
        "qty": "1/2 cup",
        "item": "water chestnuts, chopped"
      },
      {
        "qty": "1/4 cup (25g)",
        "item": "toasted almond slivers, salted peanuts, or toasted hazelnuts"
      }
    ],
    "steps": [
      "In a large bowl, stir together mayo, lactose-free sour cream, apple cider vinegar, curry powder, paprika, pepper and salt.",
      "Add maple syrup, taste and adjust seasonings as desired.",
      "Add the chicken, celery, scallions, water chestnuts to the mayo mixture then gently fold in grapes.",
      "Serve on low-FODMAP bread as a sandwich, in lettuce wraps or over a bed of greens, topped with toasted nuts, if desired."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Chicken, lactose-free sour cream and mayonnaise, curry powder, a tablespoon of maple syrup, 1 stalk celery across 4 serves, scallion tips and toasted nuts. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-crunchy-thai-peanut-salad",
    "name": "Crunchy Thai Peanut Salad",
    "emoji": "🥜",
    "category": "lunch",
    "time": "25 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "meal-prep"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-crunchy-thai-peanut-salad-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "12 ounces (340g)",
        "item": "edamame, frozen"
      },
      {
        "qty": "1 cup",
        "item": "dry quinoa, uncooked"
      },
      {
        "qty": "4 cups (300g)",
        "item": "iceberg lettuce, finely chopped"
      },
      {
        "qty": "2 cups (200g)",
        "item": "purple cabbage, finely chopped"
      },
      {
        "qty": "2 cup",
        "item": "carrots, finely grated, about 1 large carrot"
      },
      {
        "qty": "1 cup (16g)",
        "item": "cilantro, roughly chopped"
      },
      {
        "qty": "1 cup (75g)",
        "item": "green scallion tips"
      },
      {
        "qty": "8 tablespoons (90g)",
        "item": "roasted and unsalted peanuts, chopped"
      },
      {
        "qty": "4 tablespoons (44g)",
        "item": "toasted sesame seeds"
      }
    ],
    "steps": [
      "In 2 separate saucepans, cook your edamame and quinoa according to the package instructions.",
      "While this is cooking, prepare your Low-FODMAP Dressing (if not already done so) and all of the veggies (iceberg, cabbage, carrots, green onion, cilantro).",
      "Place the vegetables in a large salad bowl.",
      "Drain the edamame and toss this into the bowl with the quinoa, peanuts and seeds, then drizzle with dressing (you may have leftover dressing).",
      "Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Red cabbage (low-FODMAP at about 3/4 cup per serve; this is 2 cups across 8), carrot, scallion tips and a peanut dressing. Serves 8 as a side or 4 as a lunch. Pairs with the Asian peanut dressing in the recipe.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-mediterranean-tuna-salad-with-olives",
    "name": "Mediterranean Tuna Salad with Olives",
    "emoji": "🫒",
    "category": "lunch",
    "time": "10 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "10-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/gut-friendly-mediterranean-tuna-salad-with-olives-low-fodmap-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2",
        "item": "five-ounce cans of white tuna in water, drained and flaked to your desired consistency"
      },
      {
        "qty": "1 large",
        "item": "ripe tomato (175 g), diced"
      },
      {
        "qty": "1/4 cup (45g)",
        "item": "chopped kalamata black olives"
      },
      {
        "qty": "1/4 cup (45g)",
        "item": "sliced green olives"
      },
      {
        "qty": "1 medium",
        "item": "carrot (65g), chopped into small chunks or coins"
      },
      {
        "qty": "3",
        "item": "hearts of palm (85 g from a 14 ounce jar or can), chopped"
      },
      {
        "qty": "2 small",
        "item": "pickled onions in vinegar (8g), chopped (optional)"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh squeezed lemon juice"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "shallot or onion infused oil"
      },
      {
        "qty": "2 teaspoons",
        "item": "Dijon mustard"
      },
      {
        "qty": "to taste",
        "item": "Freshly ground pepper, to taste"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh parsley, chopped"
      }
    ],
    "steps": [
      "Place tuna, tomato, olives, carrots, hearts of palm, and optional pickled onion in a large bowl.",
      "Whisk lemon juice, infused oils, and Dijon in a small bowl.",
      "Toss dressing together with the tuna mixture, then season with pepper and parsley.",
      "Serve in lettuce cups, or with LF toast or crackers*."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Tuna, olives, tomato, lemon, infused oils and two small pickled onions (optional; pickling removes most of the fructans, and the amount is tiny). Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-turkey-burgers-with-asian-slaw",
    "name": "Turkey Burgers with Asian Slaw",
    "emoji": "🍔",
    "category": "dinner",
    "time": "45 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/juicy-low-fodmap-turkey-burgers-with-low-fodmap-asian-slaw-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/3 cup",
        "item": "rice vinegar, not ‘seasoned’ rice vinegar as that contains extra sugar"
      },
      {
        "qty": "2 tablespoons",
        "item": "canola or olive oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "sugar"
      },
      {
        "qty": "1 tablespoon",
        "item": "corn syrup"
      },
      {
        "qty": "1 tablespoon",
        "item": "sesame oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "minced ginger"
      },
      {
        "qty": "2 tablespoons",
        "item": "freshly squeezed lime juice, from 1 lime"
      },
      {
        "qty": "2 teaspoons",
        "item": "salt"
      },
      {
        "qty": "1 teaspoon",
        "item": "crushed red pepper flakes"
      },
      {
        "qty": "1 ½ cups",
        "item": "green cabbage, shredded"
      },
      {
        "qty": "1 ½ cups",
        "item": "red cabbage, shredded"
      },
      {
        "qty": "2",
        "item": "carrots, peeled and shredded"
      },
      {
        "qty": "1/2 cup",
        "item": "chopped fresh cilantro leaves"
      },
      {
        "qty": "to taste",
        "item": "For low-FODMAP Turkey Burgers"
      },
      {
        "qty": "1 pound",
        "item": "ground turkey"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "ground ginger"
      },
      {
        "qty": "1/4",
        "item": "red pepper, finely chopped"
      },
      {
        "qty": "2",
        "item": "scallions, green tips only, chopped"
      },
      {
        "qty": "2 tablespoons",
        "item": "low-sodium soy sauce, gluten-free if necessary"
      },
      {
        "qty": "1 tablespoon",
        "item": "maple syrup"
      },
      {
        "qty": "1 teaspoon",
        "item": "sesame oil"
      },
      {
        "qty": "to taste",
        "item": "Your choice of oil, for frying, or grill"
      },
      {
        "qty": "6",
        "item": "low-FODMAP, gluten-free burger buns, rolls or thickly sliced bread"
      }
    ],
    "steps": [
      "In a small bowl, mix together the rice vinegar, canola or olive oil, garlic- infused olive oil, sugar, sesame oil, corn syrup, ginger, lime juice, salt and red pepper flakes.",
      "Cover and refrigerate, at least an hour or overnight.",
      "At least 30 minutes before serving, place the cabbage and carrots in a large bowl and pour the dressing over the coleslaw.",
      "Add the cilantro and toss. Then make the turkey burgers:",
      "In a large bowl, mix all the ingredients for the burgers thoroughly.",
      "Pat the mixture into 6 large patties of equal thickness.",
      "Heat grill to medium, or place a large saucepan over stovetop set to medium-high and add desired oil.",
      "Place burgers on heated grill or skillet and cook thoroughly, turning occasionally ◦If concerns about outside burning, turn heat to low and cover to completely cook the inside of the burger ◦Cooking time will vary but around 10 minutes.",
      "Serve topped with low-FODMAP Asian Coleslaw or your choice of condiments."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Turkey patties with a cabbage slaw: 3 cups cabbage across 6 serves is within the low-FODMAP amount. Use gluten-free, low-FODMAP buns. Soy sauce and 1 tablespoon maple syrup are fine. Serves 6; 45 minutes includes making the slaw.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-broccoli-cheddar-soup-for-two",
    "name": "Broccoli Cheddar Soup for Two",
    "emoji": "🥦",
    "category": "lunch",
    "time": "25 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "soup"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-gluten-free-broccoli-cheddar-soup-for-two/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoons",
        "item": "unsalted butter"
      },
      {
        "qty": "2 tablespoons",
        "item": "onion or shallot infused oil"
      },
      {
        "qty": "1/4 cup",
        "item": "all-purpose, low-FODMAP and gluten-free flour"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "pepper"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "1/2 cup",
        "item": "lactose-free half and half milk"
      },
      {
        "qty": "3/4 cup",
        "item": "low-FODMAP vegan or chicken broth, prepared"
      },
      {
        "qty": "1 cup (100g)",
        "item": "cooked broccoli heads"
      },
      {
        "qty": "1/2 cup (60g)",
        "item": "shredded cheddar cheese"
      }
    ],
    "steps": [
      "In a small saucepan, melt butter with infused oil over medium heat.",
      "Add the low-FODMAP flour, salt and pepper and stir until slightly browned.",
      "Stir in low-FODMAP milk, then half-and-half, and prepared LF broth.",
      "Bring to a boil and stir continuously until it thickens, about 2 minutes.",
      "Stir in the broccoli, then remove from heat and add cheese.",
      "Taste, adjust seasonings as desired.",
      "Serve hot with low-FODMAP bread or crackers."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Broccoli florets are low-FODMAP at about 3/4 cup per serve, which this recipe keeps to. Lactose-free milk and half-and-half, gluten-free flour, onion-infused oil and cheddar. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-chicken-corn-chowder",
    "name": "Chicken Corn Chowder",
    "emoji": "🌽",
    "category": "dinner",
    "time": "50 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "one-pot",
      "soup"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-gluten-free-chicken-corn-chowder/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6",
        "item": "strips uncooked bacon, cut into 1/2-inch pieces"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "garlic-infused oil"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "onion- or shallot-infused oil"
      },
      {
        "qty": "1 (40 g) stalk",
        "item": "celery, minced"
      },
      {
        "qty": "1 medium",
        "item": "carrot (70 g), chopped"
      },
      {
        "qty": "1/4 cup (30 g)",
        "item": "low-FODMAP, gluten-free flour"
      },
      {
        "qty": "1 teaspoon",
        "item": "salt, plus more to taste"
      },
      {
        "qty": "3/4 teaspoon",
        "item": "freshly ground black pepper"
      },
      {
        "qty": "1 teaspoon",
        "item": "smoked paprika or paprika"
      },
      {
        "qty": "1 teaspoon",
        "item": "rosemary"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "oregano"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "dried thyme"
      },
      {
        "qty": "1 teaspoon",
        "item": "dry mustard powder"
      },
      {
        "qty": "5 cups",
        "item": "low-FODMAP chicken broth"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP milk"
      },
      {
        "qty": "1 cup",
        "item": "heavy cream, or canned coconut cream for dairy-free"
      },
      {
        "qty": "1 lb.",
        "item": "Yukon gold potatoes, diced into 1-inch cubes, peeled or unpeeled"
      },
      {
        "qty": "1 lb (16 ounces)",
        "item": "boneless skinless chicken breasts, uncooked"
      },
      {
        "qty": "2 1/2 cups (275 g)",
        "item": "canned sweet corn, rinsed well and drained"
      },
      {
        "qty": "1 tablespoon",
        "item": "cornstarch, optional"
      },
      {
        "qty": "to taste",
        "item": "Optional garnish: green scallion tips, jalapeno, cilantro, shredded cheddar cheese, shredded corn chips"
      }
    ],
    "steps": [
      "Place chopped bacon pieces in your large saucepan or Dutch oven over medium heat.",
      "Cook until bacon is well crisped, then set aside on a paper-towel lined plate.",
      "Drain half of the bacon grease, then add your infused oils to the saucepan and sear the chicken breasts on both sides, but do not cook through (this gives the chicken a nice flavor).",
      "Remove the chicken to a plate, then add the celery and carrot and fry until soft (about 5 minutes).",
      "In the saucepan, sprinkle in the LF flour and cook until lightly browned, then add the salt, pepper, paprika, rosemary, oregano, thyme and dry mustard powder, adjusting heat as necessary to medium-low.",
      "Add the 5 cups LF chicken broth, then the LF milk and cream or coconut cream and stir to combine.",
      "Next, add the chopped potatoes, chicken and drained corn.",
      "Bring the soup to a boil and cook until the potatoes are tender and chicken is cooked through.",
      "Remove cooked chicken to a plate or cutting board, and shred or dice into bite sized pieces. Cover to keep warm for now.",
      "Puree about 1/2 the soup using your immersion blender (or transfer to a stand blender if you don’t have an immersion blender). You can also choose to mash about half the potatoes in the pot using a potato masher.",
      "If the broth is still thin, create a roux by mixing your cornstarch with 1/2 cup of the broth, then return this to the pot and allow to simmer.",
      "Put the chicken pieces back in the pot, as well as half the bacon.",
      "Taste soup and add seasoning if desired. Serve topped with the remaining bacon pieces, as well as optional garnish."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned corn, rinsed, is the low-FODMAP form the author uses (about 1/2 cup per serve here). Heavy cream is a small serve each, with a coconut-cream option. One stalk of celery across 6. Serves 6; 50 minutes, mostly simmering.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-southwest-salad-with-southwest-dressing",
    "name": "Southwest Salad with Southwest Dressing",
    "emoji": "🥗",
    "category": "lunch",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-southwest-salad-low-fodmap-southwest-dressing/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8",
        "item": "TB light mayo, I used Hellman’s Light"
      },
      {
        "qty": "3 Tbsp",
        "item": "plain Greek yogurt, or lactose-free yogurt or sour cream"
      },
      {
        "qty": "2",
        "item": "TB water"
      },
      {
        "qty": "2 Tbsp",
        "item": "light corn syrup"
      },
      {
        "qty": "2 tsp",
        "item": "red wine vinegar"
      },
      {
        "qty": "1 tsp",
        "item": "lime juice"
      },
      {
        "qty": "1/2 tsp",
        "item": "cilantro"
      },
      {
        "qty": "1 tsp",
        "item": "chili powder"
      },
      {
        "qty": "1/4 tsp",
        "item": "cayenne"
      },
      {
        "qty": "¼ tsp",
        "item": "cumin"
      },
      {
        "qty": "to taste",
        "item": "Low-FODMAP Grilled Lime Chicken, prepared, best marinated day before"
      },
      {
        "qty": "1 1/4 cups (120 g)",
        "item": "grated cheddar cheese"
      },
      {
        "qty": "1 head",
        "item": "iceberg lettuce, chopped or torn, or 2 heads bib lettuce"
      },
      {
        "qty": "2",
        "item": "shredded carrots"
      },
      {
        "qty": "3",
        "item": "tomatoes, chopped"
      },
      {
        "qty": "2 cobs",
        "item": "fresh corn, cooked and kernels removed (about 170 g)"
      },
      {
        "qty": "to taste",
        "item": "Tortilla strips for topping"
      },
      {
        "qty": "to taste",
        "item": "Fresh cilantro and lime wedge for garnish"
      }
    ],
    "steps": [
      "Combine all low-FODMAP salad dressing ingredients in mason jar, shake well.",
      "Place in refrigerator until use Best made a day ahead for flavors to combine.",
      "Combine all vegetable salad ingredients in bowl Prior to serving toss cheese, tortilla strips over top.",
      "Lay low-FODMAP Lime chicken breasts over top of greens and drizzle with dressing.",
      "Sprinkle cilantro and garnish with limes."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Use the lactose-free yogurt option for the dressing. Fresh corn is kept to about 1/2 cob per serve, cheddar is low-lactose, and the tortilla strips should be corn. Serves 6.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-classic-low-fodmap-tacos",
    "name": "Classic Low-FODMAP Tacos",
    "emoji": "🌮",
    "category": "dinner",
    "time": "27 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/best-low-fodmap-taco-recipe-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "onion or shallot infused olive oil"
      },
      {
        "qty": "2 pounds",
        "item": "ground beef"
      },
      {
        "qty": "to taste",
        "item": "I use extra-lean beef"
      },
      {
        "qty": "3 tablespoons",
        "item": "low-FODMAP Happy Spices Taco Seasoning"
      },
      {
        "qty": "3/4 cup",
        "item": "water"
      },
      {
        "qty": "to taste",
        "item": "Toppings"
      },
      {
        "qty": "16",
        "item": "low-FODMAP, gluten-free hard taco shells, corn only, not wheat"
      },
      {
        "qty": "3 cups",
        "item": "Cheddar-Jack cheese, grated"
      },
      {
        "qty": "6",
        "item": "Roma tomatoes, diced"
      },
      {
        "qty": "1 head",
        "item": "green leaf lettuce, shredded"
      },
      {
        "qty": "1 cup",
        "item": "chopped canned black olives"
      },
      {
        "qty": "to taste",
        "item": "Low-FODMAP Salsa recipe"
      },
      {
        "qty": "to taste",
        "item": "Chopped cilantro and limes for garnish"
      }
    ],
    "steps": [
      "In a skillet over medium-high heat, add the infused olive oil, warm the oil.",
      "Place the ground beef in skillet and cook the meat until it's browned, then drain the fat.",
      "Add the low-FODMAP Taco seasoning and stir to combine.",
      "Add 3/4 cup hot water and stir.",
      "Reduce the heat to low and simmer for 15 minutes.",
      "Serve immediately, or refrigerate until use (tastes great a day later).",
      "Warm taco shells in microwave oven or standard oven as per package instructions.",
      "Layer meat in the bottom of the shell and top with lettuce, cheese, diced tomatoes, olives."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Seasoned beef with onion-infused oil and a homemade taco spice (store blends carry onion and garlic), in corn-only hard shells with cheddar-jack, lettuce and tomato. Pair with the Sassy Salsa in this collection. Serves 8.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-sheet-pan-chicken-fajitas",
    "name": "Sheet Pan Chicken Fajitas (Rachel Pauls)",
    "emoji": "🌯",
    "category": "dinner",
    "time": "45 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free option",
      "sheet-pan"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-sheet-pan-chicken-fajitas-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoons",
        "item": "low-FODMAP Happy Spices Taco Seasoning"
      },
      {
        "qty": "1 teaspoon",
        "item": "paprika"
      },
      {
        "qty": "1 1/4 tsp",
        "item": "salt, plus more to taste"
      },
      {
        "qty": "1 1/4 tsp",
        "item": "black pepper, plus more to taste"
      },
      {
        "qty": "1 1/2 pounds",
        "item": "boneless, skinless chicken breasts, cut into thin strips"
      },
      {
        "qty": "1",
        "item": "red bell pepper, cut into strips"
      },
      {
        "qty": "1",
        "item": "green bell pepper, cut into strips"
      },
      {
        "qty": "2 tablespoons",
        "item": "onion or shallot infused oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "1/4 cup",
        "item": "chopped fresh cilantro leaves"
      },
      {
        "qty": "2 tablespoons",
        "item": "freshly squeezed lime juice"
      },
      {
        "qty": "6 (8-inch)",
        "item": "gluten-free corn tortillas, or gluten-free flour tortillas with low-FODMAP ingredients"
      },
      {
        "qty": "to taste",
        "item": "Optional garnish:, note: some items contain dairy"
      },
      {
        "qty": "1 cup",
        "item": "shredded cheddar cheese"
      },
      {
        "qty": "1 medium",
        "item": "tomato, chopped"
      },
      {
        "qty": "1/2",
        "item": "avocado, sliced"
      },
      {
        "qty": "to taste",
        "item": "Lactose free sour cream"
      },
      {
        "qty": "to taste",
        "item": "Chopped black olives"
      },
      {
        "qty": "to taste",
        "item": "Additional cilantro"
      },
      {
        "qty": "to taste",
        "item": "Low-FODMAP Sassy Salsa, prepared"
      },
      {
        "qty": "to taste",
        "item": "Baking spray"
      }
    ],
    "steps": [
      "Preheat oven to 425 degrees F.",
      "Line a rimmed baking sheet with aluminum foil and spray with baking spray.",
      "In a small bowl, combine low-FODMAP Happy Spices Taco Seasoning, paprika, 1 & 1/4 teaspoons salt and 1 & 1/4 teaspoons pepper.",
      "Place chicken and bell peppers in a bowl, and toss with the infused oils and the seasoning mixture.",
      "Lay chicken and peppers on the prepared pan in a single layer and bake for 25 minutes, or until the chicken is completely cooked through and the vegetables are slightly crisp.",
      "In the last few minutes, warm tortillas on a skillet or microwave, set aside.",
      "Remove chicken from oven and toss with cilantro and lime juice.",
      "Serve chicken with tortillas, chopped tomatoes and additional optional garnish per your taste."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Bell peppers, chicken, infused oils and homemade fajita spice on one pan; serve in corn tortillas with 1/8 avocado per serve, cheddar and lactose-free sour cream. Two other sheet-pan fajita recipes exist, so this one carries the source name. Serves 6; 45 minutes is mostly roasting.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-chicken-tortilla-soup",
    "name": "Chicken Tortilla Soup (Rachel Pauls)",
    "emoji": "🍲",
    "category": "dinner",
    "time": "45 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "one-pot",
      "soup"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-gluten-free-chicken-tortilla-soup/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound (16 ounces)",
        "item": "boneless, skinless chicken breasts"
      },
      {
        "qty": "1",
        "item": "jalapeno pepper, seeded and diced, optional"
      },
      {
        "qty": "1 tablespoon",
        "item": "low-FODMAP taco seasoning"
      },
      {
        "qty": "1 teaspoon",
        "item": "salt, plus to taste"
      },
      {
        "qty": "15 ounces",
        "item": "canned fire-roasted crushed tomatoes"
      },
      {
        "qty": "4 cups",
        "item": "low-FODMAP Chicken Broth, prepared"
      },
      {
        "qty": "8 ounces (200g)",
        "item": "canned black beans, drained and rinsed"
      },
      {
        "qty": "10 ounces (300g)",
        "item": "canned corn, drained and rinsed"
      },
      {
        "qty": "1 tablespoon",
        "item": "corn meal or polenta"
      },
      {
        "qty": "3/4 cup",
        "item": "fresh cilantro, chopped, will use 1/4 cup for topping"
      },
      {
        "qty": "2 teaspoons",
        "item": "garlic infused oil"
      },
      {
        "qty": "2 teaspoons",
        "item": "onion or shallot infused oil"
      },
      {
        "qty": "2",
        "item": "limes, juiced"
      },
      {
        "qty": "to taste",
        "item": "Pepper, to taste"
      },
      {
        "qty": "to taste",
        "item": "Tortilla strips, gluten-free and with low-FODMAP ingredientssee below for a recipe"
      },
      {
        "qty": "1 large",
        "item": "avocado, diced"
      },
      {
        "qty": "1",
        "item": "lime, cut into wedges, to serve"
      },
      {
        "qty": "to taste",
        "item": "Fresh cilantro"
      },
      {
        "qty": "to taste",
        "item": "Shredded sharp cheddar or Monterey Jack Cheese, optional"
      }
    ],
    "steps": [
      "Place your pot over medium-high heat.",
      "Add chicken breasts and 1 teaspoon garlic infused oil. Allow to sear on both sides for about 2 minutes.",
      "Add in the low-FODMAP chicken broth, low-FODMAP taco seasoning, fire roasted tomatoes, black beans, corn, corn meal, and salt.",
      "Bring to a boil and let simmer for at least 25 minutes, covered.",
      "Remove chicken from the pot and shred it using 2 forks or your hands, or chop into pieces if you prefer.",
      "Add shredded chicken back to the soup.",
      "Stir in 1/2 cup fresh cilantro and the remaining infused oils.",
      "Simmer another 5 minutes then add lime juice. Taste, and adjust seasonings as desired.",
      "Serve the soup with some tortilla strips, pieces of avocado, remaining 1/4 cup fresh cilantro, shredded cheese and lime wedges."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Canned black beans (200 g rinsed across 6 serves) and canned corn (rinsed) are kept to low-FODMAP amounts by the author; infused oils, lime, cumin and chicken. Top with corn tortilla strips and a little avocado. Two other tortilla soups exist, so this carries the source name. Serves 6.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-one-pot-chicken-with-cilantro-lime-rice",
    "name": "One-Pot Chicken with Cilantro Lime Rice",
    "emoji": "🍚",
    "category": "dinner",
    "time": "55 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "one-pot"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-one-pot-chicken-with-cilantro-lime-rice-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 large",
        "item": "pack (4–6 pieces) skin-on, bone-in chicken thighs. Due to the weight of the bones, this amount of chicken will weigh between 32-36 ounces"
      },
      {
        "qty": "2-3 tablespoons",
        "item": "of canola or olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic-infused oil"
      },
      {
        "qty": "3 cups",
        "item": "of low-FODMAP chicken broth/stock"
      },
      {
        "qty": "2 cups",
        "item": "uncooked jasmine or basmati rice, rinsed"
      },
      {
        "qty": "4 tablespoons (about 2 limes)",
        "item": "fresh squeezed lime juice, do not substitute concentrates"
      },
      {
        "qty": "1/3 cup",
        "item": "finely chopped fresh cilantro"
      },
      {
        "qty": "to taste",
        "item": "Liberal amounts of salt and pepper, to taste"
      }
    ],
    "steps": [
      "Pat chicken dry and season all over with salt and pepper (don’t skimp on the salt- it really provides flavor).",
      "Add 2-3 tablespoons of canola or olive oil to a cold large sized Dutch oven and tilt to coat the pot bottom.",
      "Arrange chicken, skin side down, and turn to medium heat (you want to get the skin nicely browned).",
      "Cook chicken, undisturbed, until the skin is golden and easily releases from the pot, about 8-10 minutes.",
      "Flip thighs and cook 3-5 minutes longer.",
      "Transfer chicken to a plate and remove pot from the heat for 2-3 minutes to cool.",
      "If there is a lot of excess juice and oil in the pot, you can discard it or leave it behind for flavor.",
      "Return Dutch oven to the stovetop and turn to low.",
      "Add your garlic infused oil to warm, then add rice and stir to coat in the oil.",
      "Season with salt and pepper to taste.",
      "Add 3 cups of low-FODMAP chicken stock/broth and mix.",
      "Place chicken back into the rice mixture skin side up.",
      "Increase heat to medium and bring liquid to a simmer, once it is bubbling cover pot, reduce heat to low, and cook for 25 minutes.",
      "Remove from heat and let chicken and rice sit for 10 minutes with the lid on.",
      "Remove chicken from the pot and add lime juice and cilantro, then mix.",
      "Taste rice and add salt and pepper as desired.",
      "Serve chicken over the rice."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Eight ingredients: chicken thighs, rice, low-FODMAP broth, garlic-infused oil, fresh lime and cilantro. Serves 4; 55 minutes is mostly unattended simmering.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-chipotle-style-chicken-burrito-bowl",
    "name": "Chipotle-Style Chicken Burrito Bowl",
    "emoji": "🥙",
    "category": "dinner",
    "time": "40 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "meal-prep",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-chipotle-chicken-burrito-bowl-with-cilantro-lime-rice-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "to taste",
        "item": "For Chicken:"
      },
      {
        "qty": "20 ounces (about 4)",
        "item": "boneless skinless chicken thighs"
      },
      {
        "qty": "to taste",
        "item": "Juice of 1 lime"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "onion or shallot infused olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "low-FODMAP Happy Spices Taco Seasoning"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "tomato paste"
      },
      {
        "qty": "to taste",
        "item": "For Rice:"
      },
      {
        "qty": "2 cups",
        "item": "Long Grain White Rice, or Basmati, rinsed"
      },
      {
        "qty": "4 cups",
        "item": "low-FODMAP Chicken Soup"
      },
      {
        "qty": "2 tablespoons",
        "item": "butter or olive oil, dairy-free version"
      },
      {
        "qty": "1 teaspoon",
        "item": "salt"
      },
      {
        "qty": "to taste",
        "item": "Juice of 1 lime"
      },
      {
        "qty": "to taste",
        "item": "Zest of 1 lime"
      },
      {
        "qty": "3 tablespoons",
        "item": "fresh cilantro, chopped"
      },
      {
        "qty": "to taste",
        "item": "For Salad:"
      },
      {
        "qty": "3/4 cup",
        "item": "sliced red bell peppers"
      },
      {
        "qty": "1/2 cup",
        "item": "diced roma or vine-ripened tomatoes"
      },
      {
        "qty": "1/2 cup",
        "item": "fresh or canned corn"
      },
      {
        "qty": "1/2 cup",
        "item": "canned black beans, drained and rinsed"
      },
      {
        "qty": "1 cup",
        "item": "chopped lettuce"
      },
      {
        "qty": "to taste",
        "item": "For Garnish:"
      },
      {
        "qty": "1",
        "item": "lime"
      },
      {
        "qty": "2 tablespoons",
        "item": "green scallion tips"
      },
      {
        "qty": "to taste",
        "item": "Chopped fresh cilantro, chopped"
      },
      {
        "qty": "1/2",
        "item": "avocado, sliced"
      },
      {
        "qty": "1/2 cup",
        "item": "shredded white cheddar and Monterey Jack cheese, omit for dairy-free"
      },
      {
        "qty": "to taste",
        "item": "Lactose-free sour cream, omit for dairy-free"
      }
    ],
    "steps": [
      "In a medium bowl or large resealable bag combine the raw chicken thighs with the infused oils, lime juice, tomato paste, and low-FODMAP Happy Spices Taco Seasoning.",
      "Mix to coat, then cover the chicken and allow to marinate in the fridge for 30 minutes to overnight.",
      "When ready to cook, chop and toss all your vegetables for the salad together, then toss and set aside (can also leave separately).",
      "Prepare items for garnish.",
      "Place 4 cups of low-FODMAP Chicken Soup in a large saucepan and bring to a boil then mix in rice.",
      "Allow rice to simmer on low heat for 10 minutes or until the broth has absorbed completely and the rice is soft.",
      "Stir in butter or olive oil, season with salt, and cover and set aside for later (you will add the lime and cilantro later).",
      "While rice is cooking, heat a grill or pan over medium-high heat, and remove chicken from marinade.",
      "Discard the marinade.",
      "Place chicken on your warm pan and cook for about 5 minutes on each side until inrternal temperature is 165 F Remove from heat for 1 minute to rest, then chop chicken into chunks Fluff the rice, and stir in your zest, juice and cilantro.",
      "Ladle the rice into bowls, then top your choices of the salad mixture followed by chicken, cheese, sliced avocado, sour cream, cilantro, and chopped scallion tips Squirt the lime juice over top of the bowls prior to serving."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Cilantro-lime rice, marinated chicken, 1/2 cup each of corn and rinsed black beans across 4 serves, lettuce, tomato, scallion tips, cheese and 1/8 avocado per bowl. Long ingredient list because it builds every component. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-one-pan-chili-and-lime-tilapia",
    "name": "One-Pan Chili and Lime Tilapia",
    "emoji": "🐟",
    "category": "dinner",
    "time": "1 hr",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "sheet-pan"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-one-pan-chili-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "16 ounces (about 3-4)",
        "item": "tilapia fillets, or any white fish"
      },
      {
        "qty": "1 large (or 2 medium)",
        "item": "potato, cut into thinly sliced fries"
      },
      {
        "qty": "1/2 cup",
        "item": "sliced carrots"
      },
      {
        "qty": "1/2 cup",
        "item": "sliced zucchini"
      },
      {
        "qty": "1/2 cup",
        "item": "freshly squeezed lime juice, juice of 2 limes"
      },
      {
        "qty": "1/4 cup",
        "item": "fresh chopped cilantro, plus 2 tablespoons for garnish"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "water"
      },
      {
        "qty": "1 tablespoon",
        "item": "maple syrup or light corn syrup"
      },
      {
        "qty": "2 teaspoons",
        "item": "low-FODMAP Happy Spices Taco Seasoning"
      },
      {
        "qty": "to taste",
        "item": "Salt and fresh cracked pepper to taste"
      },
      {
        "qty": "to taste",
        "item": "Cooking spray"
      },
      {
        "qty": "to taste",
        "item": "Lime wedges, for garnish"
      }
    ],
    "steps": [
      "Preheat your oven to 425°F (210°C) Lightly oil a baking sheet or coat with nonstick spray.",
      "Whisk together 2 tablespoons garlic infused olive oil, water, lime juice, maple syrup (or corn syrup), low-FODMAP seasonings and cilantro in a small bowl or freezer bag.",
      "Place tilapia fillets in bag or bowl and marinate for 30 min in refrigerator.",
      "While fish is marinating- slice vegetables and start the potatoes baking.",
      "Place potato fries in a single layer onto the prepared baking sheet.",
      "Drizzle with 1 remaining tablespoon olive oil and season with salt and pepper.",
      "Bake potato fries about 20 minutes until beginning to brown (these take longer than the other vegetables).",
      "Remove from oven and make spaces; place vegetables and tilapia in the reserved spaces.",
      "Drizzle the last tablespoon olive oil over the rest of the veggies and season the tray with salt and pepper to taste.",
      "Bake until fish flakes easily with a fork and the vegetables begin to crisp up on the edges and have softened, about 20 – 25 minutes."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Tilapia in a chili-lime marinade with garlic-infused oil and a tablespoon of maple syrup, roasted with vegetables on one pan. The hour includes marinating time. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-one-pan-beef-and-cheese-macaroni",
    "name": "One-Pan Beef and Cheese Macaroni",
    "emoji": "🧀",
    "category": "dinner",
    "time": "30 min",
    "serves": 10,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "one-pot",
      "30-min",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-one-pan-beef-and-cheese-macaroni-gluten-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 pounds",
        "item": "lean or extra lean ground beef"
      },
      {
        "qty": "1 tablespoon",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "1 cup (149g)",
        "item": "chopped red or green bell pepper"
      },
      {
        "qty": "1 cup",
        "item": "chopped peeled carrots"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh basil or 1 teaspoon dried basil, plus additional for garnish"
      },
      {
        "qty": "2 teaspoons",
        "item": "dried oregano"
      },
      {
        "qty": "1 1/2 cans",
        "item": "crushed or diced tomatoes in juice, no added onion or garlic"
      },
      {
        "qty": "1/2 cup",
        "item": "water"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP Beef Broth or Chicken Broth"
      },
      {
        "qty": "1 tablespoon",
        "item": "Worcestershire sauce"
      },
      {
        "qty": "2 teaspoons",
        "item": "low-FODMAP certified Taco seasoning"
      },
      {
        "qty": "to taste",
        "item": "Kosher salt and freshly ground pepper to taste"
      },
      {
        "qty": "3/4 pound",
        "item": "dried elbow macaroni; gluten-free and low-FODMAP"
      },
      {
        "qty": "2 cups (8 ounces)",
        "item": "grated cheddar cheese, ensure no added onion or garlic if purchasing a cheese blend"
      }
    ],
    "steps": [
      "Heat a very large skillet or Dutch Oven over medium high heat and brown the beef, stirring until no pink remains, about 5 minutes.",
      "Drain the beef and set aside.",
      "Wipe out the skillet, heat the infused oil over medium heat.",
      "Add the red pepper and carrots and sauté until almost tender, about 5 minutes.",
      "Add the ground beef back to the skillet, as well as the basil, oregano, tomatoes with their juice, water, beef base, Worcestershire sauce, and low-FODMAP taco seasoning.",
      "Season with salt and pepper, turn the heat to high, and bring to a simmer.",
      "Add the gluten-free macaroni, stir and cover.",
      "Lower the heat to medium and simmer covered, stirring occasionally, until the pasta is tender but still firm (al-dente), and most of the liquid is absorbed, about 8 to 10 minutes.",
      "Taste and season again with more salt and pepper to taste.",
      "Sprinkle the cheese over the mixture, then cover until the cheese is melted.",
      "Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. A homemade Hamburger Helper: beef, gluten-free macaroni, canned tomatoes without onion or garlic, low-FODMAP broth, a tablespoon of Worcestershire and cheddar. Serves 10, so it halves well.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-sheet-pan-chicken-thighs-with-harvest-vegetables",
    "name": "Sheet Pan Chicken Thighs with Harvest Vegetables",
    "emoji": "🍂",
    "category": "dinner",
    "time": "1 hr",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "sheet-pan"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-sheet-pan-chicken-thighs-with-harvest-vegetables-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8-10",
        "item": "raw bone-in, skin-on, chicken thighs, about 5 lbs"
      },
      {
        "qty": "1 tablespoon",
        "item": "plus 1 teaspoon olive oil; divided"
      },
      {
        "qty": "1 tablespoon",
        "item": "plus 1 teaspoon garlic-infused oil;divided"
      },
      {
        "qty": "3 tablespoons",
        "item": "fresh squeezed lemon juice, do not substitute concentrates"
      },
      {
        "qty": "4 tablespoons",
        "item": "maple syrup"
      },
      {
        "qty": "1 teaspoon",
        "item": "thyme"
      },
      {
        "qty": "1 teaspoon",
        "item": "rosemary"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt; plus to taste"
      },
      {
        "qty": "1 teaspoon",
        "item": "pepper; plus to taste"
      },
      {
        "qty": "3 medium",
        "item": "sweet potatoes, peeled and cubed"
      },
      {
        "qty": "2 large",
        "item": "carrots, cut into coins"
      },
      {
        "qty": "2 large",
        "item": "parsnips, cut into coins"
      },
      {
        "qty": "1 medium",
        "item": "zucchini (196 g), cut into sticks or wedges"
      },
      {
        "qty": "6 slices",
        "item": "thick-cut bacon (ensure no onion or garlic added); chopped into 1 inch pieces"
      },
      {
        "qty": "to taste",
        "item": "Optional garnish: fresh rosemary and thyme sprigs"
      },
      {
        "qty": "to taste",
        "item": "Baking spray"
      }
    ],
    "steps": [
      "Preheat oven to 425°F.",
      "Lay aluminum foil over a large rimmed sheet pan and spray with baking spray.",
      "Combine olive oil, infused oil, lemon juice, maple syrup, salt, pepper. dried rosemary and thyme in a large bowl or resealable large bag.",
      "Pat chicken dry and place in the bowl or bag to coat the pieces in the marinade.",
      "Refrigerate for 15 minutes, or overnight, if desired.",
      "While this is marinating, chop your vegetables and bacon as per above directions.",
      "Arrange vegetables on your prepared sheet pan to completely cover the bottom of the pan.",
      "Drizzle with additional teaspoon of oils and sprinkle with salt and pepper to taste.",
      "Lay the bacon randomly over the vegetables, then place the chicken pieces over the top of the vegetables as well.",
      "Drizzle the remaining marinade over everything and bake for 40-50 minutes, or until chicken is 165°F on a meat thermometer.",
      "Garnish with fresh herbs and serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Chicken thighs, bacon (check for no onion or garlic), carrots, Brussels sprouts or green beans and 3 sweet potatoes across 8 serves, which keeps sweet potato to a low-FODMAP amount, with maple and lemon. Serves 8; mostly oven time.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-one-pan-italian-chicken-and-vegetables",
    "name": "One-Pan Italian Chicken and Vegetables",
    "emoji": "🍗",
    "category": "dinner",
    "time": "1 hr 5 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free option",
      "sheet-pan"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-one-pan-italian-chicken-and-vegetables-gluten-free-dairy-free/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6 (6 to (8 ounce)",
        "item": ") boneless, skinless chicken breasts"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt, divided"
      },
      {
        "qty": "1/4 cup",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "1/4 cup",
        "item": "balsamic vinegar, ensure gluten-free if necessary"
      },
      {
        "qty": "2 teaspoons",
        "item": "low-FODMAP Happy Spice Italian Seasoning"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "1 pint",
        "item": "cherry tomatoes, left wholea"
      },
      {
        "qty": "to taste",
        "item": "bout 4 low-FODMAP servings per pint"
      },
      {
        "qty": "1 medium",
        "item": "zucchini"
      },
      {
        "qty": "3 medium",
        "item": "carrots"
      },
      {
        "qty": "1/3 cup",
        "item": "freshly grated Parmesan cheese, omit for dairy-free version"
      },
      {
        "qty": "2 to 3 tablespoons",
        "item": "chopped fresh parsley"
      },
      {
        "qty": "to taste",
        "item": "Baking spray"
      },
      {
        "qty": "to taste",
        "item": "Flaked sea salt (optional for serving"
      }
    ],
    "steps": [
      "Place chicken breasts between 2 pieces of wax paper and using a meat tenderizer, pound them to an even 1/2-inch thickness.",
      "Sprinkle the chicken with 1/2 teaspoon kosher salt and place in a large resealable bag.",
      "In a large measuring cup or mixing bowl, whisk together the olive oil, balsamic vinegar, low-FODMAP Happy Spice Italian seasoning, black pepper, and remaining 1/2 teaspoon salt.",
      "Pour half of this marinade mixture into the resealable bag with the chicken.",
      "Seal the bag (removing as much air as possible), then tip the bag around to ensure the chicken is thoroughly coated.",
      "Place bag in the refrigerator to marinade for 30 minutes or overnight I place it flat on the baking pan.",
      "While the chicken marinates, prepare the vegetables.",
      "Peel the carrots and cut the zucchini and peeled carrots into 3/4 inch slices.",
      "Place the vegetables in a second resealable bag.",
      "Pour in the remaining balsamic marinade mixture, seal, and place in the refrigerator with the chicken to marinate also.",
      "When you are ready to cook, preheat your oven to 425 degrees F Prepare a large rimmed baking sheet with aluminum foil and coat with baking sprayArrange the vegetables and chicken on the pan, with the chicken towards the center, not covered by any vegetables The chicken will shrink as it cooks.",
      "Bake for 15 to 20 minutes, until the chicken reaches an internal temperature of 165 degrees F Cooking time will vary based on the size of your chicken and how thinly you have pounded it.",
      "If the vegetables are not as tender as you would like when the chicken is done, you can remove the chicken from the pan (transfer it to a plate and cover) then return the pan with the vegetables to the oven and continue baking until the vegetables have completed cookingIn my oven, 17 minutes was perfect for it all to cook.",
      "Sprinkle with the grated Parmesan, flaked sea salt and chopped parsley before serving."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Chicken, potatoes, zucchini, bell pepper and tomatoes with Italian herbs; the Parmesan garnish is optional. Serves 6; about an hour, mostly roasting.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-sassy-low-fodmap-salsa",
    "name": "Sassy Low-FODMAP Salsa",
    "emoji": "🌶️",
    "category": "sides",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "vegan",
      "condiment"
    ],
    "source": "https://rachelpaulsfood.com/sassy-low-fodmap-salsa-recipe-gluten-free-vegan/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 large",
        "item": "very ripe plum/roma or vine ripened tomatoes or 1 can (14.5 ounces) organic diced tomatoes, no seasoning added"
      },
      {
        "qty": "1-2",
        "item": "serrano or red chiles (1/2 for mild, 1 for medium, 1 1/2 to 2 for hot)"
      },
      {
        "qty": "8 sprigs",
        "item": "of fresh cilantro or 3 tsp dried cilantro, I prefer fresh"
      },
      {
        "qty": "2 tablespoons",
        "item": "cooking oil infused with onion or garlic or 1 tablespoon of each"
      },
      {
        "qty": "1/4-1/2 teaspoon",
        "item": "salt"
      },
      {
        "qty": "to taste",
        "item": "Juice from 1 lime"
      },
      {
        "qty": "1/4 tsp",
        "item": "cumin, optional"
      },
      {
        "qty": "1 tsp",
        "item": "sugar, optional"
      }
    ],
    "steps": [
      "Remove the seeds and veins from the chiles.",
      "If using fresh vegetables, roughly chop the tomatoes, chiles and cilantro.",
      "Add the chopped vegetables to your blender with spices, salt and lime juice.",
      "Blend the salsa slightly until it has a coarse texture.",
      "If using canned tomatoes then skip the blending step and place the canned tomatoes, chopped chilis, cilantro, cumin, lime juice, and salt into a bowl and stir to combine.",
      "Preheat 2 tablespoons of oil in a pan or small pot.",
      "Pour the blended/mixed salsa in the hot oil.",
      "Bring to a boil and then reduce the heat to low.",
      "Add sugar to taste if desiredSimmer for 15 minutes.",
      "Adjust the salt to taste.",
      "Serve immediately or store in refrigerator until use (tastes even better a day later)."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Tomatoes, chiles, cilantro, lime and infused oil in place of onion and garlic. Use it with the tacos, fajitas, quesadillas and burrito bowl in this collection. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-slow-cooker-sloppy-joes",
    "name": "Slow-Cooker Sloppy Joes",
    "emoji": "🥪",
    "category": "dinner",
    "time": "2 hr 30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "dairy-free",
      "slow cooker",
      "high-protein"
    ],
    "source": "https://rachelpaulsfood.com/low-fodmap-slow-cooker-sloppy-joes-gluten-free-dairy-free-no-onion-or-garlic/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "lean ground beef, turkey, chicken, or pork"
      },
      {
        "qty": "1/2 cup (56 g, 2 ounces)",
        "item": "diced green bell pepper"
      },
      {
        "qty": "2 tablespoons",
        "item": "garlic infused olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "green scallion tips or chives"
      },
      {
        "qty": "1/2 can (3 ounces, 6 tbsp)",
        "item": "tomato paste"
      },
      {
        "qty": "3 tbsp",
        "item": "light brown sugar"
      },
      {
        "qty": "1 tbsp",
        "item": "yellow mustard, or Dijon"
      },
      {
        "qty": "2 tsp",
        "item": "red wine vinegar"
      },
      {
        "qty": "2 tsp",
        "item": "Worcestershire sauce"
      },
      {
        "qty": "1 cup",
        "item": "low-FODMAP beef broth, prepared"
      },
      {
        "qty": "1/4 tsp",
        "item": "each of salt and pepper, and to taste"
      },
      {
        "qty": "4",
        "item": "low-FODMAP, gluten-free buns, for serving"
      }
    ],
    "steps": [
      "Set a large pot or pan over medium-low heat.",
      "Add the infused olive oil and once shimmering add the scallion tips.",
      "Saute for a couple of minutes and then add in the bell pepper.",
      "Once the pepper is ‘crisp tender’, add your lean ground beef or other protein choice, and cook until browned through.",
      "Drain grease from the meat (discard grease) and transfer to your slow cooker.",
      "To the slow cooker, add the tomato paste, brown sugar, mustard, vinegar, Worcestershire sauce, broth, black pepper and salt to taste and stir.",
      "Cover and cook on low for 2-3 hours, stirring occasionally.",
      "Taste and adjust any seasonings (salt, pepper, sugar) prior to serving.",
      "For best flavor, butter both sides of the buns and toast on a hot griddle or in a large skillet over medium high heat."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (Rachel Pauls Food, a physician who develops low-FODMAP recipes): infused oils stand in for garlic and onion, and the flour, bread, pasta or tortillas are gluten-free. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Beef with garlic-infused oil, scallion tips, tomato, brown sugar and 2 teaspoons Worcestershire, cooked low in the slow cooker. Serve on low-FODMAP gluten-free buns. A regular \"Sloppy Joes\" is in the Family set. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-sesame-beef-stir-fry",
    "name": "Sesame Beef Stir-Fry",
    "emoji": "🥢",
    "category": "dinner",
    "time": "25 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.fodmapformula.com/low-fodmap-sesame-beef-stir-fry/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tsp",
        "item": "cornstarch"
      },
      {
        "qty": "1/2 cup",
        "item": "low FODMAP beef broth"
      },
      {
        "qty": "4 tsp",
        "item": "low sodium soy sauce"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh ginger, minced"
      },
      {
        "qty": "2 tsp",
        "item": "vegetable oil, divided"
      },
      {
        "qty": "1/2 lb",
        "item": "top sirloin steak, thinly sliced"
      },
      {
        "qty": "2 tsp",
        "item": "toasted sesame seeds, divided"
      },
      {
        "qty": "1 cup",
        "item": "broccoli – heads only"
      },
      {
        "qty": "1/2 cup",
        "item": "red pepper, thinly sliced"
      },
      {
        "qty": "1 cup",
        "item": "cooked white or brown rice"
      }
    ],
    "steps": [
      "Combine the cornstarch and a spoonfull or two of beef broth in a small bowl and whisk until it forms a paste.",
      "Add the remaining beef broth, soy sauce, and ginger and whisk until thoroughly combined.",
      "Heat 1 tsp of oil in a large frying pan and add the beef and 1 tsp of sesame seeds.",
      "Stir-fry the beef until it’s cooked through and transfer to a plate.",
      "Cover to keep warm.",
      "Add the remaining oil and broccoli heads to the pan.",
      "Cook for 2 minutes, then add the peppers and cook for another 4-6 minutes (or until the vegetables are tender but still crisp).",
      "Give your cornstarch mixture a final stir and pour it over the vegetables.",
      "Bring the sauce to a light boil and stir for 2 minutes (or until the sauce has thickened).",
      "Add the beef and stir until it’s heated through.",
      "Divide the rice between two plates and top each with an even serving of the beef mixture. Sprinkle with the remaining sesame seeds and serve."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (The FODMAP Formula, a low-FODMAP recipe site): no onion or garlic, gluten-free where it matters. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Beef, low-FODMAP beef broth (most store broths contain onion and garlic, so check), soy sauce, sesame and low-FODMAP vegetables. Serves 2.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-sweet-and-sour-chicken",
    "name": "Sweet and Sour Chicken",
    "emoji": "🍍",
    "category": "dinner",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.fodmapformula.com/low-fodmap-sweet-sour-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2",
        "item": "lg egg whites"
      },
      {
        "qty": "4 tsp",
        "item": "cornstarch, divided"
      },
      {
        "qty": "1 lb",
        "item": "chicken breasts, boneless, skinless, cut into 1\" pieces"
      },
      {
        "qty": "6 tbsp",
        "item": "low FODMAP ketchup"
      },
      {
        "qty": "1/4 cup",
        "item": "water"
      },
      {
        "qty": "3 tbsp",
        "item": "apple cider vinegar"
      },
      {
        "qty": "2 tbsp",
        "item": "brown sugar"
      },
      {
        "qty": "1.5 tbsp",
        "item": "gluten-free soy sauce, low sodium"
      },
      {
        "qty": "2 tbsp",
        "item": "canola oil, divided"
      },
      {
        "qty": "1",
        "item": "red bell pepper, cut into 1\" pieces"
      },
      {
        "qty": "1.5 cups",
        "item": "fresh pineapple, cut into chunks"
      },
      {
        "qty": "2 tsp",
        "item": "fresh ginger, grated"
      },
      {
        "qty": "3",
        "item": "green onions, green parts only, cut into 1\" pieces"
      },
      {
        "qty": "3/8 tsp",
        "item": "kosher salt"
      },
      {
        "qty": "to taste",
        "item": "rice or low FODMAP noodles for serving"
      }
    ],
    "steps": [
      "Combine egg whites with 1 tbsp of cornstarch in a large bowl. Add chicken to the bowl and toss it until each piece is coated.",
      "Combine the rest of the cornstarch, ketchup, water, apple cider vinegar, brown sugar, and soy sauce in a second bowl.",
      "Heat 1 tbsp of oil in a large non-stick frying pan on medium-high.",
      "Add the bell peppers to the pan and cook for 2 minutes, stirring frequently.",
      "Add the pineapple, ginger, and green onions to the pan.",
      "Cook for another 2 minutes, stirring consistently.",
      "Transfer to plate and set aside.",
      "Add remaining oil to the pan.",
      "Then add the chicken (allowing any excess egg whites to drip back into the bowl before transferring it to the pan).",
      "Cook the chicken for 6 minutes (or until the chicken is browned and cooked through).",
      "Then add your bell pepper mixture and your ketchup mixture to the frying pan and bring it to a simmer.",
      "Allow it to simmer for one minute to thicken up, then sprinkle with salt and serve immediately on rice or low FODMAP noodles."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (The FODMAP Formula, a low-FODMAP recipe site): no onion or garlic, gluten-free where it matters. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Uses a low-FODMAP ketchup, gluten-free soy sauce, apple cider vinegar and 1 1/2 cups fresh pineapple across 4 serves (pineapple is low-FODMAP at about 1 cup). Green onion tops only. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-soy-glazed-salmon",
    "name": "Soy-Glazed Salmon",
    "emoji": "🐟",
    "category": "dinner",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.fodmapformula.com/low-fodmap-soy-glazed-salmon/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "to taste",
        "item": "cooking spray"
      },
      {
        "qty": "4",
        "item": "salmon fillets, skin on"
      },
      {
        "qty": "2 tbsp",
        "item": "light brown sugar"
      },
      {
        "qty": "3 tbsp",
        "item": "low-sodium soy sauce"
      },
      {
        "qty": "2 tbsp",
        "item": "lemon juice"
      },
      {
        "qty": "2 tbsp",
        "item": "water"
      },
      {
        "qty": "2 cups",
        "item": "whole-grain brown rice, cooked"
      },
      {
        "qty": "1 cup",
        "item": "green beans, trimmed and cut in half"
      },
      {
        "qty": "1 tsp",
        "item": "unsalted butter"
      },
      {
        "qty": "1.5 tsp",
        "item": "fresh ginger, peeled and chopped"
      },
      {
        "qty": "0.5 tsp",
        "item": "salt"
      },
      {
        "qty": "0.5 tsp",
        "item": "pepper"
      },
      {
        "qty": "1/4 cup",
        "item": "green onions, sliced"
      }
    ],
    "steps": [
      "Preheat your oven to 400 degrees and spray a 9 x 13\" baking dish with cooking spray. Set aside.",
      "Combine the brown sugar, soy sauce, lemon juice, and water in a small bowl and whisk until the sugar is completely dissolved.",
      "Place 1 tbsp of sauce in a small dish for later.",
      "Place your fish (skin side down) in the prepared baking dish and pour the soy sauce mixture evenly over the fish.",
      "Bake for 15-20 minutes or until cooked through.",
      "Place your green beans in a microwave-safe bowl with 1 tbsp of water and cover with a ceramic plate. Microwave on high for 2 minutes.",
      "Heat a large frying pan on medium-high heat and add the butter, ginger, salt, and pepper.",
      "Cook for 30 seconds or until you can smell the ginger.",
      "Add the rice and stir to combine.",
      "Then add the green beans and the green onions.",
      "Cook until the rice is heated through.",
      "Divide the rice between 4 plates. Place one fillet on each plate and drizzle with the remaining soy-sauce mixture. Serve immediately."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (The FODMAP Formula, a low-FODMAP recipe site): no onion or garlic, gluten-free where it matters. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Salmon in a soy, brown sugar and lemon glaze with green beans and rice. Use gluten-free soy sauce and only the green parts of the green onions. Serves 4.",
    "isCustom": true
  },
  {
    "id": "kandy-rp4-breaded-pork-chops",
    "name": "Breaded Pork Chops",
    "emoji": "🐖",
    "category": "dinner",
    "time": "20 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "gluten-free",
      "20-min",
      "high-protein"
    ],
    "source": "https://www.fodmapformula.com/fodmap-friendly-breaded-pork-chops/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/3 cup",
        "item": "gluten-free breadcrumbs"
      },
      {
        "qty": "1/4 cup",
        "item": "parmesan cheese, finely grated"
      },
      {
        "qty": "1 tsp",
        "item": "dried basil"
      },
      {
        "qty": "1 tsp",
        "item": "dried oregano"
      },
      {
        "qty": "4",
        "item": "pork chops"
      },
      {
        "qty": "1 tbsp",
        "item": "Dijon mustard"
      },
      {
        "qty": "to taste",
        "item": "pinch salt and pepper"
      }
    ],
    "steps": [
      "Preheat oven to 450 degrees. Combine breadcrumbs, parmesan, basil and oregano in a small bowl.",
      "Pat each pork chop dry with a paper towel. Rub mustard over pork chops and sprinkle with salt and pepper. Then dredge in breadcrumb mix.",
      "Place breaded pork chops on a baking sheet lined with parchment paper and bake for 10-15 minutes (until pork is cooked through). Serve warm."
    ],
    "fodmapNote": "Low-FODMAP as written, per the author (The FODMAP Formula, a low-FODMAP recipe site): no onion or garlic, gluten-free where it matters. I checked the ingredient list against general Monash guidance but cannot confirm Monash certification. Seven ingredients: pork chops, gluten-free breadcrumbs, Parmesan, egg and seasonings. Serves 4.",
    "isCustom": true
  },

];
