import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BookRecommendations from '../views/BookRecommendations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/book-recommendations',
      name: 'BookRecommendations',
      component: BookRecommendations,
    }
  ],
})

export default router
