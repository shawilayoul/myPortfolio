<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {useToast} from 'vue-toast-notification';
import emailjs from '@emailjs/browser'

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

/** handling form*/
const emailForm = ref(null)

const toast = useToast()
const form = ref({
  subject: '',
  name: '',
  email: '',
  message: ''
})
const sendEmail = () => {
  // Prepare the data to match the template format
  emailjs
    .sendForm('service_hr64wgw', 'template_ezrie6k', emailForm.value, '-EzNfdVBkkap2_xNU')
    .then(
      () => {
        toast.success('Your  message has been sent successfully,thank you!',{position: 'top'})
  
      },
      (error) => {
        console.log('FAILED...', error.text)
      }
    );
        // Reset form fields
        form.value.subject = '';
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';

}
</script>

<template>
  <main class="desktop:w-[60%] mobile:w-[80%] m-auto  desktop:h-[100vh] flex flex-col desktop:gap-10 mobile:gap-5 justify-center">
    <div class="top">
      <h3 class="text-center text-[23px] font-bold">Get in touch</h3>
    </div>
    <div class="bottom desktop:flex-row gap-10 justify-between w-full mobile:flex flex-col mobile:gap-10">
      <div
        class="left bg-white shadow-lg shadow-gray p-2 rounded desktop:w-[50%] flex flex-col desktop:gap-8 items-center mobile:gap-4"
      >
        <h3 class="font-bold">Talk to me</h3>
        <div
          class="box flex flex-col desktop:gap-2 mobile:gap-1 items-center border p-2 rounded w-[250px] cursor-pointer"
        >
          <i class="pi pi-envelope text-oranged"></i>
          <p>aocholayoul9@gmail.com</p>
          <p>Email me</p>
        </div>
        <div
          class="box flex flex-col desktop:gap-2 mobile:gap-1  items-center border p-2 rounded w-[250px] cursor-pointer"
        >
          <i class="pi pi-facebook text-blue"></i>
          <p>Facebook</p>
          <p>Write me</p>
        </div>
        <div
          class="box flex flex-col desktop:gap-2 mobile:gap-1  items-center border p-2 rounded w-[250px] cursor-pointer"
        >
          <i class="pi pi-phone text-oranged"></i>
          <p>+337 82 37 11 77</p>
          <p>Call me</p>
        </div>
      </div>
      <div class="right bg-white shadow-lg shadow-gray p-2 rounded desktop:w-[50%] flex flex-col gap-8">
        <h3 class="font-bold text-center">Write me a message</h3>
        <form @submit.prevent="sendEmail" ref="emailForm" class="flex flex-col desktop:gap-6 mobile:gap-3">
          <div class="textInput border rounded desktop:mb-2">
            <input
              type="text"
              name="user_name"
              v-model="form.name"
              placeholder="Enter your name"
              class="w-full p-1"
              required
            />
          </div>
          <div class="textInput border rounded desktop:mb-2">
            <input
              type="text"
              name="user_email"
              v-model="form.email"
              required
              placeholder="Enter your Email"
              class="w-full p-1"
            />
          </div>
          <div class="textInput border rounded desktop:mb-2">
            <input
              type="text"
              name="user_subject"
              v-model="form.subject"
              required
              placeholder="Subject"
              class="w-full p-1"
            />
          </div>
          <div>
            <textarea
              class="border w-full h-[150px] p-1"
              name="message"
              v-model="form.message"
              id=""
              cols="100px"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button class="contactBtn text-white p-1 rounded" type="submit">Send message</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contactBtn {
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
.contactBtn:hover {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, red);
  animation: slidebg 2s linear infinite;
}
/***button animation */
@keyframes slidebg {
  to {
    background-position: 20vw;
  }
}
</style>
