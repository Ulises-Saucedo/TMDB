import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/:id',
        name: 'movie',
        component: MovieView
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router