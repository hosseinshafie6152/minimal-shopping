/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'gray0.1' : 'rgba(0, 0, 0, 0.15)',
      'gray1' : 'rgba(0, 0, 0, 0.025)',
      'gray2' : 'rgba(0, 0, 0, 0.5)',
      'gray3' : 'rgba(0, 0, 0, 0.7)',
      'gray4' : 'rgba(0, 0, 0, 0.75)',
      'gary5' : 'rgba(255, 255, 255, 1)',
      'orange' : 'rgba(254, 138, 0, 1)',
      'pink' : 'rgba(246, 27, 90, 1)',
      'green' : 'rgba(139, 195, 74, 0.5)',
      'white' : '#fff'
    },
    fontSize:{
      'xl':'2.5rem',
      'l':'2rem',
      'm':'1rem',
      's':'0.875rem'
    },
    extend: {},
  },
  plugins: [],
}

