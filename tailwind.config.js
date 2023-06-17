/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/admin/src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}