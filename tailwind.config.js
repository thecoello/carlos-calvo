/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-grey-ligth':'#F9F9F9',
        'custom-grey-strong':'#F3F3F3'
      },
      borderColor: {
        'custom-grey-strong':'#F3F3F3'
      }
    },
  },
  plugins: [],
}