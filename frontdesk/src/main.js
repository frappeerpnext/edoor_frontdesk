import { createApp, reactive } from 'vue'
import { FrappeUI, Button,SuccessMessage,ErrorMessage, Input, call } from 'frappe-ui'
import Chart from "vue-frappe-chart"
import { VFrappeChart } from "vue-frappe-chart"

import router from './router'
import App from './App.vue'
import Auth from "../../frontdesk/node_modules/frappe-ui/src/utils/auth";
import { createToast, clearToasts } from "@/utils/toasts"
import './index.css'

let app = createApp(App)
const auth = reactive(new Auth());

app.provide("$call",call)
app.provide("$auth", auth);

app.use(router)
app.use(FrappeUI)
app.use(Chart)

app.config.globalProperties.$toast = createToast
app.config.globalProperties.$clearToasts = clearToasts

app.component('Button', Button)
	.component('SuccessMessage',SuccessMessage)
	.component('ErrorMessage',ErrorMessage)
	.component('Input',Input)
	.component('VFrappeChart',VFrappeChart)

// Configure route gaurds
router.beforeEach(async (to, from, next) => {
	if (to.matched.some((record) => !record.meta.isLoginPage)) {
		if (!auth.isLoggedIn) {
			next({ name: 'Login', query: { route: to.path } });
		} else {
			next();
		}
	} else {
		if (auth.isLoggedIn) {
			next({ name: 'Home' });
		} else {
			next();
		}
	}
});

app.mount('#app')
