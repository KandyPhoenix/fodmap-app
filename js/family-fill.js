// ─────────────────────────────────────────────────────────────
//  FAMILY RECIPES — fill-ins for cookbook cards that never populated
//
//  The OneNote import left two kinds of broken cards behind:
//
//   1. Cards with real ingredients/steps nowhere to be found — the page
//      couldn't be fetched and no generated fallback existed — so the card
//      rendered as "See the original recipe for the full ingredient list →".
//      FAMILY_FILL supplies the missing content, keyed by recipe id. It is
//      consulted FIRST by familyLinkCard(), ahead of the fetched and
//      generated fallbacks, and the original source link is always kept.
//
//   2. Pages swept in from the catch-all OneNote tabs that aren't food at
//      all (insurance quotes, horoscopes, Kodi add-ons). Those can never
//      populate as recipes, so FAMILY_DROP removes them from the app.
//
//  Entries may override name/emoji/category when the saved page title was a
//  roundup ("Top 10 Muffin Recipes") rather than a dish — the card then holds
//  one cookable recipe and `note` explains where it came from.
// ─────────────────────────────────────────────────────────────

const FAMILY_FILL = {

  // ══ MAKE AGAINS — Kandy's annotated favorites (no source link) ══

  'fam-three-bean-power-soup': {
    time: '45 min',
    serves: 8,
    ingredients: [
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '1 large', item: 'onion, diced' },
      { qty: '3', item: 'carrots, diced' },
      { qty: '3 stalks', item: 'celery, diced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '2 tbsp', item: 'tomato paste' },
      { qty: '2 tsp', item: 'cumin' },
      { qty: '2 tsp', item: 'smoked paprika' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '1/4 tsp', item: 'red pepper flakes' },
      { qty: '1 cup', item: 'brown or green lentils, rinsed' },
      { qty: '1 (15 oz) can', item: 'chickpeas, drained and rinsed' },
      { qty: '1 (15 oz) can', item: 'black beans, drained and rinsed' },
      { qty: '1 (28 oz) can', item: 'crushed tomatoes' },
      { qty: '8 cups', item: 'chicken or vegetable broth' },
      { qty: '2', item: 'bay leaves' },
      { qty: '4 cups', item: 'baby spinach or chopped kale' },
      { qty: '2 tbsp', item: 'red wine vinegar or lemon juice' },
      { qty: 'to taste', item: 'salt and black pepper' },
      { qty: 'for serving', item: 'Parmesan and crusty bread' },
    ],
    steps: [
      'Heat the olive oil in a large Dutch oven over medium. Add the onion, carrots and celery with a big pinch of salt and cook 8–10 minutes until softened and starting to colour.',
      'Add the garlic, tomato paste, cumin, smoked paprika, oregano and red pepper flakes. Stir constantly for 1–2 minutes until the paste darkens and everything smells toasty — this is where the depth comes from.',
      'Add the lentils, crushed tomatoes, broth and bay leaves. Bring to a boil, then reduce to a simmer, partially covered, for 25 minutes until the lentils are tender.',
      'Stir in the chickpeas and black beans and simmer 10 more minutes so they warm through and the broth thickens. Add more broth if you like it soupier.',
      'Fish out the bay leaves. Stir in the spinach and let it wilt, about 2 minutes.',
      'Finish with the vinegar and season generously with salt and pepper — the acid at the end is what makes it taste finished. Serve with grated Parmesan and bread.',
    ],
    note: 'Three beans on purpose: lentils go in dry and thicken the pot, chickpeas hold their shape, black beans bring the colour. Roughly 20 g protein a bowl. Freezes well — it thickens overnight, so loosen with broth when reheating.',
  },

  'fam-white-chicken-chili': {
    time: '40 min',
    serves: 6,
    ingredients: [
      { qty: '1 tbsp', item: 'olive oil' },
      { qty: '1', item: 'onion, diced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '1 lb', item: 'boneless skinless chicken breast (leave one whole to cook in the pot)' },
      { qty: '2 (4 oz) cans', item: 'diced green chiles' },
      { qty: '2 tsp', item: 'cumin' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '1/2 tsp', item: 'coriander' },
      { qty: '1/4 tsp', item: 'cayenne' },
      { qty: '2 (15 oz) cans', item: 'great northern or cannellini beans, drained' },
      { qty: '4 cups', item: 'chicken broth' },
      { qty: '1 cup', item: 'frozen or canned corn' },
      { qty: '4 oz', item: 'cream cheese, cubed and softened' },
      { qty: '1/2 cup', item: 'sour cream' },
      { qty: '1', item: 'lime, juiced' },
      { qty: 'to taste', item: 'salt and pepper' },
      { qty: 'for serving', item: 'cilantro, Monterey Jack, tortilla chips, avocado' },
    ],
    steps: [
      'Heat the oil in a large pot over medium. Cook the onion until soft, 5 minutes, then add the garlic, green chiles, cumin, oregano, coriander and cayenne and cook 1 minute more.',
      'Add the whole chicken breast, the beans and the broth. Bring to a boil, then simmer covered 20 minutes until the chicken is cooked through (165°F).',
      'Lift the chicken out, shred it with two forks, and return it to the pot along with the corn.',
      'Mash about a cup of the beans against the side of the pot to thicken the chili.',
      'Turn the heat to low and stir in the cream cheese until fully melted, then the sour cream. Do not let it boil after this point or it can split.',
      'Finish with lime juice, salt and pepper. Serve with cilantro, cheese, chips and avocado.',
    ],
    note: 'Cooking a whole breast right in the pot (rather than adding pre-cooked chicken) keeps it juicy and flavours the broth.',
  },

  'fam-chicken-stew': {
    time: '1 hr 10 min',
    serves: 6,
    ingredients: [
      { qty: '2 lbs', item: 'boneless skinless chicken thighs, cut into large chunks' },
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '3 tbsp', item: 'butter' },
      { qty: '1/3 cup', item: 'flour' },
      { qty: '1', item: 'onion, diced' },
      { qty: '3', item: 'carrots, cut into thick coins' },
      { qty: '3 stalks', item: 'celery, sliced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '1.5 lbs', item: 'baby potatoes, halved' },
      { qty: '5 cups', item: 'chicken broth' },
      { qty: '1 tbsp', item: 'Worcestershire sauce' },
      { qty: '2 tsp', item: 'fresh thyme (or 1 tsp dried)' },
      { qty: '1', item: 'bay leaf' },
      { qty: '1 cup', item: 'frozen peas' },
      { qty: '1/2 cup', item: 'heavy cream (optional)' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Pat the chicken dry and season well with salt and pepper. Brown it in the olive oil over medium-high in a Dutch oven, in two batches so it sears rather than steams. Set aside.',
      'Melt the butter in the same pot, add the onion, carrots and celery, and cook 6–8 minutes until softened, scraping up the browned bits.',
      'Stir in the garlic, then sprinkle over the flour and cook 2 minutes, stirring, to lose the raw taste.',
      'Slowly whisk in the broth, then add the Worcestershire, thyme, bay leaf, potatoes and the browned chicken with any resting juices.',
      'Bring to a boil, then reduce and simmer uncovered 35–40 minutes, until the potatoes are tender and the stew has thickened.',
      'Discard the bay leaf. Stir in the peas and the cream, if using, and simmer 5 more minutes. Taste and season hard — stews need more salt than you think.',
    ],
    note: 'Thighs rather than breast, and a proper sear before the liquid goes in — that browning is most of the flavour.',
  },

  'fam-baked-ziti-turkey': {
    time: '1 hr',
    serves: 8,
    ingredients: [
      { qty: '1 lb', item: 'ziti or penne' },
      { qty: '1 tbsp', item: 'olive oil' },
      { qty: '1.5 lbs', item: 'ground turkey (93/7)' },
      { qty: '1', item: 'onion, diced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '2 tsp', item: 'Italian seasoning' },
      { qty: '1/2 tsp', item: 'fennel seeds, crushed' },
      { qty: '1/2 tsp', item: 'red pepper flakes' },
      { qty: '1 (24 oz) jar', item: 'marinara sauce' },
      { qty: '1 (15 oz) can', item: 'crushed tomatoes' },
      { qty: '15 oz', item: 'whole-milk ricotta' },
      { qty: '1', item: 'egg' },
      { qty: '1/2 cup', item: 'Parmesan, grated' },
      { qty: '3 cups', item: 'mozzarella, shredded' },
      { qty: '1/4 cup', item: 'fresh basil, torn' },
      { qty: 'to taste', item: 'salt and pepper' },
    ],
    steps: [
      'Heat the oven to 375°F. Boil the pasta in well-salted water 2 minutes short of al dente — it finishes in the oven — then drain.',
      'Brown the turkey in the olive oil over medium-high, breaking it up. Add the onion and cook until soft, then the garlic, Italian seasoning, fennel and red pepper flakes for 1 minute.',
      'Add the marinara and crushed tomatoes, season with salt and pepper, and simmer 10 minutes.',
      'In a bowl, mix the ricotta, egg, Parmesan and a pinch of salt.',
      'Toss the drained pasta with about two-thirds of the sauce. Spread half in a 9x13 dish, dollop over all the ricotta mixture, then add the rest of the pasta and the remaining sauce.',
      'Cover with mozzarella, tent with foil, and bake 25 minutes. Uncover and bake 12–15 minutes more until bubbling and browned in spots.',
      'Rest 10 minutes before cutting so it holds together, then scatter with basil.',
    ],
    note: 'Ground turkey needs help: the fennel, red pepper flakes and a generous hand with salt are what keep it from tasting lean and flat.',
  },

  'fam-goat-cheese-pasta': {
    time: '25 min',
    serves: 4,
    ingredients: [
      { qty: '12 oz', item: 'short pasta (rigatoni, penne, casarecce)' },
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '2 pints', item: 'cherry tomatoes' },
      { qty: '4 cloves', item: 'garlic, thinly sliced' },
      { qty: '1/2 tsp', item: 'red pepper flakes' },
      { qty: '8 oz', item: 'goat cheese, crumbled' },
      { qty: '2 tbsp', item: 'butter' },
      { qty: '1/4 cup', item: 'Parmesan, grated' },
      { qty: '1/2 cup', item: 'fresh basil, torn' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Bring a large pot of well-salted water to a boil. Add the pasta and cook to al dente.',
      'Meanwhile, in a wide skillet, heat the olive oil over medium-high and add the cherry tomatoes with a pinch of salt. Cook 8–10 minutes, pressing with a spoon, until they blister and burst into a rough sauce.',
      'Add the garlic and red pepper flakes and cook 1 minute more.',
      'Reserve 1 cup of pasta water before draining.',
      'Take the skillet off the heat and add the goat cheese, butter and about 1/2 cup of the pasta water. Stir until it melts into a pink, creamy sauce.',
      'Add the drained pasta and Parmesan and toss over low heat, loosening with more pasta water until it coats every piece. Season and finish with basil.',
    ],
    note: 'One pot for the pasta, one skillet for everything else. The starchy pasta water is what turns the goat cheese into a sauce instead of clumps — do not skip it.',
  },

  // ══ FULL MEAL RECIPES — typed pages with Kandy's notes ══

  'fam-animal-style-smashburger': {
    time: '30 min',
    serves: 4,
    ingredients: [
      { qty: '1.5 lbs', item: 'ground beef (80/20), divided into 8 loose 3 oz balls' },
      { qty: '4', item: 'soft potato or brioche buns, buttered' },
      { qty: '8 slices', item: 'American cheese' },
      { qty: '2 large', item: 'onions, finely diced' },
      { qty: '2 tbsp', item: 'butter' },
      { qty: '2 tbsp', item: 'yellow mustard (for griddling the patties)' },
      { qty: '3 tbsp', item: 'mayonnaise' },
      { qty: '1 tbsp', item: 'ketchup' },
      { qty: '2 tsp', item: 'sweet pickle relish' },
      { qty: '8 slices', item: 'dill pickle' },
      { qty: '4 leaves', item: 'iceberg lettuce, shredded' },
      { qty: '1', item: 'tomato, sliced' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Caramelize the onions first: melt the butter in a skillet over medium-low, add the diced onion and a pinch of salt, and cook 20–25 minutes, stirring now and then, until deep golden and jammy. Add a splash of water if they catch.',
      'Make the sauce: stir together the mayonnaise, ketchup and sweet pickle relish. Set aside.',
      'Toast the buttered buns cut-side down on a griddle until golden. Set aside.',
      'Get a cast iron griddle or skillet screaming hot. Place two beef balls on it and smash each flat and thin with a stiff spatula. Season with salt and pepper.',
      'When the edges are lacy and browned (about 90 seconds), brush the raw top of each patty with yellow mustard, then flip. The mustard fries into the crust.',
      'Immediately lay a slice of cheese on each patty and cook 45 seconds more. Stack two patties per burger.',
      'Build: sauce on both buns, lettuce, tomato, the double patty stack, a heap of caramelized onions, pickles, and the top bun.',
    ],
    note: 'Your sauce ratio, as written on the page: ~3 tbsp mayo, ~1 tbsp ketchup, 2 tsp sweet pickle relish. Smash thin and only flip once — the crust is the whole point.',
  },

  'fam-greek-breasts-mash': {
    time: '45 min',
    serves: 4,
    ingredients: [
      { qty: '4', item: 'boneless skinless chicken breasts, pounded to even thickness' },
      { qty: '3 tbsp', item: 'olive oil' },
      { qty: '1 tbsp', item: 'lemon juice (go easy — about half a lemon)' },
      { qty: '1 tsp', item: 'lemon zest' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '2 tsp', item: 'dried oregano' },
      { qty: '1 tsp', item: 'dried thyme' },
      { qty: '1/2 tsp', item: 'smoked paprika' },
      { qty: '2 lbs', item: 'Yukon Gold potatoes, peeled and cubed' },
      { qty: '4 tbsp', item: 'butter' },
      { qty: '1/2 cup', item: 'warm milk or cream' },
      { qty: '2 oz', item: 'feta, crumbled (optional, for the mash)' },
      { qty: 'to taste', item: 'salt and black pepper' },
      { qty: 'to serve', item: 'chopped parsley and extra feta' },
    ],
    steps: [
      'Whisk the olive oil, lemon juice and zest, garlic, oregano, thyme, paprika, 1 tsp salt and plenty of pepper. Toss the chicken in it and marinate 20 minutes (or up to 4 hours in the fridge).',
      'Boil the potatoes in well-salted water until fork-tender, 15–18 minutes.',
      'Meanwhile, sear the chicken in a hot skillet over medium-high, 5–6 minutes per side, until golden and 165°F inside. Rest 5 minutes before slicing.',
      'Drain the potatoes and let them steam dry in the pot for a minute, then mash with the butter and warm milk until creamy. Fold in the feta if using, and season.',
      'Slice the chicken and serve over the mash with the pan juices spooned over, plus parsley and extra feta.',
    ],
    note: 'Tuned to go easy on the lemon — 1 tbsp juice plus the zest gives you the brightness without the marinade turning sharp or the chicken going chalky.',
  },

  'fam-salmon-garlic-orzo': {
    time: '25 min',
    serves: 2,
    ingredients: [
      { qty: '2', item: 'salmon fillets, skin on' },
      { qty: '150 g', item: 'orzo (about 75 g per person)' },
      { qty: '5 tbsp', item: 'olive oil' },
      { qty: '6 cloves', item: 'garlic, thinly sliced' },
      { qty: '1', item: 'red chilli, thinly sliced (or 1/2 tsp chilli flakes)' },
      { qty: '400 ml', item: 'chicken or vegetable stock, hot' },
      { qty: '1', item: 'lemon (zest and juice)' },
      { qty: '30 g', item: 'Parmesan, grated' },
      { qty: '2 tbsp', item: 'fresh parsley, chopped' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Make the confit: warm 4 tbsp of the olive oil in a wide pan over LOW heat with the sliced garlic and chilli. Let them gently bubble 6–8 minutes until the garlic is soft and pale gold — never browned or it turns bitter. Spoon out and reserve half.',
      'Add the orzo to the remaining garlic oil and stir 1 minute to toast.',
      'Pour in the hot stock, season, and simmer 8–10 minutes, stirring often like a risotto, until the orzo is tender and the liquid has been absorbed into a creamy sauce.',
      'Meanwhile, pat the salmon dry and season the skin well. Heat the last 1 tbsp oil in a skillet over medium-high and lay the fillets in skin-side down. Press flat for 10 seconds and cook 4–5 minutes until the skin is crisp, then flip for 1–2 minutes more.',
      'Stir the Parmesan, lemon zest and a squeeze of juice through the orzo. Taste and season.',
      'Spoon the orzo into bowls, top with the salmon, and finish with the reserved garlic-chilli confit and parsley.',
    ],
    note: 'Prep is about 5 minutes; ~75 g orzo per person. Keep the confit oil barely bubbling — soft, sweet garlic is the whole dish.',
  },

  // ══ WEB CLIPS — real recipes whose pages could not be fetched at import ══

  // Scraped from the saved page (cooktopcove.com).
  'fam-c-how-to-make-slow-cooker-fiesta-chicken-a': {
    name: 'Slow Cooker Fiesta Chicken and Rice',
    emoji: '🍗',
    time: '3 hr 30 min',
    serves: 6,
    ingredients: [
      { qty: '1 lb', item: 'boneless skinless chicken breast, diced into 1-inch pieces' },
      { qty: '1 cup', item: 'chicken stock, no sodium' },
      { qty: '1 cup', item: 'onion, diced' },
      { qty: '1', item: 'green bell pepper, thinly sliced' },
      { qty: '1 (4 oz) can', item: 'diced green chiles' },
      { qty: '5 cloves', item: 'garlic, minced' },
      { qty: '3 tbsp', item: 'lime juice' },
      { qty: '1 tsp', item: 'chili powder' },
      { qty: '2 tsp', item: 'cumin' },
      { qty: '2 tsp', item: 'coriander' },
      { qty: '1 1/2 tsp', item: 'salt' },
      { qty: '1/2 tsp', item: 'pepper' },
      { qty: '1 (14 oz) can', item: 'diced tomatoes, drained' },
      { qty: '1/2 bunch', item: 'cilantro, finely chopped' },
      { qty: '3 cups', item: 'instant white rice' },
    ],
    steps: [
      'In a 6-quart slow cooker, add everything from the chicken through the cilantro — all of it except the rice. Mix well.',
      'Cook on HIGH for 3 hours.',
      'Add the instant rice and mix well.',
      'Cook another 30 minutes on HIGH.',
      'Fluff the rice and serve.',
      'Pro tip from the page: if you have 5 extra minutes, fry the garlic, onion and pepper with the lime juice, cilantro stems, chili powder, cumin, salt and pepper for 3–5 minutes before adding them to the slow cooker. It deepens the flavour a lot.',
    ],
  },

  // Scraped from the saved page (themediterraneandish.com).
  'fam-c-easy-balsamic-chicken-recipe': {
    time: '35 min',
    serves: 6,
    ingredients: [
      { qty: '1/4 cup', item: 'extra virgin olive oil' },
      { qty: '3 tbsp', item: 'balsamic glaze (store-bought is fine)' },
      { qty: '1 tbsp', item: 'tomato paste' },
      { qty: '1 tsp', item: 'honey' },
      { qty: '1', item: 'lemon, juiced' },
      { qty: '4 to 5 large cloves', item: 'garlic, minced' },
      { qty: '1 tbsp', item: 'fresh thyme' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '1/2 tsp', item: 'sweet paprika' },
      { qty: '8 (about 1 1/2 lbs)', item: 'boneless skinless chicken thighs' },
      { qty: 'to taste', item: 'kosher salt and black pepper' },
    ],
    steps: [
      'In a large mixing bowl, whisk the olive oil, balsamic glaze, tomato paste, honey and lemon juice. Add the garlic, thyme, oregano and sweet paprika and whisk again.',
      'Pat the chicken dry and season generously with kosher salt and black pepper on both sides.',
      'Add the chicken to the bowl and toss to coat. Set aside while the oven heats, or cover and refrigerate a couple of hours if you have time.',
      'Heat the oven to 425°F with a rack in the middle.',
      'Transfer the chicken to a baking dish or heat-safe skillet and bake 25–30 minutes, until cooked through (165°F internal).',
    ],
  },

  // Scraped from the saved page (cooktopcove.com) — the "4 ingredients" hack.
  'fam-c-my-college-roommate-taught-me-this-geniu': {
    name: '4-Ingredient Sheet Pan Chicken Fajitas',
    emoji: '🌮',
    time: '30 min',
    serves: 4,
    ingredients: [
      { qty: '1 1/2 lbs', item: 'boneless skinless chicken breasts, sliced into thin strips' },
      { qty: '3 medium', item: 'bell peppers (mix of red and green), sliced into thin strips' },
      { qty: '1 large', item: 'yellow or white onion, sliced into thin strips' },
      { qty: '3 tbsp', item: 'fajita or taco seasoning blend, plus more to taste' },
      { qty: 'to serve', item: 'warm tortillas, cheese, salsa, sour cream, lime' },
    ],
    steps: [
      'Preheat the oven to 400°F and line a large rimmed sheet pan with foil.',
      'Add the chicken, peppers and onion to the pan and spread them out in an even layer.',
      'Sprinkle the seasoning evenly over everything and toss with tongs right on the pan until well coated.',
      'Spread back into a single layer so the chicken and vegetables roast rather than steam.',
      'Bake 18–22 minutes, stirring once halfway, until the chicken is cooked through and the peppers and onions are tender with charred edges.',
      'For more colour, broil 2–3 minutes at the end, watching closely.',
      'Taste, add a little more seasoning if you want it stronger, and serve hot with warm tortillas and your favourite toppings.',
    ],
    note: 'The four ingredients are chicken, peppers, onion and a seasoning blend — everything else is optional. Leftovers are good over lettuce as a fajita salad, or on chips as sheet pan nachos.',
  },

  // Method taken from the saved page (tastingtable.com / Emeril).
  'fam-c-how-to-make-a-shrimp-poboy---best-recipe': {
    name: "Shrimp Po'boy",
    emoji: '🥖',
    time: '30 min + 1 hr marinate',
    serves: 2,
    ingredients: [
      { qty: '1 lb', item: 'medium-large shrimp (about 15 count), peeled and deveined' },
      { qty: '1 cup', item: 'buttermilk' },
      { qty: '2 tbsp', item: 'hot sauce (Crystal), plus 2 tbsp for the dressing' },
      { qty: '1 tsp', item: 'salt' },
      { qty: '3/4 cup', item: 'flour' },
      { qty: '3/4 cup', item: 'fine cornmeal' },
      { qty: '1 tsp', item: 'garlic powder' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '1 tsp', item: 'dried thyme' },
      { qty: '1/2 tsp', item: 'cayenne' },
      { qty: '1/2 cup', item: 'mayonnaise' },
      { qty: '2', item: 'French rolls (or New Orleans po’boy loaf), split' },
      { qty: '1', item: 'tomato, thinly sliced' },
      { qty: '2 cups', item: 'iceberg lettuce, shredded' },
      { qty: '8', item: 'cornichons, sliced' },
      { qty: 'for frying', item: 'neutral oil' },
    ],
    steps: [
      'Cover the shrimp with the buttermilk, 2 tbsp hot sauce and the salt. Stir, then marinate 1 hour in the fridge.',
      'Make the breading: whisk the flour, cornmeal, garlic powder, oregano, thyme and cayenne together.',
      'Make the dressing: stir the mayonnaise with the remaining 2 tbsp hot sauce.',
      'Heat 2 inches of oil to 350°F. Drain the shrimp and toss them in the breading to coat completely.',
      'Fry in batches — only about 1 minute per batch, until golden brown. Let the oil come back up to temperature between batches. Drain on paper towels.',
      'Have every component ready before you build; these are served while the shrimp are still hot.',
      'Spread the dressing on both cut sides of the rolls. Divide the shrimp between them, then layer on the tomato, a pile of shredded iceberg and the sliced cornichons. Close, slice and serve.',
    ],
    note: 'Emeril’s note from the page: medium-to-large Gulf shrimp, about 15 per pound, is the sweet spot — big enough to go golden without turning rubbery.',
  },

  'fam-c-how-to-build-a-charcuterie-board': {
    name: 'Charcuterie Board',
    emoji: '🧀',
    category: 'snacks',
    time: '25 min',
    serves: 8,
    ingredients: [
      { qty: '3–4', item: 'cheeses — one soft (brie), one firm (aged cheddar or manchego), one blue, one wildcard' },
      { qty: '3', item: 'cured meats — prosciutto, salami, soppressata' },
      { qty: '1 cup', item: 'olives and cornichons' },
      { qty: '1/2 cup', item: 'jam, honey or fig spread' },
      { qty: '1/4 cup', item: 'whole-grain mustard' },
      { qty: '1 cup', item: 'nuts — marcona almonds or candied pecans' },
      { qty: '2 cups', item: 'fresh fruit — grapes, figs, apple or pear slices' },
      { qty: '1/2 cup', item: 'dried apricots or dates' },
      { qty: '1 box', item: 'crackers plus a sliced baguette' },
      { qty: 'to garnish', item: 'fresh rosemary or thyme sprigs' },
    ],
    steps: [
      'Start with the anchors: put the small bowls (jam, mustard, olives) on the board first, spaced apart. Everything else fills in around them.',
      'Place the cheeses next, spread out rather than clustered, and pre-cut the firm ones into slices or cubes so nobody has to hack at a wedge.',
      'Add the meats in loose folds, ribbons or rosettes — height and movement look better than flat rows. Fan the salami, ruffle the prosciutto.',
      'Fill the large gaps with fruit and clusters of grapes, then pour the nuts and dried fruit into the small gaps until no bare board shows.',
      'Fan the crackers and baguette slices along one edge or in a small bowl alongside, so they stay crisp.',
      'Tuck herb sprigs into any remaining bare spots and add a knife for each cheese. Take the board out of the fridge 30–45 minutes before serving — cold cheese tastes like nothing.',
    ],
    note: 'Rough amounts: about 2 oz of cheese and 2 oz of meat per person for an appetizer, double that if it is the meal.',
  },

  'fam-c-how-to-make-mexican-corn-tortillas': {
    name: 'Mexican Corn Tortillas',
    emoji: '🫓',
    category: 'sides',
    time: '40 min',
    serves: 15,
    ingredients: [
      { qty: '2 cups', item: 'masa harina (corn flour for tortillas, not cornmeal)' },
      { qty: '1/2 tsp', item: 'salt' },
      { qty: '1 1/2 to 1 3/4 cups', item: 'warm water' },
    ],
    steps: [
      'Mix the masa harina and salt, then add 1 1/2 cups warm water and knead 2–3 minutes into a smooth dough. It should feel like soft play-dough — add water a tablespoon at a time if it cracks, more masa if it sticks.',
      'Cover with a damp towel and rest 20 minutes so the masa fully hydrates.',
      'Divide into 15 golf-ball-sized pieces and keep them covered.',
      'Line a tortilla press with two pieces of a cut plastic bag (or use a flat-bottomed pan). Press each ball to about 1/8 inch thick.',
      'Heat a dry comal or cast iron skillet over medium-high. Cook the tortilla 30 seconds, flip, cook 45–60 seconds until it speckles, then flip once more — it should puff.',
      'Stack the cooked tortillas in a clean towel inside a tortilla warmer or covered bowl. The trapped steam is what makes them soft and pliable.',
    ],
    note: 'The dough should never crack at the edges when pressed — that is always a sign it needs more water.',
  },

  // Scraped from the saved page (nourishedbynutrition.com).
  'fam-c-healthy-pumpkin-baked-oatmeal---nourishe': {
    name: 'Healthy Pumpkin Baked Oatmeal',
    emoji: '🎃',
    category: 'breakfast',
    time: '50 min',
    serves: 6,
    ingredients: [
      { qty: '2 tbsp', item: 'ground flax' },
      { qty: '5 tbsp', item: 'warm water' },
      { qty: '2 cups', item: 'sprouted rolled oats' },
      { qty: '2 tsp', item: 'pumpkin pie spice' },
      { qty: '1 tsp', item: 'baking powder' },
      { qty: '1/4 tsp', item: 'salt' },
      { qty: '1 1/2 cups', item: 'almond or cashew milk' },
      { qty: '1 cup', item: 'pumpkin puree' },
      { qty: '1/4 cup', item: 'maple syrup' },
      { qty: '1 tsp', item: 'vanilla' },
      { qty: '1/4 cup', item: 'pecans, chopped' },
      { qty: '1 cup', item: 'raw cashews (for the cream)' },
      { qty: '1 1/2 cups', item: 'filtered water, plus more for boiling' },
      { qty: '1/4 tsp', item: 'cinnamon' },
      { qty: '1–2 tbsp', item: 'maple syrup, optional (for the cream)' },
    ],
    steps: [
      'Preheat the oven to 350°F and lightly grease an 8x8 or 9x5 pan with coconut or avocado oil.',
      'Make a flax egg: combine the ground flax and warm water in a small bowl, stir, and let sit 5–10 minutes until a thick gel forms.',
      'In a large bowl, combine the oats, pumpkin pie spice, baking powder and salt. Add the flax egg, milk, pumpkin, maple syrup and vanilla and stir. Let sit 5 minutes so the oats soak up the liquid.',
      'Pour into the greased pan and sprinkle the chopped pecans on top. Bake 40–45 minutes, until the edges are firm and golden. Cool 5–10 minutes before serving.',
      'While it bakes, make the cashew cream: soak the raw cashews in boiling water 10 minutes, then drain and rinse. Blend with the filtered water, cinnamon and maple syrup on high for 2 minutes, thinning with more water a tablespoon at a time.',
      'Serve the oatmeal with the cinnamon cashew cream, or a splash of milk, yogurt or nut butter. Keeps 4–5 days in the fridge; reheat with a splash of milk.',
    ],
  },

  'fam-c-get-down-with-your-fancy-self-and-make-t': {
    // Named "Skillet" to tell it apart from the Cooking Classy ratatouille
    // clip already in the cookbook.
    name: 'Skillet Ratatouille',
    emoji: '🍆',
    time: '1 hr 15 min',
    serves: 6,
    ingredients: [
      { qty: '1 large', item: 'eggplant, cut into 1/2-inch cubes' },
      { qty: '2', item: 'zucchini, sliced into half-moons' },
      { qty: '1', item: 'yellow squash, sliced into half-moons' },
      { qty: '2', item: 'bell peppers (one red, one yellow), diced' },
      { qty: '1 large', item: 'onion, diced' },
      { qty: '5 cloves', item: 'garlic, minced' },
      { qty: '1 (28 oz) can', item: 'crushed tomatoes' },
      { qty: '2', item: 'tomatoes, diced' },
      { qty: '1/3 cup', item: 'olive oil' },
      { qty: '1 tsp', item: 'dried thyme' },
      { qty: '1 tsp', item: 'herbes de Provence' },
      { qty: '2', item: 'bay leaves' },
      { qty: '1/4 cup', item: 'fresh basil, torn' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Salt the eggplant cubes in a colander and let them drain 20 minutes, then pat dry. This keeps them from turning to mush.',
      'Heat 2 tbsp olive oil in a large Dutch oven over medium-high and brown the eggplant in a single layer, 6–8 minutes. Remove and set aside.',
      'Add more oil and cook the zucchini and yellow squash until lightly browned, 5 minutes. Remove and set aside with the eggplant.',
      'Add the last of the oil, the onion and the peppers and cook 8 minutes until soft. Add the garlic and cook 1 minute more.',
      'Stir in the crushed tomatoes, diced tomatoes, thyme, herbes de Provence and bay leaves. Simmer 15 minutes.',
      'Return the eggplant, zucchini and squash to the pot and simmer gently 20–25 minutes, until everything is tender but still holding its shape.',
      'Discard the bay leaves, season well, and stir in the basil. Better on day two, and good hot, warm or at room temperature.',
    ],
    note: 'Browning each vegetable separately before they go in the pot is the difference between ratatouille and vegetable stew. Your cookbook has a second, baked ratatouille too.',
  },

  'fam-c-easy-gluten-free-paleo-keto-friendly-fam': {
    name: 'Cheesy Baked Ratatouille',
    emoji: '🍆',
    time: '1 hr',
    serves: 6,
    ingredients: [
      { qty: '1 medium', item: 'eggplant, sliced into thin rounds' },
      { qty: '2', item: 'zucchini, sliced into thin rounds' },
      { qty: '3', item: 'roma tomatoes, sliced into thin rounds' },
      { qty: '1', item: 'yellow squash, sliced into thin rounds' },
      { qty: '1 (24 oz) jar', item: 'marinara or 2 cups tomato sauce' },
      { qty: '1', item: 'onion, finely diced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '3 tbsp', item: 'olive oil' },
      { qty: '1 tsp', item: 'herbes de Provence' },
      { qty: '1 1/2 cups', item: 'mozzarella, shredded' },
      { qty: '1/2 cup', item: 'Parmesan, grated' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Heat the oven to 375°F. Cook the onion and garlic in 1 tbsp olive oil until soft, then stir into the marinara with the herbes de Provence and spread over the bottom of a baking dish.',
      'Slice all the vegetables thinly and evenly — a mandoline helps a lot here.',
      'Arrange them upright in tight alternating rows over the sauce: eggplant, zucchini, tomato, squash, repeating around the dish.',
      'Drizzle with the remaining olive oil and season well with salt and pepper.',
      'Cover with parchment or foil and bake 35 minutes.',
      'Uncover, scatter over the mozzarella and Parmesan, and bake 15–20 minutes more until bubbling and browned. Rest 10 minutes before serving.',
    ],
    note: 'Naturally gluten-free and low-carb; leave the cheese off for a paleo version.',
  },

  'fam-c-how-to-soak-your-beans': {
    name: 'How to Soak Dried Beans',
    emoji: '🫘',
    category: 'sides',
    time: '8 hr (or 1 hr quick-soak)',
    serves: 6,
    ingredients: [
      { qty: '1 lb', item: 'dried beans' },
      { qty: '10 cups', item: 'water, for soaking' },
      { qty: '1 tbsp', item: 'salt (optional, for brining)' },
    ],
    steps: [
      'Sort the beans first — spread them on a sheet pan and pick out any pebbles, dirt clods or shrivelled beans. Rinse well in a colander.',
      'OVERNIGHT SOAK: cover the beans with about 10 cups of cold water (they need room to double) and leave 8 hours or overnight at room temperature. In hot weather, soak them in the fridge so they do not ferment.',
      'QUICK SOAK: cover with 10 cups water, bring to a boil, boil 1 minute, then cover, take off the heat and let stand 1 hour.',
      'SALT SOAK (best texture): add 1 tbsp salt to the soaking water. Brining softens the skins so they hold together instead of bursting.',
      'Drain and rinse the soaked beans before cooking, and cook them in fresh water — the soaking water holds the compounds that cause gas.',
      'Cook the drained beans in fresh water at a bare simmer until tender, 45 minutes to 1 1/2 hours depending on type and age. Add acidic ingredients like tomatoes only once the beans are already soft.',
    ],
    note: 'You do not strictly have to soak — unsoaked beans just take longer and cook less evenly. Soaked beans cook faster, hold their shape, and are easier to digest.',
  },

  'fam-c-cloud-cake-recipe---pizza-time': {
    name: 'Cloud Cake',
    emoji: '☁️',
    category: 'desserts',
    time: '1 hr 15 min',
    serves: 8,
    ingredients: [
      { qty: '6 large', item: 'eggs, separated, at room temperature' },
      { qty: '8 oz', item: 'cream cheese, softened' },
      { qty: '4 tbsp', item: 'butter' },
      { qty: '1/2 cup', item: 'whole milk' },
      { qty: '1/2 cup', item: 'granulated sugar' },
      { qty: '1/4 cup', item: 'cake flour' },
      { qty: '2 tbsp', item: 'cornstarch' },
      { qty: '1 tsp', item: 'vanilla extract' },
      { qty: '1/4 tsp', item: 'cream of tartar' },
      { qty: '1 pinch', item: 'salt' },
      { qty: 'to finish', item: 'powdered sugar' },
    ],
    steps: [
      'Heat the oven to 300°F. Line the bottom and sides of an 8-inch round cake pan with parchment and wrap the outside in foil for the water bath.',
      'Melt the cream cheese, butter and milk together in a bowl set over simmering water, whisking until completely smooth. Let cool slightly.',
      'Whisk in the egg yolks one at a time, then the vanilla. Sift in the cake flour, cornstarch and salt and whisk until no lumps remain.',
      'In a clean bowl, beat the egg whites with the cream of tartar until foamy, then add the sugar gradually and beat to soft, floppy peaks — not stiff. Stiff whites crack the cake.',
      'Fold a third of the whites into the yolk batter to loosen it, then gently fold in the rest in two additions until just combined.',
      'Pour into the pan, tap it on the counter to pop large bubbles, and set it in a roasting tin. Pour in hot water to come 1 inch up the sides.',
      'Bake 60–70 minutes until set and lightly golden. Turn the oven off, crack the door, and leave the cake inside 15 minutes so it cools slowly and does not collapse.',
      'Cool completely, then dust with powdered sugar. It is meant to be jiggly and light — that is the cloud.',
    ],
  },

  'fam-c-how-to-make-pita-bread-at-home': {
    name: 'Homemade Pita Bread',
    emoji: '🫓',
    category: 'sides',
    time: '2 hr 30 min',
    serves: 8,
    ingredients: [
      { qty: '3 cups', item: 'bread flour (or all-purpose)' },
      { qty: '1 1/2 tsp', item: 'instant yeast' },
      { qty: '1 1/2 tsp', item: 'salt' },
      { qty: '1 tsp', item: 'sugar' },
      { qty: '1 1/4 cups', item: 'warm water' },
      { qty: '2 tbsp', item: 'olive oil' },
    ],
    steps: [
      'Mix the flour, yeast, salt and sugar in a large bowl. Add the warm water and olive oil and stir into a shaggy dough.',
      'Knead 8–10 minutes by hand (or 5 in a mixer) until smooth and elastic. Cover and let rise 1–2 hours, until doubled.',
      'Put a baking stone or an inverted heavy sheet pan in the oven and heat to 500°F for a full 30 minutes. The heat has to be fierce or the pitas will not puff.',
      'Divide the dough into 8 pieces, roll each into a ball, and rest them covered for 20 minutes.',
      'Roll each ball into a 1/4-inch-thick round. Do not let them dry out — keep the ones you are not rolling covered.',
      'Slide 1–2 rounds onto the hot stone and bake 2–3 minutes. They should balloon completely. Flip for 30 seconds if you want a little more colour.',
      'Stack the baked pitas in a clean towel as they come out — the steam keeps them soft and gives you the pocket.',
    ],
    note: 'A puffed pita gives you a pocket; a flat one still tastes good, it just means the oven or stone was not hot enough.',
  },

  'fam-c-how-to-make-fried-rice': {
    name: 'Fried Rice',
    emoji: '🍚',
    time: '20 min',
    serves: 4,
    ingredients: [
      { qty: '4 cups', item: 'cold cooked rice, at least a day old' },
      { qty: '3 tbsp', item: 'neutral oil' },
      { qty: '3', item: 'eggs, beaten' },
      { qty: '1', item: 'onion, diced' },
      { qty: '3 cloves', item: 'garlic, minced' },
      { qty: '1 cup', item: 'frozen peas and carrots' },
      { qty: '3 tbsp', item: 'soy sauce' },
      { qty: '1 tbsp', item: 'oyster sauce (optional)' },
      { qty: '2 tsp', item: 'toasted sesame oil' },
      { qty: '4', item: 'green onions, sliced' },
      { qty: 'to taste', item: 'white pepper and salt' },
    ],
    steps: [
      'Use cold, day-old rice and break up every clump with your hands before you start. Fresh warm rice steams and turns to mush — this is the single thing that decides whether fried rice works.',
      'Get a wok or wide skillet very hot. Add 1 tbsp oil, pour in the beaten eggs, scramble quickly until just set, and tip them out.',
      'Add the remaining oil and stir-fry the onion 2 minutes, then the garlic for 30 seconds.',
      'Add the peas and carrots and stir-fry 1 minute.',
      'Add the rice and press it into the hot surface, letting it sit 30 seconds between tosses so it picks up some char. Keep the heat high for 3–4 minutes.',
      'Pour the soy sauce and oyster sauce around the edge of the pan rather than into the middle so they sizzle and caramelize, then toss to coat.',
      'Return the eggs, add the sesame oil, green onions and white pepper, toss once more and serve straight away.',
    ],
  },

  'fam-c-easy-coleslaw-dressing-recipe': {
    name: 'Easy Coleslaw Dressing',
    emoji: '🥗',
    category: 'sides',
    time: '5 min',
    serves: 8,
    ingredients: [
      { qty: '1 cup', item: 'mayonnaise' },
      { qty: '2 tbsp', item: 'apple cider vinegar' },
      { qty: '2 tbsp', item: 'granulated sugar' },
      { qty: '1 tbsp', item: 'lemon juice' },
      { qty: '1 tsp', item: 'Dijon mustard' },
      { qty: '1/2 tsp', item: 'celery seed' },
      { qty: '1/2 tsp', item: 'salt' },
      { qty: '1/4 tsp', item: 'black pepper' },
      { qty: '1 (14 oz) bag', item: 'coleslaw mix, to dress' },
    ],
    steps: [
      'Whisk the mayonnaise, vinegar, sugar, lemon juice, Dijon, celery seed, salt and pepper until completely smooth.',
      'Taste and adjust — more vinegar for tang, more sugar for a sweeter deli-style slaw.',
      'Chill the dressing at least 30 minutes so the celery seed and sugar dissolve into it.',
      'Toss with the coleslaw mix no more than an hour before serving, or the cabbage weeps and the slaw goes watery.',
    ],
    note: 'Makes enough for a 14 oz bag of slaw mix. Keeps a week in the fridge on its own.',
  },

  'fam-c-how-to-make-ice-cream-at-home': {
    name: 'No-Churn Vanilla Ice Cream',
    emoji: '🍨',
    category: 'desserts',
    time: '15 min + 6 hr freeze',
    serves: 8,
    ingredients: [
      { qty: '2 cups', item: 'heavy cream, cold' },
      { qty: '1 (14 oz) can', item: 'sweetened condensed milk' },
      { qty: '2 tsp', item: 'vanilla extract' },
      { qty: '1 pinch', item: 'salt' },
      { qty: 'optional', item: 'mix-ins — crushed cookies, chocolate chunks, swirls of jam or caramel' },
    ],
    steps: [
      'Whisk the sweetened condensed milk with the vanilla and salt in a large bowl.',
      'In a separate cold bowl, whip the heavy cream to stiff peaks — it should hold its shape when you lift the beater.',
      'Fold about a third of the whipped cream into the condensed milk to loosen it, then gently fold in the rest. Keep as much air in it as you can; the air is what stands in for churning.',
      'Fold in any mix-ins, or layer them in the tin and swirl with a knife.',
      'Scrape into a loaf tin, press parchment or plastic wrap onto the surface, and freeze at least 6 hours or overnight.',
      'Let it sit out 5 minutes before scooping.',
    ],
    note: 'No machine needed. The condensed milk keeps it scoopable straight from the freezer instead of freezing rock hard.',
  },

  'fam-c-how-to-make-your-own-brown-sugar': {
    name: 'Homemade Brown Sugar',
    emoji: '🍯',
    category: 'desserts',
    time: '5 min',
    serves: 8,
    ingredients: [
      { qty: '1 cup', item: 'granulated sugar' },
      { qty: '1 tbsp', item: 'molasses (for light brown sugar)' },
      { qty: '2 tbsp', item: 'molasses (for dark brown sugar)' },
    ],
    steps: [
      'Put the granulated sugar in a bowl and add the molasses — 1 tbsp per cup for light brown, 2 tbsp for dark.',
      'Work it together with a fork, or pulse in a food processor, until the colour is completely even with no dark streaks. It takes a minute or two by hand.',
      'Use it measure-for-measure anywhere a recipe calls for brown sugar.',
      'Store in an airtight container. If it hardens, drop in a slice of bread or a damp paper towel overnight to soften it again.',
    ],
    note: 'Worth knowing when you are mid-bake and the box is empty. It is genuinely all brown sugar is.',
  },

  'fam-c-how-to-make-simple-foolproof-chocolate-t': {
    name: 'Simple Chocolate Truffles',
    emoji: '🍫',
    category: 'desserts',
    time: '20 min + 2 hr chill',
    serves: 24,
    ingredients: [
      { qty: '8 oz', item: 'good bittersweet chocolate, finely chopped' },
      { qty: '1/2 cup', item: 'heavy cream' },
      { qty: '1 tbsp', item: 'butter, softened' },
      { qty: '1 tsp', item: 'vanilla extract (or 1 tbsp bourbon, rum or espresso)' },
      { qty: '1 pinch', item: 'salt' },
      { qty: 'to coat', item: 'cocoa powder, chopped nuts or sprinkles' },
    ],
    steps: [
      'Chop the chocolate finely and put it in a heatproof bowl — the finer the chop, the smoother the ganache.',
      'Heat the cream until it just begins to steam and bubble at the edges. Do not boil it.',
      'Pour the hot cream over the chocolate and leave it alone for 2 minutes without stirring.',
      'Stir slowly from the centre outward until it comes together into a glossy ganache. Stir in the butter, vanilla and salt.',
      'Cover and chill 2 hours, until firm enough to scoop.',
      'Scoop teaspoon-sized portions and roll between your palms — work fast, cold hands help. Roll each in cocoa, nuts or sprinkles.',
      'Chill until firm. Keeps 2 weeks in the fridge; serve at room temperature.',
    ],
    note: 'Two ingredients do the work, so the chocolate matters — use a bar you would happily eat on its own, not chips.',
  },

  'fam-c-how-to-cook-pumpkin-seeds---simplemost': {
    name: 'Roasted Pumpkin Seeds',
    emoji: '🎃',
    category: 'snacks',
    time: '50 min',
    serves: 4,
    ingredients: [
      { qty: '1 1/2 cups', item: 'raw pumpkin seeds, cleaned' },
      { qty: '2 tbsp', item: 'olive oil or melted butter' },
      { qty: '1 tsp', item: 'salt' },
      { qty: '1/2 tsp', item: 'garlic powder (optional)' },
      { qty: '1/2 tsp', item: 'smoked paprika (optional)' },
    ],
    steps: [
      'Pull the seeds from the pumpkin and rinse them in a colander, rubbing off the stringy pulp. A bowl of water helps — the seeds float and the pulp sinks.',
      'Boil the seeds in salted water for 10 minutes. This seasons them through and makes them far crisper.',
      'Drain and dry them thoroughly on a towel. Any water left means steaming, not roasting.',
      'Toss with the oil, salt and any seasonings, and spread in a single layer on a lined sheet pan.',
      'Roast at 325°F for 25–30 minutes, stirring every 10 minutes, until golden and crunchy.',
      'Cool completely on the pan — they crisp up further as they cool. Store airtight up to a week.',
    ],
    note: 'The 10-minute boil before roasting is the trick that separates crunchy seeds from chewy ones.',
  },

  'fam-c-crunchy-broccoli-salad---kraft-recipes': {
    name: 'Crunchy Broccoli Salad',
    emoji: '🥦',
    category: 'sides',
    time: '15 min',
    serves: 8,
    ingredients: [
      { qty: '6 cups', item: 'broccoli florets, cut small' },
      { qty: '1/2', item: 'red onion, finely diced' },
      { qty: '1 cup', item: 'sharp cheddar, shredded or cubed' },
      { qty: '8 slices', item: 'bacon, cooked and crumbled' },
      { qty: '1/2 cup', item: 'raisins or dried cranberries' },
      { qty: '1/2 cup', item: 'sunflower seeds' },
      { qty: '1 cup', item: 'mayonnaise' },
      { qty: '2 tbsp', item: 'apple cider vinegar' },
      { qty: '3 tbsp', item: 'sugar' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Cut the broccoli into small bite-sized florets and put them in a large bowl with the red onion, cheddar, bacon, raisins and sunflower seeds.',
      'Whisk the mayonnaise, vinegar and sugar together until smooth.',
      'Pour the dressing over the salad and toss until everything is evenly coated.',
      'Season with salt and pepper, cover, and chill at least 1 hour — the broccoli softens slightly and takes on the dressing.',
      'Toss again just before serving. Hold back the sunflower seeds and bacon until serving if you are making it far ahead and want maximum crunch.',
    ],
  },

  'fam-c-perfect-mashed-potatoes-recipe': {
    name: 'Perfect Mashed Potatoes',
    emoji: '🥔',
    category: 'sides',
    time: '35 min',
    serves: 6,
    ingredients: [
      { qty: '3 lbs', item: 'Yukon Gold or russet potatoes, peeled and cut into even 2-inch chunks' },
      { qty: '2 tbsp', item: 'salt, for the cooking water' },
      { qty: '8 tbsp', item: 'butter, cut into pieces' },
      { qty: '1 cup', item: 'whole milk or half-and-half, warmed' },
      { qty: 'to taste', item: 'salt and white pepper' },
    ],
    steps: [
      'Put the potato chunks in a pot and cover with COLD water by an inch, then add the salt. Starting cold means they cook evenly instead of going mushy outside and hard in the middle.',
      'Bring to a boil and simmer 15–20 minutes, until a knife slides in with no resistance.',
      'Drain well and return the potatoes to the hot dry pot for a minute, shaking gently, so the surface moisture steams off.',
      'Warm the milk and butter together — cold dairy hitting hot potatoes makes them gluey and dull.',
      'Mash with a ricer or food mill for the smoothest result, or a hand masher for rustic. Never use a food processor or blender; it turns the starch to glue.',
      'Fold in the warm butter first, then the milk a little at a time until you hit the consistency you want. Season generously with salt and white pepper.',
    ],
    note: 'Yukon Golds give you buttery and creamy; russets give you fluffy and light. Both work — do not mix them.',
  },

  'fam-c-3-new-ways-to-drink-your-hot-cocoa': {
    name: 'Hot Cocoa, Three Ways',
    emoji: '☕',
    category: 'desserts',
    time: '15 min',
    serves: 4,
    ingredients: [
      { qty: '4 cups', item: 'whole milk' },
      { qty: '1/3 cup', item: 'unsweetened cocoa powder' },
      { qty: '1/3 cup', item: 'granulated sugar' },
      { qty: '4 oz', item: 'semisweet chocolate, chopped' },
      { qty: '1 tsp', item: 'vanilla extract' },
      { qty: '1 pinch', item: 'salt' },
      { qty: 'variation 1', item: 'Mexican: 1 tsp cinnamon + 1/4 tsp cayenne' },
      { qty: 'variation 2', item: 'Salted caramel: 1/4 cup caramel sauce + flaky salt to finish' },
      { qty: 'variation 3', item: 'Peppermint mocha: 1/2 tsp peppermint extract + 1 shot espresso' },
    ],
    steps: [
      'Make the base: whisk the cocoa powder, sugar and salt with about 1/2 cup of the milk in a saucepan over medium heat until it forms a smooth paste with no lumps.',
      'Whisk in the rest of the milk and heat until steaming — do not let it boil.',
      'Take off the heat, add the chopped chocolate and vanilla, and whisk until melted and glossy. This is the base for all three.',
      'MEXICAN: whisk the cinnamon and cayenne in with the cocoa powder at the start. Serve with a cinnamon stick.',
      'SALTED CARAMEL: stir the caramel sauce into the finished cocoa, then top with whipped cream and flaky salt.',
      'PEPPERMINT MOCHA: stir the peppermint extract and espresso into the finished cocoa, and top with whipped cream and crushed candy cane.',
    ],
    note: 'One base, three directions — split the batch three ways if you cannot decide.',
  },

  'fam-c-5-ways-to-upgrade-a-box-of-chicken-broth': {
    name: 'Upgraded Boxed Chicken Broth',
    emoji: '🍜',
    category: 'sides',
    time: '30 min',
    serves: 6,
    ingredients: [
      { qty: '8 cups', item: 'boxed low-sodium chicken broth' },
      { qty: '1', item: 'onion, quartered (skin on for colour)' },
      { qty: '2', item: 'carrots, roughly chopped' },
      { qty: '2 stalks', item: 'celery with leaves, chopped' },
      { qty: '4 cloves', item: 'garlic, smashed' },
      { qty: '1', item: 'Parmesan rind' },
      { qty: '1 bunch', item: 'parsley stems' },
      { qty: '2', item: 'bay leaves' },
      { qty: '1 tsp', item: 'whole black peppercorns' },
      { qty: '1 tbsp', item: 'soy sauce or fish sauce' },
      { qty: '1 tsp', item: 'apple cider vinegar or lemon juice' },
    ],
    steps: [
      'Add aromatics: simmer the broth with the onion, carrot, celery, garlic, parsley stems, bay leaves and peppercorns for 20–30 minutes, then strain. This alone does most of the work.',
      'Add a Parmesan rind while it simmers — it melts in savoury depth that boxed broth is always missing.',
      'Add umami: a tablespoon of soy sauce or fish sauce at the end. You will not taste either one, you will just taste "more".',
      'Brown something first: sear a few chicken wings, mushroom stems or the onion cut-side down in the pot before the broth goes in, and scrape up the browned bits.',
      'Finish with acid: a teaspoon of vinegar or lemon juice right at the end wakes the whole thing up. Season with salt only after this step.',
    ],
    note: 'Five separate upgrades from the saved page — use one, or stack all five. Strain before using in soup.',
  },

  // ══ WEB CLIPS — saved pages that were roundups, not single recipes ══
  //  Each card now holds one cookable recipe from that topic; the note says
  //  where it came from and the original collection link is kept.

  'fam-c-25-italian-casserole-recipes-that-would': {
    name: 'Baked Ziti alla Nonna',
    emoji: '🍝',
    time: '1 hr',
    serves: 8,
    ingredients: [
      { qty: '1 lb', item: 'ziti' },
      { qty: '1 lb', item: 'Italian sausage, casings removed' },
      { qty: '1', item: 'onion, diced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '1 (28 oz) can', item: 'crushed tomatoes' },
      { qty: '1 tsp', item: 'dried basil' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '15 oz', item: 'whole-milk ricotta' },
      { qty: '1', item: 'egg' },
      { qty: '1 cup', item: 'Parmesan, grated' },
      { qty: '3 cups', item: 'mozzarella, shredded' },
      { qty: 'to taste', item: 'salt, pepper and fresh basil' },
    ],
    steps: [
      'Heat the oven to 375°F. Boil the ziti 2 minutes shy of al dente and drain.',
      'Brown the sausage in a large skillet, breaking it up. Add the onion and cook until soft, then the garlic for 1 minute.',
      'Add the crushed tomatoes, basil and oregano, season, and simmer 15 minutes.',
      'Mix the ricotta, egg, half the Parmesan and a pinch of salt in a bowl.',
      'Toss the pasta with most of the sauce. Layer half in a 9x13 dish, spread over all the ricotta, then the rest of the pasta and sauce.',
      'Top with the mozzarella and remaining Parmesan. Bake covered 25 minutes, then uncovered 15 more until browned and bubbling.',
      'Rest 10 minutes, then finish with fresh basil.',
    ],
    note: 'Your saved page is a roundup of 25 Italian casseroles — this card holds the classic of the bunch. Tap the link below for the full collection.',
  },

  'fam-c-top-10-muffin-recipes': {
    name: 'Bakery-Style Blueberry Muffins',
    emoji: '🧁',
    category: 'breakfast',
    time: '35 min',
    serves: 12,
    ingredients: [
      { qty: '2 1/2 cups', item: 'all-purpose flour' },
      { qty: '1 cup', item: 'granulated sugar' },
      { qty: '1 tbsp', item: 'baking powder' },
      { qty: '1/2 tsp', item: 'salt' },
      { qty: '2 large', item: 'eggs' },
      { qty: '1 cup', item: 'buttermilk' },
      { qty: '1/2 cup', item: 'butter, melted' },
      { qty: '1/4 cup', item: 'vegetable oil' },
      { qty: '2 tsp', item: 'vanilla extract' },
      { qty: '2 cups', item: 'blueberries, tossed in 1 tbsp flour' },
      { qty: '3 tbsp', item: 'coarse sugar, for the tops' },
    ],
    steps: [
      'Heat the oven to 425°F and line a 12-cup muffin tin. The high starting heat is what gives you tall domed tops.',
      'Whisk the flour, sugar, baking powder and salt in a large bowl.',
      'In another bowl, whisk the eggs, buttermilk, melted butter, oil and vanilla.',
      'Pour the wet into the dry and fold just until no dry flour remains — lumps are fine, overmixing makes them tough.',
      'Fold in the floured blueberries (the flour coating keeps them from sinking).',
      'Fill the cups nearly to the top and sprinkle with coarse sugar.',
      'Bake at 425°F for 5 minutes, then WITHOUT opening the oven drop the temperature to 375°F and bake 15–18 minutes more, until a toothpick comes out clean.',
      'Cool in the tin 5 minutes, then move to a rack.',
    ],
    note: 'Your saved page is a top-10 muffin roundup — this card holds a reliable bakery-style base. Swap the blueberries for chocolate chips, raspberries or diced apple. Full collection at the link below.',
  },

  'fam-c-14-black-forest-recipes': {
    name: 'Black Forest Cake',
    emoji: '🍒',
    category: 'desserts',
    time: '1 hr 30 min',
    serves: 12,
    ingredients: [
      { qty: '1 3/4 cups', item: 'all-purpose flour' },
      { qty: '3/4 cup', item: 'unsweetened cocoa powder' },
      { qty: '2 cups', item: 'granulated sugar' },
      { qty: '2 tsp', item: 'baking soda' },
      { qty: '1 tsp', item: 'baking powder' },
      { qty: '1 tsp', item: 'salt' },
      { qty: '2', item: 'eggs' },
      { qty: '1 cup', item: 'buttermilk' },
      { qty: '1/2 cup', item: 'vegetable oil' },
      { qty: '1 cup', item: 'hot coffee' },
      { qty: '2 (15 oz) jars', item: 'morello or sour cherries, drained (juice reserved)' },
      { qty: '3 tbsp', item: 'kirsch (optional)' },
      { qty: '3 cups', item: 'heavy cream' },
      { qty: '1/3 cup', item: 'powdered sugar' },
      { qty: '4 oz', item: 'dark chocolate, shaved' },
    ],
    steps: [
      'Heat the oven to 350°F and line two 9-inch cake pans. Whisk the flour, cocoa, sugar, baking soda, baking powder and salt.',
      'Beat in the eggs, buttermilk and oil, then slowly mix in the hot coffee. The batter will be very thin — that is correct.',
      'Divide between the pans and bake 30–35 minutes until a toothpick comes out clean. Cool completely, then slice each layer in half horizontally.',
      'Stir the kirsch into 1/2 cup of the reserved cherry juice and brush it over all four cut layers.',
      'Whip the cream with the powdered sugar to firm peaks.',
      'Stack: cake, a layer of cream, a scattering of cherries — repeat for all four layers, finishing with cream on top.',
      'Cover the sides in cream, press shaved chocolate all over, and top with whole cherries. Chill 2 hours before slicing.',
    ],
    note: 'Your saved page is a roundup of 14 Black Forest recipes — this card holds the classic cake. Full collection at the link below.',
  },

  'fam-c-14-gumbo-recipes-louisiana-loves': {
    name: 'Chicken & Andouille Gumbo',
    emoji: '🍲',
    time: '2 hr 30 min',
    serves: 8,
    ingredients: [
      { qty: '1 cup', item: 'vegetable oil' },
      { qty: '1 cup', item: 'all-purpose flour' },
      { qty: '2', item: 'onions, diced' },
      { qty: '2', item: 'green bell peppers, diced' },
      { qty: '4 stalks', item: 'celery, diced' },
      { qty: '6 cloves', item: 'garlic, minced' },
      { qty: '1 lb', item: 'andouille sausage, sliced' },
      { qty: '2 lbs', item: 'boneless chicken thighs, cut into chunks' },
      { qty: '8 cups', item: 'chicken stock, warm' },
      { qty: '2 tbsp', item: 'Cajun seasoning' },
      { qty: '2', item: 'bay leaves' },
      { qty: '1 tsp', item: 'dried thyme' },
      { qty: '1/2 tsp', item: 'cayenne' },
      { qty: '6', item: 'green onions, sliced' },
      { qty: 'to serve', item: 'cooked white rice, filé powder, hot sauce' },
    ],
    steps: [
      'Make the roux: whisk the oil and flour together in a heavy Dutch oven over medium-low. Stir CONSTANTLY for 30–45 minutes until it reaches the colour of milk chocolate. Do not walk away and do not rush it — if it scorches, throw it out and start over.',
      'Add the onion, bell pepper and celery (the trinity) straight into the hot roux. It will hiss and seize. Cook 8 minutes until soft, then add the garlic.',
      'Slowly whisk in the warm stock, a ladle at a time at first so it does not lump.',
      'Add the andouille, Cajun seasoning, bay leaves, thyme and cayenne. Simmer uncovered 1 hour, skimming any oil off the top.',
      'Add the chicken and simmer 30 minutes more until tender.',
      'Discard the bay leaves, stir in the green onions, and taste for salt and heat.',
      'Serve over rice, with filé powder and hot sauce at the table.',
    ],
    note: 'Your saved page is a roundup of 14 Louisiana gumbos — this card holds the chicken-and-andouille standard. Full collection at the link below.',
  },

  'fam-c-top-cookout-desserts-recipes-and-ideas': {
    name: 'Cookout Banana Pudding',
    emoji: '🍌',
    category: 'desserts',
    time: '25 min + 4 hr chill',
    serves: 12,
    ingredients: [
      { qty: '2 (3.4 oz) boxes', item: 'instant vanilla pudding mix' },
      { qty: '3 cups', item: 'cold whole milk' },
      { qty: '1 (14 oz) can', item: 'sweetened condensed milk' },
      { qty: '1 tbsp', item: 'vanilla extract' },
      { qty: '8 oz', item: 'cream cheese, softened' },
      { qty: '3 cups', item: 'heavy cream, whipped (or 16 oz Cool Whip)' },
      { qty: '1 (12 oz) box', item: 'vanilla wafers' },
      { qty: '6', item: 'ripe bananas, sliced' },
    ],
    steps: [
      'Whisk the pudding mixes with the cold milk until thickened, about 2 minutes. Refrigerate 5 minutes.',
      'Beat the cream cheese until smooth, then beat in the sweetened condensed milk and vanilla.',
      'Fold the pudding into the cream cheese mixture, then fold in two-thirds of the whipped cream.',
      'Layer in a 9x13 dish or trifle bowl: wafers, banana slices, then pudding. Repeat twice, ending with pudding.',
      'Spread the remaining whipped cream over the top and crush a handful of wafers over it.',
      'Chill at least 4 hours, ideally overnight — the wafers need that time to soften into cake.',
    ],
    note: 'Your saved page is a cookout dessert roundup — this card holds the one that always disappears first. Travels well and gets better sitting in the cooler. Full collection at the link below.',
  },

  'fam-c-spanish-recipes': {
    name: 'Spanish Chicken & Chorizo Rice',
    emoji: '🥘',
    time: '50 min',
    serves: 6,
    ingredients: [
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '8', item: 'bone-in chicken thighs' },
      { qty: '8 oz', item: 'Spanish chorizo, sliced' },
      { qty: '1', item: 'onion, diced' },
      { qty: '1', item: 'red bell pepper, sliced' },
      { qty: '4 cloves', item: 'garlic, minced' },
      { qty: '2 cups', item: 'short-grain or bomba rice' },
      { qty: '1 tsp', item: 'smoked paprika (pimentón)' },
      { qty: '1 pinch', item: 'saffron threads, crumbled' },
      { qty: '1 (14 oz) can', item: 'diced tomatoes' },
      { qty: '4 cups', item: 'chicken stock, hot' },
      { qty: '1 cup', item: 'frozen peas' },
      { qty: '1', item: 'lemon, cut into wedges' },
      { qty: 'to taste', item: 'salt, pepper and parsley' },
    ],
    steps: [
      'Season the chicken well. Brown it skin-side down in the olive oil in a wide shallow pan until deeply golden, 6–8 minutes, then set aside.',
      'Fry the chorizo in the same pan until its red oil renders out, then add the onion and pepper and cook until soft.',
      'Add the garlic, smoked paprika and saffron and stir 30 seconds.',
      'Stir in the rice and coat it in the oil, then add the tomatoes and hot stock. Season and stir once.',
      'Nestle the chicken back in skin-side up. From here, do not stir again — that is what builds the crust on the bottom.',
      'Simmer uncovered 20–25 minutes until the rice is tender and the liquid absorbed. Scatter the peas over in the last 5 minutes.',
      'Rest 5 minutes off the heat, then serve with parsley and lemon wedges.',
    ],
    note: 'Your saved page is a Spanish recipe collection — this card holds an easy weeknight arroz con pollo. Full collection at the link below.',
  },

  'fam-c-9-best-quick-and-easy-shrimp-and-pasta-r': {
    name: 'Garlic Butter Shrimp Pasta',
    emoji: '🍤',
    time: '25 min',
    serves: 4,
    ingredients: [
      { qty: '12 oz', item: 'linguine or spaghetti' },
      { qty: '1 1/2 lbs', item: 'large shrimp, peeled and deveined' },
      { qty: '6 tbsp', item: 'butter' },
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '6 cloves', item: 'garlic, minced' },
      { qty: '1/2 tsp', item: 'red pepper flakes' },
      { qty: '1/2 cup', item: 'dry white wine (or chicken broth)' },
      { qty: '1', item: 'lemon (zest and juice)' },
      { qty: '1/2 cup', item: 'Parmesan, grated' },
      { qty: '1/4 cup', item: 'fresh parsley, chopped' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Boil the pasta in well-salted water to al dente. Reserve 1 cup of the pasta water before draining.',
      'Pat the shrimp dry and season with salt and pepper. Sear in the olive oil over medium-high, 1–2 minutes per side, just until pink. Remove — they will finish in the sauce.',
      'Lower the heat to medium, melt the butter in the same pan, and cook the garlic and red pepper flakes 1 minute until fragrant but not browned.',
      'Pour in the wine and simmer 2 minutes, scraping up anything stuck to the pan.',
      'Add the drained pasta, the lemon zest and juice, the Parmesan and a splash of pasta water. Toss hard until it emulsifies into a glossy sauce.',
      'Return the shrimp, toss to warm through, and finish with parsley. Loosen with more pasta water if it tightens.',
    ],
    note: 'Your saved page is a roundup of 9 quick shrimp pastas — this card holds the fastest of them, about 25 minutes start to finish. Full collection at the link below.',
  },

  'fam-c-air-fryer-recipes': {
    name: 'Air Fryer Crispy Chicken Thighs',
    emoji: '🍗',
    time: '30 min',
    serves: 4,
    ingredients: [
      { qty: '4', item: 'bone-in skin-on chicken thighs' },
      { qty: '1 tbsp', item: 'olive oil' },
      { qty: '1 tsp', item: 'garlic powder' },
      { qty: '1 tsp', item: 'smoked paprika' },
      { qty: '1 tsp', item: 'salt' },
      { qty: '1/2 tsp', item: 'onion powder' },
      { qty: '1/2 tsp', item: 'black pepper' },
      { qty: '1/2 tsp', item: 'baking powder (for extra crisp skin)' },
    ],
    steps: [
      'Pat the chicken thighs completely dry — skin that is even slightly damp will not crisp.',
      'Mix the garlic powder, paprika, salt, onion powder, pepper and baking powder.',
      'Rub the thighs with the olive oil, then coat all over with the spice mix, getting some under the skin.',
      'Preheat the air fryer to 380°F for 3 minutes.',
      'Air fry skin-side DOWN for 12 minutes, then flip skin-side up and cook 10–12 minutes more, until the skin is deep golden and the thigh reads 175°F.',
      'Rest 5 minutes before serving. Thighs are more forgiving than breasts here — 175°F leaves them juicier than 165°F.',
    ],
    note: 'Your saved page is an air fryer recipe index — this card holds the one worth memorizing. The app also has a full air fryer collection under the Air Fryer filter.',
  },

  'fam-c-12-game-changing-chicken-recipes': {
    name: 'Marry Me Chicken',
    emoji: '🍗',
    time: '35 min',
    serves: 4,
    ingredients: [
      { qty: '4', item: 'boneless skinless chicken breasts, pounded even' },
      { qty: '2 tbsp', item: 'olive oil' },
      { qty: '1/4 cup', item: 'flour, for dredging' },
      { qty: '3 cloves', item: 'garlic, minced' },
      { qty: '1 cup', item: 'chicken broth' },
      { qty: '1 cup', item: 'heavy cream' },
      { qty: '1/2 cup', item: 'sun-dried tomatoes in oil, chopped' },
      { qty: '1/2 cup', item: 'Parmesan, grated' },
      { qty: '1 tsp', item: 'dried oregano' },
      { qty: '1/2 tsp', item: 'red pepper flakes' },
      { qty: '1/4 cup', item: 'fresh basil, torn' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Season the chicken and dredge lightly in flour, shaking off the excess.',
      'Sear in the olive oil over medium-high, 4–5 minutes per side, until golden and nearly cooked through. Set aside.',
      'Lower the heat, add the garlic and cook 30 seconds, then pour in the broth and scrape up the browned bits.',
      'Add the cream, sun-dried tomatoes, Parmesan, oregano and red pepper flakes. Simmer 5 minutes until it thickens enough to coat a spoon.',
      'Return the chicken with its juices and simmer 5 more minutes until cooked through (165°F).',
      'Finish with basil. Serve over pasta, rice or mashed potatoes with plenty of the sauce.',
    ],
    note: 'Your saved page is a roundup of 12 chicken recipes — this card holds the one that earns the name. Full collection at the link below.',
  },

  'fam-c-need-some-cooking-inspo-here-are-the-top': {
    name: 'One-Pot Creamy Garlic Pasta',
    emoji: '🍝',
    time: '25 min',
    serves: 4,
    ingredients: [
      { qty: '12 oz', item: 'fettuccine or linguine' },
      { qty: '4 tbsp', item: 'butter' },
      { qty: '8 cloves', item: 'garlic, minced' },
      { qty: '4 cups', item: 'chicken or vegetable broth' },
      { qty: '1 cup', item: 'heavy cream' },
      { qty: '1 cup', item: 'Parmesan, grated' },
      { qty: '1/2 tsp', item: 'red pepper flakes' },
      { qty: '1/4 cup', item: 'fresh parsley, chopped' },
      { qty: 'to taste', item: 'salt and black pepper' },
    ],
    steps: [
      'Melt the butter in a wide pot over medium and cook the garlic 1–2 minutes until fragrant but not coloured.',
      'Add the broth and bring to a boil, then add the pasta straight in, dry.',
      'Cook 10–12 minutes, stirring often, until the pasta is al dente and most of the liquid has been absorbed into a starchy sauce.',
      'Stir in the cream, Parmesan and red pepper flakes and simmer 2 minutes until it thickens and coats the strands.',
      'Season well, finish with parsley, and serve straight from the pot.',
    ],
    note: 'Your saved page is a "top 10 most popular recipes" roundup — this card holds the crowd-pleaser of the group. One pot, no colander. Full collection at the link below.',
  },

  'fam-c-foodiefridiy-no-116-halloween-recipes-an': {
    name: 'Halloween Monster Cookie Bars',
    emoji: '🎃',
    category: 'desserts',
    time: '40 min',
    serves: 16,
    ingredients: [
      { qty: '1/2 cup', item: 'butter, softened' },
      { qty: '1 cup', item: 'peanut butter' },
      { qty: '1 cup', item: 'brown sugar' },
      { qty: '1/2 cup', item: 'granulated sugar' },
      { qty: '2', item: 'eggs' },
      { qty: '2 tsp', item: 'vanilla extract' },
      { qty: '1 1/2 cups', item: 'all-purpose flour' },
      { qty: '1 1/2 cups', item: 'quick oats' },
      { qty: '1 tsp', item: 'baking soda' },
      { qty: '1/2 tsp', item: 'salt' },
      { qty: '1 cup', item: 'candy-coated chocolates in orange and black' },
      { qty: '1 cup', item: 'chocolate chips' },
      { qty: 'to decorate', item: 'candy eyeballs' },
    ],
    steps: [
      'Heat the oven to 350°F and line a 9x13 pan with parchment, leaving an overhang.',
      'Beat the butter, peanut butter and both sugars until light, 2–3 minutes. Beat in the eggs and vanilla.',
      'Mix in the flour, oats, baking soda and salt until just combined.',
      'Fold in most of the candy-coated chocolates and chocolate chips, saving a handful for the top.',
      'Press the dough evenly into the pan and scatter the reserved candies and the candy eyeballs over the surface.',
      'Bake 22–25 minutes until the edges are set and the middle is still slightly soft — they firm up as they cool.',
      'Cool completely in the pan before lifting out and cutting into bars.',
    ],
    note: 'Your saved page is a Halloween recipe-and-DIY link party — this card holds the bake worth keeping. Full collection at the link below.',
  },

  'fam-c-12-classic-desserts-for-adulting-so-hard': {
    name: 'Classic Crème Brûlée',
    emoji: '🍮',
    category: 'desserts',
    time: '1 hr + 4 hr chill',
    serves: 6,
    ingredients: [
      { qty: '2 cups', item: 'heavy cream' },
      { qty: '1', item: 'vanilla bean, split (or 2 tsp vanilla extract)' },
      { qty: '6', item: 'egg yolks' },
      { qty: '1/2 cup', item: 'granulated sugar' },
      { qty: '1 pinch', item: 'salt' },
      { qty: '6 tbsp', item: 'granulated sugar, for the tops' },
    ],
    steps: [
      'Heat the oven to 325°F. Warm the cream with the split vanilla bean until it just steams, then take it off the heat and steep 15 minutes.',
      'Whisk the egg yolks, sugar and salt until pale.',
      'Temper: pour the warm cream into the yolks in a thin stream while whisking constantly, so the eggs do not scramble. Strain through a fine sieve.',
      'Divide among six ramekins and set them in a roasting tin. Pour hot water into the tin to come halfway up the sides.',
      'Bake 35–40 minutes, until the edges are set but the centres still wobble like jelly when nudged.',
      'Cool, then chill at least 4 hours or overnight.',
      'Just before serving, blot the surfaces dry, sprinkle each with 1 tbsp sugar, and torch until deep amber. Let the sugar harden for a minute — it should crack under a spoon.',
    ],
    note: 'Your saved page is a roundup of 12 classic desserts — this card holds the one worth learning properly. Full collection at the link below.',
  },

};

// Pages swept in from the catch-all OneNote tabs ("To Be Filed", "Quick
// Notes") that aren't food. They came through the bulk clip import and
// rendered as empty recipe cards, which they can never stop being — there is
// no recipe on the other end of the link. Dropped from the recipe list; the
// originals are untouched in OneNote.
const FAMILY_DROP = new Set([
  'fam-c-tony-robbins-wheel-of-life',                // goal-setting worksheet
  'fam-c-your-free-tarot-reading---everyday-horos',  // horoscope site
  'fam-c-free-legal-help-for-texas-bankruptcy',      // legal aid
  'fam-c-the-benefits-of-having-sex-more-often',     // health article
  'fam-c-try-the-onenote-web-clipper',               // the clipper's own install page
  'fam-c-jobs-for-people-with-generalized-anxiety',  // careers article
  'fam-c-the-unbelievable-anti-cancer-effects-of',   // essential-oil health claim
  'fam-c-scholarships-for-college-search',           // school district notice
  'fam-c-50-legitimate-ways-to-make-money-from-ho',  // side-hustle listicle
  'fam-c-kodi-17-krypton-add-ons-whyingo-kodi-tut',  // media-centre software
  'fam-c-5-ways-to-use-wallpaper-in-the-kitchen',    // home decor
  'fam-c-your-grief-is-a-reflection-of-your-love',   // personal essay
  'fam-c-geico-insurance-agency-portfolio',          // insurance quote
  'fam-c-lessons-learned-in-life',                   // inspirational blog
  'fam-c-the-moment-i-realized-my-marriage-would',   // personal essay
  'fam-c-firstleaf-the-best-wine-the-best-way-you',  // wine club signup
  'fam-c-how-to-paint-melamine-and-laminate-surfa',  // home improvement
]);

// Duplicate clips: the same recipe saved twice. The OneNote clipper often
// mangled the URL on one of the copies (a trailing "-Q"/"Home"/"Get", http
// instead of https, or a slug alias), so the dedupe-by-source at import
// couldn't tell they were the same page and both cards survived.
//
// Each entry below is dropped in favour of the copy named beside it — kept
// because it has the recipe fetched from the real page rather than a version
// written from the title. Recipes that merely SHARE a name but are genuinely
// different (two unrelated Lemon Bars, two Shrimp Tacos) are not listed here;
// those keep both cards and are renamed with their source instead.
const FAMILY_DUPES = new Set([
  // same page, clipper appended "-Q" to the URL
  'fam-c-one-pot-creamy-cajun-sausage-pasta', // → fam-cajun-sausage-pasta
  // identical content, one saved over http and one over https
  'fam-c-white-chicken-enchilada-pasta-2',    // → fam-c-white-chicken-enchilada-pasta
  // same page, clipper appended "Home" to the URL
  'fam-c-mediterranean-style-garlic-shrimp-2',// → fam-c-mediterranean-style-garlic-shrimp
  // same page, clipper appended "Get" to the URL
  'fam-c-chicken-and-sweet-potato-bowl',      // → fam-c-chicken-and-sweet-potato-bowl-2
  // three copies of Emeril's sauce piquante; -3 has the real fetched recipe
  'fam-c-chicken-sauce-piquante',             // → fam-c-chicken-sauce-piquante-3
  'fam-c-chicken-sauce-piquante-2',           // → fam-c-chicken-sauce-piquante-3
  // same Food & Wine article (id 11682637) under two different slugs
  'fam-c-country-captain-chicken-2',          // → fam-c-country-captain-chicken
  // Kandy typed this one out in full; the clip is a stub of the same recipe
  'fam-c-creamy-butter-chicken',              // → fam-t-creamy-butter-chicken
  // copymethat.com mirror of the ohbiteit.com original
  'fam-c-hot-fudge-brownie-bread',            // → fam-c-hot-fudge-brownie-bread-2
  // a third Greek Salad Penne, written from the title with no source; Kandy
  // already has the Food Network original and her own typed version
  'fam-x-greek-salad-penne',                  // → fam-t-greek-salad-penne
  // a fourth copy of Emeril's sauce piquante — The Daily Meal's reprint,
  // saved with the clipper's raw page title ("… at www.foodnetwork.com")
  'fam-c-chicken-sauce-piquante-by-emeril-lagasse', // → fam-c-chicken-sauce-piquante-3
]);
