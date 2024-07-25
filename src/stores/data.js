import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  // eslint-disable-next-line no-unused-labels
  state: () => ({
    personalInfo:[
      {
        name: 'John Doe',
        title: 'Software Engineer',
        Email: 'john.doe@example.com',
        Phone: '+123456789',
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
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Example',
        duration: '2014 - 2018'
      }
    ],
    skills: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Node.js'],
    projects: [
      {
        name: 'Project One',
        description: 'A web application for managing tasks.'
      },
      {
        name: 'Project Two',
        description: 'A mobile app for tracking fitness activities.'
      }
    ]
  })
})
