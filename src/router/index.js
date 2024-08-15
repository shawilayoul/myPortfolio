import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
    }
  ]
})
router.beforeEach((to, from, next) => {
  AOS.init() // Initialize AOS
  next()
})

export default router
