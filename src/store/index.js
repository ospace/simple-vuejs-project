/**
 * @NOTICE
 * Vue 저장소 입니다.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		spinner: false,
		auth: null,
	},
	mutations: {
		spinner(state, value) {
			state.spinner = value;
		},
		auth(state, value) {
			state.auth = value;
		},
	},
});
