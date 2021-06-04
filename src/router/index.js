import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../pages/home/home.vue')
        },
        {
            path: '/timeMachine',
            name: 'timeMachine',
            component: () => import('../pages/timeMachine/timeMachine.vue')
        },
        {
            path: '/study',
            name: 'study',
            component: () => import('../pages/study/study.vue')
        },
        {
            path: '/entertainment',
            name: 'entertainment',
            component: () => import('../pages/entertainment/entertainment.vue')
        }

    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router