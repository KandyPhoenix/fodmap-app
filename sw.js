const CACHE = 'fodmap-v64';
const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/airfryer-extra.js',
  './js/recipes.js',
  './js/kandy-recipes.js',
  './js/kandy-diet-recipes.js',
  './js/family-clips.js',
  './js/family-recipe-data.js',
  './js/family-generated.js',
  './js/family-recipes.js',
  './js/family-typed.js',
  './js/family-cookbook.js',
  './js/app.js',
  './js/firebase-sync.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-maskable.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
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
  const url = e.request.url;
  if (e.request.method !== 'GET') return;
  // Always pass Firebase and CDN requests straight to network
  if (url.includes('firebase') || url.includes('gstatic.com') || url.includes('googleapis.com')) {
    return;
  }

  // Network-first for our own app shell, so a new version shows up on a normal
  // reload — no hard refresh (Ctrl+Shift+R) needed. Falls back to the cache
  // when offline, so the app still works without a signal (e.g. in a store).
  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(cached => cached || caches.match('./index.html')))
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
