/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // adjust for your project
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
        colors: {
            primary: '#4e5e9c',
            secondary: '#5d72ae',
            accent: '#c6668f',
            highlight: '#da8ab3',
            darker: '#1a1a1a',
        },

        dark:{
            background:"#1a1a1a",
        }
    },
  },
  plugins: [],
}
