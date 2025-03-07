<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
const store = useDataStore()
</script>

<template>
  <main class="w-[80%] m-auto desktop:h-[100vh] flex items-center justify-center flex-col gap-5 z-1 desktop:mb-[200px] mobile:mb-[60px]">
    <div class="top" data-aos="fade-up" data-aos-duration="2500">
      <h2 class="font-bold desktop:text-[25px] mobile:text-[20px]">Éducation</h2>
    </div>
    <div class="timeline">
      <div
        class="timeline-item"
        v-for="(education, index) in store.education"
        :key="education.id"
        :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div class="timeline-content">
          <h4 class="font-bold">{{ education.title }}</h4>
          <p class="text-sm text-gray-400">{{ education.duration }}</p>
          <p>{{ education.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: blue;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: white;
  border: 4px solid blue;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.right::after {
  left: -12px;
}

.timeline-content {
  padding: 20px 30px;
  background-color: white;
  border-radius: 6px;
  position: relative;
  border: 1px solid blue;
  color:black;
  animation: float 4s ease-in-out infinite;
}

.timeline-content:hover {
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

@media screen and (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }

  .timeline-item::after {
    left: 15px;
  }

  .timeline-item.right::after {
    left: 15px;
  }
}
</style>