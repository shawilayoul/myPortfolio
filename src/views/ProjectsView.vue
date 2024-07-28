<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { image } from '@/assets/images'

const slides = [
  {
    id: 1,
    title: 'The hidden gems in fashion trends',
    description:
      'Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.',
    imageLeft: image.figma,
    imageRight: image.git
  },

  {
    id: 4,
    title: 'The hidden gems in fashion trends',
    description:
      'Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.',
    imageLeft: image.javascript,
    imageRight: image.react
  },
  {
    id: 5,
    title: 'The hidden gems in fashion trends',
    description:
      'Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.',
    imageLeft: image.redux,
    imageRight: image.sass
  }
]

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center'
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start'
  }
}
</script>

<template>
  <!--slide -->
  <div
    class="bg-homeBg flex flex-col justify-center p-2 relative w-[95%] h-[70vh] items-center m-auto mt-3 mb-4"
  >
    <Carousel :wrap-around="true" :breakpoints="breakpoints">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="slide w-full h-[80vh] flex justify-between items-center">
          <img :src="slide.imageLeft" class="h-96 w-[200px]" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
