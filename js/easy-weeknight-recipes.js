// ─────────────────────────────────────────────────────────────
//  EASY WEEKNIGHT RECIPES — quick, low-effort dinners pulled from
//  reliable recipe sites (RecipeTin Eats, Skinnytaste, Spend With Pennies,
//  Well Plated, Natasha's Kitchen, Minimalist Baker).
//
//  Each recipe keeps its source link, with ingredients and method taken
//  from the recipe page's own structured data. Most are 30 minutes or
//  less; the two sheet-pan roasts run longer but are hands-off.
//
//  Regular family recipes (no 'fodmap' tag) — they show under the
//  🍽️ Family filter. Each fodmapNote names what makes it high-FODMAP as
//  written and how to adapt it for a low-FODMAP plate.
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
  }
];

// Add to the family collection, skipping any id already present.
if (typeof FAMILY_RECIPES !== 'undefined') {
  const seen = new Set(FAMILY_RECIPES.map(r => r.id));
  EASY_WEEKNIGHT_RECIPES.forEach(r => { if (!seen.has(r.id)) { FAMILY_RECIPES.push(r); seen.add(r.id); } });
}
