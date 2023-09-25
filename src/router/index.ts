import { createRouter, createWebHistory } from 'vue-router';
import { componentsRoutes } from './componentsRoutes';

const routes = [
	{
		path: '/',
		name: 'landing',
		component: () => import('@/views/indexView.vue'),
	},

	{
		path: '/iui',
		name: 'iui',
		component: () => import('@/layouts/DefaultLayout.vue'),
		redirect: {
			name: 'iui:playground',
		},
		children: [
			{
				path: 'playground',
				name: 'iui:playground',
				component: () => import('@/views/_PLAYGROUND/playgroundView.vue'),
			},
			{
				path: 'about',
				name: 'iui:about',
				component: () => import('@/views/aboutView.vue'),
			},
			...componentsRoutes,
		],
	},
];

const router = createRouter({
	scrollBehavior: () => ({ top: 0 }),
	history: createWebHistory(),
	routes,
});

export default router;
