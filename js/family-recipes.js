// ─────────────────────────────────────────────────────────────
//  FAMILY RECIPES  (imported from Kandy's OneNote "My Cookbook 2026")
//
//  These are everyday family recipes, NOT low-FODMAP. They carry the
//  'family' tag so they sit alongside (not mixed into) the FODMAP recipes
//  and show under the 🍽️ Family filter.
//
//  • Hand-typed recipes are imported in full.
//  • Web-clipped recipes are saved as link cards (title + source link),
//    since the original pages can't be fetched from this environment.
//
//  This is the first sample batch — more sections to follow.
// ─────────────────────────────────────────────────────────────

const FAMILY_RECIPES = [

  // ── Hand-typed family recipes (full) ──────────────────────
  {
    id: 'fam-cornbread',
    name: 'Cornbread',
    emoji: '🍞',
    category: 'dinner',
    time: '40 min',
    serves: 9,
    difficulty: 'easy',
    tags: ['family', 'vegetarian'],
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
    tags: ['family', 'vegetarian', 'gluten-free'],
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
    tags: ['family', 'vegetarian', 'no-cook'],
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
    tags: ['family', 'vegetarian', 'gluten-free'],
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

  // ── Web-clipped "MAKE AGAINS" favorites (link cards) ──────
  {
    id: 'fam-cajun-sausage-pasta',
    name: 'One Pot Creamy Cajun Sausage Pasta',
    emoji: '🍝',
    category: 'dinner',
    time: '',
    serves: 4,
    difficulty: 'easy',
    tags: ['family'],
    source: 'https://thestayathomechef.com/creamy-cajun-sausage-pasta/',
    ingredients: [
      { qty: '', item: 'See the original recipe for the full ingredient list →' },
    ],
    steps: [
      'This is a saved web recipe from your MAKE AGAINS section. Tap “View original recipe” below for the full ingredients and method.',
    ],
    fodmapNote: 'Saved from The Stay At Home Chef (your “MAKE AGAINS” favorites).',
  },

  {
    id: 'fam-swedish-meatballs',
    name: 'Swedish Meatballs',
    emoji: '🧆',
    category: 'dinner',
    time: '',
    serves: 4,
    difficulty: 'medium',
    tags: ['family'],
    source: 'https://www.thecookierookie.com/swedish-meatballs/',
    ingredients: [
      { qty: '', item: 'See the original recipe for the full ingredient list →' },
    ],
    steps: [
      'This is a saved web recipe. Tap “View original recipe” below for the full ingredients and method.',
    ],
    fodmapNote: 'Saved from The Cookie Rookie.',
  },

  {
    id: 'fam-oreo-cheesecake',
    name: 'Oreo Cheesecake',
    emoji: '🍰',
    category: 'desserts',
    time: '',
    serves: 12,
    difficulty: 'medium',
    tags: ['family'],
    source: 'https://www.southernliving.com/oreo-cheesecake-8425253',
    ingredients: [
      { qty: '', item: 'See the original recipe for the full ingredient list →' },
    ],
    steps: [
      'This is a saved web recipe. Tap “View original recipe” below for the full ingredients and method.',
    ],
    fodmapNote: 'Saved from Southern Living.',
  },

];
