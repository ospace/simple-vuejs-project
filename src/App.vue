<template>
	<div id="app">
		<router-view></router-view>
		<label class="version"> v {{ version }} </label>
		<div class="layerPop" v-show="$store.state.spinner">
			<div class="spinner"></div>
		</div>
	</div>
</template>

<script>
import { version } from '../package';

export default {
	data: function() {
		return {
			isConfirm: false,
			isAlert: false,
			message: '',
			dialogResolve: null,
			idx: 0,
			step: 0,
		};
	},
	computed: {
		version() {
			return version;
		},
	},
	created() {
		if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
			return this.$router.push({ name: 'notBrowser' });
		}
		// this.$dialog = this;
	},
	methods: {
		confirm(message) {
			if (this.isConfirm) return Promise.reject();
			if (this.dialogResolve) return Promise.reject();
			let self = this;
			this.message = message || '';
			this.message = this.message.replace(/\r\n/g, '<br/>');
			this.isConfirm = true;
			return new Promise(function(resolve) {
				self.dialogResolve = resolve;
			});
		},
		alert(message) {
			if (this.isAlert) return Promise.reject();
			if (this.dialogResolve) return Promise.reject();
			let self = this;
			this.message = message || '';
			this.message = this.message.replace(/\r\n/g, '<br/>');
			this.isAlert = true;
			return new Promise(function(resolve) {
				self.dialogResolve = resolve;
			});
		},
		onClose(value) {
			this.isConfirm = false;
			this.isAlert = false;
			if (undefined === value) {
				this.dialogResolve();
			} else {
				this.dialogResolve(value);
			}
			this.dialogResolve = null;
		},
	},
};
</script>

<style scoped>
.layerPopup {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	z-index: 1000;
	justify-content: center;
	align-items: center;
}
.spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	border: 8px solid #f3f3f3; /* Light grey */
	border-top: 8px solid #3498db; /* Blue */
	border-radius: 50%;
	width: 60px;
	height: 60px;
	animation: spinner 2s linear infinite;
}
@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.version {
	font-size: 9px;
	color: lightgray;
	position: absolute;
	right: 20px;
	bottom: 5px;
	z-index: 10;
}
</style>
