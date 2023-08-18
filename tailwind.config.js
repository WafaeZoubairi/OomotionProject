/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Almarai': 'Almarai', // Use the same font name as defined in @font-face
      },
    },

  },
  plugins: [],
}