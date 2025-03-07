<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const frontEndSkills = ref([
      { name: 'HTML', percentage: 95 },
      { name: 'CSS (Sass, Tailwind, Style Component)', percentage: 90 },
      { name: 'JavaScript / TypeScript', percentage: 85 },
      { name: 'ReactJs / React Native', percentage: 80 },
      { name: 'VueJs', percentage: 60 },
      { name: 'WordPress', percentage: 70 }
    ])

    const backEndSkills = ref([
      { name: 'NodeJs', percentage: 80 },
      { name: 'ExpressJs', percentage: 80 },
      { name: 'NestJs', percentage: 70 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'MySQL', percentage: 75 },
      { name: 'SQL', percentage: 70 }
    ])

    // Animate progress bars on mount
    onMounted(() => {
      const animateProgressBars = () => {
        frontEndSkills.value.forEach((skill, index) => {
          const progressBar = document.querySelector(`[ref="progressBar${index}"]`)
          if (progressBar) {
            progressBar.style.width = '0%'
            setTimeout(() => {
              progressBar.style.width = `${skill.percentage}%`
            }, 100)
          }
        })

        backEndSkills.value.forEach((skill, index) => {
          const progressBar = document.querySelector(
            `[ref="progressBar${index + frontEndSkills.value.length}"]`
          )
          if (progressBar) {
            progressBar.style.width = '0%'
            setTimeout(() => {
              progressBar.style.width = `${skill.percentage}%`
            }, 100)
          }
        })
      }

      animateProgressBars()
    })

    return {
      frontEndSkills,
      backEndSkills
    }
  }
}
</script>

<template>
  <main
    class="w-[80%] m-auto desktop:h-[100vh] flex flex-col items-center justify-center gap-6 mt-2 transition delay-3000 duration-3000 mb-10 mobile:mb-28"
  >
    <div class="top flex flex-col items-center" data-aos="fade-up" data-aos-duration="2500">
      <h2 class="font-bold desktop:text-[25px] mobile:text-[20px]">Compétences</h2>
      <p class="text-[20px] mobile:text-[16px]">Mes compétences techniques</p>
    </div>
    <div class="bottom w-[100%] desktop:flex justify-between gap-12 items-center">
      <!-- Front-end Skills -->
      <div class="left desktop:w-[50%]">
        <h3 class="font-bold mb-4 text-[20px]" data-aos="fade-up" data-aos-duration="2500">
          Front-end
        </h3>
        <div
          v-for="(skill, index) in frontEndSkills"
          :key="index"
          class="skills mb-5"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>{{ skill.name }}</p>
            <p>{{ skill.percentage }}%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div
              class="line h-3 rounded-full bg-oranged"
              :style="{ width: skill.percentage + '%' }"
              :ref="'progressBar' + index"
            ></div>
          </div>
        </div>
      </div>

      <!-- Back-end Skills -->
      <div class="right desktop:w-[50%]">
        <h3 class="font-bold mb-4 text-[20px]" data-aos="fade-up" data-aos-duration="2500">
          Back-end
        </h3>
        <div
          v-for="(skill, index) in backEndSkills"
          :key="index"
          class="skills mb-5"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="flex justify-between mb-2">
            <p>{{ skill.name }}</p>
            <p>{{ skill.percentage }}%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div
              class="line h-3 rounded-full bg-oranged"
              :style="{ width: skill.percentage + '%' }"
              :ref="'progressBar' + (index + frontEndSkills.length)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.skills {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skills:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.section {
  background-color: #e0e0e0;
  border-radius: 9999px;
  overflow: hidden;
}

.line {
  transition: width 1.5s ease-in-out;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
}

.item {
  position: relative;
}

.item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.item:hover::after {
  opacity: 1;
}

@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
