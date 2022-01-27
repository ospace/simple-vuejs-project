import axios from 'axios';
import router from '@/routes';

const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
});

instance.interceptors.request.use(
	function(config) {
		// 요청 성공 직전 호출. 필요한 헤더 설정.
		// config.headers['Authorization'] = process.env.VUE_APP_AUTH;
		return config;
	},
	function(error) {
		// 요청 에러 직전 호출됩니다.
		return Promise.reject(error);
	},
);

// 응답 인터셉터
instance.interceptors.response.use(
	function(response) {
		/**
		 * http status가 200인 경우 응답 성공 직전 호출.
		 */
		let resData = response.data; // HTML body 추출
		// 응답에 상태 정보가 포함된 경우
		/*
		if (!resData) {
			return Promise.reject({ message: 'body empty!' });
		}

		if (undefined === resData.status) {
			return Promise.reject({ message: 'status not exist in body' });
		}

		if (0 < resData.status) {
			return Promise.reject({ message: resData.message, status: resData.status });
		}
		 return resData.response;
		 */

		// body에 바로 데이터가 있는 경우
		return resData;
	},

	function(error) {
		/**
		 * http status가 200이 아닌 경우 응답 에러 직전 호출
		 */
		const status = error.response.status;

		let data;
		if (401 === status) {
			router.replace({ name: 'login' }).catch(() => {});
			data = { status, message: '연결이 끊겼습니다.' };
		} else if (500 === status) {
			data = error.response.data;
		}

		return Promise.reject(data ? data : error);
	},
);

export default instance;
