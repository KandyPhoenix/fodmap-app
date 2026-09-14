// ════════════════════════════════════════════
//  Offline nutrition estimator for meal text
//  estimateMealNutrition('leftover chicken and rice')
//    → { cal, protein, fiber, parts: [{ label, mult }] }  or null
//
//  Typical-portion values, rounded, informed by USDA FoodData Central
//  averages — decent starting guesses, never precise measurements. The UI
//  always shows the breakdown and lets you edit before/after saving.
//  Works fully offline (no API), matching this PWA's offline-first design.
//
//  Matching rules that keep guesses sane:
//  - Dishes match before components, and a matched span is consumed, so
//    "chicken stir fry" never also counts "chicken".
//  - Within a list, more specific entries sit above the words they contain
//    ("brown rice" above "rice", "cottage cheese" above "cheese").
//  - Countable foods ("2 eggs", "three tacos") multiply; countable entries
//    with no number use a typical count (eggs → 2, pizza → 2 slices).
// ════════════════════════════════════════════

(function () {

  // E(label, cal, protein g, fiber g, pattern[, opts])
  // opts.per  — a countable item: a number right before it multiplies it
  // opts.dflt — assumed count when the text gives none
  const E = (label, cal, protein, fiber, pattern, opts) =>
    Object.assign({ label, cal, protein, fiber, re: new RegExp('\\b(?:' + pattern + ')\\b', 'i') }, opts || {});

  // ── Dishes: multi-word / composed meals ──
  const DISHES = [
    E('chicken caesar salad', 470, 35, 4, '(?:grilled )?chicken caesar(?: salad)?'),
    E('caesar salad', 300, 8, 3, 'caesar salad'),
    E('chicken salad (mayo, 1/2 cup)', 270, 20, 1, 'chicken salad'),
    E('tuna salad (1/2 cup)', 190, 16, 0, 'tuna salad'),
    E('egg salad (1/2 cup)', 230, 10, 0, 'egg salad'),
    E('potato salad (1/2 cup)', 180, 3, 2, 'potato salad'),
    E('pasta salad (1 cup)', 250, 7, 2, 'pasta salad'),
    E('cobb salad', 500, 32, 5, 'cobb salad'),
    E('avocado toast', 300, 7, 6, 'avocado toast'),
    E('PB&J sandwich', 380, 12, 3, 'pb ?(?:and|&|n) ?j|pbj|peanut butter (?:and|&) jelly(?: sandwich)?'),
    E('grilled cheese', 400, 14, 2, 'grilled cheese(?: sandwich)?'),
    E('BLT', 400, 15, 2, 'blt(?: sandwich)?'),
    E('sandwich', 380, 18, 3, '(?:turkey|ham|chicken|roast beef|club|veggie|ham (?:and|&|n) cheese|turkey (?:and|&|n) cheese)? ?sandwich(?:es)?|hoagies?|paninis?'),
    E('sub (6 inch)', 400, 20, 4, '(?:turkey |ham |italian |meatball )?sub(?:marine)?s?(?= |$)'),
    E('breakfast burrito', 450, 20, 4, 'breakfast burrito'),
    E('breakfast sandwich', 400, 18, 2, 'breakfast sandwich|egg mcmuffin|sausage mcmuffin'),
    E('burrito bowl', 600, 30, 10, 'burrito bowl|chipotle bowl'),
    E('mac and cheese (1.5 cups)', 470, 16, 2, 'mac (?:and|&|n) cheese|macaroni (?:and|&) cheese'),
    E('fried rice (1.5 cups)', 400, 12, 3, '(?:chicken |pork |shrimp |veggie |vegetable )?fried rice'),
    E('stir fry (protein & veg)', 350, 25, 5, '(?:chicken |beef |shrimp |pork |tofu |veggie )?stir[- ]?fry'),
    E('chicken noodle soup (1.5 cups)', 150, 12, 2, 'chicken noodle soup'),
    E('eggs benedict', 600, 22, 2, 'eggs? benedict'),
    E('huevos rancheros', 480, 20, 6, 'huevos rancheros'),
    E('french toast (2 slices)', 360, 11, 2, 'french toast'),
    E('overnight oats', 350, 12, 6, 'overnight oats'),
    E('chia pudding', 230, 9, 11, 'chia (?:seed )?pudding'),
    E('acai bowl', 400, 6, 8, 'acai bowl'),
    E('poke bowl', 550, 30, 6, 'poke(?: bowl)?'),
    E('pad thai', 600, 22, 4, 'pad thai'),
    E('ramen (bowl)', 450, 18, 3, 'ramen(?: noodles?)?'),
    E('pho (bowl)', 450, 25, 3, 'pho'),
    E('egg noodles (1.5 cups)', 330, 12, 3, 'egg noodles?'),
    E('sushi roll (8 pc)', 300, 9, 2, 'sushi(?: rolls?)?|california rolls?'),
    E('protein shake', 160, 25, 1, 'protein (?:shake|smoothie|drink)'),
    E('protein bar', 200, 20, 3, 'protein bar'),
    E('granola bar', 190, 4, 2, 'granola bar|cereal bar'),
    E('pop-tart', 400, 4, 1, 'pop[- ]?tarts?'),
    E('spaghetti with sauce (1.5 cups)', 450, 18, 4, 'spaghetti(?: noodles?)?(?: (?:and|&|with) meat ?(?:balls|sauce))?|pasta (?:with |and )?(?:meat ?sauce|marinara|red sauce)'),
    E('lasagna (1 piece)', 380, 22, 3, 'lasagn[ae]'),
    E('meatloaf (1 slice)', 280, 20, 1, 'meat ?loaf'),
    E('pot roast (plate)', 400, 30, 3, 'pot roast'),
    E('beef stew (1.5 cups)', 330, 26, 4, '(?:beef )?stew'),
    E('chili (1.5 cups)', 400, 28, 12, 'chili'),
    E('casserole (1.5 cups)', 400, 22, 3, 'casserole|hot ?dish'),
    E('curry (no rice)', 400, 22, 5, '(?:chicken |beef |veggie |vegetable |thai |coconut )?curry'),
    E('fajitas (2, w/ tortillas)', 450, 30, 6, 'fajitas?'),
    E('quesadilla', 500, 22, 3, 'quesadillas?'),
    E('nachos (plate)', 600, 20, 6, 'nachos'),
    E('enchiladas (2)', 480, 22, 5, 'enchiladas?'),
    E('sweet potato fries (1 cup)', 160, 2, 3, 'sweet potato fries'),
    E('sweet potato (medium)', 115, 2, 4, 'sweet potato(?:es)?|yams?'),
    E('mashed potatoes (1 cup)', 210, 4, 3, 'mashed potato(?:es)?'),
    E('hash browns (1 cup)', 200, 2, 2, 'hash ?browns?'),
    E('baked potato (medium)', 160, 4, 4, 'baked potato'),
    E('egg whites (1/2 cup)', 65, 13, 0, 'egg whites?|liquid egg'),
    E('deviled eggs (2 halves)', 130, 6, 0, 'deviled eggs?'),
    E('omelet (3-egg, cheese)', 350, 21, 1, 'omelett?e?s?'),
    E('frittata (slice)', 250, 16, 1, 'frittatas?'),
    E('scrambled eggs (2, w/ butter)', 200, 13, 0, 'scrambled eggs?'),
    E('cottage cheese (1 cup)', 180, 25, 0, 'cottage cheese'),
    E('greek yogurt (1 cup)', 130, 22, 0, 'greek yogurt|skyr'),
    E('cream cheese (2 tbsp)', 100, 2, 0, 'cream cheese'),
    E('sour cream (2 tbsp)', 45, 1, 0, 'sour cream'),
    E('peanut butter (2 tbsp)', 190, 8, 2, 'peanut butter|almond butter|\\bpb\\b|nut butter'),
    E('almond milk (1 cup)', 35, 1, 0, 'almond milk|oat milk|soy milk'),
    E('orange juice (1 cup)', 110, 2, 0, 'orange juice|\\boj\\b'),
    E('garlic bread (1 slice)', 160, 4, 1, 'garlic bread'),
    E('english muffin', 130, 5, 1, 'english muffin'),
    E('cinnamon roll', 420, 6, 2, 'cinnamon roll|cinnamon bun'),
    E('trail mix (1/4 cup)', 175, 5, 2, 'trail mix'),
    E('green beans (1 cup)', 45, 2, 4, 'green beans'),
    E('grilled chicken (4 oz)', 190, 35, 0, 'grilled chicken(?: breast)?|chicken breast'),
    E('rotisserie chicken (quarter)', 300, 35, 0, 'rotisserie chicken'),
    E('chicken tenders (3)', 350, 25, 1, 'chicken (?:tenders?|strips?|fingers?)'),
    E('chicken nuggets (6)', 280, 13, 1, 'chicken nuggets?'),
    E('ground beef (4 oz cooked)', 280, 29, 0, 'ground beef|hamburger meat|beef crumbles'),
    E('ground turkey (4 oz cooked)', 220, 30, 0, 'ground turkey|turkey crumbles'),
    E('cheeseburger (w/ bun)', 550, 28, 2, 'cheese ?burgers?'),
    E('burger (w/ bun)', 500, 25, 2, 'burgers?|hamburgers?'),
    E('hot dog (w/ bun)', 280, 10, 1, 'hot ?dogs?|corn ?dogs?'),
    E('pulled pork (5 oz)', 310, 28, 0, 'pulled pork'),
    E('pork chop', 250, 26, 0, 'pork ?chops?'),
    E('white fish (4 oz)', 120, 25, 0, 'tilapia|cod|halibut|white fish|mahi'),
    E('fish and chips', 800, 30, 5, 'fish (?:and|&|n) chips'),
    E('fish tacos (2)', 440, 24, 5, 'fish tacos?'),
    E('ice cream (1 cup)', 270, 5, 1, 'ice cream|gelato|frozen yogurt|froyo'),
    E('onion rings', 300, 4, 3, 'onion rings'),
    E('mozzarella sticks (4)', 330, 14, 1, 'mozzarella sticks?|cheese sticks?'),
    E('string cheese (1)', 80, 7, 0, 'string cheese'),
    E('charcuterie (small plate)', 450, 18, 2, 'charcuterie'),
    E('lactose-free yogurt (1 cup)', 140, 8, 0, 'lactose[- ]?free yogurt'),
    E('rice cake', 35, 1, 0, 'rice cakes?', { per: true, dflt: 2 }),
    E('tortilla chips (1 oz) & salsa', 170, 3, 2, '(?:tortilla )?chips (?:and|&|with) salsa'),
    E('takeout (typical plate)', 600, 25, 4, 'take[- ]?out|takeaway'),
    E('leftovers (mixed plate)', 450, 22, 4, 'leftovers'),
  ];

  // ── Single components (typical portions) ──
  const COMPONENTS = [
    E('egg', 80, 6, 0, 'eggs?|hard[- ]?boiled eggs?', { per: true, dflt: 2 }),
    E('bacon (slice)', 45, 3, 0, 'bacon', { per: true, dflt: 2 }),
    E('sausage (link)', 90, 5, 0, 'sausages?|brats?|bratwurst|kielbasa', { per: true, dflt: 2 }),
    E('chicken (4 oz cooked)', 190, 35, 0, 'chicken(?: thighs?| legs?)?'),
    E('steak (6 oz)', 350, 45, 0, 'steaks?|sirloin|ribeye|filet'),
    E('beef (4 oz)', 280, 28, 0, 'beef|brisket'),
    E('turkey (4 oz)', 190, 32, 0, 'turkey'),
    E('ham (3 oz)', 120, 18, 0, 'ham'),
    E('deli meat (3 oz)', 100, 16, 0, 'deli (?:meat|turkey|ham)|lunch ?meat|cold cuts'),
    E('salmon (4 oz)', 230, 25, 0, 'salmon'),
    E('tuna (1 can)', 100, 22, 0, 'tuna'),
    E('shrimp (4 oz)', 120, 23, 0, 'shrimp|prawns?'),
    E('fish (4 oz)', 140, 25, 0, 'fish|trout|snapper'),
    E('tofu (1/2 block)', 180, 20, 2, 'tofu'),
    E('meatball', 75, 5, 0, 'meat ?balls?', { per: true, dflt: 3 }),
    E('wings (6)', 430, 32, 0, '(?:chicken )?wings?'),
    E('pepperoni (1 oz)', 140, 6, 0, 'pepperoni|salami'),
    E('jerky (1 oz)', 80, 13, 0, 'jerky'),
    E('brown rice (1 cup cooked)', 250, 5, 4, 'brown rice'),
    E('rice (1 cup cooked)', 205, 4, 1, '(?:white |jasmine |basmati )?rice'),
    E('quinoa (1 cup cooked)', 220, 8, 5, 'quinoa'),
    E('pasta (1.5 cups cooked)', 330, 12, 4, 'pasta|penne|noodles?|gnocchi|mac(?:aroni)?|orzo|ziti|rigatoni|fettuccine|linguine'),
    E('potato (medium)', 160, 4, 4, 'potato(?:es)?'),
    E('fries (medium)', 350, 4, 4, 'fries|french fries'),
    E('tater tots (10)', 170, 2, 2, 'tater tots?'),
    E('cornbread (piece)', 200, 4, 1, 'corn ?bread'),
    E('bread (slice)', 80, 4, 1, 'bread|toast|sourdough', { per: true, dflt: 1 }),
    E('GF bread (slice)', 80, 2, 1, 'gluten[- ]?free bread|gf bread|gf toast', { per: true, dflt: 1 }),
    E('roll', 110, 3, 1, '(?:dinner )?rolls?|buns?', { per: true, dflt: 1 }),
    E('biscuit', 200, 4, 1, 'biscuits?', { per: true, dflt: 1 }),
    E('tortilla / wrap', 150, 4, 2, 'tortillas?|wraps?|pita|flatbread|naan', { per: true, dflt: 1 }),
    E('bagel', 280, 9, 2, 'bagels?', { per: true, dflt: 1 }),
    E('croissant', 270, 5, 2, 'croissants?', { per: true, dflt: 1 }),
    E('muffin (bakery)', 400, 6, 2, 'muffins?', { per: true, dflt: 1 }),
    E('donut', 250, 3, 1, 'donuts?|doughnuts?', { per: true, dflt: 1 }),
    E('pancake', 115, 3, 1, 'pancakes?|flapjacks?', { per: true, dflt: 3 }),
    E('waffle', 155, 4, 1, 'waffles?', { per: true, dflt: 2 }),
    E('oatmeal (1 cup cooked)', 160, 6, 4, 'oatmeal|oats|porridge'),
    E('cereal with milk (1 bowl)', 250, 8, 3, 'cereal|granola(?! bar)|muesli'),
    E('crackers (10)', 130, 2, 1, 'crackers?'),
    E('taco', 170, 9, 2, 'tacos?', { per: true, dflt: 2 }),
    E('burrito (large)', 600, 25, 8, 'burritos?'),
    E('pizza (slice)', 290, 12, 2, '(?:cheese |pepperoni |veggie )?pizza', { per: true, dflt: 2 }),
    E('soup (1.5 cups)', 170, 8, 2, 'soup|bisque|chowder'),
    E('salad (side, dressed)', 120, 2, 3, 'salads?|greens|arugula|romaine|lettuce'),
    E('broccoli (1 cup)', 55, 4, 5, 'broccoli'),
    E('mixed vegetables (1 cup)', 60, 3, 4, 'veggies|vegetables|mixed veg'),
    E('carrots (1 cup)', 50, 1, 4, 'carrots?'),
    E('zucchini (1 cup)', 30, 1, 2, 'zucchini|squash'),
    E('spinach / kale (cooked 1/2 cup)', 20, 2, 2, 'spinach|kale'),
    E('cucumber & tomato (1 cup)', 25, 1, 1, 'cucumbers?|tomato(?:es)?'),
    E('peppers (1 cup)', 30, 1, 2, '(?:bell )?peppers?'),
    E('corn (1 cup / ear)', 130, 4, 3, 'corn(?: on the cob)?'),
    E('peas (1/2 cup)', 60, 4, 4, 'peas'),
    E('beans (1/2 cup)', 110, 7, 6, 'beans?|black beans|pinto|cannellini|chickpeas|garbanzo'),
    E('lentils (1/2 cup cooked)', 115, 9, 8, 'lentils?|dal|dahl'),
    E('edamame (1 cup)', 190, 17, 8, 'edamame'),
    E('hummus (1/4 cup)', 100, 5, 4, 'hummus'),
    E('avocado (half)', 120, 1, 5, 'avocado|guac(?:amole)?'),
    E('banana', 105, 1, 3, 'bananas?', { per: true, dflt: 1 }),
    E('apple', 95, 0, 4, 'apples?', { per: true, dflt: 1 }),
    E('orange', 65, 1, 3, 'oranges?|mandarins?|clementines?', { per: true, dflt: 1 }),
    E('berries (1 cup)', 70, 1, 4, 'berries|strawberr(?:y|ies)|blueberr(?:y|ies)|raspberr(?:y|ies)|blackberr(?:y|ies)'),
    E('grapes (1 cup)', 60, 1, 1, 'grapes?'),
    E('melon (1 cup)', 55, 1, 1, 'melon|cantaloupe|honeydew|watermelon'),
    E('pineapple (1 cup)', 80, 1, 2, 'pineapple'),
    E('kiwi', 45, 1, 2, 'kiwis?', { per: true, dflt: 2 }),
    E('fruit (1 cup)', 80, 1, 3, 'fruit(?: salad| cup)?'),
    E('cheese (1 oz)', 110, 7, 0, 'cheese|cheddar|mozzarella|swiss|feta|parmesan|goat cheese'),
    E('yogurt (1 cup)', 130, 10, 0, 'yogurt'),
    E('milk (1 cup)', 120, 8, 0, '(?:lactose[- ]?free )?milk'),
    E('butter (1 tbsp)', 100, 0, 0, 'butter|ghee'),
    E('olive oil (1 tbsp)', 120, 0, 0, 'olive oil|oil'),
    E('mayo (1 tbsp)', 90, 0, 0, 'mayo(?:nnaise)?'),
    E('dressing (2 tbsp)', 130, 1, 0, 'dressing|ranch|vinaigrette'),
    E('salsa (1/4 cup)', 20, 1, 1, 'salsa|pico'),
    E('ketchup / bbq (2 tbsp)', 40, 0, 0, 'ketchup|bbq sauce|barbecue sauce'),
    E('honey / syrup (1 tbsp)', 60, 0, 0, 'honey|maple syrup|syrup|jam|jelly'),
    E('nuts (1 oz)', 170, 6, 3, 'nuts|almonds?|cashews?|pecans?|walnuts?|peanuts?|pistachios?|macadamias?'),
    E('seeds (2 tbsp)', 100, 4, 2, 'seeds|chia|flax|pumpkin seeds|sunflower seeds'),
    E('chips (1 oz)', 150, 2, 1, 'chips|crisps|doritos|pringles'),
    E('popcorn (3 cups)', 95, 3, 4, 'popcorn'),
    E('pretzels (1 oz)', 110, 3, 1, 'pretzels?'),
    E('dark chocolate (1 oz)', 150, 2, 2, '(?:dark )?chocolate|candy bar'),
    E('candy (small handful)', 150, 0, 0, 'candy|gummies|skittles'),
    E('cookie', 75, 1, 0, 'cookies?', { per: true, dflt: 2 }),
    E('brownie', 230, 3, 1, 'brownies?', { per: true, dflt: 1 }),
    E('cake (slice)', 350, 4, 1, 'cake|cupcakes?|cheesecake'),
    E('pie (slice)', 330, 3, 2, 'pie|cobbler'),
    E('smoothie (16 oz)', 250, 8, 4, 'smoothies?'),
    E('latte (12 oz, 2% milk)', 150, 8, 0, 'lattes?|cappuccinos?|mochas?|macchiatos?'),
    E('coffee with cream', 40, 0, 0, 'coffee|americano|espresso|cold brew'),
    E('tea', 0, 0, 0, 'tea|green tea|herbal tea'),
    E('juice (1 cup)', 110, 1, 0, 'juice|lemonade'),
    E('soda (can)', 140, 0, 0, 'soda|coke|sprite|dr pepper|root beer|pop'),
    E('sports drink (12 oz)', 80, 0, 0, 'gatorade|powerade|sports drink|electrolytes?'),
    E('energy drink', 110, 0, 0, 'energy drink|red bull|monster|celsius'),
    E('beer', 150, 1, 0, 'beers?|ipa|lager', { per: true, dflt: 1 }),
    E('wine (glass)', 125, 0, 0, 'wine|prosecco|champagne'),
  ];

  const ALL = DISHES.concat(COMPONENTS);

  const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, half: 0.5, couple: 2, few: 3, double: 2 };

  // Modifier words that never carry nutrition and can sit between a count and
  // its food ("2 leftover eggs"). Cooking methods stay OUT of this list —
  // they're part of dish names ("grilled cheese", "baked potato").
  const STOPWORDS = /\b(?:leftover|homemade|home made|big|small|large|little|quick|easy|healthy|fresh|frozen|my|mom'?s|grandma'?s|plate of|bowl of|cup of|side of|some|slow cooker|crockpot|instant pot|air fryer)\b/gi;

  function parseMult(before) {
    const m = before.match(/(\d+(?:[./]\d+)?|one|two|three|four|five|six|half|couple|few|double)(?:\s+(?:of|a|an|more|slices?|pieces?|cups?|bowls?|scoops?|glasses?|cans?|links?|strips?))*\s*$/i);
    if (!m) return null;
    const tok = m[1].toLowerCase();
    let v;
    if (NUMBER_WORDS[tok] != null) v = NUMBER_WORDS[tok];
    else if (tok.includes('/')) { const p = tok.split('/'); v = parseFloat(p[0]) / parseFloat(p[1]); }
    else v = parseFloat(tok);
    if (!isFinite(v) || v <= 0) return null;
    return { mult: Math.min(6, Math.max(0.25, v)), start: m.index };
  }

  window.estimateMealNutrition = function (text) {
    if (!text || typeof text !== 'string') return null;
    let work = ' ' + text.toLowerCase().replace(/[^a-z0-9./ ]/gi, ' ').replace(STOPWORDS, ' ') + ' ';
    const parts = [];
    let cal = 0, protein = 0, fiber = 0;
    for (const entry of ALL) {
      if (parts.length >= 6) break;
      const m = work.match(entry.re);
      if (!m) continue;
      let mult = 1;
      if (entry.per) {
        const before = work.slice(0, m.index);
        const found = parseMult(before);
        if (found) {
          mult = found.mult;
          work = work.slice(0, found.start) + ' '.repeat(before.length - found.start) + work.slice(before.length);
        } else if (entry.dflt) {
          mult = entry.dflt;
        }
      }
      cal += entry.cal * mult;
      protein += entry.protein * mult;
      fiber += entry.fiber * mult;
      parts.push({ label: entry.per && mult !== 1 ? `${entry.label} ×${mult}` : entry.label, mult });
      // consume the matched span so nothing inside it double-counts
      work = work.slice(0, m.index) + ' '.repeat(m[0].length) + work.slice(m.index + m[0].length);
    }
    if (!parts.length) return null;
    return {
      cal: Math.round(cal / 5) * 5,
      protein: Math.round(protein),
      fiber: Math.round(fiber),
      parts,
    };
  };
})();

// ════════════════════════════════════════════
//  Recipe nutrition calculator — from the ingredient list
//  estimateRecipeNutrition(recipe) → { cal, protein, fiber,  (per serving)
//    handled, total, unmatched: [names…] }  or null when too little matched.
//
//  Parses each {qty, item} line ("2 lbs", "1/2 cup", "2 medium"), converts to
//  grams with per-food cup/tbsp/unit weights, applies USDA-informed per-100g
//  values (raw basis, as recipes list them), sums, divides by serves.
//  Estimates — the UI labels them and keeps them editable.
// ════════════════════════════════════════════

(function () {

  // I(pattern, cal/100g, protein/100g, fiber/100g, measures)
  // measures: grams per cup / tbsp / unit / slice / can where they differ from
  // the generic defaults (cup 240, tbsp 15, oz 28.35, lb 453.6, can 400).
  const I = (pattern, cal, p, f, m) =>
    Object.assign({ re: new RegExp('\\b(?:' + pattern + ')\\b', 'i'), cal, p, f }, m || {});

  // Order matters: specific before general ("tomato paste" before "tomato",
  // "chicken broth" before "chicken").
  const ING = [
    // canned-fish lines name their packing liquid ("tuna in olive oil") — these
    // must match before the oil/water patterns swallow the line
    I('tuna in (?:olive |sunflower )?oil', 198, 25, 0, { can: 142 }),
    I('(?:tinned |canned )?tuna in (?:spring |brine |salted )?water|tinned tuna|canned tuna', 116, 26, 0, { can: 142 }),
    I('(?:fresh )?tuna(?: steaks?| fillets?)?', 109, 24.4, 0, { unit: 150, can: 142 }),

    // free / negligible
    I('water|salt|kosher salt|sea salt|black pepper|white pepper|pepper flakes|red pepper flakes|creole seasoning|cajun seasoning|taco seasoning|italian seasoning|seasoning|spice|paprika|cumin|cayenne|chili powder|garlic powder|onion powder|dried .*|thyme|oregano|basil|rosemary|parsley|cilantro|coriander|dill|chives?|sage|mint|lemongrass|kaffir|bay lea(?:f|ves)|vanilla(?: extract)?|vinegar|hot sauce|tabasco|worcestershire|baking soda|baking powder|cooking spray|zest|nutmeg|cinnamon|allspice|turmeric|ginger(?: powder| ground)|mustard powder|curry powder|garam masala|chill?i flakes|dashi(?: powder)?|sriracha|(?:sheets? )?nori(?: seaweed)?|seaweed|shichimi(?: togarashi)?|msg|fenugreek(?: lea(?:f|ves))?|za.?atar|sambal(?: oelek)?|zhoug|stevia|sweetener|ice', 0, 0, 0),
    I('stock cubes?|stock pots?|bouillon', 0, 0, 0),
    I('(?:chicken|beef|vegetable|veggie|bone) (?:broth|stock)|broth|stock', 5, 0.5, 0, { cup: 240 }),
    I('lemon juice|lime juice|juice of', 25, 0.4, 0, { tbsp: 15, unit: 47 }),
    I('kecap manis|sweet soy(?: sauce)?', 233, 2, 0, { tbsp: 19 }),
    I('soy sauce|tamari|coconut aminos', 53, 8, 0.8, { tbsp: 16 }),
    I('fish sauce', 35, 5, 0, { tbsp: 18 }),
    I('oyster sauce', 51, 1.4, 0, { tbsp: 18 }),
    I('dijon|mustard', 66, 4, 3, { tbsp: 15 }),
    I('salsa|pico de gallo', 27, 1.5, 1.4, { cup: 260, tbsp: 16 }),
    I('ketchup', 101, 1, 0.3, { tbsp: 17 }),
    I('bbq sauce|barbecue sauce', 172, 0.8, 0.9, { tbsp: 17 }),

    // oils & fats
    I('olive oil|avocado oil|vegetable oil|canola oil|coconut oil|sesame oil|oil', 884, 0, 0, { tbsp: 13.5, cup: 216 }),
    I('tahini|sesame paste', 595, 17, 9.3, { tbsp: 15 }),
    I('(?:crunchy |smooth )?(?:peanut|almond|cashew|nut) butter', 588, 25, 6, { tbsp: 16 }),
    I('butter(?! ?beans?)|ghee', 717, 0.9, 0, { tbsp: 14, cup: 227, unit: 113, stick: 113 }),
    I('mayonnaise|mayo', 680, 1, 0, { tbsp: 14 }),

    // dairy & eggs
    I('cream cheese', 342, 6, 0, { tbsp: 14.5, cup: 232 }),
    I('sour cream', 198, 2.4, 0, { tbsp: 12, cup: 230 }),
    I('heavy cream|whipping cream|double cream', 340, 2.1, 0, { tbsp: 15, cup: 238 }),
    I('single cream|light cream|half.?and.?half', 180, 2.8, 0, { tbsp: 15, cup: 242 }),
    I('cr[eè]me fra[iî]che', 292, 2.4, 0, { tbsp: 15, cup: 230 }),
    I('half.?and.?half', 131, 3.1, 0, { tbsp: 15, cup: 242 }),
    I('coconut milk', 197, 2, 0, { cup: 226, can: 400 }),
    I('almond milk|oat milk|soy milk', 15, 0.5, 0.2, { cup: 240 }),
    I('greek yog(?:h?urt)|skyr', 59, 10, 0, { cup: 245, tbsp: 15 }),
    I('yog(?:h?urt)', 63, 5, 0, { cup: 245 }),
    I('cottage cheese', 98, 11, 0, { cup: 226 }),
    I('labneh', 170, 7, 0, { cup: 240, tbsp: 17 }),
    I('parmesan|pecorino', 431, 38, 0, { tbsp: 5, cup: 100, oz: 28.35 }),
    I('halloumi', 321, 22, 0, { oz: 28.35, slice: 28 }),
    I('feta', 264, 14, 0, { cup: 150 }),
    I('mozzarella', 300, 22, 0, { cup: 113, oz: 28.35 }),
    I('cheddar|monterey|jack cheese|swiss|gouda|provolone|cheese', 403, 23, 0, { cup: 113, slice: 21, oz: 28.35 }),
    I('(?:lactose.?free )?(?:whole |2% |skim |low.?fat )?milk', 55, 3.3, 0, { cup: 244 }),
    I('egg yolks?', 322, 16, 0, { unit: 17 }),
    I('egg noodles?', 384, 14, 3, { unit: 63, cup: 38 }),
    I('egg whites?|liquid egg', 52, 11, 0, { cup: 243, unit: 33 }),
    I('eggs?', 143, 12.6, 0, { unit: 50 }),

    // meats & fish (raw basis)
    I('bacon', 417, 13, 0, { slice: 28, unit: 28 }),
    I('(?:andouille|smoked|italian|breakfast)? ?sausage|andouille|kielbasa|chorizo', 300, 12, 0, { unit: 75, slice: 15 }),
    I('ground beef|hamburger', 215, 18.6, 0),
    I('ground turkey|turkey mince', 150, 18.7, 0),
    I('ground chicken|chicken mince', 143, 17.4, 0),
    I('ground pork', 263, 16.9, 0),
    I('round steak|grillades|cube steak|sirloin|flank|skirt steak|steak|beef roast|chuck|brisket|stew meat|beef', 137, 21.8, 0),
    I('lamb(?: mince| shoulder| leg| steaks?)?', 282, 16.6, 0),
    I('pork tenderloin|pork loin|pork chops?|pork', 143, 21, 0),
    I('chicken breasts?|chicken tenders?', 120, 22.5, 0, { unit: 174 }),
    I('chicken thighs?', 145, 19, 0, { unit: 120 }),
    I('rotisserie chicken|cooked chicken|chicken', 165, 25, 0, { cup: 140 }),
    I('turkey breast|deli turkey|turkey', 114, 23, 0, { slice: 28 }),
    I('ham', 145, 18, 0, { slice: 28, cup: 140 }),
    I('salmon', 208, 20, 0, { unit: 113 }),
    I('tuna', 116, 26, 0, { can: 142 }),
    I('shrimp|prawns?', 85, 20, 0, { unit: 15, cup: 145 }),
    I('cod|tilapia|halibut|mahi|white fish|snapper|catfish', 85, 18, 0, { unit: 113 }),
    I('sardines?', 190, 22, 0, { can: 120, unit: 25 }),
    I('(?:smoked |peppered )?mackerel', 305, 19, 0, { unit: 80, can: 90 }),
    I('anchov(?:y|ies)(?: fillets?)?', 210, 29, 0, { unit: 4, can: 45, tbsp: 15 }),
    I('tofu', 76, 8, 0.3, { cup: 252 }),

    // vegetable "noodles" & squashes — MUST sit above pasta so "zucchini
    // noodles" reads as zucchini, not 371-cal pasta
    I('zoodles?|zucchini noodles?|zucchini spirals?|veggie noodles?|carrot noodles?', 17, 1.2, 1, { cup: 124 }),
    I('shirataki|konjac', 3, 0, 1.3, { cup: 113, can: 200 }),
    I('spaghetti squash', 31, 0.6, 1.5, { cup: 101 }),
    I('butternut(?: squash)?|acorn squash', 45, 1, 2, { cup: 140 }),
    I('pumpkin(?: puree)?(?! seed)', 34, 1, 2.9, { cup: 245, can: 425 }),
    I('cauliflower rice|riced cauliflower', 25, 1.9, 2, { cup: 107 }),

    // grains, flours, starches — cooked/leftover variants BEFORE dry ones,
    // or "3 cups cooked brown rice" prices as dry (≈3× too high)
    I('rice cakes?', 387, 8.2, 2.4, { unit: 9 }),
    I('(?:cooked|leftover|day.?old|cold|microwav[a-z]*|ready|steamed|pouch(?:ed)?)[^,]{0,28}rice', 130, 2.7, 0.4, { cup: 158 }),
    I('(?:cooked|leftover)[^,]{0,28}(?:quinoa|barley|farro)', 120, 4.4, 2.8, { cup: 185 }),
    I('(?:cooked|leftover|straight.?to.?wok|ready)[^,]{0,28}(?:pasta|noodles)', 158, 5.8, 1.8, { cup: 140 }),
    I('corn tortillas?', 218, 5.7, 6.3, { unit: 26 }),
    I('taco shells?', 475, 6, 6, { unit: 13 }),
    I('kimchi|sauerkraut|gherkins?|cornichons?|capers?|pickles?|guindilla|pickled [a-z]+', 20, 1, 1.5, { cup: 150, tbsp: 10, unit: 35 }),
    I('grits|polenta|cornmeal', 370, 8, 5, { cup: 156 }),
    I('all.?purpose flour|flour', 364, 10, 2.7, { cup: 120, tbsp: 8 }),
    I('cornstarch|corn starch|arrowroot', 381, 0, 1, { tbsp: 8 }),
    I('panko|bread ?crumbs?', 395, 13, 3, { cup: 108, tbsp: 7 }),
    I('brown rice', 370, 7.5, 3.4, { cup: 190 }),
    I('rice|jasmine|basmati|arborio', 365, 7, 1.3, { cup: 185 }),
    I('barley|farro|freekeh|bulgur', 350, 11, 15, { cup: 184 }),
    I('quinoa', 368, 14, 7, { cup: 170 }),
    I('rolled oats|oats|oatmeal', 389, 17, 10, { cup: 90 }),
    I('gnocchi', 160, 4, 2, { cup: 150 }),
    I('udon', 140, 3.4, 1.2, { unit: 200, cup: 175 }),
    I('couscous', 376, 12.8, 5, { cup: 175 }),
    I('gf pasta|gluten.?free pasta|pasta|penne|spaghetti|macaroni|rotini|rigatoni|tagliatelle|pappardelle|fusilli|farfalle|bucatini|cavatelli|ditalini|casarecce|trofie|conchiglie|fettuccine|linguine|orzo|noodles?', 371, 13, 3, { cup: 105, oz: 28.35 }),
    I('tortillas?|wraps?', 310, 8, 4, { unit: 45 }),
    I('flatbreads?|naan|roti|pitt?as?(?: breads?)?', 290, 9, 3, { unit: 90 }),
    I('bread|sourdough|baguette', 265, 9, 2.7, { slice: 30, unit: 400 }),
    I('sugar|granulated sugar', 387, 0, 0, { cup: 200, tbsp: 12.5 }),
    I('brown sugar', 380, 0, 0, { cup: 220, tbsp: 13.7 }),
    I('honey', 304, 0.3, 0, { tbsp: 21 }),
    I('maple syrup', 260, 0, 0, { tbsp: 20 }),

    // vegetables & fruit (raw)
    I('tomato paste|tomato pur[eé]e', 82, 4.3, 4.1, { tbsp: 16, can: 170 }),
    I('tomato sauce|marinara|passata|crushed tomatoes', 24, 1.3, 1.5, { cup: 245, can: 227 }),
    I('(?:canned |fire.?roasted )?(?:diced |whole |stewed )?tomatoes', 30, 1.5, 1.5, { cup: 240, can: 411, unit: 123 }),
    I('cherry tomatoes|grape tomatoes|tomato(?:es)?', 18, 0.9, 1.2, { cup: 150, unit: 123 }),
    I('sweet potato(?:es)?|yams?', 86, 1.6, 3, { unit: 130, cup: 133 }),
    I('potato(?:es)?|russet|yukon', 77, 2, 2.2, { unit: 213, cup: 150 }),
    I('green onions?|scallions?|spring onions?', 32, 1.8, 2.6, { unit: 15, cup: 100 }),
    I('onions?|shallots?|leeks?', 40, 1.1, 1.7, { unit: 110, cup: 160 }),
    I('garlic', 149, 6.4, 2.1, { unit: 3, tbsp: 9, clove: 3 }),
    I('bell peppers?|red peppers?|green peppers?|poblano', 26, 1, 1.7, { unit: 120, cup: 149 }),
    I('jalapenos?|serranos?', 29, 0.9, 2.8, { unit: 14 }),
    I('celery', 14, 0.7, 1.6, { unit: 40, cup: 100, stalk: 40 }),
    I('carrots?', 41, 0.9, 2.8, { unit: 61, cup: 128 }),
    I('broccoli|tenderstem|broccolini', 34, 2.8, 2.6, { cup: 91, unit: 300 }),
    I('cauliflower', 25, 1.9, 2, { cup: 107 }),
    I('zucchini|courgette|summer squash', 17, 1.2, 1, { unit: 196, cup: 124 }),
    I('spinach', 23, 2.9, 2.2, { cup: 30 }),
    I('kale|cavolo nero', 49, 4.3, 3.6, { cup: 21 }),
    I('cabbage|slaw|coleslaw mix', 25, 1.3, 2.5, { cup: 89 }),
    I('green beans?', 31, 1.8, 2.7, { cup: 100 }),
    I('mushrooms?|cremini|portobello|shiitake', 22, 3.1, 1, { cup: 70, unit: 18 }),
    I('sweet ?corn|corn', 86, 3.3, 2, { cup: 145, can: 250, unit: 90 }),
    I('peas|mangetout|snow peas|sugar snap', 81, 5.4, 5.7, { cup: 145 }),
    I('aubergines?|eggplants?', 25, 1, 3, { unit: 300, cup: 82 }),
    I('gochujang|harissa|miso(?: paste)?|curry paste|thai green paste|pesto', 200, 4, 2, { tbsp: 17 }),
    I('baby cucumbers?|persian cucumbers?|mini cucumbers?', 15, 0.7, 0.5, { unit: 65, cup: 104 }),
    I('cucumbers?', 15, 0.7, 0.5, { unit: 200, cup: 104 }),
    I('lettuce|romaine|arugula|rocket|watercress|greens|mixed greens', 17, 1.2, 2, { cup: 47, unit: 180 }),
    I('avocados?', 160, 2, 6.7, { unit: 150 }),
    I('bananas?', 89, 1.1, 2.6, { unit: 118 }),
    I('blueberr(?:y|ies)|raspberr(?:y|ies)|strawberr(?:y|ies)|blackberr(?:y|ies)|berries', 50, 1, 4, { cup: 140 }),
    I('apples?', 52, 0.3, 2.4, { unit: 182 }),
    I('lemons?|limes?', 29, 1.1, 2.8, { unit: 58 }),
    I('pineapple', 50, 0.5, 1.4, { cup: 165 }),
    I('raisins|dried cranberries|craisins', 299, 3, 3.7, { cup: 145, tbsp: 9 }),

    // legumes, nuts, seeds
    I('black beans', 91, 6, 7, { cup: 172, can: 255 }),
    I('chickpeas|garbanzo', 139, 7, 6, { cup: 152, can: 250 }),
    I('kidney beans', 127, 8.7, 6.4, { cup: 177, can: 255 }),
    I('cannellini|white beans?|navy beans?|great northern|butter beans?', 114, 7, 5, { cup: 179, can: 255 }),
    I('pinto beans|beans', 114, 7, 5.5, { cup: 171, can: 255 }),
    I('lentils', 116, 9, 7.9, { cup: 198, can: 240 }),
    I('edamame', 121, 12, 5.2, { cup: 155 }),
    I('mango(?:es)?(?! chutney)', 60, 0.8, 1.6, { cup: 165, unit: 200 }),
    I('radish(?:es)?', 16, 0.7, 1.6, { cup: 116, unit: 9 }),
    I('hummus', 166, 8, 6, { tbsp: 15, cup: 246 }),
    I('bamboo shoots?', 27, 2.6, 2, { can: 140, cup: 120 }),
    I('almonds?', 579, 21, 12.5, { cup: 143, tbsp: 9, oz: 28.35 }),
    I('walnuts?', 654, 15, 6.7, { cup: 117, tbsp: 7.5 }),
    I('pecans?', 691, 9, 9.6, { cup: 109, tbsp: 7 }),
    I('cashews?', 553, 18, 3.3, { cup: 137 }),
    I('peanuts?', 567, 26, 8.5, { cup: 146 }),
    I('chia', 486, 17, 34, { tbsp: 12 }),
    I('flax', 534, 18, 27, { tbsp: 10 }),
    I('pumpkin seeds?|pepitas|sunflower seeds?|sesame seeds?|poppy seeds?|seeds?', 559, 30, 6, { tbsp: 10, cup: 129 }),
    I('(?:fresh )?ginger(?: paste| root)?', 80, 1.8, 2, { tbsp: 6, tsp: 2, unit: 15 }),
    I('pak choi|bok choy', 13, 1.5, 1, { unit: 110, cup: 70 }),
    I('bean ?sprouts?', 30, 3, 1.8, { cup: 104 }),
    I('oranges?|clementines?|satsumas?|mandarins?', 47, 0.9, 2.4, { unit: 130 }),
    I('(?:red |green |birds? ?eye |fresh )?chill?i(?:es|s)?(?!\s*(?:flakes?|oil|paste|jam|sauce|powder|bean|con))', 40, 1.9, 1.5, { unit: 20 }),
    I('(?:frozen |garden )?peas?|petits? pois', 81, 5.4, 5.7, { cup: 145 }),
    I('(?:pitted )?(?:green |black |kalamata )?olives?(?! ?oil)', 145, 1, 3.3, { cup: 135, tbsp: 8.5 }),
    I('chocolate chips|dark chocolate|chocolate', 479, 4.2, 5.9, { cup: 170, tbsp: 11, oz: 28.35 }),
    I('protein powder|whey', 375, 75, 2, { unit: 32, tbsp: 10, scoop: 32 }),
    I('wine|sherry|marsala', 83, 0, 0, { cup: 235, tbsp: 15 }),
  ];

  const FRACTIONS = { '½': 0.5, '⅓': 0.333, '⅔': 0.667, '¼': 0.25, '¾': 0.75, '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875 };

  function parseCount(text) {
    let t = text;
    Object.keys(FRACTIONS).forEach(k => { t = t.replace(new RegExp('(\\d)?\\s*' + k), (m, d) => (d ? d + '+' + FRACTIONS[k] : String(FRACTIONS[k]))); });
    // "1 1/2" → 1.5 ; "1/2" → 0.5 ; "2-3" / "2 to 3" → 2.5 ; "1+0.5" from unicode
    const range = t.match(/(\d+(?:[./]\d+)?)\s*(?:-|–|to)\s*(\d+(?:[./]\d+)?)/);
    const solve = x => {
      if (x.includes('+')) return x.split('+').reduce((a, b) => a + solve(b), 0);
      if (x.includes('/')) { const [a, b] = x.split('/'); return parseFloat(a) / parseFloat(b); }
      return parseFloat(x);
    };
    if (range) return (solve(range[1]) + solve(range[2])) / 2;
    const mixed = t.match(/(\d+)\s+(\d+\/\d+)/);
    if (mixed) return solve(mixed[1]) + solve(mixed[2]);
    const one = t.match(/(\d+(?:[.+/]\d+)*(?:\.\d+)?)/);
    return one ? solve(one[1]) : null;
  }

  const UNIT_RE = /\b(cups?|c\b|tablespoons?|tbsps?|tbs\b|teaspoons?|tsps?|ounces?|oz|pounds?|lbs?|lb|grams?|g\b|kilograms?|kg|milliliters?|ml|liters?|l\b|cans?|cloves?|slices?|sticks?|stalks?|ribs?|scoops?|large|medium|small|whole|heads?|bunch(?:es)?|packages?|pkgs?|bags?)\b/i;

  function gramsFor(count, unitWord, entry, qtyText) {
    const paren = qtyText.match(/\(\s*([\d.]+)\s*(?:oz|ounces?)\s*\)/i);
    if (paren) return count * parseFloat(paren[1]) * 28.35;
    const u = (unitWord || '').toLowerCase();
    if (/^cups?$|^c$/.test(u)) return count * (entry.cup || 240);
    if (/^tablespoons?$|^tbsps?$|^tbs$/.test(u)) return count * (entry.tbsp || 15);
    if (/^teaspoons?$|^tsps?$/.test(u)) return count * ((entry.tbsp || 15) / 3);
    if (/^ounces?$|^oz$/.test(u)) return count * 28.35;
    if (/^pounds?$|^lbs?$|^lb$/.test(u)) return count * 453.6;
    if (/^grams?$|^g$/.test(u)) return count;
    if (/^kilograms?$|^kg$/.test(u)) return count * 1000;
    if (/^milliliters?$|^ml$/.test(u)) return count;
    if (/^liters?$|^l$/.test(u)) return count * 1000;
    if (/^cans?$/.test(u)) return count * (entry.can || 400);
    if (/^cloves?$/.test(u)) return count * (entry.clove || entry.unit || 3);
    if (/^slices?$/.test(u)) return count * (entry.slice || entry.unit || 28);
    if (/^sticks?$/.test(u)) return count * (entry.stick || entry.unit || 113);
    if (/^(stalks?|ribs?)$/.test(u)) return count * (entry.stalk || entry.unit || 40);
    if (/^scoops?$/.test(u)) return count * (entry.scoop || entry.unit || 32);
    if (/^(large|medium|small|whole|heads?)$/.test(u)) return count * (entry.unit || null);
    if (/^(bunch(?:es)?)$/.test(u)) return count * (entry.unit ? entry.unit * 3 : null);
    if (/^(packages?|pkgs?|bags?)$/.test(u)) return count * (entry.can || 250);
    // no unit word: fall back to a per-unit weight when the food has one
    return entry.unit ? count * entry.unit : null;
  }

  window.estimateRecipeNutrition = function (recipe) {
    const lines = (recipe && Array.isArray(recipe.ingredients) ? recipe.ingredients : [])
      .filter(x => x && x.item && x.item !== '—');
    if (!lines.length) return null;
    let cal = 0, p = 0, f = 0, handled = 0;
    const unmatched = [];
    for (const line of lines) {
      const qty = String(line.qty || '');
      const item = String(line.item || '');
      const text = (qty + ' ' + item).toLowerCase();
      if (/to taste|for serving|optional|garnish|as needed/.test(text)) { handled++; continue; }
      const entry = ING.find(e => e.re.test(item)) || ING.find(e => e.re.test(text));
      if (!entry) { unmatched.push(item.split(',')[0].slice(0, 32)); continue; }
      if (entry.cal === 0 && entry.p === 0) { handled++; continue; }
      let count = parseCount(qty);
      if (count == null) {
        const lead = item.match(/^\s*(\d+(?:[./]\d+)?)(?!\s*%|\s*-?\s*inch)/);
        count = lead ? parseCount(lead[1]) : null;
      }
      if (count == null) { unmatched.push(item.split(',')[0].slice(0, 32)); continue; }
      // "100g" / "1tbsp" / "3Clove": \b never sits between a digit and a
      // letter, so attached units need a space put back before unit-matching
      const qtyN = qty.replace(/(\d)(?=[a-zA-Z])/g, '$1 ');
      const itemN = item.replace(/(\d)(?=[a-zA-Z])/g, '$1 ');
      const unitMatch = qtyN.match(UNIT_RE) || itemN.match(UNIT_RE);
      const multi = (qtyN + ' ' + itemN).match(/x\s*(\d+(?:\.\d+)?)\s*(g|kg|ml|l|oz)\b/i);
      let grams;
      if (multi) {
        const factors = { g: 1, kg: 1000, ml: 1, l: 1000, oz: 28.35 };
        grams = count * parseFloat(multi[1]) * factors[multi[2].toLowerCase()];
      } else {
        grams = gramsFor(count, unitMatch ? unitMatch[1] : '', entry, qtyN + ' ' + itemN);
      }
      if (!grams || !isFinite(grams)) { unmatched.push(item.split(',')[0].slice(0, 32)); continue; }
      cal += grams * entry.cal / 100;
      p += grams * entry.p / 100;
      f += grams * entry.f / 100;
      handled++;
    }
    if (handled === 0 || cal <= 0) return null;
    const serves = (recipe.serves && recipe.serves > 0) ? recipe.serves : 4;
    return {
      cal: Math.round(cal / serves / 5) * 5,
      protein: Math.round(p / serves),
      fiber: Math.round(f / serves),
      handled,
      total: lines.length,
      unmatched: unmatched.slice(0, 4),
    };
  };
})();
