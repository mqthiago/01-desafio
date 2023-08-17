/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter var', 'serif'],
      },
      spacing: {
        '3500': '200rem',
        '200': '12.5rem',
        '736': '46rem',
        '638': '40rem',
        '90': '5.5rem',
        '52': '2.5rem',

      }
    },
  },
  plugins: [],
}