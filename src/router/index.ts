import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocalDevView from '../views/LocalDevView.vue'
import LoginView from '../views/LoginView.vue'
import ForumView from '../views/ForumView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/dev',
            name: 'dev',
            component: LocalDevView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/forum',
            name: 'forum',
            component: ForumView
        }
    ]
})

export default router
