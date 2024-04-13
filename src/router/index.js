import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  //product detail
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductByIdView.vue')
  },
  //login
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  //register
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  // shop by category
  {
    path: '/category/:category',
    name: 'category',
    component: () => import('../views/CategoryView.vue')
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
