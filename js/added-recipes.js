// ─────────────────────────────────────────────────────────────
//  ADDED RECIPES — recipes sent in after the OneNote import
//
//  Everything added via the "add-recipe" skill lands here, newest last.
//  Each entry keeps its source link and carries an `added` date so it shows
//  under the 🆕 Newest filter.
//
//  These are family recipes (no 'fodmap' tag), so they show under the
//  🍽️ Family filter. The fodmapNote on each one names what makes it
//  high-FODMAP as written, read off its own ingredient list.
//
//  To add one:  see .claude/skills/add-recipe/SKILL.md
// ─────────────────────────────────────────────────────────────

const ADDED_RECIPES = [

  // ── new recipes go here ──

  {
      "id": "fam-add-greek-chicken-gyros-with-tzatziki",
      "name": "Greek Chicken Gyros with Tzatziki",
      "emoji": "🍗",
      "category": "dinner",
      "time": "26 min",
      "serves": 4,
      "difficulty": "easy",
      "tags": [
          "added"
      ],
      "source": "https://www.recipetineats.com/greek-chicken-gyros-with-tzatziki/",
      "added": "2026-08-22",
      "ingredients": [
          {
              "qty": "2 lb",
              "item": "/ 1 kg chicken thigh fillets, boneless skinless"
          },
          {
              "qty": "3 large",
              "item": "garlic cloves, minced (~ 3 tsp)"
          },
          {
              "qty": "1 tbsp",
              "item": "white wine vinegar, or red wine or apple cider vinegar"
          },
          {
              "qty": "3 tbsp",
              "item": "lemon juice"
          },
          {
              "qty": "1 tbsp",
              "item": "extra virgin olive oil"
          },
          {
              "qty": "3 tbsp",
              "item": "Greek yogurt, preferably full fat"
          },
          {
              "qty": "1 1/2 tbsp",
              "item": "dried oregano"
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
              "qty": "2",
              "item": "cucumbers, to make about 1/2 - 3/4 cup grated cucumber after squeezing out juice"
          },
          {
              "qty": "1 1/4 cups",
              "item": "Greek yoghurt, preferably full fat"
          },
          {
              "qty": "1 tbsp",
              "item": "lemon juice"
          },
          {
              "qty": "1 tbsp",
              "item": "extra virgin olive oil, or more if you want richer"
          },
          {
              "qty": "1",
              "item": "garlic clove, minced"
          },
          {
              "qty": "1/4 tsp",
              "item": "salt"
          },
          {
              "qty": "to taste",
              "item": "Black pepper"
          },
          {
              "qty": "3",
              "item": "tomatoes, desseeded and diced"
          },
          {
              "qty": "3",
              "item": "cucumbers, diced"
          },
          {
              "qty": "1/2",
              "item": "red spanish onion, peeled and finely chopped"
          },
          {
              "qty": "1/4 cup",
              "item": "fresh parsley leaves, optional"
          },
          {
              "qty": "to taste",
              "item": "Salt and pepper"
          },
          {
              "qty": "4 to 6",
              "item": "pita breads or flat breads"
          }
      ],
      "steps": [
          "Place the Marinade ingredients in a ziplock bag and massage to mix. Add the chicken into the ziplock bag and massage to cover all the chicken in the Marinade. Marinate for at least 2 hours, preferably 3 hours, ideally 12 hours and no longer than 24 hours.",
          "Cut the cucumber in half lengthwise. Use a teaspoon to scrape the watery seeds out. Coarsely grate the cucumber using a box grater. Then wrap in paper towels or a tea towel and squeeze to remove excess liquid.",
          "Place cucumber in a bowl. Add remaining ingredients then mix to combine. Set aside for at least 20 minutes for the flavours to meld.",
          "Combine ingredients in a bowl.",
          "Brush the outdoor grill with oil, then preheat on medium high. Or heat 1 tbsp of oil in a fry pan over medium high heat.",
          "Remove chicken from Marinade. Cook the chicken for 2 to 3 minutes on each side, until golden brown and cooked through (cooking time depends on size of chicken).",
          "Remove the chicken from the grill / fry pan onto a plate. Cover loosely with foil and allow to rest for 5 minutes before serving.",
          "If your chicken thighs are large, you may need to cut them. Mine were small.",
          "Get a pita bread or flatbread (preferably warmed) and place it on a piece of parchment (baking) paper (or you could use foil). Place some Salad down the middle of the bread, then top with chicken and Tzatziki.",
          "Roll the wrap up, enclosing it with the parchment paper. Twist the end with the excess parchment paper to secure it and cut if desired.",
          "I prefer to lay everything out on a table and let everyone help themselves."
      ],
      "fodmapNote": "Not low-FODMAP as written — onion, garlic, lactose. Swap fresh garlic and onion for garlic-infused oil and the green tops of spring onions, replace packet mixes with your own herbs and spices, use lactose-free dairy or a hard cheese, and keep canned legumes to about 1/4 cup drained and rinsed per serve."
  },

];

// Add to the family collection, skipping any id already present.
if (typeof FAMILY_RECIPES !== 'undefined') {
  const seen = new Set(FAMILY_RECIPES.map(r => r.id));
  ADDED_RECIPES.forEach(r => { if (!seen.has(r.id)) { FAMILY_RECIPES.push(r); seen.add(r.id); } });
}
