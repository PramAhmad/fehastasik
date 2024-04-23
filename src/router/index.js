import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView

  },
  // all product
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
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
  // profile review
  {
    path: '/profile/review',
    name: 'profile-review',
    component: () => import('../views/ProfileReviewView.vue')
  },
  // account setting
  {
    path: '/profile/account',
    name: 'account-setting',
    component: () => import('../views/AccountSettingView.vue')
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
  // ngeresik
  {
    path: '/ngeresik',
    name: 'ngeresik',
    component: () => import('../views/NgeresikView.vue')
  },
  // my order
  {
    path: '/my-order',
    name: 'my-order',
    component: () => import('../views/MyOrderView.vue')


  },

];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
