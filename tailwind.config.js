/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E17EC",
        secondary: "#D28531",
        tertiary: "#E0D5F6", 
        "custom-gray": "#BBBBBB"
      }
    },
  },
  plugins: [],
}