<template>
	<div>
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
	components: {
		Header,
		Footer,
	},
	mounted() {},
	methods: {},
};
</script>

<style></style>
