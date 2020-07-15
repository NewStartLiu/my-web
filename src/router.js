import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: ()=>import('../src/views/index.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: ()=>import('../src/views/home.vue')
        }
    ]
})