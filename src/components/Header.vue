<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const props = defineProps(['toggleDarkMode', 'isDarkMode'])

const showNavBar = ref(false)

const toggleMenu = () => {
  showNavBar.value = !showNavBar.value
}
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
  }
]
</script>

<template>
  <header
    class="fixed flex h-[70px] justify-evenly items-center w-[100vw] desktop:w-[100%] bg-white z-10 dark:text-black"
  >
    <nav
      class="relative flex h-[70px] w-[100vw] items-center justify-evenly gap-28 desktop:w-[95%] bg-white z-10"
    >
      <a href="#home"
        ><div
          class="logo font-bold desktop:text-[25px] hover:text-oranged text-blue desktop:mr-20 mobile:mr-72 mobile:text-[20px]"
        >
          <h2><span class="text-oranged">A</span>ochol</h2>
        </div></a
      >
      <button
        @click="props.toggleDarkMode"
        :class="[props.isDarkMode ? 'pi pi-sun' : 'pi pi-moon']"
        class="absolute text-[22px] font-bold desktop:hidden"
      ></button>

      <div class="desktop:flex gap-6 mobile:hidden">
        <ul v-for="menu in menus" :key="menu" class="flex">
          <a :href="menu.link">
            <li class="list flex font-bold text-lg hover:text-oranged">
              {{ menu.title }}
            </li>
          </a>
        </ul>
      </div>
      <button
        @click="props.toggleDarkMode"
        :class="[props.isDarkMode ? 'pi pi-sun' : 'pi pi-moon'] "
        class="text-[22px] font-bold"
      ></button>
      <div
        v-if="showNavBar"
        class="mobile:flex absolute flex-col gap-5 py-2 px-4 mt-[350px] w-full bg-gray desktop:hidden"
      >
        <ul v-for="menu in menus" :key="menu">
          <a :href="menu.link">
            <li class="flex font-bold text-lg hover:text-oranged" @click="toggleMenu">
              {{ menu.title }}
            </li>
          </a>
        </ul>
      </div>
      
      <div>
        <i
          @click="toggleMenu"
          class="bar cursor-pointer desktop:hidden absolute"
          :class="[
            showNavBar
              ? 'pi pi-times mr-5 text-[30px] cursor-pointer '
              : 'pi pi-bars mr-5 text-[30px] cursor-pointer '
          ]"
        ></i>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  box-shadow: 0px 15px 10px -15px gray;
}
.list {
  display: block;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px 10px;
}
.list:after,
.list:before {
  content: '';
  position: absolute;
  display: block;
  border: 0px solid transparent;
}

.list:after {
  width: 0%;
  height: 80%;
  border-top: 2px solid blue;
  border-bottom: 2px solid orangered;
  transition: all 0.3s ease;
}

.list:before {
  width: 120%;
  height: 0%;
  border-left: 2px solid blue;
  border-right: 2px solid orangered;
  transition: all 0.5s ease;
}

.list:hover::before {
  height: 80%;
}

.list:hover::after {
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
.bar {
  top: 25%;
  position: absolute;
  right: 1%;
}

</style>
