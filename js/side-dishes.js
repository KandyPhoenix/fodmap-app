// Side-dish tagging.
// The imported family cookbook has many side dishes (mashed potatoes, pasta
// salads, coleslaw, cornbread, gravy, roasted veg, etc.) filed under meal
// categories like "dinner" or "lunch". This tags them with 'side' so the app
// can keep them OUT of meal views and the planner, surfacing them only under
// the dedicated "Sides" filter.
//
// Classifier is deliberately CONSERVATIVE — a false positive (hiding a real
// dinner) is worse than a miss. It only matches specific side-dish foods in the
// dish's SUBJECT (the part before "with/over/served"), guarded by a broad
// main-dish word list, and it skips the curated collections (Super Age + your
// own recipes), only classifying family / FODMAP recipes.
(function () {
  // Broad "this is a main dish" guard — if any of these appear in the subject,
  // it's never a side (protects "Grilled Grouper with Salsa", "Fish Tacos", etc.)
  var MAIN = /\b(chicken|beef|steak|pork|turkey|salmon|shrimp|prawn|cod|tilapia|haddock|halibut|trout|tuna|mahi|grouper|scallops?|crab|lobster|fish|lamb|ribs?|brisket|wings?|sausage|meatloaf|meatballs?|burgers?|chili|curry|enchilada|lasagna|bolognese|stir[- ]?fry|jambalaya|stew|soup|chowder|bisque|gumbo|pot pie|shepherd'?s? pie|fajitas?|quesadillas?|tacos?|risotto|paella|(^|\s)dal(\s|$)|tikka|masala|carnitas|sloppy joe|gnocchi|ramen|pad thai|scampi|piccata|marsala|parmigiana|schnitzel|kebabs?|gyros?|shawarma|frittata|shakshuka|tri[- ]?tip|tenderloin|chops?|roast|drumsticks?|thighs?|cutlets?|fillets?|filets?|sandwich|wrap|burrito|pizza|noodles?|casserole|bowl)\b/i;

  // Specific side-dish foods (matched against the subject only).
  var SIDE = /\b(mashed potatoes?|roasted potatoes?|potato salad|scalloped potatoes?|au gratin|smashed potatoes?|potato wedges?|home ?fries|french fries|tater tots?|hasselback potatoes?|green beans?|glazed carrots?|roasted (vegetables?|carrots?|broccoli|asparagus|brussels( sprouts)?|cauliflower|beets?|butternut squash|sweet potatoes?)|saut[eé]ed (spinach|mushrooms|green beans|zucchini|greens)|creamed (spinach|corn)|corn on the cob|elote|coleslaw|(broccoli |ramen |asian )?slaw|collard greens|brussels sprouts?|dinner rolls?|garlic bread|corn ?bread|buttermilk biscuits?|(^|\s)stuffing|rice pilaf|dirty rice|spanish rice|mac(aroni)? ?(and|n'?) ?cheese|pasta salad|fruit salad|pea salad|caprese (salad|skewers)|cucumber salad|broccoli salad|three bean salad|wedge salad|deviled eggs|baked beans|loaded (cauliflower|potatoes?)|cauliflower (mash|rice)|cheesy potatoes?|ranch potatoes?|greek potatoes?|skillet potatoes?|roasted red potatoes?|new potatoes?|sauteed mushrooms|garlicky? mushrooms|roasted mushrooms)\b/i;

  // Standalone condiments/dressings (short names that ARE the sauce).
  var COND = /\b(salsa|guacamole|hummus|gravy|salad dressing|dressing|pesto|chutney|relish|aioli|tzatziki|vinaigrette)\)?$/i;

  function subjectOf(name) {
    return String(name || '').split(/\s+(?:with|over|topped|served|on a bed|in a)\s+/i)[0];
  }

  function isSide(r) {
    if (!r || !r.name) return false;
    var id = String(r.id || '');
    // Skip curated collections — these are intentional meals/snacks.
    if (id.indexOf('sa-') === 0 || id.indexOf('kandy-') === 0 || id.indexOf('diet-') === 0) return false;
    var name = r.name;
    var subj = subjectOf(name);
    if (MAIN.test(subj)) return false;
    if (SIDE.test(subj)) return true;
    if (COND.test(name) && name.trim().split(/\s+/).length <= 4 && !MAIN.test(name)) return true;
    return false;
  }

  // Expose for the app / debugging. SIDE_DISH_IDS is the source of truth the app
  // filters on — matching by id is robust even when getAllRecipes() hands back a
  // copy of a recipe that missed the in-place tag (some recipes exist as
  // duplicate ids across family arrays).
  window.isSideDish = isSide;
  window.SIDE_DISH_IDS = window.SIDE_DISH_IDS || new Set();

  var count = 0;
  ['KANDY_RECIPES', 'RECIPES', 'FAMILY_RECIPES', 'FAMILY_COOKBOOK', 'FAMILY_CLIPS', 'FAMILY_TYPED'].forEach(function (nm) {
    var arr;
    try { arr = (typeof window[nm] !== 'undefined') ? window[nm] : eval('typeof ' + nm + ' !== "undefined" ? ' + nm + ' : undefined'); } catch (e) { arr = undefined; }
    if (!Array.isArray(arr)) return;
    arr.forEach(function (r) {
      if (isSide(r)) {
        window.SIDE_DISH_IDS.add(r.id);
        if (!Array.isArray(r.tags)) r.tags = [];
        if (r.tags.map(function (t) { return String(t).toLowerCase(); }).indexOf('side') === -1) {
          r.tags.push('side');
          count++;
        }
      }
    });
  });
  try { console.log('[side-dishes] tagged ' + count + ' side dishes'); } catch (e) {}
})();
