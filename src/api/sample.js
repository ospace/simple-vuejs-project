import api from '@/api';

const urlPath = '/todos';

const exports = {
	get(params) {
		params = params || {};
		params.t = Date.now();
		return api.get(`${urlPath}`, { params });
	},
	getOne(id) {
		return api.get(`${urlPath}/${id}`, { params: { t: Date.now() } });
	},
	create(req) {
		return api.post(`${urlPath}`, req);
	},
	update(req) {
		return api.update(`${urlPath}`, req);
	},
	delete(id) {
		return api.delete(`${urlPath}/${id}`);
	},
};

export default exports;
