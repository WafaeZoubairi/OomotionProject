/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'almarai': ['Almarai-Regular', 'sans-serif'],
        'almarai-bold': ['Almarai-Bold', 'sans-serif'],
        'myriad-pro': ['MyriadPro-Regular', 'sans-serif'],
      },
    },

  },
  plugins: [],
}