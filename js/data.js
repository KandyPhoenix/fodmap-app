const CATEGORIES = [
  { id: 'all', label: 'All Foods', emoji: '🍽️' },
  { id: 'fruits', label: 'Fruits', emoji: '🍎' },
  { id: 'vegetables', label: 'Vegetables', emoji: '🥦' },
  { id: 'grains', label: 'Grains & Cereals', emoji: '🌾' },
  { id: 'dairy', label: 'Dairy & Alternatives', emoji: '🥛' },
  { id: 'protein', label: 'Protein', emoji: '🥩' },
  { id: 'legumes', label: 'Legumes', emoji: '🫘' },
  { id: 'nuts', label: 'Nuts & Seeds', emoji: '🥜' },
  { id: 'condiments', label: 'Condiments', emoji: '🫙' },
  { id: 'beverages', label: 'Beverages', emoji: '☕' },
  { id: 'herbs', label: 'Herbs & Spices', emoji: '🌿' },
];

const FODMAP_TYPES = {
  fructose:  { label: 'Excess Fructose', color: '#e91e63' },
  lactose:   { label: 'Lactose', color: '#9c27b0' },
  fructans:  { label: 'Fructans', color: '#ff5722' },
  gos:       { label: 'GOS', color: '#ff9800' },
  sorbitol:  { label: 'Sorbitol (Polyol)', color: '#2196f3' },
  mannitol:  { label: 'Mannitol (Polyol)', color: '#00bcd4' },
};

// ─── FODMAP PORTION ALERTS ────────────────────────────────────────────────────
// Auto-scanned against recipe ingredients. Shows a yellow warning box in the
// recipe modal for any moderate-FODMAP ingredients so users know what to watch.
const FODMAP_PORTION_WATCH = [
  { triggers: ['broccoli'],           label: 'Broccoli',            safe: '¾ cup (75g) floret heads per person — florets only, not the stalk.' },
  { triggers: ['broccolini'],         label: 'Broccolini',          safe: '½ cup (37g) per person max.' },
  { triggers: ['sweet potato'],       label: 'Sweet Potato',        safe: '½ cup / 75g per person. Over 1 cup becomes high FODMAP.' },
  { triggers: ['butternut', 'butternut squash'], label: 'Butternut Squash', safe: '¼ cup (45g) per person. Becomes high FODMAP at ½ cup+.' },
  { triggers: ['pumpkin'],            label: 'Pumpkin',             safe: '¼ cup (45g) per person. Small side portion only.' },
  { triggers: ['canned coconut milk'], label: 'Canned Coconut Milk', safe: '¼ cup (60ml) TOTAL for the whole recipe — about 2 tbsp per person.' },
  { triggers: ['coconut milk'],       label: 'Coconut Milk (canned)', safe: '¼ cup (60ml) total for the recipe. Use carton/drinking coconut milk for larger amounts.' },
  { triggers: ['chickpea'],           label: 'Chickpeas',           safe: '¼ cup (42g) rinsed per person MAX. Must rinse canned chickpeas thoroughly.' },
  { triggers: ['lentil'],             label: 'Lentils',             safe: '¼ cup (46g) rinsed per person MAX. Use canned and rinse well under cold water.' },
  { triggers: ['feta'],               label: 'Feta Cheese',         safe: '28g (about 2 tbsp) per person. More lactose than hard cheeses.' },
  { triggers: ['bocconcini', 'fresh mozzarella', 'fresh mini mozzarella'], label: 'Bocconcini / Fresh Mozzarella', safe: '40g per person. Fresh mozzarella is higher in lactose than aged varieties.' },
  { triggers: ['cream cheese'],       label: 'Cream Cheese',        safe: '2 tbsp (30g) per person. Moderate lactose — keep portions small.' },
  { triggers: ['sour cream'],         label: 'Sour Cream',          safe: '1–2 tbsp per person. Test your individual lactose tolerance.' },
  { triggers: ['ricotta'],            label: 'Ricotta',             safe: '2 tbsp (40g) per person. Moderate lactose.' },
  { triggers: ['rolled oats', 'gluten-free rolled oats'], label: 'Oats', safe: '¼ cup (22g) dry per person. Certified GF oats if also coeliac.' },
  { triggers: ['blueberr'],           label: 'Blueberries',         safe: '20 berries (28g) is low FODMAP. ½ cup (74g) is moderate. Do not exceed ½ cup per person.' },
  { triggers: ['avocado'],            label: 'Avocado',             safe: '1/8 avocado (20g) per person. ¼ avocado pushes into moderate FODMAP range.' },
  { triggers: ['snow pea', 'snap pea'], label: 'Snow / Snap Peas',  safe: '5 pods (35g) per person max. Fructans increase quickly with larger servings.' },
  { triggers: ['celery'],             label: 'Celery',              safe: '¼ stalk (10g) per person. Larger amounts accumulate mannitol fast.' },
  { triggers: ['almond butter'],      label: 'Almond Butter',       safe: '1 tbsp (16g) per person. Same FODMAP profile as whole almonds.' },
  { triggers: ['miso'],               label: 'Miso Paste',          safe: '2 tsp (12g) per person. Use as a seasoning accent, not a main ingredient.' },
  { triggers: ['oyster sauce'],       label: 'Oyster Sauce',        safe: 'Low FODMAP at 2 tbsp — but CHECK the label. Some brands add garlic or onion powder.' },
  { triggers: ['corn', 'sweet corn'], label: 'Sweet Corn',          safe: '½ cob (38g) per person. A full cob is high FODMAP due to sorbitol.' },
  { triggers: ['beetroot'],           label: 'Beetroot',            safe: '2 thin slices (20g) per person max. Larger amounts have significant fructans.' },
  { triggers: ['raspberry'],          label: 'Raspberries',         safe: '10 berries (25g) per person is low FODMAP. 30 berries = moderate.' },
  { triggers: ['pomegranate'],        label: 'Pomegranate Seeds',   safe: '¼ cup (45g) per person max. Moderate excess fructose.' },
];

// ─── HEALTHY SWAP SUGGESTIONS ────────────────────────────────────────────────
// Each swap scans a recipe's ingredient list for trigger keywords.
// All alternatives are FODMAP-safe. Up to 3 shown per recipe.
const HEALTHY_SWAPS = [
  {
    triggers: ['white rice', 'cooked white rice'],
    from: 'White rice',
    to: 'Brown rice',
    benefit: 'Adds ~2g more fiber per cup and lowers the glycemic index from 72 to 50 — your blood sugar rises more slowly, keeping you fuller for longer.',
    emoji: '🌾'
  },
  {
    triggers: ['white rice', 'cooked white rice'],
    from: 'White rice',
    to: 'Quinoa',
    benefit: 'Quinoa packs ~4g more protein per cup (8g total) and all 9 essential amino acids — making it a complete protein unlike most grains. Still 100% low FODMAP.',
    emoji: '🌿'
  },
  {
    triggers: ['ground beef', 'minced beef', 'beef mince', 'mince beef'],
    from: 'Ground beef (regular)',
    to: 'Extra-lean ground beef or ground turkey',
    benefit: 'Regular beef mince can have 20g fat per 100g. Extra-lean or turkey drops that to ~3–5g — reducing saturated fat by up to 75% while keeping the same protein content.',
    emoji: '🦃'
  },
  {
    triggers: ['butter'],
    from: 'Butter',
    to: 'Extra virgin olive oil',
    benefit: 'Swapping butter for olive oil replaces saturated fat with heart-healthy monounsaturated fats (oleic acid). Studies link higher olive oil intake to a ~9% lower risk of cardiovascular disease.',
    emoji: '🫒'
  },
  {
    triggers: ['cheddar', 'cheddar cheese'],
    from: 'Full-fat cheddar',
    to: 'Reduced-fat cheddar',
    benefit: 'Reduced-fat cheddar has ~40% less saturated fat per serving while retaining the same low-lactose FODMAP profile — and still melts and tastes great.',
    emoji: '🧀'
  },
  {
    triggers: ['mayonnaise', 'mayo'],
    from: 'Mayonnaise',
    to: 'Lactose-free plain yogurt + 1 tsp Dijon',
    benefit: 'Regular mayo is ~680 cal per 100g; LF yogurt is ~60 cal — a 90% calorie cut. The yogurt also adds gut-friendly probiotics and about 6g of protein.',
    emoji: '🥛'
  },
  {
    triggers: ['bacon'],
    from: 'Regular bacon',
    to: 'Turkey bacon or back bacon (lean)',
    benefit: 'Turkey bacon or lean back bacon has up to 50% less total fat and 40% fewer calories than streaky pork bacon, while still delivering that smoky, salty flavour.',
    emoji: '🥩'
  },
  {
    triggers: ['gluten-free pasta', 'gf pasta', 'pasta'],
    from: 'White GF pasta',
    to: 'Brown rice pasta or red lentil GF pasta',
    benefit: 'Brown rice pasta adds ~3g more fiber per serving. Red lentil GF pasta jumps to ~12g protein per serving vs. 4g in white pasta — great for muscle recovery and satiety.',
    emoji: '🍝'
  },
  {
    triggers: ['canned coconut milk'],
    from: 'Full-fat canned coconut milk',
    to: 'Light canned coconut milk',
    benefit: 'Light coconut milk has ~60% fewer calories and fat than full-fat (20 cal vs 58 cal per 2 tbsp) with the same creamy flavour. Easier to stay in the safe FODMAP sorbitol zone.',
    emoji: '🥥'
  },
  {
    triggers: ['chicken thigh', 'chicken thighs', 'bone-in chicken'],
    from: 'Chicken thighs (skin-on)',
    to: 'Skinless chicken thighs or chicken breast',
    benefit: 'Removing the skin alone cuts fat by ~50%. Switching to breast reduces total fat from ~13g to ~3g per 100g — saving ~90 calories per serving with no FODMAP impact.',
    emoji: '🍗'
  },
  {
    triggers: ['caster sugar', 'white sugar', 'sugar'],
    from: 'White sugar',
    to: 'Maple syrup (use 25% less)',
    benefit: 'Maple syrup has a GI of 54 vs. 65 for white sugar, meaning slower blood sugar spikes. It also contains manganese, zinc, and antioxidants absent in refined sugar.',
    emoji: '🍁'
  },
  {
    triggers: ['gluten-free bread', 'gf bread'],
    from: 'Plain GF white bread',
    to: 'Seeded or multigrain GF bread',
    benefit: 'Seeds (flax, chia, sunflower) add 2–4g extra fiber per 2 slices plus healthy fats and magnesium. Look for GF loaves with visible seeds in the ingredients.',
    emoji: '🫓'
  },
  {
    triggers: ['rolled oats', 'oats'],
    from: 'Regular rolled oats',
    to: 'Certified GF steel-cut oats',
    benefit: 'Steel-cut oats have a GI of 42 vs. 55 for rolled oats — a meaningful drop for blood sugar management. They also retain more of the whole grain\'s fiber structure (4g per 1/4 cup).',
    emoji: '🌾'
  },
  {
    triggers: ['salmon fillet', 'salmon'],
    from: 'Salmon',
    to: 'Keep it — excellent choice!',
    benefit: 'Salmon is already one of the most nutrient-dense proteins you can eat. A 180g fillet delivers ~3g of omega-3s (EPA + DHA) — more than enough for the weekly recommended intake.',
    emoji: '✅'
  },
  {
    triggers: ['soy sauce', 'tamari'],
    from: 'Regular soy sauce or tamari',
    to: 'Low-sodium soy sauce or coconut aminos',
    benefit: 'Regular soy sauce has ~900mg sodium per tbsp. Low-sodium versions cut that by ~40% to ~550mg. Coconut aminos go even lower at ~270mg — helpful if you\'re watching blood pressure.',
    emoji: '🫙'
  },
  {
    triggers: ['pork sausage', 'sausage'],
    from: 'Pork sausages',
    to: 'Chicken or turkey sausages (check: GF, no onion/garlic)',
    benefit: 'Chicken or turkey sausages typically have 30–40% less total fat than pork sausages while still being satisfying. Always check the label for FODMAP-safe ingredients.',
    emoji: '🌭'
  },
  {
    triggers: ['cream', 'thickened cream', 'heavy cream'],
    from: 'Heavy/thickened cream',
    to: 'LF evaporated milk or half cream + half LF milk',
    benefit: 'Heavy cream has ~340 cal per 100ml. Lactose-free evaporated milk delivers similar richness at ~135 cal — a 60% calorie saving while still creating a velvety sauce.',
    emoji: '🥛'
  },
  {
    triggers: ['lactose-free milk', 'almond milk'],
    from: 'Full-fat milk',
    to: 'Reduced-fat lactose-free milk',
    benefit: 'Switching from full-fat to reduced-fat milk cuts saturated fat by ~50% while keeping all the calcium (~300mg per cup) and protein (~8g per cup) intact.',
    emoji: '🥛'
  },
];

// rating: 'green' | 'yellow' | 'red'
// servings: up to 3 entries going from safe → caution → high
const FOODS = [

  // ─── FRUITS ──────────────────────────────────────────────────────────────
  {
    id: 'apple', name: 'Apple', emoji: '🍎', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 medium (120g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Apples are high in both excess fructose and sorbitol. Even small amounts can trigger symptoms. Try strawberries or grapes as a lower-FODMAP alternative.'
  },
  {
    id: 'apricot', name: 'Apricot (fresh)', emoji: '🍑', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 fruit (35g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Fresh apricots are very high in sorbitol. Dried apricots are even more concentrated — avoid both on a low-FODMAP diet.'
  },
  {
    id: 'avocado', name: 'Avocado', emoji: '🥑', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/8 whole (20g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/4 whole (40g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1/2 whole (80g+)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Stick to 1/8 of an avocado (about 20g) to keep sorbitol within a safe range. Great on gluten-free toast in small amounts!'
  },
  {
    id: 'banana-firm', name: 'Banana (firm/unripe)', emoji: '🍌', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 medium (120g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Firmer, less-ripe bananas are low in FODMAPs. As bananas ripen, their fructan content increases. Choose bananas with a hint of green.'
  },
  {
    id: 'banana-ripe', name: 'Banana (ripe)', emoji: '🍌', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/3 medium (40g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1 medium (120g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Ripe bananas contain more fructans than firm ones. Limit to 1/3 of a medium banana, or choose an unripe banana for a lower-FODMAP option.'
  },
  {
    id: 'blueberries', name: 'Blueberries', emoji: '🫐', category: 'fruits', rating: 'green',
    servings: [
      { amount: '20 berries (28g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup (74g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Blueberries are low FODMAP in a small serving of about 20 berries. Larger portions push fructose into the moderate range.'
  },
  {
    id: 'cantaloupe', name: 'Cantaloupe / Rockmelon', emoji: '🍈', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/2 cup (90g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 cup (180g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'mannitol'],
    tip: 'Cantaloupe contains moderate FODMAPs. Stick to a small serving and check your tolerance carefully.'
  },
  {
    id: 'cherry', name: 'Cherry', emoji: '🍒', category: 'fruits', rating: 'red',
    servings: [
      { amount: '3 cherries (42g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol', 'fructose'],
    tip: 'Cherries are very high in sorbitol and fructose. Even a small handful can cause significant symptoms. Best avoided entirely.'
  },
  {
    id: 'cranberries', name: 'Cranberries (fresh)', emoji: '🔴', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1 tbsp (9g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/4 cup (25g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Fresh cranberries are low FODMAP in very small amounts. Use as a garnish rather than a main ingredient.'
  },
  {
    id: 'dragonfruit', name: 'Dragonfruit', emoji: '🐉', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 cup (170g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Dragonfruit is one of the most FODMAP-friendly exotic fruits. Enjoy it freely as part of your low-FODMAP diet.'
  },
  {
    id: 'grapes', name: 'Grapes', emoji: '🍇', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 cup (150g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Grapes are low in FODMAPs and a great snack option. Both red and green grapes are safe in normal serving sizes.'
  },
  {
    id: 'kiwi', name: 'Kiwi', emoji: '🥝', category: 'fruits', rating: 'green',
    servings: [
      { amount: '2 medium (150g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Kiwi is a great low-FODMAP fruit, rich in vitamin C. Both green and gold varieties have been tested and found to be low FODMAP.'
  },
  {
    id: 'lemon', name: 'Lemon', emoji: '🍋', category: 'fruits', rating: 'green',
    servings: [
      { amount: 'Juice of 1 lemon (45ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lemon juice is low FODMAP and a great way to add flavour to dishes and dressings without adding FODMAPs.'
  },
  {
    id: 'lime', name: 'Lime', emoji: '🟢', category: 'fruits', rating: 'green',
    servings: [
      { amount: 'Juice of 1 lime (45ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lime juice is low FODMAP, just like lemon. Use it freely in cooking and drinks.'
  },
  {
    id: 'mango', name: 'Mango', emoji: '🥭', category: 'fruits', rating: 'red',
    servings: [
      { amount: '40g (about 2 slices)', rating: 'green', label: 'Low FODMAP' },
      { amount: '80g (4–5 slices)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '165g (1 cup)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Mango is high in excess fructose in larger amounts. Enjoy a small portion of 2 slices, but be careful not to overdo it.'
  },
  {
    id: 'orange', name: 'Orange', emoji: '🍊', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 medium (130g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Oranges are low FODMAP in a typical serving. They\'re also rich in vitamin C. Note: orange juice in small amounts is also okay (125ml).'
  },
  {
    id: 'papaya', name: 'Papaya / Pawpaw', emoji: '🟠', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 cup (140g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Papaya is low FODMAP and easy to digest. It also contains natural enzymes that may support digestion.'
  },
  {
    id: 'passionfruit', name: 'Passion Fruit', emoji: '💛', category: 'fruits', rating: 'green',
    servings: [
      { amount: '2 fruits (36g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Passion fruit is low FODMAP and has a wonderful flavour. Great in smoothies or as a yoghurt topper (use lactose-free yoghurt).'
  },
  {
    id: 'peach', name: 'Peach', emoji: '🍑', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 medium (98g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol', 'fructose'],
    tip: 'Peaches are high in both sorbitol and fructose. Avoid fresh peaches and canned peaches in syrup on a low-FODMAP diet.'
  },
  {
    id: 'pear', name: 'Pear', emoji: '🍐', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 medium (178g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Pears are among the highest FODMAP fruits. They contain both excess fructose and sorbitol. Avoid entirely on the elimination phase.'
  },
  {
    id: 'pineapple', name: 'Pineapple', emoji: '🍍', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 cup chunks (165g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Pineapple is low FODMAP in generous servings. It also contains bromelain, an enzyme that helps with protein digestion.'
  },
  {
    id: 'plum', name: 'Plum', emoji: '🟣', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 medium (66g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Plums are high in sorbitol. Avoid on the elimination phase. Prunes are even more concentrated and should also be avoided.'
  },
  {
    id: 'raspberry', name: 'Raspberry', emoji: '🫐', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '10 berries (25g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '30 berries (75g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Raspberries are fine in small amounts (10 berries). They taste sweet but contain moderate FODMAPs at larger servings.'
  },
  {
    id: 'strawberry', name: 'Strawberry', emoji: '🍓', category: 'fruits', rating: 'green',
    servings: [
      { amount: '10 berries (150g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Strawberries are a great low-FODMAP fruit choice. Enjoy them fresh, in smoothies, or on lactose-free yoghurt.'
  },
  {
    id: 'watermelon', name: 'Watermelon', emoji: '🍉', category: 'fruits', rating: 'red',
    servings: [
      { amount: '150g (1 cup diced)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'mannitol'],
    tip: 'Watermelon is very high in both excess fructose and mannitol. Even a small serving can trigger symptoms. Best avoided entirely.'
  },

  // ─── VEGETABLES ──────────────────────────────────────────────────────────
  {
    id: 'artichoke', name: 'Artichoke', emoji: '🌿', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Globe artichokes are one of the highest FODMAP vegetables and should be avoided entirely during the elimination phase.'
  },
  {
    id: 'asparagus', name: 'Asparagus', emoji: '🌱', category: 'vegetables', rating: 'red',
    servings: [
      { amount: '1 spear (18g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Even a single asparagus spear is high in fructans. Asparagus is best avoided entirely on the low-FODMAP diet.'
  },
  {
    id: 'beetroot', name: 'Beetroot', emoji: '🫀', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '2 slices (20g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '4+ slices (40g+)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Beetroot contains fructans that become significant at larger servings. Enjoy a small amount — 2 thin slices — in salads.'
  },
  {
    id: 'bell-pepper-red', name: 'Bell Pepper (red)', emoji: '🌶️', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1/2 pepper (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Red and yellow bell peppers are low FODMAP. Green bell peppers contain small amounts of fructans, so red is the safer choice.'
  },
  {
    id: 'bell-pepper-green', name: 'Bell Pepper (green)', emoji: '🫑', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '40g', rating: 'green', label: 'Low FODMAP' },
      { amount: '75g (1/2 pepper)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Green bell peppers have more fructans than red or yellow. Use in small amounts, or substitute with red pepper.'
  },
  {
    id: 'bok-choy', name: 'Bok Choy', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Bok choy is a great low-FODMAP leafy green. Excellent in stir-fries with garlic-infused oil and ginger.'
  },
  {
    id: 'broccoli', name: 'Broccoli (heads)', emoji: '🥦', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '3/4 cup heads (75g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1 cup heads (91g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'sorbitol'],
    tip: 'Broccoli florets/heads are lower in FODMAPs than the stalk. Stick to 3/4 cup of heads. The stalks are higher in mannitol and should be limited.'
  },
  {
    id: 'brussels-sprouts', name: 'Brussels Sprouts', emoji: '🟢', category: 'vegetables', rating: 'red',
    servings: [
      { amount: '1 sprout (21g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '3+ sprouts', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Brussels sprouts are high in GOS and fructans. Even small amounts add up quickly. Best avoided on the elimination phase.'
  },
  {
    id: 'butternut-squash', name: 'Butternut Squash', emoji: '🎃', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (45g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup (70g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 cup (140g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Butternut squash becomes high FODMAP at larger servings due to excess fructose. Enjoy a small portion alongside other vegetables.'
  },
  {
    id: 'cabbage', name: 'Cabbage (green)', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup shredded (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Green cabbage is low FODMAP. Great raw in coleslaw (with a FODMAP-friendly dressing) or cooked in stir-fries.'
  },
  {
    id: 'carrot', name: 'Carrot', emoji: '🥕', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 medium (61g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Carrots are a great low-FODMAP vegetable. Enjoy raw, roasted, or cooked. No significant FODMAPs at typical serving sizes.'
  },
  {
    id: 'cauliflower', name: 'Cauliflower', emoji: '⚪', category: 'vegetables', rating: 'red',
    servings: [
      { amount: '1/2 cup (54g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 cup (107g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Cauliflower is high in mannitol and becomes problematic even at moderate servings. Even small amounts may trigger symptoms in sensitive individuals.'
  },
  {
    id: 'celery', name: 'Celery', emoji: '🌿', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/4 stalk (10g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1 stalk (40g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '2 stalks (80g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Celery contains mannitol. Use 1/4 stalk as a garnish or flavouring but avoid eating large amounts.'
  },
  {
    id: 'cherry-tomato', name: 'Cherry Tomato', emoji: '🍅', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '3 tomatoes (75g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '9+ tomatoes (225g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Cherry tomatoes are low FODMAP in servings up to about 5. If eating a whole punnet, the fructose can accumulate.'
  },
  {
    id: 'corn', name: 'Sweet Corn', emoji: '🌽', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/2 cob (38g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 full cob (77g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Sweet corn contains sorbitol. Half a cob is moderate FODMAP — test your tolerance carefully. Canned corn is similar in FODMAP content.'
  },
  {
    id: 'cucumber', name: 'Cucumber', emoji: '🥒', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1/2 cup sliced (52g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Cucumber is low FODMAP. A refreshing addition to salads or served with hummus (limit hummus portion).'
  },
  {
    id: 'eggplant', name: 'Eggplant / Aubergine', emoji: '🍆', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '75g', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Eggplant is low FODMAP and wonderful roasted, grilled, or in curries. A great base for many FODMAP-friendly meals.'
  },
  {
    id: 'fennel', name: 'Fennel Bulb', emoji: '🌿', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1/2 cup sliced (45g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fennel bulb is low FODMAP and adds a lovely mild anise flavour. Fennel tea is also generally well tolerated.'
  },
  {
    id: 'garlic', name: 'Garlic', emoji: '🧄', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Garlic is one of the highest-FODMAP foods. Even a tiny amount causes issues for most people. Use garlic-infused olive oil as a safe alternative — fructans don\'t dissolve in oil.'
  },
  {
    id: 'green-beans', name: 'Green Beans', emoji: '🫘', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '15 beans (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Green beans are low FODMAP and versatile. Enjoy steamed, stir-fried, or roasted.'
  },
  {
    id: 'kale', name: 'Kale', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup chopped (67g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Kale is a low-FODMAP leafy green that\'s also packed with nutrients. Great in salads, smoothies, or roasted as chips.'
  },
  {
    id: 'leek-green', name: 'Leek (green tops)', emoji: '🌿', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup green tops (50g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'The green leaves/tops of leek are low FODMAP. Fructans are concentrated in the white and light green parts — use only the dark green tops.'
  },
  {
    id: 'leek-white', name: 'Leek (white part)', emoji: '🤍', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'The white and light green parts of leek are high in fructans. Use only the dark green tops as a safe onion/leek flavour substitute.'
  },
  {
    id: 'lettuce', name: 'Lettuce — Butter, Romaine, Iceberg, Green & Red Leaf', emoji: '🥗', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (47g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'All common lettuce varieties — butter, romaine, iceberg, green leaf, red leaf, and oak leaf — are low FODMAP with no serving restrictions. A great base for any FODMAP-friendly salad.'
  },
  {
    id: 'mushroom-button', name: 'Mushroom (button)', emoji: '🍄', category: 'vegetables', rating: 'red',
    servings: [
      { amount: '1 small (15g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Button mushrooms are very high in mannitol. Even a small amount can cause symptoms. Try oyster mushrooms as a lower-FODMAP alternative.'
  },
  {
    id: 'mushroom-oyster', name: 'Mushroom (oyster)', emoji: '🌊', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (65g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Oyster mushrooms are much lower in mannitol than button mushrooms. A great FODMAP-friendly substitute in recipes.'
  },
  {
    id: 'onion', name: 'Onion (all types)', emoji: '🧅', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Onions (brown, red, white, yellow) are extremely high in fructans. Avoid ALL forms — raw, cooked, pickled, powdered. Use the green tops of spring onions instead.'
  },
  {
    id: 'potato', name: 'Potato', emoji: '🥔', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 medium (150g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Regular potatoes are low FODMAP! Enjoy baked, boiled, or mashed. Season with garlic-infused oil and chives instead of butter and garlic.'
  },
  {
    id: 'pumpkin', name: 'Pumpkin / Japanese Pumpkin', emoji: '🎃', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (45g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup (75g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Pumpkin (especially Japanese pumpkin/kabocha) contains mannitol. Enjoy a small portion alongside other vegetables.'
  },
  {
    id: 'spinach', name: 'Spinach', emoji: '🍃', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup raw (30g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Baby spinach is low FODMAP. Great in salads, smoothies, or wilted into pasta dishes. Note: mature spinach in larger amounts may have small amounts of fructans.'
  },
  {
    id: 'spring-onion-green', name: 'Spring Onion (green tops)', emoji: '🌱', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup green tops (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'The dark green tops of spring/green onions are low FODMAP — a great substitute for onion flavour in any dish. Use only the green part!'
  },
  {
    id: 'sweet-potato', name: 'Sweet Potato', emoji: '🍠', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/2 cup (75g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 cup (150g+)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol', 'sorbitol'],
    tip: 'Sweet potato contains both mannitol and sorbitol and becomes high FODMAP at larger servings. Limit to a 75g portion and test tolerance.'
  },
  {
    id: 'tomato', name: 'Tomato (common)', emoji: '🍅', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 medium (65g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Regular tomatoes are low FODMAP in typical servings. Canned tomatoes and passata are also low FODMAP in modest amounts (about 100g).'
  },
  {
    id: 'zucchini', name: 'Zucchini / Courgette', emoji: '🥒', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '65g', rating: 'green', label: 'Low FODMAP' },
      { amount: '180g+', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Zucchini is low FODMAP in small servings. At larger amounts, mannitol may be an issue. Great spiralised as a pasta alternative.'
  },

  // ─── GRAINS & CEREALS ────────────────────────────────────────────────────
  {
    id: 'brown-rice', name: 'Brown Rice', emoji: '🍚', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (195g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Brown rice is low FODMAP and a nutritious whole grain choice. It can be used in any recipe calling for white rice.'
  },
  {
    id: 'white-rice', name: 'White Rice', emoji: '🍚', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (186g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'White rice is one of the safest staple foods on a low-FODMAP diet. A reliable base for many FODMAP-friendly meals.'
  },
  {
    id: 'quinoa', name: 'Quinoa', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (155g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Quinoa is a low-FODMAP grain that\'s also a complete protein. Great as a rice substitute or in salads.'
  },
  {
    id: 'gf-bread', name: 'Gluten-Free Bread', emoji: '🍞', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 slices (62g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Most gluten-free breads are low FODMAP because they lack the wheat fructans. Check ingredients — avoid those with apple, pear, honey, or chicory root/inulin.'
  },
  {
    id: 'white-bread', name: 'White Bread (wheat)', emoji: '🍞', category: 'grains', rating: 'red',
    servings: [
      { amount: '1 slice (35g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Regular wheat bread is high in fructans. This applies to all wheat-based breads. Switch to gluten-free or sourdough spelt alternatives.'
  },
  {
    id: 'sourdough-spelt', name: 'Sourdough Spelt Bread', emoji: '🫓', category: 'grains', rating: 'yellow',
    servings: [
      { amount: '2 slices (109g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Long-fermented sourdough spelt bread has reduced fructans due to fermentation. Small servings are better tolerated than regular bread. Choose brands with minimal ingredients.'
  },
  {
    id: 'oats', name: 'Oats (rolled)', emoji: '🌾', category: 'grains', rating: 'yellow',
    servings: [
      { amount: '1/4 cup dry (22g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup dry (52g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Rolled oats are low FODMAP in 1/4 cup (dry) serving. This equals about 1/2 cup cooked. Use certified gluten-free oats if you are also coeliac.'
  },
  {
    id: 'gf-pasta', name: 'Gluten-Free Pasta', emoji: '🍝', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (145g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Gluten-free pasta (rice, corn, or buckwheat-based) is low FODMAP. Pair with a FODMAP-friendly tomato sauce — avoid sauces with onion or garlic.'
  },
  {
    id: 'rice-cakes', name: 'Rice Cakes', emoji: '🫓', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 cakes (18g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain rice cakes are low FODMAP. A great base for FODMAP-friendly toppings like peanut butter, canned tuna, or cheddar cheese.'
  },
  {
    id: 'popcorn', name: 'Popcorn', emoji: '🍿', category: 'grains', rating: 'green',
    servings: [
      { amount: '7 cups popped (56g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain popcorn is low FODMAP — a great snack! Avoid flavoured varieties that may contain onion or garlic powder.'
  },
  {
    id: 'buckwheat', name: 'Buckwheat', emoji: '🌑', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (168g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Despite its name, buckwheat is not related to wheat and is gluten-free and low FODMAP. Great as a porridge, in pancakes, or as a rice substitute.'
  },
  {
    id: 'polenta', name: 'Polenta / Cornmeal', emoji: '🟡', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (170g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Polenta is made from corn and is low FODMAP. Great as a side dish, or let it set and fry it into crispy slices.'
  },

  // ─── DAIRY & ALTERNATIVES ─────────────────────────────────────────────────
  {
    id: 'cows-milk', name: 'Cow\'s Milk (regular)', emoji: '🥛', category: 'dairy', rating: 'red',
    servings: [
      { amount: '100ml', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Regular cow\'s milk is high in lactose. Switch to lactose-free milk, which is identical in nutrition but has the lactose broken down.'
  },
  {
    id: 'lactose-free-milk', name: 'Lactose-Free Milk', emoji: '🥛', category: 'dairy', rating: 'green',
    servings: [
      { amount: '250ml (1 cup)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lactose-free milk is identical to regular milk in nutrients but has the lactose pre-digested. A simple 1-for-1 swap in recipes and on cereal.'
  },
  {
    id: 'almond-milk', name: 'Almond Milk', emoji: '🌰', category: 'dairy', rating: 'green',
    servings: [
      { amount: '250ml (1 cup)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Almond milk (made with less than 2% almonds, as most commercial versions are) is low FODMAP. A great dairy-free alternative for cooking, cereal, and drinks.'
  },
  {
    id: 'oat-milk', name: 'Oat Milk', emoji: '🌾', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '30ml', rating: 'green', label: 'Low FODMAP' },
      { amount: '100ml', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Oat milk has become popular but contains fructans from oats. Use in small amounts only (a splash in coffee is fine, but not a full glass).'
  },
  {
    id: 'cheddar', name: 'Cheddar Cheese', emoji: '🧀', category: 'dairy', rating: 'green',
    servings: [
      { amount: '40g (2 slices)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Aged hard cheeses like cheddar are very low in lactose and safe to eat. The longer the aging, the lower the lactose content.'
  },
  {
    id: 'parmesan', name: 'Parmesan', emoji: '🧀', category: 'dairy', rating: 'green',
    servings: [
      { amount: '40g', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Parmesan is a long-aged cheese with negligible lactose. Grate over pasta dishes liberally!'
  },
  {
    id: 'feta', name: 'Feta', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '28g', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Feta contains more lactose than hard aged cheeses. A small amount (28g) is generally tolerated, but larger amounts may cause symptoms.'
  },
  {
    id: 'mozzarella-fresh', name: 'Mozzarella (fresh)', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '45g', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Fresh mozzarella contains more lactose than aged mozzarella or cheddar. A small amount is usually tolerated. Bocconcini is similar.'
  },
  {
    id: 'cream-cheese', name: 'Cream Cheese', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '2 tbsp (30g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Cream cheese contains moderate lactose. Use in small amounts as a spread or in cooking.'
  },
  {
    id: 'butter', name: 'Butter', emoji: '🧈', category: 'dairy', rating: 'green',
    servings: [
      { amount: '1 tbsp (14g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Butter is nearly lactose-free (it\'s mostly fat) and is low FODMAP. Safe to use in cooking and baking.'
  },
  {
    id: 'lactose-free-yogurt', name: 'Lactose-Free Yogurt', emoji: '🫙', category: 'dairy', rating: 'green',
    servings: [
      { amount: '3/4 cup (170g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lactose-free yogurt is a great option for breakfast or snacks. Look for plain varieties without added honey or fruit.'
  },
  {
    id: 'regular-yogurt', name: 'Yogurt (regular)', emoji: '🫙', category: 'dairy', rating: 'red',
    servings: [
      { amount: '170g', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Regular yogurt is high in lactose. Switch to lactose-free yogurt, which has the same taste and texture.'
  },
  {
    id: 'coconut-milk-canned', name: 'Coconut Milk (canned)', emoji: '🥥', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (60ml)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Canned coconut milk contains sorbitol at higher servings. Use in small amounts in cooking. Coconut cream is similar.'
  },
  {
    id: 'coconut-milk-carton', name: 'Coconut Milk (carton/drink)', emoji: '🥥', category: 'dairy', rating: 'green',
    servings: [
      { amount: '250ml (1 cup)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Drinking coconut milk (from a carton, not a can) is diluted and low FODMAP. A good dairy-free milk alternative.'
  },
  {
    id: 'soy-milk-whole', name: 'Soy Milk (whole soy)', emoji: '🥛', category: 'dairy', rating: 'red',
    servings: [
      { amount: '100ml', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos'],
    tip: 'Soy milk made from whole soybeans is high in GOS. Look for soy milk made from soy protein isolate instead, which is low FODMAP.'
  },
  {
    id: 'soy-milk-isolate', name: 'Soy Milk (soy protein isolate)', emoji: '🥛', category: 'dairy', rating: 'green',
    servings: [
      { amount: '250ml (1 cup)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Soy milk made with soy protein isolate (not whole soy beans) is low FODMAP. Check the ingredients label carefully.'
  },

  // ─── PROTEIN ─────────────────────────────────────────────────────────────
  {
    id: 'chicken', name: 'Chicken', emoji: '🍗', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain chicken is naturally free of FODMAPs. Be careful of marinades, sauces, and seasonings that may contain garlic, onion, or honey.'
  },
  {
    id: 'beef', name: 'Beef', emoji: '🥩', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain beef is FODMAP-free. Watch for pre-marinated cuts and processed beef products that often contain garlic and onion.'
  },
  {
    id: 'eggs', name: 'Eggs', emoji: '🥚', category: 'protein', rating: 'green',
    servings: [
      { amount: '2 eggs', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Eggs are one of the most FODMAP-friendly protein sources. Boiled, fried (in FODMAP-safe oil), poached, or scrambled — all great.'
  },
  {
    id: 'fish', name: 'Fish & Seafood', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'All plain fish and seafood are naturally FODMAP-free. Salmon, cod, tuna, shrimp, prawns — all safe. Avoid battered or seasoned varieties with FODMAP ingredients.'
  },
  {
    id: 'tofu-firm', name: 'Tofu (firm)', emoji: '⬜', category: 'protein', rating: 'green',
    servings: [
      { amount: '170g', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Firm tofu has had most of the GOS-rich liquid pressed out, making it low FODMAP. Great for stir-fries, grilling, or adding to soups.'
  },
  {
    id: 'tofu-silken', name: 'Tofu (silken/soft)', emoji: '⬜', category: 'protein', rating: 'yellow',
    servings: [
      { amount: '170g', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Silken and soft tofu retain more of the soy liquid and thus more GOS. Use firm tofu instead where possible.'
  },
  {
    id: 'tempeh', name: 'Tempeh', emoji: '🟫', category: 'protein', rating: 'green',
    servings: [
      { amount: '100g', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Tempeh is fermented soy — the fermentation process reduces FODMAPs significantly. A great plant-based protein for the low-FODMAP diet.'
  },
  {
    id: 'tuna-canned', name: 'Tuna (canned in water)', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: '100g', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Canned tuna in spring water is FODMAP-free. Great on rice cakes or in a salad. Avoid varieties with onion or garlic added.'
  },

  // ─── LEGUMES ─────────────────────────────────────────────────────────────
  {
    id: 'chickpeas', name: 'Chickpeas (canned, rinsed)', emoji: '🫘', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (42g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup (84g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1 cup+', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Canned chickpeas that have been rinsed well have reduced GOS. A 1/4 cup (42g) serving is low FODMAP. Start small and test your tolerance.'
  },
  {
    id: 'lentils', name: 'Lentils (canned, rinsed)', emoji: '🟤', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (46g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup+', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Rinsed canned lentils are lower in GOS than boiled-from-dry lentils. A small 1/4 cup serving is well tolerated by most people.'
  },
  {
    id: 'edamame', name: 'Edamame', emoji: '🫛', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '½ cup shelled (90g)', rating: 'yellow', label: 'Borderline — strict portion only' },
      { amount: '¾ cup+', rating: 'red', label: 'High FODMAP — avoid' },
    ],
    fodmaps: ['GOS'],
    tip: 'Edamame sits right on the FODMAP edge. The safe window is tiny — exactly ½ cup shelled per serving — and it\'s very easy to go over. During the elimination phase, it\'s safest to avoid it entirely. Reintroduce in the testing phase to check your personal tolerance.'
  },
  {
    id: 'kidney-beans', name: 'Kidney Beans', emoji: '🫘', category: 'legumes', rating: 'red',
    servings: [
      { amount: '1/4 cup', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Kidney beans are high in GOS and fructans even in small amounts. Best avoided on the elimination phase.'
  },
  {
    id: 'black-beans', name: 'Black Beans', emoji: '⚫', category: 'legumes', rating: 'red',
    servings: [
      { amount: '1/4 cup', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Black beans are high in oligosaccharides. Even a small serving can trigger significant IBS symptoms. Avoid during elimination phase.'
  },
  {
    id: 'peas-green', name: 'Peas (green)', emoji: '🫛', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (28g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1/2 cup+', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Green peas are moderate in oligosaccharides. A very small portion may be tolerated. Snap peas and snow peas are similar.'
  },

  // ─── NUTS & SEEDS ─────────────────────────────────────────────────────────
  {
    id: 'almonds', name: 'Almonds', emoji: '🌰', category: 'nuts', rating: 'yellow',
    servings: [
      { amount: '10 nuts (12g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '20 nuts (24g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '30+ nuts', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Almonds become high FODMAP in larger amounts. Stick to 10 nuts as a snack. Almond meal used in baking (about 24g) is low FODMAP.'
  },
  {
    id: 'cashews', name: 'Cashews', emoji: '🌰', category: 'nuts', rating: 'red',
    servings: [
      { amount: '10 nuts (30g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Cashews are high in GOS and fructans. Even 10 nuts is a high-FODMAP serving. Best avoided entirely on the elimination phase.'
  },
  {
    id: 'pistachios', name: 'Pistachios', emoji: '🟢', category: 'nuts', rating: 'red',
    servings: [
      { amount: '15 nuts (20g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Pistachios are among the highest-FODMAP nuts. Best avoided on the elimination phase.'
  },
  {
    id: 'walnuts', name: 'Walnuts', emoji: '🟤', category: 'nuts', rating: 'green',
    servings: [
      { amount: '10 halves (30g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Walnuts are low FODMAP and also rich in omega-3 fatty acids. Great as a snack or on salads.'
  },
  {
    id: 'macadamia', name: 'Macadamia Nuts', emoji: '⚪', category: 'nuts', rating: 'green',
    servings: [
      { amount: '15 nuts (43g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Macadamia nuts are low FODMAP and a delicious snack. Also great in low-FODMAP baked goods.'
  },
  {
    id: 'peanuts', name: 'Peanuts', emoji: '🥜', category: 'nuts', rating: 'green',
    servings: [
      { amount: '32 nuts (28g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Peanuts are low FODMAP and a great protein-rich snack. Peanut butter (plain, without added ingredients) is also low FODMAP.'
  },
  {
    id: 'pecans', name: 'Pecans', emoji: '🟤', category: 'nuts', rating: 'green',
    servings: [
      { amount: '10 halves (20g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Pecans are a great low-FODMAP nut choice. Enjoy as a snack or in low-FODMAP desserts.'
  },
  {
    id: 'brazil-nuts', name: 'Brazil Nuts', emoji: '🌰', category: 'nuts', rating: 'green',
    servings: [
      { amount: '10 nuts (30g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Brazil nuts are low FODMAP. They\'re also one of the richest sources of selenium — 2 nuts meets your daily needs!'
  },
  {
    id: 'chia-seeds', name: 'Chia Seeds', emoji: '⚫', category: 'nuts', rating: 'green',
    servings: [
      { amount: '2 tbsp (25g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Chia seeds are low FODMAP and an excellent source of fibre and omega-3s. Great in smoothies, puddings, or sprinkled on yoghurt.'
  },
  {
    id: 'pumpkin-seeds', name: 'Pumpkin Seeds', emoji: '🌱', category: 'nuts', rating: 'green',
    servings: [
      { amount: '2 tbsp (23g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Pumpkin seeds (pepitas) are low FODMAP and packed with zinc and magnesium. Great as a snack or salad topper.'
  },
  {
    id: 'sunflower-seeds', name: 'Sunflower Seeds', emoji: '🌻', category: 'nuts', rating: 'green',
    servings: [
      { amount: '2 tbsp (16g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Sunflower seeds are low FODMAP. Great as a snack, in trail mix, or as a salad topper.'
  },
  {
    id: 'sesame-seeds', name: 'Sesame Seeds', emoji: '⚪', category: 'nuts', rating: 'green',
    servings: [
      { amount: '1 tbsp (9g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Sesame seeds and tahini (sesame paste) are low FODMAP in normal serving sizes. Great in dressings or sprinkled on stir-fries.'
  },

  // ─── CONDIMENTS ───────────────────────────────────────────────────────────
  {
    id: 'garlic-infused-oil', name: 'Garlic-Infused Oil', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (14ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Garlic-infused oil is the #1 way to get garlic flavour without the FODMAPs. Fructans are water-soluble and do NOT dissolve in oil — making infused oil completely safe.'
  },
  {
    id: 'olive-oil', name: 'Olive Oil', emoji: '🫒', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (14ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Olive oil is FODMAP-free. Use it freely for cooking, dressings, and drizzling.'
  },
  {
    id: 'honey', name: 'Honey', emoji: '🍯', category: 'condiments', rating: 'red',
    servings: [
      { amount: '1 tsp (7g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Honey is very high in excess fructose. Even a small amount can trigger symptoms. Use maple syrup or rice malt syrup as safe alternatives.'
  },
  {
    id: 'maple-syrup', name: 'Maple Syrup', emoji: '🍁', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (60ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Pure maple syrup is low FODMAP — a great alternative to honey. Use in baking, oatmeal, or as a drizzle on pancakes.'
  },
  {
    id: 'peanut-butter', name: 'Peanut Butter', emoji: '🥜', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (32g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain peanut butter (just peanuts and salt) is low FODMAP. Avoid varieties with added honey or HFCS (high-fructose corn syrup).'
  },
  {
    id: 'mayonnaise', name: 'Mayonnaise', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (28g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain mayonnaise is low FODMAP. Check ingredients on flavoured versions — some contain garlic or onion.'
  },
  {
    id: 'mustard', name: 'Mustard', emoji: '💛', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (15g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain yellow and Dijon mustard are low FODMAP. A great flavour boost for dressings, marinades, and sandwiches.'
  },
  {
    id: 'soy-sauce', name: 'Soy Sauce', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (42ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Regular soy sauce is low FODMAP in serving sizes used in cooking. Use tamari (wheat-free soy sauce) if you\'re also avoiding gluten.'
  },
  {
    id: 'tomato-ketchup', name: 'Tomato Ketchup', emoji: '🍅', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '1 sachet / 1 tsp (7g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '3 tbsp (50g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose', 'fructans'],
    tip: 'A small amount of ketchup (1 sachet) is fine. Larger amounts push fructose and fructans into the moderate range. Check for HFCS in the ingredients.'
  },
  {
    id: 'sugar', name: 'Sugar (white / brown)', emoji: '🍬', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (12g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Regular white and brown sugar are low FODMAP (sucrose = equal fructose + glucose, which doesn\'t count as excess fructose). Use freely in baking.'
  },

  // ─── BEVERAGES ────────────────────────────────────────────────────────────
  {
    id: 'water', name: 'Water', emoji: '💧', category: 'beverages', rating: 'green',
    servings: [
      { amount: 'Any amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain water is always safe on a low-FODMAP diet. Stay well hydrated — good hydration helps manage IBS symptoms.'
  },
  {
    id: 'black-coffee', name: 'Black Coffee', emoji: '☕', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Black coffee is low FODMAP. Add lactose-free milk, almond milk, or soy protein isolate milk. Avoid adding honey. Note: coffee can be a gut stimulant for some people regardless of FODMAPs.'
  },
  {
    id: 'black-tea', name: 'Black Tea', emoji: '🍵', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain brewed black tea is low FODMAP. Add lactose-free milk if desired. Avoid chai lattes from cafés which often contain lactose-heavy milk.'
  },
  {
    id: 'green-tea', name: 'Green Tea', emoji: '🍵', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Green tea is low FODMAP. Enjoy hot or iced. Avoid green tea-based drinks with added sweeteners or fruit syrups.'
  },
  {
    id: 'peppermint-tea', name: 'Peppermint Tea', emoji: '🌿', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Peppermint tea is low FODMAP and may actually help relieve IBS symptoms. It can help relax intestinal muscles and ease bloating and cramping.'
  },
  {
    id: 'chamomile-tea', name: 'Chamomile Tea', emoji: '🌼', category: 'beverages', rating: 'yellow',
    servings: [
      { amount: '1 cup (240ml) — weak brew', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Chamomile tea made from chamomile flowers contains some fructans. A weak brew (shorter steep time) is generally better tolerated.'
  },
  {
    id: 'orange-juice', name: 'Orange Juice (fresh)', emoji: '🍊', category: 'beverages', rating: 'green',
    servings: [
      { amount: '125ml (1/2 cup)', rating: 'green', label: 'Low FODMAP' },
      { amount: '250ml+', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'A small glass (125ml) of fresh orange juice is low FODMAP. Larger amounts accumulate fructose. Avoid apple and pear juice entirely.'
  },
  {
    id: 'coconut-water', name: 'Coconut Water', emoji: '🥥', category: 'beverages', rating: 'yellow',
    servings: [
      { amount: '100ml', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['sorbitol', 'mannitol'],
    tip: 'Coconut water contains both sorbitol and mannitol. Even small amounts can be moderate FODMAP. Best avoided during the elimination phase.'
  },
  {
    id: 'wine-white', name: 'White Wine', emoji: '🥂', category: 'beverages', rating: 'yellow',
    servings: [
      { amount: '150ml (1 standard glass)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'White wine is moderate FODMAP. One glass may be tolerated but alcohol itself can irritate the gut and worsen IBS symptoms. Dry varieties are generally lower FODMAP than sweet.'
  },
  {
    id: 'wine-red', name: 'Red Wine', emoji: '🍷', category: 'beverages', rating: 'yellow',
    servings: [
      { amount: '150ml (1 standard glass)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Red wine is moderate FODMAP. Note that alcohol itself can trigger IBS symptoms independently of FODMAP content. Limit to one glass if you choose to drink.'
  },
  {
    id: 'beer', name: 'Beer (regular)', emoji: '🍺', category: 'beverages', rating: 'red',
    servings: [
      { amount: '375ml (1 can/bottle)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Regular beer is made from wheat or barley and is high in fructans. Look for gluten-free beer as an alternative, which is much lower in FODMAPs.'
  },
  {
    id: 'spirits', name: 'Spirits (vodka, gin, whiskey)', emoji: '🥃', category: 'beverages', rating: 'green',
    servings: [
      { amount: '30ml (1 shot)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain distilled spirits are low FODMAP. However, mixers like juice, cola, or tonic water may add FODMAPs. Choose soda water or diet mixers. Remember: alcohol itself can irritate the gut.'
  },

  // ─── FRUITS (additional) ─────────────────────────────────
  {
    id: 'grapefruit', name: 'Grapefruit', emoji: '🍊', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1/2 medium (123g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Grapefruit is low FODMAP. Note: grapefruit interacts with many medications — if you take any prescription drugs, check with your doctor before eating it regularly.'
  },
  {
    id: 'mandarin', name: 'Mandarin / Clementine', emoji: '🍊', category: 'fruits', rating: 'green',
    servings: [
      { amount: '2 medium (120g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Mandarins and clementines are low FODMAP — even better than oranges for snacking on the go. Rich in vitamin C.'
  },
  {
    id: 'fig-fresh', name: 'Fig (fresh)', emoji: '🟣', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1 medium (50g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Fresh figs are high in both excess fructose and sorbitol. Dried figs are even more concentrated — avoid both during the elimination phase.'
  },
  {
    id: 'lychee', name: 'Lychee', emoji: '🩷', category: 'fruits', rating: 'red',
    servings: [
      { amount: '5 fruits (75g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Lychees are high in excess fructose and sorbitol. Fresh, canned, or dried — all should be avoided on the elimination phase.'
  },
  {
    id: 'pomegranate', name: 'Pomegranate Seeds', emoji: '🩷', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (45g)', rating: 'yellow', label: 'Moderate FODMAP' },
      { amount: '1/2 cup+', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Pomegranate seeds are moderate in excess fructose. A small sprinkle over a salad is fine, but avoid eating them in large quantities.'
  },
  {
    id: 'honeydew', name: 'Honeydew Melon', emoji: '🍈', category: 'fruits', rating: 'red',
    servings: [
      { amount: '1/2 cup (90g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol', 'fructose'],
    tip: 'Honeydew melon is high in mannitol and fructose. Best avoided entirely. Cantaloupe/rockmelon is a similarly limited option — stick to very small amounts.'
  },
  {
    id: 'starfruit', name: 'Star Fruit / Carambola', emoji: '⭐', category: 'fruits', rating: 'green',
    servings: [
      { amount: '1 medium (91g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Star fruit is low FODMAP and a fun exotic option. Note: it contains toxins that affect people with kidney disease — check with your doctor if you have kidney problems.'
  },
  {
    id: 'guava', name: 'Guava', emoji: '🍈', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/2 fruit (55g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Guava contains moderate fructose. A small half-fruit serving is manageable, but avoid eating multiple guavas at once.'
  },
  {
    id: 'jackfruit', name: 'Jackfruit', emoji: '🟡', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Jackfruit (raw or ripe) is high in FODMAPs. Even popular "pulled jackfruit" products are often high — check labels carefully and avoid during elimination phase.'
  },
  {
    id: 'coconut-flesh', name: 'Coconut (fresh flesh)', emoji: '🥥', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1/2 cup (40g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['sorbitol'],
    tip: 'Fresh coconut flesh contains moderate sorbitol. Enjoy in small amounts as a topping or snack. Desiccated (dried) coconut is similar — limit to 1/4 cup.'
  },

  // ─── VEGETABLES (additional) ─────────────────────────────
  {
    id: 'arugula', name: 'Arugula / Rocket', emoji: '🌿', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (20g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Arugula is low FODMAP and adds a peppery bite to salads. Use generously as a salad base or on top of GF pizza.'
  },
  {
    id: 'bamboo-shoots', name: 'Bamboo Shoots (canned)', emoji: '🌱', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (120g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Canned bamboo shoots are low FODMAP and a great addition to Asian stir-fries and soups. Rinse well before using.'
  },
  {
    id: 'broccolini', name: 'Broccolini', emoji: '🥦', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/2 cup (37g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1 cup (75g+)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'mannitol'],
    tip: 'Broccolini contains a mix of fructans and mannitol. Small servings are fine — limit to 1/2 cup to stay in the low FODMAP range.'
  },
  {
    id: 'chili-red', name: 'Chili (red, fresh)', emoji: '🌶️', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '11g (about 1 small chili)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fresh red chili in small amounts is low FODMAP and a great way to add heat. Red chili is lower in fructans than green chili. Dried chili flakes are also low FODMAP in small amounts.'
  },
  {
    id: 'chives', name: 'Chives', emoji: '🌱', category: 'vegetables', rating: 'green',
    servings: [
      { amount: 'Freely (any amount as a garnish)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Chives are low FODMAP and a great alternative to onion flavour as a garnish. Use on baked potatoes, soups, and salads in place of spring onion greens.'
  },
  {
    id: 'daikon', name: 'Daikon Radish', emoji: '⬜', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (116g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Daikon is low FODMAP and commonly used in Asian cooking. Great grated into slaws, pickled, or added to soups and stir-fries.'
  },
  {
    id: 'ginger', name: 'Ginger (fresh)', emoji: '🫚', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 tsp grated', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fresh ginger is low FODMAP and may actually help ease digestive symptoms. Add to stir-fries, soups, smoothies, and teas freely.'
  },
  {
    id: 'parsnip', name: 'Parsnip', emoji: '⬜', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (45g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup (75g+)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Parsnips contain mannitol that accumulates at larger servings. A small portion alongside other low-FODMAP vegetables is fine.'
  },
  {
    id: 'radish', name: 'Radish', emoji: '🔴', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '2 radishes (40g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Radishes are low FODMAP. A crisp, peppery addition to salads and tacos. They lose their pungency when cooked.'
  },
  {
    id: 'shallots', name: 'Shallots', emoji: '🧅', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Shallots are extremely high in fructans — even more so than regular onions per weight. Avoid all amounts including powdered shallot. Use spring onion green tops as a substitute.'
  },
  {
    id: 'silverbeet', name: 'Silverbeet / Swiss Chard', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup chopped (35g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Silverbeet (Swiss chard) is low FODMAP and rich in iron and vitamins. Great wilted into pasta dishes or stir-fried with garlic-infused oil.'
  },
  {
    id: 'snow-peas', name: 'Snow Peas / Snap Peas', emoji: '🫛', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '5 pods (35g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '10+ pods (80g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Snow peas and snap peas contain oligosaccharides that increase with serving size. Enjoy a small handful in a stir-fry — don\'t eat a whole bag at once.'
  },
  {
    id: 'sun-dried-tomato', name: 'Sun-Dried Tomatoes', emoji: '🍅', category: 'vegetables', rating: 'yellow',
    servings: [
      { amount: '4 pieces (16g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Sun-dried tomatoes are concentrated and therefore higher in fructose than fresh tomatoes. A small amount for flavouring is manageable. Check for added garlic in the oil.'
  },
  {
    id: 'turnip', name: 'Turnip', emoji: '⚪', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1/2 cup cubed (65g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Turnips are low FODMAP. Roast them as a lower-carb alternative to potatoes, or add to soups and stews.'
  },
  {
    id: 'water-chestnuts', name: 'Water Chestnuts (canned)', emoji: '⚪', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1/2 cup (70g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Water chestnuts are low FODMAP and stay wonderfully crunchy even when cooked. A great addition to Asian stir-fries.'
  },
  {
    id: 'watercress', name: 'Watercress', emoji: '🌿', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (34g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Watercress is low FODMAP and packed with vitamins K and C. Use as a salad green, a soup base, or blended into a smooth green soup.'
  },
  {
    id: 'spring-onion-white', name: 'Spring Onion (white base)', emoji: '🧅', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'The white/pale base of spring onions is high in fructans — only the dark green tops are safe to eat. Cut off the white part and only use the green.'
  },
  {
    id: 'nori', name: 'Nori Seaweed', emoji: '🟫', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '5g (1 sheet)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Nori sheets are low FODMAP and a great mineral-rich snack or sushi wrapper. Use to wrap rice and fillings for a FODMAP-friendly sushi bowl.'
  },

  // ─── GRAINS (additional) ─────────────────────────────────
  {
    id: 'millet', name: 'Millet', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked (174g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Millet is a gluten-free, low-FODMAP grain with a mild, slightly nutty flavour. Use as a porridge base, a rice substitute, or in salads.'
  },
  {
    id: 'corn-tortillas', name: 'Corn Tortillas', emoji: '🌮', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 small tortillas (50g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Corn tortillas are made from corn masa and are low FODMAP. Use as a FODMAP-friendly alternative to wheat flour tortillas in tacos and wraps.'
  },
  {
    id: 'wheat-pasta', name: 'Wheat Pasta (regular)', emoji: '🍝', category: 'grains', rating: 'red',
    servings: [
      { amount: '1 cup cooked (145g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Regular wheat pasta is high in fructans. Switch to gluten-free pasta (rice, corn, or chickpea-based) as a safe alternative.'
  },
  {
    id: 'wheat-flour', name: 'Wheat Flour (plain)', emoji: '⬜', category: 'grains', rating: 'red',
    servings: [
      { amount: '1/4 cup (30g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Regular wheat flour is high in fructans. Use rice flour, almond meal, or a commercial gluten-free flour blend for low-FODMAP baking.'
  },
  {
    id: 'gf-flour', name: 'Gluten-Free Flour Blend', emoji: '⬜', category: 'grains', rating: 'green',
    servings: [
      { amount: '1/4 cup (30g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Most GF flour blends (rice, corn, tapioca based) are low FODMAP. Check the label — avoid blends containing soy flour, lupin, or chicory root/inulin.'
  },
  {
    id: 'gf-crackers', name: 'Gluten-Free Crackers (plain)', emoji: '🫓', category: 'grains', rating: 'green',
    servings: [
      { amount: '20g (about 4–5 crackers)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain GF crackers (rice-based, corn-based) are low FODMAP. Check ingredients — avoid those with onion powder, garlic, apple, or chicory root.'
  },
  {
    id: 'cassava-tortillas', name: 'Cassava Flour Tortillas', emoji: '🌮', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 tortillas (50g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Cassava flour tortillas (e.g. Siete brand) are the closest 1-for-1 substitute for corn or wheat tortillas — same soft, pliable texture. Made from cassava root starch, they are naturally gluten-free and low FODMAP. Check the label for added garlic or onion powder.'
  },
  {
    id: 'gf-flour-tortillas', name: 'GF Flour Tortillas (rice-based)', emoji: '🫓', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 large or 2 small (50g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Gluten-free flour tortillas made from rice flour, tapioca, or a GF blend are low FODMAP. Check ingredients carefully — avoid any that list chicory root/inulin, honey, apple juice, or onion/garlic powder. Good brands: Mission GF, Siete flour tortillas.'
  },
  {
    id: 'rice-paper-wrappers', name: 'Rice Paper Wrappers', emoji: '🫙', category: 'grains', rating: 'green',
    servings: [
      { amount: '2–3 sheets', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Rice paper wrappers are made from rice starch and water — completely FODMAP-free. Soak in warm water for 10–15 seconds until soft and pliable. Perfect for fresh spring rolls, Vietnamese-style wraps, or as a gluten-free alternative to tortillas with shrimp, chicken, rice noodles, and veggies.'
  },
  {
    id: 'buckwheat-crepes', name: 'Buckwheat Crepes', emoji: '🥞', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 crepes', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Buckwheat crepes (galettes) are naturally gluten-free and 100% low FODMAP. Make the batter with buckwheat flour, egg, lactose-free milk, and a pinch of salt. They\'re pliable enough to wrap eggs and bacon, smoked salmon, or sweet fillings. Despite the name, buckwheat is unrelated to wheat.'
  },
  {
    id: 'lettuce-wraps', name: 'Lettuce Wraps (as a shell)', emoji: '🥬', category: 'grains', rating: 'green',
    servings: [
      { amount: 'Any amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Using large lettuce leaves as a wrap or taco shell is zero-FODMAP and naturally low-carb. Best varieties: butter lettuce (soft and cup-shaped), iceberg (crunchy and holds its shape), romaine (sturdy for heavier fillings). No prep needed — just rinse, pat dry, and fill.'
  },
  {
    id: 'gf-commercial-wraps', name: 'GF Wraps (commercial)', emoji: '🫓', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 wrap (50g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Many brands now make GF wraps suitable for the low-FODMAP diet. Look for those made with rice flour, tapioca, or potato starch. Always read the label — avoid wraps containing inulin, chicory root, garlic powder, onion powder, or high-fructose corn syrup. Good brands: Udi\'s, Canyon Bakehouse, BFree.'
  },
  {
    id: 'collard-greens', name: 'Collard Green Wraps', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: 'Any amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Collard greens make sturdy, burrito-sized wraps — much larger and sturdier than lettuce. To use: cut off the thick center stem, blanch the leaf in boiling water for 30–60 seconds, pat dry. Fill with rice, protein, and veggies and fold like a burrito. Zero FODMAP and a great source of vitamins K and C.'
  },
  {
    id: 'tapioca', name: 'Tapioca / Cassava', emoji: '⚪', category: 'grains', rating: 'green',
    servings: [
      { amount: '2 tbsp pearls or flour (16g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Tapioca (cassava starch) is low FODMAP. Used as a thickener or in GF baking. Tapioca pearls for bubble tea are also low FODMAP — watch the sugar content in the tea base.'
  },
  {
    id: 'sourdough-wheat', name: 'Sourdough Wheat Bread', emoji: '🍞', category: 'grains', rating: 'yellow',
    servings: [
      { amount: '2 slices (97g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Long-fermentation sourdough wheat bread has reduced fructans compared to regular wheat bread. Some people tolerate it well — test carefully. Choose traditionally fermented loaves (minimum 8-hour ferment).'
  },

  // ─── DAIRY (additional) ──────────────────────────────────
  {
    id: 'brie', name: 'Brie / Camembert', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '40g (1.5 oz)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Soft white-rind cheeses like brie and camembert have more lactose than hard aged cheeses. A small serving is usually tolerated — but larger amounts may cause symptoms.'
  },
  {
    id: 'goat-cheese', name: 'Goat Cheese (soft)', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '40g', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Soft goat cheese still contains lactose. A small amount for salads is manageable. Aged goat cheese (chèvre sec) has less lactose and is better tolerated.'
  },
  {
    id: 'ricotta', name: 'Ricotta', emoji: '⬜', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '2 tbsp (40g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Ricotta has moderate lactose. Small amounts used as a topping or filling are manageable for most people. Avoid using it as a main ingredient in large-portion dishes.'
  },
  {
    id: 'lf-ice-cream', name: 'Lactose-Free Ice Cream', emoji: '🍦', category: 'dairy', rating: 'green',
    servings: [
      { amount: '1/2 cup (65g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lactose-free ice cream is low FODMAP. Check that it contains no high-FODMAP ingredients like honey, apple, pear, mango, or stone fruits.'
  },
  {
    id: 'regular-ice-cream', name: 'Ice Cream (regular)', emoji: '🍨', category: 'dairy', rating: 'red',
    servings: [
      { amount: '1/2 cup (65g)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Regular ice cream is high in lactose. Switch to lactose-free ice cream, or try sorbet made from low-FODMAP fruits (strawberry, pineapple).'
  },
  {
    id: 'sour-cream', name: 'Sour Cream', emoji: '🥛', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '2 tbsp (24g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Sour cream has moderate lactose. A small dollop on a baked potato or taco is usually fine — just don\'t use multiple large spoonfuls.'
  },
  {
    id: 'condensed-milk', name: 'Condensed Milk (sweetened)', emoji: '🥛', category: 'dairy', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['lactose', 'fructose'],
    tip: 'Sweetened condensed milk is very high in both lactose and fructose (from added sugar). Avoid it entirely and use lactose-free alternatives in any recipe calling for it.'
  },
  {
    id: 'rice-milk', name: 'Rice Milk', emoji: '🥛', category: 'dairy', rating: 'green',
    servings: [
      { amount: '200ml', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Rice milk is low FODMAP and a great dairy-free alternative. It is thinner and naturally sweeter than almond milk. Check for added barley malt or high-FODMAP ingredients.'
  },

  // ─── PROTEIN (additional) ────────────────────────────────
  {
    id: 'pork', name: 'Pork (plain)', emoji: '🥩', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain pork — chops, tenderloin, mince — is naturally FODMAP-free. Always watch for marinades and seasonings containing garlic, onion, or apple.'
  },
  {
    id: 'lamb', name: 'Lamb (plain)', emoji: '🥩', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain lamb is FODMAP-free. Season with fresh herbs, garlic-infused oil, and lemon for maximum flavour without any FODMAPs.'
  },
  {
    id: 'turkey', name: 'Turkey (plain)', emoji: '🦃', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain turkey is FODMAP-free. Turkey mince is a leaner, lower-fat alternative to beef that works well in bolognese, burgers, and meatballs.'
  },
  {
    id: 'deli-meats', name: 'Deli Meats (plain)', emoji: '🥩', category: 'protein', rating: 'yellow',
    servings: [
      { amount: '2 slices (52g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Plain sliced deli meats (turkey, chicken, ham) are usually low FODMAP in small amounts. Watch out: many contain added garlic powder, onion powder, or honey. Read the label every time.'
  },
  {
    id: 'salmon', name: 'Salmon (fresh)', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fresh salmon is FODMAP-free and one of the best sources of omega-3 fatty acids. Bake, pan-fry, or grill with a simple lemon-herb seasoning.'
  },
  {
    id: 'shrimp-prawns', name: 'Shrimp / Prawns', emoji: '🍤', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any amount (plain)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Shrimp and prawns are completely FODMAP-free. Avoid pre-marinated varieties which often contain garlic or onion. Fresh or plain frozen is best.'
  },

  // ─── LEGUMES (additional) ────────────────────────────────
  {
    id: 'cannellini-beans', name: 'Cannellini Beans (canned, rinsed)', emoji: '⬜', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (42g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1/2 cup+', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Well-rinsed canned cannellini beans have reduced GOS. A 1/4 cup serving is manageable for many people. Start small and test your tolerance.'
  },
  {
    id: 'butter-beans', name: 'Butter Beans / Lima Beans (canned, rinsed)', emoji: '🟡', category: 'legumes', rating: 'yellow',
    servings: [
      { amount: '1/4 cup (42g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Even a small serving of butter beans is moderate in oligosaccharides. If you want to include them, rinse very well and keep to 2 tbsp maximum.'
  },
  {
    id: 'soybeans', name: 'Soybeans (whole)', emoji: '🫘', category: 'legumes', rating: 'red',
    servings: [
      { amount: '1/4 cup', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos'],
    tip: 'Whole soybeans are very high in GOS. Avoid during the elimination phase. Edamame (immature soybeans) is much lower and generally safe.'
  },
  {
    id: 'split-peas', name: 'Split Peas', emoji: '🟡', category: 'legumes', rating: 'red',
    servings: [
      { amount: '1/4 cup', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Split peas (yellow or green) are high in oligosaccharides. Avoid during the elimination phase. Canned lentils (well rinsed) are a better tolerated alternative.'
  },

  // ─── NUTS & SEEDS (additional) ───────────────────────────
  {
    id: 'hazelnuts', name: 'Hazelnuts', emoji: '🟤', category: 'nuts', rating: 'yellow',
    servings: [
      { amount: '10 nuts (15g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '20+ nuts', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Hazelnuts contain fructans that accumulate at larger servings. Stick to 10 nuts as a snack. Hazelnut butter is similar — limit to about 1.5 tbsp.'
  },
  {
    id: 'pine-nuts', name: 'Pine Nuts', emoji: '⚪', category: 'nuts', rating: 'green',
    servings: [
      { amount: '1 tbsp (14g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Pine nuts are low FODMAP in a 1-tablespoon serving. A classic addition to pesto and salads. Keep to 1 tbsp per serve — the serving size is important.'
  },
  {
    id: 'flaxseeds', name: 'Flaxseeds / Linseeds', emoji: '🟤', category: 'nuts', rating: 'green',
    servings: [
      { amount: '1 tbsp (14g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Flaxseeds (ground or whole) are low FODMAP. Rich in omega-3s and fibre. Ground flaxseeds absorb liquid and can be used as an egg substitute in baking (1 tbsp + 3 tbsp water).'
  },
  {
    id: 'hemp-seeds', name: 'Hemp Seeds', emoji: '🟢', category: 'nuts', rating: 'green',
    servings: [
      { amount: '2 tbsp (20g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Hemp seeds are low FODMAP and a complete plant-based protein. Great sprinkled on smoothie bowls, salads, or oatmeal.'
  },
  {
    id: 'tahini', name: 'Tahini (sesame paste)', emoji: '🟤', category: 'nuts', rating: 'green',
    servings: [
      { amount: '2 tbsp (30g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Tahini (ground sesame paste) is low FODMAP in normal serving sizes. Use in FODMAP-friendly dressings and sauces — it adds a rich, nutty depth.'
  },
  {
    id: 'almond-butter', name: 'Almond Butter', emoji: '🌰', category: 'nuts', rating: 'yellow',
    servings: [
      { amount: '1 tbsp (16g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '2+ tbsp', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos', 'fructans'],
    tip: 'Almond butter has the same FODMAP profile as whole almonds. Keep to 1 tablespoon per serve. Peanut butter has no FODMAP concern at 2 tbsp.'
  },

  // ─── CONDIMENTS (additional) ──────────────────────────────
  {
    id: 'apple-cider-vinegar', name: 'Apple Cider Vinegar', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (30ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Apple cider vinegar is low FODMAP in typical amounts used as a dressing. Despite the name "apple," the fructose does not survive the fermentation process.'
  },
  {
    id: 'balsamic-vinegar', name: 'Balsamic Vinegar', emoji: '🟫', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '1 tbsp (20ml)', rating: 'green', label: 'Low FODMAP' },
      { amount: '3+ tbsp', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'A splash of balsamic vinegar is fine. It becomes moderate in fructose at larger amounts. Use as a drizzle, not a marinade you eat in large quantities.'
  },
  {
    id: 'fish-sauce', name: 'Fish Sauce', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (28ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fish sauce is low FODMAP and adds incredible umami to Asian dishes. Use it in stir-fries, soups, and marinades. A great FODMAP-safe flavour booster.'
  },
  {
    id: 'hot-sauce', name: 'Hot Sauce (Tabasco-style)', emoji: '🌶️', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tsp (5ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain vinegar-based hot sauces (like Tabasco) are low FODMAP. Avoid hot sauces with garlic, onion, or added fruit concentrates on the ingredients list.'
  },
  {
    id: 'miso-paste', name: 'Miso Paste', emoji: '🟤', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '2 tsp (12g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Miso paste is made from fermented soybeans. A small amount adds great depth of flavour, but larger amounts may push oligosaccharides into the high range. Use as a seasoning, not a main ingredient.'
  },
  {
    id: 'nutritional-yeast', name: 'Nutritional Yeast', emoji: '🟡', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (8g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Nutritional yeast is low FODMAP and gives a cheesy, savory (umami) flavour to dishes — great for dairy-free cooking. Sprinkle on popcorn, pasta, or scrambled eggs.'
  },
  {
    id: 'tomato-paste', name: 'Tomato Paste', emoji: '🍅', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '2 tbsp (28g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Tomato paste is concentrated and therefore higher in fructose than fresh or canned tomatoes. Use in small amounts as a flavour base — 1–2 tablespoons per dish divided into servings is manageable.'
  },
  {
    id: 'worcestershire', name: 'Worcestershire Sauce', emoji: '🫙', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '1 tsp (5ml)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Worcestershire sauce contains onion and garlic (fructans) as well as tamarind (fructose). Use sparingly — 1 tsp in a recipe divided between servings is usually fine.'
  },
  {
    id: 'coconut-aminos', name: 'Coconut Aminos', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (15ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Coconut aminos is a soy-free, gluten-free alternative to soy sauce with a slightly sweeter taste. Low FODMAP and great for those avoiding both gluten and soy.'
  },
  {
    id: 'rice-malt-syrup', name: 'Rice Malt Syrup', emoji: '🍯', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (42ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Rice malt syrup contains only glucose (no fructose) and is completely safe on a low-FODMAP diet. A great alternative to honey or agave syrup.'
  },

  // ─── BEVERAGES (additional) ───────────────────────────────
  {
    id: 'ginger-tea', name: 'Ginger Tea', emoji: '🍵', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Ginger tea is low FODMAP and may genuinely help with nausea and bloating. Use fresh ginger steeped in hot water or a plain ginger tea bag with no other added herbs.'
  },
  {
    id: 'peppermint-oil-caps', name: 'Peppermint (capsules/supplement)', emoji: '🌿', category: 'beverages', rating: 'green',
    servings: [
      { amount: 'As directed', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Enteric-coated peppermint oil capsules have clinical evidence for reducing IBS symptoms — they relax intestinal muscles. Ask your doctor or dietitian about this supplement.'
  },
  {
    id: 'apple-juice', name: 'Apple Juice', emoji: '🍎', category: 'beverages', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'sorbitol'],
    tip: 'Apple juice is very high in excess fructose and sorbitol — even a small glass can cause significant symptoms. Avoid entirely. Orange juice in small amounts (125ml) is a safer alternative.'
  },
  {
    id: 'kombucha', name: 'Kombucha', emoji: '🫙', category: 'beverages', rating: 'yellow',
    servings: [
      { amount: '1/2 cup (120ml)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Kombucha\'s FODMAP content varies with the brand and fermentation time — it can contain excess fructose depending on residual sugar. Test your individual tolerance carefully. Start with a very small amount.'
  },
  {
    id: 'diet-soft-drink', name: 'Diet Soft Drink / Soda', emoji: '🥤', category: 'beverages', rating: 'green',
    servings: [
      { amount: '375ml (1 can)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Diet sodas sweetened with aspartame, stevia, or acesulfame potassium are low FODMAP. Carbonation itself can worsen bloating in some people — choose still water if gas is a problem.'
  },
  {
    id: 'lactose-free-hot-choc', name: 'Hot Chocolate (lactose-free milk)', emoji: '🍫', category: 'beverages', rating: 'green',
    servings: [
      { amount: '1 cup (240ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Made with lactose-free milk and 2 tsp cocoa powder + maple syrup, hot chocolate is low FODMAP. Avoid pre-made mixes that may contain milk solids, honey, or other high-FODMAP additives.'
  },

  // ─── HERBS & SPICES ────────────────────────────────────────────────────────
  {
    id: 'basil-fresh', name: 'Basil (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Fresh and dried basil are both low FODMAP. Use generously in sauces, salads, and as a garnish.'
  },
  {
    id: 'cilantro', name: 'Cilantro / Coriander (fresh)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Fresh cilantro leaves and stems are low FODMAP. Coriander seeds (dried) are also low FODMAP. Use both freely.'
  },
  {
    id: 'mint-fresh', name: 'Mint (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Fresh mint is low FODMAP. Great in salads, drinks, and as a garnish. Peppermint tea is also low FODMAP.'
  },
  {
    id: 'parsley-fresh', name: 'Parsley (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Both flat-leaf (Italian) and curly parsley are low FODMAP. Use as a garnish or stir into sauces, tabbouleh, and soups.'
  },
  {
    id: 'rosemary', name: 'Rosemary (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Rosemary is low FODMAP. Excellent with roasted meats and vegetables. Fresh or dried both work — use about ⅓ the amount of dried vs. fresh.'
  },
  {
    id: 'thyme', name: 'Thyme (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Thyme is low FODMAP. A kitchen essential for soups, braises, and roasted vegetables.'
  },
  {
    id: 'oregano', name: 'Oregano (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Oregano is low FODMAP — both fresh and dried. A staple for Italian, Greek, and Mexican cooking.'
  },
  {
    id: 'dill', name: 'Dill (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Dill is low FODMAP. Great with salmon, eggs, pickles, and cucumber salads.'
  },
  {
    id: 'sage', name: 'Sage (fresh or dried)', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Sage is low FODMAP. Pairs beautifully with butternut squash, pork, and GF pasta with browned butter.'
  },
  {
    id: 'cumin', name: 'Cumin (ground or seeds)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Cumin is low FODMAP in typical cooking amounts. Essential in Mexican, Indian, and Middle Eastern dishes.'
  },
  {
    id: 'paprika', name: 'Paprika (sweet or smoked)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Sweet, hot, and smoked paprika are all low FODMAP. Smoked paprika adds a great depth to FODMAP-friendly cooking.'
  },
  {
    id: 'turmeric', name: 'Turmeric (ground)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Turmeric is low FODMAP. Its active compound curcumin also has anti-inflammatory properties — a bonus for gut health.'
  },
  {
    id: 'cinnamon', name: 'Cinnamon (ground or sticks)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Cinnamon is low FODMAP. Use in oatmeal, smoothies, baked goods, and savory rubs. Both Ceylon and cassia varieties are safe.'
  },
  {
    id: 'black-pepper', name: 'Black Pepper', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Black pepper is low FODMAP. White and pink peppercorns are also safe. Season freely.'
  },
  {
    id: 'garlic-powder', name: 'Garlic Powder', emoji: '🧄', category: 'herbs', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP — Avoid' }
    ],
    fodmaps: ['fructans'],
    tip: 'Garlic powder is concentrated fructans — even ¼ tsp can trigger symptoms. It is NOT a safe substitute for fresh garlic. Use garlic-infused olive oil instead (fructans are not oil-soluble, so the oil is safe).'
  },
  {
    id: 'onion-powder', name: 'Onion Powder', emoji: '🧅', category: 'herbs', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP — Avoid' }
    ],
    fodmaps: ['fructans'],
    tip: 'Onion powder is concentrated fructans and very high FODMAP. It is hidden in spice blends, seasoning packets, stock cubes, and sauces — always read labels. There is no safe serving size.'
  },
  {
    id: 'cayenne', name: 'Cayenne Pepper', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Cayenne is low FODMAP. It adds heat without FODMAPs — use it in place of hot sauces that may contain garlic.'
  },
  {
    id: 'chili-powder', name: 'Chili Powder (pure)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [
      { amount: 'Pure ground chili', rating: 'green', label: 'Low FODMAP' },
      { amount: 'Blended chili powder', rating: 'yellow', label: 'Check ingredients' }
    ],
    fodmaps: [],
    tip: 'Pure ground dried chili (ancho, chipotle, guajillo) is low FODMAP. Many commercial "chili powder" blends contain onion powder and garlic powder — always check ingredients and choose single-ingredient varieties.'
  },
  {
    id: 'garam-masala', name: 'Garam Masala', emoji: '🌶️', category: 'herbs', rating: 'yellow',
    servings: [
      { amount: '1 tsp', rating: 'green', label: 'Low FODMAP' },
      { amount: '> 1 tsp', rating: 'yellow', label: 'May be moderate' }
    ],
    fodmaps: ['fructans'],
    tip: 'Most commercial garam masala blends contain trace amounts of garlic or onion powder. At 1 tsp per recipe, it is generally tolerated. Make your own with cumin, coriander, cardamom, cinnamon, cloves, and black pepper — all low FODMAP.'
  },
  {
    id: 'bay-leaves', name: 'Bay Leaves', emoji: '🌿', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Bay leaves are low FODMAP. Use in soups, stews, and braises. Always remove before serving.'
  },
  {
    id: 'cardamom', name: 'Cardamom (ground or pods)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Cardamom is low FODMAP. Adds warmth to chai, baked goods, and rice dishes. Both green and black cardamom are safe.'
  },
  {
    id: 'nutmeg', name: 'Nutmeg (ground)', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Nutmeg is low FODMAP in typical cooking amounts (a pinch to ¼ tsp). Great in béchamel, mashed potato, and pumpkin dishes.'
  },
  {
    id: 'star-anise', name: 'Star Anise', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: '1 pod per serving', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Star anise is low FODMAP in typical cooking amounts. Used in pho, Chinese five-spice, and spiced drinks. Remove pods before serving.'
  },
  {
    id: 'mixed-spice', name: 'Mixed Spice / Allspice', emoji: '🌶️', category: 'herbs', rating: 'green',
    servings: [{ amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }],
    fodmaps: [],
    tip: 'Allspice (whole or ground) and mixed spice blends (cinnamon, nutmeg, cloves) are low FODMAP. Used in baked goods and Jamaican cooking.'
  },

  // ─── VEGETABLES (additional) ──────────────────────────────────────────────
  {
    id: 'shiitake', name: 'Shiitake Mushrooms', emoji: '🍄', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Shiitake mushrooms are very high in mannitol and high FODMAP at any reasonable serving. Dried shiitakes are even more concentrated. Swap for oyster mushrooms or king trumpet (king oyster) mushrooms, which are low FODMAP.'
  },
  {
    id: 'portobello', name: 'Portobello / Cremini Mushrooms', emoji: '🍄', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol'],
    tip: 'Portobello, cremini, and white button mushrooms are all high in mannitol. Oyster mushrooms are the safe swap — they are low FODMAP and work great as a portobello substitute in most recipes.'
  },
  {
    id: 'napa-cabbage', name: 'Chinese Cabbage / Napa Cabbage', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Napa (Chinese) cabbage is low FODMAP. Great in stir-fries, slaws, and as a dumpling wrapper substitute. Savoy cabbage is also low FODMAP at 1 cup.'
  },
  {
    id: 'red-cabbage', name: 'Red Cabbage', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup shredded (70g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Red cabbage is low FODMAP at 1 cup. Great raw in slaws or braised. Slightly more antioxidants than green cabbage.'
  },
  {
    id: 'okra', name: 'Okra', emoji: '🥬', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '8 pods / ½ cup (75g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Okra is low FODMAP at 8 pods (75g). It\'s a natural thickener — great in stews and curries. The mucilaginous texture is reduced by cooking at high heat.'
  },
  {
    id: 'spaghetti-squash', name: 'Spaghetti Squash', emoji: '🎃', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup cooked (155g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Spaghetti squash is low FODMAP. Roast whole or halved at 200°C for 40–50 min. Scrape out the strands and use as a pasta substitute — top with a low-FODMAP tomato sauce.'
  },
  {
    id: 'jerusalem-artichoke', name: 'Jerusalem Artichoke', emoji: '🌰', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'Very High FODMAP' }
    ],
    fodmaps: ['fructans', 'gos'],
    tip: 'Jerusalem artichokes are one of the highest-FODMAP foods — they are exceptionally rich in inulin (fructans). Even a small amount can cause severe symptoms. Also called sunchokes. Avoid entirely.'
  },
  {
    id: 'radicchio', name: 'Radicchio', emoji: '🥗', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (40g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Radicchio is low FODMAP. Adds a bitter, peppery note to salads and is great grilled or roasted to mellow the bitterness. Part of the chicory family but tested as low FODMAP at this serving.'
  },
  {
    id: 'endive', name: 'Belgian Endive / Witlof', emoji: '🥗', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Belgian endive (witlof) is high in fructans and not low FODMAP. Note: radicchio is a different plant and is low FODMAP. Do not confuse the two.'
  },
  {
    id: 'bean-sprouts', name: 'Bean Sprouts (mung bean)', emoji: '🌱', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '1 cup (104g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Mung bean sprouts are low FODMAP. A great addition to stir-fries, noodle dishes, and spring rolls. Rinse well before using.'
  },
  {
    id: 'yellow-pepper', name: 'Bell Pepper (yellow / orange)', emoji: '🫑', category: 'vegetables', rating: 'green',
    servings: [
      { amount: '½ medium (52g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Yellow and orange bell peppers are low FODMAP. They are slightly sweeter than red peppers. All bell pepper colours are safe at ½ pepper per serving.'
  },
  {
    id: 'celeriac', name: 'Celeriac / Celery Root', emoji: '🌰', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['mannitol', 'fructans'],
    tip: 'Celeriac (celery root) is high in both mannitol and fructans. Even a small serving can trigger symptoms. Do not confuse with celery stalks — celery is moderate (watch portion) but celeriac is entirely different and high FODMAP.'
  },
  {
    id: 'artichoke-canned', name: 'Artichoke Hearts (canned)', emoji: '🌿', category: 'vegetables', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'mannitol'],
    tip: 'Canned artichoke hearts are very high in fructans and mannitol. Even a small amount can trigger significant symptoms. Fresh globe artichoke is similarly high FODMAP. Avoid both.'
  },

  // ─── PROTEIN (additional) ──────────────────────────────────────────────────
  {
    id: 'scallops', name: 'Scallops', emoji: '🐚', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any plain serving (2–4 oz)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain scallops are low FODMAP. Pan-sear in garlic-infused oil with lemon juice and fresh herbs. Avoid pre-marinated or restaurant scallops that may contain garlic or onion-based sauces.'
  },
  {
    id: 'mussels', name: 'Mussels', emoji: '🦪', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any plain serving', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain mussels are low FODMAP. Steam in white wine and fresh herbs (no garlic or shallots). A great high-protein, high-iron meal option.'
  },
  {
    id: 'sardines-canned', name: 'Sardines (canned)', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: '1 tin / 3.75 oz', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Canned sardines are low FODMAP. Choose varieties packed in olive oil, water, or tomato sauce (check the sauce contains no garlic/onion). Rich in omega-3s, calcium, and vitamin D.'
  },
  {
    id: 'anchovies-canned', name: 'Anchovies (canned / jarred)', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: '2–3 fillets', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Canned anchovies are low FODMAP. They dissolve into sauces and add deep umami without tasting "fishy." Great in Caesar dressing, pasta, and stew bases. A little goes a long way.'
  },
  {
    id: 'duck', name: 'Duck', emoji: '🦆', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any plain serving', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain duck is low FODMAP. Duck breast or leg with the skin on is very flavorful. Avoid pre-marinated duck or hoisin-glazed duck, which typically contain garlic and onion.'
  },
  {
    id: 'oysters', name: 'Oysters', emoji: '🦪', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any plain serving', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Oysters (fresh or canned) are low FODMAP. Avoid those with garlic or onion-based mignonette. Excellent source of zinc and B12.'
  },
  {
    id: 'cottage-cheese', name: 'Cottage Cheese', emoji: '🧀', category: 'protein', rating: 'yellow',
    servings: [
      { amount: '4 tbsp / ¼ cup (72g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '½ cup (113g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Cottage cheese is moderate in lactose. A ¼ cup serving is low FODMAP for most people. Choose full-fat over fat-free — lower-fat versions tend to have more lactose. Plain is better than flavored (which may add fruit or honey).'
  },
  {
    id: 'smoked-salmon', name: 'Smoked Salmon', emoji: '🐟', category: 'protein', rating: 'green',
    servings: [
      { amount: 'Any serving (2–4 oz)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Smoked salmon is low FODMAP. Check the label — some flavored or glazed versions add honey or onion. Plain cold-smoked salmon is always safe. Great on rice cakes with lactose-free cream cheese.'
  },

  // ─── DAIRY (additional) ────────────────────────────────────────────────────
  {
    id: 'ghee', name: 'Ghee (clarified butter)', emoji: '🧈', category: 'dairy', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Ghee is clarified butter with virtually all lactose and milk proteins removed. It is safe for most lactose-intolerant people and anyone with a dairy sensitivity. Use it anywhere you\'d use butter — higher smoke point too.'
  },
  {
    id: 'heavy-cream', name: 'Heavy Cream / Whipping Cream', emoji: '🥛', category: 'dairy', rating: 'green',
    servings: [
      { amount: '2 tbsp (30ml)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Heavy cream is very low in lactose (about 0.5g per 100ml) because the fat separates from the lactose. 2 tbsp per person is low FODMAP. Use for richness in soups, sauces, and desserts. Avoid large amounts as a precaution.'
  },
  {
    id: 'blue-cheese', name: 'Blue Cheese (aged)', emoji: '🧀', category: 'dairy', rating: 'green',
    servings: [
      { amount: '1 oz (28g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Aged blue cheeses (Gorgonzola, Roquefort, Stilton) are very low in lactose due to the aging process. Generally safe in typical serving sizes. Stick to 1 oz per serving as a general guide.'
  },
  {
    id: 'swiss-cheese', name: 'Swiss / Gruyere / Havarti Cheese', emoji: '🧀', category: 'dairy', rating: 'green',
    servings: [
      { amount: '1–1.5 oz (28–42g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Aged Swiss-style cheeses (Emmental, Gruyere, Havarti) are low in lactose. The longer the aging, the lower the lactose. Great in sandwiches, gratins, and as a snack with GF crackers.'
  },
  {
    id: 'bocconcini', name: 'Bocconcini / Fresh Mini Mozzarella', emoji: '🧀', category: 'dairy', rating: 'yellow',
    servings: [
      { amount: '40g (about 3–4 balls)', rating: 'green', label: 'Low FODMAP' },
      { amount: '> 40g', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['lactose'],
    tip: 'Fresh mozzarella (bocconcini, burrata, fresh balls) is higher in lactose than aged mozzarella. 40g is the safe serving. For pizza, use part-skim low-moisture mozzarella — it\'s much lower in lactose than fresh.'
  },
  {
    id: 'lactose-free-cream', name: 'Lactose-Free Cream', emoji: '🥛', category: 'dairy', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Lactose-free cream is low FODMAP and can be used in any recipe that calls for cream without restriction. A great option when you need more than 2 tbsp of cream in a dish.'
  },

  // ─── CONDIMENTS (additional) ──────────────────────────────────────────────
  {
    id: 'tamari', name: 'Tamari (GF Soy Sauce)', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (42g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Tamari is a Japanese soy sauce made with little or no wheat — look for certified GF tamari. It is low FODMAP and a great alternative to regular soy sauce (which is borderline) or coconut aminos. Rich, less salty, slightly thicker.'
  },
  {
    id: 'sesame-oil', name: 'Sesame Oil (toasted)', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Sesame oil is low FODMAP. Toasted sesame oil is used as a finishing oil (not for high-heat cooking) and adds a nutty depth to stir-fries, dressings, and marinades.'
  },
  {
    id: 'rice-vinegar', name: 'Rice Vinegar', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Rice vinegar (unseasoned) is low FODMAP. A mild, slightly sweet vinegar used in Asian cooking, sushi rice, and dressings. Seasoned rice vinegar may contain added sugar — still low FODMAP, but check for garlic/onion additives.'
  },
  {
    id: 'red-wine-vinegar', name: 'Red Wine Vinegar', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Red wine vinegar is low FODMAP. The fermentation process removes FODMAPs from the wine. Use in dressings, marinades, and braises.'
  },
  {
    id: 'capers', name: 'Capers', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 tbsp (9g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Capers are low FODMAP per Monash testing. They add a briny, salty depth to chicken piccata, salmon, pasta, and salads. Rinse before using to reduce excess salt. A great umami booster.'
  },
  {
    id: 'olives', name: 'Olives (plain)', emoji: '🫒', category: 'condiments', rating: 'green',
    servings: [
      { amount: '15 olives (45g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain olives (green or black, pitted or not) are low FODMAP. Avoid stuffed olives that contain garlic. Check olive antipasto jars — many are marinated with garlic and onion and would be high FODMAP.'
  },
  {
    id: 'pickles', name: 'Pickles / Gherkins (plain)', emoji: '🥒', category: 'condiments', rating: 'green',
    servings: [
      { amount: '1 medium pickle (35g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Plain dill pickles and gherkins are low FODMAP. Avoid garlic dill pickles. Check ingredients — a plain brine of water, vinegar, salt, and dill is safe. Pickled jalapeños are also low FODMAP.'
  },
  {
    id: 'sauerkraut', name: 'Sauerkraut', emoji: '🥬', category: 'condiments', rating: 'green',
    servings: [
      { amount: '2 tbsp (30g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '½ cup (75g)', rating: 'yellow', label: 'Moderate — excess fructans possible' },
    ],
    fodmaps: ['Fructans (small amounts)'],
    tip: 'Sauerkraut is fermented cabbage — the fermentation process breaks down most of the fructans, making small servings low FODMAP. Stick to 2 tbsp per serving. Look for plain sauerkraut (just cabbage and salt). Avoid versions with added garlic or onion. Great as a condiment on sausages, wraps, or grain bowls.'
  },
  {
    id: 'agave', name: 'Agave Syrup', emoji: '🍯', category: 'condiments', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP — Avoid' }
    ],
    fodmaps: ['fructose'],
    tip: 'Agave syrup is very high in fructose (up to 90% fructose) and is one of the highest-FODMAP sweeteners. Avoid completely. Maple syrup or rice malt syrup are the safe swaps.'
  },
  {
    id: 'stevia', name: 'Stevia', emoji: '🌿', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Stevia (pure leaf extract or refined stevia like Truvia) is low FODMAP and does not affect gut bacteria at typical amounts. A good option for sweetening without adding sugar or FODMAP sweeteners.'
  },
  {
    id: 'coconut-sugar', name: 'Coconut Sugar', emoji: '🥥', category: 'condiments', rating: 'yellow',
    servings: [
      { amount: '1 tsp (4g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '1 tbsp (12g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Coconut sugar contains fructose and becomes moderate FODMAP above 1 tsp. Use sparingly or swap for white sugar (which is balanced fructose/glucose and low FODMAP) or maple syrup.'
  },
  {
    id: 'bbq-sauce', name: 'BBQ Sauce (commercial)', emoji: '🫙', category: 'condiments', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Most commercial BBQ sauces contain onion powder, garlic powder, and/or high-fructose corn syrup — all high FODMAP. Make your own: tomato paste + maple syrup + apple cider vinegar + smoked paprika + mustard + a dash of tamari.'
  },
  {
    id: 'hoisin-sauce', name: 'Hoisin Sauce', emoji: '🫙', category: 'condiments', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Hoisin sauce contains garlic, wheat, and often dried plum or other high-FODMAP fruit. Avoid in stir-fries and as a dipping sauce. Swap with: tamari + maple syrup + sesame oil + a dash of rice vinegar + ginger.'
  },
  {
    id: 'lemon-juice', name: 'Lemon Juice (fresh)', emoji: '🍋', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any cooking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Fresh lemon juice is low FODMAP. The citric acid and flavour do not carry significant FODMAPs at typical serving sizes. Use freely in dressings, marinades, and to finish dishes. Lime juice is similarly safe.'
  },
  {
    id: 'vanilla-extract', name: 'Vanilla Extract', emoji: '🫙', category: 'condiments', rating: 'green',
    servings: [
      { amount: 'Any baking amount', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Vanilla extract (pure or imitation) is low FODMAP at the amounts used in baking (1–2 tsp). Vanilla bean paste and vanilla powder are also safe. Always check that imitation vanilla doesn\'t contain added sweeteners.'
  },

  // ─── DRIED FRUITS (all high FODMAP — important to know) ──────────────────
  {
    id: 'raisins', name: 'Raisins / Sultanas', emoji: '🍇', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'fructans'],
    tip: 'Raisins and sultanas are highly concentrated in fructose and fructans due to the drying process. Even 1 tbsp can trigger symptoms. Common hiding spots: trail mix, granola, muesli, stuffing, oatmeal cookies, and salads. Always check labels.'
  },
  {
    id: 'dried-dates', name: 'Dates (dried)', emoji: '🌴', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose', 'fructans'],
    tip: 'Dried dates are very high in fructose and fructans. They are often used as a "natural sweetener" in energy balls, bliss bars, and smoothies — but they are high FODMAP. Use maple syrup or rice malt syrup as a sweetener instead.'
  },
  {
    id: 'dried-apricots', name: 'Dried Apricots', emoji: '🍑', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol', 'fructans'],
    tip: 'Dried apricots are very high in sorbitol — the same polyol found in fresh peaches, plums, and cherries. A single dried apricot exceeds the safe serving. Avoid in trail mix, cakes, and stuffings.'
  },
  {
    id: 'prunes', name: 'Prunes / Dried Plums', emoji: '🟣', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['sorbitol', 'fructans'],
    tip: 'Prunes are very high in sorbitol — which is why they are known as a natural laxative. Even 1–2 prunes can cause significant symptoms in FODMAP-sensitive people. Avoid entirely.'
  },
  {
    id: 'dried-figs', name: 'Dried Figs', emoji: '🟫', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructans', 'fructose'],
    tip: 'Dried figs are high in fructans and fructose. Often found in fig jams, fig bars, and cheese boards. Fresh figs are also high FODMAP. Avoid both.'
  },
  {
    id: 'dried-mango', name: 'Dried Mango', emoji: '🥭', category: 'fruits', rating: 'red',
    servings: [
      { amount: 'Any amount', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Dried mango is very high in fructose — fresh mango is already moderate/high FODMAP, and drying concentrates the sugars dramatically. Avoid in trail mix and snacks.'
  },
  {
    id: 'dried-cranberries', name: 'Dried Cranberries', emoji: '🍒', category: 'fruits', rating: 'yellow',
    servings: [
      { amount: '1 tbsp (15g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '> 2 tbsp (28g+)', rating: 'red', label: 'High FODMAP' }
    ],
    fodmaps: ['fructose'],
    tip: 'Dried cranberries are moderate FODMAP — 1 tbsp (15g) is low FODMAP, but more quickly becomes high. Most are also sweetened with sugar. Use sparingly in salads or oatmeal. Unsweetened are higher FODMAP than sweetened (the added sugar balances the fructose ratio).'
  },

  // ─── GRAINS (additional) ──────────────────────────────────────────────────
  {
    id: 'amaranth', name: 'Amaranth', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '¼ cup dry / 1 cup cooked', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Amaranth is a naturally gluten-free ancient grain that is low FODMAP. High in protein (9g per cooked cup) and contains all essential amino acids. Cook like porridge or use as a substitute for oats.'
  },
  {
    id: 'teff', name: 'Teff', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '¼ cup dry / 1 cup cooked', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Teff is a gluten-free grain native to Ethiopia and low FODMAP. High in iron and calcium. Cook as a porridge, use teff flour in GF baking, or make injera-style flatbreads.'
  },
  {
    id: 'wild-rice', name: 'Wild Rice', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '1 cup cooked', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Wild rice is technically the seed of an aquatic grass and is low FODMAP. Higher in protein than regular rice. Nutty flavour and chewy texture. Great mixed with white rice for variety.'
  },
  {
    id: 'almond-flour', name: 'Almond Flour / Almond Meal', emoji: '🌾', category: 'grains', rating: 'green',
    servings: [
      { amount: '¼ cup (24g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '½ cup (48g)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['gos'],
    tip: 'Almond flour is low FODMAP at ¼ cup (24g) per serving — the same FODMAP threshold as whole almonds (10 almonds = 12g). At larger quantities, GOS levels rise. Great in GF baking but watch total recipe servings.'
  },
  {
    id: 'coconut-flour', name: 'Coconut Flour', emoji: '🥥', category: 'grains', rating: 'yellow',
    servings: [
      { amount: '2 tbsp (16g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '¼ cup+', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Coconut flour absorbs a lot of liquid and is very filling. At 2 tbsp (16g) it is low FODMAP, but FODMAP load increases with larger amounts. Recipes typically use much less coconut flour than regular flour. Divide total flour per serves to check your portion.'
  },

  // ─── NUTS (additional) ────────────────────────────────────────────────────
  {
    id: 'chestnuts', name: 'Chestnuts', emoji: '🌰', category: 'nuts', rating: 'green',
    servings: [
      { amount: '10 chestnuts (68g)', rating: 'green', label: 'Low FODMAP' }
    ],
    fodmaps: [],
    tip: 'Chestnuts are unique — unlike other nuts, they are mostly starch (not fat) and low FODMAP. Roasted, pureed, or as chestnut flour, they are safe. A common seasonal ingredient in winter soups and stuffings.'
  },
  {
    id: 'coconut-desiccated', name: 'Desiccated / Shredded Coconut', emoji: '🥥', category: 'nuts', rating: 'yellow',
    servings: [
      { amount: '¼ cup (20g)', rating: 'green', label: 'Low FODMAP' },
      { amount: '> ½ cup (40g+)', rating: 'yellow', label: 'Moderate FODMAP' }
    ],
    fodmaps: ['fructans'],
    tip: 'Desiccated or shredded coconut is low FODMAP at ¼ cup. Larger servings push into moderate territory due to fructans. Great in granola, baked goods, and coatings for fish or chicken.'
  },
];

// ── SUBSTITUTIONS ────────────────────────────────────────────────────────────
const SUBSTITUTIONS = [
  {
    id: 'onion-garlic',
    label: '🧅 Garlic & Onion',
    items: [
      { avoid: 'Garlic cloves', use: 'Garlic-infused olive oil', note: 'Fructans are water-soluble, not oil-soluble — the flavour transfers without the FODMAPs. Use 1–2 tsp per clove replaced.' },
      { avoid: 'Onion (all types)', use: 'Green onion tops (green part only)', note: 'Only the dark green tops are low FODMAP. Discard the white bulb end completely — that\'s where the FODMAPs live.' },
      { avoid: 'Onion or garlic powder', use: 'Chives (fresh or freeze-dried)', note: 'Chives give a mild onion flavour with zero FODMAPs. Freeze-dried chives work great in spice rubs and sauces.' },
      { avoid: 'Shallots', use: 'Asafoetida (hing) powder — ⅛ tsp max', note: 'A tiny pinch of asafoetida replicates shallot/onion depth perfectly. It\'s very potent — start with just ⅛ tsp in the oil.' },
      { avoid: 'Leeks (white/light part)', use: 'Leek tops — dark green only — ½ cup cooked', note: 'The dark green part of a leek is low FODMAP. Slice off and discard the white and pale-green base.' },
    ]
  },
  {
    id: 'dairy',
    label: '🥛 Dairy',
    items: [
      { avoid: 'Regular cow\'s milk', use: 'Lactose-free milk or almond milk (unsweetened)', note: 'Both are direct 1:1 swaps. Avoid oat milk (high fructans) and cashew milk (high oligosaccharides).' },
      { avoid: 'Heavy cream', use: 'Lactose-free cream or coconut cream (2 tbsp)', note: 'Coconut cream is low FODMAP at 2 tbsp. Full canned coconut milk is low FODMAP at ½ cup per serving.' },
      { avoid: 'Sour cream (regular)', use: 'Lactose-free sour cream or coconut yogurt', note: 'Regular sour cream is moderate FODMAP. Lactose-free is a direct swap; coconut yogurt adds a subtle sweetness.' },
      { avoid: 'Cream cheese (regular)', use: 'Lactose-free cream cheese — 2 tbsp max', note: 'At more than 2 tbsp regular cream cheese tips into moderate FODMAP. The lactose-free version is safe at any normal serving.' },
      { avoid: 'Yogurt (regular, cow\'s milk)', use: 'Lactose-free yogurt or coconut yogurt', note: 'Regular yogurt scales from moderate to high FODMAP by volume. Lactose-free and coconut versions are safe.' },
      { avoid: 'Ice cream (regular)', use: 'Lactose-free ice cream or fruit sorbet', note: 'Regular ice cream is high lactose. Sorbet is generally safe — check for honey, apple puree, or high-FODMAP fruit.' },
      { avoid: 'Butter (large amounts)', use: 'Lactose-free butter or garlic-infused olive oil', note: 'Plain butter is low FODMAP at 1–2 tbsp (fat contains no FODMAPs). Use lactose-free if your gut is very sensitive.' },
    ]
  },
  {
    id: 'grains',
    label: '🌾 Grains & Flour',
    items: [
      { avoid: 'All-purpose wheat flour', use: 'GF flour blend, rice flour, or tapioca flour', note: 'A GF flour blend works 1:1 in most recipes. Rice flour is ideal for coatings and batters; tapioca adds chew.' },
      { avoid: 'Wheat bread (regular)', use: 'GF bread or long-fermented spelt sourdough (2 slices)', note: 'Traditional sourdough spelt is low FODMAP because fermentation breaks down fructans. Regular spelt bread is NOT safe.' },
      { avoid: 'Wheat pasta', use: 'Rice pasta, corn pasta, or quinoa pasta', note: 'All three are excellent 1:1 swaps. Cook al dente — GF pasta gets mushy if overcooked.' },
      { avoid: 'Wheat breadcrumbs / panko', use: 'GF breadcrumbs or crushed rice crackers', note: 'Crushed rice crackers or GF panko crisp up just as well for coatings, meatballs, and casserole tops.' },
      { avoid: 'Regular flour tortillas', use: 'Cassava tortillas, rice paper, or lettuce cups', note: 'Siete cassava tortillas behave almost identically to a regular tortilla and are widely available.' },
      { avoid: 'Couscous', use: 'White rice, quinoa, or millet', note: 'Couscous is wheat semolina — high FODMAP. All three alternatives are naturally gluten-free and low FODMAP.' },
      { avoid: 'Wheat-based crackers', use: 'Rice cakes, corn thins, or GF oat crackers', note: 'Plain rice cakes and corn thins are low FODMAP. Oat crackers are low FODMAP at 2 crackers (watch serving size).' },
    ]
  },
  {
    id: 'sweeteners',
    label: '🍯 Sweeteners',
    items: [
      { avoid: 'Honey', use: 'Pure maple syrup or rice malt syrup', note: 'Honey is high in excess fructose. Maple syrup is low FODMAP at up to 2 tbsp. Rice malt syrup is completely fructose-free.' },
      { avoid: 'Agave nectar', use: 'Pure maple syrup', note: 'Agave is very high in fructose — one of the worst FODMAP sweeteners. Maple syrup is a 1:1 swap in baking and sauces.' },
      { avoid: 'Coconut sugar', use: 'Regular cane sugar (white or brown)', note: 'Coconut sugar contains inulin and is moderate FODMAP. Plain cane sugar is balanced glucose-to-fructose and is safe.' },
      { avoid: 'High-fructose corn syrup', use: 'Cane sugar or maple syrup', note: 'HFCS is high in free fructose. Regular table sugar (sucrose) has balanced fructose and is low FODMAP at normal amounts.' },
      { avoid: 'Sugar-free sweeteners (sorbitol, mannitol, xylitol)', use: 'Stevia or aspartame-based products', note: 'Polyol sweeteners (ending in -ol) are a FODMAP category themselves. Stevia and aspartame are safe low-FODMAP alternatives.' },
    ]
  },
  {
    id: 'legumes',
    label: '🫘 Legumes & Protein',
    items: [
      { avoid: 'Canned chickpeas (large serving)', use: 'Canned chickpeas — drained + rinsed — ¼ cup max', note: 'Rinsing removes up to 40% of FODMAPs. Safe at ¼ cup. At ½ cup+ they tip into high-FODMAP territory.' },
      { avoid: 'Canned lentils (large serving)', use: 'Canned lentils — drained + rinsed — ¼ cup max', note: 'Same rule as chickpeas — canned, drained, rinsed, and portioned make lentils manageable.' },
      { avoid: 'Black beans / kidney beans (large serving)', use: 'Firm tofu or tempeh', note: 'Most canned beans remain high FODMAP even after rinsing at typical serving sizes. Firm tofu and tempeh are low FODMAP and high protein.' },
      { avoid: 'Hummus (store-bought)', use: 'Eggplant dip (baba ghanoush) or homemade pumpkin dip', note: 'Commercial hummus combines high-FODMAP chickpeas with garlic. Baba ghanoush (without garlic) and pumpkin dip are safe.' },
      { avoid: 'Edamame (large serving)', use: 'Edamame — ½ cup (shelled) only', note: 'Edamame is low FODMAP at ½ cup shelled. Beyond that it tips into moderate-high due to oligosaccharides.' },
    ]
  },
  {
    id: 'condiments',
    label: '🧂 Condiments & Sauces',
    items: [
      { avoid: 'Regular soy sauce (wheat-based)', use: 'Tamari (GF soy sauce) or coconut aminos', note: 'Tamari is brewed without wheat and is low FODMAP. Coconut aminos are slightly sweeter but equally safe.' },
      { avoid: 'Worcestershire sauce (most brands)', use: 'GF Worcestershire or tamari + apple cider vinegar', note: 'Most Worcestershire sauces contain garlic extract. Mix 1 tsp tamari + ½ tsp ACV as an easy substitute.' },
      { avoid: 'Store-bought pasta sauce', use: 'Homemade tomato sauce or Rao\'s Sensitive Formula', note: 'Nearly every jarred sauce leads with garlic and onion. Make your own with canned tomatoes + garlic-infused oil + herbs.' },
      { avoid: 'Commercial BBQ sauce', use: 'Homemade maple-tomato BBQ sauce', note: 'Commercial BBQ sauce has garlic, onion, and HFCS. Maple syrup + tomato paste + smoked paprika + ACV is a quick low-FODMAP version.' },
      { avoid: 'Commercial stock / broth', use: 'Homemade stock or certified low-FODMAP broth', note: 'Store-bought stocks almost always contain onion and garlic. Make your own or look for FODY brand certified low-FODMAP stock.' },
      { avoid: 'Ketchup (large amounts)', use: 'Ketchup — 1 tbsp max — or homemade', note: 'Standard ketchup is low FODMAP at 1 tbsp due to small amounts per serving. Beyond that, the high-fructose corn syrup adds up.' },
    ]
  },
  {
    id: 'fruit',
    label: '🍎 High-FODMAP Fruits',
    items: [
      { avoid: 'Apple (raw)', use: 'Strawberries, grapes, or mandarin orange', note: 'Apples are high in both fructose and sorbitol. Strawberries, grapes, kiwi, and mandarins are great low-FODMAP swaps.' },
      { avoid: 'Pear', use: 'Unripe banana or kiwi', note: 'Pears are very high in sorbitol. Unripe bananas are low FODMAP. Ripe bananas are moderate — limit to 1 medium.' },
      { avoid: 'Mango (large serving)', use: '2 small slices (40g) as a garnish only', note: 'Mango is low FODMAP at 40g but becomes high quickly. Use sparingly — a couple of slices on top of yogurt or a smoothie.' },
      { avoid: 'Watermelon', use: 'Honeydew (½ cup) or cantaloupe (¼ cup)', note: 'Watermelon is very high in free fructose. Honeydew at ½ cup and cantaloupe at ¼ cup are the safer melon options.' },
      { avoid: 'Dried fruit (raisins, apricots, dates, figs)', use: 'Fresh low-FODMAP fruit or 1–2 cranberries as garnish', note: 'Drying concentrates FODMAPs dramatically. A literal sprinkle (3–4 pieces) is a garnish amount only.' },
      { avoid: 'Fruit juice (all types)', use: 'Water with lemon/lime or herbal tea', note: 'Even low-FODMAP juice concentrates FODMAPs when you remove the fiber. Water with citrus slices is naturally safe.' },
    ]
  },

  // ── RECIPE INGREDIENT SUBS ────────────────────────────────────────────────
  {
    id: 'syrup-sweetener',
    label: '🍯 Maple Syrup & Sweeteners',
    items: [
      { avoid: 'Maple syrup (out of stock)', use: 'Rice malt syrup — 1:1 swap', note: 'Rice malt syrup is completely fructose-free and behaves identically to maple syrup in sauces, dressings, and baking. Slightly less sweet, so taste and adjust.' },
      { avoid: 'Maple syrup (in baking)', use: 'Brown sugar dissolved in hot water — ¾ cup sugar + ¼ cup water per 1 cup syrup', note: 'Works well in muffins, cakes, and oat bars. Add ¼ tsp vanilla to compensate for the flavour difference.' },
      { avoid: 'Maple syrup (in sauces/marinades)', use: 'Cane sugar or brown sugar — use ¾ the amount', note: 'Sugar dissolves directly into a warm sauce. Reduce liquid slightly to compensate for lost volume.' },
      { avoid: 'Maple syrup (for drizzling)', use: 'Rice malt syrup or a tiny drizzle of golden syrup', note: 'Golden syrup is low FODMAP at small amounts (1–2 tsp). It has a richer, more toffee-like flavour that works beautifully on pancakes.' },
    ]
  },

  {
    id: 'corn-tortillas',
    label: '🌮 Corn Tortillas',
    items: [
      { avoid: 'Corn tortillas (out of stock)', use: 'Cassava flour tortillas (Siete brand)', note: 'The closest texture match — pliable, sturdy, and behaves like a regular tortilla. Widely available at Walmart, Target, Whole Foods.' },
      { avoid: 'Corn tortillas (for tacos)', use: 'Butter lettuce or iceberg leaves', note: 'Large iceberg leaves are stiff and cup-shaped — perfect taco shells. Butter lettuce is softer for wrapping. Zero carbs, zero FODMAPs.' },
      { avoid: 'Corn tortillas (for wraps/burritos)', use: 'Collard green leaves (blanched 30 sec) or rice paper wrappers', note: 'Collard greens are large enough for a full burrito wrap. Soak rice paper in warm water 15 sec until pliable — works for any filling.' },
      { avoid: 'Corn tortillas (for breakfast wraps)', use: 'GF flour tortillas (rice-based) or buckwheat crepes', note: 'GF flour tortillas (Canyon Bakehouse, BFree) handle eggs and bacon well. Buckwheat crepes can be made ahead and reheated.' },
      { avoid: 'Corn tortillas (for quesadillas)', use: 'Rice paper quesadillas or GF flour tortillas', note: 'GF flour tortillas crisp up better in a pan for quesadillas. Rice paper can also be folded and pan-fried until crispy.' },
    ]
  },

  {
    id: 'gf-bread',
    label: '🍞 GF Bread',
    items: [
      { avoid: 'GF bread (out of stock)', use: 'Rice cakes or corn thins', note: 'Plain rice cakes are a pantry staple that work for any toast topping. Less satisfying than bread for sandwiches but great as an open-face option.' },
      { avoid: 'GF bread (for sandwiches/toast)', use: 'Long-fermented spelt sourdough — 2 slices max per person', note: 'Traditional sourdough has reduced fructans due to fermentation. Only works if strictly long-fermented (not regular spelt bread). Limit is firm at 2 slices.' },
      { avoid: 'GF bread (for toast toppings)', use: 'GF corn thins or rice crackers', note: 'Corn thins have a neutral flavour and crisp texture. Stack two for sturdiness. Great with avocado, tuna, or nut butter.' },
      { avoid: 'GF bread (for French toast)', use: 'GF brioche-style bread or thick GF sandwich bread', note: 'Thicker bread absorbs the egg mixture better. If your usual brand is thin, use day-old (slightly stale) bread — it holds up much better.' },
      { avoid: 'GF breadcrumbs (for coating/topping)', use: 'Crushed rice crackers, crushed corn chips, or GF oats (blended)', note: 'Crushed rice crackers give a great crunch on baked chicken or fish. Corn chips add a Mexican flavour. Rolled oats blended briefly make a fine breadcrumb texture.' },
    ]
  },

  {
    id: 'citrus',
    label: '🍋 Lemon & Lime',
    items: [
      { avoid: 'Fresh lemon juice', use: 'Fresh lime juice — 1:1', note: 'Lime is the most direct swap for lemon. Slightly more floral, works in dressings, marinades, and most cooked dishes without any adjustment.' },
      { avoid: 'Fresh lemon juice (in dressings/sauces)', use: 'Apple cider vinegar — use half the amount', note: 'ACV is more acidic than lemon juice. Start with half and taste. It adds a nice tang to dressings and sauces with a slightly different flavour profile.' },
      { avoid: 'Fresh lemon juice (in baking)', use: 'White wine vinegar — use ¾ the amount', note: 'Milder than ACV, white wine vinegar works well in baked goods where you need acid to activate baking soda. Add a pinch more vanilla or extract to compensate.' },
      { avoid: 'Lemon zest', use: 'Lime zest — 1:1, or ¼ tsp lemon extract', note: 'Lime zest gives a citrus flavour that is slightly more floral. Lemon extract gives pure lemon flavour — use just ¼ tsp as it is very concentrated.' },
      { avoid: 'Fresh lime juice', use: 'Fresh lemon juice — 1:1', note: 'Lemon and lime are near-identical in acidity. Lemon is slightly milder and more floral; lime is slightly more bitter. Swap freely in any recipe.' },
      { avoid: 'Lemon or lime (none available)', use: '1 tsp apple cider vinegar + ¼ tsp orange juice', note: 'A pinch-hit combination that adds acidity and a faint citrus note. Best for cooked dishes, marinades, and dressings — not for desserts or zesting.' },
    ]
  },

  {
    id: 'eggs',
    label: '🥚 Eggs',
    items: [
      { avoid: 'Eggs (for scrambling/frying)', use: 'Firm silken tofu, crumbled and seasoned', note: 'Crumble firm silken tofu into a hot pan with a little turmeric (for colour), salt, and black pepper. Texturally very close to scrambled eggs. Add nutritional yeast for an egg-like flavour.' },
      { avoid: 'Eggs (as a binder in baking)', use: 'Flax egg — 1 tbsp ground flaxseed + 3 tbsp water, rested 5 min', note: 'One flax egg replaces one chicken egg as a binder. Works in muffins, pancakes, and oat bars. Does not whip or add rise like a real egg.' },
      { avoid: 'Eggs (as a binder in baking)', use: 'Chia egg — 1 tbsp chia seeds + 3 tbsp water, rested 10 min', note: 'Same swap as flax egg — becomes gel-like and binds well. Chia seeds have a slightly milder flavour than flax.' },
      { avoid: 'Eggs (for coating before breading)', use: 'Lactose-free milk + 1 tbsp GF flour, whisked', note: 'A thin flour-milk slurry helps breadcrumbs adhere just as well as an egg wash. Brush or dip the item, then coat in GF breadcrumbs immediately.' },
    ]
  },

  {
    id: 'fresh-herbs',
    label: '🌿 Fresh Herbs',
    items: [
      { avoid: 'Fresh basil', use: 'Dried basil — use ⅓ the amount', note: 'Dried herbs are more concentrated — 1 tsp dried = 1 tbsp fresh. For basil specifically, add dried at the start of cooking, not at the end (unlike fresh).' },
      { avoid: 'Fresh parsley', use: 'Dried parsley — ⅓ the amount, or fresh chives', note: 'Dried parsley loses most of its flavour — chives are a better fresh substitute. If garnishing, a sprinkle of spring onion green tops works too.' },
      { avoid: 'Fresh rosemary', use: 'Dried rosemary — ⅓ the amount', note: 'Dried rosemary is one of the herbs that holds flavour well. Crush it lightly between your fingers before adding to release the oils.' },
      { avoid: 'Fresh thyme', use: 'Dried thyme — ⅓ the amount', note: 'Dried thyme is a great substitute and works in all the same applications — roasting, soups, chicken dishes.' },
      { avoid: 'Fresh cilantro / coriander', use: 'Flat-leaf parsley + a squeeze of lime juice', note: 'Parsley gives the fresh green colour and herby freshness; lime adds the brightness that cilantro brings. Not identical but works well as a garnish.' },
      { avoid: 'Fresh ginger', use: 'Ground ginger powder — ¼ tsp per 1 tsp fresh', note: 'Ground ginger is more intense and slightly different in flavour. Best for cooked dishes and baking; it won\'t work as a garnish. Reduce the amount — ¼ tsp ground per 1 tsp fresh grated.' },
      { avoid: 'Lemongrass', use: 'Lemon zest + a small strip of lime peel', note: 'Add lemon zest and lime peel to soups and curries at the same stage as lemongrass. Remove before serving like you would the stalk.' },
    ]
  },

  {
    id: 'proteins',
    label: '🥩 Protein Swaps',
    items: [
      { avoid: 'Chicken breast', use: 'Chicken thighs (boneless, skinless)', note: 'Thighs are more forgiving — harder to overcook, more flavourful, and cheaper. Use the same weight and cooking time, or slightly longer at lower heat.' },
      { avoid: 'Chicken (any cut)', use: 'Firm tofu (pressed and cubed) or turkey breast', note: 'Pressed firm tofu absorbs marinades well — press for 15 minutes, marinate 30 min, then pan-fry or bake. Turkey breast cooks similarly to chicken.' },
      { avoid: 'Ground beef', use: 'Ground turkey or ground pork', note: 'Both are lower in fat than 80/20 beef. Turkey is the leanest — add 1 tsp olive oil to prevent dryness. Pork has similar fat content to beef and similar flavour in seasoned dishes.' },
      { avoid: 'Salmon fillet', use: 'Trout, barramundi, or white fish (cod, tilapia)', note: 'Trout is the closest to salmon in flavour and fat content. White fish is milder and leaner — reduce cook time by 2–3 minutes.' },
      { avoid: 'Shrimp / prawns', use: 'Scallops, firm white fish chunks, or chicken breast (diced small)', note: 'Scallops cook in the same time as shrimp. Chicken needs 5–6 minutes — dice small so it cooks evenly in a stir-fry or curry.' },
      { avoid: 'Pork chops', use: 'Chicken thighs or pork tenderloin medallions', note: 'Chicken thighs take the same 4 min per side. Tenderloin medallions are leaner and more tender — cook to 145°F (63°C) internal temp.' },
      { avoid: 'Bacon', use: 'Turkey bacon or prosciutto', note: 'Turkey bacon is lower in fat. Prosciutto doesn\'t crisp the same way but adds a salty, smoky flavour in wraps and salads. Check labels for added garlic/onion seasoning.' },
    ]
  },

  {
    id: 'pantry',
    label: '🫙 Pantry Staples',
    items: [
      { avoid: 'Coconut milk (canned)', use: 'Lactose-free cream diluted with water — ½ cream + ½ water', note: 'Gives a similar richness to coconut milk in curries and soups without the coconut flavour. Use the same volume as the recipe calls for.' },
      { avoid: 'Sesame oil', use: 'Toasted walnut oil or mild olive oil', note: 'Sesame oil is a finishing oil — its flavour is distinctive but walnut oil gives a similar nutty depth. Mild olive oil works in a pinch but will taste neutral rather than nutty.' },
      { avoid: 'Fish sauce', use: '1 tsp tamari + ½ tsp lime juice + pinch of salt', note: 'Tamari adds the salty umami; lime adds the slight sourness fish sauce carries. Stir together and use in the same quantity as fish sauce called for.' },
      { avoid: 'Dijon mustard', use: 'Yellow mustard (slightly less) or whole-grain mustard 1:1', note: 'Yellow mustard is milder and slightly sweeter. Whole-grain mustard has the same flavour profile as Dijon but a different texture — works well in dressings and glazes.' },
      { avoid: 'Capers (out of stock)', use: 'Finely chopped dill pickles (no garlic brine)', note: 'Capers ARE low FODMAP — keep them stocked. If you\'re out, dill pickles share the same briny, sour flavour. Use the same amount. Avoid pickle brines with garlic listed.' },
      { avoid: 'Cornstarch / cornflour', use: 'Tapioca flour or arrowroot powder — 1:1', note: 'Both thicken sauces and gravies identically to cornstarch. Tapioca gives a slightly glossy finish; arrowroot gives a clearer sauce. Neither affects flavour.' },
      { avoid: 'Baking powder', use: '¼ tsp baking soda + ½ tsp cream of tartar per 1 tsp baking powder', note: 'The cream of tartar provides the acid that activates the baking soda. Use immediately once mixed — it starts reacting right away.' },
      { avoid: 'Peanut butter', use: 'Sunflower seed butter (SunButter) or almond butter — 1:1', note: 'SunButter is nut-free and works in any peanut butter role — smoothies, sauces, energy balls. Almond butter has a milder flavour. Both are low FODMAP at 2 tbsp.' },
      { avoid: 'Chia seeds', use: 'Ground flaxseed or hemp seeds — 1:1', note: 'Ground flax gels similarly to chia in overnight oats and puddings. Hemp seeds don\'t gel but add similar protein and omega-3s. Great as a topping swap.' },
      { avoid: 'Olive oil (cooking)', use: 'Avocado oil, refined coconut oil, or butter', note: 'Avocado oil has a higher smoke point than olive oil — better for high-heat searing. Refined coconut oil is neutral-flavoured. Butter works for medium-heat cooking and adds richness.' },
      { avoid: 'Butter (in a recipe)', use: 'Garlic-infused olive oil or refined coconut oil — same amount', note: 'Garlic-infused olive oil is the best swap in savoury dishes — it adds flavour too. Coconut oil works in baking (refined, so no coconut taste). Both are dairy-free.' },
      { avoid: 'Balsamic vinegar', use: 'Red wine vinegar + ½ tsp maple syrup per tablespoon', note: 'Red wine vinegar gives the acidity; maple syrup replaces the sweetness. Stir together. Works in dressings, glazes, and reductions.' },
      { avoid: 'Apple cider vinegar', use: 'White wine vinegar or rice wine vinegar — 1:1', note: 'White wine vinegar is milder and works in almost any recipe calling for ACV. Rice wine vinegar is slightly sweeter — ideal in Asian dressings and stir-fry sauces.' },
      { avoid: 'Miso paste', use: '1 tsp tamari + ½ tsp tahini (or just tamari)', note: 'Miso paste is low FODMAP at 1 tbsp per serve — a great pantry item. If you\'re out, tamari + tahini mimics the salty, slightly nutty depth it adds to soups and dressings.' },
      { avoid: 'Tomato paste', use: 'Crushed canned tomatoes reduced by half, or sun-dried tomato (1–2 pieces blended)', note: 'Simmer crushed tomatoes in a small pan until thick and deep in colour — about 10 minutes. This gives the same concentrated flavour. Sun-dried tomato is low FODMAP at 2 small pieces.' },
      { avoid: 'White wine (in cooking)', use: 'Low-FODMAP stock + 1 tsp white wine vinegar per ¼ cup wine', note: 'White wine in recipes adds acidity and deglazes the pan. Stock covers the liquid volume; a splash of white wine vinegar replaces the acidity. Not identical but works well.' },
      { avoid: 'Red wine (in cooking)', use: 'Low-FODMAP beef stock + 1 tsp red wine vinegar or balsamic per ¼ cup wine', note: 'Same logic as white wine — stock for body, a splash of red wine vinegar or a few drops of balsamic for the colour and depth.' },
      { avoid: 'Vanilla extract', use: 'Vanilla bean paste 1:1, or vanilla powder (¼ the amount)', note: 'Vanilla bean paste gives even more flavour and shows the little flecks. Vanilla powder is very concentrated — use ¼ tsp powder for every 1 tsp extract. Avoid imitation vanilla with additives.' },
      { avoid: 'Sriracha / hot sauce (garlic-based brands)', use: 'Plain chili flakes + lime juice + pinch of salt, or Tabasco', note: 'Most sriracha contains garlic. Tabasco is garlic-free and low FODMAP. Or make a quick version: ¼ tsp chili flakes + squeeze of lime + salt. Adjust heat to taste.' },
      { avoid: 'Nutritional yeast', use: 'Finely grated parmesan (small amount) or extra salt + a squeeze of lemon', note: 'Nutritional yeast adds a cheesy, savoury umami flavour — parmesan (low lactose) is the closest real-food substitute. A tiny bit of salt + lemon brightens without the cheesy note.' },
      { avoid: 'Anchovy paste / anchovies', use: 'Capers (mashed, ½ the amount) or extra tamari', note: 'Anchovies add a deep, salty umami in small quantities — they don\'t taste fishy in cooked dishes. Mashed capers give a similar salty depth. Extra tamari works as a background flavour booster.' },
      { avoid: 'Mayonnaise (with garlic or onion)', use: 'Plain mayo (Hellmann\'s, Kewpie) or Greek-style lactose-free yogurt', note: 'Most plain mayonnaise is low FODMAP — just avoid flavoured varieties that list garlic or onion. For a lighter option, lactose-free plain yogurt thinned with lemon juice works in dressings and slaws.' },
      { avoid: 'Tahini', use: 'Smooth peanut butter thinned with a little sesame oil', note: 'Tahini (sesame seed paste) is low FODMAP at 2 tbsp. If you\'re out, 1.5 tbsp smooth peanut butter + ½ tsp sesame oil gives a similar nutty, slightly bitter depth in dressings and sauces.' },
      { avoid: 'Panko breadcrumbs', use: 'Crushed rice crackers or crushed corn flakes (GF)', note: 'Pulse plain rice crackers in a zip bag or processor until coarse crumbs. GF corn flakes work great as a crunchy coating or casserole topping. Both crisp up beautifully in the oven.' },
    ]
  },
  {
    id: 'cant-find',
    label: '🔁 If You Can\'t Find It',
    items: [
      { avoid: 'Bok choy', use: 'Common/green cabbage (¾ cup), choy sum or gai lan, kale, or silverbeet (Swiss chard)', note: 'Bok choy is already low FODMAP (safe to ~1 cup/75g) — this is just for when you can\'t find it or want variety. All of these stir-fry the same way; cabbage and silverbeet give the same crunchy stalk. Note: "pak choi" is just another name for bok choy, not a substitute.' },
      { avoid: 'Choy sum / gai lan (Chinese broccoli)', use: 'Bok choy, broccolini, or regular broccoli florets (¾ cup)', note: 'All are low FODMAP and behave the same in stir-fries and steaming. Broccolini is the closest in look and bite; broccoli florets (no big stalks) work too.' },
      { avoid: 'Silverbeet / Swiss chard', use: 'Kale, baby spinach, or collard greens', note: 'All low FODMAP. Kale holds up best to heat; baby spinach wilts fast so add it at the end. Use the leaves the same way the recipe uses chard.' },
      { avoid: 'Barramundi or a specific white fish', use: 'Any firm white fish — cod, haddock, snapper, basa, or tilapia', note: 'All plain fish is naturally FODMAP-free, so any white fish swaps 1:1. Match the thickness for cook time; thinner fillets need a couple of minutes less.' },
      { avoid: 'Halloumi', use: 'Firm feta (low-lactose) or extra-firm tofu for grilling', note: 'Hard/aged cheeses are low in lactose. For the same grill-and-hold texture, press extra-firm tofu and pan-sear it. Both take on marinades well.' },
      { avoid: 'Rice noodles', use: 'Rice vermicelli, flat rice noodles, GF spaghetti, or zucchini noodles', note: 'Any rice-based noodle is a direct swap. GF spaghetti works for saucy dishes; spiralised zucchini is a lighter, lower-carb option for stir-fries (add at the end).' },
      { avoid: 'Tamari', use: 'Coconut aminos, or regular soy sauce only if gluten isn\'t an issue', note: 'Coconut aminos are a 1:1 swap and slightly sweeter (use a touch less). Tamari is the GF version of soy sauce — if you don\'t need gluten-free, regular soy sauce works but check it\'s plain.' },
      { avoid: 'Coconut aminos', use: 'Tamari (GF soy sauce) — use a little less', note: 'Tamari is saltier than coconut aminos, so start with about ¾ of the amount and adjust. Both are low FODMAP.' },
      { avoid: 'Garlic-infused olive oil', use: 'Make your own, or use plain olive oil + a pinch of asafoetida', note: 'Gently warm 2–3 smashed garlic cloves in oil for a few minutes, then remove the cloves — the flavour is oil-soluble but the FODMAPs are not. A pinch of asafoetida (hing) in plain oil also mimics that garlicky depth.' },
      { avoid: 'Maple syrup', use: 'Rice malt syrup, or golden syrup / cane sugar in small amounts', note: 'Rice malt syrup is fructose-free and pours the same. Golden syrup or dissolved cane sugar work for sweetness — all low FODMAP at normal amounts.' },
      { avoid: 'Quinoa', use: 'White rice, millet, or buckwheat', note: 'All naturally gluten-free and low FODMAP. Cook to the grain\'s own ratio; they slot straight into bowls, salads, and sides where quinoa is used.' },
      { avoid: 'Fresh herbs (basil, thyme, rosemary, etc.)', use: 'Dried version — use about ⅓ the amount', note: 'Dried herbs are more concentrated, so 1 tbsp fresh ≈ 1 tsp dried. Add dried herbs earlier in cooking so they soften; save fresh for the end.' },
      { avoid: 'Polenta / cornmeal', use: 'Fine cornmeal/grits, or creamy mashed potato as the base', note: 'Any ground corn (cornmeal, grits) makes polenta. If you can\'t find it at all, a soft mashed potato gives the same creamy bed under stews and proteins — both low FODMAP.' },
      { avoid: 'Kewpie / a specific mayo', use: 'Any plain mayonnaise (Hellmann\'s, etc.)', note: 'Most plain mayo is low FODMAP — just avoid versions listing garlic or onion. For the Kewpie tang, stir in a few drops of rice wine vinegar.' },
      { avoid: 'Lactose-free milk', use: 'Unsweetened almond milk', note: 'A 1:1 swap in cooking, smoothies, and baking. Avoid oat milk (fructans) and large amounts of cashew milk. Macadamia and rice milk are also low FODMAP.' },
    ]
  },
];

// ── ON-THE-GO SNACKS (quick low-FODMAP grab-and-go ideas) ──────────────────
const SNACKS = [
  {
    id: 'packaged',
    label: '🛒 Packaged & Shelf-Stable',
    items: [
      { name: 'Plain rice cakes / corn thins', note: 'Naturally low FODMAP. Top with peanut butter or a slice of cheese for staying power.' },
      { name: 'Plain rice crackers', note: 'Check the label for onion/garlic powder. Rice- and corn-based are safest.' },
      { name: 'Plain popcorn', note: 'Low FODMAP up to about 7 cups popped. Lightly salted; skip toffee/“gourmet” flavours.' },
      { name: 'Plain potato or corn chips', note: 'Just potato/corn, oil and salt. Avoid onion, sour-cream, or “BBQ” seasoned varieties.' },
      { name: 'GF pretzels', note: 'A great crunchy fix. Watch portion if they contain added inulin/chicory root.' },
      { name: 'Nuts — peanuts, walnuts, pecans, macadamias, Brazil', note: 'Stick to a small handful (~10–15). 🚫 Avoid cashews and pistachios — both high FODMAP.' },
      { name: 'Pumpkin or sunflower seeds', note: 'Low FODMAP at ~2 tbsp; great protein and crunch for a trail-mix base.' },
      { name: 'Certified low-FODMAP snack bars', note: 'Look for the Monash or FODMAP Friendly logo (e.g. FODY, Casa de Sante). Most regular bars have honey/inulin.' },
      { name: 'Beef jerky / biltong', note: 'High protein and portable — but check the label: many have onion or garlic. Choose a plain one.' },
    ]
  },
  {
    id: 'fruit',
    label: '🍎 Fresh Fruit',
    items: [
      { name: 'Firm banana', note: 'Low FODMAP when firm/just-ripe (1 medium). Overripe bananas climb into moderate FODMAP.' },
      { name: 'Orange or mandarin', note: 'Citrus is reliably low FODMAP — easy to peel and pack.' },
      { name: 'Kiwifruit', note: 'Low FODMAP at 2 small. Also helps keep things regular.' },
      { name: 'Grapes', note: 'Low FODMAP at any normal handful — easy no-prep snack.' },
      { name: 'Strawberries', note: 'Low FODMAP at ~5–10. Pack in a small tub.' },
      { name: 'Blueberries', note: 'Low FODMAP at a small handful (~¼ cup). Great mixed with lactose-free yogurt.' },
      { name: 'Cantaloupe / rockmelon', note: 'Low FODMAP at ~¾ cup. (Watermelon and mango are high — skip those.)' },
    ]
  },
  {
    id: 'veg-protein',
    label: '🥕 Veg & Protein',
    items: [
      { name: 'Carrot or cucumber sticks', note: 'Both low FODMAP and very portable. Pair with 2 tbsp peanut butter.' },
      { name: 'Cherry tomatoes', note: 'Low FODMAP and snackable straight from the tub.' },
      { name: 'Bell pepper (capsicum) strips', note: 'Sweet and crunchy — low FODMAP at ~½ medium.' },
      { name: 'Hard-boiled eggs', note: 'Zero FODMAPs, all protein. Boil a batch to grab through the week.' },
      { name: 'Aged cheese — cheddar, swiss, parmesan', note: 'Hard cheeses are very low in lactose. Babybel and string cheese travel well.' },
      { name: 'Lactose-free yogurt', note: 'A safe creamy snack — add blueberries or a few walnuts.' },
      { name: 'Olives', note: 'Low FODMAP and shelf-stable in single-serve packs.' },
    ]
  },
  {
    id: 'sweet',
    label: '🍫 Sweet Fix',
    items: [
      { name: 'Dark chocolate', note: 'Low FODMAP at ~5 squares (30g). Milk chocolate is fine at ~4 squares.' },
      { name: 'Rice-malt-syrup or maple energy balls', note: 'Make with oats, peanut butter, seeds; sweeten with maple or rice malt syrup (not honey).' },
      { name: 'Lactose-free ice cream or sorbet', note: 'Sorbet is usually safe — check it isn’t apple/pear/mango based or sweetened with honey.' },
    ]
  },
  {
    id: 'avoid',
    label: '⚠️ Skip These On the Go',
    items: [
      { name: 'Trail mix with cashews, raisins or apple', note: 'Cashews, dried fruit and apple are all high FODMAP — a classic trigger combo.' },
      { name: 'Granola / “healthy” bars with honey, inulin or chicory root', note: 'These three are common high-FODMAP add-ins hiding in “gut-friendly” bars.' },
      { name: 'Dried fruit', note: 'Drying concentrates the FODMAPs — a few pieces can add up fast.' },
      { name: 'Hummus & garlic dips', note: 'Chickpeas (large serve) plus garlic. Grab a plain cheese or nut snack instead.' },
      { name: 'Apples, pears, watermelon, mango', note: 'High in excess fructose and/or polyols — keep to the fruit list above.' },
    ]
  },
];

// ── AIR FRYER METHODS (per recipe id) ──────────────────────────────────────
// Concise air-fryer instructions for recipes that suit one. Shown as an
// "Air Fryer Method" section in the recipe view when present.
const AIRFRYER = {
  // ── Kandy weekly plan ──
  'kandy-mon-breakfast': [
    'Lay the bacon flat in the basket and air fry at 380°F (195°C) for 8–10 min, flipping halfway, until crisp.',
    'Pour the beaten eggs into a small greased air-fryer-safe dish and cook at 300°F (150°C) for 8–10 min, stirring once or twice, until just set. Serve with the bacon.',
  ],
  'kandy-mon-dinner': [
    'Preheat to 400°F (200°C). Toss the cubed potato with 1½ tbsp oil, salt and pepper; air fry 10 min, shaking once.',
    'Add the green beans (tossed with ~1 tbsp oil, salt and pepper) on top and cook 5 min more.',
    'Add the salmon (rubbed with the remaining oil, salt and pepper, lemon slice on top) and cook everything 7–9 min, until the salmon reaches 145°F (63°C). Squeeze the warm lemon over to serve.',
  ],
  'kandy-thu-dinner': [
    'Rub the pork chops with oil, salt and pepper and air fry at 380°F (195°C) for 12–14 min, flipping halfway, until 145°F (63°C); rest 3 min.',
    'Toss the zucchini with oil, salt and pepper and air fry at 400°F (200°C) for 8–10 min, shaking once. Make the mash on the stovetop.',
  ],
  'kandy-fri-dinner': [
    'Toss the roasting veg with oil, salt and pepper and air fry at 400°F (200°C) for 12–15 min, shaking halfway.',
    'Add the shrimp (lightly oiled) for the last 6–8 min, until pink and opaque. Cook the quinoa separately and serve together.',
  ],
  'kandy-sat-breakfast': [
    'Air fry the bacon at 380°F (195°C) for 8–10 min until crisp. Scramble or air-fry the eggs, then wrap with the bacon in warm corn tortillas.',
  ],
  'kandy-sat-dinner': [
    'Rub the chicken thighs with oil, lemon, salt and pepper and air fry at 380°F (195°C) for 18–22 min, flipping once, until 175°F (80°C).',
    'Air fry the cubed sweet potato at 400°F (200°C) for 15–18 min, shaking twice.',
    'Add the broccoli florets (lightly oiled) for the last 6–8 min, until tender-crisp.',
  ],
  'kandy-sun-breakfast': [
    'Dip the bread in the egg mixture and air fry at 350°F (175°C) for 8–10 min, flipping halfway, until golden. Top with berries.',
  ],
  'kandy-sun-dinner': [
    'Air fry the potato wedges (tossed with oil, salt and pepper) at 400°F (200°C) for 18–20 min, shaking twice.',
    'Add the carrots (lightly oiled) for the last 12–15 min.',
    'Air fry the seasoned steak at 400°F (200°C) for 8–12 min depending on thickness/doneness, flipping halfway; rest 5 min before slicing.',
  ],

  // ── Recipe library ──
  'lemon-herb-chicken': [
    'Rub the chicken with oil, lemon, herbs, salt and pepper. Air fry at 380°F (195°C) for 18–22 min, flipping once, until 175°F (80°C).',
    'Toss the vegetables with oil and air fry at 400°F (200°C) for 12–15 min, shaking halfway — use a second batch if the basket is crowded.',
  ],
  'baked-salmon': [
    'Air fry the cubed potato (oiled, seasoned) at 400°F (200°C) for 10 min, shaking once.',
    'Add the green beans on top and cook 5 min more.',
    'Add the salmon (oiled and seasoned, lemon on top) and cook 7–9 min, until it reaches 145°F (63°C).',
  ],
  'fish-tacos': [
    'Coat the fish in the GF crumb, spray lightly with oil and air fry at 400°F (200°C) for 8–10 min, flipping halfway, until crisp and cooked through.',
    'Warm the corn tortillas in the air fryer for 1–2 min, then assemble.',
  ],
  'lamb-chops': [
    'Rub the chops with oil, rosemary, salt and pepper and air fry at 400°F (200°C) for 8–12 min, flipping halfway (≈130°F/54°C for medium-rare); rest 5 min.',
    'Air fry the oiled roasting veg at 400°F (200°C) for 12–15 min, shaking once.',
  ],
  'pork-meatballs': [
    'Roll the meatballs and air fry at 380°F (195°C) for 10–12 min, shaking once, until 160°F (71°C) inside. Cook the GF pasta and sauce on the stovetop and combine.',
  ],
  'baked-potato-bar': [
    'Prick the potatoes, rub with oil and salt, and air fry at 400°F (200°C) for 35–40 min, turning once, until tender. Split and add toppings.',
  ],
  'baked-banana': [
    'Slice the banana, dust with cinnamon and air fry at 375°F (190°C) for 6–8 min, until soft and caramelised.',
  ],
  'egg-muffin-cups': [
    'Pour the egg mixture into silicone muffin cups (don’t overfill) and air fry at 300°F (150°C) for 8–12 min, until set. Work in batches if needed.',
  ],
  'corn-tortilla-breakfast-wrap': [
    'Air fry the bacon at 380°F (195°C) for 8–10 min until crisp. Scramble or air-fry the egg, then roll up in a warm tortilla.',
  ],
  'teriyaki-salmon-bowl': [
    'Air fry the salmon at 400°F (200°C) for 7–9 min, until 145°F (63°C). Brush on the teriyaki for the last 2 min so it glazes without burning. Serve over rice.',
  ],
  'stuffed-bell-peppers': [
    'Spoon the par-cooked rice-and-beef filling into the pepper halves and air fry at 360°F (180°C) for 10–13 min, until the peppers are tender and the tops are golden.',
  ],
  'pork-tenderloin-roasted-veg': [
    'Rub the tenderloin with oil, salt and pepper and air fry at 400°F (200°C) for 18–22 min, turning once, until 145°F (63°C); rest 5 min before slicing.',
    'Air fry the oiled carrots at 400°F (200°C) for 12–15 min, shaking once.',
  ],
  'turkey-burgers': [
    'Shape the patties and air fry at 360°F (180°C) for 12–15 min, flipping halfway, until 165°F (74°C). Add cheese (if using) for the last minute.',
  ],
  'turkey-burger': [
    'Shape the patties and air fry at 360°F (180°C) for 12–15 min, flipping halfway, until 165°F (74°C). Add cheese (if using) for the last minute.',
  ],
  'sheet-pan-sausage-veg': [
    'Toss the sausages and chopped veg with oil and air fry at 400°F (200°C) for 12–15 min, shaking halfway, until the sausages reach 165°F (74°C) and the veg is golden. Use two batches if crowded.',
  ],
  'maple-dijon-salmon': [
    'Air fry the salmon at 400°F (200°C) for 8–10 min, until 145°F (63°C). Brush on the brown-sugar Dijon glaze for the last 2–3 min so it caramelises without scorching.',
  ],
  'maple-glazed-salmon': [
    'Air fry the salmon at 400°F (200°C) for 8–10 min, until 145°F (63°C). Brush on the ginger glaze for the last 2–3 min so it caramelises without scorching.',
  ],
  'gf-chocolate-brownies': [
    'Pour the batter into a greased tin that fits your basket and air fry at 320°F (160°C) for 18–22 min, until a skewer comes out with a few moist crumbs. Cool before slicing.',
  ],
  'sweet-potato-hash': [
    'Toss the diced sweet potato with oil, salt and pepper and air fry at 380°F (195°C) for 12–15 min, shaking twice, until tender with crisp edges.',
  ],
  'gf-granola': [
    'Spread the granola in a thin layer and air fry at 300°F (150°C) for 10–12 min, stirring every 3–4 min so it toasts evenly and doesn’t catch. It crisps further as it cools.',
  ],
  'breakfast-frittata': [
    'Pour the egg mixture into a greased dish that fits your basket and air fry at 320°F (160°C) for 12–18 min, until set in the centre. Rest a few minutes before slicing.',
  ],
  'chicken-veggie-frittata-lunch': [
    'Pour the egg mixture into a greased dish that fits your basket and air fry at 320°F (160°C) for 12–18 min, until set in the centre. Rest a few minutes before slicing.',
  ],
  'shrimp-scampi': [
    'Air fry the shrimp at 400°F (200°C) for 6–8 min, until pink and opaque, then toss with the warm garlic-infused-oil sauce and cooked GF pasta.',
  ],
  'baked-cod': [
    'Air fry the cod at 380°F (195°C) for 8–10 min, until it flakes easily (145°F/63°C). Spoon the lemon-caper sauce over to serve.',
  ],
  'tofu-stir-fry': [
    'Toss the pressed, cubed tofu with a little oil and cornstarch and air fry at 400°F (200°C) for 12–15 min, shaking twice, until golden and crisp. Fold into the stir-fried veg and sauce at the end.',
  ],
  'roasted-sweet-potato-salad': [
    'Toss the cubed sweet potato with oil, salt and pepper and air fry at 400°F (200°C) for 15–18 min, shaking once. Cool slightly, then toss through the salad.',
  ],
  'pork-carnitas-bowl': [
    'Air fry the seasoned pork at 380°F (195°C) for 18–20 min, then spread it out and blast at 400°F (200°C) for 3–5 min to crisp the edges. Pile into bowls.',
  ],
  'banana-oat-cookies': [
    'Spoon the dough onto parchment cut to fit the basket and air fry at 325°F (160°C) for 8–10 min, until set. Leave space between cookies and cook in batches.',
  ],
  'deviled-eggs': [
    'Make air-fryer “hard-boiled” eggs: cook whole eggs at 270°F (132°C) for 13–15 min, then plunge into ice water before peeling. Halve and fill as usual.',
  ],
  'lemon-polenta-cake': [
    'Pour the batter into a greased tin that fits your basket and air fry at 320°F (160°C) for 25–30 min, until a skewer comes out clean (loosely cover with foil if the top browns too fast). Cool before glazing.',
  ],
  'lemon-garlic-shrimp-rice': [
    'Toss the shrimp with the garlic-infused oil, salt and pepper and air fry at 400°F (200°C) for 6–8 min, shaking once, until pink and opaque.',
    'Melt the butter with the lemon juice, zest and parsley, then toss the hot shrimp through it. Serve over rice with the steamed greens.',
  ],
  'parmesan-crusted-chicken': [
    'Coat the chicken in egg then the parmesan crumb. Spray both sides with a little oil and air fry at 380°F (195°C) for 12–15 min, flipping halfway, until golden and 165°F (74°C) inside. Cook the GF pasta on the stovetop.',
  ],
  'roast-chicken-thighs-veg': [
    'Toss the potato and carrot with oil, salt and pepper and air fry at 400°F (200°C) for 12 min, shaking once.',
    'Add the bell pepper and the oiled, seasoned chicken thighs (skin-side up) and cook 18–22 min more, until the chicken reaches 175°F (80°C) and the veg is tender. Squeeze over the lemon.',
  ],
  'lemon-pepper-tilapia': [
    'Rub the fish with garlic-infused oil, lemon juice, cracked pepper, paprika and salt. Air fry at 380°F (195°C) for 8–10 min, until it flakes easily. Air fry the baby potatoes separately at 400°F (200°C) for 15–18 min, shaking twice.',
  ],
  'turkey-meatloaf': [
    'Press the mix into a small loaf pan or foil tray that fits your basket, brush with the glaze, and air fry at 350°F (175°C) for 25–30 min, until 165°F (74°C) inside. Rest 10 min before slicing.',
  ],
  'beef-tacos': [
    'Brown the seasoned beef in an air-fryer-safe dish at 380°F (195°C) for 10–12 min, stirring twice and draining any fat, then stir in the tomato paste and water. Warm the corn tortillas in the basket for 1–2 min and assemble.',
  ],
};

// ── RECIPE CALORIES (estimated per serving) ────────────────────────────────
const RECIPE_CALORIES = {
  // ── Breakfast ──
  'banana-oat-pancakes':        370,
  'veggie-scrambled-eggs':      280,
  'strawberry-chia-pudding':    230,
  'blueberry-smoothie-bowl':    270,
  'peanut-butter-banana-toast': 430,
  'rice-congee':                200,
  'avocado-tuna-rice-cakes':    250,
  'egg-muffin-cups':            160,   // per 2 muffins
  'overnight-oats-strawberry':  320,
  'spinach-pineapple-smoothie': 185,
  'corn-tortilla-breakfast-wrap': 480,
  'savory-oat-poached-egg':     280,
  // ── Lunch ──
  'tuna-rice-bowl':             430,
  'chicken-lettuce-wraps':      330,
  'quinoa-greek-salad':         450,
  'peanut-noodle-salad':        520,
  'roasted-veg-soup':           200,
  'blt-gf':                     480,
  'egg-salad-gf':               480,
  'fodmap-caesar-salad':        440,
  'zucchini-noodle-bowl':       290,
  'teriyaki-salmon-bowl':       540,
  'greek-chicken-bowl':         470,
  'turkey-cheese-wrap':         420,
  'tuna-nicoise-salad':         440,
  'carrot-ginger-soup':         210,
  // ── Dinner ──
  'lemon-herb-chicken':         480,
  'beef-bok-choy-stir-fry':     520,
  'baked-salmon':               460,
  'gf-pasta-tomato':            490,
  'chicken-fried-rice':         460,
  'fish-tacos':                 440,
  'chicken-curry':              420,
  'lamb-chops':                 560,
  'pork-meatballs':             620,
  'baked-potato-bar':           500,
  'shrimp-pad-thai':            520,
  'stuffed-bell-peppers':       480,
  'turkey-bolognese':           580,
  'one-pan-chicken-rice':       520,
  'gf-mac-cheese':              560,
  'pork-tenderloin-roasted-veg': 460,
  'turkey-burgers':             450,
  'prawn-coconut-curry':        440,
  'sheet-pan-sausage-veg':      520,
  'maple-dijon-salmon':         420,
  'lemon-garlic-shrimp-rice':   430,
  'parmesan-crusted-chicken':   560,
  'ginger-pork-rice':           490,
  'roast-chicken-thighs-veg':   540,
  'beef-pepper-stir-fry':       500,
  'steak-chimichurri':          620,
  'beef-tacos':                 480,
  'chicken-quesadilla':         520,
  'lemon-pepper-tilapia':       420,
  'turkey-meatloaf':            440,
  'baked-ziti':                 560,
  'roast-pork-loin':            520,
  // ── Snacks ──
  'peanut-butter-smoothie':     280,
  'strawberry-smoothie':        210,
  'trail-mix':                  200,   // per 1/3 cup serving
  'carrot-peanut-butter':       220,
  'caprese-skewers':            180,
  'protein-snack-box':          240,
  'seasoned-popcorn':           130,
  'cucumber-smoked-salmon':     160,
  'banana-almond-butter-bites': 200,
  // ── Desserts ──
  'baked-banana':               180,
  'strawberry-nice-cream':      160,
  'peanut-butter-bites':        140,   // per 2 bites
  'lemon-polenta-cake':         380,   // per slice
  'passionfruit-chia-pots':     200,
  'vanilla-panna-cotta':        220,
  'gf-chocolate-brownies':      250,   // per brownie
  // ── Kandy's Weekly Recipes ──
  'kandy-mon-breakfast':        350,
  'kandy-mon-lunch':            450,
  'kandy-mon-dinner':           520,
  'kandy-tue-breakfast':        380,
  'kandy-tue-lunch':            310,
  'kandy-tue-dinner':           580,
  'kandy-wed-breakfast':        420,
  'kandy-wed-lunch':            380,
  'kandy-wed-dinner':           490,
  'kandy-thu-breakfast':        280,
  'kandy-thu-dinner':           560,
  'kandy-fri-breakfast':        320,
  'kandy-fri-lunch':            420,
  'kandy-fri-dinner':           440,
  'kandy-sat-breakfast':        480,
  'kandy-sat-lunch':            380,
  'kandy-sat-dinner':           520,
  'kandy-sun-breakfast':        390,
  'kandy-sun-lunch':            280,
  'kandy-sun-dinner':           650,
};

// ── RECIPE NUTRITION (estimated per serving) ───────────────────────────────
// Calories, protein (g) and fibre (g) per serving. Estimates only, calculated
// from the ingredient list ÷ servings. The app reads from here first and falls
// back to RECIPE_CALORIES for older entries.
const RECIPE_NUTRITION = {
  // ── Breakfast ──
  'banana-oat-pancakes':           { cal: 370, protein: 12, fiber: 4  },
  'veggie-scrambled-eggs':         { cal: 280, protein: 26, fiber: 2  },
  'strawberry-chia-pudding':       { cal: 230, protein: 9,  fiber: 11 },
  'blueberry-smoothie-bowl':       { cal: 270, protein: 9,  fiber: 11 },
  'peanut-butter-banana-toast':    { cal: 430, protein: 12, fiber: 6  },
  'rice-congee':                   { cal: 200, protein: 8,  fiber: 1  },
  'avocado-tuna-rice-cakes':       { cal: 250, protein: 28, fiber: 3  },
  'egg-muffin-cups':               { cal: 160, protein: 12, fiber: 1  },
  'overnight-oats-strawberry':     { cal: 320, protein: 9,  fiber: 7  },
  'spinach-pineapple-smoothie':    { cal: 185, protein: 3,  fiber: 6  },
  'corn-tortilla-breakfast-wrap':  { cal: 480, protein: 28, fiber: 4  },
  'savory-oat-poached-egg':        { cal: 280, protein: 12, fiber: 3  },
  'sweet-potato-hash':             { cal: 340, protein: 14, fiber: 5  },
  'gf-granola':                    { cal: 320, protein: 6,  fiber: 5  },
  'rice-crepes':                   { cal: 340, protein: 10, fiber: 2  },
  'smoked-salmon-platter':         { cal: 360, protein: 14, fiber: 1  },
  'breakfast-frittata':            { cal: 300, protein: 16, fiber: 1  },
  // ── Lunch ──
  'tuna-rice-bowl':                { cal: 430, protein: 30, fiber: 3  },
  'chicken-lettuce-wraps':         { cal: 330, protein: 36, fiber: 4  },
  'quinoa-greek-salad':            { cal: 450, protein: 15, fiber: 7  },
  'peanut-noodle-salad':           { cal: 520, protein: 13, fiber: 5  },
  'roasted-veg-soup':              { cal: 200, protein: 4,  fiber: 6  },
  'blt-gf':                        { cal: 480, protein: 16, fiber: 4  },
  'egg-salad-gf':                  { cal: 480, protein: 18, fiber: 3  },
  'fodmap-caesar-salad':           { cal: 440, protein: 42, fiber: 3  },
  'zucchini-noodle-bowl':          { cal: 290, protein: 13, fiber: 4  },
  'teriyaki-salmon-bowl':          { cal: 540, protein: 40, fiber: 3  },
  'greek-chicken-bowl':            { cal: 470, protein: 45, fiber: 3  },
  'turkey-cheese-wrap':            { cal: 420, protein: 35, fiber: 3  },
  'tuna-nicoise-salad':            { cal: 440, protein: 32, fiber: 6  },
  'carrot-ginger-soup':            { cal: 210, protein: 2,  fiber: 4  },
  'shrimp-spring-rolls':           { cal: 280, protein: 24, fiber: 2  },
  'roasted-sweet-potato-salad':    { cal: 420, protein: 13, fiber: 8  },
  'miso-soup':                     { cal: 120, protein: 6,  fiber: 1  },
  'chicken-veggie-frittata-lunch': { cal: 340, protein: 23, fiber: 1  },
  'cold-pasta-salad':              { cal: 420, protein: 6,  fiber: 3  },
  // ── Dinner ──
  'lemon-herb-chicken':            { cal: 480, protein: 28, fiber: 7  },
  'beef-bok-choy-stir-fry':        { cal: 520, protein: 38, fiber: 7  },
  'baked-salmon':                  { cal: 460, protein: 40, fiber: 8  },
  'gf-pasta-tomato':               { cal: 490, protein: 10, fiber: 8  },
  'chicken-fried-rice':            { cal: 460, protein: 38, fiber: 6  },
  'fish-tacos':                    { cal: 440, protein: 38, fiber: 8  },
  'chicken-curry':                 { cal: 420, protein: 38, fiber: 8  },
  'lamb-chops':                    { cal: 560, protein: 32, fiber: 8  },
  'pork-meatballs':                { cal: 620, protein: 38, fiber: 8  },
  'baked-potato-bar':              { cal: 500, protein: 21, fiber: 9  },
  'shrimp-pad-thai':               { cal: 520, protein: 35, fiber: 7  },
  'stuffed-bell-peppers':          { cal: 480, protein: 28, fiber: 8  },
  'turkey-bolognese':              { cal: 580, protein: 38, fiber: 9  },
  'one-pan-chicken-rice':          { cal: 520, protein: 35, fiber: 6  },
  'gf-mac-cheese':                 { cal: 560, protein: 24, fiber: 6  },
  'pork-tenderloin-roasted-veg':   { cal: 460, protein: 42, fiber: 9  },
  'turkey-burgers':                { cal: 450, protein: 33, fiber: 5  },
  'prawn-coconut-curry':           { cal: 440, protein: 36, fiber: 7  },
  'sheet-pan-sausage-veg':         { cal: 520, protein: 28, fiber: 9  },
  'maple-dijon-salmon':            { cal: 420, protein: 38, fiber: 7  },
  'maple-glazed-salmon':           { cal: 480, protein: 36, fiber: 6  },
  'turkey-burger':                 { cal: 450, protein: 28, fiber: 5  },
  'chicken-soup':                  { cal: 360, protein: 27, fiber: 6  },
  'shrimp-scampi':                 { cal: 520, protein: 42, fiber: 8  },
  'baked-cod':                     { cal: 420, protein: 34, fiber: 9  },
  'pork-carnitas-bowl':            { cal: 560, protein: 37, fiber: 7  },
  'beef-potato-pie':               { cal: 520, protein: 28, fiber: 9  },
  'tofu-stir-fry':                 { cal: 380, protein: 16, fiber: 9  },
  'lemon-garlic-shrimp-rice':      { cal: 430, protein: 40, fiber: 7  },
  'parmesan-crusted-chicken':      { cal: 560, protein: 48, fiber: 6  },
  'ginger-pork-rice':              { cal: 490, protein: 40, fiber: 6  },
  'roast-chicken-thighs-veg':      { cal: 540, protein: 40, fiber: 9  },
  'beef-pepper-stir-fry':          { cal: 500, protein: 35, fiber: 7  },
  'steak-chimichurri':             { cal: 620, protein: 48, fiber: 8  },
  'beef-tacos':                    { cal: 480, protein: 32, fiber: 7  },
  'chicken-quesadilla':            { cal: 520, protein: 42, fiber: 6  },
  'lemon-pepper-tilapia':          { cal: 420, protein: 42, fiber: 9  },
  'turkey-meatloaf':               { cal: 440, protein: 42, fiber: 2  },
  'baked-ziti':                    { cal: 560, protein: 24, fiber: 4  },
  'roast-pork-loin':               { cal: 520, protein: 52, fiber: 5  },
  // ── Snacks ──
  'peanut-butter-smoothie':        { cal: 280, protein: 8,  fiber: 4  },
  'strawberry-smoothie':           { cal: 210, protein: 8,  fiber: 4  },
  'trail-mix':                     { cal: 200, protein: 6,  fiber: 3  },
  'carrot-peanut-butter':          { cal: 220, protein: 9,  fiber: 6  },
  'caprese-skewers':               { cal: 180, protein: 8,  fiber: 2  },
  'protein-snack-box':             { cal: 240, protein: 28, fiber: 4  },
  'seasoned-popcorn':              { cal: 130, protein: 4,  fiber: 5  },
  'cucumber-smoked-salmon':        { cal: 160, protein: 13, fiber: 1  },
  'banana-almond-butter-bites':    { cal: 200, protein: 4,  fiber: 3  },
  'rice-cake-almond-banana':       { cal: 280, protein: 10, fiber: 6  },
  'cheese-crackers-snack':         { cal: 240, protein: 8,  fiber: 1  },
  'fruit-salad-snack':             { cal: 140, protein: 2,  fiber: 6  },
  'pumpkin-seed-mix':              { cal: 180, protein: 5,  fiber: 2  },
  'deviled-eggs':                  { cal: 140, protein: 9,  fiber: 0  },
  // ── Desserts ──
  'baked-banana':                  { cal: 180, protein: 2,  fiber: 4  },
  'strawberry-nice-cream':         { cal: 160, protein: 2,  fiber: 5  },
  'peanut-butter-bites':           { cal: 140, protein: 4,  fiber: 2  },
  'lemon-polenta-cake':            { cal: 380, protein: 6,  fiber: 2  },
  'passionfruit-chia-pots':        { cal: 200, protein: 5,  fiber: 11 },
  'vanilla-panna-cotta':           { cal: 220, protein: 4,  fiber: 1  },
  'gf-chocolate-brownies':         { cal: 250, protein: 4,  fiber: 2  },
  'banana-oat-cookies':            { cal: 90,  protein: 2,  fiber: 2  },
  'strawberry-panna-cotta':        { cal: 240, protein: 4,  fiber: 2  },
  'chocolate-mousse':              { cal: 320, protein: 8,  fiber: 2  },
  'mango-sorbet':                  { cal: 120, protein: 1,  fiber: 2  },
  // ── High-Fibre recipes ──
  'hf-oat-berry-bowl':             { cal: 380, protein: 14, fiber: 15 },
  'hf-lentil-veg-soup':            { cal: 320, protein: 15, fiber: 12 },
  'hf-quinoa-tofu-bowl':           { cal: 480, protein: 24, fiber: 12 },
  'hf-chickpea-spinach-curry':     { cal: 460, protein: 16, fiber: 13 },
  'hf-chicken-buddha-bowl':        { cal: 520, protein: 40, fiber: 11 },
  'hf-raspberry-chia-pudding':     { cal: 240, protein: 8,  fiber: 14 },
  'hf-energy-balls':               { cal: 180, protein: 6,  fiber: 5  },
  'hf-roasted-chickpeas':          { cal: 180, protein: 8,  fiber: 7  },
  'hf-edamame':                    { cal: 160, protein: 14, fiber: 8  },
  // ── Kandy's Weekly Recipes ──
  'kandy-mon-breakfast':           { cal: 350, protein: 21, fiber: 1  },
  'kandy-mon-lunch':               { cal: 450, protein: 35, fiber: 3  },
  'kandy-mon-dinner':              { cal: 520, protein: 40, fiber: 8  },
  'kandy-tue-breakfast':           { cal: 380, protein: 11, fiber: 7  },
  'kandy-tue-lunch':               { cal: 310, protein: 35, fiber: 3  },
  'kandy-tue-dinner':              { cal: 580, protein: 35, fiber: 7  },
  'kandy-wed-breakfast':           { cal: 420, protein: 24, fiber: 4  },
  'kandy-wed-lunch':               { cal: 380, protein: 12, fiber: 8  },
  'kandy-wed-dinner':              { cal: 490, protein: 42, fiber: 7  },
  'kandy-thu-breakfast':           { cal: 280, protein: 13, fiber: 4  },
  'kandy-thu-dinner':              { cal: 560, protein: 42, fiber: 8  },
  'kandy-fri-breakfast':           { cal: 320, protein: 11, fiber: 5  },
  'kandy-fri-lunch':               { cal: 420, protein: 13, fiber: 3  },
  'kandy-fri-dinner':              { cal: 440, protein: 42, fiber: 10  },
  'kandy-sat-breakfast':           { cal: 480, protein: 22, fiber: 4  },
  'kandy-sat-lunch':               { cal: 380, protein: 38, fiber: 4  },
  'kandy-sat-dinner':              { cal: 520, protein: 40, fiber: 7  },
  'kandy-sun-breakfast':           { cal: 390, protein: 14, fiber: 4  },
  'kandy-sun-lunch':               { cal: 280, protein: 12, fiber: 9  },
  'kandy-sun-dinner':              { cal: 650, protein: 45, fiber: 9  },
};

// ── FODMAP RECIPE ANALYZER ────────────────────────────────────────────────
// Each entry: triggers (substring match, case-insensitive), exclude (skip if line also contains these),
// verdict: 'high' (must swap) or 'moderate' (limit portion), fix: exact what to do.
const FODMAP_ANALYZER = [

  // ── FRUCTANS: garlic & onion family ──────────────────────────────────────
  {
    triggers: ['garlic'],
    exclude: ['garlic-infused', 'infused oil', 'garlic oil'],
    name: 'Garlic', emoji: '🧄', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Garlic is one of the highest-FODMAP ingredients — even a small amount can trigger symptoms.',
    fix: 'Use garlic-infused olive oil instead. Use 1–2 tsp per clove the recipe calls for. Fructans are water-soluble, not oil-soluble, so the flavour transfers without the FODMAPs.'
  },
  {
    triggers: ['onion', 'red onion', 'white onion', 'yellow onion', 'brown onion', 'onion powder', 'onion salt', 'diced onion', 'chopped onion', 'caramelized onion'],
    exclude: ['spring onion', 'green onion', 'spring onions', 'green onions'],
    name: 'Onion', emoji: '🧅', fodmapType: 'Fructans', verdict: 'high',
    issue: 'All onion varieties are very high in fructans — a major FODMAP trigger.',
    fix: 'Use only the dark green tops of spring onions or chives in the same quantity. For cooking base flavour, sauté garlic-infused oil with a pinch of asafoetida (hing).'
  },
  {
    triggers: ['shallot', 'shallots'],
    name: 'Shallots', emoji: '🧅', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Shallots are high in fructans — similar FODMAP level to onion.',
    fix: 'Use a pinch (⅛ tsp) of asafoetida powder sautéed in oil, or substitute green onion tops (green part only).'
  },
  {
    triggers: ['leek', 'leeks'],
    exclude: ['leek green', 'dark green part'],
    name: 'Leeks (white/pale part)', emoji: '🌿', fodmapType: 'Fructans + Polyols', verdict: 'high',
    issue: 'The white and light-green parts of leeks are high-FODMAP.',
    fix: 'Use only the dark green tops — cut off and discard the entire white/pale section. The green tops can be used in the same quantity.'
  },
  {
    triggers: ['spring onion', 'spring onions', 'scallion', 'scallions', 'green onion', 'green onions'],
    name: 'Spring Onion / Scallion', emoji: '🌱', fodmapType: 'Fructans (white part only)', verdict: 'moderate',
    issue: 'The white bulb end of spring onions is high-FODMAP. Only the dark green tops are safe.',
    fix: 'Slice off and discard everything below where the onion turns dark green. Use only the green tops — same quantity the recipe calls for.'
  },

  // ── LACTOSE ───────────────────────────────────────────────────────────────
  {
    triggers: ['milk', 'whole milk', 'skim milk', '2% milk', 'reduced fat milk', 'dairy milk', 'cow\'s milk'],
    exclude: ['lactose-free', 'almond milk', 'coconut milk', 'oat milk', 'rice milk', 'soy milk', 'buttermilk', 'coconut water'],
    name: 'Regular Cow\'s Milk', emoji: '🥛', fodmapType: 'Lactose', verdict: 'high',
    issue: 'Regular milk is high in lactose.',
    fix: 'Swap 1:1 with lactose-free milk or unsweetened almond milk. Avoid oat milk (high fructans) and cashew milk (high oligosaccharides).'
  },
  {
    triggers: ['yogurt', 'yoghurt', 'greek yogurt', 'greek yoghurt'],
    exclude: ['lactose-free yogurt', 'lactose-free yoghurt', 'coconut yogurt', 'dairy-free yogurt'],
    name: 'Regular Yogurt', emoji: '🥛', fodmapType: 'Lactose', verdict: 'high',
    issue: 'Regular and Greek yogurt are high in lactose.',
    fix: 'Use lactose-free yogurt or coconut yogurt — direct 1:1 swap in any recipe.'
  },
  {
    triggers: ['cream cheese'],
    exclude: ['lactose-free cream cheese'],
    name: 'Cream Cheese', emoji: '🧀', fodmapType: 'Lactose', verdict: 'moderate',
    issue: 'Regular cream cheese is moderate-to-high FODMAP above 2 tbsp per person.',
    fix: 'Keep to a maximum of 2 tbsp per serving, or use lactose-free cream cheese which is safe at any normal amount.'
  },
  {
    triggers: ['sour cream'],
    exclude: ['lactose-free sour cream'],
    name: 'Sour Cream', emoji: '🥛', fodmapType: 'Lactose', verdict: 'moderate',
    issue: 'Regular sour cream is moderate-FODMAP.',
    fix: 'Use lactose-free sour cream (1:1 swap) or strictly limit regular sour cream to 2 tbsp per person.'
  },
  {
    triggers: ['ricotta'],
    name: 'Ricotta Cheese', emoji: '🧀', fodmapType: 'Lactose', verdict: 'moderate',
    issue: 'Ricotta is moderate-to-high in lactose — the safe serving is only 2 tbsp per person.',
    fix: 'Limit to 2 tbsp per serving. For larger recipe amounts, substitute with lactose-free ricotta, or blend firm silken tofu smooth as a texture substitute.'
  },
  {
    triggers: ['heavy cream', 'whipping cream', 'double cream', 'thickened cream'],
    exclude: ['lactose-free cream', 'coconut cream'],
    name: 'Heavy Cream', emoji: '🥛', fodmapType: 'Lactose', verdict: 'moderate',
    issue: 'Heavy cream contains lactose — moderate in small amounts, high in large amounts.',
    fix: 'Use lactose-free heavy cream (1:1) or canned coconut cream at 2 tbsp per person as a dairy-free option.'
  },
  {
    triggers: ['ice cream'],
    exclude: ['lactose-free ice cream', 'dairy-free ice cream', 'coconut ice cream', 'sorbet'],
    name: 'Ice Cream', emoji: '🍦', fodmapType: 'Lactose', verdict: 'high',
    issue: 'Regular ice cream is high in lactose.',
    fix: 'Use lactose-free ice cream or fruit sorbet. Check sorbet labels for honey, apple juice, or high-FODMAP fruit.'
  },

  // ── WHEAT & GRAINS ────────────────────────────────────────────────────────
  {
    triggers: ['all-purpose flour', 'plain flour', 'wheat flour', 'self-raising flour', 'self-rising flour', 'white flour', 'bread flour', 'cake flour'],
    name: 'Wheat Flour', emoji: '🌾', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Wheat flour is high in fructans.',
    fix: 'Use a GF flour blend 1:1 for most recipes. For coatings and batters, rice flour alone works well. For bread baking, use a GF bread flour blend with xanthan gum.'
  },
  {
    triggers: ['pasta', 'spaghetti', 'penne', 'fettuccine', 'linguine', 'rigatoni', 'macaroni', 'rotini', 'fusilli', 'tagliatelle'],
    exclude: ['rice pasta', 'gf pasta', 'gluten-free pasta', 'gluten free pasta', 'corn pasta', 'quinoa pasta', 'rice noodles', 'rice vermicelli', 'glass noodles', 'buckwheat noodles'],
    name: 'Regular Wheat Pasta', emoji: '🍝', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Wheat pasta is high in fructans.',
    fix: 'Swap 1:1 with rice pasta, corn pasta, or quinoa pasta. Cook just to al dente — GF pasta gets mushy quickly.'
  },
  {
    triggers: ['bread', 'sandwich bread', 'white bread', 'whole wheat bread', 'whole grain bread', 'sourdough'],
    exclude: ['gf bread', 'gluten-free bread', 'gluten free bread', 'spelt sourdough (long', 'rice bread', 'corn bread', 'cornbread'],
    name: 'Regular Wheat Bread', emoji: '🍞', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Wheat bread is high in fructans.',
    fix: 'Use GF bread. Exception: traditional long-fermented spelt sourdough is safe at 2 slices max per person — the fermentation process breaks down the fructans.'
  },
  {
    triggers: ['breadcrumbs', 'panko'],
    exclude: ['gf breadcrumbs', 'gluten-free breadcrumbs', 'gluten free breadcrumbs', 'gf panko', 'rice cracker'],
    name: 'Wheat Breadcrumbs / Panko', emoji: '🌾', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Wheat breadcrumbs are high in fructans.',
    fix: 'Use GF breadcrumbs or pulse plain rice crackers in a bag until coarse crumbs. GF panko is available at most stores. Crushed GF corn flakes also crisp up beautifully.'
  },
  {
    triggers: ['flour tortilla', 'flour tortillas', 'wheat tortilla', 'wheat tortillas'],
    name: 'Wheat Flour Tortillas', emoji: '🌮', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Wheat flour tortillas are high in fructans.',
    fix: 'Use corn tortillas, cassava flour tortillas (Siete brand), or rice paper wrappers. For burritos, blanched collard green leaves work as large wraps.'
  },
  {
    triggers: ['couscous'],
    name: 'Couscous', emoji: '🌾', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Couscous is made from wheat semolina — high in fructans.',
    fix: 'Replace 1:1 with cooked white rice, quinoa, or millet. All three are naturally gluten-free and low FODMAP.'
  },
  {
    triggers: ['rye bread', 'rye flour', 'barley', 'rye'],
    name: 'Rye / Barley', emoji: '🌾', fodmapType: 'Fructans', verdict: 'high',
    issue: 'Both rye and barley are high in fructans.',
    fix: 'Replace with rice, quinoa, millet, or certified GF oats. Use GF flour blends for any baking.'
  },

  // ── HIGH-FODMAP SWEETENERS ────────────────────────────────────────────────
  {
    triggers: ['honey'],
    name: 'Honey', emoji: '🍯', fodmapType: 'Excess Fructose', verdict: 'high',
    issue: 'Honey is high in excess fructose.',
    fix: 'Swap 1:1 with pure maple syrup or rice malt syrup. Rice malt syrup is completely fructose-free.'
  },
  {
    triggers: ['agave', 'agave nectar', 'agave syrup'],
    name: 'Agave', emoji: '🍯', fodmapType: 'Excess Fructose', verdict: 'high',
    issue: 'Agave is one of the highest-fructose sweeteners available.',
    fix: 'Replace 1:1 with pure maple syrup in any recipe.'
  },
  {
    triggers: ['high-fructose corn syrup', 'hfcs', 'corn syrup'],
    name: 'High-Fructose Corn Syrup', emoji: '🍬', fodmapType: 'Excess Fructose', verdict: 'high',
    issue: 'HFCS is very high in free fructose.',
    fix: 'Use plain cane sugar (balanced glucose:fructose) or pure maple syrup instead.'
  },
  {
    triggers: ['coconut sugar'],
    name: 'Coconut Sugar', emoji: '🥥', fodmapType: 'Inulin (Fructans)', verdict: 'moderate',
    issue: 'Coconut sugar contains inulin and is moderate-FODMAP.',
    fix: 'Use plain white or brown cane sugar in the same amount. Both are low FODMAP at normal serving sizes.'
  },

  // ── HIGH-FODMAP FRUITS ────────────────────────────────────────────────────
  {
    triggers: ['apple', 'apples', 'applesauce', 'apple sauce', 'apple juice'],
    exclude: ['apple cider vinegar', 'acv'],
    name: 'Apple', emoji: '🍎', fodmapType: 'Fructose + Sorbitol', verdict: 'high',
    issue: 'Apples are high in both excess fructose and sorbitol.',
    fix: 'Replace with strawberries, grapes, mandarin, or kiwi. In baking, mashed unripe banana or unsweetened pumpkin puree can substitute for applesauce.'
  },
  {
    triggers: ['pear', 'pears'],
    name: 'Pear', emoji: '🍐', fodmapType: 'Sorbitol + Fructose', verdict: 'high',
    issue: 'Pears are very high in sorbitol.',
    fix: 'Replace with kiwi, unripe banana, or firm strawberries in a similar quantity.'
  },
  {
    triggers: ['mango', 'mangoes'],
    name: 'Mango', emoji: '🥭', fodmapType: 'Excess Fructose', verdict: 'moderate',
    issue: 'Mango is only low FODMAP at 40g (2 thin slices) per person. More than that tips into high-FODMAP.',
    fix: 'Limit to 40g per person as a garnish. For larger recipe amounts, replace with pineapple (generously low FODMAP) or diced strawberries.'
  },
  {
    triggers: ['watermelon'],
    name: 'Watermelon', emoji: '🍉', fodmapType: 'Fructose + Mannitol', verdict: 'high',
    issue: 'Watermelon is very high in both free fructose and mannitol.',
    fix: 'Replace with honeydew melon (½ cup per person) or cantaloupe (¼ cup per person).'
  },
  {
    triggers: ['date', 'dates', 'dried fig', 'dried apricot', 'dried apricots'],
    name: 'Dates / Dried Figs / Dried Apricots', emoji: '🍇', fodmapType: 'Fructose / Polyols', verdict: 'high',
    issue: 'Drying fruit concentrates FODMAPs dramatically. Dates, figs, and apricots are all high-FODMAP.',
    fix: 'Use dried cranberries (limit 1 tbsp per person) as the only widely safe dried fruit option. For sweetening energy balls or baking, use maple syrup + pumpkin seeds instead.'
  },

  // ── HIGH-FODMAP VEGETABLES ────────────────────────────────────────────────
  {
    triggers: ['cauliflower'],
    name: 'Cauliflower', emoji: '🥦', fodmapType: 'Fructans + Sorbitol', verdict: 'high',
    issue: 'Cauliflower is high in fructans and sorbitol, especially the stalk.',
    fix: 'Replace with broccoli florets (¾ cup max per person), zucchini, or bok choy. If cauliflower is essential to the dish, limit strictly to ½ cup florets per person, no stalk.'
  },
  {
    triggers: ['mushroom', 'mushrooms', 'button mushroom', 'cremini', 'portobello', 'shiitake'],
    exclude: ['oyster mushroom', 'king oyster', 'enoki'],
    name: 'Mushrooms (button / cremini / portobello)', emoji: '🍄', fodmapType: 'Mannitol (Polyols)', verdict: 'high',
    issue: 'Button, cremini, portobello, and shiitake mushrooms are very high in mannitol.',
    fix: 'Replace with oyster mushrooms or king oyster mushrooms — both are low FODMAP and cook similarly. Zucchini or eggplant can substitute for a meaty texture in stews and stir-fries.'
  },

  // ── NUTS AND LEGUMES ──────────────────────────────────────────────────────
  {
    triggers: ['cashew', 'cashews', 'cashew butter', 'cashew milk', 'cashew cream'],
    name: 'Cashews', emoji: '🥜', fodmapType: 'Oligosaccharides', verdict: 'high',
    issue: 'Cashews are high in oligosaccharides.',
    fix: 'Replace with walnuts, macadamia nuts, or pumpkin seeds. For cashew butter, use peanut butter or sunflower seed butter (SunButter) in the same amount.'
  },
  {
    triggers: ['pistachio', 'pistachios'],
    name: 'Pistachios', emoji: '🥜', fodmapType: 'Fructans + Oligosaccharides', verdict: 'high',
    issue: 'Pistachios are high in fructans and oligosaccharides.',
    fix: 'Replace with macadamia nuts, walnuts, pecans, or pumpkin seeds in the same amount.'
  },
  {
    triggers: ['black bean', 'black beans', 'kidney bean', 'kidney beans', 'pinto bean', 'pinto beans', 'navy bean', 'navy beans', 'baked beans'],
    name: 'Beans (black / kidney / pinto)', emoji: '🫘', fodmapType: 'Oligosaccharides', verdict: 'high',
    issue: 'Most canned beans remain high-FODMAP even after rinsing at typical serving sizes.',
    fix: 'Replace with firm tofu or tempeh for protein. If legumes are essential, use canned chickpeas — drained and thoroughly rinsed — limited to ¼ cup (42g) per person.'
  },
  {
    triggers: ['chickpea', 'chickpeas', 'garbanzo'],
    name: 'Chickpeas', emoji: '🫘', fodmapType: 'Oligosaccharides', verdict: 'moderate',
    issue: 'Chickpeas are safe only at ¼ cup (42g) canned and rinsed per person. Above that they become high-FODMAP.',
    fix: 'Use canned chickpeas only, rinse very thoroughly under cold water, and keep to ¼ cup max per serving. Check the recipe yield and adjust the total amount down if needed.'
  },
  {
    triggers: ['lentil', 'lentils', 'red lentil', 'green lentil', 'brown lentil'],
    name: 'Lentils', emoji: '🫘', fodmapType: 'Oligosaccharides', verdict: 'moderate',
    issue: 'Lentils are safe only at ¼ cup canned and rinsed per person. Dry-cooked lentils have higher FODMAP content.',
    fix: 'Use canned lentils only, rinse very thoroughly, and limit to ¼ cup (45g) per serving. Reduce the recipe quantity if needed and add more low-FODMAP veg to bulk it out.'
  },

  // ── MODERATE-FODMAP VEGETABLES (portion watch) ────────────────────────────
  {
    triggers: ['broccoli'],
    name: 'Broccoli', emoji: '🥦', fodmapType: 'GOS (florets) / Fructans (stalk)', verdict: 'moderate',
    issue: 'Broccoli florets are moderate-FODMAP — safe at ¾ cup (75g) per person. The stalk is much higher and should be avoided.',
    fix: 'Use florets only (no stalk). Keep to ¾ cup per person. If the recipe calls for more, replace the extra with green beans or bok choy.'
  },
  {
    triggers: ['avocado'],
    name: 'Avocado', emoji: '🥑', fodmapType: 'Sorbitol (Polyols)', verdict: 'moderate',
    issue: 'Avocado is only low FODMAP at 20g (⅛ of a whole avocado, or about 2–3 thin slices) per person.',
    fix: 'Limit to 20g per person. Check the total amount in the recipe and divide by the number of servings to confirm. If it\'s more than 20g per person, reduce the avocado amount.'
  },
  {
    triggers: ['sweet potato', 'sweet potatoes', 'yam', 'yams'],
    name: 'Sweet Potato', emoji: '🍠', fodmapType: 'Mannitol (Polyols)', verdict: 'moderate',
    issue: 'Sweet potato is safe only at ½ cup cooked (70g) per person.',
    fix: 'Limit to ½ cup cooked per person. For larger amounts, replace some or all of the sweet potato with white potato — white potato is completely FODMAP-free at any serving size.'
  },
  {
    triggers: ['butternut squash', 'butternut', 'pumpkin', 'kabocha', 'acorn squash'],
    name: 'Butternut Squash / Pumpkin', emoji: '🎃', fodmapType: 'Mannitol', verdict: 'moderate',
    issue: 'Butternut squash and most pumpkin varieties are moderate-FODMAP above ¼ cup cooked per person.',
    fix: 'Limit to ¼ cup cooked per person. For larger amounts in the recipe, replace with white potato, carrot, or zucchini — all low FODMAP at any serving.'
  },
  {
    triggers: ['oat', 'oats', 'rolled oats', 'oatmeal', 'quick oats', 'instant oats'],
    exclude: ['gf oat', 'gluten-free oat', 'certified oat'],
    name: 'Oats', emoji: '🌾', fodmapType: 'Fructans (above ¼ cup dry)', verdict: 'moderate',
    issue: 'Oats are low FODMAP only at ¼ cup dry (22g) per person. They must be GF-certified to avoid cross-contamination with wheat. Over ½ cup becomes high-FODMAP.',
    fix: 'Use certified GF oats and keep to ¼ cup dry per person. If the recipe calls for more oats and serves just 1–2 people, reduce the amount or increase the number of servings.'
  },
  {
    triggers: ['blueberr'],
    name: 'Blueberries', emoji: '🫐', fodmapType: 'Excess Fructose', verdict: 'moderate',
    issue: 'Blueberries are safe at ½ cup (74g) per person. Above that they become high-FODMAP.',
    fix: 'Keep to ½ cup per person. For larger amounts, replace extra blueberries with strawberries (no serving limit) or raspberries (½ cup per person limit).'
  },
  {
    triggers: ['beetroot', 'beet ', 'beets'],
    name: 'Beetroot / Beets', emoji: '🫀', fodmapType: 'Fructans', verdict: 'moderate',
    issue: 'Beetroot is moderate-FODMAP — safe at 2 slices (40g) canned and drained per person.',
    fix: 'Limit to 2 canned slices per person. For larger amounts in salads, replace with roasted carrot or roasted red bell pepper.'
  },
  {
    triggers: ['celery'],
    name: 'Celery', emoji: '🌿', fodmapType: 'Mannitol', verdict: 'moderate',
    issue: 'Celery is moderate in mannitol — safe only at ¼ stalk (10g) per person as a flavour base.',
    fix: 'Keep to ¼ stalk max per serving. For larger amounts as a vegetable component, replace with cucumber or diced fennel (low FODMAP at moderate amounts).'
  },
  {
    triggers: ['corn kernel', 'corn kernels', 'sweetcorn', 'sweet corn', 'corn (', 'frozen corn', 'canned corn'],
    exclude: ['corn tortilla', 'popcorn', 'cornflour', 'cornstarch', 'corn starch', 'corn chip', 'corn thin', 'corn flour'],
    name: 'Corn / Sweetcorn', emoji: '🌽', fodmapType: 'Sorbitol (Polyols)', verdict: 'moderate',
    issue: 'Corn is moderate-FODMAP — safe at ½ cup (75g) kernels per person.',
    fix: 'Limit to ½ cup per person. Half a fresh cob is also safe. Check the recipe\'s total corn amount divided by servings — reduce if it exceeds ½ cup per person.'
  },
  {
    triggers: ['snow pea', 'snow peas', 'snap pea', 'snap peas', 'sugar snap'],
    name: 'Snow / Snap Peas', emoji: '🫛', fodmapType: 'Fructans + Polyols', verdict: 'moderate',
    issue: 'Snow peas and snap peas are moderate-FODMAP — safe at only 5 pods per person.',
    fix: 'Limit to 5 pods per serving. For larger amounts, replace with green beans or bok choy — both are low FODMAP at any serving size.'
  },
  {
    triggers: ['coconut milk'],
    exclude: ['light coconut milk', '1/2 cup', 'half cup', 'coconut milk drink', 'carton'],
    name: 'Full-Fat Canned Coconut Milk', emoji: '🥥', fodmapType: 'Sorbitol (Polyols)', verdict: 'moderate',
    issue: 'Full-fat canned coconut milk is moderate-FODMAP. Safe at ½ cup for the full recipe if serving 2+.',
    fix: 'Keep the total recipe amount of coconut milk to ½ cup. Use light coconut milk for slightly less FODMAP load, or substitute with lactose-free cream diluted 1:1 with water.'
  },
  {
    triggers: ['feta'],
    name: 'Feta Cheese', emoji: '🧀', fodmapType: 'Lactose', verdict: 'moderate',
    issue: 'Feta contains more lactose than aged cheeses. Safe at 28g (about 2 tbsp crumbled) per person.',
    fix: 'Keep to 28g per person. If the recipe uses more, reduce the amount and add kalamata olives for similar salty, tangy flavour.'
  },
];

