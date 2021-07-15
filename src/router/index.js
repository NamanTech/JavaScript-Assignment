import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/login.vue'
import Cart from '../components/Cart.vue'
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
  }
 
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router