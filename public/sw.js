const CACHE_NAME = 'spectrity-v1';
const urlsToCache = [
  '/',
  'https://spectrity.bio/public/double%20helix.png',
  'https://spectrity.bio/public/final%20title.png',
  // Add other static assets
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests except for our assets domain
  const isAssetsDomain = event.request.url.startsWith('https://spectrity.bio/public/');
  if (!event.request.url.startsWith(self.location.origin) && !isAssetsDomain) return;
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});