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
 
     AboutDescriptionData :
"Bonjour, je m'appelle Aochol Ayoul. Après avoir étudié l'informatique pendant trois ans au Comboni College de Khartoum (Soudan) entre 2017 et 2020, j’ai décidé de poursuivre ma passion pour l'informatique en France, en me spécialisant dans le développement Web Full-Stack. Diplômé d’une formation intensive à l’AFPA (Développeur Web & Mobile) Bac+2, j’ai également complété plusieurs programmes spécialisés, notamment en développement iOS avec Apple/Simplon et en création de sites WordPress.Je code quotidiennement avec des technologies modernes tels que React, Node.js,( NestJS, ExpressJS), Angular, Java/Spring Boot(en cours), ainsi que les bases de données MySQL et MongoDB et j'ai réalisé plusieurs projets en autonomie.Je suis actuellement à la recherche d’un contrat d’alternance en tant que Développeur Full-Stack, dans le cadre du Bachelor Concepteur Développeur d’Applications pour la rentrée septembre ( alternance 3 semaines entreprise / 1 semaine formation)."  })
})
