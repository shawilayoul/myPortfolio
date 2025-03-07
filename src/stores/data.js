import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  // eslint-disable-next-line no-unused-labels
  state: () => ({
  
    education: [
      {
        id: 1,
        title: 'Développeur web et web mobil, AFPA',
        duration: 'Du 15/04/2024 au 02/2025',
        description: 
        'Apprentssage des technologies React, Node.js, Express, MongoDB, MySQL, TypeScript, NestJs, GraphQL, Prisma, Docker.'
      },
      {
        id: 2,
        title: '  Programme de fondation Apple, Développement mobile iOS Simplon, Lyon',
        duration: 'Du 11/2023 au 12/2023',
        description:
          ' Acquérir des connaissance de l’UX design, les bases du langage de programmation Swift, la conception d’une interface d’application mobile, création d’une application iOS.'
      },
      {
        id: 3,
        title: 'Objectif Numérique (WordPress), Simplon, Lyon',
        duration: 'Du 05/2023 à 07/2023',
        description:
          'Acquérir la logique de programmation et langages HTML, CSS, utilisation d’un CMS(WordPress), conception d’une interface d’un site web et mobile, création d’un site web'
      },
      {
        id: 4,
        title: 'Cours autodidactes sur Udemy ',
        duration: 'Du 2022-2024',
        description:
          '  Acquérir les langages de programmation JavaScript, du framework React , Redux et Tailwind CSS'
      },
      {
        id: 5,
        title:
          ' Licence de sciences en Informatique (enseignement en anglais), Comboni, Khartoum,Soudan',
        duration: 'De 2018 à 2020',
        description: 'Acquérir les bases du langage de programmation JavaScript, C++, PHP et SQL'
      },

      {
        id: 6,
        title: 'Diplôme de fin d’étude, Lycée, Renk, Khartoum, Soudan',
        duration: '2012',
        description: ''
      }
    ],
    educationLeft: [
      {
        id: 1,
        title: 'Développeur web et web mobil, AFPA',
        duration: 'Du 15/04/2024 au 02/2025',
        description: 
        'Apprentssage des technologies React, Node.js, Express, MongoDB, MySQL, TypeScript, NestJs, GraphQL, Prisma, Docker.'
      },
      {
        id: 2,
        title: '  Programme de fondation Apple, Développement mobile iOS Simplon, Lyon',
        duration: 'Du 11/2023 au 12/2023',
        description:
          ' Acquérir des connaissance de l’UX design, les bases du langage de programmation Swift, création d’une application iOS.'
      },
      {
        id: 3,
        title: 'Objectif Numérique (WordPress), Simplon, Lyon',
        duration: 'Du 05/2023 à 07/2023',
        description:
          'Acquérir la logique de programmation et langages HTML, CSS, utilisation d’un CMS(WordPress), conception d’une interface d’un site web et mobile, création d’un site web'
      },
     
    ],
    educationRight: [
     
      {
        id: 1,
        title: 'Cours autodidactes sur Udemy ',
        duration: 'Du 2022-2024',
        description:
          '  Acquérir les langages de programmation JavaScript, du framework React , Redux et Tailwind CSS'
      },
      {
        id: 2,
        title:
          ' Licence de sciences en Informatique (enseignement en anglais), Comboni, Khartoum,Soudan',
        duration: 'De 2017 à 2020',
        description: 'Acquérir les bases du langage de programmation JavaScript, C++, PHP et SQL'
      },

      {
        id: 3,
        title: 'Diplôme de fin d’étude, Lycée, Renk, Khartoum, Soudan',
        duration: '2012',
        description: ''
      }
    ],

    skills: [
      'HTML, CSS(Taiwaind, sass)',
      'JavaScript',
      'ReactJs',
      'Vue.js',
      'PHP',
      'Symfony',
      'MongoDb',
      'Node.js, Express',
      'MySQL SQL'
    ],
    projects: [
      {
        name: 'Project One',
        description: 'A web application for managing tasks.'
      },
      {
        name: 'Project Two',
        description: 'A mobile app for tracking fitness activities.'
      }
    ],
     AboutDescriptionData :
"Après avoir terminé ma formation DWWM (Bac +2), j’ai effectué un stage de 2 mois au sein de l'entreprise HDM. Cette expérience m’a permis de renforcer mes compétences en développement web et d'acquérir une expertise dans des technologies telles que JavaScript, TypeScript, React, React Native, Node.js, NestJS, GraphQL, Prisma et Docker. Cela m’a permis de consolider mes connaissances techniques et d'approfondir ma passion pour le développement d’applications web dynamiques.Je suis actuellement à la recherche d'un contrat en alternance afin de poursuivre ma formation en tant que développeur web. Je souhaite mettre en pratique les compétences que j'ai acquises dans un environnement professionnel, collaborer avec des experts et contribuer à des projets significatifs qui m'aideront à progresser et perfectionner mes capacités. Je suis enthousiaste à l'idée de continuer à apprendre et d'apporter ma créativité et mes compétences en résolution de problèmes à l'industrie technologique."  })
})
