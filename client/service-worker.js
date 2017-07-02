var CACHE_NAME = 'king-of-the-hill-v1';

var urlsToCache = [
    '/',
    '/css/styles.css',
    '/index.html',
    '/images/bg.jpg',
    '/js/view.js',
    '/js/app.js',
    '/js/worker.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }

                    return fetch(event.request);
                }
            )
    );
});