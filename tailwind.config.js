/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors:{
     blue: "#4a00e0",
     oranged:"#ff5400",
     white:"#ffffff",
     black:"#000",
     gray:"#e5e5e5",
     darkBlue:"#1d3557"
    },
    extend: {},
  },
  plugins: [],
}

