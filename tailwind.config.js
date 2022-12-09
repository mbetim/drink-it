/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#2541B2",
          light: "#3B5BD8",
          dark: "#0F2C8C",
          contrast: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
