module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // gridTemplateRows: {
      //   10: 'repeat(10, minmax(0, 1fr))',
      // },
    },
  },
  plugins: [],
};
