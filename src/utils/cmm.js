/**
 * @NOTICE
 * 공통 유틸리티
 */

import store from '@/store';

//spinner
export function showSpinner() {
	setSpinner(true);
}

export function hideSpinner() {
	setSpinner(false);
}

export function setSpinner(value) {
	store.commit('spinner', value);
}

export function isAuthorized() {
	let auth = getAuth();
	return !!auth;
}

const authKey = 'ospace-auth';
export function setAuth(value) {
	store.commit('auth', value);
	if (value) {
		localStorage.setItem(authKey, JSON.stringify(value));
	} else {
		localStorage.removeItem(authKey);
	}
}

export function getAuth() {
	let res = store.state.auth;
	if (!res) {
		res = localStorage.getItem(authKey);
		res = res && JSON.parse(res);
		store.commit('auth', res);
	}
	return res;
}

export function isY(val) {
	return 'Y' === val || 'y' === val;
}

export function isN(val) {
	return 'N' === val || 'n' === val;
}

let reEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
export function validEmail(value) {
	return value && reEmail.test(value);
}

let reDate = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
export function validDate(value) {
	return value && reDate.test(value);
}

export function hasOwnProperty(obj, key) {
	if (!obj) {
		return false;
	}
	return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isUndef(obj) {
	return undefined === obj || null === obj;
}
