const CACHE = 'fodmap-v83';
const ASSETS = [
  './',
  './index.html',
  './clip.html',
  './css/style.css',
  './js/data.js',
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

  // Network-first, but revalidating. Passing the request through as-is lets the
  // browser's HTTP cache answer from its own copy for up to max-age (600s on
  // GitHub Pages) without ever reaching the network — which is how the app
  // could open stale from the taskbar and only come good after a manual
  // refresh. 'no-cache' forces a conditional request instead; the server still
  // answers 304 when nothing has changed, so this stays cheap.
  const fresh = new Request(e.request.url, {
    cache: 'no-cache',
    credentials: 'same-origin',
  });

  e.respondWith(
    fetch(fresh)
      .then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      // Offline, or the network died mid-flight: serve whatever we have. A
      // navigation with nothing cached for it still gets the app shell.
      .catch(() => caches.match(e.request).then(cached =>
        cached || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined)
      ))
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
