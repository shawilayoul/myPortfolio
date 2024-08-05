<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
const store = useDataStore()


</script>

<template>
  <main
    class="w-[80%] m-auto desktop:h-[100vh] flex items-center justify-center flex-col gap-5 z-1 mb-10"
  >
    <div class="top">
      <h2 class="font-bold desktop:text-[25px] mobile:text-[20px]">My Resume</h2>
    </div>
    <div class="bottom desktop:flex gap-10 w-full mobile:gap-5">
      <div class="left flex flex-col gap-4 mb-5 desktop:w-[50%]">
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

      <div class="right flex flex-col gap-4 desktop:w-[50%]">
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
  animation: float 4s ease-in-out infinite;
}
.blog:hover {
  background: white;
  cursor: pointer;
  transition: all 2s ease-in-out;
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
