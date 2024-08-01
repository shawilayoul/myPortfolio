<script setup>
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
  <main class="" ref="scrollContainer">
    <div
      class="projectContainer desktop:h-[100vh] desktop:w-[100%] mobile:w-[80%] m-auto flex flex-col justify-center gap-10 mobile:mb-10"
    >
      <div class="title">
        <h2 class="title font-bold desktop:text-[25px] text-center mobile:text-[20px]">
          My projects
        </h2>
      </div>
      <div
        class="imgCon desktop:flex desktop:flex-row items-center desktop:gap-0 mobile:flex mobile:flex-col gap-10"
      >
        <div class="container">
          <div
            class="top flex text-white font-bold justify-between items-center mt-3 cursor-pointer"
          >
            <a href="https://github.com/shawilayoul/cakeart" class="hover:text-oranged"
              >github Code</a
            >
            <a href=" https://cakeart.vercel.app/" class="hover:text-oranged">webSite</a>
          </div>
          <div class="laptop">
            <div class="laptop__screen">
              <img src="../assets/images/cakeHom.png" width="1600" alt="Screen" />
            </div>
            <div class="laptop__bottom">
              <div class="laptop__under"></div>
            </div>
            <div class="laptop__shadow"></div>
          </div>
        </div>
        <div class="container">
          <div
            class="top flex text-white font-bold justify-between items-center mt-3 cursor-pointer"
          >
            <a href="#" class="hover:text-oranged">github Code</a>
            <a
              href="https://wordpress.simplon-ara.fr/lyon/objnum23/wordpress11/"
              class="hover:text-oranged"
              >webSite</a
            >
          </div>
          <div class="laptop">
            <div class="laptop__screen">
              <img
                src="../assets/images/sliverspoonhome.png"
                width="1600"
                height="1000"
                alt="Screen"
              />
            </div>
            <div class="laptop__bottom">
              <div class="laptop__under"></div>
            </div>
            <div class="laptop__shadow"></div>
          </div>
        </div>
        <div class="container">
          <div
            class="top flex text-white font-bold justify-between items-center mt-3 cursor-pointer"
          >
            <a href="https://github.com/shawilayoul/NikeAire" class="hover:text-oranged"
              >github Code</a
            >
            <a href="https://shawilayoul.github.io/NikeAire/" class="hover:text-oranged">webSite</a>
          </div>
          <div class="laptop">
            <div class="laptop__screen">
              <img src="../assets/images/air.png" width="1600" height="1000" alt="Screen" />
            </div>
            <div class="laptop__bottom">
              <div class="laptop__under"></div>
            </div>
            <div class="laptop__shadow"></div>
          </div>
        </div>
      </div>
      <div class="mobil-ipad  desktop:block mobile:hidden !important">
        <div class="ipad">
          <div class="screen">
            <img src="../assets/images/cakeHom.png" alt="Image inside iPad" class="ipad-image" />
          </div>
        </div>
        <div class="ipad2">
          <div class="screen">
            <img
              src="../assets/images/sliverspoonhome.png"
              alt="Image inside iPad"
              class="ipad-image"
            />
          </div>
        </div>
        <div class="ipad3">
          <div class="screen">
            <img src="../assets/images/air.png" alt="Image inside iPad" class="ipad-image" />
          </div>
        </div>
        <div class="phone1">
          <div class="screen">
            <img src="../assets/images/cakeHom.png" alt="Image inside iPad" class="ipad-image" />
          </div>
        </div>
        <div class="phone2">
          <div class="screen">
            <img
              src="../assets/images/sliverspoonhome.png"
              alt="Image inside iPad"
              class="ipad-image"
            />
          </div>
        </div>
        <div class="phone3">
          <div class="screen">
            <img src="../assets/images/air.png" alt="Image inside iPad" class="ipad-image" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<!---laptop style-->
<style scoped>
.container {
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
  height: 400px;
  border-radius: 8px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
}
.container:hover {
  cursor: pointer;
}
.laptop {
  position: relative;
  margin: auto;
  max-width: 23rem;
  .laptop__screen {
    position: relative;
    z-index: 1;
    padding: 3%;
    border-radius: 0.5rem;
    background: #ecf1f7;
    background-image: linear-gradient(to bottom, #333, #111);
    box-shadow: 0 0.1rem 0 #cfcfcf;
    border: 2px solid #ccc;
    height: 250px;
    img {
      display: block;
      max-width: 100%;
      height: 100%;
      aspect-ratio: attr(width) / attr(height);
      background: #000;
    }
  }

  .laptop__bottom {
    position: relative;
    z-index: 1;
    margin-right: -7%;
    margin-left: -7%;
    height: 0.7rem;
    background: #e9eff5;
    background-image: linear-gradient(
      to right,
      #d2dde9 0%,
      #f9fcff 15%,
      #e5ebf2 40%,
      #e5ebf2 60%,
      #f9fcff 85%,
      #d2dde9 100%
    );

    &::before {
      display: block;
      margin: 0 auto;
      width: 20%;
      height: 0.7rem;
      border-radius: 0 0 0.2rem 0.2rem;
      background: #f6f9fc;
      background-image: linear-gradient(
        to right,
        #c3cfdb 0%,
        #f6f9fc 10%,
        #f6f9fc 90%,
        #c3cfdb 100%
      );
      content: ' ';
    }
  }

  .laptop__under {
    position: absolute;
    top: 100%;
    left: 25%;
    display: block;
    width: 50%;
    height: 1.5rem;
    background: #e2e8f0;
    background-image: linear-gradient(to bottom, #e2e8f0, #bec7d1);

    &::after,
    &::before {
      position: absolute;
      top: 0%;
      right: 100%;
      bottom: 0;
      display: block;
      width: 50%;
      border-bottom-left-radius: 100%;
      background: inherit;
      content: ' ';
    }

    &::after {
      right: auto;
      left: 100%;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 0;
    }
  }

  .laptop__shadow {
    position: absolute;
    right: -10%;
    bottom: -2.5rem;
    left: -10%;
    z-index: 0;
    height: 2rem;
    background: radial-gradient(ellipse closest-side, #000, transparent);
    opacity: 0.5;
  }
}
</style>
<!---ip dad styling-->
<style scoped>
/* iPad shape */
.projectContainer {
  position: relative;
}
.ipad {
  left: 22%;
  top: 46%;
  width: 160px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  background-color: #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.ipad2 {
  left: 56%;
  top: 46%;
  width: 160px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  background-color: #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
/***ipda3 style */
.ipad3 {
  right: 1%;
  top: 46%;
  width: 160px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  background-color: #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
/***phone 1 style */
.phone1 {
  left: 2%;
  top: 48%;
  width: 80px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  background-color: lightgray;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
/***phone 2 style */
.phone2 {
  left: 35%;
  top: 48%;
  width: 80px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  background-color: lightgray;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
/***phone 3 style */
.phone3 {
  right: 26%;
  top: 48%;
  width: 80px; /* Adjust width as needed */
  height: 150px; /* Adjust height as needed */
  background-color: lightgray;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
/* Screen inside the iPad */
.screen {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image inside the iPad */
.ipad-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire area */
}
</style>
