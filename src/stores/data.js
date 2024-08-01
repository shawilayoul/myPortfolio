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
  "Hello! I'm Aochol, a passionate web development student at AFPA with a keen interest in creating dynamic and responsive websites. Currently pursuing a Bac+2 Degree,  in web and mobile development  with a focus on front-end and back-end development, I am eager to apply my knowledge and skills in a real-world setting through an internship opportunity.I have developed a strong foundation in web technologies such as HTML, CSS, JavaScript, and frameworks like React and Vue.js. I am also proficient in back-end development with Node.js and Express, and have experience working with databases like MongoDB and SQL. My coursework and projects have equipped me with a solid understanding of responsive design principles, user interface development, and web accessibility.In addition to my technical skills, I am a problem solver at heart and enjoy tackling challenges that require creative thinking and innovation. I am committed to continuous learning and staying up-to-date with the latest industry trends and best practices in web development.I am actively seeking an internship where I can contribute to exciting projects, collaborate with talented teams, and gain valuable hands-on experience. I am enthusiastic about the opportunity to further develop my skills and make a meaningful impact in the world of web development.Thank you for taking the time to learn more about me. I look forward to the possibility of contributing to your team and learning from experienced professionals in the field."
  })
})
