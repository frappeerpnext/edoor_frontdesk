import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
  ...authRoutes,
]

let router = createRouter({
  history: createWebHistory('/frontdesk'),
  routes,
})

export default router
