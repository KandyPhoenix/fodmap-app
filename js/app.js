(() => {















  // ══════════════════════════════════════════







  //  USER RECIPE STORAGE







  // ══════════════════════════════════════════







  function getUserRecipes() {







    try { return JSON.parse(localStorage.getItem('fodmap-user-recipes') || '[]'); }







    catch(e) { return []; }







  }







  function saveUserRecipes(list) {







    try { localStorage.setItem('fodmap-user-recipes', JSON.stringify(list)); }







    catch(e) {}







    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();







  }







  function getBuiltinRecipes() {







    return [...(typeof KANDY_RECIPES !== 'undefined' ? KANDY_RECIPES : []), ...RECIPES];







  }







  function isBuiltinId(id) {







    return getBuiltinRecipes().some(b => b.id === id);







  }







  function hasUserOverride(id) {







    return getUserRecipes().some(r => r.id === id);







  }







  function getAllRecipes() {







    const builtins   = getBuiltinRecipes();







    const builtinIds = new Set(builtins.map(b => b.id));







    const userList   = getUserRecipes();







    const overrides  = new Map(userList.map(r => [r.id, r]));







    const merged = [];







    // User-created recipes (those that aren't edits of a built-in) stay at the top







    userList.forEach(r => { if (!builtinIds.has(r.id)) merged.push(r); });







    // Built-ins, swapped for the user's edited copy when one exists







    builtins.forEach(b => merged.push(overrides.get(b.id) || b));







    return merged;







  }















  // ══════════════════════════════════════════







  //  STATE







  // ══════════════════════════════════════════







  let currentView = 'planner';







  let foodCategory = 'all', foodRating = 'all', searchQuery = '';







  let recipeCategory = 'all';







  let recipeFilter = 'all';

  // Ingredients/foods the user wants recipes to be WITHOUT (lowercase terms).
  // Persisted so the list survives page reloads.
  function loadExcludeFoods() {
    try {
      const arr = JSON.parse(localStorage.getItem('fodmap-exclude-foods') || '[]');
      return Array.isArray(arr) ? arr.filter(t => typeof t === 'string') : [];
    } catch (e) { return []; }
  }

  function saveExcludeFoods() {
    try { localStorage.setItem('fodmap-exclude-foods', JSON.stringify(excludeFoods)); } catch (e) {}
  }

  let excludeFoods = loadExcludeFoods();







  let lastRecipeList = [];







  let pickerCategory = 'all', pickerSearch = '';







  let weekOffset = 0;







  let meals = loadMeals();







  let pendingCell = null;







  let editingRecipeId = null;







  let progressMonthOffset = 0;        // 0 = latest visible month is the current month







  let progress = loadProgress();      // { 'YYYY-MM-DD': true } map of days the plan was followed















  // ══════════════════════════════════════════







  //  DOM







  // ══════════════════════════════════════════







  const searchInput      = document.getElementById('search-input');







  const searchWrap       = document.getElementById('search-wrap');







  const clearBtn         = document.getElementById('clear-btn');







  const modalOverlay     = document.getElementById('modal-overlay');







  const pickerOverlay    = document.getElementById('picker-overlay');







  const shoppingOverlay  = document.getElementById('shopping-overlay');







  const recipeFormOverlay = document.getElementById('recipe-form-overlay');







  const scrollTop        = document.getElementById('scroll-top');















  // ══════════════════════════════════════════







  //  NAVIGATION







  // ══════════════════════════════════════════







  document.querySelectorAll('.nav-btn').forEach(btn => {







    btn.addEventListener('click', () => {







      currentView = btn.dataset.view;







      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));







      btn.classList.add('active');







      document.getElementById('view-foods').classList.toggle('hidden',   currentView !== 'foods');







      document.getElementById('view-recipes').classList.toggle('hidden', currentView !== 'recipes');







      document.getElementById('view-planner').classList.toggle('hidden', currentView !== 'planner');







      document.getElementById('view-subs').classList.toggle('hidden',    currentView !== 'subs');







      document.getElementById('view-checker').classList.toggle('hidden', currentView !== 'checker');







      document.getElementById('view-snacks').classList.toggle('hidden',  currentView !== 'snacks');







      document.getElementById('view-reminders').classList.toggle('hidden', currentView !== 'reminders');







      document.getElementById('view-diary').classList.toggle('hidden',   currentView !== 'diary');







      document.getElementById('view-reintro').classList.toggle('hidden', currentView !== 'reintro');







      document.getElementById('view-dining').classList.toggle('hidden',  currentView !== 'dining');







      document.getElementById('view-finds').classList.toggle('hidden',   currentView !== 'finds');







      if (currentView === 'subs') renderSubsView();







      if (currentView === 'finds') renderFindsView();







      if (currentView === 'snacks') renderSnacksView();







      if (currentView === 'reminders') renderRemindersView();







      if (currentView === 'diary') renderDiaryView();







      if (currentView === 'reintro') renderReintroView();







      if (currentView === 'dining') renderDiningView();







      searchInput.placeholder = currentView === 'recipes' ? 'Search recipes…' : currentView === 'subs' ? 'Search substitutions…' : currentView === 'checker' ? 'Search foods or recipes…' : currentView === 'finds' ? 'Search finds…' : currentView === 'snacks' ? 'Search snacks…' : currentView === 'planner' ? 'Search foods or recipes…' : 'Search foods…';







    });







  });















  // ══════════════════════════════════════════







  //  SEARCH







  // ══════════════════════════════════════════







  searchInput.addEventListener('input', () => {







    searchQuery = searchInput.value.trim().toLowerCase();







    searchWrap.classList.toggle('has-value', searchQuery.length > 0);







    if (currentView === 'foods') renderFoodGrid();







    else if (currentView === 'recipes') renderRecipeGrid();







    else if (currentView === 'subs') renderSubsView();







    else if (currentView === 'finds') renderFindsView();







    else if (currentView === 'snacks') renderSnacksView();







  });







  clearBtn.addEventListener('click', () => {







    searchInput.value = ''; searchQuery = '';







    searchWrap.classList.remove('has-value');







    searchInput.focus();







    if (currentView === 'foods') renderFoodGrid();







    else if (currentView === 'recipes') renderRecipeGrid();







    else if (currentView === 'subs') renderSubsView();







    else if (currentView === 'finds') renderFindsView();







    else if (currentView === 'snacks') renderSnacksView();







  });















  // ══════════════════════════════════════════







  //  SCROLL TOP







  // ══════════════════════════════════════════







  window.addEventListener('scroll', () => scrollTop.classList.toggle('visible', window.scrollY > 300));







  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));















  // ══════════════════════════════════════════







  //  MODAL HELPERS







  // ══════════════════════════════════════════







  function closeAll() {







    [modalOverlay, pickerOverlay, shoppingOverlay, recipeFormOverlay].forEach(el => el.classList.add('hidden'));







    document.body.style.overflow = '';







  }







  function openOverlay(el) {







    el.classList.remove('hidden');







    document.body.style.overflow = 'hidden';







  }







  [modalOverlay, pickerOverlay, shoppingOverlay, recipeFormOverlay].forEach(ov => {





  // ── Sourdough starter reminder ─────────────────────────

  (function checkStarterReminder() {

    const lastFed = localStorage.getItem('starter-last-fed');

    if (!lastFed) return;

    const daysSince = (Date.now() - parseInt(lastFed)) / (1000 * 60 * 60 * 24);

    if (daysSince >= 7) {

      const banner = document.createElement('div');

      banner.id = 'starter-banner';

      banner.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#ff7043;color:white;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:600;z-index:9999;display:flex;gap:12px;align-items:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);max-width:90vw;';

      banner.innerHTML = '<span>🍞 Time to feed your sourdough starter!</span><button onclick="localStorage.setItem(\'starter-last-fed\', Date.now()); document.getElementById(\'starter-banner\').remove();" style="background:white;color:#ff7043;border:none;border-radius:8px;padding:4px 10px;font-weight:700;cursor:pointer;white-space:nowrap;">Fed it!</button><button onclick="document.getElementById(\'starter-banner\').remove();" style="background:none;border:none;color:white;font-size:18px;cursor:pointer;padding:0 4px;">×</button>';

      document.body.appendChild(banner);

    }

  })();







    ov.addEventListener('click', e => { if (e.target === ov) closeAll(); });







  });







  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });















  // ══════════════════════════════════════════







  //  ①  FOOD GUIDE







  // ══════════════════════════════════════════







  (function initFoodGuide() {







    const catBar = document.getElementById('food-categories');







    CATEGORIES.forEach(cat => {







      const btn = document.createElement('button');







      btn.className = 'cat-btn' + (cat.id === 'all' ? ' active' : '');







      btn.dataset.cat = cat.id;







      btn.innerHTML = `<span class="cat-emoji">${cat.emoji}</span>${cat.label}`;







      btn.addEventListener('click', () => {







        document.querySelectorAll('#food-categories .cat-btn').forEach(b => b.classList.remove('active'));







        btn.classList.add('active');







        foodCategory = cat.id;







        renderFoodGrid();







      });







      catBar.appendChild(btn);







    });







    document.querySelectorAll('.rating-filter').forEach(btn => {







      btn.addEventListener('click', () => {







        document.querySelectorAll('.rating-filter').forEach(b => b.classList.remove('active'));







        btn.classList.add('active');







        foodRating = btn.dataset.rating;







        renderFoodGrid();







      });







    });







    renderFoodGrid();







  })();















  function renderFoodGrid() {







    const grid  = document.getElementById('food-grid');







    const noRes = document.getElementById('food-no-results');







    const count = document.getElementById('food-count');







    const foods = FOODS.filter(f => {







      if (foodCategory !== 'all' && f.category !== foodCategory) return false;







      if (foodRating   !== 'all' && f.rating   !== foodRating)   return false;







      if (searchQuery) return (f.name + ' ' + f.category).toLowerCase().includes(searchQuery);







      return true;







    });







    grid.innerHTML = '';







    if (!foods.length) { noRes.classList.remove('hidden'); count.textContent = ''; return; }







    noRes.classList.add('hidden');







    count.textContent = `${foods.length} food${foods.length !== 1 ? 's' : ''}`;







    foods.forEach(food => {







      const card = document.createElement('div');







      card.className = `food-card rating-${food.rating}`;







      const dots = food.servings.map(s => `<span class="dot ${s.rating}" title="${s.label}: ${s.amount}"></span>`).join('');







      const safe = food.servings.find(s => s.rating === 'green');







      const hint = safe







        ? `<div class="card-serving">✓ ${safe.amount}</div>`







        : food.rating === 'red' ? `<div class="card-serving" style="color:var(--red)">Avoid</div>` : '';







      card.innerHTML = `<div class="card-emoji">${food.emoji}</div><div class="card-name">${food.name}</div><div class="traffic-lights">${dots}</div>${hint}`;







      card.addEventListener('click', () => openFoodModal(food));







      grid.appendChild(card);







    });







  }















  function openFoodModal(food) {







    const cat = CATEGORIES.find(c => c.id === food.category) || {};







    const rows = food.servings.map(s => `<div class="serving-row ${s.rating}"><span class="dot lg ${s.rating}"></span><div class="serving-info"><div class="serving-amount">${s.amount}</div><div class="serving-label">${s.label}</div></div></div>`).join('');







    const fodmapSection = (food.fodmaps && food.fodmaps.length)







      ? `<div class="fodmap-tags">${food.fodmaps.map(k => { const t = FODMAP_TYPES[k]; return t ? `<span class="fodmap-tag" style="background:${t.color}">${t.label}</span>` : ''; }).join('')}</div>`







      : `<div class="no-fodmap">✅ No significant FODMAPs detected</div>`;







    modalOverlay.innerHTML = `







      <div class="modal" role="dialog">







        <button class="modal-close" id="mc1">✕</button>







        <div class="modal-header"><div class="modal-emoji">${food.emoji}</div><div><div class="modal-title">${food.name}</div><div class="cat-badge">${cat.emoji || ''} ${cat.label || ''}</div></div></div>







        <div class="modal-section"><div class="section-title">Serving Sizes</div><div class="serving-rows">${rows}</div></div>







        <div class="modal-section"><div class="section-title">FODMAPs Present</div>${fodmapSection}</div>







        <div class="tip-section"><div class="tip-box"><div class="tip-heading">💡 Tip</div><div class="tip-text">${food.tip}</div></div></div>







        <div class="legend"><div class="legend-item"><span class="dot green"></span> Low FODMAP</div><div class="legend-item"><span class="dot yellow"></span> Moderate</div><div class="legend-item"><span class="dot red"></span> High FODMAP</div></div>







      </div>`;







    document.getElementById('mc1').addEventListener('click', closeAll);



    // Sourdough starter tracker button

    const existingStarterBtn = document.getElementById('starter-fed-btn');

    if (existingStarterBtn) existingStarterBtn.remove();

    if (recipe.starterReminder) {

      const btn = document.createElement('button');

      btn.id = 'starter-fed-btn';

      const lastFed = localStorage.getItem('starter-last-fed');

      const daysAgo = lastFed ? Math.floor((Date.now() - parseInt(lastFed)) / (1000*60*60*24)) : null;

      btn.textContent = daysAgo === null ? '🌱 Tap here each time you feed your starter' : daysAgo === 0 ? '🌱 Starter fed today!' : `🌱 Last fed ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago — tap to mark as fed`;

      btn.style.cssText = 'display:block;width:calc(100% - 48px);margin:0 24px 16px;padding:13px;background:#fff3e0;border:2px solid #ff7043;border-radius:10px;color:#e64a19;font-weight:700;font-size:14px;cursor:pointer;text-align:center;';

      btn.onclick = () => {

        localStorage.setItem('starter-last-fed', Date.now());

        btn.textContent = '🌱 Starter fed today!';

        const b = document.getElementById('starter-banner');

        if (b) b.remove();

      };

      const modalBody = document.querySelector('.rmodal-body') || modalOverlay.querySelector('.rmodal');

      if (modalBody) modalBody.appendChild(btn);

    }



    openOverlay(modalOverlay);







  }















  // ══════════════════════════════════════════







  //  ②  RECIPES







  // ══════════════════════════════════════════







  (function initRecipes() {







    const catBar = document.getElementById('recipe-categories');







    RECIPE_CATEGORIES.forEach(cat => {







      const btn = document.createElement('button');







      btn.className = 'cat-btn' + (cat.id === 'all' ? ' active' : '');







      btn.dataset.cat = cat.id;







      btn.innerHTML = `<span class="cat-emoji">${cat.emoji}</span>${cat.label}`;







      btn.addEventListener('click', () => {







        document.querySelectorAll('#recipe-categories .cat-btn').forEach(b => b.classList.remove('active'));







        btn.classList.add('active');







        recipeCategory = cat.id;







        renderRecipeGrid();







      });







      catBar.appendChild(btn);







    });















    document.getElementById('add-recipe-btn').addEventListener('click', () => openRecipeForm(null));







    document.querySelectorAll('#recipe-filters .rfilter').forEach(btn => {



      btn.addEventListener('click', () => {



        document.querySelectorAll('#recipe-filters .rfilter').forEach(b => b.classList.remove('active'));



        btn.classList.add('active');



        recipeFilter = btn.dataset.filter;



        renderRecipeGrid();



      });



    });







    // ── "Without" exclude-foods controls ───────────────────
    const excludeInput = document.getElementById('exclude-input');
    const excludeClear = document.getElementById('exclude-clear');

    function renderExcludeChips() {
      const wrap = document.getElementById('exclude-chips');
      if (!wrap) return;
      wrap.innerHTML = '';
      excludeFoods.forEach(term => {
        const chip = document.createElement('span');
        chip.className = 'exclude-chip';
        const label = document.createElement('span');
        label.textContent = term;
        const x = document.createElement('button');
        x.type = 'button';
        x.setAttribute('aria-label', 'Remove ' + term);
        x.textContent = '✕';
        x.addEventListener('click', () => removeExcludeFood(term));
        chip.appendChild(label);
        chip.appendChild(x);
        wrap.appendChild(chip);
      });
      if (excludeClear) excludeClear.classList.toggle('hidden', excludeFoods.length === 0);
    }

    function addExcludeFoods(raw) {
      // Accept comma-separated entries; ignore blanks and duplicates.
      String(raw).split(',').forEach(part => {
        const term = part.trim().toLowerCase();
        if (term && !excludeFoods.includes(term)) excludeFoods.push(term);
      });
      saveExcludeFoods();
      renderExcludeChips();
      renderRecipeGrid();
    }

    function removeExcludeFood(term) {
      excludeFoods = excludeFoods.filter(t => t !== term);
      saveExcludeFoods();
      renderExcludeChips();
      renderRecipeGrid();
    }

    if (excludeInput) {
      excludeInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          addExcludeFoods(excludeInput.value);
          excludeInput.value = '';
        } else if (e.key === 'Backspace' && excludeInput.value === '' && excludeFoods.length) {
          removeExcludeFood(excludeFoods[excludeFoods.length - 1]);
        }
      });
      // Commit whatever is typed when focus leaves the field.
      excludeInput.addEventListener('blur', () => {
        if (excludeInput.value.trim()) {
          addExcludeFoods(excludeInput.value);
          excludeInput.value = '';
        }
      });
    }

    if (excludeClear) {
      excludeClear.addEventListener('click', () => {
        excludeFoods = [];
        saveExcludeFoods();
        renderExcludeChips();
        renderRecipeGrid();
        if (excludeInput) excludeInput.focus();
      });
    }

    // Restore any persisted exclusions on load.
    renderExcludeChips();


    const surpriseBtn = document.getElementById('surprise-recipe-btn');



    if (surpriseBtn) surpriseBtn.addEventListener('click', () => {



      const pool = lastRecipeList.length ? lastRecipeList



        : getAllRecipes().filter(r => r.category === 'lunch' || r.category === 'dinner');



      if (!pool.length) return;



      const pick = pool[Math.floor(Math.random() * pool.length)];



      openRecipeModal(pick);



    });







    renderRecipeGrid();







  })();







  // ── Recipe favorites + smart filters ──────────────────────



  function getFavorites() {



    try { return JSON.parse(localStorage.getItem('fodmap-favorites') || '[]'); } catch(e) { return []; }



  }



  function isFavorite(id) { return getFavorites().includes(id); }



  function toggleFavorite(id) {



    let favs = getFavorites();



    favs = favs.includes(id) ? favs.filter(x => x !== id) : favs.concat(id);



    try { localStorage.setItem('fodmap-favorites', JSON.stringify(favs)); } catch(e) {}



    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();



  }







  function recipeMinutes(r) {



    const m = String(r.time || '').match(/\d+/);



    return m ? parseInt(m[0], 10) : 999;



  }



  function recipeMatchesFilter(r, filter) {



    if (filter === 'all') return true;



    if (filter === 'favorites') return isFavorite(r.id);



    if (filter === 'airfryer') return (typeof AIRFRYER !== 'undefined' && !!AIRFRYER[r.id]);



    if (filter === 'quick') return recipeMinutes(r) <= 20;



    const tags = (r.tags || []).map(t => t.toLowerCase());



    if (filter === 'veggie') return tags.includes('vegetarian') || tags.includes('vegan');



    const text = (r.name + ' ' + (r.ingredients || []).map(i => i.item).join(' ')).toLowerCase();



    if (filter === 'chicken') return /\b(chicken|turkey|poultry)\b/.test(text);



    if (filter === 'seafood') return /\b(salmon|tuna|cod|tilapia|shrimp|prawn|fish|seafood|scampi|haddock|crab)\b/.test(text);



    if (filter === 'redmeat') return /\b(beef|steak|pork|lamb|sausage|meatball|meatloaf|carnitas|bolognese|mince)\b/.test(text);



    return true;



  }



  // Searchable text for a recipe: its name plus every ingredient.
  function recipeIngredientText(r) {
    return (r.name + ' ' + (r.ingredients || []).map(i => i.item).join(' ')).toLowerCase();
  }

  // True if the recipe contains ANY of the foods the user wants to avoid.
  function recipeHasExcludedFood(r) {
    if (!excludeFoods.length) return false;
    const text = recipeIngredientText(r);
    return excludeFoods.some(term => term && text.includes(term));
  }















  function getRecipeNutrition(id) {







    const n = (typeof RECIPE_NUTRITION !== 'undefined' && RECIPE_NUTRITION[id]) ? RECIPE_NUTRITION[id] : null;







    const cal = n ? n.cal : ((typeof RECIPE_CALORIES !== 'undefined' && RECIPE_CALORIES[id]) ? RECIPE_CALORIES[id] : null);







    return {







      cal,







      protein: n ? n.protein : null,







      fiber:   n ? n.fiber   : null,







    };







  }















  function renderRecipeGrid() {







    const grid  = document.getElementById('recipe-grid');







    const noRes = document.getElementById('recipe-no-results');







    const count = document.getElementById('recipe-count');







    const all = getAllRecipes();







    const list = all.filter(r => {







      if (recipeCategory === 'dietician-plan') { if (!(r.tags || []).includes('dietician-plan')) return false; }







      else if (recipeCategory !== 'all' && r.category !== recipeCategory) return false;







      if (!recipeMatchesFilter(r, recipeFilter)) return false;



      if (recipeHasExcludedFood(r)) return false;






      if (searchQuery) return (r.name + ' ' + r.category).toLowerCase().includes(searchQuery);







      return true;







    });







    lastRecipeList = list;







    grid.innerHTML = '';







    if (!list.length) { noRes.classList.remove('hidden'); count.textContent = ''; return; }







    noRes.classList.add('hidden');







    const userCount = getUserRecipes().length;







    count.textContent = `${list.length} recipe${list.length !== 1 ? 's' : ''}${userCount > 0 ? ` (${userCount} mine)` : ''}`;















    list.forEach(r => {







      const isUser = r.isCustom === true;







      const card = document.createElement('div');







      card.className = 'recipe-card' + (isUser ? ' user-recipe' : '');







      const tags = (r.tags || []).map(t => `<span class="recipe-tag">${t}</span>`).join('');







      const nut = getRecipeNutrition(r.id);







      const calHtml     = nut.cal     != null ? `<span class="recipe-cal">🔥 ${nut.cal} cal</span>` : '';







      const proteinHtml = nut.protein != null ? `<span class="recipe-nut recipe-protein">💪 ${nut.protein}g protein</span>` : '';







      const fiberHtml   = nut.fiber   != null ? `<span class="recipe-nut recipe-fiber">🌾 ${nut.fiber}g fibre</span>` : '';







      card.innerHTML = `







        <div class="recipe-card-banner">







          ${isUser ? '<span class="my-recipe-badge">⭐ My Recipe</span>' : ''}







          <button class="fav-heart${isFavorite(r.id) ? ' active' : ''}" data-fav="${r.id}" title="Save to favorites" aria-label="Save to favorites">${isFavorite(r.id) ? '❤️' : '🤍'}</button>







          ${r.emoji || '🍽️'}







          <span class="recipe-difficulty ${r.difficulty || 'easy'}">${r.difficulty || 'easy'}</span>







        </div>







        <div class="recipe-card-body">







          <div class="recipe-name">${r.name}</div>







          <div class="recipe-meta"><span>⏱ ${r.time || '—'}</span><span>👥 Serves ${r.serves || '—'}</span></div>







          <div class="recipe-nutrition">${calHtml}${proteinHtml}${fiberHtml}</div>







          <div class="recipe-tags">${tags}</div>







        </div>`;







      card.addEventListener('click', () => openRecipeModal(r));







      const heart = card.querySelector('.fav-heart');







      if (heart) heart.addEventListener('click', e => {



        e.stopPropagation();



        toggleFavorite(r.id);



        const on = isFavorite(r.id);



        heart.classList.toggle('active', on);



        heart.textContent = on ? '❤️' : '🤍';



        if (recipeFilter === 'favorites' && !on) renderRecipeGrid();



      });







      grid.appendChild(card);







    });







  }















  function getPortionAlerts(recipe) {







    const allText = (recipe.ingredients || []).map(i => (i.qty + ' ' + i.item).toLowerCase()).join(' ');







    const seen = new Set();







    const found = [];







    for (const watch of (typeof FODMAP_PORTION_WATCH !== 'undefined' ? FODMAP_PORTION_WATCH : [])) {







      if (seen.has(watch.label)) continue;







      if (watch.triggers.some(t => allText.includes(t.toLowerCase()))) {







        seen.add(watch.label);







        found.push(watch);







      }







    }







    return found;







  }















  function getHealthySwaps(recipe) {







    const allText = (recipe.ingredients || []).map(i => (i.qty + ' ' + i.item).toLowerCase()).join(' ');







    const seen = new Set();







    const found = [];







    for (const swap of (typeof HEALTHY_SWAPS !== 'undefined' ? HEALTHY_SWAPS : [])) {







      if (found.length >= 3) break;







      const key = swap.from;







      if (seen.has(key)) continue;







      if (swap.triggers.some(t => allText.includes(t.toLowerCase()))) {







        seen.add(key);







        found.push(swap);







      }







    }







    return found;







  }















  function openRecipeModal(recipe) {







    const isUser = recipe.isCustom === true;







    const isUserCreated  = !isBuiltinId(recipe.id);          // a recipe the user made from scratch







    const isEditedBuiltin = !isUserCreated && hasUserOverride(recipe.id); // a built-in the user has edited







    const baseServes = recipe.serves || 2;







    const recipeNut = getRecipeNutrition(recipe.id);







    const recipeCal = recipeNut.cal;















    function buildIngList(multiplier) {







      return (recipe.ingredients || []).map((ing, i) => {







        if (ing.item === '—') return `<li style="padding:4px 12px;font-size:12px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px">${ing.qty}</li>`;







        let qtyDisplay = convertGrams(ing.qty);







        if (multiplier !== 1) {







          qtyDisplay = `<span class="scaled-qty" title="Scaled from ${ing.qty}">${convertGrams(ing.qty)} ×${multiplier}</span>`;







        }







        return `<li class="ingredient-item" data-idx="${i}"><div class="ingredient-check"></div><div class="ingredient-qty">${qtyDisplay}</div><div class="ingredient-name">${ing.item}</div></li>`;







      }).join('');







    }















    const ingList = buildIngList(1);







    const stepsList = (recipe.steps || []).map((step, i) => `<li class="step-item" data-step="${i}"><div class="step-num">${i + 1}</div><div class="step-text">${step}</div></li>`).join('');







    const userControls = `







      <div style="padding:0 24px 8px;display:flex;gap:10px">







        <button class="action-btn" style="background:#fff3e0;color:#ff7043;flex:1" id="edit-recipe-btn">✏️ Edit Recipe</button>







        ${isUserCreated







          ? '<button class="action-btn danger" id="delete-recipe-btn">🗑 Delete</button>'







          : (isEditedBuiltin ? '<button class="action-btn" id="reset-recipe-btn" style="background:var(--bg);color:var(--text)">↩️ Reset</button>' : '')}







      </div>`;







    const addPlannerBtn = `<div style="padding:0 24px 24px"><button class="action-btn primary" id="add-to-planner-btn" style="width:100%;padding:12px">📅 Add to Meal Planner</button></div>`;







    const bannerClass = isUser ? 'rmodal-banner user-recipe-banner' : 'rmodal-banner';







    const badgeHtml   = isUser ? `<div style="display:inline-block;background:#ff7043;color:white;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:800;letter-spacing:0.5px;margin-bottom:8px">⭐ MY RECIPE</div>` : '';







    const fodmapNoteHtml = (recipe.fodmapNote || recipe.fodmapnote)







      ? `<div class="rmodal-section"><div class="rmodal-section-title">💡 FODMAP Notes</div><div class="fodmap-note-box"><div class="fodmap-note-text">${recipe.fodmapNote || recipe.fodmapnote}</div></div></div>`







      : '';







    const notesHtml = recipe.notes







      ? `<div class="rmodal-section"><div class="rmodal-section-title">📝 My Notes</div><div class="my-notes-box">${escHtml(recipe.notes).replace(/\n/g, '<br>')}</div></div>`







      : '';







    const afSteps = (typeof AIRFRYER !== 'undefined' && AIRFRYER[recipe.id]) ? AIRFRYER[recipe.id] : null;







    const airfryerHtml = afSteps ? `







      <div class="rmodal-section airfryer-section">







        <div class="rmodal-section-title">🌬️ Air Fryer Method</div>







        <ul class="steps-list">${afSteps.map((s, i) => `<li class="step-item"><div class="step-num">${i + 1}</div><div class="step-text">${escHtml(s)}</div></li>`).join('')}</ul>







        <div class="airfryer-tip">Times vary by model and basket size — check a few minutes early the first time. Cook in batches if the basket is crowded.</div>







      </div>` : '';















    const alerts = getPortionAlerts(recipe);







    const alertsHtml = alerts.length ? `







      <div class="rmodal-section">







        <div class="rmodal-section-title">⚠️ Portion Watch</div>







        <div class="portion-alert-box">







          <div class="portion-alert-intro">This recipe contains moderate-FODMAP ingredients. Stick to these limits per person:</div>







          ${alerts.map(a => `







            <div class="portion-alert-row">







              <span class="portion-alert-label">${escHtml(a.label)}</span>







              <span class="portion-alert-safe">${escHtml(a.safe)}</span>







            </div>`).join('')}







        </div>







      </div>` : '';















    const swaps = getHealthySwaps(recipe);







    const swapsHtml = swaps.length ? `







      <div class="rmodal-section">







        <div class="rmodal-section-title">💚 Healthier Swaps</div>







        <div class="swap-cards">







          ${swaps.map(s => `







            <div class="swap-card">







              <div class="swap-row">







                <span class="swap-from">${escHtml(s.from)}</span>







                <span class="swap-arrow">→</span>







                <span class="swap-to">${s.emoji} ${escHtml(s.to)}</span>







              </div>







              <div class="swap-benefit">${escHtml(s.benefit)}</div>







            </div>`).join('')}







        </div>







      </div>` : '';















    modalOverlay.innerHTML = `







      <div class="recipe-modal" role="dialog">







        <button class="modal-close" id="mc2" style="background:rgba(255,255,255,0.85)">✕</button>







        <div class="${bannerClass}">







          ${badgeHtml}







          <button class="rmodal-fav${isFavorite(recipe.id) ? ' active' : ''}" id="rmodal-fav">${isFavorite(recipe.id) ? '❤️ Favorited' : '🤍 Add to favorites'}</button>







          <span class="rmodal-emoji">${recipe.emoji || '🍽️'}</span>







          <div class="rmodal-title">${recipe.name}</div>







          <div class="rmodal-meta">







            <div class="rmodal-meta-item">⏱ ${recipe.time || '—'}</div>







            <div class="rmodal-meta-item">👥 Serves ${recipe.serves || '—'}</div>







            <div class="rmodal-meta-item" style="text-transform:capitalize">📊 ${recipe.difficulty || 'easy'}</div>







          </div>







          ${(recipeNut.cal != null || recipeNut.protein != null || recipeNut.fiber != null) ? `







          <div class="rmodal-nutrition">







            ${recipeNut.cal != null     ? `<div class="rmodal-nut-item"><div class="rmodal-nut-val">${recipeNut.cal}</div><div class="rmodal-nut-label">🔥 calories</div></div>` : ''}







            ${recipeNut.protein != null ? `<div class="rmodal-nut-item"><div class="rmodal-nut-val">${recipeNut.protein}g</div><div class="rmodal-nut-label">💪 protein</div></div>` : ''}







            ${recipeNut.fiber != null   ? `<div class="rmodal-nut-item"><div class="rmodal-nut-val">${recipeNut.fiber}g</div><div class="rmodal-nut-label">🌾 fibre</div></div>` : ''}







          </div>







          <div class="rmodal-nut-note">Per serving · estimated</div>` : ''}







          <div class="rmodal-tags">${(recipe.tags || []).map(t => `<span class="rmodal-tag">${t}</span>`).join('')}</div>







        </div>







        ${userControls}







        <div class="rmodal-section">







          <div class="rmodal-section-header">







            <div class="rmodal-section-title">🛒 Ingredients</div>







            <div class="serves-scaler">







              <span class="serves-label">Serves:</span>







              <button class="serves-btn" id="serves-down">−</button>







              <span class="serves-count" id="serves-count">${baseServes}</span>







              <button class="serves-btn" id="serves-up">+</button>







            </div>







          </div>







          <div class="serves-note" id="serves-note"></div>







          <ul class="ingredient-list" id="ing-list">${ingList}</ul>







        </div>







        <div class="rmodal-section"><div class="rmodal-section-title">👩‍🍳 Instructions</div><ul class="steps-list">${stepsList}</ul></div>







        ${airfryerHtml}







        ${fodmapNoteHtml}







        ${notesHtml}







        ${alertsHtml}







        ${swapsHtml}







        ${addPlannerBtn}







      </div>`;















    document.getElementById('mc2').addEventListener('click', closeAll);







    const rmodalFav = document.getElementById('rmodal-fav');







    if (rmodalFav) rmodalFav.addEventListener('click', () => {



      toggleFavorite(recipe.id);



      const on = isFavorite(recipe.id);



      rmodalFav.classList.toggle('active', on);



      rmodalFav.textContent = on ? '❤️ Favorited' : '🤍 Add to favorites';



      renderRecipeGrid();



    });







    document.querySelectorAll('.ingredient-item').forEach(li => li.addEventListener('click', () => li.classList.toggle('checked')));







    document.querySelectorAll('.step-item').forEach(li => li.addEventListener('click', () => li.classList.toggle('done')));















    // Serves scaler







    let currentServes = baseServes;







    function updateServes(newServes) {







      if (newServes < 1 || newServes > 50) return;







      currentServes = newServes;







      const multiplier = Math.round((currentServes / baseServes) * 10) / 10;







      document.getElementById('serves-count').textContent = currentServes;







      const ingListEl = document.getElementById('ing-list');







      ingListEl.innerHTML = buildIngList(multiplier === 1 ? 1 : multiplier);







      ingListEl.querySelectorAll('.ingredient-item').forEach(li => li.addEventListener('click', () => li.classList.toggle('checked')));







      const noteEl = document.getElementById('serves-note');







      if (currentServes !== baseServes) {







        noteEl.textContent = `Multiply each ingredient by ×${multiplier} from the original ${baseServes}-serving recipe.`;







        noteEl.style.display = 'block';







      } else {







        noteEl.style.display = 'none';







      }







    }







    document.getElementById('serves-down').addEventListener('click', () => updateServes(currentServes - 1));







    document.getElementById('serves-up').addEventListener('click', () => updateServes(currentServes + 1));















    document.getElementById('add-to-planner-btn').addEventListener('click', () => {







      closeAll();







      document.querySelector('[data-view="planner"]').click();







      setTimeout(() => openPicker(null, null, recipe), 120);







    });







    document.getElementById('edit-recipe-btn').addEventListener('click', () => { closeAll(); openRecipeForm(recipe); });







    if (isUserCreated) {







      document.getElementById('delete-recipe-btn').addEventListener('click', () => deleteUserRecipe(recipe.id, recipe.name));







    } else if (isEditedBuiltin) {







      document.getElementById('reset-recipe-btn').addEventListener('click', () => resetBuiltinRecipe(recipe.id, recipe.name));







    }







    openOverlay(modalOverlay);







  }















  // ══════════════════════════════════════════







  //  ②a  RECIPE FORM (Add / Edit)







  // ══════════════════════════════════════════







  let ingredientRows = [];







  let stepRows = [];















  function openRecipeForm(existing) {







    editingRecipeId = existing ? existing.id : null;







    const isEdit = !!existing;







    document.getElementById('form-modal-title').textContent = isEdit ? '✏️ Edit Recipe' : '✏️ Add My Recipe';















    // Populate fields







    document.getElementById('rf-emoji').value      = existing ? (existing.emoji || '') : '';







    document.getElementById('rf-name').value       = existing ? existing.name : '';







    document.getElementById('rf-category').value   = existing ? (existing.category || 'dinner') : 'dinner';







    document.getElementById('rf-time').value       = existing ? (existing.time || '') : '';







    document.getElementById('rf-serves').value     = existing ? (existing.serves || 2) : 2;







    document.getElementById('rf-difficulty').value = existing ? (existing.difficulty || 'easy') : 'easy';







    document.getElementById('rf-tags').value       = existing ? (existing.tags || []).join(', ') : '';







    document.getElementById('rf-fodmap-note').value = existing ? (existing.fodmapNote || '') : '';







    document.getElementById('rf-notes').value      = existing ? (existing.notes || '') : '';







    document.getElementById('rf-name').classList.remove('error');















    // Ingredients







    ingredientRows = existing







      ? (existing.ingredients || []).filter(i => i.item !== '—').map(i => ({ qty: i.qty, item: i.item }))







      : [{ qty: '', item: '' }];







    renderIngredientRows();















    // Steps







    stepRows = existing







      ? (existing.steps || []).slice()







      : [''];







    renderStepRows();















    // Buttons







    document.getElementById('recipe-form-close').onclick = closeAll;







    document.getElementById('rf-cancel-btn').onclick     = closeAll;







    document.getElementById('rf-save-btn').onclick       = saveRecipeFromForm;















    // Delete (own recipes) vs. Reset to original (edited built-ins) vs. nothing yet







    const delBtn = document.getElementById('rf-delete-btn');







    if (isEdit && !isBuiltinId(existing.id)) {







      delBtn.classList.remove('hidden');







      delBtn.textContent = '🗑 Delete Recipe';







      delBtn.onclick = () => deleteUserRecipe(existing.id, existing.name);







    } else if (isEdit && hasUserOverride(existing.id)) {







      delBtn.classList.remove('hidden');







      delBtn.textContent = '↩️ Reset to Original';







      delBtn.onclick = () => resetBuiltinRecipe(existing.id, existing.name);







    } else {







      delBtn.classList.add('hidden');







    }







    document.getElementById('add-ingredient-btn').onclick = () => {







      ingredientRows.push({ qty: '', item: '' });







      renderIngredientRows();







    };







    document.getElementById('add-step-btn').onclick = () => {







      stepRows.push('');







      renderStepRows();







    };















    openOverlay(recipeFormOverlay);







    document.getElementById('rf-name').focus();







  }















  function renderIngredientRows() {







    const el = document.getElementById('rf-ingredients-list');







    el.innerHTML = '';







    ingredientRows.forEach((row, i) => {







      const div = document.createElement('div');







      div.className = 'ingredient-form-row';







      div.innerHTML = `







        <input class="ing-qty" type="text" placeholder="Qty (e.g. 2 tbsp)" value="${escHtml(row.qty)}">







        <input class="ing-item" type="text" placeholder="Ingredient (e.g. olive oil)" value="${escHtml(row.item)}">







        <button class="remove-row-btn" title="Remove">−</button>`;







      div.querySelector('.ing-qty').addEventListener('input',  e => { ingredientRows[i].qty  = e.target.value; });







      div.querySelector('.ing-item').addEventListener('input', e => { ingredientRows[i].item = e.target.value; });







      div.querySelector('.remove-row-btn').addEventListener('click', () => {







        ingredientRows.splice(i, 1);







        renderIngredientRows();







      });







      el.appendChild(div);







    });







  }















  function renderStepRows() {







    const el = document.getElementById('rf-steps-list');







    el.innerHTML = '';







    stepRows.forEach((step, i) => {







      const div = document.createElement('div');







      div.className = 'step-form-row';







      div.innerHTML = `







        <div class="step-form-num">${i + 1}</div>







        <textarea placeholder="Describe this step…">${escHtml(step)}</textarea>







        <button class="remove-row-btn" title="Remove">−</button>`;







      div.querySelector('textarea').addEventListener('input', e => { stepRows[i] = e.target.value; });







      div.querySelector('.remove-row-btn').addEventListener('click', () => {







        stepRows.splice(i, 1);







        renderStepRows();







      });







      el.appendChild(div);







    });







  }















  function saveRecipeFromForm() {







    const name = document.getElementById('rf-name').value.trim();







    if (!name) {







      document.getElementById('rf-name').classList.add('error');







      document.getElementById('rf-name').focus();







      return;







    }















    const ingredients = ingredientRows







      .filter(r => r.item.trim())







      .map(r => ({ qty: r.qty.trim() || '—', item: r.item.trim() }));















    const steps = stepRows.filter(s => s.trim());















    const tagRaw = document.getElementById('rf-tags').value;







    const tags   = tagRaw.split(',').map(t => t.trim()).filter(Boolean);















    // Start from the existing recipe so any fields the form doesn't cover survive an edit







    const existing = editingRecipeId ? getAllRecipes().find(r => r.id === editingRecipeId) : null;







    const recipe = Object.assign({}, existing || {}, {







      id:         editingRecipeId || 'user-' + Date.now(),







      name,







      emoji:      document.getElementById('rf-emoji').value.trim() || '🍽️',







      category:   document.getElementById('rf-category').value,







      time:       document.getElementById('rf-time').value.trim() || '—',







      serves:     parseInt(document.getElementById('rf-serves').value, 10) || 2,







      difficulty: document.getElementById('rf-difficulty').value,







      tags,







      ingredients,







      steps,







      fodmapNote: document.getElementById('rf-fodmap-note').value.trim(),







      notes:      document.getElementById('rf-notes').value.trim(),







      // Keep a built-in looking built-in; only scratch-made recipes get the "My Recipe" badge







      isCustom:   existing ? (existing.isCustom === true) : true,







    });















    const list = getUserRecipes();







    if (editingRecipeId) {







      const idx = list.findIndex(r => r.id === editingRecipeId);







      if (idx >= 0) list[idx] = recipe; else list.push(recipe);







    } else {







      list.unshift(recipe);







    }







    saveUserRecipes(list);







    renderRecipeGrid();







    renderPlanner();







    closeAll();







  }















  function deleteUserRecipe(id, name) {







    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;







    const list = getUserRecipes().filter(r => r.id !== id);







    saveUserRecipes(list);







    renderRecipeGrid();







    renderPlanner();







    closeAll();







  }















  // Drop a user's edits to a built-in recipe, restoring the original







  function resetBuiltinRecipe(id, name) {







    if (!confirm(`Reset "${name}" back to the original recipe? Your changes will be removed.`)) return;







    const list = getUserRecipes().filter(r => r.id !== id);







    saveUserRecipes(list);







    renderRecipeGrid();







    renderPlanner();







    closeAll();







  }















  function escHtml(str) {







    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');







  }















  // ══════════════════════════════════════════







  //  SNACKS (on-the-go low-FODMAP ideas)







  // ══════════════════════════════════════════







  function renderSnacksView() {







    const data = typeof SNACKS !== 'undefined' ? SNACKS : [];







    const q = searchQuery.toLowerCase();







    const el = document.getElementById('snacks-content');







    if (!el) return;







    el.innerHTML = '';







    data.forEach(group => {







      const items = group.items.filter(it =>







        !q || it.name.toLowerCase().includes(q) || it.note.toLowerCase().includes(q));







      if (!items.length) return;







      const section = document.createElement('div');







      section.className = 'snack-group' + (group.id === 'avoid' ? ' snack-group-avoid' : '');







      section.innerHTML = `<div class="snack-group-title">${group.label}</div>` +







        items.map(it => `







          <div class="snack-card">







            <div class="snack-name">${escHtml(it.name)}</div>







            <div class="snack-note">${escHtml(it.note)}</div>







          </div>`).join('');







      el.appendChild(section);







    });







    if (!el.children.length) {







      el.innerHTML = '<div class="no-results"><div class="no-results-icon">🥨</div><p>No snacks match your search.</p></div>';







    }







  }















  // ══════════════════════════════════════════







  //  ③  MEAL PLANNER







  // ══════════════════════════════════════════







  document.getElementById('prev-week').addEventListener('click', () => { weekOffset--; renderPlanner(); });







  document.getElementById('next-week').addEventListener('click', () => { weekOffset++; renderPlanner(); });







  document.getElementById('clear-week-btn').addEventListener('click', () => {







    if (!confirm('Clear all meals for this week?')) return;







    getWeekDays().forEach(d => {







      ['breakfast','lunch','dinner','snack'].forEach(m => delete meals[`${d.key}-${m}`]);







    });







    saveMeals(); renderPlanner();







  });







  document.getElementById('shopping-list-btn').addEventListener('click', openShoppingList);















  function getWeekDays() {







    const now = new Date();







    const monday = new Date(now);







    monday.setDate(now.getDate() - ((now.getDay() + 6) % 7) + weekOffset * 7);







    return Array.from({ length: 7 }, (_, i) => {







      const d = new Date(monday);







      d.setDate(monday.getDate() + i);







      const key = d.toISOString().slice(0, 10);







      return { key, label: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()], date: d.getDate(), month: d.getMonth() + 1, isToday: key === new Date().toISOString().slice(0, 10) };







    });







  }















  const MEAL_TYPES = [







    { id: 'breakfast', label: '☀️ Breakfast' },







    { id: 'lunch',     label: '🥗 Lunch' },







    { id: 'dinner',    label: '🍴 Dinner' },







    { id: 'snack',     label: '🍎 Snack' },







  ];















  function renderPlanner() {







    const days = getWeekDays();







    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];







    document.getElementById('week-label').textContent = `${days[0].date} ${months[days[0].month-1]} – ${days[6].date} ${months[days[6].month-1]}`;







    const grid = document.getElementById('planner-grid');







    grid.innerHTML = '';















    // Header







    const corner = document.createElement('div');







    corner.className = 'planner-col-header row-label';







    grid.appendChild(corner);







    days.forEach(d => {







      const el = document.createElement('div');







      el.className = 'planner-col-header' + (d.isToday ? ' today' : '');







      el.innerHTML = `<div class="planner-day-name">${d.label}</div><div class="planner-day-date">${d.month}/${d.date}</div>`;







      grid.appendChild(el);







    });















    // Rows







    MEAL_TYPES.forEach(mtype => {







      const label = document.createElement('div');







      label.className = `planner-row-label meal-row-${mtype.id}`;







      label.textContent = mtype.label;







      grid.appendChild(label);















      days.forEach(d => {







        const cell = document.createElement('div');







        cell.className = `planner-cell meal-row-${mtype.id}${d.isToday ? ' today-col' : ''}`;







        cell.dataset.dateKey = d.key;







        cell.dataset.mealType = mtype.id;







        const mealKey = `${d.key}-${mtype.id}`;







        const meal = meals[mealKey];















        if (meal) {







          const r = meal.type === 'recipe' ? getAllRecipes().find(x => x.id === meal.id) : null;







          const displayName = r ? r.name : (meal.text || 'Meal');







          const displayEmoji = r ? (r.emoji || '🍽️') : '📝';







          const isLF = !!meal.leftover;







          const nut = r ? getRecipeNutrition(r.id) : null;
          const nutLine = (nut && (nut.cal != null || nut.protein != null || nut.fiber != null))
            ? `<span class="meal-chip-nut">${nut.cal != null ? `🔥${nut.cal}` : ''}${nut.protein != null ? ` · 💪${nut.protein}g` : ''}${nut.fiber != null ? ` · 🌾${nut.fiber}g` : ''}</span>`
            : ''
          const chip = document.createElement('div');







          chip.className = 'meal-chip' + (isLF ? ' leftover' : '');







          chip.innerHTML = `







            <button class="meal-chip-lf${isLF ? ' active' : ''}" title="${isLF ? 'Remove leftover mark' : 'Mark as leftover'}">♻</button>







            <span class="meal-chip-text">${nutLine}<span class="meal-chip-name">${isLF ? '<span class="lf-badge">LF</span> ' : ''}${displayEmoji} ${displayName}</span></span>







            <button class="meal-chip-remove" title="Remove">×</button>`;







          if (r) chip.querySelector('.meal-chip-text').addEventListener('click', () => openRecipeModal(r));







          chip.querySelector('.meal-chip-lf').addEventListener('click', e => {







            e.stopPropagation();







            meals[mealKey].leftover = !meals[mealKey].leftover;







            saveMeals(); renderPlanner();







          });







          chip.querySelector('.meal-chip-remove').addEventListener('click', e => {







            e.stopPropagation();







            delete meals[mealKey];







            saveMeals(); renderPlanner();







          });







          attachChipDrag(chip, mealKey);







          cell.appendChild(chip);







        }















        const addBtn = document.createElement('button');







        addBtn.className = 'add-meal-btn';







        addBtn.textContent = '+';







        addBtn.addEventListener('click', () => openPicker(d.key, mtype.id));







        cell.appendChild(addBtn);







        grid.appendChild(cell);







      });







    });







  }















  // ── Drag meals between days (long-press to grab) ───────







  let mealDragState = null;















  function moveMeal(sourceKey, targetKey) {







    const src = meals[sourceKey];







    if (!src) return;







    const dst = meals[targetKey];          // swap if the target slot is taken







    meals[targetKey] = src;







    if (dst) meals[sourceKey] = dst; else delete meals[sourceKey];







    saveMeals();







  }















  function attachChipDrag(chip, sourceKey) {







    chip.addEventListener('pointerdown', e => {







      if (mealDragState) return;                                     // another drag in progress







      if (e.target.closest('.meal-chip-lf, .meal-chip-remove')) return; // let the buttons handle taps







      if (e.pointerType === 'mouse' && e.button !== 0) return;















      const startX = e.clientX, startY = e.clientY;







      let started = false;







      const longPress = setTimeout(beginDrag, 220);















      function beginDrag() {







        started = true;







        const rect = chip.getBoundingClientRect();







        const clone = chip.cloneNode(true);







        clone.classList.add('meal-chip-dragging');







        clone.style.width = rect.width + 'px';







        document.body.appendChild(clone);







        mealDragState = { sourceKey, clone, targetCell: null,







                          offsetX: startX - rect.left, offsetY: startY - rect.top };







        chip.classList.add('meal-chip-source');







        document.body.classList.add('dragging-meal');







        if (navigator.vibrate) navigator.vibrate(15);







        positionClone(startX, startY);







      }















      function positionClone(x, y) {







        const s = mealDragState;







        if (!s) return;







        s.clone.style.left = (x - s.offsetX) + 'px';







        s.clone.style.top  = (y - s.offsetY) + 'px';







        const under = document.elementFromPoint(x, y);







        const cell = under ? under.closest('.planner-cell') : null;







        if (s.targetCell && s.targetCell !== cell) s.targetCell.classList.remove('drop-target');







        if (cell) cell.classList.add('drop-target');







        s.targetCell = cell;







      }















      function onMove(ev) {







        if (!started) {







          if (Math.abs(ev.clientX - startX) > 8 || Math.abs(ev.clientY - startY) > 8) {







            clearTimeout(longPress); cleanup();   // moved first → it's a scroll, not a drag







          }







          return;







        }







        ev.preventDefault();







        positionClone(ev.clientX, ev.clientY);







      }















      function onUp(ev) {







        clearTimeout(longPress);







        if (started) {







          ev.preventDefault();







          const cell = mealDragState.targetCell;







          if (cell) {







            const targetKey = `${cell.dataset.dateKey}-${cell.dataset.mealType}`;







            if (targetKey !== sourceKey) moveMeal(sourceKey, targetKey);







          }







          // swallow the click that fires right after a drag







          const swallow = ce => { ce.stopPropagation(); ce.preventDefault(); };







          document.addEventListener('click', swallow, { capture: true, once: true });







          setTimeout(() => document.removeEventListener('click', swallow, true), 350);







          endDrag();







        }







        cleanup();







      }















      function endDrag() {







        const s = mealDragState;







        if (!s) return;







        s.clone.remove();







        if (s.targetCell) s.targetCell.classList.remove('drop-target');







        document.body.classList.remove('dragging-meal');







        mealDragState = null;







        renderPlanner();







      }















      function cleanup() {







        document.removeEventListener('pointermove', onMove);







        document.removeEventListener('pointerup', onUp);







        document.removeEventListener('pointercancel', onUp);







      }















      document.addEventListener('pointermove', onMove);







      document.addEventListener('pointerup', onUp);







      document.addEventListener('pointercancel', onUp);







    });







  }















  // ══════════════════════════════════════════







  //  ③b  PROGRESS TRACKER (gold-star calendar)







  // ══════════════════════════════════════════







  const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];







  const WEEKDAY_LETTERS = ['S','M','T','W','T','F','S'];















  function loadProgress() {







    try { return JSON.parse(localStorage.getItem('fodmap-planner-progress') || '{}'); } catch(e) { return {}; }







  }







  function saveProgress() {







    try { localStorage.setItem('fodmap-planner-progress', JSON.stringify(progress)); } catch(e) {}







    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();







  }







  function isoKey(year, month, day) {







    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;







  }















  const progPrevBtn = document.getElementById('progress-prev');







  const progNextBtn = document.getElementById('progress-next');







  if (progPrevBtn) progPrevBtn.addEventListener('click', () => { progressMonthOffset--; renderProgress(); });







  if (progNextBtn) progNextBtn.addEventListener('click', () => { if (progressMonthOffset < 0) { progressMonthOffset++; renderProgress(); } });















  function renderProgress() {







    const carousel = document.getElementById('progress-carousel');







    if (!carousel) return;







    const today = new Date();







    const todayKey = isoKey(today.getFullYear(), today.getMonth(), today.getDate());







    carousel.innerHTML = '';







    // Show three consecutive months, ending at (current month + offset).







    for (let i = -2; i <= 0; i++) {







      const first = new Date(today.getFullYear(), today.getMonth() + progressMonthOffset + i, 1);







      carousel.appendChild(buildMonthBox(first, todayKey));







    }







    // Can't peek past the current month — disable the "later" arrow when we're there.







    if (progNextBtn) progNextBtn.disabled = progressMonthOffset >= 0;







  }















  function buildMonthBox(firstOfMonth, todayKey) {







    const year = firstOfMonth.getFullYear();







    const month = firstOfMonth.getMonth();







    const daysInMonth = new Date(year, month + 1, 0).getDate();







    const startWeekday = new Date(year, month, 1).getDay();















    let count = 0;







    for (let day = 1; day <= daysInMonth; day++) if (progress[isoKey(year, month, day)]) count++;















    const box = document.createElement('div');







    box.className = 'month-box';















    const title = document.createElement('div');







    title.className = 'month-box-title';







    title.innerHTML = `<span class="month-box-name">${MONTH_NAMES[month]} ${year}</span>` +







      `<span class="month-box-count">${count ? '⭐ ' + count : ''}</span>`;







    box.appendChild(title);















    const grid = document.createElement('div');







    grid.className = 'month-grid';















    WEEKDAY_LETTERS.forEach(w => {







      const h = document.createElement('div');







      h.className = 'month-weekday';







      h.textContent = w;







      grid.appendChild(h);







    });















    for (let b = 0; b < startWeekday; b++) {







      const blank = document.createElement('div');







      blank.className = 'month-day blank';







      grid.appendChild(blank);







    }















    for (let day = 1; day <= daysInMonth; day++) {







      const key = isoKey(year, month, day);







      const cell = document.createElement('button');







      cell.className = 'month-day';







      if (key === todayKey) cell.classList.add('today');







      if (progress[key]) cell.classList.add('followed');







      const isFuture = key > todayKey;







      if (isFuture) { cell.classList.add('future'); cell.disabled = true; }







      cell.innerHTML = `<span class="month-day-num">${day}</span><span class="month-day-star">⭐</span>`;







      if (!isFuture) {







        cell.addEventListener('click', () => {







          if (progress[key]) delete progress[key]; else progress[key] = true;







          saveProgress(); renderProgress();







        });







      }







      grid.appendChild(cell);







    }















    box.appendChild(grid);







    return box;







  }















  // ── Picker ────────────────────────────────────────────







  function openPicker(dateKey, mealType) {







    pendingCell = { dateKey, mealType };







    pickerCategory = 'all'; pickerSearch = '';







    const mLabel = mealType ? (MEAL_TYPES.find(m => m.id === mealType)?.label || mealType) : 'Meal';







    document.getElementById('picker-title').textContent = dateKey ? `Add ${mLabel}` : 'Choose a Recipe';







    document.getElementById('picker-search').value = '';







    document.getElementById('custom-meal-input').value = '';















    const catsEl = document.getElementById('picker-cats');







    catsEl.innerHTML = '';







    RECIPE_CATEGORIES.forEach(cat => {







      const btn = document.createElement('button');







      btn.className = 'picker-cat-btn' + (cat.id === 'all' ? ' active' : '');







      btn.textContent = `${cat.emoji} ${cat.label}`;







      btn.addEventListener('click', () => {







        document.querySelectorAll('.picker-cat-btn').forEach(b => b.classList.remove('active'));







        btn.classList.add('active');







        pickerCategory = cat.id;







        renderPickerList();







      });







      catsEl.appendChild(btn);







    });















    const pickerSearchEl = document.getElementById('picker-search');







    pickerSearchEl.oninput = () => { pickerSearch = pickerSearchEl.value.toLowerCase(); renderPickerList(); };







    document.getElementById('picker-close').onclick = closeAll;







    document.getElementById('add-custom-btn').onclick = () => {







      const text = document.getElementById('custom-meal-input').value.trim();







      if (!text || !pendingCell.dateKey) return;







      meals[`${pendingCell.dateKey}-${pendingCell.mealType}`] = { type: 'custom', text };







      saveMeals(); renderPlanner(); closeAll();







    };







    document.getElementById('custom-meal-input').onkeydown = e => {







      if (e.key === 'Enter') document.getElementById('add-custom-btn').click();







    };















    renderPickerList();







    openOverlay(pickerOverlay);







  }















  // Flatten the snack list (minus the "skip these" group) into quick-pick options







  function getSnackOptions() {







    const out = [];







    (typeof SNACKS !== 'undefined' ? SNACKS : []).forEach(g => {







      if (g.id === 'avoid') return;







      const emoji = (g.label.match(/^\S+/) || ['🥨'])[0];







      g.items.forEach(it => out.push({ name: it.name, note: it.note, emoji }));







    });







    return out;







  }















  function renderPickerList() {







    const el = document.getElementById('picker-list');







    el.innerHTML = '';







    const isSnackSlot = pendingCell?.mealType === 'snack' && !!pendingCell?.dateKey;







    let any = false;















    // Quick snack options when filling a Snack slot







    if (isSnackSlot) {







      const snacks = getSnackOptions().filter(s =>







        !pickerSearch || (s.name + ' ' + s.note).toLowerCase().includes(pickerSearch));







      if (snacks.length) {







        any = true;







        const header = document.createElement('div');







        header.className = 'picker-group-label';







        header.textContent = '🥨 Quick Snacks';







        el.appendChild(header);







        snacks.forEach(s => {







          const item = document.createElement('div');







          item.className = 'picker-item';







          item.innerHTML = `







            <div class="picker-item-emoji">${s.emoji}</div>







            <div class="picker-item-info">







              <div class="picker-item-name">${escHtml(s.name)}</div>







              <div class="picker-item-meta">${escHtml(s.note)}</div>







            </div>`;







          item.addEventListener('click', () => {







            meals[`${pendingCell.dateKey}-${pendingCell.mealType}`] = { type: 'custom', text: s.name };







            saveMeals(); renderPlanner(); closeAll();







          });







          el.appendChild(item);







        });







      }







    }















    // Recipes







    const list = getAllRecipes().filter(r => {







      if (pickerCategory === 'dietician-plan') { if (!(r.tags || []).includes('dietician-plan')) return false; }



      else if (pickerCategory !== 'all' && r.category !== pickerCategory) return false;







      if (pickerSearch) return (r.name + ' ' + r.category).toLowerCase().includes(pickerSearch);







      return true;







    });







    if (list.length) {







      if (isSnackSlot) {







        const header = document.createElement('div');







        header.className = 'picker-group-label';







        header.textContent = '🍳 Recipes';







        el.appendChild(header);







      }







      list.forEach(r => {







        any = true;







        const isUser = r.isCustom === true;







        const item = document.createElement('div');







        item.className = 'picker-item';







        item.innerHTML = `







          <div class="picker-item-emoji">${r.emoji || '🍽️'}</div>







          <div class="picker-item-info">







            <div class="picker-item-name">${isUser ? '<span style="color:#ff7043;font-size:10px;font-weight:800;margin-right:4px">⭐ MINE</span>' : ''}${r.name}</div>







            <div class="picker-item-meta">⏱ ${r.time || '—'} · Serves ${r.serves || '—'}</div>







          </div>`;







        item.addEventListener('click', () => {







          if (pendingCell?.dateKey) {







            meals[`${pendingCell.dateKey}-${pendingCell.mealType}`] = { type: 'recipe', id: r.id };







            saveMeals(); renderPlanner(); closeAll();







          } else {







            closeAll(); openRecipeModal(r);







          }







        });







        el.appendChild(item);







      });







    }















    if (!any) {







      el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">No matches found</div>';







    }







  }















  // ── Substitutions ─────────────────────────────────────







  let subsCategory = 'all';















  function renderSubsView() {







    const allSubs = typeof SUBSTITUTIONS !== 'undefined' ? SUBSTITUTIONS : [];







    const q = searchQuery.toLowerCase();















    // Build category filter buttons







    const catsEl = document.getElementById('subs-cats');







    if (catsEl && !catsEl.dataset.built) {







      catsEl.dataset.built = '1';







      const allBtn = document.createElement('button');







      allBtn.className = 'subs-cat-btn active';







      allBtn.textContent = 'All Swaps';







      allBtn.dataset.id = 'all';







      allBtn.addEventListener('click', () => {







        subsCategory = 'all';







        catsEl.querySelectorAll('.subs-cat-btn').forEach(b => b.classList.remove('active'));







        allBtn.classList.add('active');







        renderSubsView();







      });







      catsEl.appendChild(allBtn);















      allSubs.forEach(cat => {







        const btn = document.createElement('button');







        btn.className = 'subs-cat-btn';







        btn.textContent = cat.label;







        btn.dataset.id = cat.id;







        btn.addEventListener('click', () => {







          subsCategory = cat.id;







          catsEl.querySelectorAll('.subs-cat-btn').forEach(b => b.classList.remove('active'));







          btn.classList.add('active');







          renderSubsView();







        });







        catsEl.appendChild(btn);







      });







    }







    // Sync active state if rebuilt







    if (catsEl) {







      catsEl.querySelectorAll('.subs-cat-btn').forEach(b => {







        b.classList.toggle('active', b.dataset.id === subsCategory);







      });







    }















    const grid = document.getElementById('subs-grid');







    if (!grid) return;















    const cats = subsCategory === 'all' ? allSubs : allSubs.filter(c => c.id === subsCategory);







    let html = '';















    cats.forEach(cat => {







      const items = q







        ? cat.items.filter(it =>







            it.avoid.toLowerCase().includes(q) ||







            it.use.toLowerCase().includes(q) ||







            it.note.toLowerCase().includes(q)







          )







        : cat.items;







      if (!items.length) return;















      html += `<div class="subs-section">







        <div class="subs-section-title">${cat.label}</div>







        <div class="subs-cards">







          ${items.map(it => `







            <div class="sub-card">







              <div class="sub-avoid-row">







                <span class="sub-badge avoid">❌ Avoid</span>







                <span class="sub-avoid-text">${it.avoid}</span>







              </div>







              <div class="sub-arrow">↓</div>







              <div class="sub-use-row">







                <span class="sub-badge use">✅ Use Instead</span>







                <span class="sub-use-text">${it.use}</span>







              </div>







              <div class="sub-note">${it.note}</div>







            </div>







          `).join('')}







        </div>







      </div>`;







    });















    grid.innerHTML = html || '<div class="subs-empty">No substitutions match your search.</div>';







  }















  // ── Shopping quantity helpers ────────────────────────







  function parseQtyNum(str) {







    let s = str.trim().toLowerCase().replace(/\([^)]*\)/g, '').trim();







    // Fold unicode fractions so "10½ oz" → "10.5 oz" and "½ cup" → "0.5 cup"







    const GLYPH = { '½':0.5, '¼':0.25, '¾':0.75, '⅓':1/3, '⅔':2/3, '⅛':0.125, '⅜':0.375, '⅝':0.625, '⅞':0.875 };







    s = s.replace(/(\d+)\s*([½¼¾⅓⅔⅛⅜⅝⅞])/g, (_, d, g) => (parseInt(d) + GLYPH[g]).toString());







    s = s.replace(/([½¼¾⅓⅔⅛⅜⅝⅞])/g, (_, g) => GLYPH[g].toString());







    let num = 0, matched = false;







    const mixed = s.match(/^(\d+)\s+(\d+)\/(\d+)/);







    const frac  = s.match(/^(\d+)\/(\d+)/);







    const dec   = s.match(/^(\d*\.?\d+)/);







    if (mixed)      { num = parseInt(mixed[1]) + parseInt(mixed[2]) / parseInt(mixed[3]); matched = true; }







    else if (frac)  { num = parseInt(frac[1]) / parseInt(frac[2]); matched = true; }







    else if (dec)   { num = parseFloat(dec[1]); matched = true; }







    if (!matched) return { num: null, unit: null };







    const UNITS = {







      'tsp':'tsp','tsps':'tsp','teaspoon':'tsp','teaspoons':'tsp',







      'tbsp':'tbsp','tbsps':'tbsp','tablespoon':'tbsp','tablespoons':'tbsp',







      'cup':'cup','cups':'cup',







      'g':'g','gram':'g','grams':'g',







      'oz':'oz','ounce':'oz','ounces':'oz',







      'lb':'lb','lbs':'lb','pound':'lb','pounds':'lb',







      'ml':'ml','l':'l','liter':'l','liters':'l',







      'medium':'medium','large':'large','small':'small',







    };







    const rest = s.replace(/^[\d\s\/\.]+/, '').trim();







    const firstWord = rest.split(/[\s,]/)[0];







    const unit = UNITS[firstWord] || (firstWord && /^[a-z]/.test(firstWord) && firstWord.length > 1 ? firstWord : 'each');







    return { num, unit };







  }















  function formatQtyNum(n) {







    if (n === Math.round(n)) return String(Math.round(n));







    const fracs = [[1/8,'⅛'],[1/4,'¼'],[1/3,'⅓'],[3/8,'⅜'],[1/2,'½'],[5/8,'⅝'],[2/3,'⅔'],[3/4,'¾'],[7/8,'⅞']];







    const whole = Math.floor(n), frac = n - whole;







    const closest = fracs.reduce((a,b) => Math.abs(b[0]-frac) < Math.abs(a[0]-frac) ? b : a);







    if (Math.abs(closest[0]-frac) < 0.04) return whole ? `${whole}${closest[1]}` : closest[1];







    return n.toFixed(1);







  }















  function ozToDisplay(oz) {







    if (oz >= 16) {







      const lbs = Math.floor(oz / 16);







      const remOz = Math.round((oz % 16) * 4) / 4;







      if (remOz === 0) return formatQtyNum(lbs) + ' lb';







      return `${lbs} lb ${formatQtyNum(remOz)} oz`;







    }







    return formatQtyNum(oz) + ' oz';







  }















  function gToOz(grams) {







    const oz = Math.round((grams / 28.3495) * 4) / 4; // nearest ¼ oz







    return ozToDisplay(oz);







  }















  function convertGrams(str) {







    // Strip parenthetical gram annotations like "(44g)" or "(about 40g)"







    let s = str.replace(/\(\s*(?:about\s*)?\d+\s*g\s*\)/gi, '').trim();







    // "2 × 95g tins/cans" → "2 × 3½ oz cans"







    s = s.replace(/(\d+)\s*[×x]\s*(\d+)\s*g\s*(tin|can)s?/gi, (_, n, g) =>







      `${n} × ${gToOz(+g)} ${+n === 1 ? 'can' : 'cans'}`);







    // "95g tin" or "400g can" → "3½ oz can"







    s = s.replace(/(\d+)\s*g\s*(tin|can)s?/gi, (_, g) =>







      `${gToOz(+g)} can`);







    // "about 20g" → "about ¾ oz"







    s = s.replace(/about\s+(\d+)\s*g\b/gi, (_, g) => `about ${gToOz(+g)}`);







    // Standalone "28g" → "1 oz"







    s = s.replace(/\b(\d+)\s*g\b/gi, (_, g) => gToOz(+g));







    return s;







  }















  const SHOPPING_HINTS = [







    { match:['baby carrot'],        fn: () => '1 bag' },







    { match:['carrot'],             fn: n => n >= 4 ? '1 bag' : null },







    { match:['cherry tomato'],      fn: n => n >= 20 ? '2 pints' : '1 pint' },







    { match:['egg'],                fn: n => n > 6 ? '1 dozen' : '½ dozen' },







    { match:['baby spinach','spinach'], fn: () => '1 bag (5 oz)' },







    { match:['spring onion','green onion','scallion'], fn: () => '1 bunch' },







    { match:['cilantro','coriander'], fn: () => '1 bunch' },







    { match:['parsley'],            fn: () => '1 bunch' },







    { match:['basil'],              fn: () => '1 bunch' },







    { match:['lemon'],              fn: n => `${n} lemon${n>1?'s':''}` },







    { match:['lime'],               fn: n => `${n} lime${n>1?'s':''}` },







    { match:['avocado'],            fn: n => `${n} avocado${n>1?'s':''}` },







    { match:['banana'],             fn: n => n >= 3 ? '1 bunch' : String(n) },







    { match:['bell pepper','capsicum'], fn: n => String(n) },







    { match:['zucchini','courgette'], fn: n => String(n) },







  ];















  function getShoppingDisplay(itemName, qtys) {







    // Packaged items like "1 × 14 oz can" — sum the counts, keep the unit description







    const packaged = qtys.filter(q => /×/.test(q));







    if (packaged.length) {







      let totalCount = 0;







      packaged.forEach(q => { const m = q.match(/^(\d+)\s*×/); totalCount += m ? parseInt(m[1]) : 1; });







      const unitPart = packaged[0].replace(/^\d+\s*×\s*/, '').trim();







      return totalCount === 1 ? unitPart : `${totalCount} × ${unitPart}`;







    }















    const sane = qtys.filter(q => !/^(to taste|as needed|pinch|dash|—)/i.test(q.trim()));







    if (!sane.length) return qtys[0] || '—';







    const groups = {}, skipped = [];







    sane.forEach(q => {







      let { num, unit } = parseQtyNum(q);







      if (num === null) { skipped.push(q); return; }







      // a "medium"/"large"/"small" item is still one item to buy — count them together







      if (unit === 'medium' || unit === 'large' || unit === 'small') unit = 'each';







      groups[unit] = (groups[unit] || 0) + num;







    });







    if (!Object.keys(groups).length) return qtys.join(' + ');















    const nameLower = itemName.toLowerCase();







    const parts = Object.entries(groups).map(([unit, total]) => {







      if (unit === 'each') {







        // apply a shopping hint to the combined count (e.g. "1 bag"), else just the number







        for (const hint of SHOPPING_HINTS) {







          if (hint.match.some(m => nameLower.includes(m))) {







            const h = hint.fn(Math.ceil(total));







            if (h) return h;







          }







        }







        return formatQtyNum(total);







      }







      if (unit === 'oz') return ozToDisplay(total);







      return `${formatQtyNum(total)} ${unit}`;







    });







    if (skipped.length) parts.push(skipped[0]);







    return parts.join(' + ');







  }















  // ── Shopping List ─────────────────────────────────────







  function getShoppingChecksKey(weekKey) {







    return `fodmap-shopping-checks-${weekKey}`;







  }







  function loadShoppingChecks(weekKey) {







    try { return JSON.parse(localStorage.getItem(getShoppingChecksKey(weekKey)) || '[]'); }







    catch(e) { return []; }







  }







  function saveShoppingChecks(weekKey, checked) {







    try { localStorage.setItem(getShoppingChecksKey(weekKey), JSON.stringify(checked)); }







    catch(e) {}







  }















  const PREP_WORDS = /[,\s]+(sliced|diced|chopped|minced|crushed|peeled|grated|shredded|julienned|halved|quartered|cubed|crumbled|mashed|trimmed|stemmed|seeded|deseeded|pitted|zested|juiced|squeezed|beaten|whisked|softened|melted|divided|separated|cut|broken|snapped|shaved|wedges|wedge|rounds|slices|warmed|chilled|torn|rinsed|drained|thawed|frozen|fresh|dried|cooked|raw|boiled|hard-boiled|soft-boiled|fried|poached|scrambled|thinly|roughly|finely|coarsely|lightly|well|about|optional|garnish|lengthways|lengthwise|to garnish|for garnish|for serving|to serve)\b.*/gi;















  // Leading words that describe size/freshness/cooking-state but not what you buy







  const LEADING_QUALIFIERS = /^\s*(baby|fresh|large|small|medium|ripe|lean|smooth|crunchy|boiled|hard-boiled|soft-boiled|fried|poached|scrambled)\s+/;















  // Reduce a head-noun to singular so "eggs" == "egg", "tomatoes" == "tomato"







  function singularize(w) {







    if (w.length <= 3) return w;







    if (/(ss|us|is|os)$/.test(w)) return w;          // asparagus, hummus, couscous, molasses







    if (/ies$/.test(w)) return w.replace(/ies$/, 'y'); // berries → berry







    if (/oes$/.test(w)) return w.replace(/oes$/, 'o'); // tomatoes → tomato, potatoes → potato







    if (/s$/.test(w))  return w.replace(/s$/, '');     // eggs → egg, carrots → carrot







    return w;







  }















  // Strip qty/prep/usage descriptors down to the base ingredient, but keep plural form







  // (used for the display label so the header reads naturally, e.g. "Carrots").







  function stripIngredientDescriptors(name) {







    let s = name.toLowerCase();







    s = s.replace(/^\s*\d+([.\/]\d+)?\s+/, ''); // drop a leading quantity a user may have typed ("2 eggs")







    s = s.replace(/\(.*?\)/g, ' ');        // strip (garnish), (optional), (about 2 tbsp) etc.







    s = s.replace(/\bfor\b.*$/, '');       // drop usage phrases: "for toast", "for the pan", "for squeezing"







    s = s.replace(/\bper\b.*$/, '');       // drop "per person", "per serve"







    s = s.replace(/\bplus\b.*$/, '');      // drop "plus more", "plus extra"







    s = s.replace(PREP_WORDS, '');         // strip ", sliced", " halved …", "divided", "cut into chunks", etc.







    // drop leading size/freshness/state words so "baby bok choy" == "bok choy", "boiled eggs" == "eggs"







    let prev;







    do { prev = s; s = s.replace(LEADING_QUALIFIERS, ''); } while (s !== prev);







    return s.replace(/[,;.\s]+$/, '').replace(/\s+/g, ' ').trim();







  }















  function singularizeHead(s) {







    if (!s) return s;







    const w = s.split(' ');







    w[w.length - 1] = singularize(w[w.length - 1]);







    return w.join(' ');







  }















  // Collapse pure salt/pepper seasoning lines ("salt and black pepper",







  // "sea salt & cracked pepper") to one canonical label. Returns null for







  // anything that isn't purely salt and/or pepper — so "bell pepper",







  // "black beans", "salt …and fresh lemon juice" are left alone.







  function canonicalSeasoning(base) {







    const t = base







      .replace(/\b(sea|kosher|table|flaky|fine|coarse|ground|freshly|cracked|black|white|pink|himalayan|rock)\b/g, ' ')







      .replace(/\band\b/g, ' ')







      .replace(/[,&]/g, ' ')







      .replace(/\s+/g, ' ').trim();







    const tokens = t.split(' ').filter(Boolean);







    if (!tokens.length || !tokens.every(tok => tok === 'salt' || tok === 'pepper')) return null;







    const hasSalt = tokens.includes('salt'), hasPepper = tokens.includes('pepper');







    if (hasSalt && hasPepper) return 'salt and pepper';







    return hasSalt ? 'salt' : 'pepper';







  }















  // The merge identity: a canonical seasoning, or the base with its head noun







  // singularized so "egg" == "eggs", "carrot" == "carrots". Different ingredients stay distinct.







  function normalizeIngredientKey(name) {







    const base = stripIngredientDescriptors(name);







    return canonicalSeasoning(base) || singularizeHead(base);







  }















  // Detect the product form so fresh / canned / frozen / dried stay distinct







  // ("fresh corn" vs "canned corn" vs "frozen corn" are different things to buy).







  function ingredientForm(itemMain, qtyLower) {







    if ((/\bcanned\b|\btinned\b/.test(itemMain) || /\btins?\b|\bcans?\b/.test(qtyLower)) && !/not\s+canned/.test(itemMain)) return 'canned';







    if (/\bfrozen\b/.test(itemMain))            return 'frozen';







    if (/\b(dried|dehydrated)\b/.test(itemMain)) return 'dried';







    if (/\bjarred\b/.test(itemMain))            return 'jarred';







    if (/\bpickled\b/.test(itemMain))           return 'pickled';







    return '';







  }















  // Different names for the same thing → one canonical label.







  const INGREDIENT_SYNONYMS = [







    { canon: 'green onions', re: /\b(scallions?|green onions?|spring onions?)\b/ },







  ];







  function applyIngredientSynonym(base) {







    for (const s of INGREDIENT_SYNONYMS) if (s.re.test(base)) return s.canon;







    return base;







  }















  // Returns { key, label } for the shopping list: a merge key and a display name,







  // with any product form (canned/frozen/dried/…) preserved as a prefix.







  function shoppingIdentity(item, qty) {







    // "canned or frozen" / "fresh or frozen" → keep the first form







    const raw  = item.toLowerCase().replace(/\b(fresh|canned|tinned|frozen|dried|jarred|pickled)\s+or\s+(fresh|canned|tinned|frozen|dried|jarred|pickled)\b/g, '$1');







    const main = raw.replace(/\([^)]*\)/g, ' ');     // form from the main text/qty, ignoring notes like "(or 1 tsp dried)"







    let form = ingredientForm(main, (qty || '').toLowerCase());







    if (!form) {                                     // …but do honour a parenthetical that *is* a form, e.g. "(canned, full-fat)"







      for (const p of (raw.match(/\(([^)]*)\)/g) || [])) {







        const inner = p.slice(1, -1).trim();







        if (/^(canned|tinned|frozen|dried|dehydrated|jarred|pickled)\b/.test(inner)) { form = ingredientForm(inner, ''); break; }







      }







    }







    const base = applyIngredientSynonym(stripIngredientDescriptors(raw)







      .replace(/\b(canned|tinned|frozen|dried|dehydrated|jarred|pickled)\b/g, ' ')







      .replace(/^\s*or\s+|\s+or\s*$/g, '')







      .replace(/[,;.\s]+$/, '')







      .replace(/\s+/g, ' ').trim());















    const canon = canonicalSeasoning(base);







    if (canon) return { key: canon, label: prettyIngredientName(canon) };















    const simple = base && !/[,&]| and /.test(base);   // don't prefix forms onto compound lines







    const label  = (form && simple) ? `${form} ${base}` : base;







    const key    = (form && simple ? `${form} ` : '') + singularizeHead(base);







    return { key, label: prettyIngredientName(label) };







  }















  // Title-case the first letter for a clean display name ("carrots" → "Carrots")







  function prettyIngredientName(label) {







    return label ? label.charAt(0).toUpperCase() + label.slice(1) : label;







  }















  function cleanIngredientName(name) {







    return name







      .replace(/\(.*?\)/g, '')   // strip parentheticals







      .replace(/[,;]+$/, '')







      .trim();







  }















  function openShoppingList() {







    const days = getWeekDays();







    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];







    const weekTitle = `${days[0].date} ${months[days[0].month-1]} – ${days[6].date} ${months[days[6].month-1]}`;







    const weekKey = days[0].key;







    const ingredientMap = {};















    days.forEach(d => {







      MEAL_TYPES.forEach(m => {







        const meal = meals[`${d.key}-${m.id}`];







        if (!meal || meal.type !== 'recipe') return;







        const recipe = getAllRecipes().find(r => r.id === meal.id);







        if (!recipe) return;







        (recipe.ingredients || []).forEach(ing => {







          if (ing.item === '—') return;







          const { key, label } = shoppingIdentity(ing.item, ing.qty);







          const k   = key   || cleanIngredientName(ing.item).toLowerCase();







          const lab = label || prettyIngredientName(cleanIngredientName(ing.item));







          if (!ingredientMap[k]) {







            ingredientMap[k] = { name: lab, lines: [] };







          } else if (/s$/.test(lab) && !/s$/.test(ingredientMap[k].name)) {







            ingredientMap[k].name = lab;   // prefer a plural label ("Carrots")







          }







          ingredientMap[k].lines.push({







            qty:    convertGrams(ing.qty || ''),







            recipe: recipe.name,







          });







        });







      });







    });















    // Sort: ingredients with quantities first, then "to taste" type items







    const items = Object.values(ingredientMap).sort((a, b) => {







      const aHasQty = a.lines.some(l => !/^(to taste|as needed|pinch|dash|—)/i.test(l.qty.trim()));







      const bHasQty = b.lines.some(l => !/^(to taste|as needed|pinch|dash|—)/i.test(l.qty.trim()));







      if (aHasQty && !bHasQty) return -1;







      if (!aHasQty && bHasQty) return 1;







      return a.name.localeCompare(b.name);







    });















    const checked = new Set(loadShoppingChecks(weekKey));















    function buildItemHtml(ing, i) {







      const isChecked = checked.has(i);







      const qtys = ing.lines.map(l => l.qty);







      const total = getShoppingDisplay(ing.name, qtys);















      // Deduplicate recipe lines that are completely identical







      const seen = new Set();







      const uniqueLines = ing.lines.filter(l => {







        const k = `${l.qty}||${l.recipe}`;







        if (seen.has(k)) return false;







        seen.add(k); return true;







      });















      // Always show which recipe(s) each ingredient is for. Repeat the per-line







      // quantity only when an item spans more than one recipe (otherwise it just







      // echoes the total).







      const showLineQty = uniqueLines.length > 1;







      const breakdownHtml = `<div class="si-breakdown">${uniqueLines.map(l =>







        `<div class="si-line">${showLineQty ? `<span class="si-line-qty">${l.qty}</span>` : ''}<span class="si-line-recipe">— ${l.recipe}</span></div>`







      ).join('')}</div>`;















      return `<div class="shopping-item${isChecked ? ' checked' : ''}" data-si="${i}">







        <div class="shopping-checkbox"></div>







        <div class="si-body">







          <div class="si-top">







            <span class="si-name">${ing.name}</span>







            <span class="si-total">${total}</span>







          </div>







          ${breakdownHtml}







        </div>







      </div>`;







    }















    let content = items.length







      ? `<div class="shopping-list-head">







           <div class="shopping-week-title">Week of ${weekTitle}</div>







           <button class="action-btn" id="uncheck-all-btn" style="background:var(--bg);color:var(--text)">↺ Uncheck All</button>







         </div>` +







        items.map((ing, i) => buildItemHtml(ing, i)).join('')







      : `<div class="shopping-empty">No recipes planned this week.<br>Add meals to your planner first!</div>`;















    document.getElementById('shopping-content').innerHTML = content;







    document.getElementById('shopping-close').onclick = closeAll;







    document.querySelectorAll('.shopping-item').forEach(el => {







      el.addEventListener('click', () => {







        el.classList.toggle('checked');







        const si = parseInt(el.dataset.si, 10);







        if (el.classList.contains('checked')) checked.add(si);







        else checked.delete(si);







        saveShoppingChecks(weekKey, [...checked]);







      });







    });







    const uncheckBtn = document.getElementById('uncheck-all-btn');







    if (uncheckBtn) uncheckBtn.addEventListener('click', () => {







      checked.clear();







      saveShoppingChecks(weekKey, []);







      document.querySelectorAll('.shopping-item.checked').forEach(el => el.classList.remove('checked'));







    });







    openOverlay(shoppingOverlay);







  }















  // ── Persistence ───────────────────────────────────────







  function saveMeals() {







    try { localStorage.setItem('fodmap-meals', JSON.stringify(meals)); } catch(e) {}







    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();







  }







  function loadMeals() {







    try { return JSON.parse(localStorage.getItem('fodmap-meals') || '{}'); } catch(e) { return {}; }







  }















  // ══════════════════════════════════════════







  //  ⑤  MY FINDS







  // ══════════════════════════════════════════







  const FINDS_CATEGORIES = [







    { id: 'all',         label: 'All',                emoji: '📍' },







    { id: 'bread',       label: 'Bread & Grains',     emoji: '🍞' },







    { id: 'dairy',       label: 'Dairy & Alternatives', emoji: '🥛' },







    { id: 'condiments',  label: 'Condiments & Sauces', emoji: '🫙' },







    { id: 'pasta',       label: 'Pasta & Rice',        emoji: '🍝' },







    { id: 'protein',     label: 'Meat & Protein',      emoji: '🥩' },







    { id: 'snacks',      label: 'Snacks',               emoji: '🥕' },







    { id: 'produce',     label: 'Produce',              emoji: '🥦' },







    { id: 'beverages',   label: 'Beverages',            emoji: '☕' },







    { id: 'supplements', label: 'Supplements',          emoji: '💊' },







    { id: 'other',       label: 'Other',                emoji: '📦' },







  ];















  let findsCategory = 'all';







  let editingFindId  = null;















  function getFinds() {







    try { return JSON.parse(localStorage.getItem('fodmap-finds') || '[]'); }







    catch(e) { return []; }







  }







  function saveFinds(list) {







    try { localStorage.setItem('fodmap-finds', JSON.stringify(list)); }







    catch(e) {}







    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();







  }







  function genFindId() {







    return 'f' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);







  }















  (function initFinds() {







    // Category filter bar







    const catsEl = document.getElementById('finds-cats');







    if (catsEl) {







      FINDS_CATEGORIES.forEach(c => {







        const btn = document.createElement('button');







        btn.className = 'finds-cat-btn' + (c.id === 'all' ? ' active' : '');







        btn.dataset.id = c.id;







        btn.textContent = c.id === 'all' ? '📍 All' : `${c.emoji} ${c.label}`;







        btn.addEventListener('click', () => {







          findsCategory = c.id;







          catsEl.querySelectorAll('.finds-cat-btn').forEach(b => b.classList.remove('active'));







          btn.classList.add('active');







          renderFindsView();







        });







        catsEl.appendChild(btn);







      });







    }















    document.getElementById('add-find-btn').addEventListener('click', () => openFindForm(null));















    // Form modal wiring







    const overlay = document.getElementById('find-form-overlay');







    overlay.addEventListener('click', e => { if (e.target === overlay) closeFindForm(); });







    document.getElementById('find-form-close').addEventListener('click', closeFindForm);







    document.getElementById('ff-cancel-btn').addEventListener('click', closeFindForm);







    document.getElementById('ff-save-btn').addEventListener('click', saveFindEntry);







    document.getElementById('ff-delete-btn').addEventListener('click', () => {







      if (editingFindId && confirm('Delete this find?')) {







        const list = getFinds().filter(f => f.id !== editingFindId);







        saveFinds(list);







        closeFindForm();







        renderFindsView();







      }







    });







  })();















  function openFindForm(find) {







    editingFindId = find ? find.id : null;







    document.getElementById('find-form-title').textContent = find ? '✏️ Edit Find' : '📍 Add a Find';







    document.getElementById('ff-food').value     = find ? find.food  : '';







    document.getElementById('ff-brand').value    = find ? find.brand : '';







    document.getElementById('ff-store').value    = find ? find.store : '';







    document.getElementById('ff-notes').value    = find ? find.notes : '';







    document.getElementById('ff-category').value = find ? (find.category || 'other') : 'other';







    document.getElementById('ff-delete-btn').classList.toggle('hidden', !find);







    openOverlay(document.getElementById('find-form-overlay'));







    setTimeout(() => document.getElementById('ff-food').focus(), 100);







  }















  function closeFindForm() {







    document.getElementById('find-form-overlay').classList.add('hidden');







    document.body.style.overflow = '';







    editingFindId = null;







  }















  function saveFindEntry() {







    const food  = document.getElementById('ff-food').value.trim();







    const store = document.getElementById('ff-store').value.trim();







    if (!food) { document.getElementById('ff-food').focus(); return; }







    if (!store) { document.getElementById('ff-store').focus(); return; }







    const entry = {







      id:       editingFindId || genFindId(),







      food,







      brand:    document.getElementById('ff-brand').value.trim(),







      store,







      category: document.getElementById('ff-category').value,







      notes:    document.getElementById('ff-notes').value.trim(),







    };







    const list = getFinds();







    const idx = list.findIndex(f => f.id === entry.id);







    if (idx >= 0) list[idx] = entry;







    else list.unshift(entry);







    saveFinds(list);







    closeFindForm();







    renderFindsView();







  }















  function renderFindsView() {







    // Sync category buttons







    const catsEl = document.getElementById('finds-cats');







    if (catsEl) {







      catsEl.querySelectorAll('.finds-cat-btn').forEach(b =>







        b.classList.toggle('active', b.dataset.id === findsCategory));







    }















    const grid   = document.getElementById('finds-grid');







    const noRes  = document.getElementById('finds-no-results');







    if (!grid) return;















    const q = searchQuery.toLowerCase();







    let list = getFinds();







    if (findsCategory !== 'all') list = list.filter(f => f.category === findsCategory);







    if (q) list = list.filter(f =>







      f.food.toLowerCase().includes(q) ||







      f.brand.toLowerCase().includes(q) ||







      f.store.toLowerCase().includes(q) ||







      f.notes.toLowerCase().includes(q)







    );















    if (!list.length) {







      grid.innerHTML = '';







      noRes.classList.remove('hidden');







      return;







    }







    noRes.classList.add('hidden');















    const catMap = {};







    FINDS_CATEGORIES.forEach(c => { catMap[c.id] = c; });















    grid.innerHTML = list.map(f => {







      const cat = catMap[f.category] || catMap['other'];







      return `







        <div class="find-card" data-id="${f.id}">







          <div class="find-card-top">







            <span class="find-cat-badge">${cat.emoji} ${cat.label}</span>







            <button class="find-edit-btn" title="Edit" data-id="${f.id}">✏️</button>







          </div>







          <div class="find-food">${f.food}</div>







          ${f.brand ? `<div class="find-brand">🏷️ ${f.brand}</div>` : ''}







          <div class="find-store">📍 ${f.store}</div>







          ${f.notes ? `<div class="find-notes">${f.notes}</div>` : ''}







        </div>`;







    }).join('');















    grid.querySelectorAll('.find-edit-btn').forEach(btn => {







      btn.addEventListener('click', () => {







        const find = getFinds().find(f => f.id === btn.dataset.id);







        if (find) openFindForm(find);







      });







    });







  }















  // ══════════════════════════════════════════







  //  ⑦  RECIPE CHECKER







  // ══════════════════════════════════════════







  (function initChecker() {







    const analyzeBtn = document.getElementById('checker-analyze-btn');







    const clearBtn2  = document.getElementById('checker-clear-btn');







    const textarea   = document.getElementById('checker-textarea');







    if (!analyzeBtn) return;







    analyzeBtn.addEventListener('click', () => {







      const text = textarea.value.trim();







      if (!text) {







        document.getElementById('checker-results').innerHTML =







          '<div class="checker-empty">Paste at least one ingredient above, then click Analyze.</div>';







        return;







      }







      renderCheckerResults(analyzeRecipe(text));







    });







    clearBtn2.addEventListener('click', () => {







      textarea.value = '';







      document.getElementById('checker-results').innerHTML = '';







    });







  })();















  function analyzeRecipe(text) {







    if (typeof FODMAP_ANALYZER === 'undefined') return [];







    const lines = text.split('\n').map(l => l.trim().toLowerCase()).filter(Boolean);







    const found = {};















    lines.forEach(line => {







      FODMAP_ANALYZER.forEach(entry => {







        // Skip if already matched this entry







        if (found[entry.name]) return;







        // Check excludes first — if any exclude phrase is in the line, skip







        const excluded = (entry.exclude || []).some(ex => line.includes(ex.toLowerCase()));







        if (excluded) return;







        // Check if any trigger appears in the line







        const triggered = entry.triggers.some(t => line.includes(t.toLowerCase()));







        if (triggered) {







          found[entry.name] = { ...entry, matchedLine: line };







        }







      });







    });















    const results = Object.values(found);







    // Sort high verdict first, then moderate







    results.sort((a, b) => {







      if (a.verdict === b.verdict) return 0;







      return a.verdict === 'high' ? -1 : 1;







    });







    return results;







  }















  function renderCheckerResults(results) {







    const el = document.getElementById('checker-results');







    if (!el) return;















    if (!results.length) {







      el.innerHTML = `







        <div class="checker-verdict checker-verdict-safe">







          <div class="checker-verdict-icon">✅</div>







          <div>







            <div class="checker-verdict-title">Looks Good!</div>







            <div class="checker-verdict-sub">No high-FODMAP ingredients detected in this recipe. Enjoy!</div>







          </div>







        </div>`;







      return;







    }















    const high     = results.filter(r => r.verdict === 'high');







    const moderate = results.filter(r => r.verdict === 'moderate');















    const verdictClass = high.length ? 'checker-verdict-danger' : 'checker-verdict-warn';







    const verdictIcon  = high.length ? '🚫' : '⚠️';







    const verdictTitle = high.length







      ? `${high.length} High-FODMAP Ingredient${high.length > 1 ? 's' : ''} Found`







      : `${moderate.length} Ingredient${moderate.length > 1 ? 's' : ''} Need${moderate.length === 1 ? 's' : ''} Portion Control`;







    const verdictSub = high.length







      ? `This recipe needs substitutions before it's FODMAP-safe. See the fixes below.`







      : `This recipe may be okay in small portions. Watch the amounts listed below.`;















    const cardHtml = results.map(r => {







      const isHigh = r.verdict === 'high';







      return `







        <div class="checker-flag-card ${isHigh ? 'flag-high' : 'flag-moderate'}">







          <div class="checker-flag-top">







            <span class="checker-flag-emoji">${r.emoji}</span>







            <div class="checker-flag-name-wrap">







              <span class="checker-flag-name">${r.name}</span>







              <span class="checker-flag-type">${r.fodmapType}</span>







            </div>







            <span class="checker-flag-badge ${isHigh ? 'badge-high' : 'badge-moderate'}">${isHigh ? '🚫 High' : '⚠️ Moderate'}</span>







          </div>







          <div class="checker-flag-issue">${r.issue}</div>







          <div class="checker-flag-fix">







            <span class="checker-fix-label">✅ Fix:</span> ${r.fix}







          </div>







        </div>`;







    }).join('');















    el.innerHTML = `







      <div class="checker-verdict ${verdictClass}">







        <div class="checker-verdict-icon">${verdictIcon}</div>







        <div>







          <div class="checker-verdict-title">${verdictTitle}</div>







          <div class="checker-verdict-sub">${verdictSub}</div>







        </div>







      </div>







      <div class="checker-flags">







        <div class="checker-flags-title">Flagged Ingredients</div>







        ${cardHtml}







      </div>`;







  }















  // ══════════════════════════════════════════







  //  EXPORT / IMPORT DATA







  // ══════════════════════════════════════════







  function exportData() {







    const data = { version: 1, exported: new Date().toISOString() };















    // Grab all fodmap-* keys from localStorage







    for (let i = 0; i < localStorage.length; i++) {







      const key = localStorage.key(i);







      if (key && key.startsWith('fodmap-')) {







        try { data[key] = JSON.parse(localStorage.getItem(key)); }







        catch(e) { data[key] = localStorage.getItem(key); }







      }







    }















    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });







    const url  = URL.createObjectURL(blob);







    const a    = document.createElement('a');







    a.href     = url;







    a.download = `fodmap-backup-${new Date().toISOString().slice(0,10)}.json`;







    document.body.appendChild(a);







    a.click();







    document.body.removeChild(a);







    URL.revokeObjectURL(url);







  }















  function importData(file) {







    if (!file) return;







    const reader = new FileReader();







    reader.onload = e => {







      try {







        const data = JSON.parse(e.target.result);







        if (!data.version) throw new Error('Not a FODMAP backup file');







        let count = 0;







        Object.keys(data).forEach(key => {







          if (key.startsWith('fodmap-')) {







            localStorage.setItem(key, JSON.stringify(data[key]));







            count++;







          }







        });







        meals = loadMeals();







        progress = loadProgress();







        renderPlanner();







        renderProgress();







        renderFindsView();







        alert(`✅ Imported successfully! ${count} data categories restored.`);







      } catch(err) {







        alert('❌ Could not read that file. Make sure it\'s a FODMAP backup file.');







      }







    };







    reader.readAsText(file);







  }















  (() => {







    const exportBtn  = document.getElementById('export-data-btn');







    const importBtn  = document.getElementById('import-data-btn');







    const importFile = document.getElementById('import-file-input');







    if (exportBtn) exportBtn.addEventListener('click', exportData);







    if (importBtn) importBtn.addEventListener('click', () => importFile && importFile.click());







    if (importFile) importFile.addEventListener('change', () => {







      importData(importFile.files[0]);







      importFile.value = '';







    });







  })();















  // ══════════════════════════════════════════







  //  DARK MODE







  // ══════════════════════════════════════════







  (() => {







    const btn = document.getElementById('dark-toggle');







    if (!btn) return;







    const apply = dark => {







      document.body.classList.toggle('dark', dark);







      btn.textContent = dark ? '☀️' : '🌙';







    };







    apply(localStorage.getItem('fodmap-dark') === '1');







    btn.addEventListener('click', () => {







      const dark = !document.body.classList.contains('dark');







      apply(dark);







      localStorage.setItem('fodmap-dark', dark ? '1' : '0');







    });







  })();















  // ══════════════════════════════════════════







  //  ⑥  REMINDERS & TIMERS







  // ══════════════════════════════════════════







  let reminders = loadReminders();







  let timers = loadTimers();















  function loadReminders() {







    try { return JSON.parse(localStorage.getItem('fodmap-reminders') || '[]'); } catch(e) { return []; }







  }







  function saveReminders() {







    try { localStorage.setItem('fodmap-reminders', JSON.stringify(reminders)); } catch(e) {}







    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();







  }







  // Timers are device-local & short-lived — not synced to the cloud







  function loadTimers() {







    try { return (JSON.parse(localStorage.getItem('fodmapTimers') || '[]')).filter(t => t.endsAt > Date.now()); } catch(e) { return []; }







  }







  function saveTimers() {







    try { localStorage.setItem('fodmapTimers', JSON.stringify(timers)); } catch(e) {}







  }















  function fmtTime(hhmm) {







    const [h, m] = hhmm.split(':').map(Number);







    const ap = h < 12 ? 'AM' : 'PM';







    const h12 = h % 12 === 0 ? 12 : h % 12;







    return `${h12}:${String(m).padStart(2, '0')} ${ap}`;







  }















  // ── Notifications / sound / vibrate ──







  let audioCtx = null;







  function beep(times) {







    try {







      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();







      if (audioCtx.state === 'suspended') audioCtx.resume();







      let t = audioCtx.currentTime;







      for (let i = 0; i < (times || 3); i++) {







        const o = audioCtx.createOscillator(), g = audioCtx.createGain();







        o.type = 'sine'; o.frequency.value = 880;







        o.connect(g); g.connect(audioCtx.destination);







        g.gain.setValueAtTime(0.0001, t);







        g.gain.exponentialRampToValueAtTime(0.35, t + 0.02);







        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);







        o.start(t); o.stop(t + 0.3);







        t += 0.42;







      }







    } catch(e) {}







  }







  function notifBannerState() {







    const b = document.getElementById('notif-banner');







    if (!b) return;







    const supported = 'Notification' in window;







    b.classList.toggle('hidden', !supported || Notification.permission !== 'default');







  }







  function ding(title, body) {







    beep(3);







    if (navigator.vibrate) try { navigator.vibrate([200, 100, 200, 100, 200]); } catch(e) {}







    try {







      if ('Notification' in window && Notification.permission === 'granted') {







        const opts = { body: body || '', icon: './icons/icon.svg', badge: './icons/icon.svg', tag: 'fodmap-' + Date.now(), renotify: true };







        if (navigator.serviceWorker && navigator.serviceWorker.ready) {







          navigator.serviceWorker.ready.then(reg => reg.showNotification(title, opts)).catch(() => { try { new Notification(title, opts); } catch(e) {} });







        } else { new Notification(title, opts); }







      }







    } catch(e) {}







    showToast('🔔 ' + title + (body ? ' — ' + body : ''));







  }















  let toastTimer = null;







  function showToast(msg) {







    let el = document.getElementById('app-toast');







    if (!el) {







      el = document.createElement('div');







      el.id = 'app-toast';







      el.className = 'app-toast';







      document.body.appendChild(el);







    }







    el.textContent = msg;







    el.classList.add('show');







    clearTimeout(toastTimer);







    toastTimer = setTimeout(() => el.classList.remove('show'), 6000);







  }















  // ── Reminder add/remove/toggle ──







  function addReminder(label, time) {







    reminders.push({ id: 'r' + Date.now().toString(36), label: label || 'Reminder', time, enabled: true, lastFired: '' });







    reminders.sort((a, b) => a.time.localeCompare(b.time));







    saveReminders(); renderRemindersView();







  }







  function removeReminder(id) {







    reminders = reminders.filter(r => r.id !== id);







    saveReminders(); renderRemindersView();







  }







  function toggleReminder(id) {







    const r = reminders.find(x => x.id === id);







    if (r) { r.enabled = !r.enabled; saveReminders(); renderRemindersView(); }







  }















  // Fire daily reminders whose time has arrived (15-min grace if the app opens late)







  function checkReminders() {







    const now = new Date();







    const nowMin = now.getHours() * 60 + now.getMinutes();







    const today = now.toISOString().slice(0, 10);







    let changed = false;







    reminders.forEach(r => {







      if (!r.enabled) return;







      const [h, m] = r.time.split(':').map(Number);







      const rMin = h * 60 + m;







      if (r.lastFired !== today && nowMin >= rMin && nowMin < rMin + 15) {







        r.lastFired = today; changed = true;







        ding('⏰ ' + (r.label || 'Reminder'), 'Scheduled for ' + fmtTime(r.time));







      }







    });







    if (changed) saveReminders();







  }















  // ── Timers ──







  function startTimer(min, label) {







    min = parseInt(min, 10);







    if (!min || min < 1) return;







    timers.push({ id: 't' + Date.now().toString(36), label: (label || 'Timer').trim() || 'Timer', endsAt: Date.now() + min * 60000 });







    saveTimers(); renderTimers();







  }







  function cancelTimer(id) {







    timers = timers.filter(t => t.id !== id);







    saveTimers(); renderTimers();







  }







  function tickTimers() {







    const now = Date.now();







    const done = timers.filter(t => now >= t.endsAt);







    if (done.length) {







      timers = timers.filter(t => now < t.endsAt);







      saveTimers();







      done.forEach(t => ding('⏲️ ' + t.label + ' done!', 'Your timer is up.'));







    }







    updateTimerDisplays();







  }







  function updateTimerDisplays() {







    document.querySelectorAll('.timer-card[data-ends]').forEach(card => {







      const ends = parseInt(card.dataset.ends, 10);







      const left = Math.max(0, ends - Date.now());







      const mm = Math.floor(left / 60000), ss = Math.floor((left % 60000) / 1000);







      const cd = card.querySelector('.timer-countdown');







      if (cd) cd.textContent = `${mm}:${String(ss).padStart(2, '0')}`;







    });







  }















  // ── Rendering ──







  function renderRemindersView() {







    notifBannerState();







    const list = document.getElementById('reminders-list');







    if (list) {







      list.innerHTML = '';







      if (!reminders.length) {







        list.innerHTML = '<div class="rem-empty">No reminders yet. Add one below — e.g. “Start cooking dinner” at 4:30 PM, and a backup at 5:00 PM.</div>';







      }







      reminders.forEach(r => {







        const row = document.createElement('div');







        row.className = 'reminder-row' + (r.enabled ? '' : ' off');







        row.innerHTML = `







          <button class="rem-toggle ${r.enabled ? 'on' : ''}" title="${r.enabled ? 'On' : 'Off'}"></button>







          <div class="rem-info"><div class="rem-time">${fmtTime(r.time)}</div><div class="rem-label">${escHtml(r.label)}</div></div>







          <button class="rem-del" title="Delete">✕</button>`;







        row.querySelector('.rem-toggle').addEventListener('click', () => toggleReminder(r.id));







        row.querySelector('.rem-del').addEventListener('click', () => removeReminder(r.id));







        list.appendChild(row);







      });







    }







    renderTimers();







  }















  function renderTimers() {







    const el = document.getElementById('timers-list');







    if (!el) return;







    el.innerHTML = '';







    timers.forEach(t => {







      const card = document.createElement('div');







      card.className = 'timer-card';







      card.dataset.ends = t.endsAt;







      card.innerHTML = `







        <div class="timer-info"><span class="timer-label">${escHtml(t.label)}</span><span class="timer-countdown">--:--</span></div>







        <button class="timer-cancel" title="Cancel">✕</button>`;







      card.querySelector('.timer-cancel').addEventListener('click', () => cancelTimer(t.id));







      el.appendChild(card);







    });







    updateTimerDisplays();







  }















  // ── Wire up controls (run once) ──







  (function initReminders() {







    const enableBtn = document.getElementById('enable-notif-btn');







    if (enableBtn) enableBtn.addEventListener('click', () => {







      if ('Notification' in window) Notification.requestPermission().then(() => { notifBannerState(); beep(1); });







    });







    const addBtn = document.getElementById('rem-add-btn');







    if (addBtn) addBtn.addEventListener('click', () => {







      const label = document.getElementById('rem-label').value.trim();







      const time = document.getElementById('rem-time').value;







      if (!time) return;







      addReminder(label, time);







      document.getElementById('rem-label').value = '';







    });







    const timerAdd = document.getElementById('timer-add-btn');







    if (timerAdd) timerAdd.addEventListener('click', () => {







      const min = document.getElementById('timer-min').value;







      const label = document.getElementById('timer-label').value;







      startTimer(min, label);







      document.getElementById('timer-min').value = '';







      document.getElementById('timer-label').value = '';







    });







    document.querySelectorAll('.timer-preset').forEach(b => {







      b.addEventListener('click', () => startTimer(b.dataset.min, document.getElementById('timer-label').value));







    });















    // Unlock audio on the first tap so a later reminder/timer can actually beep







    document.addEventListener('click', function unlock() {







      try {







        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();







        if (audioCtx.state === 'suspended') audioCtx.resume();







      } catch(e) {}







      document.removeEventListener('click', unlock);







    }, { once: true });















    setInterval(checkReminders, 20000);







    setInterval(tickTimers, 1000);







    checkReminders();







  })();















  // ══════════════════════════════════════════







  //  FIREBASE SYNC REFRESH (no page reload)







  // ══════════════════════════════════════════







  // ══════════════════════════════════════════



  //  SYMPTOM & FOOD DIARY



  // ══════════════════════════════════════════



  const DIARY_SYMPTOMS = ['Bloating','Gas','Abdominal pain','Cramps','Diarrhea','Constipation','Nausea','Reflux','Fatigue','Headache','Felt great 😊'];



  const DIARY_CATS = [['breakfast','🌅 Breakfast'],['lunch','🥗 Lunch'],['dinner','🍴 Dinner'],['snack','🥕 Snack']];



  const SEVERITIES = [['none','No symptoms'],['mild','Mild'],['moderate','Moderate'],['severe','Severe']];







  function localToday() {



    const d = new Date();



    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);



  }



  function formatDiaryDate(d) {



    try { return new Date(d + 'T00:00:00').toLocaleDateString(undefined, { weekday:'short', month:'short', day:'numeric', year:'numeric' }); }



    catch(e) { return d; }



  }



  function getDiary() {



    try { return JSON.parse(localStorage.getItem('fodmap-diary') || '[]'); } catch(e) { return []; }



  }



  function saveDiary(list) {



    try { localStorage.setItem('fodmap-diary', JSON.stringify(list)); } catch(e) {}



    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();



  }







  function renderDiaryView() {



    const el = document.getElementById('diary-content');



    if (!el) return;



    const entries = getDiary().slice().sort((a, b) => (b.date + (b.created || '')).localeCompare(a.date + (a.created || '')));



    const chips   = DIARY_SYMPTOMS.map(s => `<button type="button" class="diary-chip" data-sym="${escHtml(s)}">${escHtml(s)}</button>`).join('');



    const catOpts = DIARY_CATS.map(c => `<option value="${c[0]}">${c[1]}</option>`).join('');



    const sevOpts = SEVERITIES.map(s => `<option value="${s[0]}">${s[1]}</option>`).join('');







    let listHtml = '';



    if (!entries.length) {



      listHtml = `<div class="diary-empty">No entries yet — log your first meal above ☝️</div>`;



    } else {



      let curDate = '';



      entries.forEach(en => {



        if (en.date !== curDate) { curDate = en.date; listHtml += `<div class="diary-date-head">${formatDiaryDate(en.date)}</div>`; }



        const catEmoji = ((DIARY_CATS.find(c => c[0] === en.category) || ['', '🍽️'])[1]).split(' ')[0];



        const syms = (en.symptoms || []).map(s => `<span class="diary-symtag">${escHtml(s)}</span>`).join('');



        const sev  = SEVERITIES.find(s => s[0] === en.severity);



        const sevHtml = (en.severity && sev) ? `<span class="sev-badge sev-${en.severity}">${sev[1]}</span>` : '';



        listHtml += `<div class="diary-entry">



          <div class="diary-entry-top">



            <span class="diary-entry-meal">${catEmoji} ${escHtml(en.meal || '')}</span>



            ${sevHtml}



            <button class="diary-del" data-del="${en.id}" title="Delete entry">🗑</button>



          </div>



          ${syms ? `<div class="diary-symtags">${syms}</div>` : ''}



          ${en.notes ? `<div class="diary-entry-notes">${escHtml(en.notes).replace(/\n/g, '<br>')}</div>` : ''}



        </div>`;



      });



    }







    el.innerHTML = `



      <div class="diary-form-card">



        <div class="diary-form-row">



          <input type="date" id="diary-date" value="${localToday()}">



          <select id="diary-cat">${catOpts}</select>



        </div>



        <input type="text" id="diary-meal" placeholder="What did you eat? e.g. Grilled chicken & rice" maxlength="120">



        <div class="diary-chips-label">How did you feel afterwards?</div>



        <div class="diary-chips" id="diary-chips">${chips}</div>



        <div class="diary-form-row">



          <select id="diary-sev">${sevOpts}</select>



          <input type="text" id="diary-notes" placeholder="Notes (optional)" maxlength="200">



        </div>



        <button class="action-btn primary" id="diary-save" style="width:100%">＋ Add Diary Entry</button>



      </div>



      <div class="diary-list">${listHtml}</div>`;







    el.querySelectorAll('.diary-chip').forEach(c => c.addEventListener('click', () => c.classList.toggle('active')));



    el.querySelector('#diary-save').addEventListener('click', addDiaryEntry);



    el.querySelectorAll('.diary-del').forEach(b => b.addEventListener('click', () => deleteDiaryEntry(b.dataset.del)));



  }







  function addDiaryEntry() {



    const date     = document.getElementById('diary-date').value || localToday();



    const meal     = document.getElementById('diary-meal').value.trim();



    const category = document.getElementById('diary-cat').value;



    const severity = document.getElementById('diary-sev').value;



    const notes    = document.getElementById('diary-notes').value.trim();



    const symptoms = [...document.querySelectorAll('#diary-chips .diary-chip.active')].map(c => c.dataset.sym);



    if (!meal && !symptoms.length) { alert('Add what you ate or how you felt first.'); return; }



    const list = getDiary();



    list.push({ id: 'd' + Date.now() + Math.random().toString(36).slice(2, 6), date, meal, category, severity, symptoms, notes, created: new Date().toISOString() });



    saveDiary(list);



    renderDiaryView();



  }



  function deleteDiaryEntry(id) {



    if (!confirm('Delete this diary entry?')) return;



    saveDiary(getDiary().filter(e => e.id !== id));



    renderDiaryView();



  }







  // ══════════════════════════════════════════



  //  REINTRODUCTION TRACKER



  // ══════════════════════════════════════════



  const REINTRO_GROUPS = [



    { id:'lactose', name:'Lactose', emoji:'🥛', foods:'Milk, yogurt, soft cheese', challenge:['Day 1 — small: ¼ cup (60 ml) milk','Day 2 — medium: ½ cup (125 ml) milk','Day 3 — large: 1 cup (250 ml) milk'], tip:'If you tolerate lactose, hard cheese and butter were never an issue anyway.' },



    { id:'fructose', name:'Excess Fructose', emoji:'🍯', foods:'Honey, mango', challenge:['Day 1 — small: 1 tsp honey','Day 2 — medium: 1 tbsp honey','Day 3 — large: 2 tbsp honey OR ½ mango'], tip:'Test honey or mango on their own, away from other FODMAPs.' },



    { id:'sorbitol', name:'Sorbitol (polyol)', emoji:'🍑', foods:'Apricot, blackberries', challenge:['Day 1 — small: ¼ apricot','Day 2 — medium: ½ apricot','Day 3 — large: 1 apricot OR 5 blackberries'], tip:'Polyols also hide in sugar-free gum & mints (sorbitol, isomalt).' },



    { id:'mannitol', name:'Mannitol (polyol)', emoji:'🍄', foods:'Mushrooms, cauliflower', challenge:['Day 1 — small: ¼ cup mushrooms','Day 2 — medium: ½ cup mushrooms','Day 3 — large: ¾ cup mushrooms OR ½ cup cauliflower'], tip:'Mannitol and sorbitol are different polyols — test them separately.' },



    { id:'gos', name:'GOS (galacto-oligos)', emoji:'🫘', foods:'Chickpeas, almonds', challenge:['Day 1 — small: ¼ cup canned chickpeas','Day 2 — medium: ½ cup chickpeas','Day 3 — large: ¾ cup chickpeas OR 20 almonds'], tip:'Canned, rinsed legumes are lower in GOS than dried-then-boiled ones.' },



    { id:'fructans-grain', name:'Fructans — wheat / grain', emoji:'🍞', foods:'Wheat bread, pasta', challenge:['Day 1 — small: ½ slice wheat bread','Day 2 — medium: 1 slice wheat bread','Day 3 — large: 2 slices OR 1 cup cooked wheat pasta'], tip:'A different fructan source from onion/garlic — test grains separately.' },



    { id:'fructans-veg', name:'Fructans — onion & garlic', emoji:'🧅', foods:'Onion, garlic', challenge:['Day 1 — small: 1 tsp chopped onion','Day 2 — medium: 1 tbsp chopped onion','Day 3 — large: ¼ small onion OR 1 clove garlic'], tip:'Often the toughest group, but worth knowing your threshold — these are everywhere.' },



  ];



  const REINTRO_STATUSES = [



    { id:'not-started', label:'Not started', emoji:'⚪' },



    { id:'testing',     label:'Testing',     emoji:'🧪' },



    { id:'tolerated',   label:'Tolerated',   emoji:'✅' },



    { id:'sensitive',   label:'Sensitive',   emoji:'⚠️' },



  ];



  function getReintro() {



    try { return JSON.parse(localStorage.getItem('fodmap-reintro') || '{}'); } catch(e) { return {}; }



  }



  function saveReintro(obj) {



    try { localStorage.setItem('fodmap-reintro', JSON.stringify(obj)); } catch(e) {}



    if (typeof syncFodmapToFirebase === 'function') syncFodmapToFirebase();



  }



  function setReintroStatus(gid, status) {



    const o = getReintro(); o[gid] = Object.assign({}, o[gid], { status }); saveReintro(o); renderReintroView();



  }



  function setReintroNotes(gid, notes) {



    const o = getReintro(); o[gid] = Object.assign({}, o[gid], { notes }); saveReintro(o);



  }



  function renderReintroView() {



    const el = document.getElementById('reintro-content');



    if (!el) return;



    const state = getReintro();



    const intro = `<div class="reintro-intro">⚠️ Start reintroduction <strong>after</strong> 2–6 weeks of a settled elimination phase — ideally with a dietitian. Keep eating low-FODMAP between tests, challenge <strong>one group at a time</strong> over 3 days, and leave a rest day before the next group.</div>`;



    const cards = REINTRO_GROUPS.map(g => {



      const st    = (state[g.id] && state[g.id].status) || 'not-started';



      const notes = (state[g.id] && state[g.id].notes)  || '';



      const statusBtns = REINTRO_STATUSES.map(s => `<button class="reintro-status-btn${st === s.id ? ' active ' + s.id : ''}" data-grp="${g.id}" data-status="${s.id}">${s.emoji} ${s.label}</button>`).join('');



      const doses = g.challenge.map(d => `<li>${escHtml(d)}</li>`).join('');



      return `<div class="reintro-card status-${st}">



        <div class="reintro-card-head"><span class="reintro-emoji">${g.emoji}</span><span class="reintro-name">${escHtml(g.name)}</span></div>



        <div class="reintro-foods"><strong>Test foods:</strong> ${escHtml(g.foods)}</div>



        <ul class="reintro-doses">${doses}</ul>



        <div class="reintro-tip">💡 ${escHtml(g.tip)}</div>



        <div class="reintro-status-row">${statusBtns}</div>



        <textarea class="reintro-notes" data-grp="${g.id}" placeholder="Your reaction / notes…">${escHtml(notes)}</textarea>



      </div>`;



    }).join('');



    el.innerHTML = intro + `<div class="reintro-grid">${cards}</div>`;



    el.querySelectorAll('.reintro-status-btn').forEach(b => b.addEventListener('click', () => setReintroStatus(b.dataset.grp, b.dataset.status)));



    el.querySelectorAll('.reintro-notes').forEach(t => t.addEventListener('change', () => setReintroNotes(t.dataset.grp, t.value)));



  }







  // ══════════════════════════════════════════



  //  EATING-OUT GUIDE



  // ══════════════════════════════════════════



  const DINING_GUIDE = [



    { cuisine:'Grill & American', emoji:'🍔', safe:['Plain grilled steak, chicken or fish','Burger patty (skip the bun, or GF/lettuce wrap)','Baked potato or plain fries','Side salad with oil & vinegar','Plain steamed vegetables'], avoid:['Onion rings, garlic bread','“Secret” sauces, BBQ sauce, gravy','Battered or breaded items (wheat)','Heavy coleslaw'], tips:'Ask for no onion/garlic and sauce on the side. Oil, vinegar, salt, pepper and lemon are all safe.' },



    { cuisine:'Italian', emoji:'🍝', safe:['Gluten-free pasta if offered','Simple tomato (napoletana) or olive-oil sauce','Grilled fish or chicken','Caprese — tomato, mozzarella, basil','Plain risotto (ask for no onion base)'], avoid:['Garlic bread, regular wheat pasta','Creamy 4-cheese or onion-garlic sauces','Pizza on a normal wheat base'], tips:'Most sauces start with onion & garlic — ask for a plain tomato or olive-oil & herb sauce.' },



    { cuisine:'Mexican', emoji:'🌮', safe:['Corn tortillas (not flour)','Grilled meat or fish fillings','Plain rice','Cheese, lettuce, tomato, cilantro','Lime; a small scoop of plain guac'], avoid:['Refried & black beans (GOS)','Onion & garlic in salsas','Flour tortillas, big guac portions'], tips:'Build a rice bowl or corn tacos with grilled protein, cheese, tomato and lettuce. Skip the beans.' },



    { cuisine:'Chinese', emoji:'🥡', safe:['Plain steamed rice','Steamed plain protein & bok choy','Stir-fries cooked without onion/garlic (ask)','Plain egg dishes / omelette'], avoid:['Garlic/onion sauces, hoisin, sweet & sour','Wonton & spring rolls (wheat)','Thickened “gravy” sauces'], tips:'Onion & garlic are hard to dodge — choose steamed dishes, sauce on the side, plus plain rice.' },



    { cuisine:'Japanese / Sushi', emoji:'🍣', safe:['Sashimi & nigiri','Simple rolls — cucumber, salmon, tuna','Edamame (small)','Miso soup (small)','Steamed rice, seaweed salad'], avoid:['Tempura (wheat batter)','Teriyaki & onion-garlic sauces','Large avocado or inari portions'], tips:'One of the easiest cuisines: sashimi, simple rolls and plain rice. Use tamari if you’re also gluten-free.' },



    { cuisine:'Indian', emoji:'🍛', safe:['Plain basmati rice','Tandoori or grilled meats','Plain papadums (check the oil)','Cucumber raita (lactose-free if possible)'], avoid:['Onion-garlic gravies & curries','Naan & samosas (wheat + onion)','Dal & chana (lentils/chickpeas)'], tips:'Most curries are onion-garlic based — tandoori grilled meats with plain rice are the safest bet.' },



    { cuisine:'Thai / Vietnamese', emoji:'🍜', safe:['Plain jasmine rice or rice noodles','Grilled meat or fish skewers','Fresh rice-paper rolls (check filling)','Steamed dishes'], avoid:['Onion, garlic & garlic chives','Large cashew dishes','Curry pastes with onion/garlic'], tips:'Rice-noodle dishes can be made without onion/garlic — just ask. Plain rice + grilled protein is reliable.' },



    { cuisine:'Café & Breakfast', emoji:'☕', safe:['Eggs any style','Bacon or plain sausages (check fillers)','GF toast or a small slice of sourdough','Lactose-free latte, black coffee or tea','Strawberries, blueberries, orange'], avoid:['Large regular-milk lattes','Wheat toast & pastries','Baked beans; hash browns with onion'], tips:'Ask for lactose-free or less milk (a flat white has less than a latte). Eggs + GF toast is a safe standby.' },



    { cuisine:'Fast Food', emoji:'🍟', safe:['Plain burger patty, no bun or sauce','Grilled chicken (check the seasoning)','Plain fries (often safe)','Side salad with oil & vinegar'], avoid:['Buns, special sauces, onion, relish','Crispy / breaded chicken','Shakes & soft-serve (lactose)'], tips:'Order plain and customise: patty + cheese + lettuce + tomato, no bun, no sauce, no onion.' },



  ];



  function renderDiningView() {



    const el = document.getElementById('dining-content');



    if (!el) return;



    el.innerHTML = DINING_GUIDE.map(d => `



      <div class="dining-card">



        <div class="dining-head"><span class="dining-emoji">${d.emoji}</span><span class="dining-cuisine">${escHtml(d.cuisine)}</span></div>



        <div class="dining-cols">



          <div class="dining-col safe">



            <div class="dining-col-title">✅ Safe orders</div>



            <ul>${d.safe.map(s => `<li>${escHtml(s)}</li>`).join('')}</ul>



          </div>



          <div class="dining-col avoid">



            <div class="dining-col-title">⛔ Skip / ask to remove</div>



            <ul>${d.avoid.map(s => `<li>${escHtml(s)}</li>`).join('')}</ul>



          </div>



        </div>



        <div class="dining-tip">💡 ${escHtml(d.tips)}</div>



      </div>`).join('');



  }











  window.fodmapRefresh = function() {







    meals = loadMeals();







    progress = loadProgress();







    reminders = loadReminders();







    renderPlanner();







    renderProgress();







    renderFindsView();







    renderRecipeGrid();







    if (currentView === 'reminders') renderRemindersView();







    if (currentView === 'diary') renderDiaryView();







    if (currentView === 'reintro') renderReintroView();







  };















  // ══════════════════════════════════════════







  //  INIT







  // ══════════════════════════════════════════







  renderPlanner();







  renderProgress();







  renderRemindersView();















})();







