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
  // Collect all fodmap-* keys from localStorage
  function gatherLocalData() {
    const data = { lastModified: Date.now() };
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('fodmap-')) {
        try { data[key] = JSON.parse(localStorage.getItem(key)); }
        catch(e) { data[key] = localStorage.getItem(key); }
      }
    }
    return data;
  }

  // Write all fodmap-* keys from a remote snapshot back to localStorage
  function applyRemoteData(remoteData) {
    Object.keys(remoteData).forEach(key => {
      if (key.startsWith('fodmap-')) {
        try { localStorage.setItem(key, JSON.stringify(remoteData[key])); }
        catch(e) {}
      }
    });
  }

  // Count fodmap data keys (for safety checks)
  function countKeys(data) {
    return Object.keys(data).filter(k => k.startsWith('fodmap-')).length;
  }

  let db = null, docRef = null, debounceTimer = null;

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

  // ── Push local → Firebase ───────────────────
  window.syncFodmapToFirebase = function() {
    if (!docRef) return;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      setSyncStatus('syncing');
      try {
        await docRef.set(gatherLocalData());
        setSyncStatus('synced');
      } catch(e) {
        console.warn('FODMAP sync push failed:', e);
        setSyncStatus('offline');
      }
    }, 1500);
  };

  // ── Pull Firebase → local ───────────────────
  async function syncFromFirebase() {
    if (!docRef) return;
    setSyncStatus('syncing');
    try {
      const snap = await docRef.get();
      if (!snap.exists) {
        // Nothing remote yet — push what we have
        await docRef.set(gatherLocalData());
        setSyncStatus('synced');
        return;
      }
      const remote = snap.data();
      const remoteModified = remote.lastModified || 0;
      const localData      = gatherLocalData();
      const localModified  = localData.lastModified || 0;

      if (remoteModified > localModified) {
        const remoteKeys = countKeys(remote);
        const localKeys  = countKeys(localData);
        // Safety: don't overwrite richer local state with an empty remote
        if (localKeys > remoteKeys && localKeys > 2) {
          console.warn('FODMAP sync: remote newer but fewer keys — pushing local instead');
          await docRef.set(localData);
        } else {
          applyRemoteData(remote);
          // Tell the app to re-render with fresh data
          window.dispatchEvent(new CustomEvent('fodmap-sync-loaded'));
        }
      } else {
        // Local is newer or equal — push up
        await docRef.set(localData);
      }
      setSyncStatus('synced');
    } catch(e) {
      console.warn('FODMAP sync pull failed:', e);
      setSyncStatus('offline');
    }
  }

  // ── Boot ────────────────────────────────────
  try {
    firebase.initializeApp(firebaseConfig);
    db     = firebase.firestore();
    docRef = db.collection('fodmap').doc('data');
    syncFromFirebase();
  } catch(e) {
    console.warn('Firebase init failed (offline?):', e);
    setSyncStatus('offline');
  }
})();
