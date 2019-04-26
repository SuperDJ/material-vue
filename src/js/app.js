import Vue from'vue';

import router from'./router';

// Load initial Component
import Container from'./Container';

new Vue({
	el: '#root',
	router,
	render: h => h( Container ),
});

/*
 * Register a service worker
 */
if( navigator.serviceWorker )
{
	self.addEventListener('load', () => {
		navigator.serviceWorker
			.register( '/sw.js' )
			.then( reg => console.log( 'Service worker: Registered' ) )
			.catch( error => console.log( `Service worker: Error: ${error}` ) );
	});
}