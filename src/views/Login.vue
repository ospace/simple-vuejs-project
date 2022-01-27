<template>
	<div>
		<h1>로그인</h1>
		<div>
			<ul>
				<li>
					<label for="email">이메일</label>
					<input type="email" v-model="email" />
				</li>
				<li>
					<label for="password">비밀번호</label>
					<input type="password" v-model="password" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import auth from '@/api/auth';

export default {
	data() {
		return {
			email: 'user@naver.com',
			password: '0',
		};
	},
	methods: {
		async signIn() {
			this.$log.debug('signIn');

			try {
				await auth.login(this.email, this.password);
			} catch (ex) {
				return await this.$alert(`Error: ${ex.message}`);
			}

			this.$router.push({ name: 'home' });
		},
	},
};
</script>

<style scoped></style>
