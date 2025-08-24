/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D47A1', // Deep Navy Blue
        accent: '#D50000', // Accent Red
        'dark-gray': '#333333', // Dark Gray
        'off-white': '#F8F9FA', // Cool Off-White
        'light-blue-gray': '#CFD8DC', // Light Blue-Gray
        'navbar-bg': '#263238',
      },
    },
  },
  plugins: [],
};
