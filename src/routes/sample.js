export default [
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	// {
	// 	path: '/user',
	// 	name: 'user',
	// 	component: () => import('@/views/User.vue'),
	// 	beforeEnter: (to, form, next) => {
	// 		const accountInfo = JSON.parse(localStorage.getItem('info'));
	// 		if (!accountInfo || accountInfo.role !== 'user') return alert('User만 접속 가능합니다');
	// 		next();
	// 	},
	// },
];
