/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#d4d7ff',
        urgent: '#ffd9d4',
      },
    },
  },
  plugins: [],
};
