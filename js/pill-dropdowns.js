// ─────────────────────────────────────────────────────────────
//  PILL → DROPDOWN (added 2026-10-13)
//
//  Every single-choice pill row in the app (category tabs, filters,
//  guide tabs, planner picker categories, MIND plan weeks) is shown
//  as a dropdown instead of a scrolling row of pills. The original
//  buttons stay in the page, hidden, and keep all their behaviour:
//  choosing an option just clicks the matching button. A
//  MutationObserver keeps each dropdown in sync when a row is
//  re-rendered or its active pill changes.
// ─────────────────────────────────────────────────────────────

(function () {
  const GROUPS = [
    { box: '#food-categories',   btn: '.cat-btn',         label: '🗂️ Category' },
    { box: '.rating-filters',    btn: '.rating-filter',   label: '🍀 FODMAP' },
    { box: '#recipe-categories', btn: '.cat-btn',         label: '🗂️ Category' },
    { box: '#recipe-filters',    btn: '.rfilter',         label: '🔎 Filter' },
    { box: '#picker-cats',       btn: '.picker-cat-btn',  label: '🗂️ Category' },
    { box: '#subs-cats',         btn: '.subs-cat-btn',    label: '🗂️ Category' },
    { box: '#finds-cats',        btn: '.finds-cat-btn',   label: '🗂️ Category' },
    { box: '#guides-tabs',       btn: '.guide-tab',       label: '📚 Guide' },
    { box: '.mind-week-tabs',    btn: '.mind-week-tab',   label: '📅 Week', joiner: ' · ' },
  ];
  const DOTS = { green: '🟢', yellow: '🟡', red: '🔴' };

  function optionText(b, cfg) {
    const dot = b.querySelector('.dot');
    const prefix = dot ? (Object.keys(DOTS).filter(c => dot.classList.contains(c)).map(c => DOTS[c] + ' ')[0] || '') : '';
    const parts = Array.from(b.childNodes).map(n => (n.textContent || '').replace(/\s+/g, ' ').trim()).filter(Boolean);
    return prefix + parts.join((cfg && cfg.joiner) || ' ');
  }

  function sync(box, sel, cfg) {
    const btns = Array.from(box.querySelectorAll(cfg.btn));
    const want = btns.map(b => optionText(b, cfg)).join('\n');
    if (sel.dataset.opts !== want) {
      sel.innerHTML = '';
      btns.forEach((b, i) => {
        const o = document.createElement('option');
        o.value = String(i);
        o.textContent = optionText(b, cfg);
        sel.appendChild(o);
      });
      sel.dataset.opts = want;
    }
    const active = btns.findIndex(b => b.classList.contains('active'));
    if (active >= 0 && sel.value !== String(active)) sel.value = String(active);
    sel.closest('.pill-picker').classList.toggle('hidden', btns.length < 2);
  }

  function enhance(box, cfg) {
    if (box.dataset.pillDropdown) return;
    box.dataset.pillDropdown = '1';
    const wrap = document.createElement('label');
    wrap.className = 'pill-picker';
    const lab = document.createElement('span');
    lab.className = 'pill-picker-label';
    lab.textContent = cfg.label;
    const sel = document.createElement('select');
    sel.className = 'pill-select';
    sel.setAttribute('aria-label', cfg.label);
    wrap.appendChild(lab);
    wrap.appendChild(sel);
    box.parentNode.insertBefore(wrap, box);
    box.classList.add('pill-hidden');
    sel.addEventListener('change', () => {
      const b = box.querySelectorAll(cfg.btn)[Number(sel.value)];
      if (b) b.click();
      setTimeout(() => sync(box, sel, cfg), 0);
    });
    sync(box, sel, cfg);
    new MutationObserver(() => sync(box, sel, cfg))
      .observe(box, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  function scan() {
    GROUPS.forEach(cfg => document.querySelectorAll(cfg.box).forEach(box => enhance(box, cfg)));
  }

  let queued = false;
  function queueScan() {
    if (queued) return;
    queued = true;
    setTimeout(() => { queued = false; scan(); }, 30);
  }

  function start() {
    scan();
    // Rows rendered later (MIND weeks, picker, finds…) are picked up as they appear.
    new MutationObserver(queueScan).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
