/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0DBAD2",
        text_primary: "#7E7D7D",
        text_bold: "#555454",
        tertiary: "#D20D0D"
      }
    },
  },
  plugins: [],
}