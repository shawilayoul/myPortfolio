<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <nav>
      <Header />
    </nav>
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>

<style scoped></style>
