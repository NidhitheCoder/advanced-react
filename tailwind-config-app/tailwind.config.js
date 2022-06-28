/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        tablet: '760px',
        desktop: '1248px',
    },
    colors: {
      white: '#FFFFFF',
      purple: '#3F3CBB',
      midnight: '#121063',
      metal: '#565584',
      'tahiti-blue': '#3AB7BF',
      'cool-white': '#ECEBFF',
      'bubble-gum': '#FF77E9',
      'copper-rust': '#77DCCA',
    },
    extend: {
    },
  },
  plugins: [],
}
