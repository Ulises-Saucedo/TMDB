import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/:id',
        name: 'movie',
        component: () => import(/* webpackChunkName: 'about' */ '../views/MovieView.vue')
    },
    {
        path: '/forbidden',
        name: 'forbidden',
        component: () => import(/* webpackChunkName: 'forbidden' */ '../views/ForbiddenView.vue')
    },
    { 
        path: '/:catchAll(.*)', 
        redirect: '/forbidden' 
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router