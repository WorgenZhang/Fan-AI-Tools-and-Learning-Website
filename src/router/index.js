import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LearningResources from '../views/LearningResources.vue'
import ArticleDetail from '../components/ArticleDetail.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/learning-resources',
        name: 'LearningResources',
        component: LearningResources
    },
    {
        path: '/article/:id?',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

