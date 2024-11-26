/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B6B4F', // brown
          light: '#A68B72',
          dark: '#6B4E35',
        },
        secondary: {
          DEFAULT: '#F5E6D3', // cream
          light: '#FFF9F2',
          dark: '#E6D1B8',
        },
      },
    },
  },
  plugins: [],
};