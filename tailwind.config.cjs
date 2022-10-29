/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sn: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors:{

			transparent: 'transparent',

      'black': '#000',
      'white': '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7CBA',
        200: '#C4C4C6',
        100: '#E1E1E6',
      },

      blue: {
        500: '#0094FF',
        300: '#3FADFD',
      },

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
