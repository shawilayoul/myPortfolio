<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const scrollContainer = ref(null)

const handleScroll = () => {
  const sections = scrollContainer.value.querySelectorAll('.section')
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      gsap.fromTo(
        section,
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
          scrollTrigger: section
        }
      )
    }
  })
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
    class="w-[100%] flex justify-between transition delay-3000 duration-3000"
    id="home"
    ref="scrollContainer"
  >
    <div class="left ml-[10%] flex flex-col items-start justify-center gap-12">
      <div class="section">
        <h3 class="text-lg">HEY THERE!</h3>

        <h1 class="text-[40px] font-bold my-2">I AM AOCHOL AYOUL</h1>

        <p class="text-[35px]">Junior web developer</p>
      </div>
      <div class="flex gap-12">
        <i class="pi pi-github text-oranged" style="font-size: 2rem"></i>
        <i class="pi pi-linkedin text-blue" style="font-size: 2rem"></i>
        <i class="pi pi-instagram text-oranged" style="font-size: 2rem"></i>
        <i class="pi pi-twitter text-blue" style="font-size: 2rem"></i>
      </div>
      <button class="hombtn text-white p-2 px-5 rounded-lg cursor-pointer">
        See My Work
      </button>
    </div>
    <div
      class="right flex items-center justify-center h-[95vh] w-[40%] rounded-tl-[300%] rounded-bl-[100%]"
    >
      <img src="../assets/images/aocholProfile.png" alt="" class="img" />
    </div>
  </main>
</template>
<style scoped>
.right {
  background: #8e2de2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4a00e0,
    #8e2de2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.img {
  animation: float 4s ease-in-out infinite;
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
.hombtn {
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #021b79, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #021b79, #0575e6);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
}
.hombtn:hover{
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, red);
  animation:slidebg 2s linear infinite;
}

@keyframes slidebg {
  to {
    background-position:20vw;
  }
}
</style>
