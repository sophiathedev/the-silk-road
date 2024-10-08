const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'shades': {
          100: '#59BAB8',
          200: '#2D9493',
          300: '#00706F',
          400: '#004D4D',
          500: '#002D2E',
        },
        'spot': {
          'red': '#8B1B00',
          'light-shades': '#BFFCFA',
          'dark-shades': '#138483',
          'pink': {
            100: '#FFE4E5',
            200: '#FBAEB1',
            300: '#F55269',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin')
  ]
}
