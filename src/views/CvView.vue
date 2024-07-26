<script lang="ts" setup>
import { useDataStore } from '@/stores/data'
const store = useDataStore()
</script>

<template>
  <main class="flex  w-[70%]  m-auto border-2 rounded-lg">
    <div class="left w-[50%] bg-darkBlue flex flex-col items-center gap-4 p-2">
      <div class="items mt-8 flex flex-col gap-5">
        <div class="img bg-white w-[210px] h-[210px] rounded-full flex items-center justify-center">
          <img src="../assets/images/aocholProfile.png" alt="profile" class="w-[150px] h-[150px]" />
        </div>
        <div class="contact text-white flex flex-col gap-2">
          <p><i class="pi pi-phone mr-2"></i> 07 82 37 11 77</p>
          <p>
            <i class="pi pi-map-marker mr-2"></i>
            10 avenue du 8 mai 1945, <br />
            69200 Vénissieu
          </p>
          <p>
            <a href="https://github.com/shawilayoul"><i class="pi pi-github mr-2"></i> GitHub</a>
          </p>
          <p>
            <a href="https://shawilayoul.github.io/aocholprofile/"
              ><i class="pi pi-user mr-2"></i> Profile</a
            >
          </p>
          <p>
            <a href="https://www.linkedin.com/in/aochol-ayoul-mojowok-654a7121a/"
              ><i class="pi pi-linkedin mr-2"></i> LinkedIn</a
            >
          </p>
        </div>
        <div class="skills text-white">
          <h3 class="font-bold text-[20px]">COMPÉTENCES TECHNIQUES</h3>
          <div class="ml-8 flex flex-col mt-2 gap-2">
            <p v-for="skill in store.skills" :key="skill">
              {{ skill }}
            </p>
          </div>
        </div>
        <div class="softSkills text-white">
          <h3 class="font-bold text-[20px]">SAVOIR-ÉTRE</h3>
          <div class="ml-8 flex flex-col mt-2 gap-2">
            <p>Curieux</p>
            <p>Travail en équipe</p>
          </div>
        </div>
        <div class="langue text-white">
          <h3 class="font-bold text-[20px]">LANGUES</h3>
          <div class="ml-8 flex flex-col mt-2 gap-2">
            <p>Français</p>
            <p>Anglais</p>
            <p>Arabe</p>
          </div>
        </div>
        <div class="intrint text-white">
          <h3 class="font-bold text-[20px]">CENTRES D’INTÉRET</h3>
          <div class="ml-8 flex flex-col mt-2 gap-2">
            <p>Musique</p>
            <p>Vélo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right ml-10 mt-12 w-[100%] p-2">
      <div class="top flex flex-col items-center gap-2">
        <h2 class="font-bold text-[30px]">Aochol AYOUL MOJOWOK</h2>
        <h3 class="text-[20px]">APPRENANT DÉVELOPEUR WEB ET MOBILE</h3>
        <p>(à la recherche d’un stage de deux mois, Du 25/11/2024 au 07/02/2025 )</p>
      </div>
      <div class="bottom flex flex-col gap-5 mt-10">
        <div class="profile">
          <h3 class="font-bold text-[20px]">PROFIL</h3>
          <p>
            Actuellement je suis Apprenant Dévelopeur web et mobile chez AFPA, à la recherche d'un
            stage de deux mois afin d'approfondir mes compétences dans ce domaine passionnant.
            Motivé et curieux, je souhaite mettre en pratique mes connaissances acquises au cours de
            mes étude
          </p>
        </div>
        <div class="formation flex flex-col gap-3">
          <h3 class="font-bold text-[20px]">FORMATIONS ACADÉMIQUES</h3>
          <div class="blog" v-for="education in store.education" :key="education.id">
            <h4 class="font-bold">{{ education.title }}</h4>
            <p>{{ education.duration }}</p>
            <p>{{ education.description }}</p>
          </div>
        </div>
        <div class="experince">
          <h3 class="font-bold text-[20px]">EXPÉRIENCES PROFESSIONNELLES</h3>
          <p>Réceptionniste dans un hôtel, Assaha Hôtel, Soudan De 2016 à 2017</p>
          <p>Employé polyvalent dans un supermarché alimentaire, Al Hawi, Soudan De 2014 à 2015</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped></style>
