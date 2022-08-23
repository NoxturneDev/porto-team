/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#1B2430',
        'semi-dark': '#38486A',
        'light' : '#E7E1E1',
        'semi-light': '#D9D9D9'
      }
    },
  },
  plugins: [],
}