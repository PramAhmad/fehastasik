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
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
