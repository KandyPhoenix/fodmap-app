// Lean & High-Protein Recipes — estimated nutrition per serving.
// Main meals target <=400 calories and >=25g protein; breakfasts target
// <=350 calories and >=20g protein; snacks target <=250 calories and >=15g protein.
const LEAN_PROTEIN_RECIPES = [
  {
    id:'lp-berry-cheesecake-oats', name:'Berry Cheesecake Protein Oats', emoji:'🫐', category:'breakfast', time:'10 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','vegetarian'],
    ingredients:[{qty:'1/2 cup',item:'rolled oats'},{qty:'1/2 cup',item:'nonfat Greek yogurt'},{qty:'1/2 cup',item:'low-fat cottage cheese, blended'},{qty:'1/2 cup',item:'mixed berries'},{qty:'1 tsp',item:'honey or maple syrup'},{qty:'1/2 tsp',item:'vanilla extract'}],
    steps:['Cook oats with 3/4 cup water until creamy.','Stir in vanilla and half the blended cottage cheese.','Top with Greek yogurt, remaining cottage cheese, berries, and honey.'],
    nutrition:{cal:335,protein:27,fiber:7}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-turkey-egg-white-burrito', name:'Turkey & Egg-White Breakfast Burrito', emoji:'🌯', category:'breakfast', time:'15 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick'],
    ingredients:[{qty:'3 oz',item:'lean ground turkey or turkey sausage'},{qty:'1/2 cup',item:'liquid egg whites'},{qty:'1',item:'large egg'},{qty:'1',item:'high-fiber tortilla (about 80 calories)'},{qty:'1/2 cup',item:'chopped bell pepper and spinach'},{qty:'2 tbsp',item:'salsa'}],
    steps:['Brown turkey in a nonstick skillet; add vegetables and cook until tender.','Add egg whites and egg and scramble until set.','Spoon into the tortilla, add salsa, roll, and serve.'],
    nutrition:{cal:345,protein:38,fiber:7}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-airfryer-cottage-cheese-frittatas', name:'Air-Fryer Cottage Cheese Frittata Cups', emoji:'🍳', category:'breakfast', time:'18 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','air-fryer','vegetarian','gluten-free'],
    ingredients:[{qty:'4',item:'large eggs'},{qty:'1 cup',item:'liquid egg whites'},{qty:'1 cup',item:'low-fat cottage cheese'},{qty:'1 cup',item:'finely chopped broccoli and bell pepper'},{qty:'1/4 cup',item:'reduced-fat cheddar'},{qty:'to taste',item:'salt, pepper, and smoked paprika'}],
    steps:['Whisk eggs, egg whites, cottage cheese, vegetables, cheddar, and seasoning.','Divide among six greased silicone muffin cups.','Air-fry until puffed and set; serve three cups per person.'],
    nutrition:{cal:310,protein:34,fiber:2}, airfryer:['Preheat to 320F (160C).','Cook the filled silicone cups for 10–13 minutes, checking the centers for doneness.'], added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-peach-protein-smoothie', name:'Peach Cobbler Protein Smoothie', emoji:'🍑', category:'breakfast', time:'5 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','vegetarian','gluten-free'],
    ingredients:[{qty:'1 cup',item:'frozen peach slices'},{qty:'3/4 cup',item:'nonfat Greek yogurt'},{qty:'1/2 cup',item:'unsweetened almond milk'},{qty:'1/2 scoop',item:'vanilla protein powder'},{qty:'2 tbsp',item:'rolled oats'},{qty:'1/2 tsp',item:'cinnamon'},{qty:'1 cup',item:'ice'}],
    steps:['Blend all ingredients until completely smooth.','Add a splash more milk if needed and serve immediately.'],
    nutrition:{cal:300,protein:30,fiber:5}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-smoked-salmon-breakfast-plate', name:'Smoked Salmon Protein Breakfast Plate', emoji:'🐟', category:'breakfast', time:'8 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','gluten-free'],
    ingredients:[{qty:'3 oz',item:'smoked salmon'},{qty:'2',item:'hard-boiled eggs'},{qty:'1/2 cup',item:'low-fat cottage cheese'},{qty:'1 cup',item:'cucumber and tomato slices'},{qty:'1 tbsp',item:'capers'},{qty:'1',item:'lemon wedge'}],
    steps:['Arrange salmon, eggs, cottage cheese, and vegetables on a plate.','Top with capers, black pepper, and lemon juice.'],
    nutrition:{cal:330,protein:39,fiber:2}, added:'2026-08-17', isCustom:true,
  },

  {
    id:'lp-buffalo-chicken-wrap', name:'Buffalo Chicken Crunch Wrap', emoji:'🌯', category:'lunch', time:'10 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick'],
    ingredients:[{qty:'4 oz',item:'cooked chicken breast, chopped'},{qty:'1',item:'high-fiber tortilla'},{qty:'1 cup',item:'shredded lettuce and cabbage'},{qty:'2 tbsp',item:'nonfat Greek yogurt'},{qty:'1 tbsp',item:'buffalo sauce'},{qty:'2 tbsp',item:'reduced-fat cheddar'}],
    steps:['Mix chicken with yogurt and buffalo sauce.','Layer tortilla with slaw, chicken, and cheddar.','Roll tightly and toast in a dry skillet for 1–2 minutes per side.'],
    nutrition:{cal:350,protein:43,fiber:8}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-tuna-white-bean-salad', name:'Lemony Tuna & White Bean Salad', emoji:'🥗', category:'lunch', time:'10 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','gluten-free','high-fiber'],
    ingredients:[{qty:'1 can',item:'tuna in water, drained'},{qty:'1/2 cup',item:'cannellini beans, rinsed'},{qty:'2 cups',item:'arugula or chopped greens'},{qty:'1 cup',item:'cucumber and tomato'},{qty:'1 tbsp',item:'olive oil'},{qty:'1 tbsp',item:'lemon juice'},{qty:'1 tbsp',item:'chopped parsley'}],
    steps:['Whisk olive oil, lemon, parsley, salt, and pepper.','Toss greens, vegetables, beans, and tuna with the dressing.'],
    nutrition:{cal:380,protein:38,fiber:9}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-airfryer-chicken-caesar', name:'Air-Fryer Chicken Caesar Salad', emoji:'🥬', category:'lunch', time:'18 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','air-fryer','gluten-free'],
    ingredients:[{qty:'10 oz',item:'chicken breast tenders'},{qty:'6 cups',item:'chopped romaine'},{qty:'1 cup',item:'cherry tomatoes'},{qty:'1/3 cup',item:'nonfat Greek yogurt'},{qty:'2 tbsp',item:'grated parmesan'},{qty:'1 tbsp',item:'lemon juice'},{qty:'1 tsp',item:'Dijon mustard'},{qty:'1/2 tsp',item:'garlic powder'}],
    steps:['Season chicken with garlic powder, salt, and pepper and air-fry until done.','Whisk yogurt, parmesan, lemon, Dijon, and 1–2 tablespoons water.','Slice chicken and serve over romaine and tomatoes with dressing.'],
    nutrition:{cal:305,protein:43,fiber:4}, airfryer:['Preheat to 390F (199C).','Cook chicken tenders 8–10 minutes, turning halfway, to 165F (74C).'], added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-turkey-taco-soup', name:'Quick Turkey Taco Soup', emoji:'🍲', category:'lunch', time:'20 min', serves:4, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','gluten-free','high-fiber'],
    ingredients:[{qty:'1 lb',item:'99% lean ground turkey'},{qty:'1 can',item:'black beans, rinsed'},{qty:'1 can',item:'fire-roasted diced tomatoes'},{qty:'3 cups',item:'low-sodium chicken broth'},{qty:'1 cup',item:'frozen corn'},{qty:'2 tbsp',item:'taco seasoning'},{qty:'1',item:'lime'}],
    steps:['Brown turkey in a soup pot, breaking it into crumbles.','Add beans, tomatoes, broth, corn, and seasoning; simmer 10 minutes.','Finish with lime juice and adjust seasoning.'],
    nutrition:{cal:325,protein:35,fiber:10}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-shrimp-cottage-cheese-bowl', name:'Creamy Shrimp & Cucumber Protein Bowl', emoji:'🍤', category:'lunch', time:'12 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','gluten-free'],
    ingredients:[{qty:'5 oz',item:'cooked shrimp'},{qty:'3/4 cup',item:'low-fat cottage cheese'},{qty:'1 cup',item:'chopped cucumber and tomato'},{qty:'1/2 cup',item:'cooked quinoa'},{qty:'1 tbsp',item:'lemon juice'},{qty:'1 tbsp',item:'chopped dill'}],
    steps:['Season shrimp with lemon, dill, pepper, and a pinch of salt.','Add cottage cheese, quinoa, and vegetables to a bowl.','Top with shrimp and serve chilled or at room temperature.'],
    nutrition:{cal:390,protein:45,fiber:4}, added:'2026-08-17', isCustom:true,
  },

  {
    id:'lp-airfryer-salmon-green-beans', name:'Air-Fryer Salmon & Green Beans', emoji:'🐟', category:'dinner', time:'18 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','air-fryer','gluten-free'],
    ingredients:[{qty:'2',item:'salmon fillets (4 oz each)'},{qty:'4 cups',item:'green beans'},{qty:'2 tsp',item:'olive oil'},{qty:'1 tsp',item:'Dijon mustard'},{qty:'1 tsp',item:'lemon zest'},{qty:'1/2 tsp',item:'garlic powder'},{qty:'1',item:'lemon'}],
    steps:['Coat salmon with Dijon, zest, garlic powder, salt, and pepper.','Toss green beans with oil and seasoning.','Air-fry together and finish with lemon juice.'],
    nutrition:{cal:330,protein:29,fiber:5}, airfryer:['Preheat to 390F (199C).','Cook green beans 4 minutes, add salmon, then cook both 8–10 minutes until salmon reaches 145F (63C).'], added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-chicken-broccoli-stirfry', name:'Chicken & Broccoli Protein Stir-Fry', emoji:'🥦', category:'dinner', time:'20 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','gluten-free'],
    ingredients:[{qty:'12 oz',item:'chicken breast, thinly sliced'},{qty:'4 cups',item:'broccoli florets'},{qty:'1 cup',item:'sliced bell pepper'},{qty:'2 tsp',item:'sesame oil'},{qty:'2 tbsp',item:'low-sodium tamari'},{qty:'1 tbsp',item:'rice vinegar'},{qty:'1 tsp',item:'grated ginger'},{qty:'1 tsp',item:'cornstarch'}],
    steps:['Whisk tamari, vinegar, ginger, cornstarch, and 1/4 cup water.','Stir-fry chicken in sesame oil until nearly cooked.','Add vegetables and sauce; cook until crisp-tender and glossy.'],
    nutrition:{cal:300,protein:43,fiber:6}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-turkey-meatball-marinara', name:'Air-Fryer Turkey Meatballs & Marinara', emoji:'🍝', category:'dinner', time:'25 min', serves:3, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','air-fryer','gluten-free'],
    ingredients:[{qty:'1 lb',item:'99% lean ground turkey'},{qty:'1',item:'large egg'},{qty:'1/3 cup',item:'quick oats'},{qty:'1/4 cup',item:'grated parmesan'},{qty:'1 tsp',item:'Italian seasoning'},{qty:'1 cup',item:'no-sugar-added marinara'},{qty:'4 cups',item:'zucchini noodles'}],
    steps:['Mix turkey, egg, oats, parmesan, seasoning, salt, and pepper; shape into 15 balls.','Air-fry until browned and cooked through.','Warm marinara and zucchini noodles in a skillet; top each serving with five meatballs.'],
    nutrition:{cal:355,protein:43,fiber:5}, airfryer:['Preheat to 380F (193C).','Lightly spray the basket and cook meatballs 10–12 minutes, turning halfway, to 165F (74C).'], added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-cod-tomato-chickpea-skillet', name:'Mediterranean Cod & Chickpea Skillet', emoji:'🐟', category:'dinner', time:'20 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','gluten-free','high-fiber'],
    ingredients:[{qty:'2',item:'cod fillets (5 oz each)'},{qty:'1 cup',item:'chickpeas, rinsed'},{qty:'1 can',item:'diced tomatoes'},{qty:'2 cups',item:'baby spinach'},{qty:'2 tsp',item:'olive oil'},{qty:'1 tsp',item:'Italian seasoning'},{qty:'1 tbsp',item:'capers'}],
    steps:['Simmer tomatoes, chickpeas, seasoning, and capers in olive oil for 5 minutes.','Nestle cod into the sauce, cover, and simmer 7–9 minutes until flaky.','Fold in spinach and cook just until wilted.'],
    nutrition:{cal:385,protein:43,fiber:9}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-beef-cabbage-skillet', name:'Lean Beef & Cabbage Egg-Roll Skillet', emoji:'🥬', category:'dinner', time:'18 min', serves:3, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','gluten-free'],
    ingredients:[{qty:'1 lb',item:'96% lean ground beef'},{qty:'6 cups',item:'coleslaw mix'},{qty:'1 cup',item:'sliced mushrooms'},{qty:'2 tbsp',item:'low-sodium tamari'},{qty:'1 tbsp',item:'rice vinegar'},{qty:'1 tsp',item:'sesame oil'},{qty:'1 tbsp',item:'grated ginger'},{qty:'2',item:'scallions, sliced'}],
    steps:['Brown beef in a large skillet and drain any excess liquid.','Add mushrooms, coleslaw, tamari, vinegar, sesame oil, and ginger.','Cook 5–7 minutes until cabbage is tender-crisp; garnish with scallions.'],
    nutrition:{cal:320,protein:36,fiber:5}, added:'2026-08-17', isCustom:true,
  },

  {
    id:'lp-chocolate-yogurt-mousse', name:'Chocolate Greek Yogurt Protein Mousse', emoji:'🍫', category:'snack', time:'5 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','vegetarian','gluten-free'],
    ingredients:[{qty:'3/4 cup',item:'nonfat Greek yogurt'},{qty:'1/2 scoop',item:'chocolate protein powder'},{qty:'1 tsp',item:'unsweetened cocoa powder'},{qty:'1 tbsp',item:'milk of choice'},{qty:'1/4 cup',item:'raspberries'}],
    steps:['Whisk yogurt, protein powder, cocoa, and milk until fluffy.','Top with raspberries and serve or chill for 15 minutes.'],
    nutrition:{cal:205,protein:28,fiber:4}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-cottage-cheese-ranch-box', name:'Cottage Cheese Ranch Snack Box', emoji:'🥕', category:'snack', time:'5 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','vegetarian','gluten-free'],
    ingredients:[{qty:'3/4 cup',item:'low-fat cottage cheese'},{qty:'1 tsp',item:'salt-free ranch seasoning'},{qty:'1 cup',item:'cucumber, pepper, and carrot sticks'},{qty:'1',item:'hard-boiled egg'}],
    steps:['Stir ranch seasoning into cottage cheese.','Pack with vegetables and the egg for dipping and snacking.'],
    nutrition:{cal:245,protein:28,fiber:4}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-tuna-cucumber-boats', name:'Tuna Cucumber Boats', emoji:'🥒', category:'snack', time:'8 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','gluten-free'],
    ingredients:[{qty:'1 can',item:'tuna in water, drained'},{qty:'2 tbsp',item:'nonfat Greek yogurt'},{qty:'1 tsp',item:'Dijon mustard'},{qty:'1',item:'large cucumber'},{qty:'1 tbsp',item:'chopped dill or relish'}],
    steps:['Mix tuna, yogurt, mustard, and dill.','Halve cucumber lengthwise and scoop out the seeds.','Fill cucumber halves with tuna mixture and slice into boats.'],
    nutrition:{cal:175,protein:29,fiber:2}, added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-airfryer-chicken-bites', name:'Air-Fryer Parmesan Chicken Bites', emoji:'🍗', category:'snack', time:'15 min', serves:2, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','air-fryer','gluten-free'],
    ingredients:[{qty:'10 oz',item:'chicken breast, cut into bites'},{qty:'2 tbsp',item:'grated parmesan'},{qty:'1 tsp',item:'Italian seasoning'},{qty:'1 tsp',item:'olive oil'},{qty:'1/3 cup',item:'warm marinara for dipping'}],
    steps:['Toss chicken with parmesan, seasoning, oil, salt, and pepper.','Air-fry in one layer until browned and cooked through.','Serve with warm marinara.'],
    nutrition:{cal:230,protein:36,fiber:1}, airfryer:['Preheat to 390F (199C).','Cook chicken bites 7–9 minutes, shaking halfway, to 165F (74C).'], added:'2026-08-17', isCustom:true,
  },
  {
    id:'lp-strawberry-cheesecake-bowl', name:'Strawberry Cheesecake Protein Bowl', emoji:'🍓', category:'snack', time:'5 min', serves:1, difficulty:'easy',
    tags:['lean-protein','high-protein','low-calorie','quick','no-cook','vegetarian','gluten-free'],
    ingredients:[{qty:'3/4 cup',item:'low-fat cottage cheese'},{qty:'1/2 cup',item:'sliced strawberries'},{qty:'1/2 tsp',item:'vanilla extract'},{qty:'1 tsp',item:'honey'},{qty:'1 tbsp',item:'crushed graham-style gluten-free cracker'}],
    steps:['Blend cottage cheese, vanilla, and honey until smooth.','Spoon into a bowl and top with strawberries and cracker crumbs.'],
    nutrition:{cal:225,protein:21,fiber:3}, added:'2026-08-17', isCustom:true,
  },
];

(function registerLeanProteinRecipes() {
  if (typeof KANDY_RECIPES !== 'undefined') KANDY_RECIPES.push(...LEAN_PROTEIN_RECIPES);
  if (typeof AIRFRYER !== 'undefined') LEAN_PROTEIN_RECIPES.forEach(r => { if (r.airfryer) AIRFRYER[r.id] = r.airfryer; });
  if (typeof RECIPE_NUTRITION !== 'undefined') LEAN_PROTEIN_RECIPES.forEach(r => { RECIPE_NUTRITION[r.id] = r.nutrition; });
})();
