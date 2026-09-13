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
