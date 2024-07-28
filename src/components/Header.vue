<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'

const menus = [
  {
    title: 'Home',
    link: '#home'
  },
  {
    title: 'About',
    link: '#about'
  },

  {
    title: 'Skills',
    link: '#skill'
  },
  {
    title: 'Education',
    link: '#education'
  },
  {
    title: 'Projects',
    link: '#projects'
  },
  {
    title: 'Contact',
    link: '#contact'
  },
  {
    title: 'My CV',
    link: '#cv'
  }
]
</script>

<template>
  <header class="fixed flex h-[70px] justify-around items-center w-[100%] bg-white z-10">
    <RouterLink to="/"
      ><div class="logo font-bold text-[25px] hover:text-oranged text-blue mr-20">
        <h2><span class="text-oranged">A</span>ochol</h2>
      </div></RouterLink
    >
    <nav class="flex gap-6">
      <ul v-for="menu in menus" :key="menu" class="flex">
        <a :href="menu.link">
          <li class="flex font-bold text-lg hover:text-oranged">
            {{ menu.title }}
          </li>
        </a>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
li {
  display: block;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px 10px;
}
li:after,
li:before {
  content: '';
  position: absolute;
  display: block;
  border: 0px solid transparent;
}

li:after {
  width: 0%;
  height: 80%;
  border-top: 2px solid blue;
  border-bottom: 2px solid orangered;
  transition: all 0.3s ease;
}

li:before {
  width: 120%;
  height: 0%;
  border-left: 2px solid blue;
  border-right: 2px solid orangered;
  transition: all 0.5s ease;
}

li:hover::before {
  height: 80%;
}

li:hover::after {
  width: 120%;
}
/**logo style */
.logo {
  display: block;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px 10px;
}
.logo:after,
.logo:before {
  content: '';
  position: absolute;
  display: block;
  border: 0px solid transparent;
}

.logo:after {
  width: 0%;
  height: 80%;
  border-top: 2px solid blue;
  border-bottom: 2px solid orangered;
  transition: all 0.3s ease;
}

.logo:before {
  width: 120%;
  height: 0%;
  border-left: 2px solid blue;
  border-right: 2px solid orangered;
  transition: all 0.5s ease;
}

.logo:hover::before {
  height: 80%;
}

.logo:hover::after {
  width: 120%;
}
</style>
