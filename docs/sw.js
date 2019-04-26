const cacheName = 'v1';

const cacheAssets = [
	'index.html',
	'./dist/css/stylesheet.css',
	'./dist/js/app.js',
	'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i',
	'https://fonts.googleapis.com/icon?family=Material+Icons'
];

// Call install event
self.addEventListener( 'install', event => {
	console.log( 'Service worker installed' );

	event.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log( 'Service Worker: Caching Files' );

				cache.addAll( cacheAssets );
			})
			.then( () => self.skipWaiting() )
	)
});

// Call activate event
self.addEventListener( 'activate', event => {
	console.log( 'Service worker activated' );

	// Remove unwanted cache
	event.waitUntil(
		caches.keys().then( cacheNames => {
			return Promise.all(
				cacheNames.map( cache => {
					if( cache !== cacheName ) {
						console.log( 'Service Worker: Clearing old cache' );
						return caches.delete( cache );
					}
				})
			)
		})
	);
});

// Call fetch event
self.addEventListener('fetch', event => {
	console.log( 'Service Worker: Fetching' );

	event.respondWith(
		fetch(event.request)
			.catch( () => caches.match( event.request ) )
	);
});