import Vue from 'vue'
import VueRouter from 'vue-router'

import PhotoList from './pages/PhotoList.vue'
import PhotoDetail from './pages/PhotoDetail.vue'
import Login from './pages/Login.vue'
import SystemError from './pages/erros/System.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: PhotoList
    },
    {
        path: '/photos/:id',
        component: PhotoDetail,
        props: true
    },
    {
        path: '/login',
        component: Login,
        beforeEnter (to, from, next) {
            if (store.getters['auth/check']) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/500',
        component: SystemError
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router