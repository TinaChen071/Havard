/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        'custom__primary': '#D9667B',
        'custom__secondary': '#FBEBED',
        'custom__orange--dark': '#E16736',
        'custom__orange--light': '#F9E0D3',
        'custom__blue--dark': '#4B7FE4',
        'custom__blue--light': '#DBE7F7',
        'custom__green--dark': '#9EC86A',
        'custom__green--light': '#EAF5E1',
        'custom__alert': '#D02424',
        'custom__tabBtn': '#2E3A59',
      },
      screens: {
        'xs': '480px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '4/5': '80%',
        '5/6': '83%',
        '6/5': '120%',
        '1/10': '10%',
        '1/20': '5%',
        '16.5': "4.05rem",
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
      rotate: {
        '360': '360deg',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
    fontFamily: {
      num:['Water Brush']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
  
}
