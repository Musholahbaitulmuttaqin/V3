// sw.js - Versi Pembersih (Kill Switch)
self.addEventListener('install', () => {
  self.skipWaiting(); // Paksa SW baru aktif
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      // Hapus semua gudang cache di HP user
      return Promise.all(names.map(name => caches.delete(name)));
    }).then(() => {
      // Matikan dirinya sendiri
      return self.registration.unregister();
    })
  );
});
