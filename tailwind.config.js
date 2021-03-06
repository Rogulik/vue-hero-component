module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0891B2',
    }),
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(94.17deg, rgba(0, 0, 0, 0.88) 0.31%, rgba(0, 0, 0, 0) 98.07%)",
      },
      fontFamily: {
        senkron: ['Senkron', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        nunito: ['Nunito Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
