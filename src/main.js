import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/normal.css'
import { Container,Header,Aside,Main,Button,Menu,MenuItem,Submenu,MenuItemGroup,Icon } from 'element-ui'

Vue.config.productionTip = false
// element
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Icon)

console.log(process.env)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
