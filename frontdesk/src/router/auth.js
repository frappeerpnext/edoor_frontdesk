export default [
    {
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "login" */ '../pages/Login.vue'),
		meta: {
			isLoginPage: true
		},
		props: true
	}
]
