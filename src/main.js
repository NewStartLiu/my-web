import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/normal.css'
import { Button,Menu,MenuItem,Submenu,Icon } from 'element-ui'

Vue.config.productionTip = false
// element
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Icon)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
