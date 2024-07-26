<script lang="ts" setup></script>

<template>
  <main class="w-[60%] m-auto h-[100vh] flex flex-col gap-10 justify-center">
    <div class="top">
      <h3 class="text-center text-[23px] font-bold">Get in touch</h3>
    </div>
    <div class="bottom flex gap-10 justify-between w-full">
      <div class="left border p-2 rounded w-[50%] flex flex-col gap-8 items-center">
        <h3 class="font-bold">Talk to me</h3>
        <div class="box flex flex-col gap-2 items-center border p-2 rounded w-[250px]">
          <i class="pi pi-envelope"></i>
          <p>aocholayoul9@gmail.com</p>
          <p>Email me</p>
        </div>
        <div class="box flex flex-col gap-2 items-center border p-2 rounded w-[250px]">
          <i class="pi pi-facebook"></i>
          <p>Facebook</p>
          <p>Write me</p>
        </div>
        <div class="box flex flex-col gap-2 items-center border p-2 rounded w-[250px]">
          <i class="pi pi-phone"></i>
          <p>+337 82 37 11 77</p>
          <p>Call me</p>
        </div>
      </div>
      <div class="right border p-2 rounded w-[50%] flex flex-col gap-8">
        <h3 class="font-bold text-center">Write me a message</h3>
        <form action="#" class="flex flex-col gap-6">
          <div class="textInput border p-1 rounded mb-2">
            <input type="text" placeholder="Enter your name" />
          </div>
          <div class="textInput border p-1 rounded mb-2">
            <input type="text" placeholder="Enter your Email" />
          </div>
          <div class="textInput border p-1 rounded mb-2">
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea
              class="border w-full"
              name=""
              id=""
              cols="100px"
              placeholder="Message"
            ></textarea>
          </div>
          <button class="bg-blue text-white p-1 rounded">Send message</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
