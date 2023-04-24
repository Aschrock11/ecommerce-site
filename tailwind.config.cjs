/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mdlg: '935px',
      },
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
