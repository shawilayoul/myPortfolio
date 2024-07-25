import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Education from '@/views/EducationView.vue' 
import Projects from '@/components/Projects.vue'
import Skills from '@/views/SkillsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import CvView from '@/views/CvView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  
    {
      path: '/cv',
      name: 'cv',
      component: CvView
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
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
