// ─────────────────────────────────────────────────────────────
//  FAMILY RECIPES  (imported from Kandy's OneNote "My Cookbook 2026")
//
//  Everyday family recipes, NOT low-FODMAP. They carry the 'family' tag so
//  they sit alongside (not mixed into) the FODMAP recipes and show under the
//  🍽️ Family filter. Each recipe is also tagged with the OneNote SECTION
//  (tab) it came from, so you can filter/search by section.
//
//  • Hand-typed recipes are imported in full.
//  • Web-clipped recipes are saved as link cards (title + source link),
//    since the original pages can't be fetched from this environment.
// ─────────────────────────────────────────────────────────────

const FAMILY_RECIPES = [

  // ── Hand-typed recipes — Holidays › Thanksgiving (full) ────
  {
    id: 'fam-cornbread',
    name: 'Cornbread',
    emoji: '🍞',
    category: 'dinner',
    time: '40 min',
    serves: 9,
    difficulty: 'easy',
    tags: ['family', 'thanksgiving', 'vegetarian'],
    ingredients: [
      { qty: '1 cup',  item: 'flour' },
      { qty: '1 cup',  item: 'cornmeal' },
      { qty: '1 cup',  item: 'sugar' },
      { qty: '3 tsp',  item: 'baking powder' },
      { qty: '1 cup',  item: 'milk' },
      { qty: '1',      item: 'egg' },
    ],
    steps: [
      'Sift the dry ingredients together.',
      'Stir in the liquids until just combined.',
      'Pour into a greased 9x9 pan.',
      'Bake at 350°F for 30–40 minutes, until golden and a toothpick comes out clean.',
    ],
    fodmapNote: 'Family recipe from the Holidays › Thanksgiving section.',
  },

  {
    id: 'fam-candied-yams',
    name: 'Candied Yams',
    emoji: '🍠',
    category: 'dinner',
    time: '40 min',
    serves: 6,
    difficulty: 'easy',
    tags: ['family', 'thanksgiving', 'vegetarian', 'gluten-free'],
    ingredients: [
      { qty: '2 cans', item: 'yams, drained' },
      { qty: 'to taste', item: 'brown sugar' },
      { qty: '2 tbsp', item: 'butter' },
      { qty: '1 bag',  item: 'marshmallows' },
    ],
    steps: [
      'Drain the yams and arrange in a single layer in a casserole dish.',
      'Melt the butter and sprinkle brown sugar over the yams.',
      'Bake at 350°F for 30 minutes.',
      'Top with marshmallows and return to the oven until golden and melted.',
    ],
    fodmapNote: 'Family recipe from the Holidays › Thanksgiving section.',
  },

  {
    id: 'fam-chocolate-pie',
    name: 'Chocolate Pie',
    emoji: '🥧',
    category: 'desserts',
    time: '10 min + chill',
    serves: 8,
    difficulty: 'easy',
    tags: ['family', 'thanksgiving', 'vegetarian', 'no-cook'],
    ingredients: [
      { qty: '1 box', item: 'instant chocolate pudding mix' },
      { qty: 'per package', item: 'milk' },
      { qty: '1',     item: 'prepared pie crust' },
      { qty: '1 tub', item: 'Cool Whip' },
    ],
    steps: [
      'Whisk the instant pudding mix with milk per the package directions.',
      'Pour into the pie crust.',
      'Chill until set.',
      'Top with Cool Whip before serving.',
    ],
    fodmapNote: 'Family recipe from the Holidays › Thanksgiving section.',
  },

  {
    id: 'fam-broccoli-cheese-rice',
    name: 'Broccoli, Cheese & Rice',
    emoji: '🥦',
    category: 'dinner',
    time: '25 min',
    serves: 4,
    difficulty: 'easy',
    tags: ['family', 'thanksgiving', 'vegetarian', 'gluten-free'],
    ingredients: [
      { qty: '1 bag', item: 'broccoli' },
      { qty: 'to taste', item: 'Velveeta' },
      { qty: '1 cup (uncooked)', item: 'rice' },
    ],
    steps: [
      'Boil the broccoli until tender.',
      'Cube the Velveeta so it melts easily.',
      'Cook the rice.',
      'Add everything together and stir to your desired consistency.',
    ],
    fodmapNote: 'Family recipe from the Holidays › Thanksgiving section.',
  },

];

// Build a "link card" for a saved web recipe. Each card carries the 'family'
// tag plus the OneNote section (tab) it lives in, and preserves Kandy's notes.
function familyLinkCard(o) {
  const section = o.section || '';
  const tags = ['family'];
  if (section) tags.push(section);
  return {
    id: o.id,
    name: o.name,
    emoji: o.emoji || '🍽️',
    category: o.category || 'dinner',
    time: '',
    serves: o.serves || 4,
    difficulty: o.difficulty || 'easy',
    tags,
    source: o.source,
    ingredients: [{
      qty: '',
      item: o.source ? 'See the original recipe for the full ingredient list →'
                     : 'The full recipe lives in your OneNote cookbook.',
    }],
    steps: [
      o.source ? 'Saved web recipe — tap “View original recipe” below for the full ingredients and method.'
               : 'Saved in your OneNote cookbook — the full recipe lives there.',
    ],
    fodmapNote: o.note
      ? `From your “${section}” section. Your note: “${o.note}”`
      : (section ? `Saved from your “${section}” section.` : 'Saved from your cookbook.'),
  };
}

FAMILY_RECIPES.push(

  // ── Previously saved clips (now tagged with their section) ──
  familyLinkCard({ id: 'fam-cajun-sausage-pasta', name: 'One Pot Creamy Cajun Sausage Pasta', emoji: '🍝', category: 'dinner', section: 'make agains', source: 'https://thestayathomechef.com/creamy-cajun-sausage-pasta/' }),
  familyLinkCard({ id: 'fam-swedish-meatballs',   name: 'Swedish Meatballs',                  emoji: '🧆', category: 'dinner', difficulty: 'medium', section: 'quick notes', source: 'https://www.thecookierookie.com/swedish-meatballs/' }),
  familyLinkCard({ id: 'fam-oreo-cheesecake',     name: 'Oreo Cheesecake',                    emoji: '🍰', category: 'desserts', serves: 12, difficulty: 'medium', section: 'to be filed', source: 'https://www.southernliving.com/oreo-cheesecake-8425253' }),

  // ── MAKE AGAINS — your tried-and-true favorites ────────────
  familyLinkCard({ id: 'fam-green-chile-chicken-enchiladas', name: 'Green Chile Chicken Enchiladas', emoji: '🌶️', section: 'make agains', source: 'https://keviniscooking.com/green-chile-chicken-enchiladas/', note: 'Good — figure out how to keep the tortillas from getting soggy' }),
  familyLinkCard({ id: 'fam-greek-salad-dressing', name: 'Greek Salad Dressing (for pasta)', emoji: '🥗', section: 'make agains', source: 'https://www.spendwithpennies.com/greek-salad-dressing/', note: 'My fave Greek salad dressing for pasta' }),
  familyLinkCard({ id: 'fam-chili-mac', name: 'Chili Mac', emoji: '🧀', section: 'make agains', source: 'https://www.gonnawantseconds.com/one-skillet-cheesy-chili-mac/' }),
  familyLinkCard({ id: 'fam-seafood-paella', name: 'Easy Seafood Paella', emoji: '🥘', section: 'make agains', source: 'https://www.themediterraneandish.com/easy-seafood-paella-recipe/' }),
  familyLinkCard({ id: 'fam-chicken-enchilada-soup', name: "Copycat Chili's Chicken Enchilada Soup", emoji: '🍲', section: 'make agains', source: 'https://easy.recipe23.online/copycat-chilis-chicken-enchilada-soup/' }),
  familyLinkCard({ id: 'fam-naan', name: 'Naan (chewy & fluffy)', emoji: '🫓', section: 'make agains', source: 'https://www.recipetineats.com/naan-recipe/' }),
  familyLinkCard({ id: 'fam-instant-pot-chili', name: 'Instant Pot Chili', emoji: '🌶️', section: 'make agains', source: 'https://thestayathomechef.com/instant-pot-chili/', note: 'Super good' }),
  familyLinkCard({ id: 'fam-natchitoches-meat-pies', name: 'Natchitoches Meat Pies', emoji: '🥟', section: 'make agains', source: 'https://www.emerils.com/128002/natchitoches-meat-pies', note: 'Good' }),
  familyLinkCard({ id: 'fam-greek-chicken-orzo', name: 'Greek Baked Chicken Orzo', emoji: '🍗', section: 'make agains', source: 'https://www.themediterraneandish.com/greek-baked-chicken-orzo-recipe/' }),
  familyLinkCard({ id: 'fam-sun-dried-tomato-chicken', name: 'Sun-Dried Tomato Chicken', emoji: '🍗', section: 'make agains', source: 'https://www.themediterraneandish.com/sun-dried-tomato-chicken/' }),
  familyLinkCard({ id: 'fam-creole-gumbo', name: 'New Orleans Creole Gumbo', emoji: '🍤', section: 'make agains', source: 'https://www.allrecipes.com/recipe/216888/good-new-orleans-creole-gumbo/', note: 'Good' }),
  familyLinkCard({ id: 'fam-air-fryer-greek-chicken', name: 'Air Fryer Greek Chicken & Veggies', emoji: '🍗', section: 'make agains', source: 'https://thestayathomechef.com/air-fryer-greek-chicken/', note: 'LOVED it!' }),
  familyLinkCard({ id: 'fam-chicken-lazone', name: "Chef John's Chicken Lazone", emoji: '🍗', section: 'make agains', source: 'https://www.allrecipes.com/chicken-lazone-recipe-8621050', note: 'Five stars! Beat out the chicken, double the sauce using broth, double the seasoning & green onion, and cook the sauce down before adding' }),
  familyLinkCard({ id: 'fam-fiesta-chili', name: 'Slow Cooker Fiesta Chili Supper', emoji: '🌶️', section: 'make agains', source: 'https://skinnyms.com/slow-cooker-fiesta-chili-supper-recipe/' }),
  familyLinkCard({ id: 'fam-taco-casserole', name: 'Tasty Taco Casserole', emoji: '🌮', section: 'make agains', source: 'https://thestayathomechef.com/taco-casserole/' }),
  familyLinkCard({ id: 'fam-tortellini-pasta-salad', name: 'Tortellini Pasta Salad', emoji: '🥗', category: 'lunch', section: 'make agains', source: 'https://thestayathomechef.com/tortellini-pasta-salad/' }),
  familyLinkCard({ id: 'fam-black-bean-soup', name: 'Easy Black Bean Soup', emoji: '🍲', section: 'make agains', source: 'https://thestayathomechef.com/black-bean-soup/', note: 'Good — added pressure-cooked chicken breasts' }),

  // MAKE AGAINS favorites typed/annotated without a clean source link
  familyLinkCard({ id: 'fam-white-chicken-chili', name: 'Creamy White Chicken Chili', emoji: '🍲', section: 'make agains', note: 'I like this one — add a whole breast to cook in it' }),
  familyLinkCard({ id: 'fam-chicken-stew', name: 'Chicken Stew', emoji: '🍲', section: 'make agains', note: 'VERY GOOD' }),
  familyLinkCard({ id: 'fam-three-bean-power-soup', name: 'Three Bean Power Soup', emoji: '🍲', section: 'make agains', note: 'SUPER GOOD — high-protein with lentils, chickpeas & black beans' }),
  familyLinkCard({ id: 'fam-baked-ziti-turkey', name: 'Best Baked Ziti with Ground Turkey', emoji: '🍝', section: 'make agains' }),
  familyLinkCard({ id: 'fam-goat-cheese-pasta', name: 'Goat Cheese Pasta (one pot)', emoji: '🧀', section: 'make agains' }),

);
