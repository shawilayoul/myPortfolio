import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
  // eslint-disable-next-line no-unused-labels
  state: () => ({
    personalInfo: [
      {
        name: 'John Doe',
        title: 'Software Engineer',
        Email: 'john.doe@example.com',
        Phone: '07 82 37 11 77',
        Address: ' 1234 Main St, Anytown, USA'
      }
    ],
    jobs: [
      {
        title: 'Software Engineer',
        company: 'Tech Company',
        duration: 'Jan 2020 - Present',
        description: 'Developed various web applications using modern frameworks.'
      },
      {
        title: 'Junior Developer',
        company: 'Another Tech Company',
        duration: 'Jan 2018 - Dec 2019',
        description: 'Assisted in developing web applications and maintaining existing codebases.'
      }
    ],
    education: [
      {
        id: 1,
        title: 'Développeur web et web mobil, AFPA',
        duration: 'Du 15/04/2024 au 02/2025',
        description: ''
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
        description: ''
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
        duration: 'De 2018 à 2020',
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
  "Bonjour ! Je suis Aochol, un étudiant passionné en développement web à l'AFPA avec un vif intérêt pour la création de sites Web dynamiques et réactifs. Actuellement en cours de licence Bac+2, en développement web et mobile avec une spécialisation en développement front-end et back-end, je suis impatient d'appliquer mes connaissances et mes compétences dans un environnement réel grâce à une opportunité de stage. J'ai développé une base solide dans les technologies web telles que HTML, CSS, JavaScript et des frameworks comme React et Vue.js. Je maîtrise également le développement back-end avec Node.js et Express, et j'ai de l'expérience dans le travail avec des bases de données comme MongoDB et SQL. Mes cours et mes projets m'ont permis d'acquérir une solide compréhension des principes de conception réactive, du développement d'interfaces utilisateur et de l'accessibilité Web. En plus de mes compétences techniques, je suis un résolveur de problèmes dans l'âme et j'aime relever des défis qui nécessitent une réflexion créative et de l'innovation. Je m'engage à apprendre continuellement et à me tenir au courant des dernières tendances de l'industrie et des meilleures pratiques en matière de développement web. Je recherche activement un stage où je pourrai contribuer à des projets passionnants, collaborer avec des équipes talentueuses et acquérir une précieuse expérience pratique. Je suis enthousiaste à l'idée de pouvoir développer davantage mes compétences et d'avoir un impact significatif dans le monde du développement Web. Merci d'avoir pris le temps d'en savoir plus sur moi. J'attends avec impatience la possibilité de contribuer à votre équipe et d'apprendre auprès de professionnels expérimentés dans le domaine."
  })
})
