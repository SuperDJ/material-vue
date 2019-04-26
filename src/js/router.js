import Vue from'vue';
import Router from'vue-router';

const Layout = () => import('./layouts/Index');
const Index = () => import('./pages/Index');

const routes = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '',
				name: 'Index',
				component: Index,
				meta: {
					title: 'Home',
				}
			},
		],
	},
];

const router = new Router({
	mode: 'history',
	routes,
});

Vue.use( Router );

export default router;