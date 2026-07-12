const RECIPE_CATEGORIES = [

  { id: 'all',       label: 'All Recipes',  emoji: '🍽️' },

  { id: 'breakfast', label: 'Breakfast',    emoji: '🌅' },

  { id: 'lunch',     label: 'Lunch',        emoji: '🥗' },

  { id: 'dinner',    label: 'Dinner',       emoji: '🍴' },

  { id: 'snacks',    label: 'Snacks',       emoji: '🥕' },

  { id: 'desserts',  label: 'Desserts',     emoji: '🍓' },

];



const RECIPES = [



  // ─── BREAKFAST ─────────────────────────────────────────

  {

    id: 'banana-oat-pancakes',

    name: 'Banana Oat Pancakes',

    emoji: '🥞',

    category: 'breakfast',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '1 medium', item: 'firm (unripe) banana, mashed' },

      { qty: '1/2 cup (44g)', item: 'rolled oats (GF certified)' },

      { qty: '2', item: 'large eggs' },

      { qty: '1/4 cup', item: 'lactose-free milk or almond milk' },

      { qty: '1 tsp', item: 'baking powder' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '1 tbsp', item: 'butter or olive oil, for cooking' },

    ],

    steps: [

      'Mash the banana well in a large bowl until smooth.',

      'Add oats, eggs, milk, baking powder, maple syrup, and vanilla. Stir until just combined.',

      'Heat butter or oil in a non-stick pan over medium heat.',

      'Pour 1/4 cup of batter per pancake. Cook 2–3 minutes until bubbles form on top, then flip and cook 1–2 minutes more.',

      'Serve with fresh strawberries and a drizzle of maple syrup.',

    ],

    fodmapNote: 'Use a firm, slightly green banana — ripe bananas are higher in fructans. Keep oat serving to 1/4 cup dry per person to stay low FODMAP.'

  },



  {

    id: 'veggie-scrambled-eggs',

    name: 'Veggie Scrambled Eggs',

    emoji: '🍳',

    category: 'breakfast',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'high-protein'],

    ingredients: [

      { qty: '3', item: 'large eggs' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '4', item: 'cherry tomatoes, halved' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '28g', item: 'feta cheese, crumbled' },

      { qty: '1 tsp', item: 'butter' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Whisk eggs with a pinch of salt and pepper.',

      'Melt butter in a non-stick pan over medium-low heat.',

      'Add spring onion tops and cherry tomatoes; cook 1 minute.',

      'Add spinach and stir until wilted, about 30 seconds.',

      'Pour in eggs and gently fold with a spatula until just set — soft and creamy.',

      'Remove from heat, top with crumbled feta, and serve immediately.',

    ],

    fodmapNote: 'Use only the green tops of spring onions (not the white base). Keep feta to 28g to stay within the low-moderate lactose range. Serve with GF toast if desired.'

  },



  {

    id: 'strawberry-chia-pudding',

    name: 'Strawberry Chia Pudding',

    emoji: '🍓',

    category: 'breakfast',

    time: '5 min + overnight',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '1/4 cup (40g)', item: 'chia seeds' },

      { qty: '1.5 cups', item: 'almond milk or lactose-free milk' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '1 cup', item: 'fresh strawberries, hulled and sliced' },

      { qty: '2 tbsp', item: 'pumpkin seeds, to serve' },

    ],

    steps: [

      'Combine chia seeds, milk, maple syrup, and vanilla in a jar or bowl. Stir well.',

      'Let sit for 10 minutes, then stir again to break up any clumps.',

      'Cover and refrigerate overnight (or at least 4 hours).',

      'In the morning, stir the pudding. If too thick, add a splash of milk.',

      'Divide into 2 glasses and top with fresh strawberries and pumpkin seeds.',

    ],

    fodmapNote: 'Chia seeds are low FODMAP. Strawberries are safe in a 1-cup serving. A great make-ahead breakfast for busy mornings.'

  },



  {

    id: 'blueberry-smoothie-bowl',

    name: 'Blueberry Smoothie Bowl',

    emoji: '🫐',

    category: 'breakfast',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1/2 cup (74g)', item: 'frozen blueberries' },

      { qty: '1/2', item: 'firm banana, frozen' },

      { qty: '1/4 cup', item: 'almond milk' },

      { qty: 'Toppings:', item: '—' },

      { qty: '5', item: 'fresh strawberries, sliced' },

      { qty: '1 tbsp', item: 'pumpkin seeds' },

      { qty: '1 tbsp', item: 'chia seeds' },

      { qty: '1 tsp', item: 'maple syrup' },

    ],

    steps: [

      'Blend frozen blueberries, frozen banana, and almond milk until thick and smooth. Add a tiny splash more milk only if needed — you want it thick.',

      'Pour into a bowl.',

      'Arrange sliced strawberries, pumpkin seeds, and chia seeds on top.',

      'Drizzle with maple syrup and serve immediately.',

    ],

    fodmapNote: 'Use a firm, unripe banana. Keep blueberries to 1/2 cup per person — this is the moderate-low threshold. The natural sweetness means you need very little maple syrup.'

  },



  {

    id: 'peanut-butter-banana-toast',

    name: 'Peanut Butter Banana Toast',

    emoji: '🍞',

    category: 'breakfast',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '2 slices', item: 'gluten-free bread, toasted' },

      { qty: '2 tbsp', item: 'peanut butter (no added sugar or honey)' },

      { qty: '1/2', item: 'firm banana, sliced' },

      { qty: '1 tsp', item: 'maple syrup (optional drizzle)' },

      { qty: 'pinch', item: 'cinnamon' },

    ],

    steps: [

      'Toast the gluten-free bread slices.',

      'Spread peanut butter generously on both slices.',

      'Layer banana slices on top.',

      'Drizzle with maple syrup and dust with cinnamon.',

      'Serve immediately.',

    ],

    fodmapNote: 'Plain peanut butter (just peanuts + salt) is low FODMAP. Use a firm banana — not an overripe one. GF bread avoids wheat fructans.'

  },



  {

    id: 'rice-congee',

    name: 'Simple Rice Congee (Savoury Porridge)',

    emoji: '🍲',

    category: 'breakfast',

    time: '45 min',

    serves: 3,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1/2 cup', item: 'white rice, uncooked' },

      { qty: '5 cups', item: 'low-FODMAP chicken or vegetable stock (no onion/garlic)' },

      { qty: '1 tsp', item: 'fresh ginger, finely grated' },

      { qty: '1 tbsp', item: 'soy sauce (or tamari for GF)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '2', item: 'spring onion stems (green tops only), sliced' },

      { qty: '1', item: 'soft-boiled egg per person (optional)' },

    ],

    steps: [

      'Bring stock to a boil in a large pot. Add rice and ginger.',

      'Reduce heat to low, cover partially, and cook 35–40 minutes, stirring occasionally, until rice has broken down and is creamy.',

      'Add more stock or water if too thick.',

      'Stir in soy sauce and sesame oil.',

      'Ladle into bowls and top with spring onion greens and a halved soft-boiled egg if using.',

    ],

    fodmapNote: 'Make or buy a stock without onion or garlic — most commercial stocks contain both. Use homemade stock or a FODMAP-certified brand. Ginger is low FODMAP and helps with digestion.'

  },



  {

    id: 'avocado-tuna-rice-cakes',

    name: 'Avocado & Tuna Rice Cakes',

    emoji: '🫓',

    category: 'breakfast',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '2', item: 'plain rice cakes' },

      { qty: '1/8', item: 'avocado (about 20g), sliced' },

      { qty: '95g tin', item: 'canned tuna in water, drained' },

      { qty: '1 squeeze', item: 'fresh lemon juice' },

      { qty: '4', item: 'cherry tomatoes, halved' },

      { qty: 'pinch', item: 'sea salt and cracked pepper' },

    ],

    steps: [

      'Slice the avocado and squeeze lemon juice over it.',

      'Layer avocado slices onto the rice cakes.',

      'Pile on the drained tuna.',

      'Top with cherry tomatoes, salt, and pepper.',

      'Serve immediately.',

    ],

    fodmapNote: 'Keep avocado to 1/8 of a whole avocado (about 20g) to stay in the low-FODMAP zone. Cherry tomatoes are safe at this serving. A filling high-protein breakfast or snack.'

  },



  // ─── LUNCH ─────────────────────────────────────────────

  {

    id: 'tuna-rice-bowl',

    name: 'Japanese-Style Tuna Rice Bowl',

    emoji: '🍱',

    category: 'lunch',

    time: '15 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '2 cups', item: 'cooked white rice' },

      { qty: '2 × 95g tins', item: 'canned tuna in water, drained' },

      { qty: '1/2', item: 'cucumber, sliced into half-moons' },

      { qty: '8', item: 'cherry tomatoes, halved' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'sesame seeds' },

      { qty: '1 tsp', item: 'rice wine vinegar (optional)' },

    ],

    steps: [

      'Cook rice according to packet directions, or use leftover rice.',

      'Divide rice between two bowls.',

      'Arrange tuna, cucumber, and cherry tomatoes over the rice.',

      'Mix soy sauce, sesame oil, and rice vinegar in a small bowl; drizzle over the bowls.',

      'Top with spring onion greens and sesame seeds. Serve.',

    ],

    fodmapNote: 'A fast and filling bowl that is entirely low FODMAP. Use tamari instead of regular soy sauce if you need the dish to be strictly gluten-free.'

  },



  {

    id: 'chicken-lettuce-wraps',

    name: 'Asian Chicken Lettuce Wraps',

    emoji: '🥬',

    category: 'lunch',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'low-carb'],

    ingredients: [

      { qty: '300g', item: 'ground (minced) chicken' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'medium carrot, finely diced' },

      { qty: '1/2', item: 'red bell pepper, finely diced' },

      { qty: '2 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '6–8', item: 'iceberg or butter lettuce leaves' },

      { qty: '3 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1 tbsp', item: 'sesame seeds' },

      { qty: '1', item: 'lime, cut into wedges' },

    ],

    steps: [

      'Heat garlic-infused oil in a large pan over high heat.',

      'Add ground chicken and cook, breaking it up, until golden brown (about 5 min).',

      'Add carrot and bell pepper; cook 3 more minutes.',

      'Stir in ginger, soy sauce, and sesame oil. Cook 1 minute.',

      'Remove from heat and stir through spring onion greens.',

      'Spoon mixture into lettuce cups. Top with sesame seeds and a squeeze of lime.',

    ],

    fodmapNote: 'Garlic-infused oil gives full garlic flavour without the fructans — the FODMAPs don\'t transfer into the oil. Use only the green tops of spring onions.'

  },



  {

    id: 'quinoa-greek-salad',

    name: 'Quinoa Greek Salad',

    emoji: '🥗',

    category: 'lunch',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '1 cup', item: 'quinoa, rinsed' },

      { qty: '2 cups', item: 'water' },

      { qty: '1/2', item: 'cucumber, diced' },

      { qty: '12', item: 'cherry tomatoes, halved' },

      { qty: '1/2', item: 'red bell pepper, diced' },

      { qty: '1/3 cup', item: 'kalamata olives, pitted and halved' },

      { qty: '60g', item: 'feta cheese, crumbled' },

      { qty: '2 tbsp', item: 'olive oil' },

      { qty: '1.5 tbsp', item: 'fresh lemon juice' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Cook quinoa: combine with water in a saucepan, bring to a boil, reduce heat, cover and cook 15 minutes until water is absorbed. Fluff with a fork and cool.',

      'Whisk together olive oil, lemon juice, oregano, salt, and pepper for the dressing.',

      'Combine cooled quinoa, cucumber, cherry tomatoes, bell pepper, and olives in a large bowl.',

      'Pour over the dressing and toss to combine.',

      'Top with crumbled feta.',

      'Serve at room temperature or chilled.',

    ],

    fodmapNote: 'Quinoa is 100% low FODMAP. Keep feta to about 30g per person to stay within the moderate-lactose zone. Red bell pepper is lower in fructans than green.'

  },



  {

    id: 'peanut-noodle-salad',

    name: 'Cold Peanut Noodle Salad',

    emoji: '🍜',

    category: 'lunch',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '150g', item: 'rice vermicelli noodles' },

      { qty: '1', item: 'medium carrot, julienned' },

      { qty: '1/2', item: 'cucumber, julienned' },

      { qty: '3 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '2 tbsp', item: 'roasted peanuts, roughly chopped' },

      { qty: '—', item: 'Peanut Dressing:' },

      { qty: '3 tbsp', item: 'peanut butter (smooth)' },

      { qty: '2 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1.5 tbsp', item: 'fresh lime juice' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '2–3 tbsp', item: 'water, to thin' },

    ],

    steps: [

      'Cook rice noodles per packet instructions, drain, and rinse under cold water.',

      'Whisk together all dressing ingredients until smooth, adding water to reach a pourable consistency.',

      'Toss noodles with carrot and cucumber.',

      'Pour dressing over and mix well.',

      'Top with spring onion greens and chopped peanuts.',

      'Serve cold or at room temperature.',

    ],

    fodmapNote: 'Peanut butter and peanuts are low FODMAP. Maple syrup is the safe sweetener — don\'t substitute honey. Rice noodles have no FODMAPs.'

  },



  {

    id: 'roasted-veg-soup',

    name: 'Simple Roasted Vegetable Soup',

    emoji: '🍵',

    category: 'lunch',

    time: '50 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '3', item: 'medium carrots, roughly chopped' },

      { qty: '2', item: 'medium potatoes, cubed' },

      { qty: '2', item: 'zucchini, roughly chopped' },

      { qty: '2', item: 'large tomatoes, quartered' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '1 tsp', item: 'dried rosemary' },

      { qty: '4 cups', item: 'low-FODMAP vegetable stock' },

      { qty: '3 tbsp', item: 'spring onion green tops, chopped' },

      { qty: 'to taste', item: 'salt, pepper, and fresh lemon juice' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss carrots, potatoes, zucchini, and tomatoes with garlic-infused oil, thyme, rosemary, salt, and pepper on a large baking tray.',

      'Roast for 25–30 minutes until golden and tender.',

      'Transfer roasted vegetables to a large pot and add stock.',

      'Blend with a stick blender to your preferred texture — fully smooth or slightly chunky.',

      'Adjust seasoning and add a squeeze of lemon juice. Top with spring onion greens and serve.',

    ],

    fodmapNote: 'Garlic-infused oil gives the garlic depth without FODMAPs. Make sure your stock is onion- and garlic-free. This soup freezes well.'

  },



  {

    id: 'blt-gf',

    name: 'Classic BLT on GF Bread',

    emoji: '🥪',

    category: 'lunch',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '2 slices', item: 'gluten-free bread' },

      { qty: '3–4 rashers', item: 'bacon, cooked to your liking' },

      { qty: '2', item: 'butter lettuce leaves' },

      { qty: '1 medium', item: 'tomato, sliced' },

      { qty: '1 tbsp', item: 'mayonnaise' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Toast the gluten-free bread.',

      'Cook bacon in a pan until crispy. Drain on paper towel.',

      'Spread mayonnaise on one or both slices of toast.',

      'Layer lettuce, tomato, then bacon.',

      'Season with salt and pepper. Press together and slice diagonally. Serve.',

    ],

    fodmapNote: 'Gluten-free bread avoids wheat fructans. Bacon and mayonnaise are both naturally FODMAP-free. A simple but satisfying classic.'

  },



  // ─── DINNER ────────────────────────────────────────────

  {

    id: 'lemon-herb-chicken',

    name: 'Lemon Herb Roast Chicken & Vegetables',

    emoji: '🍗',

    category: 'dinner',

    time: '55 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4', item: 'bone-in chicken thighs' },

      { qty: '3', item: 'medium potatoes, skin on, cut in chunks' },

      { qty: '2', item: 'medium carrots, sliced' },

      { qty: '3', item: 'zucchini, sliced into rounds' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '1 tbsp', item: 'fresh thyme leaves (or 1 tsp dried)' },

      { qty: '1 tbsp', item: 'fresh rosemary, chopped (or 1 tsp dried)' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Mix garlic-infused oil, lemon juice, lemon zest, thyme, rosemary, salt, and pepper in a bowl.',

      'Scrub the potatoes and leave the skins on, then toss potatoes and carrots in half the herb oil and spread on a large baking tray.',

      'Roast for 15 minutes.',

      'Place chicken thighs on top and pour over remaining herb oil. Add zucchini to the tray.',

      'Return to oven and roast for 35–40 minutes until chicken is golden and cooked through.',

      'Rest 5 minutes before serving.',

    ],

    fodmapNote: 'Garlic-infused oil delivers full garlic flavour. This dish is entirely low FODMAP — a great family dinner. Add a simple green salad on the side. Leaving the potato skins on and adding an extra zucchini boosts the fibre.'

  },



  {

    id: 'beef-bok-choy-stir-fry',

    name: 'Beef & Bok Choy Stir-Fry',

    emoji: '🥩',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '300g', item: 'beef strips (sirloin or rump)' },

      { qty: '2 heads', item: 'bok choy, halved lengthways' },

      { qty: '2', item: 'medium carrots, skin on, julienned' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tbsp', item: 'oyster sauce (check for no garlic/onion)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tbsp', item: 'cornstarch (cornflour) mixed with 2 tbsp water' },

      { qty: '3 tbsp', item: 'spring onion green tops' },

      { qty: '2 cups', item: 'cooked brown rice (or white rice for a quicker option), to serve' },

    ],

    steps: [

      'Mix soy sauce, oyster sauce, sesame oil, and ginger in a small bowl. Set aside.',

      'Heat garlic-infused oil in a wok or large pan over high heat until smoking.',

      'Cook beef strips in a single layer for 2 minutes without moving, then flip and cook 1 more minute. Remove and set aside.',

      'Add carrot to the pan and stir-fry 2 minutes. Add bok choy and toss until wilted, about 2 minutes.',

      'Return beef to the pan. Pour sauce over everything and toss.',

      'Add cornstarch mixture and toss until sauce thickens, about 30 seconds.',

      'Garnish with spring onion greens. Serve over brown rice.',

    ],

    fodmapNote: 'High heat and quick cooking are key to a good stir-fry. Check your oyster sauce label — most are fine, but some brands add garlic or onion. Use tamari for strictly gluten-free. Brown rice and an extra skin-on carrot add fibre.'

  },



  {

    id: 'baked-salmon',

    name: 'Baked Salmon with Potato & Green Beans',

    emoji: '🐟',

    category: 'dinner',

    time: '35 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'salmon fillets (about 180g each)' },

      { qty: '3', item: 'medium potatoes, skin on, cut into wedges' },

      { qty: '200g', item: 'green beans, trimmed' },

      { qty: '2 tbsp', item: 'olive oil' },

      { qty: '1', item: 'lemon, sliced' },

      { qty: '2 tsp', item: 'fresh dill (or 1 tsp dried)' },

      { qty: '1 tbsp', item: 'capers (optional)' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Leave the skins on the potato wedges, toss in 1 tbsp olive oil, salt, and pepper. Spread on a baking tray and roast for 20 minutes.',

      'Push potatoes to the sides. Place salmon in the centre, drizzle with remaining oil, and lay lemon slices on top.',

      'Scatter green beans around the salmon. Season with salt, pepper, and dill.',

      'Return to oven and bake 12–15 minutes until salmon flakes easily.',

      'Scatter capers over if using. Serve hot.',

    ],

    fodmapNote: 'All ingredients are naturally FODMAP-free. Green beans are safe at this serving size. An elegant and effortless meal with minimal cleanup. Skin-on potato wedges and a generous serve of green beans lift the fibre.'

  },



  {

    id: 'gf-pasta-tomato',

    name: 'GF Pasta with Simple Tomato Basil Sauce',

    emoji: '🍝',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'dairy-free option', 'higher-fibre'],

    ingredients: [

      { qty: '200g', item: 'brown-rice gluten-free pasta (penne or spaghetti)' },

      { qty: '1 × 400g tin', item: 'crushed tomatoes (no onion/garlic added)' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '12', item: 'cherry tomatoes, halved' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '1/2 tsp', item: 'dried oregano' },

      { qty: '1/2 tsp', item: 'sugar (balances acidity)' },

      { qty: 'handful', item: 'fresh basil leaves' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: 'to serve', item: 'grated parmesan (optional)' },

    ],

    steps: [

      'Cook GF pasta according to packet directions until al dente. Reserve 1/2 cup pasta water before draining.',

      'Heat garlic-infused oil in a pan over medium heat. Add cherry tomatoes and cook 3 minutes until softening.',

      'Add crushed tomatoes, oregano, sugar, salt, and pepper. Simmer 10 minutes.',

      'Stir in the baby spinach and let it wilt into the sauce, about 1 minute.',

      'Add drained pasta to the sauce. Toss, adding pasta water a little at a time to loosen the sauce.',

      'Remove from heat, tear in fresh basil leaves, and toss again.',

      'Serve with grated parmesan on top.',

    ],

    fodmapNote: 'Never add actual garlic to the sauce — use garlic-infused oil only. Canned tomatoes are low FODMAP at 100g per serve. Check the tin has no added onion or garlic. Brown-rice pasta and wilted spinach add fibre.'

  },



  {

    id: 'chicken-fried-rice',

    name: 'Chicken Fried Rice',

    emoji: '🍚',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2 cups', item: 'cooked brown rice (cold — day-old is best; or white rice for a quicker option)' },

      { qty: '200g', item: 'cooked chicken, shredded or diced' },

      { qty: '2', item: 'eggs, lightly beaten' },

      { qty: '2', item: 'medium carrots, skin on, finely diced' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '4 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1 tbsp', item: 'sesame seeds' },

    ],

    steps: [

      'Heat garlic-infused oil in a wok or large frying pan over very high heat.',

      'Add carrots and stir-fry for 2 minutes.',

      'Push vegetables to the side. Pour in eggs and scramble until just set.',

      'Add cold brown rice and chicken. Toss everything together over high heat for 3–4 minutes.',

      'Add soy sauce and sesame oil. Toss well and cook 1 more minute.',

      'Remove from heat. Top with spring onion greens and sesame seeds.',

    ],

    fodmapNote: 'Cold, day-old rice is essential for proper fried rice — freshly cooked rice makes it soggy. This is a great way to use leftover rotisserie chicken (plain, no seasoning). Cold brown rice and an extra skin-on carrot add fibre.'

  },



  {

    id: 'fish-tacos',

    name: 'Crispy Fish Tacos',

    emoji: '🌮',

    category: 'dinner',

    time: '30 min',

    serves: 2,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'higher-fibre'],

    ingredients: [

      { qty: '300g', item: 'white fish fillets (cod, tilapia, or snapper)' },

      { qty: '6', item: 'small corn tortillas' },

      { qty: '1 tbsp', item: 'olive oil' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1/2 tsp', item: 'cumin' },

      { qty: 'to taste', item: 'salt and pepper' },

      { qty: '—', item: 'Quick Slaw:' },

      { qty: '2 cups', item: 'green cabbage, thinly shredded' },

      { qty: '2', item: 'medium carrots, skin on, grated' },

      { qty: '2 tbsp', item: 'mayonnaise' },

      { qty: '1 tbsp', item: 'lime juice' },

      { qty: '1', item: 'lime, cut into wedges' },

      { qty: '3 tbsp', item: 'spring onion green tops' },

    ],

    steps: [

      'Mix mayonnaise and lime juice in a bowl. Toss with shredded cabbage and grated carrots. Set slaw aside.',

      'Pat fish dry and coat with olive oil, paprika, cumin, salt, and pepper.',

      'Heat a non-stick pan over medium-high heat. Cook fish 3–4 minutes per side until golden and cooked through. Flake into large chunks.',

      'Warm corn tortillas in a dry pan or wrap in damp paper towels and microwave 30 seconds.',

      'Build tacos: tortilla → slaw → fish → spring onion greens → lime squeeze.',

    ],

    fodmapNote: 'Corn tortillas are low FODMAP — wheat tortillas are not. Green cabbage at this serving is low FODMAP. Corn tortillas vary in size; 3 small ones per person is a standard serving. Extra grated carrot and a bit more cabbage in the slaw add fibre.'

  },



  {

    id: 'chicken-curry',

    name: 'FODMAP-Friendly Chicken Curry',

    emoji: '🍛',

    category: 'dinner',

    time: '40 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '600g', item: 'chicken breast or thigh, cut into chunks' },

      { qty: '2', item: 'medium carrots, skin on, sliced' },

      { qty: '2', item: 'zucchini, skin on, cubed' },

      { qty: '1 × 400g tin', item: 'crushed tomatoes' },

      { qty: '1/4 cup (60ml)', item: 'canned coconut milk' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'fresh ginger, finely grated' },

      { qty: '2 tsp', item: 'curry powder' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'ground turmeric' },

      { qty: '1/2 tsp', item: 'paprika' },

      { qty: 'to taste', item: 'salt and pepper' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '3 tbsp', item: 'spring onion green tops (garnish)' },

      { qty: '2 cups', item: 'cooked brown rice (or white rice for a quicker option), to serve' },

    ],

    steps: [

      'Heat garlic-infused oil in a large pot over medium-high heat.',

      'Add ginger and all spices. Stir and cook 1 minute until fragrant.',

      'Add chicken and brown on all sides, about 5 minutes.',

      'Add carrots, crushed tomatoes, salt, and pepper. Stir well.',

      'Bring to a boil, then reduce heat and simmer 20 minutes.',

      'Add zucchini and coconut milk. Simmer 10 more minutes until zucchini is tender and chicken is cooked.',

      'Stir in the baby spinach and let it wilt through at the end, about 1 minute.',

      'Garnish with spring onion greens. Serve over brown rice.',

    ],

    fodmapNote: 'Keep coconut milk to 1/4 cup for the whole batch (about 1 tbsp per person) to stay within FODMAP limits. Use garlic-infused oil rather than real garlic. Skin-on carrot and zucchini, wilted spinach, and brown rice add fibre.'

  },



  {

    id: 'lamb-chops',

    name: 'Rosemary Lamb Chops with Roasted Veg',

    emoji: '🥩',

    category: 'dinner',

    time: '40 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4', item: 'lamb loin chops' },

      { qty: '2', item: 'medium carrots, skin on, cut into sticks' },

      { qty: '2', item: 'zucchini, skin on, cut into sticks' },

      { qty: '1.5 cups', item: 'green beans' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'fresh rosemary, finely chopped' },

      { qty: '1', item: 'lemon, zest and juice' },

      { qty: 'to taste', item: 'sea salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss carrots and zucchini in 1 tbsp garlic-infused oil, salt, and pepper. Spread on a baking tray and roast 25 minutes.',

      'Mix remaining oil, rosemary, lemon zest, salt, and pepper. Rub over lamb chops.',

      'Heat a grill pan or heavy pan over high heat. Cook chops 3–4 minutes per side for medium, or to your liking.',

      'Add green beans to the roasting tray for the last 8 minutes.',

      'Rest lamb 3 minutes, then serve with roasted vegetables and a squeeze of lemon.',

    ],

    fodmapNote: 'Lamb is naturally FODMAP-free. All vegetables in this dish are low FODMAP at these serving sizes. A beautiful, simple dish that feels restaurant-quality. Skin-on carrots and zucchini plus a bigger serve of green beans add fibre.'

  },



  {

    id: 'pork-meatballs',

    name: 'Herbed Pork Meatballs with GF Pasta',

    emoji: '🍝',

    category: 'dinner',

    time: '45 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'higher-fibre'],

    ingredients: [

      { qty: '500g', item: 'ground (minced) pork' },

      { qty: '1/4 cup', item: 'gluten-free breadcrumbs' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '1', item: 'egg' },

      { qty: '3 tbsp', item: 'spring onion green tops, finely chopped' },

      { qty: '1 tsp', item: 'dried Italian herbs' },

      { qty: '1 tsp', item: 'fennel seeds (optional, adds great flavour)' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '—', item: 'Tomato Sauce:' },

      { qty: '2 × 400g tins', item: 'crushed tomatoes' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '1/2 tsp', item: 'sugar' },

      { qty: '400g', item: 'brown-rice gluten-free pasta, cooked to serve' },

      { qty: 'to serve', item: 'parmesan, grated' },

    ],

    steps: [

      'Combine pork, GF breadcrumbs, ground flaxseed, egg, spring onion, herbs, fennel seeds, salt, and pepper. Mix well with your hands.',

      'Roll into balls about the size of a golf ball (makes ~20).',

      'Heat garlic-infused oil in a large oven-safe pan over medium-high heat. Brown meatballs on all sides, about 5 minutes. Remove and set aside.',

      'In the same pan, add crushed tomatoes, oregano, sugar, salt, and pepper. Stir and simmer 5 minutes.',

      'Return meatballs to the sauce. Cover and simmer on low heat 20 minutes until cooked through.',

      'Serve over cooked brown-rice GF pasta with parmesan.',

    ],

    fodmapNote: 'GF breadcrumbs and pasta avoid wheat fructans. Fennel seeds add an authentic Italian flavour and are very low FODMAP. These meatballs freeze beautifully in the sauce. Ground flaxseed in the mix and brown-rice pasta add fibre.'

  },



  {

    id: 'baked-potato-bar',

    name: 'Loaded Baked Potato Bar',

    emoji: '🥔',

    category: 'dinner',

    time: '60 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'higher-fibre'],

    ingredients: [

      { qty: '2 large', item: 'baking potatoes (brushed clean)' },

      { qty: '1 tin (95g)', item: 'canned tuna in water (optional)' },

      { qty: '60g', item: 'cheddar cheese, grated' },

      { qty: '1 tbsp', item: 'butter' },

      { qty: '4 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '2 tbsp', item: 'sour cream (optional — check tolerance)' },

      { qty: '12', item: 'cherry tomatoes, halved' },

      { qty: 'to taste', item: 'salt, pepper, and paprika' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F. Pierce potatoes all over with a fork.',

      'Rub with a little olive oil and salt. Place directly on oven rack.',

      'Bake 50–60 minutes until skin is crispy and flesh is completely soft.',

      'Cut open and fluff interior with a fork, keeping and eating the skins. Add butter and salt.',

      'Pile on your toppings: cheddar, spring onion greens, tuna, sour cream, and cherry tomatoes.',

      'Season with pepper and a pinch of paprika.',

    ],

    fodmapNote: 'Potatoes are wonderfully low FODMAP. Cheddar is low in lactose. Sour cream — use just 1 tbsp per person and test your tolerance. Spring onion green tops replace chives safely. Eating the potato skins and extra cherry tomatoes adds fibre.'

  },



  // ─── SNACKS ────────────────────────────────────────────

  {

    id: 'peanut-butter-smoothie',

    name: 'Peanut Butter & Banana Smoothie',

    emoji: '🥤',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1/2', item: 'firm banana (frozen gives creamier texture)' },

      { qty: '1.5 tbsp', item: 'peanut butter (smooth)' },

      { qty: '1 cup', item: 'almond milk' },

      { qty: '1 tsp', item: 'chia seeds' },

      { qty: '1 tsp', item: 'maple syrup (optional)' },

      { qty: '4–5', item: 'ice cubes' },

    ],

    steps: [

      'Add all ingredients to a blender.',

      'Blend on high for 30–60 seconds until smooth and creamy.',

      'Taste and add maple syrup if you prefer it sweeter.',

      'Serve immediately in a tall glass.',

    ],

    fodmapNote: 'Use a firm banana for lower FODMAPs. This smoothie is a good protein snack — peanut butter is low FODMAP and filling. Great post-workout.'

  },



  {

    id: 'strawberry-smoothie',

    name: 'Strawberry Almond Smoothie',

    emoji: '🍓',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1 cup', item: 'fresh or frozen strawberries' },

      { qty: '1 cup', item: 'almond milk' },

      { qty: '1/2 cup', item: 'lactose-free yogurt (plain)' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: '4–5', item: 'ice cubes (if using fresh strawberries)' },

    ],

    steps: [

      'Add all ingredients to a blender.',

      'Blend until completely smooth.',

      'Serve immediately.',

    ],

    fodmapNote: 'Strawberries are one of the most FODMAP-friendly fruits — a whole cup is perfectly safe. Lactose-free yogurt provides creaminess without the lactose.'

  },



  {

    id: 'trail-mix',

    name: 'Low-FODMAP Trail Mix',

    emoji: '🌰',

    category: 'snacks',

    time: '5 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '1/4 cup', item: 'walnuts' },

      { qty: '1/4 cup', item: 'macadamia nuts' },

      { qty: '1/4 cup', item: 'pumpkin seeds (pepitas)' },

      { qty: '2 tbsp', item: 'sunflower seeds' },

      { qty: '2 tbsp', item: 'dark chocolate chips (at least 70% cacao)' },

      { qty: '2 tbsp', item: 'dried cranberries (no added sugar if possible)' },

      { qty: 'pinch', item: 'sea salt' },

    ],

    steps: [

      'Combine all ingredients in a bowl and toss together.',

      'Divide into 4 portions (about 1/3 cup each).',

      'Store in an airtight container at room temperature for up to 2 weeks.',

    ],

    fodmapNote: 'Walnuts and macadamia are the safest nuts for FODMAP. Avoid cashews and pistachios. Keep dark chocolate chips small — 70%+ cacao has less sugar/lactose. Dried cranberries are fine in small amounts (1 tbsp per serving).'

  },



  {

    id: 'carrot-peanut-butter',

    name: 'Carrot Sticks with Peanut Butter',

    emoji: '🥕',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '2', item: 'medium carrots, peeled and cut into sticks' },

      { qty: '2 tbsp', item: 'peanut butter (smooth or crunchy)' },

      { qty: 'optional', item: 'pinch of sea salt, sesame seeds' },

    ],

    steps: [

      'Peel and cut carrots into sticks.',

      'Serve alongside a small dish of peanut butter for dipping.',

      'Sprinkle a little sea salt or sesame seeds over the peanut butter if desired.',

    ],

    fodmapNote: 'One of the simplest, most reliable low-FODMAP snacks. Carrots are completely FODMAP-free, and peanut butter (plain) is safe at a 2-tbsp serving.'

  },



  // ─── DESSERTS ──────────────────────────────────────────

  {

    id: 'baked-banana',

    name: 'Baked Cinnamon Banana',

    emoji: '🍌',

    category: 'desserts',

    time: '15 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'dairy-free option'],

    ingredients: [

      { qty: '2', item: 'firm (unripe) bananas' },

      { qty: '2 tsp', item: 'butter or coconut oil' },

      { qty: '2 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'cinnamon' },

      { qty: 'optional', item: '2 tbsp chopped walnuts' },

      { qty: 'optional', item: 'lactose-free ice cream or yogurt, to serve' },

    ],

    steps: [

      'Preheat oven to 180°C / 350°F.',

      'Slice bananas in half lengthways and place cut-side up in a baking dish.',

      'Mix maple syrup, melted butter, and cinnamon together. Spoon over bananas.',

      'Sprinkle with walnuts if using.',

      'Bake 10–12 minutes until bananas are soft and caramelised.',

      'Serve warm with a scoop of lactose-free ice cream or yogurt.',

    ],

    fodmapNote: 'Use firm, slightly unripe bananas for lower fructan content. Maple syrup is the safe sweetener here — do not substitute honey. Walnuts add a lovely texture and are low FODMAP.'

  },



  {

    id: 'strawberry-nice-cream',

    name: 'Strawberry "Nice Cream"',

    emoji: '🍦',

    category: 'desserts',

    time: '10 min + freeze time',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '2 cups', item: 'frozen strawberries' },

      { qty: '1/2', item: 'firm banana, frozen' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: '1–2 tbsp', item: 'almond milk (only if needed to blend)' },

    ],

    steps: [

      'Freeze strawberries and banana in advance (at least 2 hours, or overnight).',

      'Add frozen fruit to a food processor. Process, scraping down sides as needed.',

      'Add maple syrup and vanilla. Add a tiny splash of almond milk only if needed to help it blend.',

      'Process until completely smooth and creamy — it will look like soft-serve ice cream.',

      'Serve immediately for soft-serve texture, or freeze 1 hour for firmer scoops.',

    ],

    fodmapNote: 'All naturally low FODMAP. No added sugar, no dairy, no artificial anything. A guilt-free dessert that even non-FODMAP followers love. Serve with fresh strawberries on top.'

  },



  {

    id: 'peanut-butter-bites',

    name: 'No-Bake Peanut Butter Bites',

    emoji: '🍫',

    category: 'desserts',

    time: '15 min + 30 min chill',

    serves: 12,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '1 cup (88g)', item: 'rolled oats (GF certified)' },

      { qty: '1/2 cup', item: 'peanut butter (smooth)' },

      { qty: '3 tbsp', item: 'maple syrup' },

      { qty: '1 tbsp', item: 'chia seeds' },

      { qty: '3 tbsp', item: 'dark chocolate chips (70%+ cacao)' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: 'pinch', item: 'sea salt' },

    ],

    steps: [

      'Mix oats, peanut butter, maple syrup, chia seeds, chocolate chips, vanilla, and salt in a bowl.',

      'Stir until everything is well combined and the mixture holds together when pressed.',

      'If too dry, add 1 tsp of maple syrup. If too wet, add a few more oats.',

      'Roll into 12 balls (about 1 tablespoon each).',

      'Place on a plate lined with baking paper and refrigerate for at least 30 minutes to firm up.',

      'Store in the fridge in an airtight container for up to 1 week.',

    ],

    fodmapNote: 'Keep oats to 1/4 cup (22g) per person — 2 bites is a safe serving. These are very filling! Dark chocolate chips (70%+) are low lactose. A perfect snack-meal prep item.'

  },



  {

    id: 'lemon-polenta-cake',

    name: 'Lemon Polenta Cake',

    emoji: '🍋',

    category: 'desserts',

    time: '50 min',

    serves: 8,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '150g', item: 'butter, softened' },

      { qty: '150g', item: 'caster sugar' },

      { qty: '150g', item: 'ground almonds (almond meal)' },

      { qty: '100g', item: 'fine polenta (cornmeal)' },

      { qty: '1.5 tsp', item: 'baking powder (gluten-free)' },

      { qty: '3', item: 'eggs' },

      { qty: '2', item: 'lemons, zest and juice' },

      { qty: '—', item: 'Lemon Drizzle (optional):' },

      { qty: '100g', item: 'icing (powdered) sugar' },

      { qty: '2 tbsp', item: 'lemon juice' },

    ],

    steps: [

      'Preheat oven to 170°C / 325°F. Grease and line a 20cm round cake tin.',

      'Beat butter and sugar together until pale and fluffy.',

      'Beat in eggs one at a time.',

      'Fold in ground almonds, polenta, and baking powder.',

      'Stir in lemon zest and juice.',

      'Pour into prepared tin. Bake 35–40 minutes until golden and a skewer comes out clean.',

      'Cool in tin 10 minutes before turning out.',

      'Mix icing sugar and lemon juice; drizzle over warm cake.',

    ],

    fodmapNote: 'Ground almonds (almond meal) used in baking — about 24g per slice — is within the low-FODMAP limit. Polenta is completely FODMAP-free. This cake is naturally gluten-free and utterly delicious.'

  },



  // ─── BREAKFAST (continued) ─────────────────────────────

  {

    id: 'egg-muffin-cups',

    name: 'Egg & Veggie Muffin Cups',

    emoji: '🧁',

    category: 'breakfast',

    time: '30 min',

    serves: 6,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '8', item: 'eggs' },

      { qty: '1/4 cup', item: 'lactose-free milk' },

      { qty: '1 cup', item: 'baby spinach, roughly chopped' },

      { qty: '1/2', item: 'red bell pepper, finely diced' },

      { qty: '4 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '60g', item: 'cheddar cheese, grated' },

      { qty: 'to taste', item: 'salt, pepper, and dried mixed herbs' },

    ],

    steps: [

      'Preheat oven to 180°C / 350°F. Spray a 12-hole muffin tin generously with cooking spray.',

      'Whisk eggs and milk together with salt, pepper, and herbs.',

      'Divide spinach, bell pepper, and spring onion between the muffin holes.',

      'Pour the egg mixture over the vegetables, filling each hole about 3/4 full.',

      'Top with grated cheddar.',

      'Bake 18–22 minutes until set and lightly golden on top.',

      'Cool 5 minutes before removing. Refrigerate up to 4 days or freeze up to 3 months.',

    ],

    fodmapNote: 'A perfect meal-prep breakfast. Make a batch Sunday and grab two muffins each morning — reheat in the microwave for 30 seconds. All ingredients are low FODMAP.'

  },



  {

    id: 'overnight-oats-strawberry',

    name: 'Strawberry Overnight Oats',

    emoji: '🌙',

    category: 'breakfast',

    time: '5 min + overnight',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'make-ahead'],

    ingredients: [

      { qty: '1/4 cup (22g)', item: 'rolled oats (GF certified)' },

      { qty: '1/2 cup', item: 'lactose-free milk or almond milk' },

      { qty: '1/4 cup', item: 'lactose-free yogurt' },

      { qty: '1 tbsp', item: 'chia seeds' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: '3/4 cup', item: 'fresh strawberries, sliced' },

    ],

    steps: [

      'Add oats, milk, yogurt, chia seeds, maple syrup, and vanilla to a jar or container.',

      'Stir well to combine.',

      'Layer half the strawberries through the oat mixture.',

      'Cover and refrigerate overnight (minimum 4 hours).',

      'In the morning, stir and top with remaining fresh strawberries.',

      'Add a splash more milk if too thick.',

    ],

    fodmapNote: 'Keep oats to 1/4 cup dry (22g) per person for the low-FODMAP serving. Make up to 3 jars at once for the week ahead.'

  },



  {

    id: 'spinach-pineapple-smoothie',

    name: 'Green Pineapple Smoothie',

    emoji: '🥤',

    category: 'breakfast',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1 cup (165g)', item: 'frozen pineapple chunks' },

      { qty: '1 large handful', item: 'baby spinach (about 30g)' },

      { qty: '1/2', item: 'firm banana, frozen' },

      { qty: '1 cup', item: 'almond milk or coconut milk drink (carton)' },

      { qty: '1 tsp', item: 'fresh ginger, finely grated' },

      { qty: 'optional', item: '1 tbsp chia seeds' },

    ],

    steps: [

      'Add all ingredients to a blender.',

      'Blend on high for 60 seconds until completely smooth.',

      'Taste — add a splash more milk if too thick.',

      'Pour into a glass and serve immediately.',

    ],

    fodmapNote: 'Pineapple is generously low FODMAP. Spinach in a smoothie contributes almost no FODMAPs. Ginger aids digestion. A great nutrient-dense start to the day.'

  },



  {

    id: 'corn-tortilla-breakfast-wrap',

    name: 'Bacon & Egg Breakfast Wrap',

    emoji: '🌯',

    category: 'breakfast',

    time: '15 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein'],

    ingredients: [

      { qty: '2', item: 'small corn tortillas' },

      { qty: '3', item: 'rashers bacon' },

      { qty: '2', item: 'eggs, lightly beaten' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '4', item: 'cherry tomatoes, halved' },

      { qty: '1 tbsp', item: 'mayonnaise or lactose-free sour cream' },

      { qty: 'to taste', item: 'salt, pepper, and hot sauce (check ingredients)' },

    ],

    steps: [

      'Cook bacon in a pan until crispy. Remove and drain on paper towel.',

      'In the same pan, cook the beaten eggs with spring onion, stirring gently to scramble.',

      'Warm corn tortillas in a dry pan or microwave for 20 seconds.',

      'Spread a little mayonnaise on each tortilla.',

      'Divide eggs, bacon, and cherry tomatoes between the two tortillas.',

      'Add salt, pepper, and a few drops of hot sauce if desired. Roll and eat.',

    ],

    fodmapNote: 'Corn tortillas are low FODMAP — use these instead of wheat tortillas. Most hot sauces (like Tabasco) are FODMAP-free, but avoid sauces with garlic or onion on the ingredient list.'

  },



  {

    id: 'savory-oat-poached-egg',

    name: 'Savory Oatmeal with Poached Egg',

    emoji: '🍳',

    category: 'breakfast',

    time: '15 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'high-protein'],

    ingredients: [

      { qty: '1/4 cup (22g)', item: 'rolled oats (GF certified)' },

      { qty: '1 cup', item: 'low-FODMAP chicken or vegetable stock' },

      { qty: '1', item: 'egg (poached or fried)' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1/2 cup', item: 'baby spinach' },

      { qty: '1 tsp', item: 'garlic-infused olive oil' },

      { qty: 'pinch', item: 'chili flakes (optional)' },

      { qty: 'to taste', item: 'salt, pepper, and soy sauce' },

    ],

    steps: [

      'Bring stock to a boil in a small saucepan. Add oats and stir.',

      'Cook on medium heat 3–5 minutes, stirring often, until porridge consistency.',

      'Stir in spinach until wilted. Season with soy sauce and pepper.',

      'Meanwhile, poach or fry the egg to your liking.',

      'Spoon oats into a bowl. Top with the egg, spring onion, and a drizzle of garlic-infused oil.',

      'Add chili flakes for a little heat.',

    ],

    fodmapNote: 'A savory oatmeal that is wonderfully filling and completely FODMAP-safe. Using stock instead of milk creates a rich, ramen-like base. Soy sauce adds umami depth.'

  },



  // ─── LUNCH (continued) ──────────────────────────────────

  {

    id: 'egg-salad-gf',

    name: 'Egg Salad on GF Bread',

    emoji: '🥚',

    category: 'lunch',

    time: '15 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '4', item: 'eggs, hard-boiled' },

      { qty: '3 tbsp', item: 'mayonnaise' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '3 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1/4 stalk', item: 'celery (10g), finely diced' },

      { qty: '1 tsp', item: 'fresh lemon juice' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '4 slices', item: 'gluten-free bread, toasted' },

      { qty: '4 leaves', item: 'butter lettuce' },

    ],

    steps: [

      'Peel and roughly chop the hard-boiled eggs.',

      'Combine eggs, mayonnaise, mustard, spring onion, celery, and lemon juice.',

      'Season generously with salt and pepper and mix gently.',

      'Toast the GF bread. Lay lettuce leaves on 2 slices.',

      'Pile on the egg salad and press the top slices on.',

      'Slice diagonally and serve.',

    ],

    fodmapNote: 'All ingredients are low FODMAP. Keep celery to 1/4 stalk per serving to avoid mannitol accumulation. This egg salad also works great on rice cakes or lettuce wraps.'

  },



  {

    id: 'fodmap-caesar-salad',

    name: 'Caesar-Style Chicken Salad',

    emoji: '🥗',

    category: 'lunch',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein'],

    ingredients: [

      { qty: '300g', item: 'cooked chicken breast, sliced or shredded' },

      { qty: '1 large head', item: 'romaine lettuce, chopped' },

      { qty: '40g', item: 'parmesan, shaved' },

      { qty: '—', item: 'FODMAP Caesar Dressing:' },

      { qty: '3 tbsp', item: 'mayonnaise' },

      { qty: '1 tbsp', item: 'fresh lemon juice' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '2 tsp', item: 'soy sauce or tamari' },

      { qty: '1 tbsp', item: 'parmesan, finely grated' },

      { qty: '1 tsp', item: 'black pepper' },

      { qty: 'optional', item: 'GF croutons (GF bread, cubed and pan-fried in garlic-infused oil)' },

    ],

    steps: [

      'Whisk all dressing ingredients together until smooth. Thin with 1–2 tsp water if needed.',

      'If making croutons: cube GF bread and fry in garlic-infused oil until golden and crispy.',

      'Toss chopped romaine with dressing.',

      'Top with sliced chicken, shaved parmesan, and croutons if using.',

      'Serve immediately.',

    ],

    fodmapNote: 'Traditional Caesar dressing has anchovies — feel free to add 1 tsp anchovy paste (no FODMAPs). The soy sauce replaces the umami depth without being fishier than intended.'

  },



  {

    id: 'zucchini-noodle-bowl',

    name: 'Zucchini Noodle Bowl with Pesto',

    emoji: '🌿',

    category: 'lunch',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'dairy-free', 'low-carb'],

    ingredients: [

      { qty: '2 large', item: 'zucchini (about 130g each), spiralized' },

      { qty: '12', item: 'cherry tomatoes, halved' },

      { qty: '30g', item: 'parmesan, shaved' },

      { qty: '—', item: 'FODMAP Pesto:' },

      { qty: '1 cup packed', item: 'fresh basil leaves' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'pine nuts' },

      { qty: '2 tbsp', item: 'parmesan, grated' },

      { qty: '1 tbsp', item: 'fresh lemon juice' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Make pesto: blend basil, garlic-infused oil, pine nuts, parmesan, lemon juice, salt, and pepper until smooth.',

      'Spiralize zucchini into noodles.',

      'Toss zucchini noodles with pesto until well coated.',

      'Divide between bowls. Top with cherry tomatoes and shaved parmesan.',

      'Serve immediately at room temperature.',

    ],

    fodmapNote: 'Pine nuts are low FODMAP at 1 tbsp per serve. Zucchini is low FODMAP at up to 65g per person — one large zucchini is approximately right. Always make your own pesto with garlic-infused oil instead of actual garlic.'

  },



  {

    id: 'teriyaki-salmon-bowl',

    name: 'Teriyaki Salmon Rice Bowl',

    emoji: '🍱',

    category: 'lunch',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '2', item: 'salmon fillets (180g each)' },

      { qty: '2 cups', item: 'cooked white rice' },

      { qty: '1', item: 'cucumber, sliced' },

      { qty: '1 cup', item: 'shredded carrots' },

      { qty: '1 tbsp', item: 'sesame seeds' },

      { qty: '3 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '—', item: 'Teriyaki Sauce:' },

      { qty: '3 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '2 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tsp', item: 'cornstarch mixed with 2 tsp water' },

    ],

    steps: [

      'Mix teriyaki sauce ingredients (except cornstarch) in a small saucepan. Bring to a gentle simmer.',

      'Stir in cornstarch mixture and cook 1 minute until slightly thickened. Remove from heat.',

      'Brush salmon fillets with half the sauce. Heat a non-stick pan over medium-high heat.',

      'Cook salmon skin-side up for 4 minutes, flip, and cook another 3–4 minutes.',

      'Assemble bowls: rice, cucumber, shredded carrots, and salmon. Drizzle remaining teriyaki sauce on top.',

      'Scatter spring onion greens and sesame seeds over each bowl.',

    ],

    fodmapNote: 'Maple syrup is the low-FODMAP sweetener here — do not substitute honey (high fructose). Carrots and cucumber are both safe unlimited vegetables on the elimination diet.'

  },



  // ─── DINNER (continued) ─────────────────────────────────

  {

    id: 'shrimp-pad-thai',

    name: 'Shrimp Pad Thai',

    emoji: '🍜',

    category: 'dinner',

    time: '30 min',

    serves: 2,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '200g', item: 'dried flat rice noodles' },

      { qty: '250g', item: 'raw shrimp/prawns, peeled and deveined' },

      { qty: '2', item: 'eggs, lightly beaten' },

      { qty: '1.5 cups', item: 'bean sprouts' },

      { qty: '2', item: 'medium carrots, skin on, julienned' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '3 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '3 tbsp', item: 'roasted peanuts, roughly chopped' },

      { qty: '1', item: 'lime, quartered' },

      { qty: '—', item: 'Pad Thai Sauce:' },

      { qty: '3 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tbsp', item: 'rice wine vinegar' },

      { qty: '1 tbsp', item: 'fish sauce' },

      { qty: '1 tbsp', item: 'smooth peanut butter' },

    ],

    steps: [

      'Soak rice noodles in warm water for 20 minutes. Drain and set aside.',

      'Whisk all sauce ingredients together in a small bowl.',

      'Heat garlic-infused oil in a large wok over very high heat.',

      'Cook shrimp 2 minutes until pink. Push to the side.',

      'Add eggs to the pan and scramble until just set.',

      'Add noodles, carrots, and sauce. Toss vigorously over high heat for 2–3 minutes.',

      'Stir in bean sprouts and spring onion greens.',

      'Serve topped with peanuts and a lime wedge.',

    ],

    fodmapNote: 'Bean sprouts are low FODMAP. Maple syrup replaces traditional palm sugar. Always use tamari for a strictly gluten-free version. An extra skin-on carrot, more bean sprouts, and extra peanuts add fibre.'

  },



  {

    id: 'stuffed-bell-peppers',

    name: 'Rice & Beef Stuffed Bell Peppers',

    emoji: '🫑',

    category: 'dinner',

    time: '55 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free option', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4 large', item: 'red or yellow bell peppers' },

      { qty: '400g', item: 'ground (minced) beef' },

      { qty: '1.5 cups', item: 'cooked brown rice (or white rice for a quicker option)' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '1 × 400g tin', item: 'crushed tomatoes' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '4 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '60g', item: 'cheddar, grated (optional topping)' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F.',

      'Slice tops off peppers and remove seeds and membranes.',

      'Heat garlic-infused oil in a pan. Cook beef until browned, about 5 minutes. Drain excess fat.',

      'Stir in cumin, paprika, spring onion, and half the crushed tomatoes. Season well. Cook 5 minutes.',

      'Remove from heat and stir in cooked brown rice and ground flaxseed.',

      'Pour remaining tomatoes into the bottom of a baking dish.',

      'Fill each pepper with the beef-rice mixture and stand them in the dish.',

      'Top each with grated cheddar if using.',

      'Cover with foil and bake 30 minutes. Uncover and bake 10 more minutes until peppers are tender.',

    ],

    fodmapNote: 'Red and yellow peppers are low FODMAP — avoid green for this recipe as they have more fructans. Great for meal prep — refrigerate up to 3 days. Brown rice and ground flaxseed in the filling add fibre.'

  },



  {

    id: 'turkey-bolognese',

    name: 'Turkey Bolognese with GF Pasta',

    emoji: '🦃',

    category: 'dinner',

    time: '40 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '500g', item: 'ground (minced) turkey' },

      { qty: '400g', item: 'brown-rice gluten-free pasta' },

      { qty: '2 × 400g tins', item: 'crushed tomatoes' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '3', item: 'medium carrots, grated' },

      { qty: '1/4 stalk', item: 'celery (10g), finely diced' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '1 tsp', item: 'dried basil' },

      { qty: '1/2 tsp', item: 'sugar' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: 'to serve', item: 'parmesan, grated, and fresh basil' },

    ],

    steps: [

      'Heat garlic-infused oil in a large pot over medium-high heat.',

      'Add grated carrots and celery; cook 5 minutes, stirring.',

      'Add turkey and cook, breaking up, until browned — about 7 minutes.',

      'Add crushed tomatoes, oregano, basil, sugar, salt, and pepper.',

      'Simmer on low heat 20 minutes, stirring occasionally.',

      'Stir in the baby spinach and let it wilt into the sauce, about 1 minute.',

      'Cook brown-rice GF pasta per packet directions. Toss with the sauce.',

      'Serve with grated parmesan and fresh basil.',

    ],

    fodmapNote: 'Turkey is lighter than beef and completely FODMAP-free. Keep celery small (1/4 stalk per serve). Carrot adds natural sweetness without any FODMAPs. Grated carrots, an extra carrot, wilted spinach, and brown-rice pasta add fibre.'

  },



  {

    id: 'one-pan-chicken-rice',

    name: 'One-Pan Lemon Chicken & Rice',

    emoji: '🍋',

    category: 'dinner',

    time: '50 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4', item: 'chicken thighs, bone-in skin-on' },

      { qty: '1.5 cups', item: 'long-grain brown rice, rinsed (white rice also works — see note)' },

      { qty: '3 cups', item: 'low-FODMAP chicken stock' },

      { qty: '1', item: 'medium carrot, skin on, grated' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '3 tbsp', item: 'spring onion green tops, to serve' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Mix garlic-infused oil, lemon zest, half the lemon juice, thyme, paprika, salt, and pepper.',

      'Rub this mixture all over the chicken thighs.',

      'Sear chicken skin-side down in an oven-safe pan over high heat, 4 minutes until golden. Remove and set aside.',

      'Add brown rice and grated carrot to the pan and stir to coat in the drippings.',

      'Pour in stock and remaining lemon juice. Bring to a boil.',

      'Place chicken on top, skin-side up. Transfer to oven.',

      'Bake 50–55 minutes until chicken is golden and the brown rice has absorbed all liquid and is tender.',

      'Rest 5 minutes. Garnish with spring onion greens and serve from the pan.',

    ],

    fodmapNote: 'One pan = less washing, more flavour from the drippings going into the rice. An effortless dinner that looks impressive. All ingredients are low FODMAP. Brown rice (with a little extra stock and a longer cook) and a grated skin-on carrot add fibre. For a quicker, easier meal use white rice instead: reduce the stock to 2.25 cups and bake about 25 minutes.'

  },



  {

    id: 'gf-mac-cheese',

    name: 'GF Mac & Cheese',

    emoji: '🧀',

    category: 'dinner',

    time: '30 min',

    serves: 3,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free', 'higher-fibre'],

    ingredients: [

      { qty: '250g', item: 'brown-rice gluten-free macaroni or pasta' },

      { qty: '2 tbsp', item: 'butter' },

      { qty: '2 tbsp', item: 'rice flour or GF plain flour' },

      { qty: '1.5 cups', item: 'lactose-free milk' },

      { qty: '1/2 cup', item: 'zucchini, skin on, finely grated' },

      { qty: '150g', item: 'sharp cheddar, grated' },

      { qty: '30g', item: 'parmesan, grated' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '1/2 tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Cook GF pasta until just al dente. Drain, reserving 1/4 cup pasta water.',

      'Melt butter in a saucepan over medium heat. Whisk in flour and cook 1 minute.',

      'Gradually pour in lactose-free milk, whisking constantly to avoid lumps. Add the grated zucchini and cook until thickened, about 5 minutes.',

      'Remove from heat. Stir in cheddar, parmesan, mustard, and paprika. Season generously.',

      'Add pasta and toss to coat. Loosen with pasta water as needed.',

      'Optional: pour into a baking dish, top with GF breadcrumbs, and grill/broil for 5 minutes until golden.',

    ],

    fodmapNote: 'Cheddar is low in lactose. Using lactose-free milk and GF flour makes this entirely low FODMAP. Comfort food — done right. Brown-rice macaroni and finely grated zucchini hidden in the sauce add fibre.'

  },



  {

    id: 'pork-tenderloin-roasted-veg',

    name: 'Pork Tenderloin with Roasted Carrots',

    emoji: '🥩',

    category: 'dinner',

    time: '40 min',

    serves: 3,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '500g', item: 'pork tenderloin' },

      { qty: '5', item: 'medium carrots, skin on, cut into sticks' },

      { qty: '3', item: 'medium potatoes, skin on, cubed' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'Dijon mustard' },

      { qty: '1 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tbsp', item: 'fresh rosemary, chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: 'to serve', item: 'spring onion green tops, sliced' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Leave the skins on the carrots and potatoes, then toss in 1 tbsp garlic-infused oil, salt, and pepper. Spread on a baking tray.',

      'Roast vegetables for 15 minutes.',

      'Mix remaining oil, mustard, maple syrup, rosemary, salt, and pepper. Rub all over pork.',

      'Place pork on the tray alongside the vegetables.',

      'Roast 20–25 minutes until pork reaches 63°C / 145°F internal temperature.',

      'Rest pork 5 minutes before slicing. Serve with roasted vegetables and spring onion greens.',

    ],

    fodmapNote: 'Pork is completely FODMAP-free. The maple-mustard glaze is one of the best low-FODMAP flavor combinations. Make sure your Dijon has no added garlic or onion powder. Skin-on potatoes and carrots plus an extra carrot add fibre.'

  },



  {

    id: 'turkey-burgers',

    name: 'Herbed Turkey Burgers',

    emoji: '🍔',

    category: 'dinner',

    time: '25 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '500g', item: 'ground (minced) turkey' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '1/4 cup', item: 'zucchini or carrot, skin on, grated' },

      { qty: '3 tbsp', item: 'spring onion green tops, finely chopped' },

      { qty: '2 tbsp', item: 'fresh parsley, chopped' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '4', item: 'GF burger buns or GF bread slices' },

      { qty: 'Toppings:', item: 'lettuce, tomato, mayonnaise, mustard' },

    ],

    steps: [

      'Combine turkey, ground flaxseed, grated zucchini or carrot, spring onion, parsley, mustard, paprika, oregano, salt, and pepper. Mix gently.',

      'Shape into 4 equal patties, about 2cm thick.',

      'Heat a lightly oiled pan or grill over medium-high heat.',

      'Cook patties 5–6 minutes per side until cooked through (internal temp 74°C / 165°F).',

      'Rest 2 minutes. Serve in GF buns with your favourite toppings.',

    ],

    fodmapNote: 'Most burger buns contain wheat — choose a GF option or serve in lettuce leaves for a low-carb version. All seasonings used here are FODMAP-free. Add a slice of cheddar for extra richness. Ground flaxseed and grated skin-on zucchini or carrot in the patties add fibre.'

  },



  {

    id: 'prawn-coconut-curry',

    name: 'Prawn & Bok Choy Curry',

    emoji: '🍤',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '300g', item: 'raw prawns/shrimp, peeled' },

      { qty: '2 heads', item: 'bok choy, quartered' },

      { qty: '1', item: 'medium carrot, julienned' },

      { qty: '1/4 cup (60ml)', item: 'canned coconut milk' },

      { qty: '1 cup', item: 'low-FODMAP stock' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tbsp', item: 'soy sauce or tamari' },

      { qty: '1 tsp', item: 'curry powder' },

      { qty: '1 tsp', item: 'turmeric' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '2 cups', item: 'cooked brown rice or rice noodles (or white rice for a quicker option), to serve' },

      { qty: '3 tbsp', item: 'spring onion green tops, to garnish' },

    ],

    steps: [

      'Heat garlic-infused oil in a wok or large pan over high heat.',

      'Add ginger, curry powder, and turmeric; stir 30 seconds until fragrant.',

      'Add carrot and cook 2 minutes.',

      'Add prawns and cook 2–3 minutes until pink.',

      'Add bok choy, stock, coconut milk, and soy sauce. Toss and cook 2 more minutes.',

      'Stir in the baby spinach and let it wilt into the curry, about 1 minute.',

      'Serve over brown rice or rice noodles. Garnish with spring onion greens.',

    ],

    fodmapNote: 'Keep canned coconut milk to 1/4 cup for the entire recipe (about 2 tbsp per person). Prawns are completely FODMAP-free. Ready in under 30 minutes. Wilted spinach and brown rice add fibre.'

  },



  {

    id: 'sheet-pan-sausage-veg',

    name: 'Sheet-Pan Sausage & Vegetables',

    emoji: '🌭',

    category: 'dinner',

    time: '40 min',

    serves: 3,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'higher-fibre'],

    ingredients: [

      { qty: '6', item: 'GF pork sausages (check: no onion/garlic in ingredients)' },

      { qty: '3', item: 'medium carrots, skin on, cut into chunks' },

      { qty: '3', item: 'zucchini, skin on, cut into thick rounds' },

      { qty: '1', item: 'red bell pepper, cut into strips' },

      { qty: '300g', item: 'baby potatoes, skin on, halved' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: 'to serve', item: 'Dijon mustard' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Leave the skins on the baby potatoes, carrots, and zucchini, then toss all vegetables in garlic-infused oil, paprika, thyme, salt, and pepper.',

      'Spread on a large baking tray in a single layer.',

      'Nestle sausages between the vegetables.',

      'Roast 30–35 minutes, turning once halfway, until sausages are browned and vegetables are tender.',

      'Serve with Dijon mustard on the side.',

    ],

    fodmapNote: '⚠️ Sausages are a FODMAP minefield — most commercial brands contain garlic and onion powder. Look for plain pork sausages from a butcher, or a certified low-FODMAP brand. Read every label. Skin-on potatoes, carrots and zucchini plus an extra zucchini add fibre.'

  },



  {

    id: 'maple-dijon-salmon',

    name: 'Brown Sugar Dijon Salmon',

    emoji: '🐟',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'salmon fillets (180g each)' },

      { qty: '2 tbsp', item: 'brown sugar (or rice malt syrup / maple syrup)' },

      { qty: '1 tbsp', item: 'Dijon mustard' },

      { qty: '1 tbsp', item: 'soy sauce (or tamari)' },

      { qty: '1 tsp', item: 'garlic-infused olive oil' },

      { qty: '2 cups', item: 'green beans (1 cup per serve), steamed' },

      { qty: 'to serve', item: 'steamed brown rice (or white rice for a quicker option)' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F. Line a baking tray with baking paper.',

      'Mix brown sugar, Dijon, soy sauce, and garlic-infused oil.',

      'Place salmon on the tray. Spoon the glaze over the top.',

      'Bake 12–15 minutes until salmon is just cooked through and glaze is caramelised.',

      'Meanwhile, steam the green beans until just tender.',

      'Serve with steamed brown rice and the green beans.',

    ],

    fodmapNote: 'One of the easiest, most impressive dinners you can make. The 4-ingredient glaze is entirely FODMAP-safe. Works equally well with chicken breast (cook 20–25 min). Steamed green beans and brown rice add fibre.'

  },



  // ─── SNACKS (continued) ──────────────────────────────────

  {

    id: 'caprese-skewers',

    name: 'Caprese Skewers',

    emoji: '🍡',

    category: 'snacks',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '16', item: 'cherry tomatoes' },

      { qty: '80g', item: 'bocconcini (fresh mini mozzarella balls)' },

      { qty: '12', item: 'fresh basil leaves' },

      { qty: '1 tbsp', item: 'olive oil' },

      { qty: '1 tsp', item: 'balsamic glaze or reduction' },

      { qty: 'to taste', item: 'sea salt and cracked black pepper' },

    ],

    steps: [

      'Thread cherry tomatoes, bocconcini, and basil leaves alternately onto small skewers or toothpicks.',

      'Arrange on a serving plate.',

      'Drizzle with olive oil and balsamic glaze.',

      'Season with sea salt and cracked black pepper.',

      'Serve immediately or refrigerate up to 2 hours.',

    ],

    fodmapNote: 'Keep bocconcini to about 40g per serve — fresh mozzarella is moderate in lactose at larger servings. Cherry tomatoes are low FODMAP at 3–5 per serve. A beautiful low-effort snack or appetizer.'

  },



  {

    id: 'protein-snack-box',

    name: 'Protein Snack Box',

    emoji: '🥚',

    category: 'snacks',

    time: '15 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '2', item: 'hard-boiled eggs, peeled' },

      { qty: '2', item: 'plain rice cakes' },

      { qty: '40g', item: 'cheddar cheese, cubed' },

      { qty: '8', item: 'cherry tomatoes' },

      { qty: '1/2', item: 'cucumber, sliced' },

      { qty: '1 tbsp', item: 'peanut butter, for dipping' },

      { qty: 'to taste', item: 'sea salt and black pepper' },

    ],

    steps: [

      'Boil eggs 10 minutes for hard-boiled. Cool under cold water and peel.',

      'Arrange everything in a meal-prep container or on a serving board.',

      'Season eggs with a pinch of salt and pepper.',

      'Serve peanut butter alongside for dipping rice cakes.',

    ],

    fodmapNote: 'An assembly "recipe" that requires no cooking beyond the eggs. Cheddar is naturally low in lactose. Peanut butter is the safest dip choice. A complete, balanced snack with protein, carbs, and healthy fat.'

  },



  {

    id: 'seasoned-popcorn',

    name: 'Smoky Seasoned Popcorn',

    emoji: '🍿',

    category: 'snacks',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1/3 cup', item: 'popcorn kernels' },

      { qty: '1 tbsp', item: 'olive oil or coconut oil' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1/2 tsp', item: 'cumin' },

      { qty: '1 tsp', item: 'nutritional yeast (adds cheesy flavor)' },

      { qty: '1/2 tsp', item: 'sea salt' },

      { qty: 'optional', item: '1/4 tsp chili flakes' },

    ],

    steps: [

      'Heat oil in a large pot with a lid over medium-high heat.',

      'Add a few test kernels — when they pop, add the rest.',

      'Cover and shake every 30 seconds until popping slows to 2–3 seconds between pops.',

      'Transfer to a large bowl.',

      'Sprinkle over paprika, cumin, nutritional yeast, salt, and chili if using. Toss well.',

    ],

    fodmapNote: 'Plain popcorn is one of the most FODMAP-friendly snacks. Nutritional yeast gives a cheesy flavor without dairy. Avoid pre-made flavored popcorns — many contain garlic or onion powder.'

  },



  {

    id: 'cucumber-smoked-salmon',

    name: 'Cucumber Rounds with Smoked Salmon',

    emoji: '🥒',

    category: 'snacks',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'low-carb'],

    ingredients: [

      { qty: '1 large', item: 'cucumber' },

      { qty: '100g', item: 'smoked salmon slices' },

      { qty: '3 tbsp', item: 'cream cheese (total for both serves)' },

      { qty: '2 tbsp', item: 'spring onion green tops, finely sliced' },

      { qty: '1/2', item: 'lemon, for squeezing' },

      { qty: 'to taste', item: 'cracked black pepper and fresh dill' },

    ],

    steps: [

      'Slice cucumber into 1cm thick rounds.',

      'Spread a small amount of cream cheese on each round.',

      'Top with a piece of smoked salmon.',

      'Add spring onion greens, a squeeze of lemon, and cracked pepper.',

      'Scatter fresh dill on top if using. Serve immediately.',

    ],

    fodmapNote: 'Smoked salmon is FODMAP-free. Keep cream cheese to 1–2 tsp per round (about 15g total per person) — it is moderate in lactose at larger servings. A sophisticated snack or party appetizer.'

  },



  {

    id: 'banana-almond-butter-bites',

    name: 'Banana Almond Butter Bites',

    emoji: '🍌',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1/2', item: 'firm banana' },

      { qty: '1.5 tbsp', item: 'almond butter (no added sugar)' },

      { qty: '1 tbsp', item: 'dark chocolate chips (70%+ cacao)' },

      { qty: 'pinch', item: 'cinnamon' },

    ],

    steps: [

      'Slice the banana into rounds.',

      'Spoon a little almond butter onto each round.',

      'Top with 1–2 dark chocolate chips and a pinch of cinnamon.',

      'Serve immediately.',

    ],

    fodmapNote: 'Almond butter is similar to almonds — safe in small quantities (1.5 tbsp). Use a firm banana for lowest fructan content. A perfect 2-minute snack.'

  },



  // ─── DESSERTS (continued) ────────────────────────────────

  {

    id: 'passionfruit-chia-pots',

    name: 'Passionfruit Chia Pots',

    emoji: '💛',

    category: 'desserts',

    time: '10 min + 4 hrs chill',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '3 tbsp', item: 'chia seeds' },

      { qty: '1 cup', item: 'coconut milk drink (carton)' },

      { qty: '1/2 cup', item: 'almond milk' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: '4', item: 'fresh passion fruits, pulp scooped out' },

      { qty: '1/2 cup', item: 'fresh strawberries, sliced, to serve' },

    ],

    steps: [

      'Mix chia seeds, coconut milk drink, almond milk, maple syrup, and vanilla.',

      'Stir well and let sit 10 minutes, then stir again.',

      'Cover and refrigerate 4 hours or overnight until thick and creamy.',

      'Stir the chia mixture before serving.',

      'Layer in glasses: chia pudding → passionfruit pulp → strawberries. Repeat.',

    ],

    fodmapNote: 'Passion fruit is low FODMAP (2 fruits per person). The layered presentation makes this look restaurant-quality. Makes for 4 days in the fridge.'

  },



  {

    id: 'vanilla-panna-cotta',

    name: 'Vanilla Panna Cotta with Strawberry Sauce',

    emoji: '🍮',

    category: 'desserts',

    time: '20 min + 4 hrs set',

    serves: 4,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free', 'make-ahead'],

    ingredients: [

      { qty: '2 tsp', item: 'powdered gelatine (about 7g)' },

      { qty: '2 tbsp', item: 'cold water' },

      { qty: '500ml (2 cups)', item: 'thickened cream (heavy cream)' },

      { qty: '3 tbsp', item: 'caster sugar' },

      { qty: '1 tsp', item: 'pure vanilla extract' },

      { qty: '—', item: 'Strawberry Sauce:' },

      { qty: '1.5 cups', item: 'fresh strawberries, hulled and halved' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'fresh lemon juice' },

    ],

    steps: [

      'Sprinkle gelatine over cold water in a small bowl. Let sit 5 minutes to bloom.',

      'Heat cream and sugar in a saucepan over medium heat until sugar dissolves and cream just simmers (do not boil).',

      'Remove from heat. Add bloomed gelatine and vanilla, stirring until dissolved.',

      'Pour into 4 lightly greased ramekins or glasses. Refrigerate at least 4 hours until set.',

      'For strawberry sauce: simmer strawberries, maple syrup, and lemon juice 5 minutes. Mash lightly. Cool.',

      'Unmould panna cotta onto plates (or serve in glasses). Spoon strawberry sauce on top.',

    ],

    fodmapNote: 'Cream is very low in lactose (it is mostly fat) and is FODMAP-safe. An elegant dinner-party dessert that can be made 2 days ahead.'

  },



  {

    id: 'gf-chocolate-brownies',

    name: 'GF Dark Chocolate Brownies',

    emoji: '🍫',

    category: 'desserts',

    time: '40 min',

    serves: 12,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '200g', item: 'dark chocolate (70%+ cacao), chopped' },

      { qty: '125g', item: 'butter' },

      { qty: '150g (3/4 cup)', item: 'caster sugar' },

      { qty: '3', item: 'eggs' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '55g (1/2 cup)', item: 'almond meal (ground almonds)' },

      { qty: '2 tbsp', item: 'cocoa powder, sifted' },

      { qty: 'pinch', item: 'salt' },

    ],

    steps: [

      'Preheat oven to 170°C / 325°F. Grease and line a 20cm square tin.',

      'Melt dark chocolate and butter together over a double boiler or in microwave in 30-second bursts. Stir until smooth.',

      'Stir in sugar, then eggs one at a time, beating well after each.',

      'Add vanilla, almond meal, cocoa powder, and salt. Mix until just combined.',

      'Pour into the prepared tin and smooth the top.',

      'Bake 22–25 minutes — the centre should look slightly underdone (it firms as it cools for a fudgy texture).',

      'Cool completely in the tin before slicing into 12 squares.',

    ],

    fodmapNote: 'No wheat flour means no fructans. Almond meal at this quantity is well within FODMAP limits (about 4g per brownie). A rich, fudgy brownie nobody will know is GF. Serve with lactose-free ice cream.'

  },



  // ─── BREAKFAST (additional) ───────────────────────────────────────────────

  {

    id: 'sweet-potato-hash',

    name: 'Sweet Potato Breakfast Hash',

    emoji: '🥔',

    category: 'breakfast',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '1½ cups (225g)', item: 'sweet potato, peeled and diced small' },

      { qty: '1', item: 'red bell pepper, diced' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '4', item: 'large eggs' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '½ tsp', item: 'cumin' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Heat oil in a large oven-safe skillet over medium-high heat.',

      'Add sweet potato and cook, stirring occasionally, for 10–12 minutes until golden and just tender.',

      'Add bell pepper, paprika, and cumin. Cook 3 minutes more.',

      'Stir in spinach until wilted. Season well.',

      'Make 4 wells in the hash and crack an egg into each.',

      'Cover and cook on low heat 4–5 minutes until whites are set but yolks are still runny.',

      'Garnish with spring onion tops and serve straight from the pan.',

    ],

    fodmapNote: 'Keep sweet potato to ¾ cup (112g) per person — larger amounts exceed FODMAP limits. Bell pepper is fully safe at this quantity. Garlic-infused oil provides garlic flavour without the fructans.'

  },



  {

    id: 'gf-granola',

    name: 'Pecan & Cinnamon GF Granola',

    emoji: '🥣',

    category: 'breakfast',

    time: '30 min',

    serves: 8,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '3 cups (264g)', item: 'certified GF rolled oats' },

      { qty: '½ cup (50g)', item: 'pecans, roughly chopped' },

      { qty: '¼ cup (35g)', item: 'pumpkin seeds' },

      { qty: '¼ cup (35g)', item: 'sunflower seeds' },

      { qty: '3 tbsp', item: 'brown sugar (or rice malt syrup / maple syrup)' },

      { qty: '3 tbsp', item: 'coconut oil, melted' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '1 tsp', item: 'cinnamon' },

      { qty: '¼ tsp', item: 'salt' },

    ],

    steps: [

      'Preheat oven to 160°C / 325°F. Line a large baking sheet with parchment.',

      'Mix oats, pecans, pumpkin seeds, and sunflower seeds in a large bowl.',

      'Whisk together brown sugar, coconut oil, vanilla, cinnamon, and salt (warm gently if needed to dissolve the sugar).',

      'Pour wet ingredients over dry and toss until evenly coated.',

      'Spread in a single layer on the baking sheet.',

      'Bake 25–30 minutes, stirring once halfway, until golden. Watch closely near the end.',

      'Cool completely on the pan — it crisps as it cools. Store in an airtight jar up to 2 weeks.',

    ],

    fodmapNote: 'Serving size is ¼ cup (33g) dry — keep to this to stay within oat and nut FODMAP limits. Serve with lactose-free milk or yogurt. No dried fruit — raisins and dates are high FODMAP.'

  },



  {

    id: 'rice-crepes',

    name: 'Rice Flour Crepes with Strawberries',

    emoji: '🥞',

    category: 'breakfast',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegetarian'],

    ingredients: [

      { qty: '½ cup (80g)', item: 'white rice flour' },

      { qty: '2', item: 'large eggs' },

      { qty: '¾ cup (180ml)', item: 'lactose-free milk' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '½ tsp', item: 'vanilla extract' },

      { qty: 'pinch', item: 'salt' },

      { qty: '1 tbsp', item: 'butter, for the pan' },

      { qty: '1 cup (150g)', item: 'fresh strawberries, sliced' },

      { qty: '2 tbsp', item: 'maple syrup, to serve' },

    ],

    steps: [

      'Blend rice flour, eggs, milk, maple syrup, vanilla, and salt until completely smooth. Rest 5 minutes.',

      'Heat a non-stick 20cm pan over medium heat. Add a small knob of butter.',

      'Pour ¼ cup batter and quickly swirl to coat the pan.',

      'Cook 1–2 minutes until edges lift and underside is lightly golden. Flip and cook 30 seconds.',

      'Stack crepes with parchment between each.',

      'Fold crepes in quarters or roll around sliced strawberries.',

      'Drizzle with maple syrup and serve immediately.',

    ],

    fodmapNote: 'Rice flour is completely low FODMAP. Lactose-free milk keeps the crepes safe. Strawberries are low FODMAP at up to 10 berries (150g) per person.'

  },



  {

    id: 'smoked-salmon-platter',

    name: 'Smoked Salmon & Rice Cake Platter',

    emoji: '🐟',

    category: 'breakfast',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'no-cook'],

    ingredients: [

      { qty: '4 oz (113g)', item: 'smoked salmon' },

      { qty: '6', item: 'plain rice cakes' },

      { qty: '4 tbsp', item: 'lactose-free cream cheese' },

      { qty: '¼', item: 'cucumber, thinly sliced' },

      { qty: '1 tbsp', item: 'capers, rinsed' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1', item: 'lemon, cut into wedges' },

      { qty: 'to taste', item: 'black pepper' },

    ],

    steps: [

      'Spread cream cheese over each rice cake.',

      'Layer on cucumber slices, then smoked salmon.',

      'Scatter capers and spring onion tops over the top.',

      'Season with black pepper and serve with lemon wedges.',

    ],

    fodmapNote: 'Cream cheese is moderate lactose — 2 tbsp per person is within safe limits. Capers are low FODMAP. Plain rice cakes have no FODMAPs. A high-protein, no-cook breakfast that comes together in minutes.'

  },



  {

    id: 'breakfast-frittata',

    name: 'Baked Veggie Frittata',

    emoji: '🍳',

    category: 'breakfast',

    time: '30 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegetarian', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '8', item: 'large eggs' },

      { qty: '¼ cup (60ml)', item: 'lactose-free milk' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '1', item: 'red bell pepper, diced' },

      { qty: '½ cup', item: 'zucchini, grated' },

      { qty: '½ cup (56g)', item: 'cheddar cheese, grated' },

      { qty: '2 tbsp', item: 'spring onion green tops' },

      { qty: '2 tsp', item: 'garlic-infused olive oil' },

      { qty: 'to taste', item: 'salt, pepper, and dried oregano' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F.',

      'Sauté bell pepper and zucchini in garlic-infused oil in an oven-safe skillet for 3–4 minutes.',

      'Add spinach and stir until wilted. Remove from heat.',

      'Whisk eggs with milk, salt, pepper, and oregano.',

      'Pour egg mixture over vegetables. Top with cheddar and spring onion tops.',

      'Bake 18–20 minutes until puffed, set in the centre, and golden on top.',

      'Cool 5 minutes before slicing. Keeps refrigerated for 4 days — reheat or eat cold.',

    ],

    fodmapNote: 'Cheddar is low lactose — safe for most with lactose intolerance. Garlic-infused oil gives garlic flavour without fructans. Great make-ahead meal prep breakfast — slice into wedges and reheat through the week.'

  },



  // ─── LUNCH (additional) ───────────────────────────────────────────────────

  {

    id: 'shrimp-spring-rolls',

    name: 'Fresh Shrimp Spring Rolls',

    emoji: '🍤',

    category: 'lunch',

    time: '25 min',

    serves: 2,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free'],

    ingredients: [

      { qty: '8 oz (227g)', item: 'cooked shrimp, peeled and halved lengthwise' },

      { qty: '8', item: 'rice paper wrappers' },

      { qty: '2 oz (57g)', item: 'rice vermicelli noodles, cooked and cooled' },

      { qty: '1 cup', item: 'butter lettuce leaves, torn' },

      { qty: '½', item: 'cucumber, cut into matchsticks' },

      { qty: '1', item: 'carrot, peeled and cut into matchsticks' },

      { qty: '¼ cup', item: 'fresh mint leaves' },

      { qty: '¼ cup', item: 'fresh cilantro' },

      { qty: '—', item: 'Dipping Sauce' },

      { qty: '3 tbsp', item: 'tamari' },

      { qty: '1 tbsp', item: 'rice vinegar' },

      { qty: '1 tsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tsp', item: 'sesame oil' },

    ],

    steps: [

      'Mix all dipping sauce ingredients together and set aside.',

      'Prep all fillings and arrange in separate bowls for assembly.',

      'Fill a wide, shallow bowl with warm water. Submerge one rice paper wrapper for 15–20 seconds until pliable.',

      'Lay flat on a damp surface. Place 3–4 shrimp halves in a row in the lower third.',

      'Top with a small amount of noodles, lettuce, cucumber, carrot, mint, and cilantro.',

      'Fold the bottom up over the filling, fold in the sides, and roll tightly upward.',

      'Repeat with remaining wrappers. Serve immediately with dipping sauce.',

    ],

    fodmapNote: 'Rice paper wrappers are completely low FODMAP. Tamari (GF soy sauce) is safe at this quantity. Fresh ginger and herbs have no FODMAP concerns. These are best assembled just before eating as the wrappers toughen if stored.'

  },



  {

    id: 'roasted-sweet-potato-salad',

    name: 'Roasted Sweet Potato & Quinoa Salad',

    emoji: '🥗',

    category: 'lunch',

    time: '35 min',

    serves: 3,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '1½ cups (225g)', item: 'sweet potato, peeled and cubed' },

      { qty: '1 cup (170g)', item: 'quinoa, rinsed' },

      { qty: '2 cups (480ml)', item: 'water or low-FODMAP stock' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '½', item: 'red bell pepper, diced' },

      { qty: '¼ cup (35g)', item: 'pumpkin seeds' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '2 tbsp', item: 'lemon juice' },

      { qty: '1 tbsp', item: 'olive oil' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss sweet potato with garlic-infused oil and paprika. Roast 20–25 minutes until golden.',

      'Meanwhile, cook quinoa in water/stock per packet directions. Fluff with a fork and cool slightly.',

      'Whisk lemon juice, olive oil, salt, and pepper for the dressing.',

      'Combine quinoa, spinach, bell pepper, and roasted sweet potato in a large bowl.',

      'Drizzle with dressing and toss gently. Top with pumpkin seeds.',

      'Serve warm or at room temperature. Keeps refrigerated for 3 days.',

    ],

    fodmapNote: 'Keep sweet potato to ¾ cup (112g) per person. Quinoa is 100% low FODMAP. Pumpkin seeds are low FODMAP at ¼ cup per serve. A filling, high-protein salad that works well as meal prep.'

  },



  {

    id: 'miso-soup',

    name: 'Miso Soup with Tofu & Nori',

    emoji: '🍜',

    category: 'lunch',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free'],

    ingredients: [

      { qty: '3 cups (720ml)', item: 'water' },

      { qty: '2 tsp', item: 'white or yellow miso paste' },

      { qty: '4 oz (113g)', item: 'firm tofu, cut into small cubes' },

      { qty: '1', item: 'nori sheet, cut into thin strips' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1 tsp', item: 'tamari (optional, for depth)' },

      { qty: '1 tsp', item: 'sesame oil' },

    ],

    steps: [

      'Heat water until just below boiling (do not boil miso — it destroys the probiotics).',

      'Remove from heat and whisk in miso paste until fully dissolved.',

      'Add tofu cubes and nori strips.',

      'Ladle into bowls and top with spring onion tops.',

      'Drizzle with sesame oil and a splash of tamari if using.',

      'Serve immediately — miso soup is best fresh.',

    ],

    fodmapNote: 'Keep miso to 1 tsp per person (2 tsp total here). Firm tofu is low FODMAP at 170g per serve. Nori is low FODMAP. Serve with a bowl of plain white rice for a light, restorative meal.'

  },



  {

    id: 'chicken-veggie-frittata-lunch',

    name: 'Chicken & Roasted Pepper Frittata',

    emoji: '🍳',

    category: 'lunch',

    time: '30 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '6', item: 'large eggs' },

      { qty: '1 cup (140g)', item: 'cooked chicken breast, shredded' },

      { qty: '1', item: 'red bell pepper, roasted and sliced (or from a jar, drained)' },

      { qty: '½ cup (56g)', item: 'cheddar cheese, grated' },

      { qty: '¼ cup (60ml)', item: 'lactose-free milk' },

      { qty: '1 cup', item: 'baby spinach' },

      { qty: '2 tsp', item: 'garlic-infused olive oil' },

      { qty: '½ tsp', item: 'dried oregano' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F.',

      'Whisk eggs with milk, oregano, salt, and pepper.',

      'Heat garlic-infused oil in an oven-safe 22cm skillet. Wilt spinach, then scatter chicken and peppers over the base.',

      'Pour egg mixture over evenly. Top with cheddar.',

      'Cook on the stovetop 2–3 minutes until the edges begin to set.',

      'Transfer to oven and bake 15–18 minutes until puffed and golden.',

      'Rest 5 minutes before slicing. Serve warm or cold — great for lunchboxes.',

    ],

    fodmapNote: 'A great use for leftover chicken. Cheddar is low lactose. Roasted peppers from a jar are low FODMAP as long as they are not marinated with garlic. Check the label.'

  },



  {

    id: 'cold-pasta-salad',

    name: 'Cold GF Pasta Salad',

    emoji: '🍝',

    category: 'lunch',

    time: '20 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegetarian', 'make-ahead'],

    ingredients: [

      { qty: '8 oz (227g)', item: 'GF penne pasta' },

      { qty: '1 cup', item: 'cherry tomatoes, halved' },

      { qty: '½', item: 'cucumber, diced' },

      { qty: '½', item: 'red bell pepper, diced' },

      { qty: '¼ cup (28g)', item: 'cheddar or feta, diced or crumbled' },

      { qty: '¼ cup (28g)', item: 'black olives, sliced' },

      { qty: '2 tbsp', item: 'fresh basil, torn' },

      { qty: '3 tbsp', item: 'olive oil' },

      { qty: '2 tbsp', item: 'red wine vinegar' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Cook pasta al dente per package directions. Rinse under cold water and drain well.',

      'Whisk olive oil, vinegar, oregano, mustard, salt, and pepper for the dressing.',

      'Combine pasta, tomatoes, cucumber, bell pepper, olives, and cheese in a large bowl.',

      'Toss with the dressing. Taste and adjust seasoning.',

      'Stir in fresh basil just before serving.',

      'Refrigerate at least 30 minutes for best flavour. Keeps up to 3 days.',

    ],

    fodmapNote: 'GF pasta is fully low FODMAP. Feta at this quantity is within lactose limits. Plain olives are low FODMAP — avoid garlic-marinated varieties. Cherry tomatoes are safe at this serving. A great make-ahead lunch.'

  },



  // ─── DINNER (additional) ──────────────────────────────────────────────────

  {

    id: 'maple-glazed-salmon',

    name: 'Ginger Glazed Salmon',

    emoji: '🐟',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'salmon fillets (about 6 oz / 170g each)' },

      { qty: '2 tbsp', item: 'brown sugar (or rice malt syrup / maple syrup)' },

      { qty: '1 tbsp', item: 'tamari' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'rice vinegar' },

      { qty: '1 cup (180g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '1.5 cups', item: 'bok choy or broccolini, steamed, to serve (¾ cup per serve)' },

      { qty: '1 tbsp', item: 'sesame seeds, to garnish' },

    ],

    steps: [

      'Mix brown sugar, tamari, ginger, sesame oil, and rice vinegar in a small bowl.',

      'Pat salmon dry and season with pepper.',

      'Heat an oven-safe skillet over medium-high heat. Sear salmon skin-side up for 2 minutes until golden.',

      'Flip salmon and brush generously with glaze.',

      'Transfer pan to oven (or continue on stovetop, covered) at 200°C / 400°F for 8–10 minutes until cooked through.',

      'Brush with remaining glaze and sprinkle with sesame seeds.',

      'Serve over brown rice with steamed greens. Drizzle any pan glaze over the top.',

    ],

    fodmapNote: 'Tamari (GF) is low FODMAP at this amount. Brown sugar (or rice malt syrup / maple syrup) is low FODMAP. Ginger is low FODMAP. Bok choy and broccolini are both low FODMAP at ¾ cup per person. A complete, balanced FODMAP-friendly dinner. Brown rice and a bigger serve of steamed greens add fibre.'

  },



  {

    id: 'turkey-burger',

    name: 'FODMAP-Friendly Turkey Burger',

    emoji: '🍔',

    category: 'dinner',

    time: '25 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '1 lb (454g)', item: 'ground turkey' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '¼ cup', item: 'zucchini or carrot, skin on, grated' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'spring onion green tops, finely chopped' },

      { qty: '1 tbsp', item: 'fresh parsley, chopped' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '½ tsp', item: 'cumin' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '4', item: 'GF burger buns or large lettuce leaves' },

      { qty: '—', item: 'Toppings' },

      { qty: '1', item: 'tomato, sliced' },

      { qty: '4 leaves', item: 'butter lettuce' },

      { qty: '2 tbsp', item: 'plain mayonnaise (no garlic/onion)' },

      { qty: '½', item: 'cucumber, thinly sliced' },

    ],

    steps: [

      'Mix turkey with ground flaxseed, grated zucchini or carrot, garlic-infused oil, spring onion tops, parsley, paprika, cumin, salt, and pepper.',

      'Divide into 4 equal patties. Press a small indent in the centre of each (prevents puffing).',

      'Heat a skillet or grill over medium-high heat. Cook patties 5–6 minutes per side until cooked through (internal temp 74°C / 165°F).',

      'Toast GF buns lightly if desired.',

      'Assemble: bun base, lettuce, patty, tomato, cucumber, mayo, and bun top.',

      'Serve immediately with oven fries or a simple green salad.',

    ],

    fodmapNote: 'Ground turkey is plain protein — no FODMAPs. Garlic-infused oil is the safe garlic swap. Plain mayo (Hellmann\'s, Kewpie) is low FODMAP — avoid aioli or garlic mayo. GF buns can have variable ingredients — check for onion or honey. Ground flaxseed and grated skin-on zucchini or carrot in the patties add fibre.'

  },



  {

    id: 'chicken-soup',

    name: 'Classic Chicken & Rice Soup',

    emoji: '🍲',

    category: 'dinner',

    time: '40 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'make-ahead', 'higher-fibre'],

    ingredients: [

      { qty: '1 lb (454g)', item: 'chicken breast or thighs, bone-in or boneless' },

      { qty: '1 cup (180g)', item: 'brown rice, uncooked (or white rice for a quicker option)' },

      { qty: '3', item: 'medium carrots, skin on, sliced' },

      { qty: '2 stalks', item: 'celery, thinly sliced (½ stalk per serve)' },

      { qty: '1', item: 'zucchini, skin on, diced' },

      { qty: '6 cups (1.4L)', item: 'low-FODMAP chicken stock (homemade or certified GF/no onion)' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '2', item: 'bay leaves' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '¼ cup', item: 'fresh parsley, chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Heat oil in a large pot over medium heat. Add carrots and celery; cook 3 minutes.',

      'Add chicken, stock, thyme, and bay leaves. Bring to a boil.',

      'Reduce heat, cover, and simmer 20 minutes until chicken is cooked through.',

      'Remove chicken, shred with two forks, and return to pot.',

      'Add brown rice and zucchini. Simmer 35–40 minutes until the brown rice is cooked and tender.',

      'Remove bay leaves. Stir in fresh parsley. Season well.',

      'Serve hot. Keeps refrigerated 4 days — rice thickens as it sits, add a splash of stock when reheating.',

    ],

    fodmapNote: 'Keep celery to ½ stalk per person (10g) — more accumulates mannitol quickly. Most commercial stock contains onion and garlic — make your own or find a certified low-FODMAP brand. Carrots are fully safe at this quantity. Brown rice (with a longer simmer), skin-on carrot and zucchini, and an extra carrot add fibre. For a quicker meal use white rice and simmer just 12–15 minutes (Step 5) until tender.'

  },



  {

    id: 'shrimp-scampi',

    name: 'Shrimp Scampi with GF Pasta',

    emoji: '🍝',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '8 oz (227g)', item: 'brown-rice GF spaghetti or linguine' },

      { qty: '12 oz (340g)', item: 'large shrimp, peeled and deveined' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '½ cup (120ml)', item: 'dry white wine or extra stock' },

      { qty: '2 tbsp', item: 'butter' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '¼ tsp', item: 'red pepper flakes' },

      { qty: '¼ cup', item: 'fresh parsley, chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Cook pasta al dente per package directions. Reserve ½ cup pasta water before draining.',

      'Heat garlic-infused oil in a large skillet over medium-high heat.',

      'Add shrimp in a single layer; cook 1–2 minutes per side until pink. Remove and set aside.',

      'Add wine to the pan and cook 2 minutes, scraping up any bits.',

      'Add butter, lemon juice, zest, and red pepper flakes. Stir until butter melts.',

      'Add the baby spinach and let it wilt into the pan, about 1 minute.',

      'Add pasta and toss, adding pasta water a splash at a time until the sauce coats the noodles.',

      'Return shrimp to the pan, toss together, and finish with fresh parsley.',

    ],

    fodmapNote: 'Garlic-infused oil is the safe garlic swap — the fructans stay behind in the garlic clove and do not transfer to the oil. Wine is low FODMAP at ½ cup total for the recipe. GF pasta is fully safe. No onion or garlic — FODMAP-friendly scampi at its best. Brown-rice pasta and wilted spinach add fibre.'

  },



  {

    id: 'baked-cod',

    name: 'Baked Cod with Lemon Caper Sauce',

    emoji: '🐟',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'cod fillets (about 6 oz / 170g each)' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'capers, rinsed and roughly chopped' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '2 tbsp', item: 'fresh parsley, chopped' },

      { qty: '1 tbsp', item: 'butter' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '—', item: 'To serve' },

      { qty: '2 cups (310g)', item: 'steamed or roasted potatoes, skin on' },

      { qty: '2 cups', item: 'green beans, steamed (1 cup per serve)' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Pat cod dry and place in a baking dish. Drizzle with garlic-infused oil and season with paprika, salt, and pepper.',

      'Bake 12–15 minutes until the fish flakes easily and is opaque throughout.',

      'While fish bakes, melt butter in a small saucepan over low heat.',

      'Add capers, lemon juice, lemon zest, and parsley. Warm through for 1–2 minutes.',

      'Spoon lemon caper sauce over the fish and serve immediately with skin-on potatoes and green beans.',

    ],

    fodmapNote: 'Capers are low FODMAP per Monash — a great way to add big flavour. Plain potatoes are fully safe. Green beans are low FODMAP at 1 cup per person; broccolini at ½ cup. White fish like cod, tilapia, and halibut are all zero-FODMAP proteins. Skin-on potatoes and a full serve of green beans add fibre.'

  },



  {

    id: 'pork-carnitas-bowl',

    name: 'Pork Carnitas Rice Bowl',

    emoji: '🌮',

    category: 'dinner',

    time: '20 min (+ marinate)',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '1½ lb (680g)', item: 'pork shoulder or tenderloin, cut into chunks' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tsp', item: 'cumin' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '½ tsp', item: 'cayenne pepper' },

      { qty: '1', item: 'orange, juice only' },

      { qty: '1', item: 'lime, juice only' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '2 cups (360g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '—', item: 'Bowl toppings' },

      { qty: '2', item: 'tomatoes, diced' },

      { qty: '½', item: 'cucumber, skin on, diced' },

      { qty: '2 tbsp', item: 'fresh cilantro' },

      { qty: '2', item: 'limes, cut into wedges' },

    ],

    steps: [

      'Mix garlic-infused oil, cumin, paprika, oregano, cayenne, orange juice, lime juice, salt, and pepper.',

      'Toss pork pieces in the marinade. Rest 30 minutes (or overnight in the fridge).',

      'Cook in a slow cooker on low 6–8 hours, or in a pressure cooker 45 minutes, until fall-apart tender.',

      'Shred pork with forks and return to the cooking juices.',

      'Optional: spread shredded pork on a tray and broil/grill 5 minutes for crispy edges.',

      'Serve over brown rice with diced tomato, cucumber, fresh cilantro, and lime wedges.',

    ],

    fodmapNote: 'Orange juice in small amounts adds sweetness without a FODMAP load. Garlic-infused oil is the safe garlic swap. All spices used are low FODMAP. A crowd-pleasing dinner that works equally well in corn tortillas or lettuce wraps. Brown rice plus extra diced tomato and skin-on cucumber add fibre.'

  },



  {

    id: 'beef-potato-pie',

    name: 'Beef & Potato Shepherd\'s Pie',

    emoji: '🥧',

    category: 'dinner',

    time: '55 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'comfort-food', 'higher-fibre'],

    ingredients: [

      { qty: '1 lb (454g)', item: 'lean ground beef' },

      { qty: '2', item: 'medium carrots, diced small' },

      { qty: '1', item: 'zucchini, diced small' },

      { qty: '1 cup (135g)', item: 'green beans, cut into 1cm pieces' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'tomato paste' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '1 cup (240ml)', item: 'low-FODMAP beef or chicken stock' },

      { qty: '1 tbsp', item: 'tamari' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '—', item: 'Potato topping' },

      { qty: '4', item: 'large potatoes (about 2 lb / 900g), skin on, quartered' },

      { qty: '2 tbsp', item: 'butter' },

      { qty: '½ cup (120ml)', item: 'lactose-free milk, warmed' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F.',

      'Boil potatoes until tender (15–18 min). Drain, then mash with the skins on (a rustic, skin-on mash) with butter and warm milk. Season well. Set aside.',

      'Heat garlic-infused oil in a large oven-safe skillet. Brown beef over high heat, breaking it up.',

      'Add carrots and cook 3 minutes. Add zucchini and green beans.',

      'Stir in tomato paste, ground flaxseed, stock, tamari, and thyme. Simmer 8–10 minutes until thickened.',

      'Spread mashed potato evenly over the beef mixture. Drag a fork over the top for texture.',

      'Bake 20–25 minutes until the potato top is golden. Rest 5 minutes before serving.',

    ],

    fodmapNote: 'Classic comfort food, completely FODMAPified. Potatoes are fully low FODMAP. Check your stock — most commercial stock contains onion and garlic; use homemade or a certified low-FODMAP brand. Tamari adds depth without wheat or high-FODMAP ingredients. Skin-on rustic mash and ground flaxseed in the filling add fibre.'

  },



  {

    id: 'tofu-stir-fry',

    name: 'Crispy Tofu & Vegetable Stir-Fry',

    emoji: '🥦',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'vegetarian', 'higher-fibre'],

    ingredients: [

      { qty: '12 oz (340g)', item: 'firm tofu, pressed and cubed' },

      { qty: '2 tbsp', item: 'cornstarch / cornflour' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'red bell pepper, sliced' },

      { qty: '1 cup', item: 'bok choy, chopped' },

      { qty: '1 cup', item: 'broccoli florets (¾ cup per serve)' },

      { qty: '1.5 cups', item: 'bean sprouts' },

      { qty: '2 tbsp', item: 'tamari' },

      { qty: '1 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tsp', item: 'fresh ginger, grated' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 cup (180g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '1 tbsp', item: 'sesame seeds, to garnish' },

    ],

    steps: [

      'Press tofu for 20 minutes (or use extra-firm). Cut into 2cm cubes and toss in cornstarch.',

      'Mix tamari, maple syrup, ginger, and sesame oil for the sauce. Set aside.',

      'Heat 1 tbsp oil in a non-stick pan or wok over high heat. Fry tofu cubes 3–4 minutes per side until golden and crispy. Remove.',

      'Add remaining oil. Stir-fry broccoli and bell pepper 3 minutes.',

      'Add bok choy and bean sprouts; stir-fry 1–2 minutes more.',

      'Return tofu to the pan, pour over sauce, and toss to coat.',

      'Serve over brown rice, garnished with sesame seeds.',

    ],

    fodmapNote: 'Keep broccoli to ¾ cup florets (75g) per person — larger amounts are moderate FODMAP. Firm tofu is low FODMAP at 170g per serve. Bean sprouts are fully safe. Cornstarch is low FODMAP. A complete plant-based meal. Brown rice and extra bean sprouts add fibre.'

  },



  // ─── SNACKS (additional) ─────────────────────────────────────────────────

  {

    id: 'rice-cake-almond-banana',

    name: 'Almond Butter & Banana Rice Cakes',

    emoji: '🍌',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'no-cook'],

    ingredients: [

      { qty: '2', item: 'plain rice cakes' },

      { qty: '2 tbsp', item: 'almond butter (no added sugar)' },

      { qty: '½', item: 'firm (unripe) banana, sliced' },

      { qty: 'pinch', item: 'cinnamon' },

      { qty: 'pinch', item: 'salt (optional)' },

    ],

    steps: [

      'Spread almond butter evenly over each rice cake.',

      'Top with banana slices.',

      'Sprinkle with cinnamon and a tiny pinch of salt to enhance the flavour.',

    ],

    fodmapNote: 'Keep almond butter to 1 tbsp per rice cake (2 tbsp total) — this is the safe FODMAP serving. Use a firm, slightly green banana — ripe bananas are higher in fructans. Rice cakes have no FODMAPs.'

  },



  {

    id: 'cheese-crackers-snack',

    name: 'Cheddar & GF Crackers',

    emoji: '🧀',

    category: 'snacks',

    time: '5 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'no-cook', 'vegetarian'],

    ingredients: [

      { qty: '1 oz (28g)', item: 'cheddar or other aged hard cheese, sliced' },

      { qty: '6–8', item: 'plain GF rice crackers or corn thins' },

      { qty: '1 tbsp', item: 'plain mayonnaise or mustard (optional)' },

      { qty: '4', item: 'cherry tomatoes (optional, to serve)' },

    ],

    steps: [

      'Arrange crackers on a plate.',

      'Top each with a slice of cheddar.',

      'Serve with a small smear of mayo or mustard and cherry tomatoes on the side.',

    ],

    fodmapNote: 'Aged cheddar is very low in lactose. Plain rice crackers and corn thins are low FODMAP — check ingredients for onion powder, garlic powder, or wheat. Cherry tomatoes are low FODMAP at 4 per serve.'

  },



  {

    id: 'fruit-salad-snack',

    name: 'FODMAP-Safe Fruit Salad',

    emoji: '🍓',

    category: 'snacks',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'no-cook'],

    ingredients: [

      { qty: '1 cup (150g)', item: 'fresh strawberries, hulled and halved' },

      { qty: '2', item: 'kiwi fruits, peeled and sliced' },

      { qty: '1 cup', item: 'firm (unripe) banana, sliced' },

      { qty: '¾ cup (100g)', item: 'pineapple chunks (fresh or canned in juice)' },

      { qty: '1 tbsp', item: 'fresh mint, torn' },

      { qty: '1 tbsp', item: 'lime juice' },

      { qty: '1 tsp', item: 'maple syrup (optional)' },

    ],

    steps: [

      'Combine all fruit in a bowl.',

      'Drizzle with lime juice and maple syrup if using.',

      'Toss gently and scatter fresh mint over the top.',

      'Serve immediately or chill for up to 2 hours.',

    ],

    fodmapNote: 'All fruits here are low FODMAP at these serving sizes. Pineapple is safe at ¾ cup. Use firm banana — ripe bananas are higher in fructans. Avoid high-FODMAP fruits like mango, apple, pear, and watermelon.'

  },



  {

    id: 'pumpkin-seed-mix',

    name: 'Toasted Seed & Nut Mix',

    emoji: '🌰',

    category: 'snacks',

    time: '12 min',

    serves: 8,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '½ cup (70g)', item: 'pumpkin seeds' },

      { qty: '½ cup (70g)', item: 'sunflower seeds' },

      { qty: '¼ cup (28g)', item: 'walnuts, roughly chopped' },

      { qty: '¼ cup (28g)', item: 'pecans, roughly chopped' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1 tbsp', item: 'olive oil' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: '½ tsp', item: 'cinnamon' },

      { qty: '¼ tsp', item: 'salt' },

    ],

    steps: [

      'Preheat oven to 170°C / 325°F.',

      'Toss all seeds and nuts with maple syrup, olive oil, paprika, cinnamon, and salt.',

      'Spread on a lined baking tray in a single layer.',

      'Bake 10–12 minutes until golden, stirring once.',

      'Cool completely — it crisps up as it cools.',

      'Store in an airtight container at room temperature for up to 2 weeks.',

    ],

    fodmapNote: 'Serving size is 2 tbsp (about 28g) — this keeps nuts within FODMAP limits. Pumpkin and sunflower seeds are fully safe. Walnuts are low FODMAP at 10 halves (30g). No cashews, pistachios, or almonds in large amounts.'

  },



  {

    id: 'deviled-eggs',

    name: 'Deviled Eggs',

    emoji: '🥚',

    category: 'snacks',

    time: '20 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegetarian', 'high-protein'],

    ingredients: [

      { qty: '6', item: 'large eggs' },

      { qty: '2 tbsp', item: 'plain mayonnaise (no garlic/onion)' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '1 tsp', item: 'lemon juice' },

      { qty: '½ tsp', item: 'smoked paprika, plus extra to garnish' },

      { qty: '2 tbsp', item: 'spring onion green tops, finely chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Hard-boil eggs: place in cold water, bring to a boil, cook 10 minutes, then transfer to ice water.',

      'Peel eggs and slice in half lengthwise. Carefully remove yolks into a bowl.',

      'Mash yolks with mayo, mustard, lemon juice, paprika, salt, and pepper until smooth.',

      'Spoon or pipe filling back into the egg whites.',

      'Top with a sprinkle of paprika and spring onion tops.',

      'Serve immediately or chill up to 24 hours before serving.',

    ],

    fodmapNote: 'Eggs are zero-FODMAP protein. Plain mayo (check the label — avoid garlic or onion varieties) is low FODMAP. Dijon mustard is low FODMAP. Spring onion green tops only — the white base is high FODMAP.'

  },



  // ─── DESSERTS (additional) ────────────────────────────────────────────────

  {

    id: 'banana-oat-cookies',

    name: 'Banana Oat Cookies',

    emoji: '🍪',

    category: 'desserts',

    time: '20 min',

    serves: 12,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free'],

    ingredients: [

      { qty: '2', item: 'firm (unripe) bananas, well mashed' },

      { qty: '1½ cups (132g)', item: 'certified GF rolled oats' },

      { qty: '2 tbsp', item: 'peanut butter or almond butter' },

      { qty: '2 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '½ tsp', item: 'cinnamon' },

      { qty: '¼ tsp', item: 'salt' },

      { qty: '2 tbsp', item: 'dark chocolate chips (optional, 70%+ cacao)' },

    ],

    steps: [

      'Preheat oven to 180°C / 350°F. Line a baking tray with parchment.',

      'Mash bananas thoroughly until no large lumps remain.',

      'Mix in peanut butter, maple syrup, vanilla, cinnamon, and salt.',

      'Fold in oats and chocolate chips if using.',

      'Scoop heaped tablespoons onto the tray and flatten gently.',

      'Bake 12–14 minutes until golden around the edges.',

      'Cool on the tray — they firm up as they cool. Store in an airtight container for 4 days.',

    ],

    fodmapNote: 'Use firm, slightly green bananas — ripe bananas are higher in fructans. Keep to 1–2 cookies per serving (each cookie has about 11g of oats, well within the safe ¼ cup limit). Peanut butter is low FODMAP at 2 tbsp per serve. Dark chocolate (70%+) is low FODMAP at 30g.'

  },



  {

    id: 'strawberry-panna-cotta',

    name: 'Strawberry Panna Cotta',

    emoji: '🍓',

    category: 'desserts',

    time: '20 min + 3 hr chill',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'make-ahead'],

    ingredients: [

      { qty: '2 cups (480ml)', item: 'lactose-free cream or heavy cream' },

      { qty: '½ cup (120ml)', item: 'lactose-free milk' },

      { qty: '3 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: '2¼ tsp (7g)', item: 'unflavoured gelatin powder (1 sachet)' },

      { qty: '3 tbsp', item: 'cold water' },

      { qty: '—', item: 'Strawberry sauce' },

      { qty: '2 cups (300g)', item: 'fresh strawberries, hulled and halved' },

      { qty: '2 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'lemon juice' },

    ],

    steps: [

      'Sprinkle gelatin over cold water in a small bowl. Let stand 5 minutes to bloom.',

      'Warm cream, milk, and maple syrup in a saucepan over medium heat — do not boil.',

      'Remove from heat and stir in bloomed gelatin and vanilla until fully dissolved.',

      'Pour into 4 ramekins or glasses. Refrigerate at least 3 hours until set.',

      'For the sauce: cook strawberries with maple syrup and lemon juice over medium heat for 8–10 minutes until broken down. Cool.',

      'To serve: spoon strawberry sauce over panna cotta, or unmould onto plates.',

    ],

    fodmapNote: 'Use lactose-free cream or regular heavy cream (very low lactose). Lactose-free milk keeps this fully safe. Strawberry sauce at this amount is well within the low-FODMAP limit (150g berries per person). A beautiful, impressive dessert that is naturally gluten-free.'

  },



  {

    id: 'chocolate-mousse',

    name: 'Dark Chocolate Mousse',

    emoji: '🍫',

    category: 'desserts',

    time: '15 min + 1 hr chill',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'vegetarian'],

    ingredients: [

      { qty: '4 oz (113g)', item: 'dark chocolate (70%+ cacao), chopped' },

      { qty: '4', item: 'large eggs, separated' },

      { qty: '2 tbsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: 'pinch', item: 'salt' },

      { qty: '—', item: 'To serve' },

      { qty: '½ cup (75g)', item: 'raspberries or sliced strawberries' },

    ],

    steps: [

      'Melt chocolate in a heatproof bowl over simmering water or in microwave in 30-second bursts. Cool slightly.',

      'Whisk egg yolks with maple syrup and vanilla. Stir into cooled chocolate until smooth.',

      'In a clean bowl, beat egg whites with a pinch of salt to stiff peaks.',

      'Fold ¼ of the egg whites into the chocolate mixture to lighten it.',

      'Gently fold in the remaining egg whites in two additions — keep as much air as possible.',

      'Spoon into 4 glasses or ramekins. Chill at least 1 hour until set.',

      'Top with fresh berries just before serving.',

    ],

    fodmapNote: 'Dark chocolate (70%+) is low FODMAP at 30g per serve — each serving has about 28g here. Milk chocolate and white chocolate have higher lactose and FODMAP content. Raspberries are low FODMAP at 10 berries (25g); strawberries at 10 berries (150g) are safe.'

  },



  {

    id: 'mango-sorbet',

    name: 'Pineapple & Lime Sorbet',

    emoji: '🍧',

    category: 'desserts',

    time: '10 min + freeze',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free'],

    ingredients: [

      { qty: '3 cups (495g)', item: 'frozen pineapple chunks' },

      { qty: '2 tbsp', item: 'lime juice (about 2 limes)' },

      { qty: '1 tsp', item: 'lime zest' },

      { qty: '2 tbsp', item: 'maple syrup (adjust to taste)' },

      { qty: '¼ cup (60ml)', item: 'water' },

    ],

    steps: [

      'Blend frozen pineapple, lime juice, lime zest, maple syrup, and water in a high-speed blender.',

      'Blend until completely smooth — you may need to scrape down the sides a few times.',

      'Taste and adjust sweetness with more maple syrup if needed.',

      'Serve immediately as a soft-serve style sorbet, or pour into a container and freeze 2–3 hours for a firmer texture.',

      'Let sit at room temperature 5 minutes before scooping from frozen.',

    ],

    fodmapNote: 'Pineapple is low FODMAP at ¾ cup (140g) per person — this recipe gives about 124g per serve so it is safe. Lime juice is low FODMAP. No dairy, no high-FODMAP fruit — a refreshing, naturally sweet frozen dessert.'

  },



  // ─── LUNCH (more) ─────────────────────────────────────────────────────────

  {

    id: 'greek-chicken-bowl',

    name: 'Greek Chicken & Rice Bowl',

    emoji: '🥙',

    category: 'lunch',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '2', item: 'chicken breasts, cut into bite-size pieces' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '1 cup (180g)', item: 'white rice, cooked, to serve' },

      { qty: '—', item: 'Bowl toppings' },

      { qty: '1 cup', item: 'cherry tomatoes, halved' },

      { qty: '½', item: 'cucumber, diced' },

      { qty: '¼ cup (28g)', item: 'feta cheese, crumbled' },

      { qty: '8', item: 'black olives, sliced' },

      { qty: '2 tbsp', item: 'fresh parsley, chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Toss chicken with garlic-infused oil, oregano, paprika, half the lemon juice, salt, and pepper. Marinate 10 minutes if you have time.',

      'Heat a skillet over medium-high heat. Cook chicken 6–8 minutes, turning, until golden and cooked through (74°C / 165°F).',

      'Divide rice between two bowls.',

      'Top with chicken, cherry tomatoes, cucumber, feta, and olives.',

      'Scatter parsley and lemon zest over the top, then squeeze over the remaining lemon juice.',

      'Serve warm or pack cold for a make-ahead lunch.',

    ],

    fodmapNote: 'Garlic-infused oil is the safe garlic swap. Feta is within lactose limits at 28g per serve. Plain black olives are low FODMAP — avoid garlic-marinated ones. Cherry tomatoes and cucumber are fully safe.'

  },



  {

    id: 'turkey-cheese-wrap',

    name: 'Turkey & Cheese GF Wrap',

    emoji: '🌯',

    category: 'lunch',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'no-cook'],

    ingredients: [

      { qty: '1 large', item: 'GF wrap or 2 corn tortillas' },

      { qty: '3 oz (85g)', item: 'sliced deli turkey breast (no garlic/onion)' },

      { qty: '1 oz (28g)', item: 'cheddar or Swiss cheese, sliced' },

      { qty: '1 tbsp', item: 'plain mayonnaise (no garlic/onion)' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: '2 leaves', item: 'butter lettuce' },

      { qty: '4 slices', item: 'cucumber' },

      { qty: '3', item: 'cherry tomatoes, halved' },

    ],

    steps: [

      'Lay the wrap flat and spread with mayo and Dijon mustard.',

      'Layer lettuce, turkey, cheese, cucumber, and cherry tomatoes down the centre.',

      'Season with a little black pepper.',

      'Fold in the sides and roll up tightly. Slice in half to serve.',

    ],

    fodmapNote: 'Check deli turkey for onion or garlic in the ingredients — choose a plain roast turkey breast. Aged cheddar and Swiss are very low in lactose. Plain mayo and Dijon are low FODMAP. GF wraps vary — check for onion, garlic, or honey.'

  },



  {

    id: 'tuna-nicoise-salad',

    name: 'Tuna Niçoise Salad',

    emoji: '🥗',

    category: 'lunch',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '1 can (5 oz / 142g)', item: 'tuna in spring water or olive oil, drained' },

      { qty: '2', item: 'large eggs' },

      { qty: '8', item: 'baby potatoes, halved' },

      { qty: '1 cup', item: 'green beans, trimmed' },

      { qty: '4 cups', item: 'mixed salad leaves' },

      { qty: '1 cup', item: 'cherry tomatoes, halved' },

      { qty: '12', item: 'black olives' },

      { qty: '—', item: 'Dressing' },

      { qty: '3 tbsp', item: 'olive oil' },

      { qty: '1 tbsp', item: 'red wine vinegar' },

      { qty: '1 tsp', item: 'Dijon mustard' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Boil potatoes 12–15 minutes until tender. Add green beans for the final 3 minutes, then drain and cool under cold water.',

      'Soft-boil the eggs: 7 minutes in boiling water, then cool in ice water, peel, and halve.',

      'Whisk together olive oil, vinegar, Dijon, salt, and pepper for the dressing.',

      'Arrange salad leaves on plates. Top with potatoes, green beans, tomatoes, tuna, olives, and egg halves.',

      'Drizzle with dressing and serve.',

    ],

    fodmapNote: 'Canned tuna, eggs, and potatoes are all zero-FODMAP. Green beans are low FODMAP at 1 cup per person. Plain black olives are safe. A classic, satisfying salad with no onion or garlic.'

  },



  {

    id: 'carrot-ginger-soup',

    name: 'Carrot & Ginger Soup',

    emoji: '🥕',

    category: 'lunch',

    time: '35 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'vegan', 'dairy-free', 'make-ahead'],

    ingredients: [

      { qty: '6', item: 'medium carrots, peeled and chopped' },

      { qty: '1', item: 'medium potato, peeled and diced' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'fresh ginger, grated' },

      { qty: '4 cups (1L)', item: 'low-FODMAP vegetable stock' },

      { qty: '½ cup (120ml)', item: 'canned coconut milk' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced, to garnish' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Heat garlic-infused oil in a large pot over medium heat. Add ginger and cook 30 seconds until fragrant.',

      'Add carrots and potato; stir to coat in the oil.',

      'Pour in the stock, bring to a boil, then reduce and simmer 20–25 minutes until the vegetables are very soft.',

      'Stir in the coconut milk.',

      'Blend until completely smooth with an immersion blender (or in a regular blender in batches).',

      'Season with salt and pepper. Serve topped with spring onion green tops.',

    ],

    fodmapNote: 'Keep canned coconut milk to ¼ cup (60ml) per serving — respected across 4 serves here. Carrots, potato, and ginger are all low FODMAP. Most commercial stock has onion and garlic — use a certified low-FODMAP brand or homemade.'

  },



  // ─── DINNER (more) ────────────────────────────────────────────────────────

  {

    id: 'lemon-garlic-shrimp-rice',

    name: 'Lemon Garlic Butter Shrimp with Rice',

    emoji: '🍤',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '12 oz (340g)', item: 'large shrimp, peeled and deveined' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'butter' },

      { qty: '1', item: 'lemon, juice and zest' },

      { qty: '¼ tsp', item: 'red pepper flakes (optional)' },

      { qty: '¼ cup', item: 'fresh parsley, chopped' },

      { qty: '1 cup (180g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '2 cups', item: 'green beans, steamed, to serve (1 cup per serve)' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Pat shrimp dry and season with salt and pepper.',

      'Heat garlic-infused oil in a large skillet over medium-high heat.',

      'Add shrimp in a single layer; cook 1–2 minutes per side until pink and opaque. Do not overcook.',

      'Reduce heat to low. Add butter, lemon juice, zest, and red pepper flakes; swirl until the butter melts into a glossy sauce.',

      'Stir in the parsley.',

      'Serve over brown rice with steamed green beans, spooning the pan sauce over everything.',

    ],

    fodmapNote: 'Garlic-infused oil gives all the garlic flavour with none of the fructans. Shrimp is zero-FODMAP. Green beans are safe at 1 cup per person; zucchini at ⅓ cup. A fast, restaurant-quality weeknight dinner. Brown rice and a full serve of green beans add fibre.'

  },



  {

    id: 'parmesan-crusted-chicken',

    name: 'Parmesan-Crusted Chicken with GF Pasta',

    emoji: '🍗',

    category: 'dinner',

    time: '30 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4', item: 'chicken breasts, pounded to even thickness' },

      { qty: '½ cup (50g)', item: 'parmesan, finely grated' },

      { qty: '½ cup (60g)', item: 'GF breadcrumbs' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: '2', item: 'large eggs, beaten' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '8 oz (227g)', item: 'brown-rice GF spaghetti, to serve' },

      { qty: '2 tbsp', item: 'butter' },

      { qty: '2 tbsp', item: 'fresh parsley, chopped' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Mix parmesan, GF breadcrumbs, ground flaxseed, oregano, paprika, salt, and pepper in a shallow dish.',

      'Dip each chicken breast in the beaten egg, then press firmly into the parmesan crumb to coat.',

      'Heat garlic-infused oil in a large skillet over medium heat. Cook chicken 5–6 minutes per side until golden and cooked through (74°C / 165°F). Lower the heat if the crust browns too fast.',

      'Meanwhile, cook the brown-rice GF spaghetti al dente per package directions. Drain and toss with butter, parsley, salt, and pepper.',

      'Serve the crusted chicken over or alongside the buttered pasta.',

    ],

    fodmapNote: 'Hard parmesan is naturally very low in lactose. Check GF breadcrumbs for onion and garlic powder. Garlic-infused oil is the safe swap. GF pasta is fully low FODMAP. Comfort food without the gluten or FODMAPs. Ground flaxseed in the crumb and brown-rice pasta add fibre.'

  },



  {

    id: 'ginger-pork-rice',

    name: 'Japanese Ginger Pork (Shogayaki)',

    emoji: '🍚',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '12 oz (340g)', item: 'thinly sliced pork loin or tenderloin' },

      { qty: '1 tbsp', item: 'fresh ginger, grated' },

      { qty: '2 tbsp', item: 'tamari' },

      { qty: '1 tbsp', item: 'mirin (or 1 tsp maple syrup + splash rice vinegar)' },

      { qty: '1 tbsp', item: 'maple syrup (or rice malt syrup / brown sugar)' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 cup (180g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '1.5 cups', item: 'shredded green cabbage, to serve' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced, to garnish' },

      { qty: '1 tbsp', item: 'sesame seeds, to garnish' },

    ],

    steps: [

      'Mix ginger, tamari, mirin, and maple syrup in a small bowl to make the sauce.',

      'Heat garlic-infused oil in a skillet over medium-high heat.',

      'Add the pork in a single layer and cook 2 minutes per side until lightly browned.',

      'Pour in the ginger sauce and toss for 1–2 minutes until the pork is glazed and cooked through.',

      'Serve over brown rice with a pile of shredded cabbage on the side.',

      'Garnish with spring onion green tops and sesame seeds.',

    ],

    fodmapNote: 'Tamari (GF soy sauce) is low FODMAP at this amount. Ginger and green cabbage are fully safe (cabbage to 1 cup per serve). Mirin is low FODMAP in small amounts. Use only the green tops of spring onion. Brown rice and extra shredded cabbage add fibre.'

  },



  {

    id: 'roast-chicken-thighs-veg',

    name: 'Sheet-Pan Roast Chicken Thighs & Veg',

    emoji: '🍗',

    category: 'dinner',

    time: '40 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'one-pan', 'higher-fibre'],

    ingredients: [

      { qty: '8', item: 'bone-in, skin-on chicken thighs' },

      { qty: '4', item: 'medium potatoes, skin on, cut into chunks' },

      { qty: '4', item: 'medium carrots, skin on, cut into batons' },

      { qty: '1', item: 'red bell pepper, cut into chunks' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '1 tsp', item: 'dried rosemary' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: '1', item: 'lemon, cut into wedges' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Leave the skins on the potatoes and carrots, then toss with the bell pepper, 2 tbsp garlic-infused oil, salt, and pepper. Spread on a large sheet pan.',

      'Rub chicken thighs with the remaining oil, thyme, rosemary, paprika, salt, and pepper. Nestle them skin-side up among the vegetables.',

      'Tuck the lemon wedges around the pan.',

      'Roast 35–40 minutes until the chicken skin is crisp and reaches 75°C / 165°F and the vegetables are tender.',

      'Squeeze the roasted lemon over everything before serving.',

    ],

    fodmapNote: 'Potatoes, carrots, and bell pepper are all low FODMAP at these servings. Garlic-infused oil is the safe garlic swap. One pan, minimal cleanup — a reliable family dinner. Great in the air fryer too (see the tip on the card). Skin-on potatoes and carrots plus an extra carrot add fibre.'

  },



  {

    id: 'beef-pepper-stir-fry',

    name: 'Pepper Beef Stir-Fry',

    emoji: '🥩',

    category: 'dinner',

    time: '25 min',

    serves: 3,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '1 lb (454g)', item: 'beef sirloin or rump steak, thinly sliced' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'red bell pepper, sliced' },

      { qty: '1', item: 'green bell pepper, sliced' },

      { qty: '1.5 cups', item: 'green beans, trimmed' },

      { qty: '3 tbsp', item: 'tamari' },

      { qty: '1 tbsp', item: 'rice vinegar' },

      { qty: '1 tbsp', item: 'fresh ginger, grated' },

      { qty: '1 tsp', item: 'cornstarch mixed with 2 tbsp water' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1.5 cups (270g)', item: 'brown rice, cooked (or white rice for a quicker option), to serve' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced, to garnish' },

    ],

    steps: [

      'Mix tamari, rice vinegar, ginger, cornstarch slurry, and sesame oil for the sauce. Set aside.',

      'Heat 1 tbsp garlic-infused oil in a wok or large skillet over high heat. Sear the beef in batches, 1–2 minutes, until browned. Remove and set aside.',

      'Add the remaining oil. Stir-fry the peppers and green beans 3–4 minutes until tender-crisp.',

      'Return the beef to the pan and pour in the sauce. Toss 1–2 minutes until glossy and thickened.',

      'Serve over brown rice, garnished with spring onion green tops.',

    ],

    fodmapNote: 'Beef is a zero-FODMAP protein. Bell peppers and green beans are low FODMAP at these servings. Tamari is the GF soy sauce — low FODMAP at this amount. Garlic-infused oil and green onion tops give the aromatic base without the fructans. Brown rice and a bigger serve of green beans add fibre.'

  },



  {

    id: 'steak-chimichurri',

    name: 'Grilled Steak with Chimichurri & Potatoes',

    emoji: '🥩',

    category: 'dinner',

    time: '30 min',

    serves: 2,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'steaks (sirloin, ribeye, or strip — about 8 oz / 225g each)' },

      { qty: '4', item: 'medium potatoes, skin on, cut into wedges' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '—', item: 'Chimichurri' },

      { qty: '1.5 cups', item: 'fresh parsley, finely chopped' },

      { qty: '2 tbsp', item: 'fresh oregano (or 2 tsp dried)' },

      { qty: '½ cup (120ml)', item: 'olive oil' },

      { qty: '2 tbsp', item: 'red wine vinegar' },

      { qty: '¼ tsp', item: 'red pepper flakes' },

      { qty: '2 tbsp', item: 'spring onion green tops, finely chopped' },

    ],

    steps: [

      'Preheat oven to 220°C / 425°F. Leave the skins on the potato wedges and toss with 1 tbsp garlic-infused oil, salt, and pepper. Roast 25–30 minutes, turning once, until golden.',

      'Make the chimichurri: combine parsley, oregano, olive oil, vinegar, red pepper flakes, spring onion tops, and a pinch of salt. Let it sit so the flavours meld.',

      'Rub steaks with the remaining garlic-infused oil, salt, and pepper. Let them come to room temperature.',

      'Heat a grill pan or skillet over high heat. Cook steaks 3–4 minutes per side for medium-rare (adjust to taste). Rest 5 minutes.',

      'Slice the steak and spoon over the chimichurri. Serve with the roasted potato wedges.',

    ],

    fodmapNote: 'Steak and potatoes are both zero-FODMAP. The chimichurri uses garlic-infused oil and green onion tops instead of raw garlic and onion — all the punch, none of the fructans. Fresh herbs are unlimited. Skin-on potato wedges and an extra-parsley chimichurri add fibre.'

  },



  {

    id: 'beef-tacos',

    name: 'Ground Beef Tacos',

    emoji: '🌮',

    category: 'dinner',

    time: '25 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '1 lb (454g)', item: 'lean ground beef' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '½ tsp', item: 'cayenne pepper (optional)' },

      { qty: '2 tbsp', item: 'tomato paste' },

      { qty: '1 tbsp', item: 'ground flaxseed' },

      { qty: '¼ cup (60ml)', item: 'water' },

      { qty: '8', item: 'corn tortillas, warmed' },

      { qty: '—', item: 'Toppings' },

      { qty: '3 cups', item: 'shredded lettuce' },

      { qty: '2', item: 'tomatoes, diced' },

      { qty: '½ cup (56g)', item: 'cheddar cheese, grated' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1', item: 'lime, cut into wedges' },

    ],

    steps: [

      'Heat garlic-infused oil in a skillet over medium-high heat. Brown the beef, breaking it up, 5–6 minutes.',

      'Stir in cumin, paprika, oregano, and cayenne; cook 1 minute until fragrant.',

      'Add tomato paste, ground flaxseed, and water. Simmer 3–4 minutes until thickened. Season with salt.',

      'Warm the corn tortillas in a dry pan or microwave.',

      'Fill each tortilla with beef, lettuce, tomato, cheese, and spring onion tops.',

      'Serve with lime wedges to squeeze over.',

    ],

    fodmapNote: 'Corn tortillas are low FODMAP (2 per serve). The homemade spice mix replaces store taco seasoning, which almost always contains onion and garlic powder. Aged cheddar is very low in lactose. Garlic-infused oil is the safe garlic swap. Ground flaxseed in the beef plus extra lettuce and tomato add fibre.'

  },



  {

    id: 'chicken-quesadilla',

    name: 'GF Chicken Quesadillas',

    emoji: '🫓',

    category: 'dinner',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '1', item: 'cooked chicken breast, shredded (about 1.5 cups)' },

      { qty: '4', item: 'corn tortillas (or 2 large GF wraps)' },

      { qty: '1 cup (112g)', item: 'cheddar or Monterey Jack cheese, grated' },

      { qty: '1 cup', item: 'red bell pepper, finely diced (≤½ cup per serve)' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '2', item: 'tomatoes, diced, for a side salad' },

    ],

    steps: [

      'Toss the shredded chicken with cumin, paprika, salt, and pepper.',

      'Brush a skillet with garlic-infused oil and warm over medium heat.',

      'Lay a tortilla in the pan. Scatter over cheese, chicken, bell pepper, and spring onion tops. Top with a second tortilla.',

      'Cook 2–3 minutes until golden underneath, then carefully flip and cook the other side until the cheese melts.',

      'Slide onto a board, cut into wedges, and repeat with the remaining tortillas.',

      'Serve warm with a side salad of diced tomato.',

    ],

    fodmapNote: 'Corn tortillas are low FODMAP (2 per serve). Aged cheddar and Monterey Jack are very low in lactose. Bell pepper and spring onion green tops are safe. Garlic-infused oil keeps the savoury base FODMAP-friendly. Extra diced red pepper and a diced tomato side salad add fibre.'

  },



  {

    id: 'lemon-pepper-tilapia',

    name: 'Lemon Pepper Baked Tilapia',

    emoji: '🐟',

    category: 'dinner',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'tilapia fillets (or other white fish, about 6 oz / 170g each)' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'lemon, half juiced, half sliced' },

      { qty: '1 tsp', item: 'cracked black pepper' },

      { qty: '½ tsp', item: 'smoked paprika' },

      { qty: '2 tbsp', item: 'fresh parsley, chopped' },

      { qty: 'to taste', item: 'salt' },

      { qty: '—', item: 'To serve' },

      { qty: '2 cups (310g)', item: 'roasted baby potatoes, skin on' },

      { qty: '2 cups', item: 'green beans, steamed (1 cup per serve)' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Pat the fish dry and place in a baking dish. Drizzle with garlic-infused oil and lemon juice.',

      'Season with cracked pepper, paprika, and salt. Lay lemon slices over the top.',

      'Bake 12–15 minutes until the fish flakes easily and is opaque throughout.',

      'Scatter parsley over the fish and serve with the skin-on roasted potatoes and steamed green beans.',

    ],

    fodmapNote: 'White fish like tilapia, cod, and haddock are zero-FODMAP proteins. Potatoes are fully safe and green beans are low FODMAP at 1 cup per person. Garlic-infused oil delivers the garlic flavour without the FODMAPs. Easy in the air fryer too. Skin-on baby potatoes and a full serve of green beans add fibre.'

  },



  {

    id: 'turkey-meatloaf',

    name: 'GF Turkey Meatloaf',

    emoji: '🍖',

    category: 'dinner',

    time: '55 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'high-protein', 'comfort-food'],

    ingredients: [

      { qty: '1.5 lb (680g)', item: 'ground turkey' },

      { qty: '½ cup (60g)', item: 'GF breadcrumbs' },

      { qty: '1', item: 'large egg' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'medium carrot, finely grated' },

      { qty: '2 tbsp', item: 'spring onion green tops, finely chopped' },

      { qty: '1 tsp', item: 'dried thyme' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

      { qty: '—', item: 'Glaze' },

      { qty: '3 tbsp', item: 'tomato paste' },

      { qty: '1 tbsp', item: 'brown sugar' },

      { qty: '1 tbsp', item: 'red wine vinegar' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F. Line a loaf tin with parchment.',

      'Mix turkey, GF breadcrumbs, egg, garlic-infused oil, grated carrot, spring onion tops, thyme, paprika, salt, and pepper until just combined — do not overwork.',

      'Press the mixture into the loaf tin and smooth the top.',

      'Stir together the tomato paste, brown sugar, and vinegar. Brush generously over the loaf.',

      'Bake 40–45 minutes until cooked through (internal temp 74°C / 165°F).',

      'Rest 10 minutes before slicing. Serve with mashed potato and a green vegetable.',

    ],

    fodmapNote: 'Ground turkey is plain protein. Check GF breadcrumbs for onion and garlic powder. Grated carrot keeps it moist; spring onion green tops and garlic-infused oil give the savoury base. The tomato-glaze uses brown sugar — no high-FODMAP ketchup needed.'

  },



  {

    id: 'baked-ziti',

    name: 'GF Baked Ziti',

    emoji: '🍝',

    category: 'dinner',

    time: '45 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'vegetarian', 'comfort-food'],

    ingredients: [

      { qty: '12 oz (340g)', item: 'GF penne or ziti pasta' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 cups (480ml)', item: 'canned crushed tomatoes (no onion/garlic added)' },

      { qty: '2 tbsp', item: 'tomato paste' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '1 tsp', item: 'dried basil' },

      { qty: '¼ tsp', item: 'red pepper flakes (optional)' },

      { qty: '1 cup (240g)', item: 'lactose-free ricotta (or firm tofu, blended)' },

      { qty: '1.5 cups (170g)', item: 'mozzarella, grated' },

      { qty: '¼ cup (25g)', item: 'parmesan, grated' },

      { qty: '2 tbsp', item: 'fresh basil, torn' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F. Cook the GF pasta 2 minutes short of al dente, then drain.',

      'Heat garlic-infused oil in a saucepan. Add crushed tomatoes, tomato paste, oregano, dried basil, and red pepper flakes. Simmer 10 minutes. Season.',

      'Toss the drained pasta with the sauce and the ricotta.',

      'Spread half into a baking dish, scatter with half the mozzarella, then add the rest of the pasta.',

      'Top with the remaining mozzarella and the parmesan.',

      'Bake 20–25 minutes until bubbling and golden. Scatter with fresh basil before serving.',

    ],

    fodmapNote: 'GF pasta is fully low FODMAP. Use lactose-free ricotta (or blended firm tofu) to keep lactose in check; mozzarella and parmesan are low in lactose at these amounts. Canned tomatoes are safe — just check the label for added onion or garlic.'

  },



  {

    id: 'roast-pork-loin',

    name: 'Herb Roast Pork Loin with Potatoes',

    emoji: '🥩',

    category: 'dinner',

    time: '1 hr 10 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '2 lb (900g)', item: 'pork loin roast' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'fresh rosemary, chopped' },

      { qty: '1 tbsp', item: 'fresh thyme leaves' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '6', item: 'medium potatoes, halved' },

      { qty: '3', item: 'medium carrots, cut into batons' },

      { qty: '1 cup (240ml)', item: 'low-FODMAP chicken stock' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Pat the pork dry. Rub all over with 2 tbsp garlic-infused oil, the rosemary, thyme, paprika, salt, and pepper.',

      'Toss the potatoes and carrots with the remaining oil, salt, and pepper. Spread in a roasting pan and nestle the pork on top.',

      'Pour the stock into the base of the pan.',

      'Roast 50–60 minutes until the pork reaches 63°C / 145°F and the vegetables are tender, basting once halfway.',

      'Rest the pork 10 minutes, then slice. Serve with the roasted vegetables and pan juices.',

    ],

    fodmapNote: 'Pork loin, potatoes, and carrots are all low FODMAP. Garlic-infused oil and fresh herbs build a roast-dinner flavour without onion or garlic. Most commercial stock contains onion/garlic — use a certified low-FODMAP brand or homemade.'

  },



  // ─── HIGH-FIBRE RECIPES (low-FODMAP) ───────────────────

  // Built to pack in as much fibre as possible while staying within safe

  // low-FODMAP serving sizes (canned lentils/chickpeas ¼ cup pp, oats ¼–½ cup,

  // chia 2 tbsp, raspberries ~30 berries, edamame ½ cup pp, etc.).

  {

    id: 'hf-oat-berry-bowl',

    name: 'Super-Fibre Oat & Berry Bowl',

    emoji: '🥣',

    category: 'breakfast',

    time: '10 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'high-fibre', 'make-ahead'],

    ingredients: [

      { qty: '1 cup (88g)', item: 'rolled oats (GF certified)' },

      { qty: '2 tbsp', item: 'oat bran' },

      { qty: '2 tbsp', item: 'chia seeds' },

      { qty: '1 tbsp', item: 'ground flaxseed (linseed)' },

      { qty: '2 cups', item: 'lactose-free milk or almond milk' },

      { qty: '1 cup (60g)', item: 'raspberries' },

      { qty: '2', item: 'kiwi fruits, peeled and sliced' },

      { qty: '2 tbsp', item: 'walnuts, chopped' },

      { qty: '2 tsp', item: 'maple syrup (optional)' },

      { qty: '1/2 tsp', item: 'cinnamon' },

    ],

    steps: [

      'Combine oats, oat bran, chia, flaxseed, milk, and cinnamon in a bowl or jar.',

      'Stir well, then leave 5 minutes (or overnight in the fridge) until thick and creamy.',

      'Warm gently on the stove for 3–4 minutes if you prefer it hot, adding a splash more milk to loosen.',

      'Divide between two bowls. Top with raspberries, kiwi, and walnuts.',

      'Drizzle with maple syrup if you like it sweeter.',

    ],

    fodmapNote: 'A serious fibre hit (~15g per serve) from oats, oat bran, chia, flax, and berries. Keep oat bran to 2 tbsp total and raspberries to about 30 per person to stay low FODMAP. Increase fibre slowly and drink plenty of water.'

  },



  {

    id: 'hf-lentil-veg-soup',

    name: 'Hearty Lentil & Vegetable Soup',

    emoji: '🍲',

    category: 'lunch',

    time: '35 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'make-ahead'],

    ingredients: [

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

      { qty: '2', item: 'medium carrots, diced' },

      { qty: '1', item: 'medium potato, diced (skin on)' },

      { qty: '1', item: 'medium zucchini, diced' },

      { qty: '1 cup (190g)', item: 'canned lentils, drained and rinsed' },

      { qty: '1 cup (200g)', item: 'canned chopped tomatoes' },

      { qty: '4 cups (1L)', item: 'low-FODMAP vegetable stock' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Heat the garlic-infused oil in a large pot over medium heat. Add spring onion tops, carrot, and potato; cook 5 minutes.',

      'Stir in the cumin and paprika and cook 30 seconds until fragrant.',

      'Add the zucchini, lentils, tomatoes, and stock. Bring to a simmer.',

      'Simmer 18–20 minutes until the vegetables are tender.',

      'Stir through the spinach until wilted, season to taste, and serve.',

    ],

    fodmapNote: 'Canned (not dried) lentils are low FODMAP at ¼ cup per serve — this recipe keeps to 1 cup across 4 servings. Rinse them well. Use only spring onion green tops, not the white base, and a certified onion/garlic-free stock.'

  },



  {

    id: 'hf-quinoa-tofu-bowl',

    name: 'Quinoa, Tofu & Greens Power Bowl',

    emoji: '🥗',

    category: 'lunch',

    time: '30 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'high-protein'],

    ingredients: [

      { qty: '1 cup', item: 'cooked quinoa (about 1/3 cup dry)' },

      { qty: '200g', item: 'firm tofu, cubed' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'soy sauce or tamari' },

      { qty: '2 cups', item: 'kale, stems removed and chopped' },

      { qty: '1', item: 'medium carrot, grated' },

      { qty: '1/2 cup (90g)', item: 'shelled edamame' },

      { qty: '2 tbsp', item: 'pumpkin seeds (pepitas)' },

      { qty: '1 tbsp', item: 'tahini' },

      { qty: '1 tbsp', item: 'lemon juice' },

      { qty: '1 tsp', item: 'maple syrup' },

    ],

    steps: [

      'Press the tofu to remove moisture, then toss with the soy sauce.',

      'Heat the garlic-infused oil in a pan over medium-high and fry the tofu 6–8 minutes until golden on all sides.',

      'Add the kale to the pan for the last 2 minutes to wilt slightly.',

      'Whisk tahini, lemon juice, maple syrup, and 1–2 tbsp water into a pourable dressing.',

      'Divide quinoa between bowls; top with tofu, kale, grated carrot, and edamame.',

      'Drizzle with the tahini dressing and scatter with pumpkin seeds.',

    ],

    fodmapNote: 'Firm tofu, quinoa, kale, carrot, and pumpkin seeds are all low FODMAP. Edamame is safe at ½ cup (90g) per serve and adds plant protein and fibre. Keep tahini to 1 tbsp per person.'

  },



  {
    id: 'hf-tofu-spinach-curry',
    name: 'Tofu & Spinach Curry',
    emoji: '🍛',
    category: 'dinner',
    time: '30 min',
    serves: 4,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'high-protein'],
    ingredients: [
      { qty: '2 tbsp', item: 'garlic-infused olive oil' },
      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },
      { qty: '1 tbsp', item: 'fresh ginger, grated' },
      { qty: '300g', item: 'firm tofu, cubed' },
      { qty: '1 cup (200g)', item: 'canned chopped tomatoes' },
      { qty: '1 cup (240ml)', item: 'canned coconut milk' },
      { qty: '4 cups', item: 'baby spinach' },
      { qty: '1', item: 'medium zucchini, skin on, diced' },
      { qty: '2 tsp', item: 'ground cumin' },
      { qty: '2 tsp', item: 'ground coriander' },
      { qty: '1 tsp', item: 'ground turmeric' },
      { qty: '1/2 tsp', item: 'chilli powder (optional)' },
      { qty: '2 cups', item: 'cooked brown rice (or white rice for a quicker option), to serve' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Press the tofu to remove moisture, then cube. Pan-fry in 1 tbsp of the garlic-infused oil over medium-high heat until golden on all sides, about 6 minutes. Set aside.',
      'In the same pan, heat the remaining oil. Add spring onion tops and ginger; cook 1 minute.',
      'Add the cumin, coriander, turmeric, and chilli; stir 30 seconds until fragrant.',
      'Pour in the tomatoes and coconut milk, add the zucchini, and simmer 10 minutes.',
      'Return the tofu to the pan and simmer a further 5 minutes.',
      'Stir through the spinach until wilted, then season to taste.',
      'Serve over brown rice.',
    ],
    fodmapNote: 'Firm tofu is naturally FODMAP-free and a great plant protein — it replaces chickpeas here, so there is no legume/GOS limit to watch. Keep coconut milk to 1 cup for the whole batch (about 1 tbsp per person). Brown rice, zucchini, and spinach add the fibre. Use spring onion green tops only.'
  },



  {

    id: 'hf-chicken-buddha-bowl',

    name: 'High-Fibre Chicken Buddha Bowl',

    emoji: '🥙',

    category: 'dinner',

    time: '35 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-fibre', 'high-protein'],

    ingredients: [

      { qty: '2 (250g)', item: 'chicken breasts' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 cup', item: 'cooked quinoa' },

      { qty: '1', item: 'medium carrot, cut into batons' },

      { qty: '1', item: 'medium zucchini, sliced' },

      { qty: '1', item: 'red bell pepper, sliced' },

      { qty: '1 cup', item: 'green beans, trimmed' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '2 tbsp', item: 'pumpkin seeds (pepitas)' },

      { qty: '1 tbsp', item: 'lemon juice' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss the carrot, zucchini, bell pepper, and green beans with 1 tbsp garlic-infused oil, paprika, salt, and pepper. Roast on a tray 20–25 minutes until tender.',

      'Rub the chicken with the remaining oil, salt, and pepper. Pan-fry over medium heat 6–7 minutes per side until cooked through (74°C / 165°F). Rest, then slice.',

      'Divide quinoa and raw spinach between two bowls.',

      'Top with the roasted vegetables and sliced chicken.',

      'Finish with a squeeze of lemon and a scatter of pumpkin seeds.',

    ],

    fodmapNote: 'A high-protein, high-fibre bowl (~11g fibre) from quinoa, green beans, and a rainbow of low-FODMAP veg. Keep bell pepper to about half a cup per serve and use spinach freely. Add fibre gradually if your gut is sensitive.'

  },



  {

    id: 'hf-raspberry-chia-pudding',

    name: 'Raspberry Chia Fibre Pudding',

    emoji: '🍓',

    category: 'snacks',

    time: '5 min + chill',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'make-ahead', 'no-cook'],

    ingredients: [

      { qty: '4 tbsp', item: 'chia seeds' },

      { qty: '1.5 cups', item: 'almond milk or lactose-free milk' },

      { qty: '1 cup (60g)', item: 'raspberries' },

      { qty: '1', item: 'kiwi fruit, diced' },

      { qty: '1 tbsp', item: 'maple syrup' },

      { qty: '1/2 tsp', item: 'vanilla extract' },

      { qty: '1 tbsp', item: 'pumpkin seeds, to top' },

    ],

    steps: [

      'Whisk chia seeds, milk, maple syrup, and vanilla together in a jar.',

      'Stir again after 5 minutes to stop clumping, then cover and chill at least 2 hours or overnight.',

      'Lightly mash half the raspberries and fold through the pudding.',

      'Spoon into two glasses and top with the remaining raspberries, kiwi, and pumpkin seeds.',

    ],

    fodmapNote: 'Chia seeds are a fibre powerhouse — 2 tbsp per serve is the low-FODMAP limit and exactly what this makes. Raspberries are safe at ~30 berries and kiwi adds gut-friendly fibre. Great prepped ahead for the week.'

  },



  {

    id: 'hf-energy-balls',

    name: 'No-Bake High-Fibre Energy Balls',

    emoji: '🍫',

    category: 'snacks',

    time: '15 min',

    serves: 10,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'high-fibre', 'make-ahead', 'no-cook'],

    ingredients: [

      { qty: '1 cup (88g)', item: 'rolled oats (GF certified)' },

      { qty: '1/2 cup', item: 'natural peanut butter' },

      { qty: '3 tbsp', item: 'maple syrup' },

      { qty: '2 tbsp', item: 'chia seeds' },

      { qty: '2 tbsp', item: 'ground flaxseed (linseed)' },

      { qty: '2 tbsp', item: 'dark chocolate chips (70%+)' },

      { qty: '1 tsp', item: 'vanilla extract' },

      { qty: 'pinch', item: 'salt' },

    ],

    steps: [

      'Mix all ingredients in a bowl until a sticky dough forms.',

      'If too dry, add 1 tsp water at a time; if too wet, add a little more oats.',

      'Chill the mixture 10 minutes to firm up.',

      'Roll into 20 small balls (about 1 tbsp each).',

      'Store in an airtight container in the fridge for up to 1 week.',

    ],

    fodmapNote: 'Serving size is 2 balls. Oats, peanut butter, chia, and flax all bring fibre while staying low FODMAP at these amounts. Keep to the suggested serve — a much larger portion of oats or peanut butter can tip into moderate FODMAP territory.'

  },



  {
    id: 'hf-oat-seed-crackers',
    name: 'High-Fibre Oat & Seed Crackers',
    emoji: '🍘',
    category: 'snacks',
    time: '35 min',
    serves: 6,
    difficulty: 'easy',
    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'make-ahead'],
    ingredients: [
      { qty: '1 cup (88g)', item: 'rolled oats (GF certified)' },
      { qty: '1/4 cup', item: 'pumpkin seeds (pepitas)' },
      { qty: '1/4 cup', item: 'sunflower seeds' },
      { qty: '2 tbsp', item: 'chia seeds' },
      { qty: '2 tbsp', item: 'ground flaxseed (linseed)' },
      { qty: '2 tbsp', item: 'garlic-infused olive oil' },
      { qty: '3/4 cup', item: 'water' },
      { qty: '1 tsp', item: 'smoked paprika' },
      { qty: '1/2 tsp', item: 'salt' },
    ],
    steps: [
      'Preheat oven to 170°C / 340°F and line a large baking tray.',
      'Mix the oats, pumpkin seeds, sunflower seeds, chia, flaxseed, paprika, and salt in a bowl.',
      'Stir in the oil and water and leave 10 minutes — the chia and flax will thicken it into a spreadable paste.',
      'Spread the mixture very thinly and evenly over the lined tray (about 3mm thick).',
      'Bake 25–30 minutes until golden and dry, then score into squares while warm.',
      'Cool completely on the tray — they crisp up as they cool. Snap apart and store airtight for up to 1 week.',
    ],
    fodmapNote: 'A crunchy, legume-free cracker that is high in fibre from oats, chia, flax, and seeds — no chickpeas, so no GOS limit to watch. Keep to about 1/6 of the batch per serve. Garlic-infused oil adds flavour without the fructans.'
  },



  {

    id: 'hf-edamame',

    name: 'Sea Salt & Sesame Edamame',

    emoji: '🫛',

    category: 'snacks',

    time: '8 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'vegan', 'gluten-free', 'dairy-free', 'high-fibre', 'high-protein'],

    ingredients: [

      { qty: '1 cup (180g)', item: 'frozen edamame in pods' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1/2 tsp', item: 'flaky sea salt' },

      { qty: '1 tsp', item: 'sesame seeds' },

      { qty: 'optional', item: 'pinch of chilli flakes' },

    ],

    steps: [

      'Bring a pot of water to the boil and cook the edamame 4–5 minutes (or steam) until tender.',

      'Drain well and tip into a bowl.',

      'Toss with sesame oil, sea salt, sesame seeds, and chilli flakes if using.',

      'Serve warm — squeeze the beans straight from the pods.',

    ],

    fodmapNote: 'Edamame is low FODMAP at ½ cup of shelled beans (about 90g) per serve — one cup of pods yields roughly that. A quick, satisfying snack rich in plant protein and fibre.'

  },



  // ─── LUNCH & DINNER (extra 20 · quick + nicer) ─────────────

  {

    id: 'tuna-quinoa-power-bowl',

    name: 'Tuna & Quinoa Power Bowl',

    emoji: '🥗',

    category: 'lunch',

    added: '2026-07-12',

    time: '15 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick', 'higher-fibre'],

    ingredients: [

      { qty: '3/4 cup', item: 'cooked quinoa (cooled or warm)' },

      { qty: '1 can (95g)', item: 'tuna in springwater, drained' },

      { qty: '1/2 cup', item: 'cucumber, diced' },

      { qty: '1/2 cup', item: 'cherry tomatoes, halved' },

      { qty: '1 handful', item: 'baby spinach' },

      { qty: '6', item: 'kalamata olives, sliced' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'lemon juice' },

      { qty: 'to taste', item: 'salt and black pepper' },

    ],

    steps: [

      'Add the quinoa and spinach to a bowl as the base.',

      'Top with flaked tuna, cucumber, tomatoes, and olives.',

      'Whisk the garlic-infused oil with lemon juice, salt, and pepper.',

      'Drizzle the dressing over the bowl and toss gently. Serve straight away.',

    ],

    fodmapNote: 'Quinoa is low FODMAP at 1 cup cooked and adds protein and fibre. Garlic-infused oil gives flavour without the fructans of raw garlic.'

  },

  {

    id: 'rice-paper-veggie-rolls',

    name: 'Fresh Rice Paper Rolls with Peanut Dip',

    emoji: '🌯',

    category: 'lunch',

    added: '2026-07-12',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'vegetarian', 'quick'],

    ingredients: [

      { qty: '8', item: 'rice paper wrappers' },

      { qty: '100g', item: 'firm tofu, cut into strips' },

      { qty: '1', item: 'carrot, julienned' },

      { qty: '1/2', item: 'cucumber, julienned' },

      { qty: '1 cup', item: 'shredded red cabbage' },

      { qty: '1 handful', item: 'fresh mint and coriander leaves' },

      { qty: '2 tbsp', item: 'smooth peanut butter' },

      { qty: '1 tbsp', item: 'gluten-free soy sauce (tamari)' },

      { qty: '1 tsp', item: 'lime juice' },

      { qty: '1-2 tbsp', item: 'warm water, to loosen' },

    ],

    steps: [

      'Whisk peanut butter, tamari, lime juice, and warm water into a smooth dip. Set aside.',

      'Dip a rice paper wrapper in warm water for 10–15 seconds until pliable.',

      'Lay on a board and add tofu, carrot, cucumber, cabbage, and herbs across the lower third.',

      'Fold the sides in and roll up tightly. Repeat with the rest.',

      'Serve the rolls with the peanut dipping sauce.',

    ],

    fodmapNote: 'Firm tofu is low FODMAP (the liquid whey removes excess FODMAPs). Keep peanut butter to 2 tbsp per serve and red cabbage to 1 cup to stay in the green zone.'

  },

  {

    id: 'caprese-toastie',

    name: '5-Minute Caprese Toastie',

    emoji: '🥪',

    category: 'lunch',

    added: '2026-07-12',

    time: '8 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'quick'],

    ingredients: [

      { qty: '2 slices', item: 'gluten-free sourdough or bread' },

      { qty: '60g', item: 'fresh mozzarella, sliced' },

      { qty: '1', item: 'tomato, sliced' },

      { qty: '4', item: 'fresh basil leaves' },

      { qty: '1 tsp', item: 'garlic-infused olive oil' },

      { qty: 'pinch', item: 'salt and cracked pepper' },

    ],

    steps: [

      'Brush the outside of both bread slices lightly with garlic-infused oil.',

      'Layer mozzarella, tomato, and basil between the slices. Season.',

      'Toast in a sandwich press or pan over medium heat, pressing gently.',

      'Cook 3–4 minutes until golden and the cheese melts. Slice and serve.',

    ],

    fodmapNote: 'Fresh mozzarella is low FODMAP at around 60g per serve. Gluten-free bread keeps the wheat fructans out of a classic melt.'

  },

  {

    id: 'chicken-rice-noodle-salad',

    name: 'Cold Chicken & Rice Noodle Salad',

    emoji: '🍜',

    category: 'lunch',

    added: '2026-07-12',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'make-ahead'],

    ingredients: [

      { qty: '150g', item: 'rice vermicelli noodles' },

      { qty: '1', item: 'cooked chicken breast, shredded' },

      { qty: '1', item: 'carrot, grated' },

      { qty: '1 cup', item: 'shredded lettuce' },

      { qty: '1/2', item: 'cucumber, ribboned' },

      { qty: '2 tbsp', item: 'chopped roasted peanuts' },

      { qty: '2 tbsp', item: 'lime juice' },

      { qty: '1 tbsp', item: 'gluten-free soy sauce (tamari)' },

      { qty: '1 tsp', item: 'maple syrup' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '2 tbsp', item: 'spring onion green tops, sliced' },

    ],

    steps: [

      'Soak the rice noodles in boiling water for 4–5 minutes, then drain and rinse under cold water.',

      'Whisk lime juice, tamari, maple syrup, and sesame oil into a dressing.',

      'Toss the noodles with chicken, carrot, lettuce, and cucumber.',

      'Pour over the dressing and toss again.',

      'Top with peanuts and spring onion greens. Serve cold.',

    ],

    fodmapNote: 'Rice noodles are naturally FODMAP-free. Use only the green tops of spring onions — the white bulbs are high in fructans. Great made ahead for lunchboxes.'

  },

  {

    id: 'egg-avo-smash-toast',

    name: 'Egg & Avo Smash on Toast',

    emoji: '🥑',

    category: 'lunch',

    added: '2026-07-12',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'quick', 'high-protein'],

    ingredients: [

      { qty: '2 slices', item: 'gluten-free bread' },

      { qty: '1/8', item: 'avocado (about 30g)' },

      { qty: '2', item: 'eggs' },

      { qty: '1 tsp', item: 'lemon juice' },

      { qty: '1 tbsp', item: 'chopped chives' },

      { qty: 'pinch', item: 'chilli flakes (optional)' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Poach or fry the eggs to your liking.',

      'Toast the gluten-free bread.',

      'Mash the avocado with lemon juice, salt, and pepper, then spread over the toast.',

      'Top with the eggs, chives, and a pinch of chilli flakes. Serve.',

    ],

    fodmapNote: 'Avocado is low FODMAP at 1/8 of a fruit (around 30g) — a little goes a long way. Chives replace onion for a mild savoury bite.'

  },

  {

    id: 'greek-chickpea-bowl',

    name: 'Greek-Style Chickpea & Feta Bowl',

    emoji: '🥙',

    category: 'lunch',

    added: '2026-07-12',

    time: '15 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'quick', 'higher-fibre'],

    ingredients: [

      { qty: '1/2 cup', item: 'canned chickpeas, rinsed and drained' },

      { qty: '1', item: 'cucumber, diced' },

      { qty: '1 cup', item: 'cherry tomatoes, halved' },

      { qty: '40g', item: 'feta, crumbled' },

      { qty: '8', item: 'kalamata olives' },

      { qty: '2 cups', item: 'baby spinach' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'red wine vinegar' },

      { qty: '1 tsp', item: 'dried oregano' },

    ],

    steps: [

      'Divide the spinach between two bowls.',

      'Top with chickpeas, cucumber, tomatoes, olives, and feta.',

      'Whisk garlic-infused oil, vinegar, and oregano together.',

      'Drizzle over and serve.',

    ],

    fodmapNote: 'Canned, rinsed chickpeas are low FODMAP at 1/4 cup per serve — the canning liquid leaches out the GOS. Feta is low FODMAP at 40g.'

  },

  {

    id: 'zucchini-corn-fritters',

    name: 'Zucchini & Corn Fritters',

    emoji: '🥞',

    category: 'lunch',

    added: '2026-07-12',

    time: '25 min',

    serves: 3,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free'],

    ingredients: [

      { qty: '2', item: 'zucchini, grated and squeezed dry' },

      { qty: '1/3 cup', item: 'canned corn kernels, drained' },

      { qty: '2', item: 'eggs' },

      { qty: '1/2 cup', item: 'gluten-free plain flour' },

      { qty: '30g', item: 'grated cheddar' },

      { qty: '2 tbsp', item: 'chopped chives' },

      { qty: '1 tsp', item: 'baking powder' },

      { qty: '2 tbsp', item: 'olive oil, for frying' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Squeeze the grated zucchini in a clean tea towel to remove as much water as possible.',

      'Combine zucchini, corn, eggs, flour, cheddar, chives, baking powder, salt, and pepper into a thick batter.',

      'Heat oil in a pan over medium heat.',

      'Drop heaped spoonfuls in and flatten slightly. Fry 2–3 minutes each side until golden.',

      'Drain on paper towel and serve with a squeeze of lemon.',

    ],

    fodmapNote: 'Canned corn is low FODMAP at 1/3 cup per serve. Squeezing the zucchini dry keeps the fritters crisp rather than soggy.'

  },

  {

    id: 'smoked-salmon-rice-bowl',

    name: 'Smoked Salmon & Rice Bowl',

    emoji: '🍚',

    category: 'lunch',

    added: '2026-07-12',

    time: '12 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick'],

    ingredients: [

      { qty: '3/4 cup', item: 'cooked sushi rice, cooled slightly' },

      { qty: '80g', item: 'smoked salmon' },

      { qty: '1/2', item: 'cucumber, sliced' },

      { qty: '1/4', item: 'avocado (about 30g), sliced' },

      { qty: '1 tbsp', item: 'gluten-free soy sauce (tamari)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '1 tsp', item: 'sesame seeds' },

      { qty: '1 tbsp', item: 'pickled ginger (optional)' },

    ],

    steps: [

      'Spoon the rice into a bowl.',

      'Arrange the smoked salmon, cucumber, and avocado on top.',

      'Drizzle with tamari and sesame oil.',

      'Scatter over sesame seeds and add pickled ginger if using. Serve.',

    ],

    fodmapNote: 'White rice is one of the safest low-FODMAP staples. Keep avocado to about 1/4 fruit and this bowl stays gentle while feeling like a treat.'

  },

  {

    id: 'roast-pumpkin-feta-salad',

    name: 'Roast Pumpkin, Feta & Spinach Salad',

    emoji: '🎃',

    category: 'lunch',

    added: '2026-07-12',

    time: '35 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'higher-fibre'],

    ingredients: [

      { qty: '1.5 cups', item: 'kabocha (Japanese) pumpkin, cubed' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '3 cups', item: 'baby spinach' },

      { qty: '40g', item: 'feta, crumbled' },

      { qty: '2 tbsp', item: 'pumpkin seeds' },

      { qty: '1 tbsp', item: 'balsamic vinegar' },

      { qty: '1 tsp', item: 'maple syrup' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss the pumpkin with 1 tbsp of the garlic oil, salt, and pepper. Roast 25–30 minutes until caramelised.',

      'Whisk the remaining oil with balsamic and maple syrup.',

      'Arrange spinach on plates and top with warm pumpkin, feta, and pumpkin seeds.',

      'Drizzle with the dressing and serve.',

    ],

    fodmapNote: 'Kabocha/Japanese pumpkin is low FODMAP at 1 cup — unlike butternut, which is only safe in small amounts. A cosy, satisfying salad.'

  },

  {

    id: 'ham-cheese-quesadilla',

    name: 'Quick Ham & Cheese Quesadilla',

    emoji: '🫓',

    category: 'lunch',

    added: '2026-07-12',

    time: '10 min',

    serves: 1,

    difficulty: 'easy',

    tags: ['gluten-free', 'quick', 'high-protein'],

    ingredients: [

      { qty: '1 large', item: 'corn tortilla (or GF wrap)' },

      { qty: '2 slices', item: 'shaved ham' },

      { qty: '40g', item: 'grated cheddar' },

      { qty: '1 handful', item: 'baby spinach' },

      { qty: '1 tsp', item: 'garlic-infused olive oil' },

      { qty: 'to serve', item: 'diced tomato' },

    ],

    steps: [

      'Heat a pan over medium heat with the garlic-infused oil.',

      'Lay the tortilla in the pan and scatter cheese, ham, and spinach over one half.',

      'Fold over and press gently. Cook 2 minutes each side until the cheese melts and the outside is crisp.',

      'Slice into wedges and serve with diced tomato.',

    ],

    fodmapNote: 'Corn tortillas are low FODMAP; check the wrap is 100% corn or a certified GF blend. Cheddar is naturally lactose-light and low FODMAP.'

  },

  {

    id: 'one-pan-lemon-salmon',

    name: 'One-Pan Lemon Salmon & Greens',

    emoji: '🐟',

    category: 'dinner',

    added: '2026-07-12',

    time: '25 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick'],

    ingredients: [

      { qty: '2', item: 'salmon fillets' },

      { qty: '200g', item: 'green beans, trimmed' },

      { qty: '1', item: 'zucchini, sliced into rounds' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'lemon, half sliced, half juiced' },

      { qty: '1 tsp', item: 'dried dill' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F and line a tray.',

      'Spread the green beans and zucchini on the tray, toss with 1 tbsp garlic oil, salt, and pepper.',

      'Nestle the salmon fillets on top. Drizzle with remaining oil, lemon juice, and dill. Lay lemon slices over the fish.',

      'Roast for 15–18 minutes until the salmon flakes and the veg is tender.',

      'Serve straight from the tray.',

    ],

    fodmapNote: 'Green beans are low FODMAP at 15 beans (about 75g) per serve. One tray, minimal washing up, and packed with omega-3s.'

  },

  {

    id: 'beef-rice-stirfry',

    name: '20-Minute Beef & Veg Stir-Fry',

    emoji: '🥢',

    category: 'dinner',

    added: '2026-07-12',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick'],

    ingredients: [

      { qty: '250g', item: 'beef strips' },

      { qty: '1', item: 'red capsicum, sliced' },

      { qty: '1', item: 'carrot, julienned' },

      { qty: '1 cup', item: 'bok choy, chopped' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'gluten-free soy sauce (tamari)' },

      { qty: '1 tsp', item: 'grated ginger' },

      { qty: '1 tsp', item: 'maple syrup' },

      { qty: '1.5 cups', item: 'cooked jasmine rice, to serve' },

      { qty: '2 tbsp', item: 'spring onion green tops' },

    ],

    steps: [

      'Heat 1 tbsp garlic oil in a wok over high heat. Sear the beef 2 minutes until browned, then set aside.',

      'Add the remaining oil, capsicum, and carrot. Stir-fry 3 minutes.',

      'Add bok choy and ginger, and cook 1 minute more.',

      'Return the beef, add tamari and maple syrup, and toss to coat.',

      'Serve over jasmine rice topped with spring onion greens.',

    ],

    fodmapNote: 'Red capsicum is low FODMAP at 1/2 a medium pepper per serve. Tamari replaces regular soy sauce to keep it gluten-free.'

  },

  {

    id: 'baked-herb-chicken-thighs',

    name: 'Crispy Herb Chicken with Roast Potatoes',

    emoji: '🍗',

    category: 'dinner',

    added: '2026-07-12',

    time: '45 min',

    serves: 4,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '8', item: 'chicken thighs, skin on' },

      { qty: '500g', item: 'baby potatoes, halved' },

      { qty: '2', item: 'carrots, cut in batons' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'dried mixed herbs' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '1', item: 'lemon, juiced' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F.',

      'Toss potatoes and carrots with 2 tbsp garlic oil, salt, and pepper in a roasting tray.',

      'Rub the chicken with the remaining oil, herbs, paprika, salt, and pepper, and sit it on top of the veg.',

      'Roast for 35–40 minutes until the chicken skin is crisp and cooked through.',

      'Squeeze over lemon juice and serve.',

    ],

    fodmapNote: 'Potatoes and carrots are both low-FODMAP staples with no limit worth worrying about. The garlic-infused oil delivers a roast-dinner flavour without the FODMAPs.'

  },

  {

    id: 'creamy-tomato-gnocchi',

    name: 'Creamy Tomato & Basil Gnocchi',

    emoji: '🍅',

    category: 'dinner',

    added: '2026-07-12',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['vegetarian', 'gluten-free', 'quick'],

    ingredients: [

      { qty: '400g', item: 'gluten-free potato gnocchi' },

      { qty: '1 can (400g)', item: 'crushed tomatoes' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1/4 cup', item: 'lactose-free cream' },

      { qty: '1 handful', item: 'fresh basil, torn' },

      { qty: '2 tbsp', item: 'grated parmesan' },

      { qty: '1/2 tsp', item: 'dried oregano' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Cook the gnocchi in boiling salted water until they float (2–3 minutes). Drain.',

      'Heat the garlic oil in a pan, add crushed tomatoes and oregano, and simmer 5 minutes.',

      'Stir in the lactose-free cream and season.',

      'Fold the gnocchi through the sauce to coat.',

      'Top with parmesan and fresh basil, and serve.',

    ],

    fodmapNote: 'Canned tomatoes are low FODMAP at 1/2 cup per serve. Use lactose-free cream and a hard cheese like parmesan (naturally very low in lactose) to keep it creamy but gentle.'

  },

  {

    id: 'thai-green-curry-chicken',

    name: 'Thai-Style Green Chicken Curry',

    emoji: '🍛',

    category: 'dinner',

    added: '2026-07-12',

    time: '35 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein'],

    ingredients: [

      { qty: '500g', item: 'chicken thigh, diced' },

      { qty: '2 tbsp', item: 'low-FODMAP green curry paste (garlic/onion-free)' },

      { qty: '1 can (400ml)', item: 'coconut milk' },

      { qty: '1', item: 'zucchini, sliced' },

      { qty: '1', item: 'red capsicum, sliced' },

      { qty: '1 cup', item: 'green beans, trimmed' },

      { qty: '1 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tbsp', item: 'fish sauce' },

      { qty: '1 tsp', item: 'brown sugar' },

      { qty: '1 handful', item: 'Thai basil leaves' },

      { qty: '2 cups', item: 'cooked jasmine rice, to serve' },

    ],

    steps: [

      'Heat the garlic oil in a large pan and brown the chicken for 4–5 minutes.',

      'Stir in the curry paste and cook 1 minute until fragrant.',

      'Pour in the coconut milk, fish sauce, and sugar. Simmer 10 minutes.',

      'Add the zucchini, capsicum, and green beans, and cook 6–8 minutes until tender.',

      'Stir through Thai basil and serve over jasmine rice.',

    ],

    fodmapNote: 'Coconut milk is low FODMAP at 1/4 cup per serve, so keep portions moderate. Use a curry paste without onion or garlic — many Thai pastes hide both, so check the label or make your own.'

  },

  {

    id: 'stuffed-capsicums-rice',

    name: 'Beef & Rice Stuffed Capsicums',

    emoji: '🫑',

    category: 'dinner',

    added: '2026-07-12',

    time: '50 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '4', item: 'red capsicums, tops cut and deseeded' },

      { qty: '400g', item: 'beef mince' },

      { qty: '1 cup', item: 'cooked rice' },

      { qty: '1 can (400g)', item: 'crushed tomatoes' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'smoked paprika' },

      { qty: '2 tbsp', item: 'spring onion green tops' },

      { qty: '40g', item: 'grated cheddar' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Preheat oven to 190°C / 375°F.',

      'Heat the garlic oil and brown the mince with cumin and paprika, 5–6 minutes.',

      'Stir in the rice, half the crushed tomatoes, spring onion greens, salt, and pepper.',

      'Spoon the remaining tomatoes into a baking dish and stand the capsicums in it. Fill each with the mince mixture.',

      'Top with cheddar, cover with foil, and bake 30 minutes. Uncover for the last 10 minutes to brown.',

    ],

    fodmapNote: 'One whole red capsicum per serve sits at the top of the low-FODMAP range but is fine as a single-serve main. The green tops of spring onion give an onion flavour safely.'

  },

  {

    id: 'lemon-garlic-prawn-pasta',

    name: 'Lemon Garlic Prawn Pasta',

    emoji: '🍤',

    category: 'dinner',

    added: '2026-07-12',

    time: '20 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick'],

    ingredients: [

      { qty: '180g', item: 'gluten-free spaghetti' },

      { qty: '250g', item: 'raw prawns, peeled' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1', item: 'zucchini, ribboned' },

      { qty: '1', item: 'lemon, zested and juiced' },

      { qty: 'pinch', item: 'chilli flakes' },

      { qty: '2 tbsp', item: 'chopped flat-leaf parsley' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Cook the pasta in salted boiling water until al dente. Reserve a splash of the cooking water, then drain.',

      'Heat the garlic oil in a pan and cook the prawns 2 minutes each side until pink.',

      'Add the zucchini ribbons and chilli flakes, and toss 1 minute.',

      'Add the pasta, lemon zest and juice, and a splash of pasta water. Toss to coat.',

      'Finish with parsley, salt, and pepper. Serve.',

    ],

    fodmapNote: 'Prawns are naturally FODMAP-free. Garlic-infused oil brings the classic garlic-prawn flavour without triggering symptoms — the flavour is oil-soluble, the FODMAPs are not.'

  },

  {

    id: 'eggplant-parmigiana',

    name: 'Baked Eggplant Parmigiana',

    emoji: '🍆',

    category: 'dinner',

    added: '2026-07-12',

    time: '55 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['vegetarian', 'gluten-free', 'higher-fibre'],

    ingredients: [

      { qty: '2', item: 'eggplants, sliced into rounds' },

      { qty: '1 can (400g)', item: 'crushed tomatoes' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'dried oregano' },

      { qty: '125g', item: 'fresh mozzarella, sliced' },

      { qty: '1/3 cup', item: 'grated parmesan' },

      { qty: '1 handful', item: 'fresh basil' },

      { qty: 'to taste', item: 'salt and pepper' },

    ],

    steps: [

      'Preheat oven to 200°C / 400°F. Brush the eggplant slices with garlic oil, season, and roast 20 minutes until soft.',

      'Meanwhile, simmer the crushed tomatoes with oregano and a little garlic oil for 8 minutes to thicken.',

      'Layer eggplant, tomato sauce, and mozzarella in a baking dish, repeating to build up layers.',

      'Finish with parmesan and bake 20 minutes until bubbling and golden.',

      'Scatter with basil and rest 5 minutes before serving.',

    ],

    fodmapNote: 'Eggplant is low FODMAP at 1 cup per serve. Fresh mozzarella and parmesan are both low in lactose, making this a comforting, gut-friendly bake.'

  },

  {

    id: 'pork-fried-rice',

    name: 'Quick Pork Fried Rice',

    emoji: '🍚',

    category: 'dinner',

    added: '2026-07-12',

    time: '18 min',

    serves: 2,

    difficulty: 'easy',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'quick'],

    ingredients: [

      { qty: '2 cups', item: 'cold cooked rice (day-old is best)' },

      { qty: '200g', item: 'pork mince' },

      { qty: '2', item: 'eggs, beaten' },

      { qty: '1', item: 'carrot, finely diced' },

      { qty: '1/2 cup', item: 'canned corn kernels, drained' },

      { qty: '2 tbsp', item: 'garlic-infused olive oil' },

      { qty: '2 tbsp', item: 'gluten-free soy sauce (tamari)' },

      { qty: '1 tsp', item: 'sesame oil' },

      { qty: '3 tbsp', item: 'spring onion green tops' },

    ],

    steps: [

      'Heat 1 tbsp garlic oil in a wok and scramble the eggs. Set aside.',

      'Add the remaining oil and brown the pork mince for 4 minutes.',

      'Add the carrot and corn, and stir-fry 2 minutes.',

      'Tip in the rice and break it up, tossing over high heat for 3 minutes.',

      'Return the eggs, add tamari and sesame oil, and finish with spring onion greens.',

    ],

    fodmapNote: 'Day-old rice fries best and stays low FODMAP. Keep canned corn to 1/3 cup per serve — a small amount adds sweetness without tipping over.'

  },

  {

    id: 'moroccan-chicken-quinoa',

    name: 'Moroccan-Spiced Chicken with Quinoa',

    emoji: '🍲',

    category: 'dinner',

    added: '2026-07-12',

    time: '40 min',

    serves: 4,

    difficulty: 'medium',

    tags: ['gluten-free', 'dairy-free', 'high-protein', 'higher-fibre'],

    ingredients: [

      { qty: '600g', item: 'chicken thigh, diced' },

      { qty: '1 cup', item: 'quinoa, rinsed' },

      { qty: '2 cups', item: 'low-FODMAP chicken stock' },

      { qty: '1', item: 'carrot, diced' },

      { qty: '1', item: 'zucchini, diced' },

      { qty: '3 tbsp', item: 'garlic-infused olive oil' },

      { qty: '1 tsp', item: 'ground cumin' },

      { qty: '1 tsp', item: 'ground coriander' },

      { qty: '1/2 tsp', item: 'ground cinnamon' },

      { qty: '1/2 tsp', item: 'smoked paprika' },

      { qty: '2 tbsp', item: 'chopped coriander leaves' },

      { qty: '2 tbsp', item: 'flaked almonds, toasted' },

    ],

    steps: [

      'Toss the chicken with cumin, coriander, cinnamon, paprika, salt, and pepper.',

      'Heat 2 tbsp garlic oil in a large pan and brown the chicken 5–6 minutes. Set aside.',

      'Add the remaining oil, carrot, and zucchini, and cook 3 minutes.',

      'Stir in the quinoa and stock, return the chicken, cover, and simmer 15 minutes until the quinoa is fluffy and the liquid absorbed.',

      'Scatter with coriander and toasted almonds, and serve.',

    ],

    fodmapNote: 'Quinoa is low FODMAP at 1 cup cooked and adds protein and fibre. Make sure your stock is onion- and garlic-free — most standard stocks are not.'

  },


];

