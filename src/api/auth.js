import axiosApi from '@/api/index';
import { setAuth } from '@/utils/cmm';

let urlPath = '/api';

const dummyData = [
	{ email: 'user@naver.com', password: '1', role: 'user' },
	{ email: 'master@naver.com', password: '1', role: 'master' },
];

async function login(id, password) {
	if (!id || !password) {
		throw new Error('invalid parameter');
	}

	const user = dummyData.find(it => it.email === id);
	if (!user) {
		throw new Error('invalid user');
	}

	if (user.password !== password) {
		throw new Error('invalid password');
	}

	setAuth(user);

	return user;
}

async function logout() {
	let params = {};
	await axiosApi.get(`${urlPath}/logout`, { params });
	setAuth(null);
}

export default { login, logout };
