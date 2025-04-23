import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  // eslint-disable-next-line no-unused-labels
  state: () => ({
  
    education: [
      {
        id:1,
        title:'Stagiaire Développeur Full-Stack — HDM NETWORK',
        duration:' Nov 2024 - Fév 2025',
        description:'Développement d’applications avec React, NestJS, GraphQL, MySQL, Docker.Implémentation d’API REST & GraphQL optimisées.Collaboration en méthodologie Agile (Scrum).Résolution de bugs et amélioration des performances.'
      }
      ,
      {
        id: 2,
        title: 'Développeur web et web mobil, AFPA',
        duration: 'Du 15/04/2024 au 02/2025',
        description: 
        'Apprentssage des technologies React, Node.js, Express, MongoDB, MySQL, TypeScript, NestJs, GraphQL, Prisma, Docker.'
      },
      {
        id: 3,
        title: '  Programme de fondation Apple, Développement mobile iOS Simplon, Lyon',
        duration: 'Du 11/2023 au 12/2023',
        description:
          ' Acquérir des connaissance de l’UX design, les bases du langage de programmation Swift, la conception d’une interface d’application mobile, création d’une application iOS.'
      },
      {
        id: 4,
        title: 'Objectif Numérique (WordPress), Simplon, Lyon',
        duration: 'Du 05/2023 à 07/2023',
        description:
          'Acquérir la logique de programmation et langages HTML, CSS, utilisation d’un CMS(WordPress), conception d’une interface d’un site web et mobile, création d’un site web'
      },
  
      {
        id: 5,
        title:
          ' Licence de sciences en Informatique (enseignement en anglais), Comboni, Khartoum,Soudan',
        duration: 'De 2017 à 2020',
        description: 'Acquérir les bases du langage de programmation JavaScript, Java, c++ et SQL'
      },

    ],
  AboutDescriptionData :"Développeur Full-Stack passionné, diplômé d’une formation intensive AFPA (Bac+2) et ancien étudiant en informatique au Comboni College (Soudan). Spécialisé dans les technologies modernes comme React, Angular, Node.js (NestJS/ExpressJS), et Java/Spring Boot, je maîtrise également la conception d’APIs et les bases de données (MySQL/MongoDB).Autonome et rigoureux, j’ai consolidé mes compétences à travers des projets personnels et des formations ciblées (dont un programme iOS avec Apple/Simplon). Actuellement en recherche d’une alternance (3 semaines entreprise / 1 semaine formation) pour un Bachelor CDA à partir de septembre, je souhaite intégrer une équipe dynamique où contribuer avec ma double expertise front-end et back-end."
})});
