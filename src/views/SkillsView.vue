<!-- eslint-disable vue/multi-word-component-names -->
<script></script>

<template>
  <main
    class="w-[80%] m-auto desktop:h-[100vh] flex flex-col items-center justify-center gap-6 mt-2 transition delay-3000 duration-3000 mb-10 mobile:mb-28"
  >
    <div class="top flex flex-col items-center" data-aos="fade-up" data-aos-duration="2500">
      <h2 class="font-bold desktop:text-[25px] mobile:text-[20px]">Compétences</h2>
      <p class="text-[20px] mobile:text-[16px]">Mes compétences techniques</p>
    </div>
    <div class="bottom w-[100%] desktop:flex justify-between gap-12 items-center">
      <div class="left desktop:w-[50%]">
        <h3 class="font-bold mb-4 text-[20px]" data-aos="fade-up" data-aos-duration="2500">
          Front-end
        </h3>
        <div class="skills mb-4">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>HTML</p>
            <p>95%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[95%] bg-oranged h-3 rounded-full"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>CSS (sass,tailwind, style component)</p>
            <p>90%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[90%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>javascript</p>
            <p>85%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[85%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>ReactJs</p>
            <p>80%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[80%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>VueJs</p>
            <p>60%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[60%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between desktop:mb-2 mobile:mb-1">
            <p>WordPress</p>
            <p>70%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[70%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
      </div>
      <div class="right desktop:w-[50%]">
        <h3 class="font-bold mb-4 text-[20px]" data-aos="fade-up" data-aos-duration="2500">
          Back-end
        </h3>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>PHP</p>
            <p>65%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[65%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>Symfony</p>
            <p>60%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[60%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>MYSQL</p>
            <p>70%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[70%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>NodeJs</p>
            <p>80%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[80%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>Express</p>
            <p>75%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[75%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
        <div class="skills mb-5">
          <div class="flex justify-between mb-2">
            <p>SQL</p>
            <p>70%</p>
          </div>
          <div class="section item w-[100%] bg-gray rounded-full">
            <div class="line w-[70%] bg-oranged h-3 rounded-full" ref="animatedSection"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
