import { createRouter, createWebHistory } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
    
  ]
})

export default router
