// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import OurWorkView from '@/views/OurWorkView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/nuestros_trabajos',
        name: 'OurWorkView',
        component: OurWorkView
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router