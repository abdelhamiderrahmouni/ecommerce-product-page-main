const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ff7d1a',
        'accent': '#ffede0',
        'dark-blue': '#1d2025',
        'dark-gray-blue': '#68707d',
        'gray-blue': '#b6bcc8',
        'light-gray-blue': '#f7f8fd',
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
}

