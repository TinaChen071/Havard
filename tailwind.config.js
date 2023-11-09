/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js","node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('flowbite/plugin'),
    // require('@tailwindcss/line-clamp'),
  ],
}

