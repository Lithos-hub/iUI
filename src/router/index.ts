import { createRouter, createWebHistory } from 'vue-router';
import { componentsRoutes } from './componentsRoutes';

const routes = [
	{
		path: '/',
		name: 'landing',
		component: () => import('@/views/index.vue'),
	},

	{
		path: '/iui',
		name: 'iui',
		component: () => import('@/layouts/Default.vue'),
		redirect: {
			name: 'iui:summary',
		},
		children: [
			{
				path: 'summary',
				name: 'iui:summary',
				component: () => import('@/views/summary.vue'),
			},
			{
				path: 'about',
				name: 'iui:about',
				component: () => import('@/views/about.vue'),
			},
			...componentsRoutes,
		],
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
