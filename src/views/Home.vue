<template>
	<div>
		<h1>Home</h1>
		<h2 class="title">Axios API Test</h2>
		<p>Test API요청 Data(axios)</p>
		<p>{{ apiData }}</p>
	</div>
</template>

<script>
import sample from '@/api/sample';

export default {
	data() {
		return {
			apiData: '',
		};
	},
	created() {
		this.test();
		this.$log.debug('log');
	},
	methods: {
		join(target) {
			target === 'user' ? this.$router.push({ name: 'user' }) : this.$router.push({ name: 'master' });
		},
		async test() {
			const test = await sample.todos();
			this.apiData = test.data;
		},
		lang(value) {
			this.$i18n.locale = value;
		},
	},
};
</script>

<style scoped>
ul,
li {
	list-style: none;
}
.title {
	border-bottom: 1px solid black;
	margin-top: 50px;
}
</style>
