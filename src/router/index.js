import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue' // Create a DashboardLayout component
import DashboardView from '../views/DashboardView.vue'; // Import the DashboardView component
import SystemUserView from '../views/SystemUsers.vue'
import ProductView from '../views/ProductView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/system',
      name: 'system',
      component: SystemUserView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView, // Use the DashboardView component for the dashboard view
    },
    
   
  ]
})

export default router
