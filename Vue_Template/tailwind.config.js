/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'purge' or 'class'
  darkMode: 'class',
  theme: {
    fontFamily: {
      merriweather: ['Merriweather', 'serif'],
      oswald: ['Oswald', 'sans-serif'],
      robotoslab: ['Roboto Slab', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
      // Can configure your own fonts as per your requirement
      // This can be used as font-merriweather in your calss-name or CSS file
    },
    extend: {},
    screens: {
      xxl: '1200px',
      xl: '992px',
      lg: '840px',
      md: '768px',
      sm: '640px',
      ssm: '576px',
      vsm: '400px',
      vvsm: '330px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

