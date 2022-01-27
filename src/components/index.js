import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context('./', false, /[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(function(filepath) {
	// 컴포넌트 로딩
	const componentConfig = requireComponent(filepath);
	const filename = filepath
		.split('/')
		.pop()
		.replace(/\.\w+$/, '');

	console.log('> filename:', filepath, filename);

	// 컴포넌트 이름을 파스칼표기법 변경
	const componentName = upperFirst(camelCase(filename));

	// 컴포넌트 등록
	Vue.component(componentName, componentConfig.default || componentConfig);
});
