// // service-worker.js

// import { build, files, version } from '$service-worker';

// const CACHE_NAME = `cache-${version}`;
// const ASSETS = [...build, ...files];

// self.addEventListener('install', (event) => {
// 	event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
// });

// self.addEventListener('activate', (event) => {
// 	event.waitUntil(
// 		caches.keys().then((cacheNames) => {
// 			return Promise.all(
// 				cacheNames
// 					.filter((cacheName) => {
// 						return cacheName.startsWith('cache-') && cacheName !== CACHE_NAME;
// 					})
// 					.map((cacheName) => {
// 						return caches.delete(cacheName);
// 					})
// 			);
// 		})
// 	);
// });

// self.addEventListener('fetch', (event) => {
// 	const { request } = event;

// 	// GTM cache
// 	if (request.url.includes('googletagmanager.com')) {
// 		return event.respondWith(fetch(request));
// 	}

// 	event.respondWith(
// 		caches.match(request).then((response) => {
// 			if (response) {
// 				return response;
// 			}

// 			return fetch(request)
// 				.then((networkResponse) => {
// 					if (
// 						!networkResponse ||
// 						networkResponse.status !== 200 ||
// 						networkResponse.type !== 'basic'
// 					) {
// 						return networkResponse;
// 					}

// 					const clonedResponse = networkResponse.clone();
// 					caches.open(CACHE_NAME).then((cache) => {
// 						cache.put(request, clonedResponse);
// 					});

// 					return networkResponse;
// 				})
// 				.catch(() => {
// 					return caches.match(request);
// 				});
// 		})
// 	);
// });
