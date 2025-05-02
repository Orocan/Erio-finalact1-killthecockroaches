const CACHE_NAME = 'cockroach-killer-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/assets/cockroach.png',
    '/assets/dead_cockroach.png',
    '/assets/icon.png',
    '/assets/kill.mp3',
    '/assets/music.mp3',
    '/assets/slipper.png',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
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