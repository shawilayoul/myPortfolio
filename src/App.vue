<script setup>

import SkillsView from './views/SkillsView.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'
import EducationView from './views/EducationView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
</script>

<template>
  <header>
    <nav>
      <Header />
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
</template>

<style scoped></style>
