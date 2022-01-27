export default [
	{
		path: '*',
		name: 'notFound',
		component: () => import('@/views/errors/NotFound.vue'),
	},
];
