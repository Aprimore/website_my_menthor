import { build, files, version } from '$service-worker';

const CACHE_NAME = `cache-${version}`;

const ASSETS = [
  ...build,
  ...files
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('cache-') && cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  event.respondWith(
    caches.match(request).then((response) => {
      // Return cached response if found
      if (response) {
        return response;
      }

      // Fetch and cache new requests
      return fetch(request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }

        const clonedResponse = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clonedResponse);
        });

        return networkResponse;
      }).catch(() => {
        // Handle fetch errors
        // Fallback to a cached response if available
        return caches.match(request);
      });
    })
  );
});
