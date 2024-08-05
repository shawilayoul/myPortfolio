<script setup>
import './assets/main.css'
import { ref, onMounted } from 'vue'
import SkillsView from './views/SkillsView.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'
import EducationView from './views/EducationView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'

/**implemzenting dark mode */
const isDarkMode = ref(false)

onMounted(() => {
  const storedMode = localStorage.getItem('dark-mode')
  if (storedMode === 'true') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
/***toggling dark mode */
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('dark-mode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('dark-mode', 'false')
  }
}
</script>

<template>
  <div :class="{ dark: isDarkMode }">
    <div
      class="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300"
    >
      <header>
        <nav>
          <Header :toggleDarkMode="toggleDarkMode" :isDarkMode="isDarkMode" />
        </nav>
      </header>
      <div id="home"><HomeView /></div>
      <div id="about"><AboutView /></div>
      <div id="skill"><SkillsView /></div>
      <div id="education"><EducationView /></div>
      <div id="projects"><ProjectsView /></div>
      <div id="contact"><ContactView /></div>

      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
