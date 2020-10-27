import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'guide',
            component: () => import('./views/guide.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('./views/index.vue'),
            redirect: '/index/home',
            children: [{
                    path: 'home',
                    name: 'home',
                    component: () => import('./subViews/home.vue')
                },
                {
                    path: 'timeMachine',
                    name: 'timeMachine',
                    component: () => import('./subViews/timeMachine.vue')
                },
                {
                    path: 'study',
                    name: 'study',
                    component: () => import('./subViews/study.vue')
                },
                {
                    path: 'entertainment',
                    name: 'entertainment',
                    component: () => import('./subViews/entertainment.vue')
                }
            ]
        }
    ]
})