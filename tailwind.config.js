module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(94.17deg, rgba(0, 0, 0, 0.88) 0.31%, rgba(0, 0, 0, 0) 98.07%),url('https://www.stevenstone.co.uk/website_steven_stone/static/src/images/home/chrismas.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
