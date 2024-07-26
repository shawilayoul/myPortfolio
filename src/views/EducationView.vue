<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
const store = useDataStore()
</script>

<template>
  <main class="w-[80%] m-auto flex items-center justify-center flex-col gap-5 z-1 h-[100vh]">
    <div class="top">
      <h2 class="font-bold text-[20px]">My Resume</h2>
    </div>
    <div class="bottom flex gap-10 w-full">
      <div class="left flex flex-col gap-2 w-[50%]  ">
        <div
          class="blog flex flex-col gap-2 p-2 bg-white shadow-lg shadow-cyan-500/50 border rounded"
          v-for="education in store.educationLeft"
          :key="education.id"
        >
          <h4 class="font-bold">{{ education.title }}</h4>
          <p>{{ education.duration }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>

      <div class="right flex flex-col gap-2 w-[50%] ">
        <div
          class="blog flex flex-col gap-2 p-2 bg-white shadow-lg shadow-cyan-500/50 border rounded"
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

<style lang="postcss" scoped></style>
