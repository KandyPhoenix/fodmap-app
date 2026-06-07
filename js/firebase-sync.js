// ════════════════════════════════════════════
//  Firebase Sync for FODMAP Diet Guide
//  Project: wellness-tracker-127
//  Document: fodmap/data
// ════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyAxqkJiZL94gR3W5TBPTRNE5AdLyCDwb2g",
  authDomain:        "wellness-tracker-127.firebaseapp.com",
  projectId:         "wellness-tracker-127",
  storageBucket:     "wellness-tracker-127.firebasestorage.app",
  messagingSenderId: "769681534889",
  appId:             "1:769681534889:web:a273b28653892af4039eb8"
};

(function initFodmapSync() {
  // Where this device records when its data was last edited. Deliberately NOT
  // prefixed "fodmap-" so it stays out of the synced payload itself.
  const MTIME_KEY = 'fodmapSyncMtime';

  function getLocalMtime() {
    const v = parseInt(localStorage.getItem(MTIME_KEY) || '0', 10);
    return isNaN(v) ? 0 : v;
  }
  function setLocalMtime(t) {
    try { localStorage.setItem(MTIME_KEY, String(t)); } catch(e) {}
  }

  // Collect all fodmap-* keys from localStorage. lastModified is the stored
  // edit time for THIS device — never Date.now() — so cloud-vs-local
  // comparisons are meaningful instead of "local is always newer".
  function gatherLocalData() {
    const data = { lastModified: getLocalMtime() };
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('fodmap-')) {
        try { data[key] = JSON.parse(localStorage.getItem(key)); }
        catch(e) { data[key] = localStorage.getItem(key); }
      }
    }
    return data;
  }

  // Write all fodmap-* keys from a snapshot back to localStorage
  function writeKeys(src) {
    Object.keys(src).forEach(key => {
      if (key.startsWith('fodmap-')) {
        try { localStorage.setItem(key, JSON.stringify(src[key])); }
        catch(e) {}
      }
    });
  }

  function countKeys(data) {
    return Object.keys(data).filter(k => k.startsWith('fodmap-')).length;
  }

  function isPlainObject(v) {
    return v && typeof v === 'object' && !Array.isArray(v);
  }

  // One-time, non-destructive merge used the first time this device runs the
  // new sync scheme — keeps every device's data instead of one clobbering the
  // other. Objects (meals map, progress stars) are unioned; arrays (finds,
  // user recipes) are concatenated and de-duped; on a true conflict, local wins.
  function unionMerge(localData, remote) {
    const out = {};
    const keys = new Set();
    Object.keys(localData).forEach(k => { if (k.startsWith('fodmap-')) keys.add(k); });
    Object.keys(remote).forEach(k => { if (k.startsWith('fodmap-')) keys.add(k); });
    keys.forEach(k => {
      const l = localData[k], r = remote[k];
      if (l === undefined) { out[k] = r; return; }
      if (r === undefined) { out[k] = l; return; }
      if (isPlainObject(l) && isPlainObject(r)) {
        out[k] = Object.assign({}, r, l);            // union of entries, local wins ties
      } else if (Array.isArray(l) && Array.isArray(r)) {
        const seen = new Set(), merged = [];
        l.concat(r).forEach(item => {
          const sig = JSON.stringify(item);
          if (!seen.has(sig)) { seen.add(sig); merged.push(item); }
        });
        out[k] = merged;
      } else {
        out[k] = l;                                   // fallback: keep local
      }
    });
    return out;
  }

  let db = null, docRef = null, debounceTimer = null, applyingRemote = false;

  // ── Status indicator ────────────────────────
  function setSyncStatus(status) {
    const el = document.getElementById('sync-status');
    if (!el) return;
    const map = {
      syncing: { text: '⟳ Syncing…', cls: 'sync-syncing' },
      synced:  { text: '✓ Synced',   cls: 'sync-ok'      },
      offline: { text: '✕ Offline',  cls: 'sync-offline'  },
    };
    const s = map[status] || map.offline;
    el.textContent = s.text;
    el.className   = 'sync-status ' + s.cls;
  }

  // Pull a remote snapshot into local storage and refresh the UI in place.
  function adoptRemote(remote) {
    applyingRemote = true;
    writeKeys(remote);
    setLocalMtime(remote.lastModified || Date.now());
    applyingRemote = false;
    if (typeof window.fodmapRefresh === 'function') window.fodmapRefresh();
  }

  async function pushLocal() {
    await docRef.set(gatherLocalData());
  }

  // ── Push local → Firebase (debounced) — called on every save ──
  window.syncFodmapToFirebase = function() {
    if (!docRef || applyingRemote) return;     // don't echo a freshly-pulled change back up
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      setSyncStatus('syncing');
      try {
        setLocalMtime(Date.now());             // this device is now the latest writer
        await pushLocal();
        setSyncStatus('synced');
      } catch(e) {
        console.warn('FODMAP sync push failed:', e);
        setSyncStatus('offline');
      }
    }, 1200);
  };

  // ── Initial reconcile on boot ───────────────
  async function syncFromFirebase() {
    if (!docRef) return;
    setSyncStatus('syncing');
    try {
      const snap = await docRef.get();

      if (!snap.exists) {
        setLocalMtime(Date.now());
        await pushLocal();
        setSyncStatus('synced');
        return;
      }

      const remote         = snap.data();
      const remoteModified = remote.lastModified || 0;
      const localModified  = getLocalMtime();

      // First run under the new scheme: merge so neither device loses data.
      if (localModified === 0) {
        const merged = unionMerge(gatherLocalData(), remote);
        applyingRemote = true;
        writeKeys(merged);
        applyingRemote = false;
        setLocalMtime(Date.now());
        await pushLocal();
        if (typeof window.fodmapRefresh === 'function') window.fodmapRefresh();
        setSyncStatus('synced');
        return;
      }

      if (remoteModified > localModified) {
        // Remote is newer — adopt it, unless it's empty while we hold real data.
        if (countKeys(remote) === 0 && countKeys(gatherLocalData()) > 0) {
          setLocalMtime(Date.now());
          await pushLocal();
        } else {
          adoptRemote(remote);
        }
      } else if (localModified > remoteModified) {
        await pushLocal();                     // local is newer — push it up
      }
      setSyncStatus('synced');
    } catch(e) {
      console.warn('FODMAP sync pull failed:', e);
      setSyncStatus('offline');
    }
  }

  // ── Live updates from other devices ─────────
  function listenForRemoteChanges() {
    if (!docRef) return;
    docRef.onSnapshot(snap => {
      if (!snap.exists) return;
      const remote = snap.data();
      if ((remote.lastModified || 0) > getLocalMtime()) {
        adoptRemote(remote);
        setSyncStatus('synced');
      }
    }, err => console.warn('FODMAP live sync error:', err));
  }

  // ── Force push button ────────────────────────
  function wireForceSync() {
    const btn = document.getElementById('force-sync-btn');
    if (!btn) return;
    btn.addEventListener('click', async () => {
      if (!docRef) { alert('Not connected to cloud. Check your internet connection.'); return; }
      btn.textContent = '⟳ Pushing…';
      btn.disabled = true;
      setSyncStatus('syncing');
      try {
        setLocalMtime(Date.now());
        await pushLocal();
        setSyncStatus('synced');
        btn.textContent = '✓ Pushed!';
        setTimeout(() => { btn.textContent = '☁️ Push to Cloud'; btn.disabled = false; }, 2000);
      } catch(e) {
        setSyncStatus('offline');
        btn.textContent = '☁️ Push to Cloud';
        btn.disabled = false;
        alert('Push failed — check your internet connection.');
      }
    });
  }

  // ── Boot ────────────────────────────────────
  try {
    firebase.initializeApp(firebaseConfig);
    db     = firebase.firestore();
    docRef = db.collection('fodmap').doc('data');
    syncFromFirebase().then(listenForRemoteChanges);
    wireForceSync();
  } catch(e) {
    console.warn('Firebase init failed (offline?):', e);
    setSyncStatus('offline');
    wireForceSync();
  }
})();
