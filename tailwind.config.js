/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        text_primary: "var(--text_primary-color)",
        text_bold: "var(--text_bold-color)",
        tertiary: "var(--tertiary-color)",
      },
    },
  },
  plugins: [],
};
