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
  function getAllRecipes() {
    return [...getUserRecipes(), ...(typeof KANDY_RECIPES !== 'undefined' ? KANDY_RECIPES : []), ...RECIPES];
  }

  // ══════════════════════════════════════════
  //  STATE
  // ══════════════════════════════════════════
  let currentView = 'planner';
  let foodCategory = 'all', foodRating = 'all', searchQuery = '';
  let recipeCategory = 'all';
  let pickerCategory = 'all', pickerSearch = '';
  let weekOffset = 0;
  let meals = loadMeals();
  let pendingCell = null;
  let editingRecipeId = null;

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
      document.getElementById('view-finds').classList.toggle('hidden',   currentView !== 'finds');
      if (currentView === 'subs') renderSubsView();
      if (currentView === 'finds') renderFindsView();
      searchInput.placeholder = currentView === 'recipes' ? 'Search recipes…' : currentView === 'subs' ? 'Search substitutions…' : currentView === 'checker' ? 'Search foods or recipes…' : currentView === 'finds' ? 'Search finds…' : currentView === 'planner' ? 'Search foods or recipes…' : 'Search foods…';
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
  });
  clearBtn.addEventListener('click', () => {
    searchInput.value = ''; searchQuery = '';
    searchWrap.classList.remove('has-value');
    searchInput.focus();
    if (currentView === 'foods') renderFoodGrid();
    else if (currentView === 'recipes') renderRecipeGrid();
    else if (currentView === 'subs') renderSubsView();
    else if (currentView === 'finds') renderFindsView();
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
    renderRecipeGrid();
  })();

  function renderRecipeGrid() {
    const grid  = document.getElementById('recipe-grid');
    const noRes = document.getElementById('recipe-no-results');
    const count = document.getElementById('recipe-count');
    const all = getAllRecipes();
    const list = all.filter(r => {
      if (recipeCategory !== 'all' && r.category !== recipeCategory) return false;
      if (searchQuery) return (r.name + ' ' + r.category).toLowerCase().includes(searchQuery);
      return true;
    });
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
      const cal = (typeof RECIPE_CALORIES !== 'undefined' && RECIPE_CALORIES[r.id]) ? RECIPE_CALORIES[r.id] : null;
      const calHtml = cal ? `<span class="recipe-cal">🔥 ${cal} cal</span>` : '';
      card.innerHTML = `
        <div class="recipe-card-banner">
          ${isUser ? '<span class="my-recipe-badge">⭐ My Recipe</span>' : ''}
          ${r.emoji || '🍽️'}
          <span class="recipe-difficulty ${r.difficulty || 'easy'}">${r.difficulty || 'easy'}</span>
        </div>
        <div class="recipe-card-body">
          <div class="recipe-name">${r.name}</div>
          <div class="recipe-meta"><span>⏱ ${r.time || '—'}</span><span>👥 Serves ${r.serves || '—'}</span>${calHtml}</div>
          <div class="recipe-tags">${tags}</div>
        </div>`;
      card.addEventListener('click', () => openRecipeModal(r));
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
    const baseServes = recipe.serves || 2;
    const recipeCal = (typeof RECIPE_CALORIES !== 'undefined' && RECIPE_CALORIES[recipe.id]) ? RECIPE_CALORIES[recipe.id] : null;

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
    const userControls = isUser ? `
      <div style="padding:0 24px 8px;display:flex;gap:10px">
        <button class="action-btn" style="background:#fff3e0;color:#ff7043;flex:1" id="edit-recipe-btn">✏️ Edit Recipe</button>
        <button class="action-btn danger" id="delete-recipe-btn">🗑 Delete</button>
      </div>` : '';
    const addPlannerBtn = `<div style="padding:0 24px 24px"><button class="action-btn primary" id="add-to-planner-btn" style="width:100%;padding:12px">📅 Add to Meal Planner</button></div>`;
    const bannerClass = isUser ? 'rmodal-banner user-recipe-banner' : 'rmodal-banner';
    const badgeHtml   = isUser ? `<div style="display:inline-block;background:#ff7043;color:white;padding:4px 12px;border-radius:12px;font-size:11px;font-weight:800;letter-spacing:0.5px;margin-bottom:8px">⭐ MY RECIPE</div>` : '';
    const fodmapNoteHtml = (recipe.fodmapNote || recipe.fodmapnote)
      ? `<div class="rmodal-section"><div class="rmodal-section-title">💡 FODMAP Notes</div><div class="fodmap-note-box"><div class="fodmap-note-text">${recipe.fodmapNote || recipe.fodmapnote}</div></div></div>`
      : '';

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
          <span class="rmodal-emoji">${recipe.emoji || '🍽️'}</span>
          <div class="rmodal-title">${recipe.name}</div>
          <div class="rmodal-meta">
            <div class="rmodal-meta-item">⏱ ${recipe.time || '—'}</div>
            <div class="rmodal-meta-item">👥 Serves ${recipe.serves || '—'}</div>
            <div class="rmodal-meta-item" style="text-transform:capitalize">📊 ${recipe.difficulty || 'easy'}</div>
            ${recipeCal ? `<div class="rmodal-meta-item rmodal-cal">🔥 ${recipeCal} cal / serving <span style="font-size:10px;opacity:0.75">(est.)</span></div>` : ''}
          </div>
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
        ${fodmapNoteHtml}
        ${alertsHtml}
        ${swapsHtml}
        ${addPlannerBtn}
      </div>`;

    document.getElementById('mc2').addEventListener('click', closeAll);
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
    if (isUser) {
      document.getElementById('edit-recipe-btn').addEventListener('click', () => { closeAll(); openRecipeForm(recipe); });
      document.getElementById('delete-recipe-btn').addEventListener('click', () => deleteUserRecipe(recipe.id, recipe.name));
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
    document.getElementById('form-modal-title').textContent = isEdit ? '✏️ Edit My Recipe' : '✏️ Add My Recipe';
    document.getElementById('rf-delete-btn').classList.toggle('hidden', !isEdit);

    // Populate fields
    document.getElementById('rf-emoji').value      = existing ? (existing.emoji || '') : '';
    document.getElementById('rf-name').value       = existing ? existing.name : '';
    document.getElementById('rf-category').value   = existing ? (existing.category || 'dinner') : 'dinner';
    document.getElementById('rf-time').value       = existing ? (existing.time || '') : '';
    document.getElementById('rf-serves').value     = existing ? (existing.serves || 2) : 2;
    document.getElementById('rf-difficulty').value = existing ? (existing.difficulty || 'easy') : 'easy';
    document.getElementById('rf-tags').value       = existing ? (existing.tags || []).join(', ') : '';
    document.getElementById('rf-fodmap-note').value = existing ? (existing.fodmapNote || '') : '';
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
    document.getElementById('rf-delete-btn').onclick     = () => {
      if (existing) deleteUserRecipe(existing.id, existing.name);
    };
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

    const recipe = {
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
      isCustom:   true,
    };

    const list = getUserRecipes();
    if (editingRecipeId) {
      const idx = list.findIndex(r => r.id === editingRecipeId);
      if (idx >= 0) list[idx] = recipe; else list.push(recipe);
    } else {
      list.unshift(recipe);
    }
    saveUserRecipes(list);
    renderRecipeGrid();
    closeAll();
  }

  function deleteUserRecipe(id, name) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    const list = getUserRecipes().filter(r => r.id !== id);
    saveUserRecipes(list);
    renderRecipeGrid();
    closeAll();
  }

  function escHtml(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
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
        const mealKey = `${d.key}-${mtype.id}`;
        const meal = meals[mealKey];

        if (meal) {
          const r = meal.type === 'recipe' ? getAllRecipes().find(x => x.id === meal.id) : null;
          const displayName = r ? r.name : (meal.text || 'Meal');
          const displayEmoji = r ? (r.emoji || '🍽️') : '📝';
          const isLF = !!meal.leftover;
          const chip = document.createElement('div');
          chip.className = 'meal-chip' + (isLF ? ' leftover' : '');
          chip.innerHTML = `
            <button class="meal-chip-lf${isLF ? ' active' : ''}" title="${isLF ? 'Remove leftover mark' : 'Mark as leftover'}">♻</button>
            <span class="meal-chip-text">${isLF ? '<span class="lf-badge">LF</span> ' : ''}${displayEmoji} ${displayName}</span>
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

  function renderPickerList() {
    const list = getAllRecipes().filter(r => {
      if (pickerCategory !== 'all' && r.category !== pickerCategory) return false;
      if (pickerSearch) return (r.name + ' ' + r.category).toLowerCase().includes(pickerSearch);
      return true;
    });
    const el = document.getElementById('picker-list');
    el.innerHTML = '';
    if (!list.length) { el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-muted)">No recipes found</div>'; return; }
    list.forEach(r => {
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
      const { num, unit } = parseQtyNum(q);
      if (num === null) { skipped.push(q); return; }
      groups[unit] = (groups[unit] || 0) + num;
    });
    if (!Object.keys(groups).length) return qtys.join(' + ');

    // Check for shopping hint on count-type units
    const countUnits = ['each','medium','large','small'];
    for (const [u, total] of Object.entries(groups)) {
      if (countUnits.includes(u)) {
        const nameLower = itemName.toLowerCase();
        for (const hint of SHOPPING_HINTS) {
          if (hint.match.some(m => nameLower.includes(m))) {
            const h = hint.fn(Math.ceil(total));
            if (h) return h;
          }
        }
      }
    }

    const parts = Object.entries(groups).map(([unit, total]) => {
      if (unit === 'each') return formatQtyNum(total);
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

  const PREP_WORDS = /[,\s]+(sliced|diced|chopped|minced|crushed|peeled|grated|shredded|julienned|halved|quartered|torn|rinsed|drained|thawed|frozen|fresh|dried|cooked|raw|thinly|roughly|finely|coarsely|lightly|well|about|optional|garnish|to garnish|for garnish|for serving|to serve)\b.*/gi;

  function normalizeIngredientKey(name) {
    return name
      .toLowerCase()
      .replace(/\(.*?\)/g, '')   // strip (garnish), (optional), (about 2 tbsp) etc.
      .replace(PREP_WORDS, '')   // strip ", sliced", ", finely chopped" etc.
      .replace(/[,;]+$/, '')     // trailing punctuation
      .trim();
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
          const key = normalizeIngredientKey(ing.item);
          if (!ingredientMap[key]) ingredientMap[key] = { name: cleanIngredientName(ing.item), lines: [] };
          ingredientMap[key].lines.push({
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

      // Only show breakdown if more than one line (or one line with a qty worth showing)
      const showBreakdown = uniqueLines.length > 1;
      const breakdownHtml = showBreakdown
        ? `<div class="si-breakdown">${uniqueLines.map(l => {
            const isToTaste = /^(to taste|as needed|pinch|dash|—)/i.test(l.qty.trim());
            return `<div class="si-line">
              <span class="si-line-qty">${isToTaste ? l.qty : l.qty}</span>
              <span class="si-line-recipe">— ${l.recipe}</span>
            </div>`;
          }).join('')}</div>`
        : '';

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
      ? `<div class="shopping-week-title">Week of ${weekTitle}</div>` +
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
        renderPlanner();
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
  //  FIREBASE SYNC REFRESH (no page reload)
  // ══════════════════════════════════════════
  window.fodmapRefresh = function() {
    meals = loadMeals();
    renderPlanner();
    renderFindsView();
    renderRecipeGrid();
  };

  // ══════════════════════════════════════════
  //  INIT
  // ══════════════════════════════════════════
  renderPlanner();

})();
