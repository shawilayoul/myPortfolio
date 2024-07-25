<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
const menus = [
  
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: 'about'
  },

  {
    title: 'Skills',
    link: 'skills'
  },
  {
    title: 'Education',
    link: 'education'
  },
  {
    title: 'Projects',
    link: 'projects'
  },
  {
    title: 'Contact',
    link: 'contact'
  },{
    title: 'My CV',
    link: 'cv'
  }
]
</script>

<template>
  <header class="flex h-[70px] justify-around items-center w-[80%]">
    <RouterLink to="/"><div class="font-bold text-[30px] hover:text-oranged text-blue ">Aochol</div></RouterLink>
    <nav class="flex gap-6">
      <ul v-for="menu in menus" :key="menu" class="flex">
        <RouterLink :to="menu.link">
          <li class="flex font-bold text-lg hover:text-oranged">
            {{ menu.title }}
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="postcss" scoped></style>
