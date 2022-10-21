import { createApp, reactive } from 'vue'
import { FrappeUI, Button, call } from 'frappe-ui'

import router from './router'
import App from './App.vue'
import Auth from "../../frontdesk/node_modules/frappe-ui/src/utils/auth";
import './index.css'

let app = createApp(App)
const auth = reactive(new Auth());

app.provide("$call",call)
app.provide("$auth", auth);

app.use(router)
app.use(FrappeUI)

app.component('Button', Button)


// Configure route gaurds
router.beforeEach(async (to, from, next) => {
    if (!auth.isLoggedIn) {
        next({ name: 'Login', query: { route: to.path } });
    }
    
	// if (to.matched.some((record) => !record.meta.isLoginPage)) {
	// 	if (!auth.isLoggedIn) {
	// 		next({ name: 'Login', query: { route: to.path } });
	// 	} else {
	// 		next();
	// 	}
	// } else {
	// 	if (auth.isLoggedIn) {
	// 		next({ name: 'Home' });
	// 	} else {
	// 		next();
	// 	}
	// }
});

app.mount('#app')
