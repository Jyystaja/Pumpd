self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('my-cache-v1').then(cache => {
			return cache.addAll([
				'/',
				'/styles/main.css',
				'/scripts/main.js',
				'/images/icon.png'
			]);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});
