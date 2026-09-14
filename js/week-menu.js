// ─────────────────────────────────────────────────────────────
//  WEEK MENU — "A Week at Our Table" (composed 2026-09-13)
//
//  Seven days of breakfast / lunch / dinner from the app's own
//  recipes: every day lands at or under its day-type calorie
//  target with protein and fiber (>=25g) met, no recipe repeated.
//  adds = the 💪 booster picks that close each day's protein and
//  fiber gaps. Loaded into the planner by the 📅 Week Menu button
//  (see app.js), which also sets each day's 🪑/🚴/🏋️ type.
// ─────────────────────────────────────────────────────────────

const WEEK_MENU = [
  {"day":"Monday","type":"sedentary","meals":{"breakfast":"diet-tue-breakfast","lunch":"lp-shrimp-cottage-cheese-bowl","dinner":"sheet-pan-sausage-veg"},"adds":[{"name":"Raspberries (3/4 cup)","cal":50,"protein":1,"fiber":6},{"name":"Whey isolate shake (1 scoop)","cal":110,"protein":24,"fiber":1}]},
  {"day":"Tuesday","type":"load","meals":{"breakfast":"kandy-fri-breakfast","lunch":"sa-qlu-mediterranean-tuna-barley-bowl","dinner":"kandy-sat-dinner"},"adds":[{"name":"Nonfat Greek yogurt (1 cup)","cal":130,"protein":22,"fiber":0},{"name":"Lactose-free cottage cheese (1 cup)","cal":180,"protein":25,"fiber":0}]},
  {"day":"Wednesday","type":"sedentary","meals":{"breakfast":"lp-smoked-salmon-breakfast-plate","lunch":"hf-lentil-veg-soup","dinner":"kandy-sun-dinner"},"adds":[{"name":"Nonfat Greek yogurt (1 cup)","cal":130,"protein":22,"fiber":0},{"name":"Psyllium husk (1 tbsp in water/yogurt)","cal":20,"protein":0,"fiber":6}]},
  {"day":"Thursday","type":"cycling","meals":{"breakfast":"sa-bf-chickpea-shakshuka","lunch":"roasted-sweet-potato-salad","dinner":"pork-meatballs"},"adds":[{"name":"Lactose-free cottage cheese (1 cup)","cal":180,"protein":25,"fiber":0},{"name":"Whey isolate shake (1 scoop)","cal":110,"protein":24,"fiber":1}]},
  {"day":"Friday","type":"sedentary","meals":{"breakfast":"sa-bf-turkey-sausage-quinoa-scramble","lunch":"sa-qlu-smoked-salmon-quinoa-bowl","dinner":"lp-chicken-fajita-skillet"},"adds":[{"name":"Lactose-free cottage cheese (1 cup)","cal":180,"protein":25,"fiber":0}]},
  {"day":"Saturday","type":"load","meals":{"breakfast":"sa-bf-apple-cinnamon-steel-cut-porridge","lunch":"sa-lu-ginger-broccoli-chickpea-stir-fry","dinner":"steak-chimichurri"},"adds":[{"name":"Lactose-free cottage cheese (1 cup)","cal":180,"protein":25,"fiber":0},{"name":"Nonfat Greek yogurt (1 cup)","cal":130,"protein":22,"fiber":0}]},
  {"day":"Sunday","type":"sedentary","meals":{"breakfast":"gf-granola","lunch":"sa-lu-turkey-white-bean-chili","dinner":"roast-chicken-thighs-veg"},"adds":[{"name":"Whey isolate shake (1 scoop)","cal":110,"protein":24,"fiber":1}]}
];
