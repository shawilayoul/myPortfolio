<script setup>

/*gsap.registerPlugin(ScrollTrigger)

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
})*/
</script>
<template>
  <main
    class="w-[100%] flex justify-between transition delay-3000 duration-3000"
    id="home"
  
  >
    <div class="left ml-[10%] flex flex-col items-start justify-center gap-12">
      <div class="section">
        <h3 class="desktop:text-lg mobile:text-sm">HEY THERE!</h3>

        <h1 class="desktop:text-[40px] font-bold my-2 mobile:text-[20px]">I AM AOCHOL AYOUL</h1>

        <p class="desktop:text-[35px] mobile:text-[18px]">Junior web developer</p>
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
      <a href="#projects">
        <button class="hombtn text-white p-2 px-5 rounded-lg cursor-pointer">See My Work</button></a
      >
    </div>
    <div
      class="right flex items-center justify-center mobile:h-[70vh] desktop:h-[95vh] w-[40%] rounded-tl-[300%] rounded-bl-[100%]"
    >
      <div class="imgContainer">
        <img src="../assets/images/aocholProfile.png" alt="" class="img" />
      </div>
    </div>
  </main>
</template>
<style scoped>
.right {
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
    radial-gradient(160% 154% at 711px -303px, #2000ffff 0%, #073affff 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
}
.pi:hover{
transform: scale(1.5);
transition: all .5s ease-in-out;
}
.hombtn:hover {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, red);
  animation: slidebg 2s linear infinite;
}

@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>
