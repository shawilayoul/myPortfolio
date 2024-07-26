<script lang="ts" setup>
import { image } from '@/assets/images'
</script>

<template>
  <main class="flex items-center w-[80%] m-auto h-[100vh] gap-10 transition delay-3000 duration-3000 ">
    <div class="flex flex-col flex-1 gap-10 w-[100%]">
      <h2 class="text-[30px] font-bold">About Me</h2>
      <p>
        I Am Aochol Ayoul, 28 years old, I currently live in Lyon, France. Following a period of
        self-training(Udemy), followed by two training courses at Simplon, Lyon, I acquired
        essential skills in the domain of web development. To start a work-study training course as
        a Full-Stack developer, I am looking for a company that will allow me to put into practice
        all the lessons that will be given to me. My previous experiences and training have allowed
        me to develop essential qualities such as teamwork, a sense of rigour, patience and a strong
        taste for problem solving.
      </p>
      <div class="social flex gap-12">
        <i class="pi pi-github text-oranged" style="font-size: 2rem"></i>
        <i class="pi pi-linkedin text-blue" style="font-size: 2rem"></i>
        <i class="pi pi-instagram text-oranged" style="font-size: 2rem"></i>
        <i class="pi pi-twitter text-blue" style="font-size: 2rem"></i>
      </div>
      <button class="hombtn text-white p-2 px-5 rounded-lg cursor-pointer">Download CV</button>
    </div>
    <div class="imgContainer">
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
  background: #0575e6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #021b79, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #021b79, #0575e6);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
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
.content::after{
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


@keyframes animate-01{
  0%{
    rotate: 0deg;
  }
  100%{
    rotate:  360deg;
  }
}
@keyframes animate-02{
  100%{
    rotate: 0deg;
  }
  0%{
    rotate:  360deg;
  }
}

@keyframes fade-in{
 
  to{
    scale: 1;

  }
}

</style>
