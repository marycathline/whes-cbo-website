/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        whessBlue: "#0D5EA6",
        whessGreen: "#43A047",
        whessBrown: "#6D4C41",
        whessBlack: "#212121",
      },
    },
  },
  plugins: [],
}
