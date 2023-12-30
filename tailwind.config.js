/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'c-softblue-100': '#75B0F1',

        'c-bluegray-600': '#444C63',

        'c-gray-400': '#393840',
        'c-gray-700': '#35343C',

        'c-template-gray-300': '#58575E',
        'c-template-gray-400': '#4D4C52',
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  plugins: [],
}
