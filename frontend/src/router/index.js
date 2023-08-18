import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product', 
    component: () => import('../views/ProductView.vue')

  },
  {
    path: '/product',
    name: 'add products',
    component: () => import('../views/AddProductView.vue')
  },
  {
    path: '/product/:id', 
    name: 'edit products',
    component: () => import('../views/EditProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin', 
    component: () => import('../views/ProductAdminView.vue')
  },

  


  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
