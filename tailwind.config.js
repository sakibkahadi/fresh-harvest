/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ['Questrial', 'san-serif'],
        rubik: ['Rubic', 'san-serif']
      }

    },
  },
  plugins:[
    require('daisyui')
  ]
}

