/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js","node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      colors: {
        custom: {
          darkBrown: '#3A3532',
          brown: '#806A58',
          beige: '#D6CDC6',
          gray: '#F1F1F1',
          line: '#06C655',
          YT: '#FF0000'
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '1/5': '20%',
        '4/5': '80%',
        '5/6': '83%',
        '6/5': '120%',
        '1/10': '10%',
        '1/20': '5%',
      },
      minHeight: {
        '1/2': '50%',
      },
      height: {
        'slider': '480px',
      },
      zIndex: {
        '100': '100',
      },
      backgroundSize: {
        '70%': '70%',
        '50%': '50%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('flowbite/plugin'),
    // require('@tailwindcss/line-clamp'),
  ],
}

