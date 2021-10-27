module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2F66B0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
