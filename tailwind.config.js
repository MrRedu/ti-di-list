/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 'color-name': '#code',
      },
      rotate: {
        270: '270deg',
      },
      screens: {
        // mobile: '420px',
        // => @media (min-width: 420px) { ... }
      },
    },
  },
  plugins: [],
}
