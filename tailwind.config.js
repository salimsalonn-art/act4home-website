/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // This makes Inter the default font for all text
        heading: ['Montserrat', 'sans-serif'], // This creates the special 'font-heading' class
      },
    },
  },
  plugins: [],
}