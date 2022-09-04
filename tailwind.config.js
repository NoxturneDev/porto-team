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
        'hazel-blue': {
          300: "#49C2F2",
          200: "#38D0F2",
          100: "#8DF2F2"
        },
        'hazel-brown': {
          100: "#BF702A",
          200: "#401708"
        },
        'nature-blue': {
          200: "#2FC1DA",
          100: "#ACEBF2"
        },
        'nature-green': {
          100: "#388C11",
          200: "#11592A"
        },
        'nature-yellow': "#C29836",
        'astro-dark': {
          100: "#282C76",
          200: "#1D161E"
        },
        'astro-purple': {
          100: "#A396CB",
          200: "#4C1C46",
          300: "#2B1D5A"
        }
      }
    },
  },
  plugins: [],
}