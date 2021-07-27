import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/login.vue'
import Cart from '../components/Cart.vue'
import Details from '../components/Details.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Details',
    name: 'Details',
    component: Details
  }
 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router