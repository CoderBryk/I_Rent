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
    },
    extend: {},
  },
  plugins: [],
}
