import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import VueLogger from 'vuejs-logger';
import Dialog from './plugins/dialog';

const isProduction = process.env.NODE_ENV === 'production';

// logger
Vue.use(VueLogger, {
	isEnabled: isProduction ? false : true,
	logLevel: 'debug',
	stringifyArguments: false,
	showLogLevel: true,
	showMethodName: true,
	separator: '|',
	showConsoleColors: true,
});
Vue.use(Dialog, { window });
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
