<script setup>
import { image } from '@/assets/images'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDataStore } from '@/stores/data'
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import cv from '../assets/images/AocholAyoulCv.pdf'
gsap.registerPlugin(ScrollTrigger)

const scrollContainer = ref(null)

/**tackling  about me section */

const store = useDataStore()
const showFullAboutMe = ref(false)
const truncatedAboutMe = computed(() => {
  let description = store.AboutDescriptionData 
  if (!showFullAboutMe.value) {
    description = store.AboutDescriptionData .substring(0, 790) + '...'
  }
  return description
})
/**toggling about me description */

const toggleDescription = () => {
  showFullAboutMe.value = !showFullAboutMe.value
}

const handleScroll = () => {
  const sections = scrollContainer.value.querySelectorAll('.section')
  const pSection = scrollContainer.value.querySelector('p')
  const imgContainer = scrollContainer.value.querySelector('.imgContainer')
  // animating image container
  const imgrect = imgContainer.getBoundingClientRect()
  if (imgrect.top < window.innerHeight && imgrect.bottom > 0) {
    gsap.fromTo(
      imgContainer,
      {
        opacity: 0,
        rotation: 350,
        scale: 0.2
      },
      {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: imgContainer
      }
    )
  }
  // animating p sections

  const rect = pSection.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    gsap.fromTo(
      pSection,
      {
        opacity: 0,
        x: 150,
        skewX: 30
      },
      {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: pSection
      }
    )
  }
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
    class="flex items-center w-[80%] m-auto desktop:h-[100vh] mb-10 gap-10 transition delay-3000 duration-3000"
  >
    <div class="flex flex-col flex-1 desktop:gap-5 w-[100%] mobile:gap-6">
      <h2 class="desktop:text-[30px] font-bold mobile:text-[20px]">About Me</h2>

      <div>
        <p>{{ truncatedAboutMe }}</p>
        <button
          @click="toggleDescription"
          class=" text-green p-1  rounded-lg cursor-pointer mt-1"
        >
          {{ showFullAboutMe ? 'show less' : 'show more' }}
        </button>
      </div>
      <div class="flex gap-12 cursor-pointer">
        <a href="https://github.com/shawilayoul">
          <i class="pi pi-github text-oranged desktop:text-[2rem] mobile:text-[1.5rem]"></i
        ></a>
        <a href="https://www.linkedin.com/in/aochol-ayoul-mojowok-654a7121a">
          <i class="pi pi-linkedin text-blue desktop:text-[2rem] mobile:text-[1.5rem]"></i
        ></a>
        <i class="pi pi-instagram text-oranged desktop:text-[2rem] mobile:text-[1.5rem]"></i>
        <i class="pi pi-twitter text-blue desktop:text-[2rem] mobile:text-[1.5rem]"></i>
      </div>
      <a download="" :href="cv">
        <button class="hombtn text-white p-2 px-5 rounded-lg cursor-pointer  mobile:text-[16px]">Download CV</button></a
      >
    </div>
    <div class="imgContainer desktop:block mobile:hidden">
      <div class="icon">
        <div class="imgbg" style="--i: 1">
          <img :src="image.html" alt="" />
        </div>
        <div class="imgbg" style="--i: 2">
          <img :src="image.sass" alt="" />
        </div>
        <div class="imgbg" style="--i: 3">
          <img :src="image.javascript" alt="" />
        </div>
        <div class="imgbg" style="--i: 4"><img :src="image.react" alt="" /></div>
        <div class="imgbg" style="--i: 5">
          <img :src="image.redux" alt="" />
        </div>
        <div class="imgbg" style="--i: 6"><img :src="image.node" alt="" /></div>
        <div class="imgbg" style="--i: 7"><img :src="image.git" alt="" /></div>
        <div class="imgbg" style="--i: 8">
          <img :src="image.figma" alt="" />
        </div>
      </div>
      <div class="content"></div>
    </div>
  </main>
</template>

<style scoped>
.hombtn {
  /*
  background: -webkit-linear-gradient(to right, #021b79, #0575e6); 
  background: linear-gradient(to right, #021b79, #0575e6);*/
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
}
.hombtn:hover {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, red);
  animation: slidebg 2s linear infinite;
}
/***button animation */
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
.imgContainer {
  position: relative;
  width: 400px;
  height: 400px;
  border: solid 2px gray;
  border-radius: 50%;
  animation: fade-in linear;
  animation-timeline: scroll();
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: solid 2px #023e8a;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}
.imgbg {
  position: absolute;
  width: 60px;
  left: -5%;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: solid 3px #023e8a;
  transform: rotate(calc(360deg / 8 * var(--i)));
  transform-origin: 215px;
  overflow: hidden;
}
.imgbg img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transform: rotate(calc(-360deg / 8 * var(--i)));
}
.content {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.content::before {
  position: absolute;
  content: '';
  inset: 60px;
  border: 4px solid transparent;
  border-left: 4px solid blue;
  border-right: 4px solid orangered;
  border-radius: 50%;
  z-index: 1;
  animation: animate-01 5s linear infinite;
}
.content::after {
  position: absolute;
  content: '';
  inset: 120px;
  border: 4px solid transparent;
  border-left: 4px solid orangered;
  border-right: 4px solid blue;
  border-radius: 50%;
  z-index: 1;
  animation: animate-02 5s linear infinite;
}

.pi:hover{
transform: scale(1.4);
transition: all .5s ease-in-out;
}

@keyframes animate-01 {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
@keyframes animate-02 {
  100% {
    rotate: 0deg;
  }
  0% {
    rotate: 360deg;
  }
}

@keyframes fade-in {
  to {
    scale: 1;
  }
}
</style>
