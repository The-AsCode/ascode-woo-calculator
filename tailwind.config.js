/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/admin/src/dashboard/js/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}