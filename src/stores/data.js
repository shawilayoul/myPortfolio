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
"Après avoir terminé ma formation DWWM (Bac +2), j’ai effectué un stage de 2 mois au sein de l'entreprise HDM. Cette expérience m’a permis de renforcer mes compétences en développement web et d'acquérir une expertise dans des technologies telles que JavaScript, TypeScript, React, React Native, Node.js, NestJS, GraphQL, Prisma et Docker. Cela m’a permis de consolider mes connaissances techniques et d'approfondir ma passion pour le développement d’applications web dynamiques.Je suis actuellement à la recherche d'un contrat en alternance afin de poursuivre ma formation en tant que développeur web. Je souhaite mettre en pratique les compétences que j'ai acquises dans un environnement professionnel, collaborer avec des experts et contribuer à des projets significatifs qui m'aideront à progresser et perfectionner mes capacités. Je suis enthousiaste à l'idée de continuer à apprendre et d'apporter ma créativité et mes compétences en résolution de problèmes à l'industrie technologique."  })
})
