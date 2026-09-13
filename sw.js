const CACHE = 'fodmap-v96';
const ASSETS = [
  './',
  './index.html',
  './clip.html',
  './css/style.css',
  './js/data.js',
  './js/guides-data.js',
  './js/airfryer-extra.js',
  './js/recipes.js',
  './js/kandy-recipes.js',
  './js/kandy-diet-recipes.js',
  './js/superage-breakfast.js',
  './js/superage-lunch.js',
  './js/superage-dinner.js',
  './js/superage-snacks.js',
  './js/superage-quick-lunch.js',
  './js/superage-quick-dinner.js',
  './js/lean-protein-recipes.js',
  './js/side-dishes.js',
  './js/family-clips.js',
  './js/family-recipe-data.js',
  './js/family-generated.js',
  './js/family-fill.js',
  './js/family-recipes.js',
  './js/family-typed.js',
  './js/family-cookbook.js',
  './js/slow-cooker-dump-meals.js',
  './js/added-recipes.js',
  './js/mob-recipes.js',
  './js/nutrition-estimator.js',
  './js/app.js',
  './js/firebase-sync.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable.svg',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // cache: 'reload' matters. A plain addAll() goes through the browser's
      // HTTP cache, and GitHub Pages serves everything with max-age=600 — so a
      // freshly installed cache could be filled with the PREVIOUS version's
      // files and then serve them as if they were new.
      .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // Only our own files are handled here. Firebase, fonts and anything else
  // cross-origin goes straight to the network untouched.
  let sameOrigin = false;
  try { sameOrigin = new URL(e.request.url).origin === self.location.origin; }
  catch (err) { return; }
  if (!sameOrigin) return;

  // Stale-while-revalidate. The old handler was network-first: every open
  // waited on ~30 conditional requests before anything painted, so on a slow
  // or flaky connection the app came up blank or half-rendered until a lucky
  // manual reload. Now the cached copy answers INSTANTLY (always a complete,
  // matching set — install refetches every asset on a version bump and the
  // page reloads once on controllerchange), while a background fetch quietly
  // refreshes the cached file for next time. 'no-cache' keeps that background
  // request honest against GitHub Pages' max-age=600 (the server still
  // answers 304 when nothing changed, so it stays cheap).
  const fresh = new Request(e.request.url, {
    cache: 'no-cache',
    credentials: 'same-origin',
  });

  e.respondWith(
    caches.match(e.request).then(cached => {
      const refetch = fetch(fresh).then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
      if (cached) {
        e.waitUntil(refetch.catch(() => {}));
        return cached;
      }
      // Not precached (a new file, or first visit): network, with the app
      // shell as the offline fallback for navigations.
      return refetch.catch(() => (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined));
    })
  );
});

// Focus (or open) the app when a reminder/timer notification is tapped
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      if (self.clients.openWindow) return self.clients.openWindow('./index.html');
    })
  );
});
