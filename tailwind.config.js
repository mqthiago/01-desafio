/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray': {
        '100': '#F2F2F2',
        '200': '#D9D9D9',
        '300': '#808080',
        '400': '#333333',
        '500': '#262626',
        '600': '#1A1A1A',
        '700': '#0D0D0D',
      },
    },
    extend: {
      fontFamily: {
        'inter': ['serif'],
      },
      spacing: {
        '3500': '200rem',
        '200': '12.5rem',
        '638': '40rem',
        '90': '5.5rem',
        '52': '2.5rem',

      }
    },
  },
  plugins: [],
}