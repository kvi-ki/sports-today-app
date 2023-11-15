/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      orange: '#FF5420',
      navy: '#031933',
      gray: '#d9dfe5',
      //green: '#4faa92',
      lightbrown: '#BF9E93',
      orangetext: '#e64c1d'
    },
    fontFamily: {
      sans: ['Verdana', 'sans-serif']
    },
    fontSize: {
      header: '2rem',
      date: '1.2rem',
      team: '0.8rem',
      time: '1rem',
      channel: '0.6rem'
    }
  },
  plugins: []
}
