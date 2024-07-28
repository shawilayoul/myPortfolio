<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
const store = useDataStore()

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const scrollContainer = ref(null)

const handleScroll = () => {
  const title = scrollContainer.value.querySelector('.title ')
  const rect = title.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    gsap.fromTo(
      title,
      {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
      },
      {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        skewX: 0,
        scrollTrigger: title
      }
    )
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial call to animate sections on load.
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main
    class="w-[80%] m-auto flex items-center justify-center flex-col gap-5 z-1 h-[100vh]"
    ref="scrollContainer"
  >
    <div class="top">
      <h2 class="title font-bold text-[25px] mb-5">My Resume</h2>
    </div>
    <div class="bottom flex gap-10 w-full">
      <div class="left flex flex-col gap-2 w-[50%]">
        <div
          class="blog flex flex-col gap-2 p-4 shadow-lg shadow-cyan-500/50 rounded-lg"
          v-for="education in store.educationLeft"
          :key="education.id"
        >
          <h4 class="font-bold">{{ education.title }}</h4>
          <p>{{ education.duration }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>

      <div class="right flex flex-col gap-2 w-[50%]">
        <div
          class="blog flex flex-col gap-2 p-4 shadow-lg shadow-cyan-500/50 rounded-lg"
          v-for="education in store.educationRight"
          :key="education.id"
        >
          <h4 class="font-bold">{{ education.title }}</h4>
          <p>{{ education.duration }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.blog {
  background-size: 100% 100%;
  background-position:
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px,
    0px 0px;
  background-image: repeating-linear-gradient(315deg, #00ffff2e 92%, #073aff00 100%),
    repeating-radial-gradient(75% 75% at 238% 218%, #00ffff12 30%, #073aff14 39%),
    radial-gradient(99% 99% at 109% 2%, #00c9ffff 0%, #073aff00 100%),
    radial-gradient(99% 99% at 21% 78%, #7b00ffff 0%, #073aff00 100%),
    radial-gradient(160% 154% at 711px -303px, #2000ffff 0%, #073affff 100%);
  color: white;
  height: 160px;
  animation: float 4s ease-in-out infinite;
}
.blog:hover {
  background: white;
  cursor: pointer;
  color: black;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
