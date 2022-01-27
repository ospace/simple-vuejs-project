let Plugin = function(Vue, globalOptions = {}) {
	this.Vue = Vue;
	this.globalOptions = globalOptions;
};

Plugin.install = function(Vue, options) {
	function applyObj(ref) {
		if (!ref) return;
		Vue.prototype.$alert = ref.alert.bind(ref);
		Vue.prototype.$confirm = ref.confirm.bind(ref);
	}

	Object.defineProperties(Vue.prototype, {
		$dialog: {
			set(ref) {
				applyObj(ref);
			},
		},
	});

	Vue.prototype.$alert = function(msg) {
		return options.window.alert(msg);
	};
	Vue.prototype.$confirm = function(msg) {
		return options.window.confirm(msg);
	};
};

export default Plugin;
