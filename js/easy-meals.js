// ─────────────────────────────────────────────────────────────
//  EASY MEALS — dinners everyone in the house will eat.
//  Plain base (no visible veggies or beans) so his mom and the kids eat it;
//  flavor, veggies and extra protein go on our plates at the table.
//  Shown under the 😌 Easy Meals filter (tag 'easy-meals').
//  Nutrition is an estimate per serving of the shared dish.
// ─────────────────────────────────────────────────────────────

const EASY_MEALS = [
  {
    id: 'kandy-easy-spaghetti', name: 'Spaghetti with Smooth Meat Sauce', emoji: '🍝', category: 'dinner',
    time: '30 min', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'freezer-friendly', 'high-protein'],
    ingredients: [
      { qty: '1 lb', item: 'lean ground beef or turkey' },
      { qty: '1 (24 oz) jar', item: 'marinara sauce' },
      { qty: '1 small', item: 'zucchini + 1 carrot, grated (blended smooth into the sauce)' },
      { qty: '1 lb', item: 'protein pasta (or half regular, half protein)' },
      { qty: '', item: 'parmesan, to serve' },
    ],
    steps: [
      'Cook the pasta.',
      'Brown the meat. Blend the marinara with the grated zucchini and carrot until completely smooth, then add it to the meat and simmer 10 minutes.',
      'Toss with the pasta. Parmesan on top.',
    ],
    notes: 'Her plate: as is. My plate: extra meat sauce + side salad. Make double sauce and freeze half.',
    nutrition: { cal: 520, protein: 34, fiber: 6 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-chicken-tenders', name: 'Air-Fryer Chicken Tenders + Potato Wedges', emoji: '🍗', category: 'dinner',
    time: '30 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'air-fryer', 'high-protein'],
    ingredients: [
      { qty: '1.5 lb', item: 'chicken breast, cut into strips' },
      { qty: '2', item: 'eggs, beaten' },
      { qty: '1 cup', item: 'panko + 1/2 cup grated parmesan' },
      { qty: '', item: 'salt, paprika' },
      { qty: '1.5 lb', item: 'potatoes cut in wedges (or frozen wedges / sweet potato fries)' },
    ],
    steps: [
      'Dip the chicken in egg, then the panko-parmesan mix.',
      'Air-fry the wedges first (400°F, 15–18 min), then the tenders (400°F, 10–12 min, flip halfway).',
      'Serve with ketchup and ranch.',
    ],
    notes: 'Her plate: as is. My plate: 1 extra tender + roasted broccoli or bagged salad.',
    nutrition: { cal: 480, protein: 42, fiber: 4 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-chicken-sandwiches', name: 'Chicken Sandwiches + Oven Fries', emoji: '🥪', category: 'dinner',
    time: '25 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'air-fryer'],
    ingredients: [
      { qty: '4', item: 'chicken breasts (thin-sliced) or frozen grilled chicken' },
      { qty: '4', item: 'brioche or potato buns' },
      { qty: '4 slices', item: 'cheese' },
      { qty: '', item: 'pickles, lettuce, mayo' },
      { qty: '1 bag', item: 'frozen fries' },
    ],
    steps: [
      'Season and air-fry or grill the chicken (about 10–14 min).',
      'Bake the fries.',
      'Build sandwiches. Hers: chicken + cheese + bun only.',
    ],
    notes: 'My plate: add lettuce, tomato, pickles, and a side salad instead of fries.',
    nutrition: { cal: 560, protein: 38, fiber: 3 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-chicken-skewers', name: 'Chicken Skewers + Rice', emoji: '🍢', category: 'dinner',
    time: '30 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'gluten-free', 'high-protein'],
    ingredients: [
      { qty: '1.5 lb', item: 'chicken breast, in chunks' },
      { qty: '2 tbsp', item: 'olive oil + lemon juice' },
      { qty: '', item: 'salt, pepper' },
      { qty: '2 cups', item: 'jasmine rice (or microwave rice), cooked in bone broth' },
    ],
    steps: [
      'Toss the chicken with oil, lemon and salt. Keep hers plain.',
      'Thread on skewers. Grill, or bake at 425°F for 15–18 min.',
      'Serve over rice.',
    ],
    notes: 'Bone broth in the rice = hidden protein. My plate: veggie skewers or salad, and a sauce (tzatziki or chili crisp).',
    nutrition: { cal: 470, protein: 40, fiber: 1 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-taquitos', name: 'Baked Chicken & Cheese Taquitos', emoji: '🌮', category: 'dinner',
    time: '30 min', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'freezer-friendly'],
    ingredients: [
      { qty: '1', item: 'rotisserie chicken, shredded' },
      { qty: '4 oz', item: 'cream cheese, softened' },
      { qty: '1.5 cups', item: 'shredded cheese' },
      { qty: '18–24', item: 'small flour tortillas' },
      { qty: '', item: 'cooking spray' },
    ],
    steps: [
      'Mix the chicken, cream cheese and shredded cheese.',
      'Roll a spoonful tightly in each tortilla, seam side down on a sheet pan.',
      'Spray and bake at 425°F for 15–18 min until crisp.',
    ],
    notes: 'Make 30, freeze 20 (bake from frozen at 400°F, about 20 min). My plate: Greek yogurt instead of sour cream, salsa, avocado.',
    nutrition: { cal: 430, protein: 30, fiber: 1 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-taco-soup', name: 'Chicken Taco Soup (no beans)', emoji: '🍲', category: 'dinner',
    time: '10 min + slow cooker', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'slow cooker', 'freezer-friendly', 'gluten-free'],
    ingredients: [
      { qty: '1.5 lb', item: 'chicken breast' },
      { qty: '4 cups', item: 'bone broth' },
      { qty: '1 can', item: 'corn, drained' },
      { qty: '1 can', item: 'diced tomatoes, blended smooth' },
      { qty: '1 packet', item: 'mild taco seasoning' },
      { qty: '', item: 'toppings: cheese, Greek yogurt, crushed tortilla chips' },
    ],
    steps: [
      'Dump everything in the slow cooker. Low 6–7 hr or high 3–4 hr.',
      'Shred the chicken and stir it back in.',
      'Toppings bar at the table.',
    ],
    notes: 'Beans, peppers + avocado go in a separate bowl for us only. Freeze half.',
    nutrition: { cal: 290, protein: 34, fiber: 3 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-white-chicken-chili', name: 'Creamy White Chicken Chili (no beans)', emoji: '🤍', category: 'dinner',
    time: '10 min + slow cooker', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'slow cooker', 'freezer-friendly', 'gluten-free', 'high-protein'],
    ingredients: [
      { qty: '1.5 lb', item: 'chicken breast' },
      { qty: '4 cups', item: 'bone broth' },
      { qty: '1 (4 oz) can', item: 'mild green chiles, blended smooth' },
      { qty: '1 tsp each', item: 'cumin, salt' },
      { qty: '8 oz', item: 'cream cheese' },
      { qty: '1/2 cup', item: 'cottage cheese, blended smooth' },
      { qty: '1 cup', item: 'shredded Monterey Jack' },
    ],
    steps: [
      'Slow cook the chicken, broth, chiles and spices. Low 6 hr or high 3 hr.',
      'Shred the chicken. Stir in the cream cheese, blended cottage cheese and shredded cheese until creamy.',
    ],
    notes: 'Blended cottage cheese = hidden protein. Heat white beans on the side for our bowls. Freeze half.',
    nutrition: { cal: 390, protein: 40, fiber: 1 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-chicken-noodle-soup', name: 'Quick Chicken Noodle Soup', emoji: '🍜', category: 'dinner',
    time: '25 min', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'quick'],
    ingredients: [
      { qty: '8 cups', item: 'bone broth' },
      { qty: '1', item: 'rotisserie chicken, shredded' },
      { qty: '8 oz', item: 'egg noodles' },
      { qty: '', item: 'salt, pepper, a little butter' },
      { qty: '', item: 'carrots + celery (small separate pot, for our bowls)' },
    ],
    steps: [
      'Bring the broth to a boil. Add the noodles and cook until tender.',
      'Stir in the chicken, season, and add a little butter.',
      'Cook the carrots and celery separately and add them to our bowls only.',
    ],
    notes: 'Bone broth instead of regular broth = about 10x the protein.',
    nutrition: { cal: 340, protein: 33, fiber: 1 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-mac-and-cheese-chicken', name: 'Protein Mac & Cheese with Chicken', emoji: '🧀', category: 'dinner',
    time: '25 min', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'high-protein', 'vegetarian-option'],
    ingredients: [
      { qty: '1 lb', item: 'protein pasta (elbows or shells)' },
      { qty: '1 cup', item: 'milk' },
      { qty: '1 cup', item: 'cottage cheese, blended smooth' },
      { qty: '2 cups', item: 'shredded cheddar' },
      { qty: '2 oz', item: 'cream cheese' },
      { qty: '1/2 cup', item: 'butternut squash or cauliflower purée (hidden veggie)' },
      { qty: '2 cups', item: 'diced rotisserie chicken (stir in, or serve on the side)' },
    ],
    steps: [
      'Cook the pasta.',
      'Warm the milk, then stir in the blended cottage cheese, cheddar, cream cheese and purée until smooth. Salt to taste.',
      'Toss with the pasta. Stir in the chicken, or serve it on the side if she picks it out.',
    ],
    notes: 'The orange purée disappears into the cheese sauce. Our plates: add broccoli + hot sauce.',
    nutrition: { cal: 560, protein: 44, fiber: 5 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-butter-parm-pasta', name: 'Butter-Parmesan Pasta + Grilled Chicken', emoji: '🧈', category: 'dinner',
    time: '20 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'quick'],
    ingredients: [
      { qty: '12 oz', item: 'protein pasta' },
      { qty: '3 tbsp', item: 'butter' },
      { qty: '3/4 cup', item: 'grated parmesan' },
      { qty: '1.5 lb', item: 'chicken breast, grilled or pan-seared' },
    ],
    steps: [
      'Cook the pasta and save 1/2 cup of the pasta water.',
      'Toss with the butter, parmesan and a splash of pasta water until glossy.',
      'Slice the chicken and serve it on top or on the side.',
    ],
    notes: 'The plainest dinner in the house. My plate: pesto + roasted veggies.',
    nutrition: { cal: 590, protein: 52, fiber: 4 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-sheet-pan-salmon', name: 'Sheet-Pan Salmon + Potatoes', emoji: '🐟', category: 'dinner',
    time: '30 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'gluten-free', 'high-protein'],
    ingredients: [
      { qty: '4 (6 oz)', item: 'salmon fillets' },
      { qty: '1.5 lb', item: 'baby potatoes, halved' },
      { qty: '2 tbsp', item: 'melted butter + 1 lemon' },
      { qty: '', item: 'salt, pepper' },
      { qty: '', item: 'green beans (on a separate part of the pan, for us)' },
    ],
    steps: [
      'Roast the potatoes with butter and salt at 400°F for 10 min.',
      'Add the salmon (and green beans), brush with butter and lemon, and roast 12–15 min more.',
    ],
    notes: 'My plate: a full 6 oz fillet = about 35 g protein.',
    nutrition: { cal: 480, protein: 36, fiber: 3 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-quesadillas', name: 'Sheet-Pan Chicken Quesadillas', emoji: '🫓', category: 'dinner',
    time: '20 min', serves: 6, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'quick'],
    ingredients: [
      { qty: '1', item: 'rotisserie chicken, shredded' },
      { qty: '3 cups', item: 'shredded cheese' },
      { qty: '6', item: 'large flour tortillas' },
      { qty: '', item: 'salsa, sour cream or Greek yogurt, guac' },
    ],
    steps: [
      'Fill half of each tortilla with chicken and cheese, then fold.',
      'Bake on a sheet pan at 425°F for 6 min, flip, and bake 4–5 min more.',
      'Cut into wedges.',
    ],
    notes: 'Hers: chicken + cheese only. Mine: add peppers, onions or beans + extra chicken.',
    nutrition: { cal: 520, protein: 36, fiber: 2 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-breakfast-for-dinner', name: 'Breakfast for Dinner', emoji: '🥞', category: 'dinner',
    time: '25 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family', 'quick', 'high-protein'],
    ingredients: [
      { qty: '2 cups', item: 'protein pancake mix (Kodiak)' },
      { qty: '8', item: 'eggs, scrambled' },
      { qty: '1 pack', item: 'turkey sausage links' },
      { qty: '', item: 'fruit, syrup, butter' },
    ],
    steps: [
      'Make the pancakes from the mix.',
      'Brown the sausage and scramble the eggs.',
      'Serve with fruit and syrup.',
    ],
    notes: 'She gets something sweet. Protein mix + eggs + sausage keeps it about 35 g for me.',
    nutrition: { cal: 560, protein: 38, fiber: 4 }, added: '2026-11-04', isCustom: true,
  },
  {
    id: 'kandy-easy-burgers', name: 'Cheeseburgers + Oven Fries', emoji: '🍔', category: 'dinner',
    time: '25 min', serves: 4, difficulty: 'easy',
    tags: ['easy-meals', 'family'],
    ingredients: [
      { qty: '1.5 lb', item: 'lean ground beef or turkey' },
      { qty: '4 slices', item: 'cheese' },
      { qty: '4', item: 'buns' },
      { qty: '', item: 'ketchup, mustard, pickles' },
      { qty: '1 bag', item: 'frozen fries' },
    ],
    steps: [
      'Form 4–6 patties and salt them.',
      'Grill or pan-cook 4–5 min per side, adding the cheese at the end.',
      'Bake the fries. Build the burgers.',
    ],
    notes: 'Easy one to hand to the husband. Make extra patties and freeze them. My plate: lettuce wrap or side salad.',
    nutrition: { cal: 640, protein: 40, fiber: 3 }, added: '2026-11-04', isCustom: true,
  },
];

// Family recipes (not low-FODMAP as written), so they live in FAMILY_RECIPES,
// not KANDY_RECIPES (which the app treats as low-FODMAP originals).
(function registerEasyMeals() {
  const GUT_NOTE = 'Family-friendly, not low-FODMAP as written (marinara, taco seasoning, chiles and some breads have onion/garlic or wheat). For my plate: use garlic-infused oil, plain seasonings, lactose-free dairy, and go light on beans.';
  EASY_MEALS.forEach(r => { if (!r.fodmapNote) r.fodmapNote = GUT_NOTE; });
  if (typeof FAMILY_RECIPES !== 'undefined') {
    const seen = new Set(FAMILY_RECIPES.map(r => r.id));
    EASY_MEALS.forEach(r => { if (!seen.has(r.id)) { FAMILY_RECIPES.push(r); seen.add(r.id); } });
  }
  if (typeof RECIPE_NUTRITION !== 'undefined') EASY_MEALS.forEach(r => { RECIPE_NUTRITION[r.id] = r.nutrition; });
})();
