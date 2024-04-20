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
  // profile
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  // update profile
  {
    path: '/profile/update',
    name: 'update-profile',
    component: () => import('../views/UpdateProfileView.vue')
  },
  // update user
  {
    path: '/user/update',
    name: 'user-update',
    component: () => import('../views/UserUpdateView.vue')
  },
  // alamat
  {
    path: '/alamat',
    name: 'alamat',
    component: () => import('../views/alamat/AlamatView.vue')
  },
  // create
  {
    path: '/alamat/create',
    name: 'alamat-create',
    component: () => import('../views/alamat/AlamatCreateView.vue')
  },
  // update
  {
    path: '/alamat/update/:id',
    name: 'alamat-update',
    component: () => import('../views/alamat/AlamatUpdateView.vue')
  },
  // about us
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // contact
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  // ngeresik
  {
    path: '/ngeresik',
    name: 'ngeresik',
    component: () => import('../views/NgeresikView.vue')
  },
  // sller by  id
  {
    path: '/seller/:id',
    name: 'seller',
    component: () => import('../views/SellerByIdView.vue')
  },
  //checkout
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
