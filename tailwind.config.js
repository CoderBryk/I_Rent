/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#10283F',
      searchbg: '#10283f59',
      orange: '#C34D0A',
      white: '#ffffff',
      f_orange: '#C80E0E',
      links: '#CEBDBD',
      form_bg: '#F4FBFF',
    },
    extend: {},
  },
  plugins: [],
}
