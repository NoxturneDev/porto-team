/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Grotesk", "sans-serif"],
        cabinet: ["Clash Grotesk", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        generalsans: ["General Sans", "sans-serif"],
      },
      colors: {
        "dark": {
          100: "#232323",
          200: "#282828",
          300: "#161616",
          400: "#111111"
        }, 
        "main": {
          100: "#DB0F97",
          200: "#C20C86",
          300: "#600040"
        },
        "font": {
          100: "#FFC9ED",
          200: "#C8C8C8",
          300: "#D0D0D0",
          400: "#1A1A1A"
        }
      },
    },
  },
  plugins: [],
};
