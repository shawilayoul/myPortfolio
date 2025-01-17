import { createRouter, createWebHistory } from 'vue-router'
import appAdsTxt from '@/views/app-ads-txt.vue' // Import the app-ads-txt component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Using history mode for clean URLs
  routes: [
    {
      path: '/app-ads.txt',
      name: 'app-ads-txt',
      component: appAdsTxt // Only the app-ads-txt route
    }
  ]
})

export default router
