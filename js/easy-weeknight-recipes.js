// ─────────────────────────────────────────────────────────────
//  EASY WEEKNIGHT RECIPES — quick, low-effort meals pulled from reliable
//  recipe sites (RecipeTin Eats, Skinnytaste, Spend With Pennies, Well
//  Plated, Natasha's Kitchen, Minimalist Baker). Mostly dinners, plus a few
//  30-minute soups and make-ahead breakfasts and lunches.
//
//  Each recipe keeps its source link, with ingredients and method taken
//  from the recipe page's own structured data. Most are 30 minutes or
//  less; the sheet-pan roasts and baked oatmeal run longer but are hands-off.
//
//  Regular family recipes (no 'fodmap' tag) — they show under the
//  🍽️ Family filter. Each fodmapNote names what makes it high-FODMAP as
//  written and how to adapt it for a low-FODMAP plate. Anything that is
//  low-FODMAP as written goes in KANDY_RECIPES (kandy-recipes.js) instead.
//
//  Budget Bytes was the first choice but blocks automated fetches; clip
//  those with the "Send to Our Table" bookmarklet instead.
// ─────────────────────────────────────────────────────────────

const EASY_WEEKNIGHT_RECIPES = [
  {
    "id": "fam-ez-honey-mustard-chicken",
    "name": "Honey Mustard Chicken",
    "emoji": "🍯",
    "category": "dinner",
    "time": "17 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://www.recipetineats.com/honey-mustard-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "700 g / 1.4 lb",
        "item": "chicken tenderloin or chicken breast, cut into thick strips"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper"
      },
      {
        "qty": "2 tbsp",
        "item": "flour"
      },
      {
        "qty": "1 tsp",
        "item": "garlic powder"
      },
      {
        "qty": "1 tbsp",
        "item": "mayonnaise"
      },
      {
        "qty": "1 tsp",
        "item": "cornstarch / cornflour or 2 tsp flour"
      },
      {
        "qty": "1 1/2 tbsp + 1/2 tbsp",
        "item": "olive oil"
      },
      {
        "qty": "2 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "1 cup",
        "item": "chicken broth / stock, 250ml"
      },
      {
        "qty": "1/4 cup",
        "item": "Dijon mustard, 70g"
      },
      {
        "qty": "1/4 cup",
        "item": "honey, 85g"
      },
      {
        "qty": "1 - 2 tbsp",
        "item": "wholegrain mustard, adjust to taste"
      },
      {
        "qty": "2 sprigs",
        "item": "fresh thyme, or 1/2 tsp dried thyme"
      },
      {
        "qty": "to taste",
        "item": "Fresh parsley, finely chopped"
      }
    ],
    "steps": [
      "Sprinkle chicken with salt and pepper, then toss with Seasoning if using.",
      "Thickener: In a small bowl, mix together the mayonnaise and flour.",
      "Heat 1 1/2 tbsp oil in a skillet over medium high heat. Add chicken and cook for 2 minutes on each side or until golden. Remove onto a plate.",
      "Reduce heat to medium. Add remaining oil in the middle of the skillet and put garlic straight onto the puddle of oil. Sauté for 20 seconds or until golden (don't let it burn).",
      "Add chicken broth, bring to simmer, scraping the bottom of the fry pan.",
      "Whisk in Dijon Mustard and honey, then whisk in Thickener (make sure you scrape it all in).",
      "Add thyme and wholegrain mustard, if using.",
      "Cook for 1 - 2 minutes or until starting to thicken. Adjust salt and pepper to taste.",
      "Return chicken and any juices pooled on the plate into the sauce. Turn to coat and reheat through - about 1 1/2 minutes - or until sauce is thickened to your taste.",
      "Serve on mashed potato, garnished with parsley, with a simple side salad."
    ],
    "fodmapNote": "Not low-FODMAP as written — fresh garlic and garlic powder, honey, and wheat flour in the thickener. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use maple syrup in place of the honey and cornstarch instead of flour."
  },
  {
    "id": "fam-ez-sticky-baked-chicken-thighs",
    "name": "Sticky Baked Chicken Thighs",
    "emoji": "🍗",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "oven",
      "30-min"
    ],
    "source": "https://www.recipetineats.com/sticky-baked-chicken-thighs/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "700 g / 1.4 lb",
        "item": "chicken thighs, skinless boneless (5-7 pieces)"
      },
      {
        "qty": "1/4 cup",
        "item": "ketchup"
      },
      {
        "qty": "3 tbsp",
        "item": "brown sugar, lightly packed"
      },
      {
        "qty": "1.5 tbsp",
        "item": "soy sauce, all purpose or light (NOT dark)"
      },
      {
        "qty": "1 tbsp",
        "item": "apple cider vinegar"
      },
      {
        "qty": "1 tbsp",
        "item": "olive oil"
      },
      {
        "qty": "2 tsp",
        "item": "Worcestershire Sauce"
      },
      {
        "qty": "2 cloves",
        "item": "garlic, minced"
      }
    ],
    "steps": [
      "Preheat oven to 220°C/420°F (200°C fan).",
      "Pan - Use a pan large enough to fit the thighs lying flat (not bunched up/folded). Line pan with foil (you'll thank me later), place thighs in pan.",
      "Glaze 1 - Mix Glaze ingredients together. Spoon over about 2/3 of the Glaze on the surface of each (not underside), reserve rest.",
      "Bake 15 minutes, remove pan.",
      "Flick to grill/broiler on high, adjust shelf to be 20cm/8\" from heat source.",
      "Glaze 2 - Spoon pan juices over chicken. Then spoon/dab remaining Glaze onto chicken.",
      "Broil chicken for 8 to 10 minutes until surface is nicely caramelised.",
      "Rest - Remove and stand for a few minutes (uncovered) before serving with pan juices."
    ],
    "fodmapNote": "Not low-FODMAP as written — fresh garlic, and ketchup and Worcestershire sauce usually carry onion/garlic and high-fructose corn syrup. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Pick a low-FODMAP ketchup and keep the Worcestershire to the 2 tsp listed."
  },
  {
    "id": "fam-ez-sheet-pan-gnocchi-and-sausage-with-tomatoes-and-broccolini",
    "name": "Sheet Pan Gnocchi and Sausage with Tomatoes and Broccolini",
    "emoji": "🥘",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/sheet-pan-gnocchi-and-sausage-with-tomatoes-and-broccolini/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "12 ounces",
        "item": "cooked Italian chicken sausage, sliced into ½-inch thick rounds"
      },
      {
        "qty": "8 ounces",
        "item": "broccolini, cut into bite-size pieces"
      },
      {
        "qty": "2 cups",
        "item": "cherry tomatoes, multi color or red"
      },
      {
        "qty": "1 ½ cups",
        "item": "gnocchi, shelf stable"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil, extra virgin"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "¼ teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "1 teaspoon",
        "item": "Italian seasoning"
      },
      {
        "qty": "1 teaspoon",
        "item": "garlic powder"
      },
      {
        "qty": "1 teaspoon",
        "item": "onion powder"
      },
      {
        "qty": "to taste",
        "item": "Parmesan cheese, for serving"
      }
    ],
    "steps": [
      "Preheat the oven to 425° F and line a rimmed baking sheet with parchment paper.",
      "Add the sausage, broccolini, cherry tomatoes, and gnocchi to a mixing bowl. Drizzle with the olive oil, then season with the salt, pepper, Italian seasoning, garlic powder, and onion powder. Toss well to combine.",
      "Transfer the mixture to the prepared baking pan and spread into an even layer.",
      "Place the pan in the oven to roast for 20 minutes, stirring halfway through, until the gnocchi is tender and the tomatoes have softened and burst.",
      "Remove from the oven. Spoon the mixture into bowls and serve topped with parmesan cheese."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion powder and garlic powder, Italian chicken sausage (usually seasoned with garlic and onion), and wheat gnocchi. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Season with smoked paprika and Italian herbs instead of the powders, choose a plain sausage and gluten-free gnocchi, and keep broccolini to a modest serve."
  },
  {
    "id": "fam-ez-turkey-taco-skillet",
    "name": "Turkey Taco Skillet",
    "emoji": "🌮",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/turkey-taco-skillet/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 teaspoon",
        "item": "olive oil"
      },
      {
        "qty": "1",
        "item": "yellow onion, finely chopped"
      },
      {
        "qty": "1",
        "item": "jalapeno, seeds removed and diced"
      },
      {
        "qty": "1 lb",
        "item": "93% ground turkey"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper"
      },
      {
        "qty": "1 tbsp",
        "item": "chili powder"
      },
      {
        "qty": "1 tsp",
        "item": "smoked paprika"
      },
      {
        "qty": "1 tsp",
        "item": "ground cumin"
      },
      {
        "qty": "¼ tsp",
        "item": "cayenne"
      },
      {
        "qty": "3/4 cup",
        "item": "canned pinto beans, drained"
      },
      {
        "qty": "3/4 cup",
        "item": "corn kernels"
      },
      {
        "qty": "12 oz",
        "item": "jarred salsa, about 1 jar"
      },
      {
        "qty": "32",
        "item": "tortilla chips, about 4 oz"
      },
      {
        "qty": "1 cup",
        "item": "shredded reduce fat Mexican cheese blend"
      },
      {
        "qty": "2 tablespoons",
        "item": "chopped cilantro, for topping"
      },
      {
        "qty": "to taste",
        "item": "pickled red onions, for topping"
      },
      {
        "qty": "1/4 cup",
        "item": "chopped tomatoes, for topping"
      },
      {
        "qty": "to taste",
        "item": "Lime wedges"
      },
      {
        "qty": "to taste",
        "item": "guacamole, sour cream, avocado, optional for topping"
      }
    ],
    "steps": [
      "In a large skillet over medium heat, warm the olive oil. When heated, add the onion and jalapeño and sauté for 2 to 3 minutes.",
      "Add the ground turkey and season with salt and pepper. Cook the turkey until it is browned, crumbling the meat into small pieces as it cooks.",
      "Add the chili powder, smoked paprika, cumin, cayenne, pinto beans, corn and salsa. Mix well. Let the mixture cook for 3 minutes.",
      "Lightly crumble the chips over the top of the turkey, then sprinkle the cheese over the top of the chips.",
      "Cover the turkey skillet with a lid and let it cook for 1 to 2 minutes, or until the cheese melts or place it under the broiler 2 to 3 minutes.",
      "Remove the pan from the heat and top the turkey skillet with chopped cilantro, pickled red onions, chopped tomatoes, plus optional toppings like avocado, guacamole or sour cream, if desired and serve with lime wedges."
    ],
    "fodmapNote": "Not low-FODMAP as written — yellow onion, pinto beans, jarred salsa and pickled red onions (salsa and taco-style sauces usually contain onion and garlic). The cheddar-style cheese is fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use a low-FODMAP salsa and swap the pinto beans for about 1/4 cup drained canned lentils per serve."
  },
  {
    "id": "fam-ez-chicken-and-vegetable-stir-fry",
    "name": "Chicken and Vegetable Stir Fry",
    "emoji": "🥢",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/spring-stir-fried-chicken-with-sugar/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tbsp",
        "item": "low sodium soy sauce or GF tamari, or Coconut Aminos for W30"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh lime juice"
      },
      {
        "qty": "2 tbsp",
        "item": "water"
      },
      {
        "qty": "1 tsp",
        "item": "cornstarch or arrowroot"
      },
      {
        "qty": "1 lb",
        "item": "skinless, boneless chicken breast, sliced thin"
      },
      {
        "qty": "to taste",
        "item": "salt, to taste"
      },
      {
        "qty": "1 tbsp",
        "item": "canola or coconut oil"
      },
      {
        "qty": "2 tsp",
        "item": "fresh garlic, minced"
      },
      {
        "qty": "1 tsp",
        "item": "fresh ginger, grated"
      },
      {
        "qty": "1 cup",
        "item": "sugar snap peas"
      },
      {
        "qty": "1 cup",
        "item": "carrots, sliced diagonally"
      },
      {
        "qty": "to taste",
        "item": "scallions for garnish"
      }
    ],
    "steps": [
      "Combine soy sauce, lime juice, water and cornstarch in a small bowl, mix together and set aside.",
      "Season chicken lightly with salt. Heat a large wok over high heat.",
      "When the wok is very hot, add half of the oil, then add the chicken. Stir fry, stirring occasionally until the chicken is cooked through and browned, about 3-4 minutes.",
      "With a slotted spoon, remove the chicken and set aside. Reduce heat to medium.",
      "Add the remaining oil to the wok; add the garlic and ginger, stir for 20 seconds. Add the sugar snap peas and carrots, stirring over medium high heat until tender crisp, about 3-4 minutes.",
      "Return the chicken to the wok, add the soy sauce-lime mixture, mix well and cook another 30 seconds to one minute.",
      "Serve immediately and top with fresh scallions."
    ],
    "fodmapNote": "Close to low-FODMAP but not as written — fresh garlic. Sugar snap peas are moderate-FODMAP, so keep them to a small serve, and use only the green tops of the scallions. With garlic-infused oil in place of the minced garlic this one is low-FODMAP."
  },
  {
    "id": "fam-ez-sheet-pan-chicken-and-sweet-potatoes",
    "name": "Sheet Pan Chicken and Sweet Potatoes",
    "emoji": "🍠",
    "category": "dinner",
    "time": "35 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan"
    ],
    "source": "https://www.spendwithpennies.com/chicken-and-sweet-potatoes/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 medium",
        "item": "boneless skinless chicken breasts, about 6-7 ounces each"
      },
      {
        "qty": "3 tablespoons",
        "item": "olive oil, divided"
      },
      {
        "qty": "1 tablespoon",
        "item": "Cajun seasoning"
      },
      {
        "qty": "2 medium",
        "item": "sweet potatoes, cut into ¾-inch cubes"
      },
      {
        "qty": "1",
        "item": "red onion, cut into ½-inch wedges"
      },
      {
        "qty": "2 tablespoons",
        "item": "honey, or hot honey"
      },
      {
        "qty": "4 cloves",
        "item": "garlic, sliced"
      },
      {
        "qty": "¾ teaspoon",
        "item": "salt, more to taste"
      },
      {
        "qty": "¼ cup",
        "item": "pecans, optional"
      }
    ],
    "steps": [
      "Preheat oven to 425°F. Line a large rimmed baking pan with parchment if desired.",
      "Pound the chicken breast to an even thickness.",
      "In a large bowl, toss the chicken with 1 tablespoon of olive oil and Cajun seasoning. Arrange in the center of the baking sheet.",
      "In the same bowl, toss sweet potatoes, onion, garlic, remaining 2 tablespoons olive oil, honey, and salt. Arrange around the chicken.",
      "Roast for 15 minutes. Stir the vegetables and add the pecans if using. Roast for an additional 10 to 15 minutes or until the chicken reaches 165°F and the sweet potatoes are tender.",
      "Transfer the chicken to a cutting board and let rest for 5 minutes. While the chicken is resting, stir the vegetables into any juices on the pan.",
      "Thinly slice the chicken and serve."
    ],
    "fodmapNote": "Not low-FODMAP as written — red onion, garlic and honey, and store-bought Cajun seasoning usually contains onion and garlic powder. Sweet potato is low-FODMAP in a modest serve (about 1/2 cup) but moderate in larger amounts. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use maple syrup instead of honey and a Cajun blend without onion or garlic."
  },
  {
    "id": "fam-ez-one-pot-chicken-pasta",
    "name": "One Pot Chicken Pasta",
    "emoji": "🍝",
    "category": "dinner",
    "time": "22 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min"
    ],
    "source": "https://www.spendwithpennies.com/one-pot-chicken-pasta/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "boneless skinless chicken breasts, cut into bite-size pieces"
      },
      {
        "qty": "to taste",
        "item": "salt and black pepper"
      },
      {
        "qty": "1 tablespoon",
        "item": "olive oil"
      },
      {
        "qty": "½ medium",
        "item": "onion, diced"
      },
      {
        "qty": "2 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "3 cups",
        "item": "chicken broth, + ½ cup extra if needed"
      },
      {
        "qty": "14.5 ounces",
        "item": "canned diced tomatoes, drained, 1 can"
      },
      {
        "qty": "1 cup",
        "item": "heavy whipping cream"
      },
      {
        "qty": "1 tablespoon",
        "item": "chopped fresh parsley, or 1 teaspoon dried parsley"
      },
      {
        "qty": "1 teaspoon",
        "item": "Italian seasoning"
      },
      {
        "qty": "12 ounces",
        "item": "penne, or medium pasta"
      },
      {
        "qty": "½ cup",
        "item": "shredded Parmesan cheese, divided"
      },
      {
        "qty": "⅔ cup",
        "item": "shredded mozzarella cheese"
      }
    ],
    "steps": [
      "Season chicken with salt & pepper. Heat olive oil over medium heat and cook chicken until no pink remains. Set aside.",
      "Add onion and garlic to the pan. Cook until onion is tender, about 3 minutes.",
      "Add 3 cups broth, tomatoes, cream, parsley, and Italian seasoning and bring to a boil. Add pasta. Let simmer for about 15 minutes or until tender and thickened. If you need, add ½ cup broth till pasta is cooked. Mix in ¼ cup parmesan cheese.",
      "Add the chicken back to skillet, top with mozzarella cheese and remaining ¼ cup parmesan, then broil 2-3 minutes or until cheese is melted and golden."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, wheat penne and heavy cream (lactose). Parmesan and mozzarella are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns."
  },
  {
    "id": "fam-ez-garlic-butter-sheet-pan-shrimp",
    "name": "Garlic Butter Sheet Pan Shrimp",
    "emoji": "🍤",
    "category": "dinner",
    "time": "56 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan"
    ],
    "source": "https://www.spendwithpennies.com/garlic-butter-sheet-pan-shrimp/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 ½ pounds",
        "item": "baby potatoes, washed and cut"
      },
      {
        "qty": "1 ½ tablespoons",
        "item": "olive oil, divided"
      },
      {
        "qty": "1 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "1 pound",
        "item": "asparagus, washed and cut into 1\" pieces"
      },
      {
        "qty": "1 ½ pounds",
        "item": "jumbo shrimp, peeled and deveined"
      },
      {
        "qty": "½ teaspoon",
        "item": "dried basil"
      },
      {
        "qty": "1 tablespoon",
        "item": "chopped fresh parsley"
      },
      {
        "qty": "¼ cup",
        "item": "butter, melted"
      },
      {
        "qty": "1 clove",
        "item": "garlic, minced"
      },
      {
        "qty": "1 teaspoon",
        "item": "lemon zest"
      },
      {
        "qty": "¼ teaspoon",
        "item": "red pepper flakes"
      },
      {
        "qty": "to taste",
        "item": "salt and black pepper, to taste"
      }
    ],
    "steps": [
      "Preheat oven to 450°F.",
      "Toss potatoes with 1 tablespoon olive oil, oregano, salt & pepper. Place on a roasting pan and roast 20 minutes.",
      "Toss asparagus with 1 tablespoon olive, salt and pepper. Flip potatoes and add asparagus to the potatoes on the roasting pan. Roast 10 minutes (If asparagus is thin it can be added with the shrimp).",
      "Combine garlic butter ingredients. Toss half of the garlic butter mixture with the shrimp. Add shrimp to the pan and roast an additional 6-8 minutes or until shrimp is cooked.",
      "Remove from the oven and sprinkle basil and parsley over top.",
      "Serve with remaining melted garlic butter for dipping or drizzling."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, and asparagus is high-FODMAP. Shrimp and potatoes are fine. For low-FODMAP: use garlic-infused butter or oil instead of the minced garlic, and swap the asparagus for green beans or zucchini. Time includes roasting the potatoes first; hands-on work is short."
  },
  {
    "id": "fam-ez-roasted-sausage-and-potatoes",
    "name": "Roasted Sausage and Potatoes",
    "emoji": "🥔",
    "category": "dinner",
    "time": "1 hr",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan"
    ],
    "source": "https://www.spendwithpennies.com/roasted-sausage-and-potatoes/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "baby potatoes, or yukon gold or red potatoes, cut into 1\" pieces"
      },
      {
        "qty": "1 pound",
        "item": "smoked sausage, cut in ½\" slices"
      },
      {
        "qty": "1",
        "item": "red bell pepper, or green, diced"
      },
      {
        "qty": "½ medium",
        "item": "zucchini, cut in ½\" slices"
      },
      {
        "qty": "½",
        "item": "red onion, cut in ½\" pieces"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil"
      },
      {
        "qty": "1 ½ teaspoons",
        "item": "red wine vinegar"
      },
      {
        "qty": "½ teaspoon",
        "item": "Dijon mustard"
      },
      {
        "qty": "½ teaspoon",
        "item": "dried basil"
      },
      {
        "qty": "½ teaspoon",
        "item": "salt, or to taste"
      },
      {
        "qty": "¼ teaspoon",
        "item": "red pepper flakes"
      },
      {
        "qty": "¼ teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "1 clove",
        "item": "garlic, minced"
      }
    ],
    "steps": [
      "Preheat oven to 425°F.",
      "Combine the dressing ingredients in a small bowl.",
      "Toss potatoes with 1 tablespoon of the dressing mix.",
      "Bake 20 minutes. Meanwhile, toss remaining ingredients with the remaining dressing.",
      "Add to the pan and mix well. Increase heat to 450°F and roast an additional 15 to 20 minutes or until vegetables are tender. Broil for 2 minutes or until golden."
    ],
    "fodmapNote": "Not low-FODMAP as written — red onion and garlic, and most smoked sausage is seasoned with garlic. Potatoes, bell pepper and zucchini are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Look for a sausage without onion or garlic in the ingredients. Mostly hands-off oven time."
  },
  {
    "id": "fam-ez-sheet-pan-chicken-fajitas",
    "name": "Sheet Pan Chicken Fajitas (Well Plated)",
    "emoji": "🌯",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan",
      "30-min"
    ],
    "source": "https://www.wellplated.com/sheet-pan-chicken-fajitas/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 small/medium",
        "item": "boneless, skinless chicken breasts, lightly pounded to an even thickness (about 1 1/4 pounds)"
      },
      {
        "qty": "2 large",
        "item": "bell peppers, red, yellow, green, or orange, seeded and sliced into ½-inch strips"
      },
      {
        "qty": "1",
        "item": "red onion, halved and sliced into ½-inch strips"
      },
      {
        "qty": "2 small",
        "item": "limes"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "chili powder"
      },
      {
        "qty": "2 teaspoons",
        "item": "garlic powder"
      },
      {
        "qty": "1 ½ teaspoons",
        "item": "ground cumin"
      },
      {
        "qty": "1 ½ teaspoons",
        "item": "kosher salt"
      },
      {
        "qty": "1 teaspoon",
        "item": "onion powder"
      },
      {
        "qty": "⅛ to ¼ teaspoon",
        "item": "cayenne pepper, optional"
      },
      {
        "qty": "to taste",
        "item": "Flour or corn tortillas"
      },
      {
        "qty": "to taste",
        "item": "Sour cream or plain Greek yogurt"
      },
      {
        "qty": "to taste",
        "item": "Shredded cheese"
      },
      {
        "qty": "to taste",
        "item": "Diced avocado or guacamole"
      },
      {
        "qty": "to taste",
        "item": "Fresh cilantro"
      }
    ],
    "steps": [
      "Preheat your oven to 425°F. Lay the chicken breasts on a large work surface and cover with plastic wrap or parchment to keep things tidy if you like. With a mallet (or your fist) gently pound the breasts into an even thickness so they're around ½- to ¾-inch thick.",
      "Lay the sliced bell peppers and red onion on one side of the baking sheet and the pounded chicken breasts on the other.",
      "Juice one of the limes over the chicken and the other lime over the vegetables.",
      "Drizzle the vegetables with 1 tablespoon of the olive oil and the chicken with the other.",
      "In a small bowl, stir together the chili powder, garlic powder, cumin, salt, onion powder, and cayenne (if using). Sprinkle evenly over the chicken and veggies. Toss until everything is evenly coated, rubbing the chicken on both sides with oil and spices.",
      "If the pan is very crowded (which, unless you are using an oversize pan, it probably will be), move about two-thirds of the vegetables over to a second sheet pan. Spread the vegetables into an even layer and ensure the chicken breasts aren't touching.",
      "Roast the chicken and vegetables for 15 to 25 minutes, until chicken is cooked through and registers 165°F on an instant read thermometer (the timing will vary based on how thin you've pounded the chicken). With tongs, toss the vegetables once halfway through.",
      "During the last 5 minutes of baking, wrap the tortillas in foil and pop them into the oven with the chicken to warm.",
      "Let the chicken rest a few minutes, then cut into thin slices. Serve the filling inside the tortillas with fresh cilantro and any desired toppings."
    ],
    "fodmapNote": "Not low-FODMAP as written — red onion, onion powder and garlic powder, flour tortillas (wheat) and sour cream (lactose). For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use corn tortillas and lactose-free sour cream. A different recipe from the Synthesis \"Sheet Pan Chicken Fajitas\" already in the cookbook, so both are kept."
  },
  {
    "id": "fam-ez-garlic-salmon-with-lemon-butter-and-veggies",
    "name": "Garlic Salmon with Lemon Butter and Veggies",
    "emoji": "🐟",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan",
      "30-min"
    ],
    "source": "https://www.wellplated.com/garlic-salmon/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 (6 oz)",
        "item": "skin-on salmon fillets"
      },
      {
        "qty": "4 tablespoons",
        "item": "softened butter, or canola oil butter spread"
      },
      {
        "qty": "4 large",
        "item": "cloves garlic, chopped (about 4 teaspoons)"
      },
      {
        "qty": "to taste",
        "item": "Zest and juice of 1 large lemon, divided (about 1 tablespoon zest and 1/4 cup juice)"
      },
      {
        "qty": "1/4 cup",
        "item": "chopped fresh parsley, divided"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "freshly ground black pepper, divided, plus additional to taste"
      },
      {
        "qty": "to taste",
        "item": "Additional lemon slices, optional"
      },
      {
        "qty": "1 pound",
        "item": "fresh green beans, trimmed"
      },
      {
        "qty": "2 pints",
        "item": "cherry tomatoes, or grape tomatoes, left whole"
      },
      {
        "qty": "1 tablespoon",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "kosher salt, plus additional to taste"
      }
    ],
    "steps": [
      "Place a rack in the center of your oven and preheat the oven to 400 degrees F. Generously coat a large rimmed baking sheet with nonstick spray. Arrange the salmon fillets in the center of the sheet.",
      "In a small bowl with a fork, combine the softened butter, garlic, lemon zest, 2 tablespoons chopped fresh parsley, and 1/4 teaspoon black pepper. Mash to create a paste, then rub on the salmon fillets. If desired, arrange extra lemon slices on top.",
      "Place the green beans and tomatoes in a large bowl. Drizzle with olive oil and sprinkle with 1/2 teaspoon kosher salt and the remaining 1/4 teaspoon black pepper. Toss to coat, then arrange around the salmon. Drizzle the lemon juice over the top of the salmon and vegetables.",
      "Place the sheet pan in the oven and cook until the fish flakes easily with a fork and reaches an internal temperature of 135 to 140 degrees F, about 16 to 20 minutes.* Let rest 3 minutes. Sprinkle with remaining 2 tablespoons parsley, then serve, sprinkled with additional salt and/or pepper to taste."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic only. Salmon, green beans and cherry tomatoes are all low-FODMAP in a normal serve. Use garlic-infused butter or oil in place of the chopped garlic and this one is low-FODMAP."
  },
  {
    "id": "fam-ez-sloppy-joes",
    "name": "Sloppy Joes",
    "emoji": "🥪",
    "category": "dinner",
    "time": "30 min",
    "serves": 5,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://natashaskitchen.com/sloppy-joe-recipe/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "15 oz",
        "item": "can tomato sauce"
      },
      {
        "qty": "1/4 cup",
        "item": "ketchup"
      },
      {
        "qty": "1 Tbsp",
        "item": "Worcestershire sauce"
      },
      {
        "qty": "1 1/2 tsp",
        "item": "yellow mustard, or to taste"
      },
      {
        "qty": "2-3 tsp",
        "item": "brown sugar, or to taste"
      },
      {
        "qty": "1 Tbsp",
        "item": "extra light olive oil, or any high-heat cooking oil"
      },
      {
        "qty": "1 lb",
        "item": "lean ground beef, 85%-90% lean"
      },
      {
        "qty": "½ tsp",
        "item": "fine sea salt, or to taste"
      },
      {
        "qty": "¼ tsp",
        "item": "freshly ground black pepper, or to taste"
      },
      {
        "qty": "1 small",
        "item": "onion, finely chopped"
      },
      {
        "qty": "1/2 small",
        "item": "green bell pepper, seeded and finely diced, or use 1/2 cup grated carrot"
      },
      {
        "qty": "3",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "5",
        "item": "hamburger buns, toasted if desired"
      }
    ],
    "steps": [
      "Make the Sauce - In a medium bowl, combine the tomato sauce, ketchup, Worcestershire sauce, mustard, and brown sugar, and set it aside.",
      "Cook the Beef - Place a large skillet or dutch oven over medium/high heat. Add olive oil and ground beef. Saute the beef for about 5 minutes until cooked through and no longer pink, breaking it up with a spatula. If you see extra fat on the bottom, tilt the pan and spoon it out or blot it up with paper towels. Season with salt and pepper.",
      "Add vegetables - Stir in the diced peppers and onion. Cook another 5 minutes until the veggies are tender and beef is browned. Add garlic and saute 30 seconds until fragrant, stirring constantly.",
      "Add the sauce and bring to a light boil. Reduce heat to low and simmer uncovered for about 10-15 minutes or until thickened to your liking. Adjust the seasoning taste* and add water if you prefer a looser consistency. Serve on toasted buns for Sloppy Joe Sandwiches."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, ketchup and Worcestershire sauce (onion/garlic and high-fructose corn syrup), and wheat hamburger buns. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use the grated-carrot option in place of the green pepper if peppers bother you, a low-FODMAP ketchup, and gluten-free buns."
  },
  {
    "id": "fam-ez-chicken-pesto-pasta",
    "name": "Chicken Pesto Pasta",
    "emoji": "🍝",
    "category": "dinner",
    "time": "30 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min"
    ],
    "source": "https://natashaskitchen.com/chicken-pesto-pasta/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 lb",
        "item": "chicken breasts, trimmed"
      },
      {
        "qty": "1 tsp",
        "item": "salt, divided"
      },
      {
        "qty": "1/4 tsp",
        "item": "black pepper"
      },
      {
        "qty": "1 lb",
        "item": "asparagus, ends trimmed and cut into 2\" pieces"
      },
      {
        "qty": "2 cups",
        "item": "heavy whipping cream"
      },
      {
        "qty": "4 Tbsp",
        "item": "pesto sauce"
      },
      {
        "qty": "4 Tbsp",
        "item": "olive oil"
      },
      {
        "qty": "12 oz",
        "item": "fettuccini pasta, or linguine"
      }
    ],
    "steps": [
      "Cook pasta in a large pot of salted boiling water* according to package instructions to your desired doneness. While pasta is cooking, proceed with the recipe then add drained cooked pasta to the sauce in step 5.",
      "Cook Chicken - Cut chicken breasts in half lengthwise and season all sides with 1/2 tsp salt and 1/4 tsp black pepper. Heat a large, deep skillet over medium heat with 2 Tbsp olive oil. When oil is hot, add chicken in a single layer and saute until fully cooked through (3 min per side). Remove from pan and rest 5 minutes, then slice into bite-sized strips.",
      "Saute Asparagus - Add 2 Tbsp olive oil to the same pan with asparagus pieces. Sautee stirring occasionally for 2-3 minutes or until crisp tender.",
      "Make the Sauce - Add 2 cups heavy whipping cream, bring to a simmer and cook 3 minutes, stirring occasionally. Stir in 4 Tbsp pesto then add chicken breasts and cook 2 minutes. Season sauce with 1/2 tsp salt or to taste.",
      "Combine and Serve - Add cooked pasta, stirring to coat noodles in sauce. Remove from heat and serve right away. Garnish with basil or parsley if desired."
    ],
    "fodmapNote": "Not low-FODMAP as written — asparagus is high-FODMAP, store-bought pesto contains garlic, heavy cream (lactose) and wheat fettuccine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Swap the asparagus for green beans or zucchini and use a garlic-free pesto."
  },
  {
    "id": "fam-ez-30-minute-coconut-curry",
    "name": "30-Minute Coconut Curry",
    "emoji": "🍛",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "vegan"
    ],
    "source": "https://minimalistbaker.com/30-minute-coconut-curry/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 Tbsp",
        "item": "coconut or olive oil"
      },
      {
        "qty": "1 small",
        "item": "onion, diced"
      },
      {
        "qty": "4 cloves",
        "item": "garlic, minced (about 2 Tbsp)"
      },
      {
        "qty": "1 Tbsp",
        "item": "fresh grated ginger"
      },
      {
        "qty": "1/2 cup",
        "item": "broccoli florets, diced, or green bell pepper"
      },
      {
        "qty": "1/2 cup",
        "item": "diced carrots"
      },
      {
        "qty": "1/4 cup",
        "item": "diced tomato"
      },
      {
        "qty": "1/3 cup",
        "item": "snow peas, loosely cut"
      },
      {
        "qty": "1 Tbsp",
        "item": "curry powder"
      },
      {
        "qty": "1 pinch",
        "item": "cayenne, optional"
      },
      {
        "qty": "2 (14 ounce) cans",
        "item": "light coconut milk, sub full-fat for richer texture"
      },
      {
        "qty": "1 cup",
        "item": "veggie broth, DIY or store-bought"
      },
      {
        "qty": "to taste",
        "item": "Sea salt and black pepper, to taste"
      },
      {
        "qty": "1 (14 ounce) can",
        "item": "light coconut milk"
      },
      {
        "qty": "1 cup",
        "item": "white quinoa, rinsed"
      },
      {
        "qty": "1 Tbsp",
        "item": "agave nectar, optional"
      },
      {
        "qty": "to taste",
        "item": "Fresh lemon juice"
      },
      {
        "qty": "to taste",
        "item": "Cilantro, mint, and/or basil"
      },
      {
        "qty": "to taste",
        "item": "Red pepper flake"
      }
    ],
    "steps": [
      "If serving with coconut quinoa, begin by washing thoroughly in a fine mesh strainer. Add to a medium saucepan over medium heat and toast for 3 minutes. Add light coconut milk and 1/2 cup water (amount as original recipe is written // adjust if altering batch size). Bring to a boil, then reduce heat to simmer, cover and cook for 15 minutes or until the quinoa is light, fluffy and the liquid is absorbed. Set aside until serving.",
      "In the meantime, heat a large saucepan or pot to medium heat and add coconut oil. Add the onion, garlic, ginger, carrot, broccoli and a pinch each salt and pepper and stir. Cook, stirring frequently, until softened – about 5 minutes.",
      "Add curry powder, cayenne (or chili pepper), veggie stock, coconut milk, another healthy pinch of salt and stir. Bring to a simmer then reduce heat slightly and continue cooking for 10-15 minutes.",
      "Add the snow peas and tomatoes in the last 5 minutes so they don’t overcook.",
      "Taste and adjust seasonings as needed. I added another pinch or two of salt.",
      "Serve over coconut quinoa (see other options below in notes) and garnish with fresh lemon juice and herbs."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic and the optional agave. Coconut milk is low-FODMAP in a small serve but moderate in larger amounts, and snow peas are moderate. Broccoli florets, carrot and quinoa are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Leave out the agave or use maple syrup."
  },
  {
    "id": "fam-ez-chicken-scampi",
    "name": "Chicken Scampi (Skinnytaste)",
    "emoji": "🍋",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.skinnytaste.com/chicken-scampi/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "8 ounces",
        "item": "whole wheat angel hair pasta, or your favorite plain or gluten-free pasta"
      },
      {
        "qty": "24 ounces",
        "item": "chicken breasts, from 3 boneless skinless breasts"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "to taste",
        "item": "Freshly ground black pepper, to taste"
      },
      {
        "qty": "to taste",
        "item": "olive oil spray"
      },
      {
        "qty": "2 tablespoons",
        "item": "butter, divided"
      },
      {
        "qty": "4",
        "item": "garlic cloves, thinly sliced"
      },
      {
        "qty": "¾ cup",
        "item": "dry white wine,  or broth"
      },
      {
        "qty": "⅛ teaspoon",
        "item": "crushed red pepper flakes, or more to taste"
      },
      {
        "qty": "1 cup",
        "item": "cherry tomatoes, or grape tomatoes, halved"
      },
      {
        "qty": "2 tablespoons",
        "item": "freshly squeezed lemon juice"
      },
      {
        "qty": "2 cups",
        "item": "baby spinach"
      },
      {
        "qty": "3 tablespoons",
        "item": "chopped parsley, plus more for garnish"
      }
    ],
    "steps": [
      "Bring a large pot of salted water to a boil.",
      "Cut chicken breasts into small ½ inch cubes. Season the chicken on both sides with 1 teaspoon of kosher salt, and ¼ teaspoon black pepper to taste.",
      "Heat a very large skillet over high heat. When the pan is hot, spray the skillet with oil and add half the chicken and cook until browned on all sides and no longer pink inside, 2 minutes. Transfer to a plate and repeat with remaining chicken. Set aside and reduce heat.",
      "Add ½ tablespoon of the butter to the skillet and melt, add the garlic and saute until fragrant, about 1 minute. Add the white wine or broth, crushed red pepper flakes and remaining ¼ teaspoon of salt. Cook, scraping the bottom of the pan, until reduced by half, about 2 minutes. Add the tomatoes and let them cook 1 minute, to soften.",
      "Add the remaining 1 ½ tablespoons butter and melt, add the lemon juice, remove from the heat.",
      "Add the pasta to the boiling water and cook according to package directions for al dente, reserve ½ cup water. Drain the pasta and toss with the chicken, add the spinach and cook 1 minute tossing with the sauce adding some of the reserved pasta water if needed. Finish with fresh parsley and serve with plenty of grated Parmesan cheese."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic and whole wheat pasta. Spinach, cherry tomatoes, lemon and white wine are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Two other Chicken Scampi recipes are already in the cookbook (Cooking Classy and Karrie's), so this one carries the source name."
  },
  {
    "id": "fam-ez-creamy-chicken-pasta-with-sun-dried-tomato-and-bacon",
    "name": "Creamy Chicken Pasta with Sun-Dried Tomato and Bacon",
    "emoji": "🍝",
    "category": "dinner",
    "time": "20 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min"
    ],
    "source": "https://www.recipetineats.com/chicken-pasta-recipe/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "300 g / 10 oz",
        "item": "fettuccine"
      },
      {
        "qty": "30 g (2 tbsp)",
        "item": "butter, separated"
      },
      {
        "qty": "2",
        "item": "chicken breasts, cut in half horizontally"
      },
      {
        "qty": "1/2 tsp",
        "item": "each salt and pepper"
      },
      {
        "qty": "2",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1/2 cup",
        "item": "dry white wine, sub more chicken broth"
      },
      {
        "qty": "1/2 cup",
        "item": "chicken stock / broth, low sodium"
      },
      {
        "qty": "1 1/4 cups",
        "item": "heavy cream (thickened cream), or any full-fat pourable cream"
      },
      {
        "qty": "3/4 cup (75 g)",
        "item": "parmesan, finely shredded, tightly packed"
      },
      {
        "qty": "70 g / 2.5 oz",
        "item": "baby spinach"
      },
      {
        "qty": "100 g / 3 oz",
        "item": "sun-dried tomato strips"
      },
      {
        "qty": "120 g / 4 oz",
        "item": "bacon, cooked and crumbled"
      },
      {
        "qty": "to taste",
        "item": "More parmesan, for serving"
      },
      {
        "qty": "to taste",
        "item": "Parsley, for garnish (optional)"
      }
    ],
    "steps": [
      "Cook pasta in a large pot of salted boiling water for time per packet minus 1 1/2 minutes. (While the pasta is cooking, start the sauce)",
      "Reserve water then drain - Just before draining, scoop out a mugful of pasta cooking water. Then drain pasta.",
      "Sprinkle both sides of chicken with salt and pepper.",
      "Cook - Melt half the butter in a large skillet over high heat. Add chicken and cook for 2 minutes on each side until deep golden.",
      "Shred - Remove chicken onto plate, rest for a few minutes then shred with 2 forks (do this while the sauce is simmering).",
      "Reduce heat to medium high. In the same skillet, add remaining butter and garlic.",
      "Garlic and wine - Cook garlic for 30 seconds until golden, then add wine.",
      "Make creamy sauce - Simmer rapidly, stirring to scrape the brown bits off the bottom of the pan. Once mostly evaporated, add chicken broth, cream, parmesan and sun dried tomato.",
      "Simmer on medium for 3 - 5 minutes, stirring leisurely, until it reduces and thickens. It will be thinner than you expect, don't worry, it thickens in the next step!",
      "Add spinach, chicken and cooked pasta into the sauce.",
      "Toss for 1 1/2 - 2 minutes on the stove, until sauce thickens and coats the pasta strands instead of being pooled in the base of the pan (see VIDEO). If it gets too thick, add a slosh of the reserved pasta cooking water to loosen (the starch in the water helps make the sauce thicken and stay creamy).",
      "Serve immediately with parmesan, crumbled bacon and parsley (if desired)."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, wheat fettuccine and heavy cream (lactose). Sun-dried tomatoes are fine in a small serve but moderate in larger amounts. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns."
  },
  {
    "id": "fam-ez-beef-and-broccoli",
    "name": "Beef and Broccoli",
    "emoji": "🥦",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://www.spendwithpennies.com/beef-and-broccoli/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "flank steak, or sirloin, flat iron, or skirt steak"
      },
      {
        "qty": "1 tablespoon",
        "item": "vegetable oil, more as needed"
      },
      {
        "qty": "4 to 6 cups",
        "item": "broccoli florets, bite-sized"
      },
      {
        "qty": "3 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "1½ teaspoons",
        "item": "ginger paste, or fresh minced ginger"
      },
      {
        "qty": "2",
        "item": "green onions, thinly sliced, whites and greens separated"
      },
      {
        "qty": "to taste",
        "item": "sesame seeds, optional"
      },
      {
        "qty": "¾ cup",
        "item": "water"
      },
      {
        "qty": "½ cup",
        "item": "less sodium soy sauce"
      },
      {
        "qty": "⅓ cup",
        "item": "brown sugar"
      },
      {
        "qty": "2½ tablespoons",
        "item": "cornstarch"
      },
      {
        "qty": "2 teaspoons",
        "item": "toasted sesame oil"
      },
      {
        "qty": "¾ teaspoon",
        "item": "red pepper flakes"
      }
    ],
    "steps": [
      "Slice the steak very thinly across the grain.",
      "For the sauce, in a small bowl, whisk together water, soy sauce, brown sugar, cornstarch, sesame oil, and chili flakes. Set aside.",
      "Heat 1 tablespoon oil in a large skillet or wok over medium-high heat. Add half of the beef and cook until browned on both sides. Transfer to a plate and repeat with remaining beef.",
      "Add the broccoli and cook for 3 to 4 minutes, stirring frequently, until it turns bright green.",
      "Stir in the garlic, ginger, and the white parts of the green onions. Cook until fragrant, about 1 minute.",
      "Whisk the sauce again and pour it into the skillet and stir well. Bring to a simmer and cook until slightly thickened and the broccoli is tender, about 3 to 4 minutes.",
      "Return the beef and any juices to the skillet. Stir until the beef and broccoli are evenly coated and heated through.",
      "Garnish with the green parts of the onions and sesame seeds, if using, and serve hot over rice."
    ],
    "fodmapNote": "Close to low-FODMAP but not as written — garlic, and the white parts of the green onions. Soy sauce, brown sugar, ginger and broccoli florets (about 3/4 cup per serve) are fine. Use garlic-infused oil and only the green tops of the green onions and this one is low-FODMAP."
  },
  {
    "id": "fam-ez-chicken-and-orzo",
    "name": "Chicken and Orzo",
    "emoji": "🍲",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min"
    ],
    "source": "https://www.wellplated.com/chicken-and-orzo/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoons",
        "item": "extra virgin olive oil"
      },
      {
        "qty": "1 ½ pounds",
        "item": "boneless, skinless chicken breasts or thighs, cut into 1-inch pieces"
      },
      {
        "qty": "2 teaspoons",
        "item": "Italian seasoning, divided"
      },
      {
        "qty": "2 teaspoons",
        "item": "paprika, divided"
      },
      {
        "qty": "1 ¼ teaspoons",
        "item": "kosher salt, divided"
      },
      {
        "qty": "1",
        "item": "shallot, diced"
      },
      {
        "qty": "6 cloves",
        "item": "garlic, minced, about 2 tablespoons"
      },
      {
        "qty": "½ teaspoon",
        "item": "ground black pepper"
      },
      {
        "qty": "8 ounces",
        "item": "orzo pasta, about 1 ¼ cups"
      },
      {
        "qty": "1 pint",
        "item": "cherry tomatoes"
      },
      {
        "qty": "3 to 4 cups",
        "item": "low sodium chicken broth"
      },
      {
        "qty": "3 ounces",
        "item": "baby spinach, coarsely chopped (about 3 cups)"
      },
      {
        "qty": "¼ teaspoon",
        "item": "red pepper flakes"
      },
      {
        "qty": "¾ cup",
        "item": "freshly grated Parmesan cheese, plus additional for serving"
      },
      {
        "qty": "¼ cup",
        "item": "loosely packed fresh basil leaves, thinly sliced, divided"
      }
    ],
    "steps": [
      "Heat a deep skillet or Dutch oven with a tight-fitting lid over medium-high heat. Add 1 tablespoon oil.",
      "Once the oil is hot, add in the chicken, 1 teaspoon Italian seasoning, 1 teaspoon paprika, and 1/2 teaspoon salt. Saute, stirring occasionally, until the chicken is golden on all sides and cooked through, 4 to 6 minutes. Remove to a plate.",
      "Reduce the heat to low. Add 1 tablespoon oil and the shallot. Cook, stirring often, until the shallot is softened, about 3 minutes. Add the garlic, black pepper, and the remaining 1 teaspoon Italian seasoning, 1 teaspoon paprika, and 3/4 teaspoon kosher salt. Cook and stir for 30 seconds, until the garlic is fragrant.",
      "Stir in the orzo and tomato. Cook 1 minute, stirring constantly, to coating the orzo with the oil and spices and toast it slightly.",
      "Stir in the broth. Increase the heat to bring it to a gentle boil, stirring very frequently with a wooden spoon and scraping the spoon along the bottom of the pot to prevent the orzo from sticking. Cover the pot and reduce the heat to medium. Cook the orzo, lifting the lid occasionally to stir and run the spoon along the bottom to prevent sticking, until most of the liquid is absorbed and the orzo is al dente, 12 to 14 minutes. During the last several minutes, scrape along the bottom very frequently. When the lid is on, you should hear the water boiling steadily underneath it (but you don't want it boiling so hard, you start to wonder if the lid is going to lift off). If the orzo looks dry at any point, add several splashes of broth as needed to loosen it.",
      "Stir in the Parmesan, then the spinach, red pepper flakes, half of the basil, and the reserved chicken. Continue stirring until the spinach has just wilted, about 1 minute. Taste and season with additional salt, pepper, and red pepper flakes as desired (I add another pinch or two of salt; the amount you need will vary based on your chicken broth). Serve hot, sprinkled with remaining basil and additional Parmesan."
    ],
    "fodmapNote": "Not low-FODMAP as written — shallot, six cloves of garlic and wheat orzo. Cherry tomatoes, spinach, basil and Parmesan are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. Use gluten-free orzo or a short gluten-free pasta."
  },
  {
    "id": "fam-ez-ground-beef-tacos",
    "name": "Ground Beef Tacos (Natasha's Kitchen)",
    "emoji": "🌮",
    "category": "dinner",
    "time": "25 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min"
    ],
    "source": "https://natashaskitchen.com/ground-beef-tacos/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 lb",
        "item": "ground beef, preferably 85/15"
      },
      {
        "qty": "1 small",
        "item": "yellow onion, or white onion, finely diced"
      },
      {
        "qty": "2",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1 Tbsp",
        "item": "tomato paste"
      },
      {
        "qty": "1/2 cup",
        "item": "water, or broth"
      },
      {
        "qty": "3 Tbsp",
        "item": "taco seasoning, homemade or store-bought"
      },
      {
        "qty": "8",
        "item": "taco shells or small tortillas"
      },
      {
        "qty": "to taste",
        "item": "shredded lettuce"
      },
      {
        "qty": "to taste",
        "item": "diced tomatoes or pico de gallo, and jalapenos for spice"
      },
      {
        "qty": "to taste",
        "item": "shredded cheddar, or Mexican blend cheese"
      },
      {
        "qty": "to taste",
        "item": "guacamole,  or sliced avocado"
      },
      {
        "qty": "to taste",
        "item": "extras: hot sauce, sour cream, cilantro, and lime wedges"
      }
    ],
    "steps": [
      "Make taco seasoning: If making your own taco seasoning, stir together all of your seasoning ingredients in a small bowl. If using store-bought, measure out 3 Tablespoons.",
      "Brown beef: Heat a large skillet over medium-high heat. Add the ground beef and cook, breaking it up with a spatula, until mostly browned, about 4 minutes.",
      "Add onion & garlic: Stir in the diced onion and continue cooking for 3 to 4 minutes, until the onion is softened and the beef is fully cooked. Stir in the minced garlic and cook for 30 seconds, until fragrant. If there is a lot of grease in the pan, carefully spoon off most of it, leaving about 1 tablespoon for flavor.",
      "Add seasoning and tomato paste: Add the 3 Tbsp taco seasoning and 1 Tbsp tomato paste. Stir well and cook for 1 minute, until the beef is evenly coated.",
      "Add water - Add 1/2 cup water and stir to combine. Reduce the heat to medium-low and simmer uncovered for 3-4 minutes, stirring occasionally, until the mixture is juicy and lightly saucy. It should not look dry, but there should not be excess liquid in the pan.",
      "Warm the shells: Warm your taco shells or tortillas*, or make your own Hard Taco Shells. Fill each shell with taco meat and add your favorite toppings."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, and taco seasoning (store-bought blends contain onion and garlic powder; her homemade blend is in the recipe). Corn shells are fine; flour tortillas are wheat. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free cream or a hard cheese, and choose gluten-free pasta, tortillas or buns. A different recipe from the \"Ground Beef Tacos\" already in the cookbook, so this one carries the source name."
  },
  {
    "id": "fam-ez-white-bean-soup",
    "name": "White Bean Soup",
    "emoji": "🍲",
    "category": "lunch",
    "time": "28 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "soup"
    ],
    "source": "https://www.spendwithpennies.com/white-bean-soup/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "olive oil"
      },
      {
        "qty": "1 small",
        "item": "onion, chopped"
      },
      {
        "qty": "1",
        "item": "carrot, sliced"
      },
      {
        "qty": "2",
        "item": "ribs celery, sliced"
      },
      {
        "qty": "15 ounces",
        "item": "canned cannellini beans, 1 can, or navy beans, drained and rinsed"
      },
      {
        "qty": "4 cups",
        "item": "chicken broth, low sodium"
      },
      {
        "qty": "1 teaspoon",
        "item": "Italian seasoning"
      },
      {
        "qty": "1 cup",
        "item": "water, or as needed"
      },
      {
        "qty": "1 cup",
        "item": "rotini, fusilli or penne, uncooked"
      },
      {
        "qty": "⅔ cup",
        "item": "chopped kale"
      },
      {
        "qty": "1 tablespoon",
        "item": "pesto, optional"
      },
      {
        "qty": "2 tablespoons",
        "item": "shredded Parmesan cheese"
      }
    ],
    "steps": [
      "Cook onion in olive oil until tender. Add carrot, celery, beans, seasoning, broth, and water.",
      "Bring to a boil, reduce heat and simmer 10 minutes.",
      "Add kale and pasta and simmer an additional 8-10 minutes or just until pasta is tender.",
      "If using, stir in 1 tablespoon pesto. Ladle into serving bowls and top with parmesan cheese."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, a full can of cannellini beans, two ribs of celery and wheat pasta. Carrot and kale are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Keep beans to about 1/4 cup drained per serve and celery to a small amount."
  },
  {
    "id": "fam-ez-chicken-tortilla-soup",
    "name": "Chicken Tortilla Soup (Spend With Pennies)",
    "emoji": "🍲",
    "category": "lunch",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "soup"
    ],
    "source": "https://www.spendwithpennies.com/chicken-tortilla-soup/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "olive oil"
      },
      {
        "qty": "1",
        "item": "yellow onion, chopped"
      },
      {
        "qty": "3 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "1",
        "item": "jalapeño, seeded and diced"
      },
      {
        "qty": "3 cups",
        "item": "chicken broth"
      },
      {
        "qty": "1 (15 ounce) can",
        "item": "canned black beans, drained and rinsed"
      },
      {
        "qty": "14.5 ounces",
        "item": "crushed tomatoes"
      },
      {
        "qty": "1 (10 ounce) can",
        "item": "canned diced tomatoes with chilies, with juices, such as Rotel"
      },
      {
        "qty": "1 cup",
        "item": "corn kernels, drained if canned"
      },
      {
        "qty": "1",
        "item": "lime, juiced"
      },
      {
        "qty": "¼ cup",
        "item": "chopped fresh cilantro"
      },
      {
        "qty": "1 teaspoon",
        "item": "cumin"
      },
      {
        "qty": "1 teaspoon",
        "item": "chili powder"
      },
      {
        "qty": "2",
        "item": "boneless skinless chicken breasts, about 6 ounces each"
      },
      {
        "qty": "1",
        "item": "avocado, sliced, for garnish"
      },
      {
        "qty": "6 small",
        "item": "corn tortillas, cut into ¼-inch strips"
      },
      {
        "qty": "¼ cup",
        "item": "vegetable oil"
      },
      {
        "qty": "to taste",
        "item": "salt"
      }
    ],
    "steps": [
      "Cut the tortillas into ¼-inch strips. In a small pan, heat ¼ cup of vegetable oil over medium-high heat.",
      "Add the tortillas, in small batches to the oil and fry them until they are crisp, about 1 minute per side. Remove from the oil and drain on a paper towel. While warm, sprinkle with salt to taste.",
      "In a large pot, heat olive oil over medium heat. Add the onion, garlic, and jalapeño to the pot, and cook until the onion is softened about 3 to 4 minutes.",
      "Add in the chicken broth, black beans, crushed tomatoes, diced tomatoes with juices, corn, lime juice, cilantro, cumin, and chili powder. Stir to combine.",
      "Add the chicken breasts and bring the soup to a boil over high heat. Reduce the heat to a simmer and cook uncovered for 20 minutes, or until the chicken is cooked through.",
      "Remove the chicken from the pot and shred it with two forks. Add the shredded chicken back to the pot and simmer for an additional 3 minutes. Taste and season with salt and pepper.",
      "Spoon soup into bowls and top with tortilla strips, lime wedges, and sliced avocado."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, a can of black beans, and canned tomatoes with chilies often contain onion. Corn tortillas, chicken, lime and avocado (small serve) are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Keep beans to about 1/4 cup drained per serve. A typed \"Chicken Tortilla Soup\" with no source is already in the cookbook, so this one carries the source name."
  },
  {
    "id": "fam-ez-cream-of-cauliflower-soup",
    "name": "Cream of Cauliflower Soup",
    "emoji": "🥣",
    "category": "lunch",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "soup"
    ],
    "source": "https://www.spendwithpennies.com/creamy-cauliflower-soup/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 small",
        "item": "onion, diced"
      },
      {
        "qty": "2",
        "item": "ribs celery"
      },
      {
        "qty": "2 tablespoons",
        "item": "butter"
      },
      {
        "qty": "8 cups",
        "item": "cauliflower florets"
      },
      {
        "qty": "3 cups",
        "item": "chicken broth"
      },
      {
        "qty": "½ teaspoon",
        "item": "celery seed"
      },
      {
        "qty": "½ teaspoon",
        "item": "dry mustard powder"
      },
      {
        "qty": "½ teaspoon",
        "item": "garlic powder"
      },
      {
        "qty": "¼ teaspoon",
        "item": "seasoned salt"
      },
      {
        "qty": "¾ cup",
        "item": "heavy whipping cream"
      },
      {
        "qty": "½ cup",
        "item": "shredded Parmesan cheese, optional"
      }
    ],
    "steps": [
      "Heat butter in a medium saucepan over medium heat. Cook onion and celery until tender, do not brown.",
      "Add cauliflower, broth and seasonings. Simmer uncovered 10 to 15 minutes stirring occasionally until cauliflower is tender.",
      "Blend using a hand blender until smooth. Add heavy cream and simmer an additional 8 to 10 minutes or until thickened.",
      "Season with salt & pepper to taste. Stir in parmesan cheese if using."
    ],
    "fodmapNote": "Not low-FODMAP as written — cauliflower is high-FODMAP (mannitol) and is the whole soup, plus onion, celery, garlic powder and heavy cream. This one does not adapt well; keep it as a family recipe."
  },
  {
    "id": "fam-ez-baked-potato-soup",
    "name": "Baked Potato Soup",
    "emoji": "🥔",
    "category": "lunch",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "soup"
    ],
    "source": "https://www.spendwithpennies.com/baked-potato-soup/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6 slices",
        "item": "bacon, chopped"
      },
      {
        "qty": "1 small",
        "item": "onion, diced"
      },
      {
        "qty": "2 tablespoons",
        "item": "all-purpose flour"
      },
      {
        "qty": "2 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "3 cups",
        "item": "reduced sodium chicken broth"
      },
      {
        "qty": "½ teaspoon",
        "item": "salt"
      },
      {
        "qty": "¼ teaspoon",
        "item": "black pepper"
      },
      {
        "qty": "3 cups",
        "item": "prepared mashed potatoes"
      },
      {
        "qty": "1 ¼ cups",
        "item": "shredded sharp cheddar cheese, divided"
      },
      {
        "qty": "½ cup",
        "item": "buttermilk"
      },
      {
        "qty": "⅓ cup",
        "item": "sour cream, plus extra for garnish"
      },
      {
        "qty": "2",
        "item": "green onions, finely chopped"
      }
    ],
    "steps": [
      "Fry bacon in a large pot until crisp. Remove bacon and set aside leaving the drippings in the pot.",
      "Reduce heat to medium low and add diced onion to drippings. Cook until tender, about 5-7 minutes.",
      "Add garlic and flour, cook 1 minute while stirring. Whisk in chicken broth, bring to a boil over medium high heat and simmer for 5 minutes.",
      "Stir in mashed potatoes. Simmer an additional 5 minutes. Add the buttermilk and stir to combine allowing mixture to just come to a boil.",
      "Remove from heat and stir in 1 cup cheese, half of the bacon, and ⅓ cup sour cream.",
      "Garnish with a dollop of sour cream, reamining bacon, green onion and serve hot."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, wheat flour, buttermilk and sour cream (lactose). Potatoes, bacon, cheddar and green-onion tops are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas."
  },
  {
    "id": "fam-ez-baked-oatmeal",
    "name": "Baked Oatmeal",
    "emoji": "🥣",
    "category": "breakfast",
    "time": "55 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "meal-prep",
      "make-ahead"
    ],
    "source": "https://www.wellplated.com/baked-oatmeal/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "½ cup",
        "item": "sliced almonds, or pecans or walnuts"
      },
      {
        "qty": "1 cup",
        "item": "unsweetened applesauce"
      },
      {
        "qty": "⅓ cup",
        "item": "pure maple syrup"
      },
      {
        "qty": "2 large",
        "item": "eggs"
      },
      {
        "qty": "1 teaspoon",
        "item": "pure vanilla extract"
      },
      {
        "qty": "1 teaspoon",
        "item": "ground cinnamon"
      },
      {
        "qty": "⅛ teaspoon",
        "item": "ground nutmeg"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "¾ teaspoon",
        "item": "baking powder"
      },
      {
        "qty": "2 tablespoons",
        "item": "unsalted butter, melted and cooled"
      },
      {
        "qty": "1 cup",
        "item": "nonfat milk"
      },
      {
        "qty": "2 cups",
        "item": "old-fashioned oats"
      },
      {
        "qty": "2 cups",
        "item": "blueberries, or diced apples, strawberries, or your fruit of choice, fresh or frozen"
      },
      {
        "qty": "2 tablespoons",
        "item": "turbinado sugar, or similar coarse sugar (optional)"
      },
      {
        "qty": "to taste",
        "item": "Optional for serving: nonfat Greek yogurt, peanut butter, banana slices, an extra drizzle of maple syrup, or all of the above"
      }
    ],
    "steps": [
      "Place a rack in the center of your oven and preheat the oven to 375°F. Lightly coat a 9x9-inch baking pan with nonstick spray. Spread the almonds onto an ungreased baking sheet. Bake in the oven until the almonds are fragrant and toasted, about 8 minutes. Do not walk away towards the end of the cook time to ensure they do not burn. Immediately transfer to a cutting board. Let cool, then set aside.",
      "In a large mixing bowl, whisk together the applesauce, maple syrup, eggs, vanilla, cinnamon, nutmeg, salt, and baking powder until smooth. Whisk in the melted butter and milk (if the butter resolidifies, warm the bowl in the microwave in 15-second increments until it melts).",
      "Fold in the oats, then the almonds and blueberries (if your berries are frozen, do not thaw first).",
      "Pour the oatmeal mixture into the prepared dish and smooth the top. Sprinkle evenly with the turbinado sugar. Bake in the preheated oven for 40 to 50 minutes, or until the center is moist but no longer damp and feels mostly firm to the touch and the edges are light golden brown (if your fruit is frozen, extend the baking time by 5 to 10 minutes). This will yield a moist oatmeal that's not quite set enough to easily cut with a knife; if you'd like a softer, more pudding-like texture, bake it for 5 minutes less.. Remove from the oven and let cool 5 minutes. Serve hot with your desired toppings."
    ],
    "fodmapNote": "Not low-FODMAP as written — 1 cup of applesauce (fructose), regular milk (lactose), and apples if used as the fruit. Oats, maple syrup, eggs and blueberries are fine. Use lactose-free milk, mashed banana or canned pumpkin in place of the applesauce, and blueberries or strawberries as the fruit. One 9x9 pan; serving count is an estimate."
  },
  {
    "id": "fam-ez-breakfast-quesadilla",
    "name": "Breakfast Quesadilla",
    "emoji": "🌯",
    "category": "breakfast",
    "time": "20 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "meal-prep",
      "freezer-friendly",
      "20-min"
    ],
    "source": "https://www.wellplated.com/breakfast-quesadilla/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "10 large",
        "item": "eggs"
      },
      {
        "qty": "1 tablespoon",
        "item": "milk"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "½ teaspoon",
        "item": "garlic powder"
      },
      {
        "qty": "½ teaspoon",
        "item": "ground black pepper"
      },
      {
        "qty": "½ tablespoon",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "5 cups",
        "item": "lightly packed fresh spinach, roughly torn or chopped (about 4 ounces)"
      },
      {
        "qty": "1 can",
        "item": "reduced-sodium white beans"
      },
      {
        "qty": "1 ½ cups",
        "item": "freshly grated cheese"
      },
      {
        "qty": "8",
        "item": "whole wheat tortillas, medium taco size (about 7 inches)"
      }
    ],
    "steps": [
      "In a large bowl, whisk together the eggs, milk, salt, garlic powder, and pepper. Set aside.",
      "Add the olive oil to a large nonstick skillet over medium heat until it is hot and shimmers. Swirl to coat the pan, then add the spinach and cook, stirring often, until it begins to wilt, about 1 minute. Add the beans, reduce the heat to medium low, then carefully pour in the eggs. With a rubber spatula, cook the eggs low and slow, using the spatula to move them around the pan often. Continue cooking until the eggs are scrambled and just set, about 5 minutes. Taste and season with additional salt or pepper as desired. Remove from the heat. (If freezing the quesadillas, let the filling cool completely.)",
      "Assemble the quesadillas by sprinkling a tortilla with one-eighth of the shredded cheese, leaving a small border all the way around the edge. Spoon one-eighth of the egg mixture on top, then fold the tortilla in half. Repeat with the remaining tortillas.",
      "Carefully wipe out the skillet. Increase the heat to medium and lightly coat the skillet with nonstick spray (or brush with a bit of additional olive oil). Cook the assembled quesadillas on both sides until golden and the cheese is melted, about 5 to 6 minutes total. Cut into wedges and serve warm.",
      "Let the egg filling cool completely to room temperature. Once cooled, form the quesadillas as directed above, then wrap each assembled quesadilla individually in plastic wrap. Arrange the quesadillas in a single layer on a baking sheet or similar flat surface that will fit in your freezer. Place the sheet in the freezer until the quesadillas are firm, then transfer them to a freezer bag or airtight container. Freeze for up to 2 months. To cook from frozen, remove the plastic wrap and warm the quesadilla in the microwave for 2 to 3 minutes until heated through. Alternatively, you can let them thaw overnight in the refrigerator and cook in a skillet as directed above."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic powder, a can of white beans and wheat tortillas. Eggs, spinach and cheese are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Use corn tortillas and keep beans to about 1/4 cup per quesadilla."
  },
  {
    "id": "fam-ez-greek-bowls",
    "name": "Greek Bowls",
    "emoji": "🥗",
    "category": "dinner",
    "time": "35 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "meal-prep"
    ],
    "source": "https://www.wellplated.com/greek-bowls/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 ½ pounds",
        "item": "boneless skinless chicken thighs"
      },
      {
        "qty": "2 tablespoons",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "1 tablespoon",
        "item": "red wine vinegar"
      },
      {
        "qty": "1 tablespoon",
        "item": "paprika"
      },
      {
        "qty": "1 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "½ teaspoon",
        "item": "ground black pepper"
      },
      {
        "qty": "1 tablespoon",
        "item": "canola oil, or avocado oil, grapeseed oil, or a different neutral cooking oil"
      },
      {
        "qty": "2 cups",
        "item": "prepared brown rice or quinoa, 1 cup uncooked"
      },
      {
        "qty": "6 cups",
        "item": "chopped romaine lettuce or mixed greens of choice"
      },
      {
        "qty": "1 pint",
        "item": "cherry tomatoes, halved"
      },
      {
        "qty": "1",
        "item": "English cucumber, thinly sliced"
      },
      {
        "qty": "½ small",
        "item": "red onion, thinly sliced"
      },
      {
        "qty": "⅓ cup",
        "item": "crumbled feta cheese"
      },
      {
        "qty": "to taste",
        "item": "Air Fryer Chickpeas"
      },
      {
        "qty": "½ large",
        "item": "English cucumber, peel on (about 8 ounces)"
      },
      {
        "qty": "1 cup",
        "item": "nonfat plain Greek yogurt"
      },
      {
        "qty": "2 cloves",
        "item": "minced garlic, about 2 teaspoons"
      },
      {
        "qty": "1 tablespoon",
        "item": "freshly squeezed lemon juice"
      },
      {
        "qty": "1 tablespoon",
        "item": "finely chopped fresh dill"
      },
      {
        "qty": "2 teaspoons",
        "item": "extra virgin olive oil"
      },
      {
        "qty": "¼ teaspoon",
        "item": "kosher salt"
      }
    ],
    "steps": [
      "Place the chicken in a bowl and toss with the oil, vinegar, paprika, oregano, salt, and pepper. Let sit while you prepare the tzatziki sauce and any desired toppings.",
      "Prepare the Tzatziki: Grate the cucumber onto a double stack of paper towels. Fold the towels around the cucumber. Over the sink, squeeze out as much excess water as possible, adding another layer of paper towels as needed. Transfer to a bowl, then stir together with the Greek yogurt, garlic, lemon juice, dill, olive oil, and salt. If time allows, cover and refrigerate for at least 30 minutes or up to 3 days (or use it right away and know the leftovers will taste even better!).",
      "Heat a cast iron on similar sturdy, heavy-bottomed skillet over medium high heat. Once it's nice and hot, add the oil and swirl to coat. With tongs, remove the chicken thighs from the marinade and lower into the skillet, smooth-side down. Let cook on the first side undisturbed for 5 minutes (no peeking!).",
      "After 5 minutes, lift the chicken and flip it over — if the chicken is sticking to the skilet, let it cook for 1 additional minute; it should remove easily.",
      "Cook on the other side until the chicken reaches 165°F on an instant read thermometer, about 5 to 6 minutes more. Remove to a cutting board and let rest 5 minutes. Cut into bite-sized pieces.",
      "Assemble the Bowls: fill a big bowl with your desired mix of rice and lettuce, then top with the chicken and any desired toppings. Serve with tzatziki on top or alongside."
    ],
    "fodmapNote": "Not low-FODMAP as written — red onion, garlic in the tzatziki, chickpeas, and 1 cup of regular Greek yogurt (lactose). Chicken, rice or quinoa, cucumber, tomato, lettuce and feta are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Use lactose-free yogurt for the tzatziki and skip or limit the chickpeas."
  },
  {
    "id": "fam-ez-healthy-egg-salad",
    "name": "Healthy Egg Salad",
    "emoji": "🥚",
    "category": "lunch",
    "time": "15 min",
    "serves": 3,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "15-min",
      "meal-prep",
      "high-protein"
    ],
    "source": "https://www.wellplated.com/healthy-egg-salad/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "6",
        "item": "hard cooked eggs, 2 of the whites-only; 4 whole eggs"
      },
      {
        "qty": "¾ cup",
        "item": "diced celery, about 3 medium stalks"
      },
      {
        "qty": "¼ cup",
        "item": "plain non-fat Greek yogurt"
      },
      {
        "qty": "1 teaspoon",
        "item": "dijon mustard"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "¼ teaspoon",
        "item": "ground black pepper"
      },
      {
        "qty": "1 tablespoon",
        "item": "chopped fresh dill"
      },
      {
        "qty": "to taste",
        "item": "Whole grain bread, toasted (for 4 open faced sandwiches)"
      },
      {
        "qty": "to taste",
        "item": "Arugula, tomato, additional chopped fresh dill"
      }
    ],
    "steps": [
      "Peel the eggs and cut into a rough dice. (For detailed instructions on how to hard boil eggs, see Step 2 of my Avocado Egg Salad recipe.) Place in a large mixing bowl, then add the celery, Greek yogurt, mustard, salt, pepper, and dill. Stir to combine.",
      "Serve egg salad on toasted bread with tomatoes and arugula, or enjoy atop greens for a healthy salad."
    ],
    "fodmapNote": "Not low-FODMAP as written — 3/4 cup of celery (moderate-FODMAP in that amount), Greek yogurt (lactose) and whole-grain bread. Eggs, Dijon and dill are fine. Use a small amount of celery, lactose-free yogurt or mayonnaise, and gluten-free bread."
  },
  {
    "id": "fam-ez-crispy-breaded-chicken-cutlets",
    "name": "Crispy Breaded Chicken Cutlets",
    "emoji": "🍗",
    "category": "dinner",
    "time": "30 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min"
    ],
    "source": "https://natashaskitchen.com/chicken-cutlets/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 medium",
        "item": "boneless, skinless chicken breasts (about 2 lbs total, 8 oz each)"
      },
      {
        "qty": "1 1/2 tsp",
        "item": "fine sea salt, divided"
      },
      {
        "qty": "1/2 tsp",
        "item": "black pepper"
      },
      {
        "qty": "1/2 cup",
        "item": "all-purpose flour"
      },
      {
        "qty": "2 large",
        "item": "eggs, plus 1 Tbsp water"
      },
      {
        "qty": "1 1/2 cups",
        "item": "panko breadcrumbs, or Italian breadcrumbs"
      },
      {
        "qty": "1/2 cup",
        "item": "finely grated Parmesan cheese"
      },
      {
        "qty": "1/2 tsp",
        "item": "garlic powder"
      },
      {
        "qty": "1 tsp",
        "item": "Italian seasoning"
      },
      {
        "qty": "to taste",
        "item": "Extra light olive oil, or a neutral oil like canola, or avocado"
      },
      {
        "qty": "to taste",
        "item": "Lemon wedges, chopped parsley and coarse salt, for serving"
      }
    ],
    "steps": [
      "Prep the chicken: Slice each chicken breast in half horizontally to make 8 thin cutlets. Place between sheets of plastic wrap or parchment and pound to 1/4-inch thickness. Season all over with 1 tsp salt and 1/2 tsp black pepper.",
      "Make the breading station: In the first dish, add the plain flour. In the second dish, whisk together the eggs and water. In the third dish, combine panko, Parmesan, garlic powder, Italian seasoning, and the remaining 1/2 tsp salt.",
      "Bread the cutlets: Dredge each cutlet lightly in the flour, shaking off excess. Dip in the egg wash, then press into the breadcrumb mixture so it adheres. Place on a tray and repeat. Let breaded cutlets rest 5–10 minutes to help the coating set.",
      "Pan-fry: Add enough oil to a large skillet so it comes about halfway up the sides of the chicken. Heat over medium until the oil is shimmering and hot (a breadcrumb should sizzle immediately when dropped in. Keep the oil between 350-375˚F. Sauté about 2 minutes per side or until deep golden and the center reaches 165˚F on an instant thermometer. Transfer to a wire rack or paper towels and sprinkle with a pinch of flaky salt. Squeeze on some lemon juice and serve with more lemon wedges and parsley for garnish."
    ],
    "fodmapNote": "Not low-FODMAP as written — wheat flour and panko breadcrumbs, and garlic powder. Chicken, Parmesan, eggs and lemon are fine. Use gluten-free breadcrumbs and flour and leave out the garlic powder."
  },
  {
    "id": "fam-ez-spinach-stuffed-chicken-breast",
    "name": "Spinach Stuffed Chicken Breast",
    "emoji": "🍗",
    "category": "dinner",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min",
      "high-protein"
    ],
    "source": "https://natashaskitchen.com/spinach-stuffed-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 large",
        "item": "chicken breasts, boneless, skinless (1 3/4 to 2 lbs, even-sized pieces)"
      },
      {
        "qty": "3/4 tsp",
        "item": "salt"
      },
      {
        "qty": "1/2 tsp",
        "item": "black pepper"
      },
      {
        "qty": "1/2 tsp",
        "item": "garlic powder"
      },
      {
        "qty": "1/2 tsp",
        "item": "paprika"
      },
      {
        "qty": "1 1/2 Tbsp",
        "item": "olive oil"
      },
      {
        "qty": "4 oz",
        "item": "cream cheese, cold"
      },
      {
        "qty": "1 Tbsp",
        "item": "mayonnaise"
      },
      {
        "qty": "2",
        "item": "garlic cloves"
      },
      {
        "qty": "1/4 tsp",
        "item": "salt"
      },
      {
        "qty": "1 1/2 cups",
        "item": "baby spinach leaves, chopped"
      },
      {
        "qty": "1/4 cup",
        "item": "mozzarella cheese"
      },
      {
        "qty": "1/4 cup",
        "item": "parmesan cheese"
      }
    ],
    "steps": [
      "Make filling - Preheat oven to 425˚F with a rack in the center. In a mixing bowl, mash together 4 oz of cream cheese, 1 tablespoon of mayo, and 2 garlic cloves with a fork, then stir in 1/4 cup mozzarella, 1/4 cup parmesan, and 1 1/2 cups chopped spinach leaves until combined.",
      "Stuff chicken breasts - Lay chicken on a flat surface and with a sharp knife, cut a slit 3/4 of the way through without cutting all the way through. Divide the filling evenly among the chicken breasts and stuff each breast with its portion, then seal horizontally with a toothpick (make sure the chicken breast can lie flat on the sides for searing).",
      "Season chicken - Season the outside of the chicken breast all over with 3/4 tsp salt, 1/2 tsp pepper, 1/2 tsp garlic powder, and 1/2 tsp paprika, or season to taste.",
      "Sear chicken - Heat 1 1/2 Tbsp olive oil in an oven-proof pan such as cast iron, or a large heavy-bottomed skillet over medium heat. Add chicken and sauté for 4 minutes per side until golden brown on each side.",
      "Bake - Flip a second time and immediately transfer skillet to preheated oven. Bake at 425˚F for 10-15 minutes until an instant-read thermometer inserted into the thickest part of the chicken registers at 165˚F. Rest the chicken 5 minutes before slicing. Remove the toothpicks and spoon the pan juices over the chicken to serve."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic powder, two garlic cloves and 4 oz of cream cheese (lactose). Spinach, mozzarella and Parmesan are fine. Use lactose-free cream cheese and garlic-infused oil in the filling."
  },
  {
    "id": "fam-ez-cheesy-vegan-enchilada-skillet",
    "name": "Cheesy Vegan Enchilada Skillet",
    "emoji": "🌮",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "vegan"
    ],
    "source": "https://minimalistbaker.com/cheesy-vegan-enchilada-skillet/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/2 cup",
        "item": "raw cashews"
      },
      {
        "qty": "2/3 cup",
        "item": "water"
      },
      {
        "qty": "1 Tbsp",
        "item": "lime juice"
      },
      {
        "qty": "1/2 small",
        "item": "clove garlic, or 1/8 tsp garlic powder"
      },
      {
        "qty": "2 Tbsp",
        "item": "tapioca starch, also called tapioca flour"
      },
      {
        "qty": "1/2 tsp",
        "item": "sea salt"
      },
      {
        "qty": "1-2 Tbsp",
        "item": "olive or avocado oil"
      },
      {
        "qty": "1/2 medium",
        "item": "yellow or white onion, diced (about 1 heaping cup)"
      },
      {
        "qty": "1/4 tsp",
        "item": "sea salt"
      },
      {
        "qty": "4 medium cloves",
        "item": "garlic, minced (about 2 Tbsp)"
      },
      {
        "qty": "2 cups",
        "item": "sweet potato or kabocha squash, peeled, diced into 1/4-1/2-inch cubes"
      },
      {
        "qty": "1 medium",
        "item": "poblano pepper, stemmed, seeded, and diced into 1/2-inch squares, or green bell pepper"
      },
      {
        "qty": "1 (15 oz) can",
        "item": "black beans, drained and rinsed"
      },
      {
        "qty": "4 (4-inch)",
        "item": "corn tortillas, sliced into 1/4-inch x 2-inch strips"
      },
      {
        "qty": "1 (15 oz) jar",
        "item": "red enchilada sauce"
      },
      {
        "qty": "to taste",
        "item": "Green onion, thinly sliced"
      },
      {
        "qty": "to taste",
        "item": "Fresh cilantro, roughly chopped"
      }
    ],
    "steps": [
      "Start by cooking the veggies for the skillet. Heat a large (preferably oven-safe) skillet over medium heat. Once hot, add oil and onion and sauté for a few minutes until translucent. Add the sea salt and garlic and cook for another 1-2 minutes.",
      "Next, add the sweet potato (or squash) and pepper. Sauté, stirring occasionally, until they are starting to soften — about 5 minutes.",
      "Add the drained and rinsed black beans (or pinto beans) and tortilla strips and stir.",
      "Finally, add the enchilada sauce, stir well, and bring to a simmer over medium heat. Once simmering, cover and lower the heat to medium-low. Cook for ~10 minutes, stirring occasionally, until the sweet potato (or squash) is tender when pierced with a fork.",
      "Meanwhile, to a small high-speed blender, add the cashew sauce ingredients (cashews, water, lime juice, garlic, tapioca starch, and sea salt). Blend on high until smooth and creamy.",
      "After the skillet has sautéed and your squash/sweet potatoes are tender, remove the lid, reduce the heat to low, and carefully pour the cashew sauce (or sprinkle shredded cheese) over the beans in an even layer. Cover and steam for 3-5 minutes to encourage the cheese to firm up (or melt) a bit. Then remove the lid and (optionally) transfer to the oven to broil for another 2-3 minutes, or until the cheese is darkened in spots and dry to the touch.",
      "Serve warm garnished with green onions and cilantro (both optional). Store leftovers in an airtight container in the refrigerator for up to 3-4 days or in the freezer for 1 month (or longer).",
      "Freezing: You can freeze the enchilada skillet in individual containers for quicker reheating or freeze the entire dish. To freeze in individual containers, transfer individual servings to freezer-safe containers (we like glass storage containers), let cool in the refrigerator, then cover with a lid or foil and freeze. When ready to eat, uncover and microwave using the defrost then full power settings to heat until warmed through. To freeze the entire dish, transfer to a large freezer-safe container (such as a casserole dish), let cool in the refrigerator, then cover and transfer to the freezer. When ready to eat/serve, defrost overnight in the refrigerator, then bake in a 350 degree F (176 C) oven until warmed through."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, a can of black beans, cashews in the sauce, and jarred enchilada sauce usually contains onion and garlic. Sweet potato is moderate in larger serves. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Keep beans to about 1/4 cup per serve and use a low-FODMAP enchilada sauce."
  },
  {
    "id": "fam-ez-creamy-salmon-orzo",
    "name": "Creamy Salmon Orzo (Risoni)",
    "emoji": "🐟",
    "category": "dinner",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "15-min"
    ],
    "source": "https://www.recipetineats.com/creamy-salmon-risoni-orzo-15-minute-meal/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "3 tbsp (40 g)",
        "item": "unsalted butter"
      },
      {
        "qty": "1/2",
        "item": "onion, diced (brown, white, yellow)"
      },
      {
        "qty": "2",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1 tbsp",
        "item": "plain flour"
      },
      {
        "qty": "2 cups",
        "item": "milk, light or full fat"
      },
      {
        "qty": "2 1/4 cups",
        "item": "chicken broth / stock"
      },
      {
        "qty": "1 1/2 cups",
        "item": "dried risoni / orzo"
      },
      {
        "qty": "2 cups",
        "item": "frozen peas"
      },
      {
        "qty": "1/2 cup",
        "item": "grated parmesan"
      },
      {
        "qty": "185 g / 6 oz",
        "item": "hot-smoked salmon, flaked into large chunks"
      },
      {
        "qty": "to taste",
        "item": "Parsley, chopped, to garnish"
      }
    ],
    "steps": [
      "Melt butter in a deep skillet or pot over medium high heat.",
      "Add onion and garlic, cook for 2 minutes until translucent.",
      "Add flour and cook for 1 minute.",
      "Switch to a whisk and add half the milk. Whisk to dissolve the pasty onion mixture into the milk (about 20 seconds). Then add remaining milk, chicken broth, risoni and peas.",
      "Bring to simmer then turn heat down to medium so it bubbles gently. Cook for 5 minutes - stir occasionally for the first half then more frequently during the second half.",
      "At 5 minutes, take it off the stove - it will still be quite saucy (see video) but will reduce in the next steps and while serving.",
      "Stir through parmesan cheese, salt and pepper to taste. Then gently stir through salmon.",
      "Serve immediately, sprinkled with parsley leaves if desired."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, wheat flour and orzo, and 2 cups of regular milk (lactose). Peas are moderate; keep to a small serve. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas."
  },
  {
    "id": "fam-ez-15-minute-sausage-meatballs",
    "name": "15 Minute Sausage Meatballs",
    "emoji": "🍝",
    "category": "dinner",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "15-min"
    ],
    "source": "https://www.recipetineats.com/15-minute-sausage-meatballs/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tbsp",
        "item": "olive oil"
      },
      {
        "qty": "700 g / 1.4 lb",
        "item": "good-quality sausages"
      },
      {
        "qty": "2",
        "item": "garlic cloves, finely chopped"
      },
      {
        "qty": "3/4 cup",
        "item": "chicken stock/broth, low sodium - sub water"
      },
      {
        "qty": "700 g / 24 oz",
        "item": "tomato passata (US: plain tomato sauce such as Hunt's)"
      },
      {
        "qty": "1/2 tsp",
        "item": "dried Italian herb mix, sub dried oregano, or 50/50 oregano/thyme"
      },
      {
        "qty": "1/2 tsp",
        "item": "cooking salt / kosher salt, +50% for flakes, halve for table salt"
      },
      {
        "qty": "1/4 tsp",
        "item": "red pepper flakes, optional (hint of warmth - sub pinch of pepper)"
      },
      {
        "qty": "1 sprig",
        "item": "basil, - stalk for sauce, leaves for garnish (optional)"
      },
      {
        "qty": "to taste",
        "item": "Parmesan, finely grated"
      },
      {
        "qty": "350 g / 12 oz",
        "item": "pasta of choice, or polenta or mash"
      }
    ],
    "steps": [
      "Brown meatballs (3-4 min), add garlic for last 15 seconds. Reduce stock by half (1 min), add everything else, simmer 4 minutes. Serve!",
      "Brown meatballs - Heat the oil in a large non-stick pan over high heat. Add the meatballs and stir for 4 - 5 minutes until lightly browned but still raw inside. (Note 4)",
      "Add garlic and stir for just 15 seconds until light golden (careful, don't let it burn!)",
      "Simmer - Add the stock and simmer rapidly for 1 minute to reduce by half. Add everything else, stir, bring to a simmer, then lower heat to medium high and let it simmer energetically (but not crazy rapidly) for 4 minutes.",
      "Serve with lots of parmesan and hand-torn basil leaves over pasta, polenta, mash or other starchy vehicle of choice, or stuff into subs!",
      "Add cooked pasta with 1/2 cup of the pasta cooking water into the pan with meatballs. Toss over medium heat for 1 - 2 minutes until the sauce is stuck to the pasta and it's stained red, rather than pooled in the base of the pan. Divide between bowls and enjoy!"
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, wheat pasta, and most sausages are seasoned with garlic and onion. Passata is fine in a normal serve. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Pick a sausage without onion or garlic in the ingredients."
  },
  {
    "id": "fam-ez-asian-beef-bowls",
    "name": "Asian Beef Bowls",
    "emoji": "🍚",
    "category": "dinner",
    "time": "12 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "15-min"
    ],
    "source": "https://www.recipetineats.com/asian-beef-bowls/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tbsp",
        "item": "Hoisin Sauce, or sub with Oyster"
      },
      {
        "qty": "2 tbsp",
        "item": "Oyster Sauce, or sub with 1 1/2 tbsp Hoisin"
      },
      {
        "qty": "1 tbsp",
        "item": "Chinese cooking wine, or mirin, dry sherry, sake or any rice wine"
      },
      {
        "qty": "2 1/2 tbsp",
        "item": "dark soy sauce"
      },
      {
        "qty": "2 tsp",
        "item": "white sugar"
      },
      {
        "qty": "1/2 tsp",
        "item": "sesame oil"
      },
      {
        "qty": "1/4 tsp",
        "item": "white pepper, or sub with black"
      },
      {
        "qty": "1 tbsp",
        "item": "oil"
      },
      {
        "qty": "2",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1 small",
        "item": "onion, finely chopped"
      },
      {
        "qty": "500 g / 1 lb",
        "item": "ground beef (lean is good)"
      },
      {
        "qty": "1/2 cup",
        "item": "scallions, sliced, plus more for garnish"
      },
      {
        "qty": "to taste",
        "item": "Sesame seeds"
      }
    ],
    "steps": [
      "Mix Sauce together in a bowl",
      "Heat oil in a large skillet over high heat. Add garlic and onion, cook for 1 minute or until onion starts browning.",
      "Add beef and cook, breaking it up as you go.",
      "Once the beef has all changed from red to brown, add Sauce. Cook for a further 2 minutes, or until Sauce has evaporated and beef is cooked. If you want the beef cooked more, add a splash of water and keep cooking (I don't do this).",
      "Stir through shallots, then serve over rice, garnished with more shallots and sesame seeds, if desired. Or for a low carb, low cal option, try Cauliflower Rice!"
    ],
    "fodmapNote": "Close to low-FODMAP but not as written — onion and garlic. Hoisin and oyster sauce can contain garlic, so check the label; soy sauce is fine. Use garlic-infused oil and only the green tops of the scallions and this one is low-FODMAP."
  },
  {
    "id": "fam-ez-fish-piccata-with-crispy-smashed-potatoes",
    "name": "Fish Piccata with Crispy Smashed Potatoes",
    "emoji": "🐟",
    "category": "dinner",
    "time": "15 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "15-min"
    ],
    "source": "https://www.recipetineats.com/fish-piccata-crispy-smashed-potatoes-15-minute-meal/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2",
        "item": "firm white fish fillets (150–200 g / 5–7 oz each), skin on or off"
      },
      {
        "qty": "6",
        "item": "baby potatoes, about golf-ball size"
      },
      {
        "qty": "200 g / 7 oz",
        "item": "green beans, trimmed"
      },
      {
        "qty": "1 tbsp",
        "item": "fresh parsley, finely chopped"
      },
      {
        "qty": "2 tbsp",
        "item": "olive oil"
      },
      {
        "qty": "3 tbsp",
        "item": "plain flour"
      },
      {
        "qty": "1 tsp",
        "item": "salt"
      },
      {
        "qty": "to taste",
        "item": "Black pepper"
      },
      {
        "qty": "1/3 cup",
        "item": "white wine"
      },
      {
        "qty": "1/2 cup",
        "item": "water"
      },
      {
        "qty": "1 - 2 tbsp",
        "item": "fresh lemon juice, adjust to your taste"
      },
      {
        "qty": "2 tbsp",
        "item": "butter"
      },
      {
        "qty": "1 tbsp",
        "item": "baby capers, canned"
      },
      {
        "qty": "to taste",
        "item": "Salt and pepper"
      }
    ],
    "steps": [
      "Cook the potatoes in the microwave for 2 minutes, turn potatoes, then cook for another 1 1/2 - 2 minutes. You will be able to tell by squeezing them if they are ready. Don't worry if the skin bursts, you are smashing them anyway.",
      "Use the side of a knife, meat mallet or your hand (covered with a dish cloth) and smash each potato so they are flattened to around 1.5cm/ 0.5\" thick with a flattish surface. Sprinkle with a pinch of salt.",
      "Meanwhile, combine flour, salt and pepper on a plate and dredge each side of the fish in the flour mixture. Shake off excess flour.",
      "Heat olive oil in a non stick pan over high heat. Place fish and potatoes in the pan. Press the potatoes down lightly with a spatula to help it crisp up.",
      "Cook the first side of both the fish and potatoes for around 2 minutes until golden brown, then turn. Make sure the potato is crispy and brown.",
      "Cook the other side of the fish for 1 1/2 minutes (also see notes for fish cooking time). Then remove from the pan onto a plate and cover loosely with foil.",
      "Give the potatoes another 30 seconds to 1 minute to make it nice and brown and crispy, then remove from the pan.",
      "Turn heat down to medium high.",
      "Add wine and water to the pan. Scrape the brown bits off the bottom of the pan and mix it in. When the liquid comes to a rapid simmer, add the beans.",
      "Shake the pan occasionally to help the beans cook evenly. Cook the beans in the liquid for around 1 1/2 minutes until \"tender crisp\" (i.e. cooked but still crisp) and remove from pan. If the liquid reduces too much while cooking the beans (which might be the case if you are using a very large heavy based pan), just add a splash of water.",
      "Remove pan from heat. By the time you remove the beans, there should just be a bit of sauce left at the bottom of the fry pan, not even covering the entire base of the fry pan.",
      "Add lemon juice then stir through butter and capers. Adjust seasoning to taste with salt and pepper.",
      "Place half the beans on each plate and place 3 potatoes on top. Top with a piece of fish. Spoon over the Sauce onto each fish and scatter with parsley. Serve immediately."
    ],
    "fodmapNote": "Nearly low-FODMAP — the only flag is the wheat flour used to dust the fish. Potatoes, green beans, capers, lemon, butter and white wine are all fine. Dust with rice flour or cornstarch and this one is low-FODMAP. Serves 2."
  },
  {
    "id": "fam-ez-thai-red-curry-with-chicken",
    "name": "Thai Red Curry with Chicken",
    "emoji": "🍛",
    "category": "dinner",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min"
    ],
    "source": "https://www.recipetineats.com/thai-red-curry-with-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "5–6 tbsp",
        "item": "Thai red curry paste, store-bought (Maesri recommended)"
      },
      {
        "qty": "or 1 quantity",
        "item": "homemade Thai red curry paste"
      },
      {
        "qty": "2 large",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "2 tsp",
        "item": "fresh ginger, finely grated"
      },
      {
        "qty": "1 tbsp",
        "item": "lemongrass paste, or finely chopped fresh"
      },
      {
        "qty": "3 tbsp",
        "item": "vegetable oil, or canola or peanut"
      },
      {
        "qty": "1 cup (250 ml)",
        "item": "chicken broth/stock, low sodium"
      },
      {
        "qty": "400 ml / 14 oz",
        "item": "coconut milk, full fat"
      },
      {
        "qty": "6",
        "item": "kaffir lime leaves"
      },
      {
        "qty": "1 tbsp",
        "item": "sugar, white, brown or palm"
      },
      {
        "qty": "2 tsp",
        "item": "fish sauce, plus more to taste"
      },
      {
        "qty": "350 g / 12 oz",
        "item": "chicken thighs, boneless and skinless, cut into 1/3-inch slices"
      },
      {
        "qty": "150 g / 5 oz",
        "item": "pumpkin or butternut squash, cut into 1.5 cm cubes (about 1 heaped cup)"
      },
      {
        "qty": "120 g / 4 oz",
        "item": "green beans, trimmed and cut into 2-inch pieces"
      },
      {
        "qty": "12",
        "item": "Thai basil leaves"
      },
      {
        "qty": "to taste",
        "item": "Fresh red chilli slices, small chilli - spicy, large = less spicy"
      },
      {
        "qty": "to taste",
        "item": "Fresh coriander / cilantro leaves"
      },
      {
        "qty": "to taste",
        "item": "Steamed jasmine rice"
      }
    ],
    "steps": [
      "Heat oil in a large heavy based skillet over medium high heat.",
      "Add curry paste and Extras (if using jar paste) and cook for about 2 minutes so it \"dries out\" (See video)",
      "Add chicken broth and stir to dissolve paste. Simmer rapidly for 3 minutes or until liquid reduces by half.",
      "Add coconut milk, lime leaves, sugar and fish sauce. Stir, then add chicken.",
      "Spread chicken out, bring to simmer, then turn heat down to medium. Simmer for about 8- 10 minutes or until Sauce reduces, the chicken is cooked and the sauce is almost at the thickness you want.",
      "Do a taste test. Add more fish sauce (or even shrimp paste) to add more saltiness, sugar for sweetness.",
      "Add pumpkin and beans, stir. Cook for 3 minutes or until pumpkin is just cooked through and Sauce is thickened - see video for Sauce thickness.",
      "Remove from heat. Stir through a handful of Thai basil leaves.",
      "Serve over jasmine rice, garnished with fresh red chilli slices and fresh coriander/cilantro leaves, if desired."
    ],
    "fodmapNote": "Not low-FODMAP as written — fresh garlic, and store-bought red curry paste contains garlic and shallot. Coconut milk and butternut squash are moderate in larger serves. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. A garlic-free curry paste (some low-FODMAP brands exist) is the main fix."
  },
  {
    "id": "fam-ez-air-fryer-greek-chicken",
    "name": "Air Fryer Greek Chicken (Skinnytaste)",
    "emoji": "🍗",
    "category": "dinner",
    "time": "25 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "air-fryer",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/air-fryer-greek-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 teaspoons",
        "item": "extra virgin olive oil"
      },
      {
        "qty": "2 ½ tablespoons",
        "item": "lemon juice"
      },
      {
        "qty": "½ teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "¾ teaspoon",
        "item": "Dijon mustard"
      },
      {
        "qty": "¾ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "12 ounces",
        "item": "boneless skinless chicken breasts, cut into 1-inch cubes"
      },
      {
        "qty": "1 medium",
        "item": "zucchini, 8 ounces, sliced into ¼-inch thick half moons"
      },
      {
        "qty": "½ cup",
        "item": "cherry tomatoes, halved"
      },
      {
        "qty": "½ small",
        "item": "red onion, cut into wedges"
      },
      {
        "qty": "½ cup",
        "item": "canned chickpeas, rinsed and drained"
      },
      {
        "qty": "¼ cup",
        "item": "kalamata olives, pitted and sliced"
      },
      {
        "qty": "3 tablespoons",
        "item": "feta cheese, crumbled"
      },
      {
        "qty": "1 tablespoon",
        "item": "fresh dill, chopped"
      }
    ],
    "steps": [
      "Add the olive oil, lemon juice, dried oregano, Dijon mustard and salt to a mixing bowl and whisk to combine.",
      "Add the chicken, zucchini, tomatoes, red onion, chickpeas, and olives to the bowl and toss to coat everything in the marinade.",
      "In a single layer, (in batches as needed for smaller baskets), transfer the chicken and vegetables to the air fryer basket and cook 400°F about 10 minutes, shaking the basket 2 to 3 times, until the chicken is browned and the vegetables are tender.",
      "Top with feta cheese and chopped dill and serve right away."
    ],
    "fodmapNote": "Not low-FODMAP as written — red onion and 1/2 cup of chickpeas. Chicken, zucchini, cherry tomatoes, olives and feta are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Keep chickpeas to about 1/4 cup drained per serve. Serves 2. A different recipe from the \"Air Fryer Greek Chicken & Veggies\" link card already in the cookbook."
  },
  {
    "id": "fam-ez-air-fryer-cajun-shrimp-dinner",
    "name": "Air Fryer Cajun Shrimp Dinner",
    "emoji": "🍤",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "air-fryer",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/air-fryer-cajun-shrimp-dinner/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "Cajun or Creole seasoning"
      },
      {
        "qty": "24 (1 pound)",
        "item": "cleaned and peeled extra jumbo shrimp"
      },
      {
        "qty": "6 ounces",
        "item": "fully cooked Turkey/Chicken Andouille sausage or kielbasa, sliced"
      },
      {
        "qty": "1 medium",
        "item": "zucchini, 8 ounces, sliced into 1/4-inch thick half moons"
      },
      {
        "qty": "1 medium",
        "item": "yellow squash, 8 ounces, sliced into 1/4-inch thick half moons"
      },
      {
        "qty": "1 large",
        "item": "red bell pepper, seeded and cut into thin 1-inch pieces"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil"
      }
    ],
    "steps": [
      "In a large bowl, combine the Cajun seasoning and shrimp, toss to coat.",
      "Add the sausage, zucchini, squash, bell peppers, and salt and toss with the oil.",
      "Preheat the air fryer 400F.",
      "In 2 batches (for smaller baskets), transfer the shrimp and vegetables to the air fryer basket and cook 8 minutes, shaking the basket 2 to 3 times.",
      "Set aside, repeat with remaining shrimp and veggies.",
      "Once both batches are cooked, return the first batch to the air fryer and cook 1 minute."
    ],
    "fodmapNote": "Not low-FODMAP as written — store-bought Cajun seasoning and andouille sausage usually contain onion and garlic powder. Shrimp, zucchini, yellow squash and bell pepper are fine in a normal serve. Use a Cajun blend without onion or garlic and a plain smoked sausage."
  },
  {
    "id": "fam-ez-marry-me-chicken",
    "name": "Marry Me Chicken (Skinnytaste)",
    "emoji": "🍗",
    "category": "dinner",
    "time": "35 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan"
    ],
    "source": "https://www.skinnytaste.com/marry-me-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1/4 cup",
        "item": "sundried tomatoes in oil, drained and chopped"
      },
      {
        "qty": "2 (8 oz)",
        "item": "boneless skinless chicken breasts, halved lengthwise (1 lb total)"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "freshly ground black pepper"
      },
      {
        "qty": "1/4 cup",
        "item": "all purpose flour, or gluten-free flour mix"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "olive oil, divided (I used oil from the sundried tomatoes)"
      },
      {
        "qty": "1 small",
        "item": "shallot, minced"
      },
      {
        "qty": "2 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "1 teaspoon",
        "item": "tomato paste"
      },
      {
        "qty": "4 cups",
        "item": "baby spinach, packed"
      },
      {
        "qty": "1 1/2 ounces",
        "item": "reduced-fat cream cheese, 3 tablespoons"
      },
      {
        "qty": "3/4 cup",
        "item": "chicken broth"
      },
      {
        "qty": "3 tablespoons",
        "item": "half-and-half"
      },
      {
        "qty": "1/4 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "to taste",
        "item": "pinch red pepper flakes, adjust to your taste"
      },
      {
        "qty": "2 tablespoons",
        "item": "grated Parmesan cheese"
      }
    ],
    "steps": [
      "Begin by pounding the halved chicken breasts to an even thickness (about 1/2-inch thick). Season them with salt and black pepper. Dredge each chicken piece in flour, shaking off any excess.",
      "Heat 1 tablespoon of olive oil (or use from the sun dried tomatoes) in a large skillet over medium-high heat. Add the chicken and cook for about 4-5 minutes per side or until the chicken is cooked through and has a golden-brown crust. Remove the chicken from the skillet and set it aside.",
      "In the same skillet, add the remaining 1/2 tablespoon of olive oil. Add the minced shallot and garlic and sauté for about 1-2 minutes until they become fragrant and translucent.",
      "Stir in the tomato paste and cook for another 1-2 minutes.",
      "Add the chopped sundried tomatoes and baby spinach to the skillet. Cook until the spinach wilts.",
      "Reduce the heat to low, and then add the cream cheese, chicken broth, half-and-half, dried oregano, and red pepper flakes. Stir until the cream cheese is fully melted and the sauce is well combined.",
      "Return the cooked chicken to the skillet and let it simmer in the sauce for a few minutes until heated through.",
      "Sprinkle with grated Parmesan cheese and serve."
    ],
    "fodmapNote": "Not low-FODMAP as written — shallot, garlic, wheat flour, cream cheese and half-and-half (lactose). Sun-dried tomatoes are fine in a small serve. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. A lighter version than the \"Marry Me Chicken\" already in the cookbook, so both are kept."
  },
  {
    "id": "fam-ez-instant-pot-spaghetti-and-meat-sauce",
    "name": "Instant Pot Spaghetti and Meat Sauce",
    "emoji": "🍝",
    "category": "dinner",
    "time": "24 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "instant-pot",
      "one-pot",
      "30-min"
    ],
    "source": "https://www.skinnytaste.com/instant-pot-one-pot-spaghetti-with-meat-sauce/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "93% ground turkey, or lean ground beef"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "¼ cup",
        "item": "diced onion"
      },
      {
        "qty": "1 clove",
        "item": "minced garlic"
      },
      {
        "qty": "2 cups",
        "item": "water"
      },
      {
        "qty": "1 (24 oz) jar",
        "item": "marinara sauce, your favorite or homemade"
      },
      {
        "qty": "10 ounces",
        "item": "spaghetti, wheat or gluten-free, or bucatini, linguini"
      },
      {
        "qty": "to taste",
        "item": "grated parmesan cheese, optional for serving"
      }
    ],
    "steps": [
      "Press saute on the Instant Pot. When hot add the ground turkey or beef and salt and cook, breaking up with a wooden spoon about 3 minutes.",
      "Add the onions, and garlic and cook until softened, 3 to 4 minutes.",
      "Press cancel then add the water and using a wooden spoon, scrape up any food stuck to the bottom of the pot (to avoid the burn message).",
      "Add spaghetti (broken in half so it fits), then cover with the marinara sauce, making sure it covers the pasta, without stirring.",
      "Cover and cook on high pressure 9 minutes.",
      "After 9 minutes, use the quick release method (which means turn the knob to venting so the steam releases) so the pasta doesn’t continue cooking, and open the lid. Stir and serve topped with grated cheese if desired!"
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, wheat spaghetti, and jarred marinara almost always contains onion and garlic. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta, bread or tortillas. Use a low-FODMAP marinara and gluten-free spaghetti."
  },
  {
    "id": "fam-ez-chicken-stir-fry",
    "name": "Chicken Stir Fry (Downshiftology)",
    "emoji": "🥦",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "gluten-free"
    ],
    "source": "https://downshiftology.com/recipes/chicken-stir-fry/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "¼ cup",
        "item": "chicken broth"
      },
      {
        "qty": "¼ cup",
        "item": "tamari soy sauce, or coconut aminos"
      },
      {
        "qty": "1 tablespoon",
        "item": "dry sherry, optional - this isn't required, it's just an extra flavor-boost if you have it"
      },
      {
        "qty": "1 tablespoon",
        "item": "honey"
      },
      {
        "qty": "1 teaspoon",
        "item": "sesame oil"
      },
      {
        "qty": "1 teaspoon",
        "item": "rice vinegar, or apple cider vinegar"
      },
      {
        "qty": "1 tablespoon",
        "item": "cornstarch, or arrowroot powder"
      },
      {
        "qty": "2 tablespoons",
        "item": "avocado oil"
      },
      {
        "qty": "1 pound",
        "item": "boneless skinless chicken breast, cut into 1-inch pieces"
      },
      {
        "qty": "to taste",
        "item": "salt and pepper, to taste"
      },
      {
        "qty": "1",
        "item": "red bell pepper, deseeded and chopped"
      },
      {
        "qty": "1 small",
        "item": "carrot, thinly sliced"
      },
      {
        "qty": "2 cups",
        "item": "broccoli florets, cut into bite-sized pieces"
      },
      {
        "qty": "1 small",
        "item": "yellow onion, chopped"
      },
      {
        "qty": "1 tablespoon",
        "item": "finely grated fresh ginger"
      },
      {
        "qty": "4",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1 tablespoon",
        "item": "sesame seeds"
      },
      {
        "qty": "1",
        "item": "green onion, sliced"
      }
    ],
    "steps": [
      "Make the sauce. In a small bowl, whisk together the chicken broth, soy sauce, dry sherry, honey, sesame oil, rice vinegar, and arrowroot powder. Set aside.",
      "Cook the chicken. In a large skillet or wok on medium high heat, add one tablespoon of oil. Add the chicken in a flat layer. Season with salt and black pepper, and cook until lightly browned, about 4 to 5 minutes, stirring as needed. Remove the chicken to a plate.",
      "Cook the vegetables. Leaving any juices in the pan, add one tablespoon of oil along with the red bell pepper, onion, carrot, and broccoli. Cook the vegetables until tender, about 3 to 4 minutes.",
      "Toss it all together. Add the chicken back to the pan with the minced ginger and garlic. Stir for 30 seconds. Pour in the sauce and stir fry for another 1 to 2 minutes, until the sauce thickens.",
      "Garnish with green onion and sesame seeds before serving."
    ],
    "fodmapNote": "Not low-FODMAP as written — yellow onion, four garlic cloves and honey. Broccoli florets are fine at about 3/4 cup per serve; bell pepper, carrot and tamari are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Use maple syrup in place of the honey. Two other chicken stir fries are already in the cookbook, so this one carries the source name."
  },
  {
    "id": "fam-ez-korean-beef-bowl",
    "name": "Korean Beef Bowl",
    "emoji": "🍚",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "gluten-free",
      "high-protein"
    ],
    "source": "https://downshiftology.com/recipes/korean-beef-bowl/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "lean ground beef"
      },
      {
        "qty": "⅓ cup",
        "item": "tamari soy sauce"
      },
      {
        "qty": "2 tablespoons",
        "item": "honey"
      },
      {
        "qty": "2 teaspoons",
        "item": "toasted sesame oil"
      },
      {
        "qty": "4",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "2 teaspoons",
        "item": "freshly minced ginger"
      },
      {
        "qty": "¼ teaspoon",
        "item": "red pepper flakes"
      },
      {
        "qty": "to taste",
        "item": "optional: 1 tablespoon gochujang"
      },
      {
        "qty": "3 cups",
        "item": "cooked white rice"
      },
      {
        "qty": "2 medium",
        "item": "carrots, peeled and grated"
      },
      {
        "qty": "2",
        "item": "Persian cucumbers, halved and sliced"
      },
      {
        "qty": "1",
        "item": "green onion, sliced"
      },
      {
        "qty": "1 teaspoon",
        "item": "sesame seeds"
      }
    ],
    "steps": [
      "Brown the beef. Heat a large skillet over medium-high heat. Add the ground beef and cook for 5 to 6 minutes, breaking it up with your spatula, until browned.",
      "Make the sauce. In a small mixing bowl, whisk together the soy sauce, honey, sesame oil, garlic, ginger, red pepper flakes, and gochujang (if you'd like).",
      "Add the sauce. Pour the sauce over the ground beef and simmer for about 2 minutes, until thickened and coating the ground beef.",
      "Make the Korean beef bowl. Add a portion of rice (about ¾ cup) to a serving bowl. Top with a portion of the beef, some grated carrots, sliced cucumbers, and a sprinkle of green onion and sesame seeds."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, honey and the optional gochujang (which usually contains garlic). Tamari, ginger, rice, carrot and cucumber are fine. Use garlic-infused oil and maple syrup and this one is low-FODMAP. The Rachel Pauls \"30-Minute Korean Beef\" is the ready-made low-FODMAP version."
  },
  {
    "id": "fam-ez-garlic-herb-baked-cod",
    "name": "Garlic Herb Baked Cod",
    "emoji": "🐟",
    "category": "dinner",
    "time": "25 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "sheet-pan",
      "30-min",
      "gluten-free"
    ],
    "source": "https://downshiftology.com/recipes/baked-cod/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4 (6 oz)",
        "item": "cod fillets"
      },
      {
        "qty": "3 tablespoons",
        "item": "butter, softened"
      },
      {
        "qty": "1 tablespoon",
        "item": "extra virgin olive oil"
      },
      {
        "qty": "3",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "2 tablespoons",
        "item": "parsley, chives, thyme or other herbs, finely chopped"
      },
      {
        "qty": "½ teaspoon",
        "item": "paprika"
      },
      {
        "qty": "1",
        "item": "lemon, thinly sliced"
      },
      {
        "qty": "to taste",
        "item": "kosher salt and freshly ground black pepper, to taste"
      }
    ],
    "steps": [
      "Place the cod. Preheat your oven to 400°F (200°C). Place the cod in a baking dish.",
      "Stir the compound butter. In a small bowl, mix together the butter, olive oil, minced garlic, parsley, paprika, salt, and pepper.",
      "Spread it on the cod. Spread the compound butter mixture on top of each filet.",
      "Add the lemon. Lay the lemon slices both on top and under the cod filets.",
      "Bake the cod. Bake in the oven for 13 to 15 minutes, or until the cod is opaque and flakes easily with a fork. Before serving, spoon the juices from the baking dish over the cod."
    ],
    "fodmapNote": "Close to low-FODMAP — the only flag is three cloves of garlic. Cod, butter, herbs, paprika and lemon are fine. Use garlic-infused butter or oil and this one is low-FODMAP."
  },
  {
    "id": "fam-ez-healthy-hamburger-helper",
    "name": "Healthy Hamburger Helper (No Pasta)",
    "emoji": "🍔",
    "category": "dinner",
    "time": "20 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "20-min",
      "gluten-free",
      "high-protein"
    ],
    "source": "https://downshiftology.com/recipes/healthy-hamburger-helper/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "ground beef"
      },
      {
        "qty": "½ medium",
        "item": "yellow onion, finely chopped"
      },
      {
        "qty": "3",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "2 tablespoons",
        "item": "tomato paste"
      },
      {
        "qty": "1 teaspoon",
        "item": "chili powder"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "½ teaspoon",
        "item": "ground black pepper"
      },
      {
        "qty": "2 (15 oz) cans",
        "item": "butter beans, drained and rinsed"
      },
      {
        "qty": "¾ cup",
        "item": "low-sodium beef broth"
      },
      {
        "qty": "1 cup",
        "item": "grated sharp cheddar cheese"
      },
      {
        "qty": "to taste",
        "item": "finely chopped parsley for serving, optional"
      }
    ],
    "steps": [
      "Brown the beef and onion. Heat a large skillet over medium-high heat. Add the ground beef and onion and cook for about 5 minutes, stirring frequently and breaking up the meat with your spatula, until the meat is browned.",
      "Season the beef. Add the minced garlic, tomato paste, chili powder, salt, and pepper. Stir for another minute.",
      "Add the broth and beans. Add the beef broth, stir together, and bring to a simmer. Then stir in the butter beans.",
      "Make it cheesy. Remove the skillet from the heat, add the cheese, and stir until melted. Sprinkle with chopped parsley before serving."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic and two cans of butter beans, which are high-FODMAP in this quantity. Cheddar is fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. This one does not adapt well because the beans are the base; keep it as a family recipe."
  },
  {
    "id": "fam-ez-taco-skillet",
    "name": "Taco Skillet",
    "emoji": "🌮",
    "category": "dinner",
    "time": "30 min",
    "serves": 6,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min"
    ],
    "source": "https://themodernproper.com/taco-skillet",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 pound",
        "item": "90/10 ground beef"
      },
      {
        "qty": "½ medium",
        "item": "yellow onion, chopped"
      },
      {
        "qty": "1 tablespoon",
        "item": "minced garlic"
      },
      {
        "qty": "2 tablespoons",
        "item": "taco seasoning, store-bought or homemade"
      },
      {
        "qty": "2 (10 oz) cans",
        "item": "Rotel seasoned tomatoes"
      },
      {
        "qty": "1 (15 oz) can",
        "item": "black beans, drained and rinsed"
      },
      {
        "qty": "1½ cups",
        "item": "shredded Mexican cheese blend"
      },
      {
        "qty": "to taste",
        "item": "Salsa"
      },
      {
        "qty": "to taste",
        "item": "Sour cream"
      },
      {
        "qty": "to taste",
        "item": "Minced fresh cilantro"
      },
      {
        "qty": "to taste",
        "item": "Sliced avocado"
      },
      {
        "qty": "to taste",
        "item": "Lime wedges"
      },
      {
        "qty": "to taste",
        "item": "Thinly sliced jalapeño"
      },
      {
        "qty": "to taste",
        "item": "Tortilla chips, warmed tortillas, or taco shells"
      }
    ],
    "steps": [
      "Place the beef, onion, and garlic in a large ovenproof skillet over medium-high heat. Cook, breaking up the meat with a wooden spoon, until browned, about 8 minutes.",
      "Stir in the taco seasoning and Rotel and bring to a simmer. Cook, stirring occasionally, until the sauce thickens, about 5 minutes. Stir in the beans and cook until heated through, about 2 minutes more.",
      "Turn on the broiler. Sprinkle the cheese over the skillet and broil until melted and bubbly, 2 to 3 minutes.",
      "Serve with desired toppings and tortilla chips for dipping, or use the skillet and toppings as taco fillings."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, taco seasoning (store-bought blends have onion and garlic powder), Rotel tomatoes with seasonings, and a can of black beans. Cheese is fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Use plain diced tomatoes with green chilies, a homemade seasoning, and about 1/4 cup drained beans per serve."
  },
  {
    "id": "fam-ez-white-bean-sausage-skillet",
    "name": "White Bean Sausage Skillet",
    "emoji": "🍲",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://themodernproper.com/white-bean-sausage-skillet",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoon",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "12 to 14 ounces",
        "item": "smoked or Italian sausage, sliced ¼-inch thick"
      },
      {
        "qty": "3",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "2 (15 oz) cans",
        "item": "white beans (great northern, butter beans or cannellini), drained and rinsed"
      },
      {
        "qty": "1½ cups",
        "item": "chicken stock"
      },
      {
        "qty": "½ teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "¼ teaspoon",
        "item": "freshly cracked black pepper"
      },
      {
        "qty": "1 teaspoon",
        "item": "minced fresh thyme leaves"
      },
      {
        "qty": "½ bunch",
        "item": "curly kale, stemmed, and torn into bite-size pieces, about 3 cups packed"
      },
      {
        "qty": "1 tablespoon",
        "item": "fresh lemon juice, from 1 lemon"
      },
      {
        "qty": "½ cup",
        "item": "freshly grated Parmesan cheese, plus extra for serving"
      },
      {
        "qty": "to taste",
        "item": "Red pepper fakes, for serving, optional"
      },
      {
        "qty": "to taste",
        "item": "Crusty bread, for serving, optional"
      }
    ],
    "steps": [
      "Heat the olive oil in a 12-inch skillet over medium-high heat. Once the oil is glistening, add the sausage and cook until browned on both sides, 4 to 5 minutes. Transfer to a plate.",
      "Add the garlic and cook until fragrant, about 30 seconds. Add two thirds of the beans and 1 cup of the chicken stock. Season with the salt, pepper, and thyme. Stir to combine and bring to a simmer over medium heat.",
      "In a medium bowl, mash the remaining beans with a fork until a thick paste forms. Add the smashed beans to the skillet and stir to combine. Simmer until the beans are heated through and the stock is bubbling, 2 to 3 minutes.",
      "Add the kale, reduce the heat to medium-low, and cook, stirring often, until the sauce becomes creamy, is slightly reduced, and the kale has wilted, about 2 more minutes.",
      "Stir in the Parmesan, lemon juice, and sausage. Add the remaining stock a little at a time if you need more creaminess. Adjust the seasoning to taste. Transfer the sausage back to the skillet and cook, stirring, until the sausage is warmed through.",
      "Serve with extra Parmesan and red pepper flakes, if desired, and crusty bread alongside."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, two cans of white beans, and most sausage is seasoned with garlic and onion. Kale, lemon, thyme and Parmesan are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Pick a plain sausage and keep beans to about 1/4 cup drained per serve."
  },
  {
    "id": "fam-ez-linguine-with-lemon-garlic-sauce",
    "name": "Linguine with Lemon Garlic Sauce",
    "emoji": "🍝",
    "category": "dinner",
    "time": "30 min",
    "serves": 2,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "30-min",
      "vegetarian"
    ],
    "source": "https://themodernproper.com/linguine-with-lemon-garlic-sauce",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "10 ounces",
        "item": "linguine pasta"
      },
      {
        "qty": "¼ cup",
        "item": "finely chopped flat-leaf parsley leaves"
      },
      {
        "qty": "1 teaspoon",
        "item": "lemon zest"
      },
      {
        "qty": "2 teaspoons",
        "item": "red pepper flakes"
      },
      {
        "qty": "1 teaspoon",
        "item": "kosher salt"
      },
      {
        "qty": "3 tablespoons",
        "item": "extra-virgin olive oil"
      },
      {
        "qty": "2 tablespoons",
        "item": "salted butter"
      },
      {
        "qty": "4",
        "item": "garlic cloves, thinly sliced"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh lemon juice, from 2 lemons"
      },
      {
        "qty": "to taste",
        "item": "Freshly grated Parmesan cheese, for serving, optional"
      }
    ],
    "steps": [
      "Bring a large pot of water to a boil over high heat and salt it. Add the linguine and cook until al dente, according to the package instructions. Reserve ½ cup of the pasta cooking water. Drain.",
      "Meanwhile, in a large heat proof bowl, combine the parsley, lemon zest, red pepper flakes, and salt.",
      "In a small saucepan over medium heat, combine the olive oil, butter and garlic. Once the butter is bubbling, pour it over the parsley mixture. Stir to combine.",
      "Add the cooked linguine to the bowl along with the lemon juice and the reserved pasta water. Use tongs to toss the pasta until combined and fully coated.",
      "Serve topped with Parmesan cheese."
    ],
    "fodmapNote": "Not low-FODMAP as written — four cloves of garlic and wheat linguine. Lemon, parsley, butter, olive oil and Parmesan are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Serves 2."
  },
  {
    "id": "fam-ez-chicken-tinga",
    "name": "Chicken Tinga",
    "emoji": "🌮",
    "category": "dinner",
    "time": "30 min",
    "serves": 8,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min",
      "high-protein"
    ],
    "source": "https://themodernproper.com/chicken-tinga",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "2 tablespoons",
        "item": "extra virgin olive oil"
      },
      {
        "qty": "1 medium",
        "item": "yellow onion, chopped"
      },
      {
        "qty": "4",
        "item": "garlic cloves, minced"
      },
      {
        "qty": "1",
        "item": "chipotle pepper in adobo sauce"
      },
      {
        "qty": "1 to 3 teaspoons",
        "item": "adobo sauce, to taste"
      },
      {
        "qty": "2 tablespoons",
        "item": "Taco Seasoning, plus more to taste"
      },
      {
        "qty": "1 (14.5 ounce) can",
        "item": "fire roasted tomatoes"
      },
      {
        "qty": "1 teaspoon",
        "item": "chicken flavored “better than bouillon” or 1 chicken bouillon cube"
      },
      {
        "qty": "4 cups",
        "item": "cooked, shredded chicken"
      },
      {
        "qty": "to taste",
        "item": "Sea salt, to taste"
      },
      {
        "qty": "8",
        "item": "tostada shells or 16 corn tortillas, warmed"
      },
      {
        "qty": "3 cups",
        "item": "Mexican rice"
      },
      {
        "qty": "3 cups",
        "item": "Refried beans"
      },
      {
        "qty": "3 cups",
        "item": "shredded green cabbage"
      },
      {
        "qty": "½ cup",
        "item": "thinly sliced radishes"
      },
      {
        "qty": "½ cup",
        "item": "crumbled cotija or queso fresco"
      },
      {
        "qty": "1",
        "item": "avocado, sliced"
      }
    ],
    "steps": [
      "Heat the oil in a large skillet over medium-high heat. Once the oil is glistening, add the onion and cook, stirring often, until softened, about 6 minutes. Reduce the heat to medium. Add the garlic and cook, stirring, until fragrant, about 1 more minute.",
      "Transfer the onion mixture to a blender. Add the chipotle pepper, adobo sauce (see Note), taco seasoning, tomatoes and bouillon. Blend the sauce on high until smooth, about 1 minute.",
      "Transfer the sauce back to the skillet and bring to a simmer over medium heat. Cook, stirring occasionally until slightly thickened, about 8 minutes. Add the chicken and stir until warmed through. Season with salt, more taco seasoning or adobo sauce, if desired.",
      "Serve the chicken tinga warm with tostada shells, tortillas or over rice. Garnish with cabbage, radishes, cotija and avocado as desired."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, garlic, chipotle in adobo (adobo sauce usually contains onion and garlic), taco seasoning and the refried beans on the side. Shredded chicken, fire-roasted tomatoes, corn tostadas, cabbage, radish and cotija are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Serves 8."
  },
  {
    "id": "fam-ez-chicken-curry",
    "name": "Chicken Curry (Once Upon a Chef)",
    "emoji": "🍛",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.onceuponachef.com/recipes/chicken-curry.html",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1¼ pounds",
        "item": "boneless, skinless chicken breasts, cut into ¼-in (6-mm) strips"
      },
      {
        "qty": "to taste",
        "item": "Salt and freshly ground black pepper"
      },
      {
        "qty": "2½ teaspoons",
        "item": "curry powder, divided"
      },
      {
        "qty": "3 tablespoons",
        "item": "vegetable oil, divided"
      },
      {
        "qty": "1 medium",
        "item": "yellow onion, finely chopped"
      },
      {
        "qty": "4 cloves",
        "item": "garlic, minced"
      },
      {
        "qty": "1 tablespoon",
        "item": "grated fresh ginger"
      },
      {
        "qty": "2 cups",
        "item": "low-sodium chicken broth, best quality such as Swanson"
      },
      {
        "qty": "1 tablespoon",
        "item": "cornstarch"
      },
      {
        "qty": "2 teaspoons",
        "item": "sugar"
      },
      {
        "qty": "1 cup",
        "item": "frozen peas, no need to thaw"
      },
      {
        "qty": "1/4 cup",
        "item": "plain low-fat (2%) or whole Greek yogurt, not nonfat"
      },
      {
        "qty": "¼ cup",
        "item": "chopped fresh cilantro"
      }
    ],
    "steps": [
      "Sprinkle the chicken evenly with ¾ teaspoon salt, ¼ teaspoon pepper and 1 teaspoon curry powder.",
      "Heat 1½ tablespoons of oil in a 12-in (30-cm) skillet over high heat until just smoking. Add the chicken in a single layer and cook, stirring occasionally, until lightly browned but still pink in spots, about 3 minutes. Transfer the partially cooked chicken to a clean bowl and set aside.",
      "Add the remaining 1½ tablespoons oil to the skillet and set heat to medium. Add the onions and cook, stirring occasionally, until softened, about 5 minutes. Stir in the garlic, ginger and remaining 1½ teaspoons curry powder and cook until fragrant, about a minute more.",
      "Whisk the chicken broth and cornstarch together to dissolve the cornstarch, then add to the skillet along with the sugar and ⅛ teaspoon salt. Bring to a boil, then reduce the heat to medium and cook until the sauce is nicely thickened, about 5 minutes.",
      "Add the peas and partially cooked chicken to the skillet, turn the heat down to low and simmer until the chicken is cooked through, a few minutes. Off the heat, stir in the yogurt and cilantro; then season with salt and pepper, to taste. Serve with basmati rice."
    ],
    "fodmapNote": "Not low-FODMAP as written — onion, four cloves of garlic, regular Greek yogurt (lactose) and 1 cup of peas (moderate). Curry powder, ginger, chicken and cilantro are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Use lactose-free yogurt and halve the peas. Several chicken curries are already in the cookbook, so this one carries the source name."
  },
  {
    "id": "fam-ez-thai-red-curry-chicken",
    "name": "Thai Red Curry Chicken (Once Upon a Chef)",
    "emoji": "🍛",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min"
    ],
    "source": "https://www.onceuponachef.com/recipes/thai-red-curry-chicken.html",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "vegetable oil"
      },
      {
        "qty": "1 small",
        "item": "bunch scallions, light and dark green parts, thinly sliced, divided"
      },
      {
        "qty": "3 cloves",
        "item": "garlic, chopped"
      },
      {
        "qty": "1",
        "item": "jalapeño pepper, seeded and diced"
      },
      {
        "qty": "1 (14 oz) can",
        "item": "coconut milk, unsweetened"
      },
      {
        "qty": "2 tablespoons",
        "item": "Thai red curry paste"
      },
      {
        "qty": "2 tablespoons",
        "item": "fish sauce"
      },
      {
        "qty": "2½ tablespoons (packed)",
        "item": "dark brown sugar"
      },
      {
        "qty": "1½ lb",
        "item": "chicken tenderloins, cut into 1-in (2.5-cm) cubes"
      },
      {
        "qty": "1 tablespoon",
        "item": "lime juice, from 1 lime"
      },
      {
        "qty": "¼ cup",
        "item": "chopped fresh cilantro"
      }
    ],
    "steps": [
      "Heat the oil over medium-low heat in a large nonstick pan. Add the light scallions, garlic, and jalapeño and cook, stirring frequently, until softened, 3 to 4 minutes. Do not brown.",
      "Add the coconut milk, red curry paste, fish sauce, and brown sugar, and whisk together. Bring to a gentle boil, then reduce heat and simmer until thickened, a few minutes.",
      "Add the chicken and simmer, uncovered, stirring occasionally to promote even cooking, until the chicken is cooked through, 5 to 6 minutes. (Do not let the sauce boil; the idea is to cook the chicken gently so that it's tender.).",
      "Stir in the lime juice, dark scallion greens, and cilantro. Taste and adjust seasoning with more lime, if necessary. Serve with jasmine rice."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, the light-green parts of the scallions, and store-bought red curry paste (contains garlic and shallot). Coconut milk is moderate in larger serves. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Use only the dark-green scallion tops and a garlic-free curry paste. The RecipeTin \"Thai Red Curry with Chicken\" is already in the cookbook, so this one carries the source name."
  },
  {
    "id": "fam-ez-kung-pao-chicken",
    "name": "Kung Pao Chicken",
    "emoji": "🥜",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://www.onceuponachef.com/recipes/kung-pao-chicken.html",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1½ tablespoons",
        "item": "soy sauce"
      },
      {
        "qty": "1 tablespoon",
        "item": "dry sherry"
      },
      {
        "qty": "2 teaspoons",
        "item": "cornstarch"
      },
      {
        "qty": "1½ lbs",
        "item": "chicken tenderloins, (or boneless skinless chicken breasts), cut into 1-in (2.5-cm) pieces"
      },
      {
        "qty": "1 tablespoon",
        "item": "balsamic vinegar"
      },
      {
        "qty": "2 tablespoons",
        "item": "soy sauce"
      },
      {
        "qty": "1 tablespoon",
        "item": "hoisin sauce, best quality such as Kikkoman or Lee Kum Kee"
      },
      {
        "qty": "1 tablespoon",
        "item": "sesame oil"
      },
      {
        "qty": "1½ tablespoons",
        "item": "sugar"
      },
      {
        "qty": "1 tablespoon",
        "item": "cornstarch"
      },
      {
        "qty": "½ teaspoon",
        "item": "crushed red pepper flakes, use half the amount for a milder sauce"
      },
      {
        "qty": "¼ teaspoon",
        "item": "ground ginger"
      },
      {
        "qty": "⅓ cup",
        "item": "water"
      },
      {
        "qty": "2½ tablespoons",
        "item": "vegetable oil"
      },
      {
        "qty": "1 large",
        "item": "red bell pepper, diced"
      },
      {
        "qty": "2 stalks",
        "item": "celery, halved lengthwise and thinly sliced"
      },
      {
        "qty": "¼ teaspoon",
        "item": "salt"
      },
      {
        "qty": "3 cloves",
        "item": "garlic, chopped"
      },
      {
        "qty": "5",
        "item": "scallions, white and green parts, thinly sliced"
      },
      {
        "qty": "⅓ cup",
        "item": "whole roasted unsalted peanuts or cashews"
      }
    ],
    "steps": [
      "Marinate the chicken: In a medium bowl, whisk together the soy sauce, dry sherry, and cornstarch until the cornstarch is dissolved. Add the chicken and toss to coat. Let stand at room temperature for 15 minutes, stirring occasionally.",
      "Prepare the sauce: In another medium bowl, whisk together all of the sauce ingredients until the cornstarch is dissolved (it can stick to the bottom of the bowl so be sure to scrape it up).",
      "Heat a large nonstick skillet over high heat until very hot. Add 1 tablespoon of the oil and swirl to coat. Add the bell pepper, celery, and salt and cook, stirring frequently, until slightly softened and starting to brown, about 5 minutes. Transfer the vegetables to a large bowl and set aside.",
      "Add an additional ½ tablespoon of oil to the pan and set over high heat. Add half of the chicken and brown on one side, about 1½ minutes. Turn the chicken pieces and continue cooking for about 1½ minutes more, or until the chicken is just cooked through. Transfer the chicken to the bowl with the peppers and celery.",
      "Add another ½ tablespoon of oil to the pan. Add the remaining chicken and cook until golden on one side, about 1½ minutes. Turn the chicken pieces over and cook for 1 minute. Add ½ tablespoon more oil to the pan, along with the garlic and scallions, and cook, stirring with the chicken, for about 30 seconds more.",
      "Add the reserved vegetables and reserved chicken to the pan, along with the sauce. Reduce the heat to low and cook until the chicken and vegetables are warmed through and the sauce is thickened, about 30 seconds. Stir in the nuts.",
      "Taste and adjust seasoning, if necessary, and serve. The sauce will thicken as it sits; thin it with a few tablespoons of water, if necessary."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, the white parts of the scallions, hoisin sauce (contains garlic), two stalks of celery and the cashew option. Soy sauce, sherry, bell pepper, ginger and peanuts are fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta or tortillas. Use peanuts, skip the hoisin or use a low-FODMAP version, and keep celery small."
  },
  {
    "id": "fam-ez-blackened-tilapia",
    "name": "Blackened Tilapia",
    "emoji": "🐟",
    "category": "dinner",
    "time": "15 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "15-min",
      "gluten-free",
      "high-protein"
    ],
    "source": "https://www.onceuponachef.com/recipes/blackened-tilapia.html",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1½ teaspoons",
        "item": "paprika"
      },
      {
        "qty": "1½ teaspoons",
        "item": "light brown sugar"
      },
      {
        "qty": "1 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "¾ teaspoon",
        "item": "garlic powder"
      },
      {
        "qty": "½ teaspoon",
        "item": "ground cumin"
      },
      {
        "qty": "¼ teaspoon",
        "item": "cayenne pepper"
      },
      {
        "qty": "1 teaspoon",
        "item": "salt"
      },
      {
        "qty": "4 (6 oz)",
        "item": "tilapia fillets"
      },
      {
        "qty": "1",
        "item": "lime, cut into wedges (optional, for serving)"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil, for cooking"
      }
    ],
    "steps": [
      "Combine the paprika, brown sugar, oregano, garlic powder, cumin, cayenne pepper and salt in a small bowl; mix until well combined (use your fingers to break up the lumps of brown sugar). Sprinkle the spice rub evenly over both sides of the tilapia fillets.",
      "Heat the olive oil over medium-high heat in a large non-stick pan. Cook the fillets for 2 to 3 minutes on each side until reddish-brown on the outside and flaky on the inside. Serve immediately with lime wedges."
    ],
    "fodmapNote": "Close to low-FODMAP — the only flag is 3/4 teaspoon of garlic powder in the spice rub. Paprika, oregano, cumin, cayenne, brown sugar, lime and tilapia are all fine. Leave out the garlic powder (or use a pinch of asafoetida) and this one is low-FODMAP."
  },
  {
    "id": "fam-ez-one-pot-chicken-alfredo-with-mushrooms",
    "name": "One Pot Chicken Alfredo with Mushrooms",
    "emoji": "🍝",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pot",
      "30-min"
    ],
    "source": "https://cafedelites.com/one-pot-chicken-alfredo/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "9 oz",
        "item": "uncooked pasta, fettuccine"
      },
      {
        "qty": "4 cloves",
        "item": "garlic cloves, grated"
      },
      {
        "qty": "1/2 cup",
        "item": "shallot, (scallions) finely chopped"
      },
      {
        "qty": "5.3 oz",
        "item": "brown mushroom, sliced"
      },
      {
        "qty": "1 tsp",
        "item": "fresh rosemary leaves, chopped"
      },
      {
        "qty": "1 tsp",
        "item": "fresh thyme leaves, chopped"
      },
      {
        "qty": "2",
        "item": "chicken thighs, cut into little cubes, 1/2 inch"
      },
      {
        "qty": "1/3 cup",
        "item": "pinot grigio, or white wine"
      },
      {
        "qty": "1 cup",
        "item": "light cream"
      },
      {
        "qty": "1 cup",
        "item": "parmesan cheese, grated"
      },
      {
        "qty": "5.5 tbsp",
        "item": "butter"
      },
      {
        "qty": "3 cups",
        "item": "chicken broth, stock"
      },
      {
        "qty": "to taste",
        "item": "salt and pepper, to taste"
      }
    ],
    "steps": [
      "In a large pan over medium-high heat, melt the butter.",
      "Once the butter begins to brown, add the chicken, season with salt and pepper, and cook for about 3 minutes until golden.",
      "Add the mushrooms to the pan and cook for 2 minutes, stirring occasionally.",
      "Stir in the herbs, shallots, and garlic, cooking for 1 minute until the shallots are soft and the garlic is fragrant.",
      "Pour in the pinot grigio and let it reduce for 1 minute.",
      "Add the cream and chicken broth, stirring to combine. Bring the mixture to a boil.",
      "Add the pasta DIRECTLY to the pan with the sauce ingredients.",
      "Once the pasta is cooked, stir in the Parmesan cheese. Continue cooking until the sauce achieves a creamy consistency that nicely coats the pasta.",
      "Serve on a plate and garnish with fresh parmesan and freshly chopped parsley."
    ],
    "fodmapNote": "Not low-FODMAP as written — garlic, scallions (use green tops only), mushrooms (high-FODMAP), wheat fettuccine and light cream. Parmesan is fine. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta. Swap the mushrooms for canned champignons, rinsed, or leave them out."
  },
  {
    "id": "fam-ez-honey-soy-chicken-stir-fry",
    "name": "Honey Soy Chicken Stir Fry",
    "emoji": "🍯",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://cafedelites.com/honey-soy-chicken-stir-fry/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "1 tablespoon",
        "item": "vegetable oil"
      },
      {
        "qty": "1 lb",
        "item": "boneless skinless chicken breasts, cut into 1 inch pieces"
      },
      {
        "qty": "2 teaspoons",
        "item": "minced ginger"
      },
      {
        "qty": "2",
        "item": "zucchini, quartered and sliced"
      },
      {
        "qty": "1",
        "item": "red bell pepper, cored, seeded and cut into 1 inch pieces"
      },
      {
        "qty": "1/4 cup",
        "item": "low sodium chicken broth"
      },
      {
        "qty": "1/4 cup",
        "item": "low sodium soy sauce"
      },
      {
        "qty": "3 tablespoons",
        "item": "honey"
      },
      {
        "qty": "2 teaspoons",
        "item": "cornstarch"
      },
      {
        "qty": "2 tablespoons",
        "item": "green onions, sliced"
      },
      {
        "qty": "1 pinch",
        "item": "salt, to taste"
      },
      {
        "qty": "1 pinch",
        "item": "pepper, to taste"
      }
    ],
    "steps": [
      "Heat the oil in a large pan over medium high heat. Season the chicken with salt and pepper to taste.",
      "Add the chicken to the pan in a single layer and cook until browned. You may need to work in batches.",
      "Add the ginger to the chicken and cook for 30 seconds more.",
      "Place the chicken mixture on a plate and cover with foil to keep warm.",
      "Add the zucchini and red bell pepper to the pan and cook for 3-4 minutes or until softened. Add the chicken back to the pan with the vegetables.",
      "In a bowl whisk together the chicken broth, honey and soy sauce.",
      "In a small bowl mix the cornstarch with a tablespoon of cold water.",
      "Pour the chicken broth mixture over the chicken and vegetables; cook for 30 seconds.",
      "Add the cornstarch and bring to a boil; cook for 1 more minute or until sauce has just started to thicken.",
      "Sprinkle with green onions and serve."
    ],
    "fodmapNote": "Close to low-FODMAP — the flags are 3 tablespoons of honey and the green onions. Use maple syrup in place of honey and only the green tops of the onions and this one is low-FODMAP; soy sauce and broth are fine (check the broth for onion and garlic)."
  },
  {
    "id": "fam-ez-garlic-tomato-basil-chicken",
    "name": "Garlic Tomato Basil Chicken",
    "emoji": "🍅",
    "category": "dinner",
    "time": "20 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "20-min",
      "high-protein"
    ],
    "source": "https://cafedelites.com/garlic-tomato-basil-chicken/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4",
        "item": "chicken breasts fillets, skinless and boneless"
      },
      {
        "qty": "1 pinch",
        "item": "salt, to season"
      },
      {
        "qty": "1 pinch",
        "item": "pepper, to season"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "garlic powder"
      },
      {
        "qty": "1 tablespoon",
        "item": "butter, divided"
      },
      {
        "qty": "1 tablespoon",
        "item": "olive oil, divided"
      },
      {
        "qty": "2 cups",
        "item": "grape tomatoes, halved"
      },
      {
        "qty": "1/4 cup",
        "item": "fresh basil, shredded"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "garlic, minced, or 6 large cloves of garlic"
      }
    ],
    "steps": [
      "Lightly pound chicken breasts between 2 sheets of parchment paper until they are all the same thickness. Season with salt, pepper and garlic powder.",
      "Heat 2 teaspoons of oil and 2 teaspoons of butter in a skillet or pan over medium-high heat.",
      "Fry breasts on both sides until golden browned and completely cooked through (about 5-6 minutes per side, depending on the thickness of your fillets).",
      "Once cooked, transfer to a plate and tent with foil to keep warm.",
      "Heat remaining butter and oil in the pan.",
      "Fry garlic until fragrant (about one minute).",
      "Add the tomatoes and cook for two minutes, or until they just begin to soften.",
      "Turn off the heat and stir through basil.",
      "Season with any extra salt and pepper, if needed.",
      "Add the chicken back into the pan, and spoon the pan juices and tomato/garlic mixture all over the chicken!",
      "Perfect to serve with a salad, garlic bread, rice or pasta! Serve with balsamic glaze for extra flavour! (Use store bought, or bring 1/2 cup balsamic vinegar to a simmer over low heat until thickened.)."
    ],
    "fodmapNote": "Not low-FODMAP as written — six cloves of garlic plus garlic powder, which is the point of the dish. Tomatoes, basil and butter are fine. For low-FODMAP, use garlic-infused oil for the whole garlic hit and skip the powder."
  },
  {
    "id": "fam-ez-balsamic-baked-chicken-with-tomato-sauce-and-mozzarella",
    "name": "Balsamic Baked Chicken with Tomato Sauce and Mozzarella",
    "emoji": "🧀",
    "category": "dinner",
    "time": "30 min",
    "serves": 4,
    "difficulty": "easy",
    "tags": [
      "added",
      "easy",
      "weeknight",
      "one-pan",
      "30-min",
      "high-protein"
    ],
    "source": "https://cafedelites.com/balsamic-baked-chicken-breast/",
    "added": "2026-11-10",
    "ingredients": [
      {
        "qty": "4",
        "item": "skinless chicken breasts"
      },
      {
        "qty": "2 tablespoons",
        "item": "olive oil"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "dried oregano"
      },
      {
        "qty": "1/2 teaspoon",
        "item": "dried basil"
      },
      {
        "qty": "1 teaspoon",
        "item": "salt"
      },
      {
        "qty": "1 pinch",
        "item": "cracked pepper, to taste"
      },
      {
        "qty": "1 1/2 tablespoons",
        "item": "minced garlic, 5-6 cloves garlic"
      },
      {
        "qty": "2 cups",
        "item": "grape tomatoes, or cherry tomatoes, halved"
      },
      {
        "qty": "1/4",
        "item": "red onion, peeled and sliced"
      },
      {
        "qty": "1/4 cup",
        "item": "balsamic vinegar"
      },
      {
        "qty": "1 tablespoon",
        "item": "brown sugar, packed"
      },
      {
        "qty": "3/4 cup",
        "item": "mozzarella cheese, fresh shredded"
      },
      {
        "qty": "2 tablespoons",
        "item": "fresh parsley, chopped, or basil, to garnish"
      }
    ],
    "steps": [
      "Place chicken breasts in a baking dish and drizzle with olive oil.",
      "Season with oregano, basil, salt, pepper, and 1 tablespoon of minced garlic.",
      "Arrange the tomatoes and red onion around the chicken in the dish.",
      "Whisk together the balsamic vinegar, sugar and remaining garlic in a jug to combine.",
      "Pour over the chicken breasts, flip each breast in the sauce to evenly coat.",
      "Bake in a preheated oven for 20-25 minutes, or until no longer pink in the middle.",
      "Sprinkle with cheese and broil (or grill) for 4-5 minutes, or until cheese is melted and golden.",
      "Garnish with parsley, and serve with rice or pasta drizzled with the pan juices."
    ],
    "fodmapNote": "Not low-FODMAP as written — 5-6 cloves of garlic and 1/4 red onion. Mozzarella, tomatoes, balsamic and brown sugar are fine in these amounts. For low-FODMAP: swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, use lactose-free dairy or a hard cheese, and choose gluten-free pasta."
  }
];

// Add to the family collection, skipping any id already present.
if (typeof FAMILY_RECIPES !== 'undefined') {
  const seen = new Set(FAMILY_RECIPES.map(r => r.id));
  EASY_WEEKNIGHT_RECIPES.forEach(r => { if (!seen.has(r.id)) { FAMILY_RECIPES.push(r); seen.add(r.id); } });
}
