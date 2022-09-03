/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'clash': ['Clash Grotesk', 'sans-serif'],
        'cabinet': ['Clash Grotesk', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
        'generalsans': ['General Sans', 'sans - serif'],
      },
      colors: {
        'dark': '#1B2430',
        'semi-dark': '#38486A',
        'light': '#E7E1E1',
        'semi-light': '#D9D9D9'
      }
    },
  },
  plugins: [],
}