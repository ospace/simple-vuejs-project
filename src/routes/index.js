import Vue from 'vue';
import VueRouter from 'vue-router';
import sample from '@/routes/sample';
import error from '@/routes/error';
import { isAuthorized } from '@/utils/cmm';

Vue.use(VueRouter);

/**
 * @NOTICE
 * router 디렉토리 입니다,
 * 관심사에 따라 파일을 생성후 "routes: []"에 추가 하시면 됩니다.
 * sample.js를 참고하세요.
 */
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/login',
			name: 'login',
			meta: { title: '로그인' },
			component: () => import('@/views/Login.vue'),
			props: true,
		},
		{
			path: '/notsupport',
			name: 'notBrowser',
			component: () => import('@/views/errors/NotBrowser.vue'),
		},
		{
			path: '/',
			// name: 'root',
			component: () => import('@/views/layouts/LayoutFrame.vue'),
			children: [...sample ],
		},
		...error,
	],
});

router.beforeEach(onBeforeEnter);

async function onBeforeEnter(to, from, next) {
	if ('notFound' === to.name || 'notBrowser' === to.name) {
		return next();
	}

	if (isAuthorized()) {
		if ('/' === to.path || '/mypage' === to.path) {
			return next();
		}

		return next();
	}
	if ('login' === router.currentRoute.name) {
		return;
	}
	'login' === to.name ? next() : next({ name: 'login', params: { from: to.name } });
}

export default router;
