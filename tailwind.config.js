/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'
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
      green: '#1bb38b',
      orange: '#ff8a66',
      brown: '#4C1D1D',
      beige: '#ffeee9',
      lightgreen: '#26FFC6',
      lightbrown: '#5e3434'

    },
    fontFamily: {
      sans: ['Verdana', 'sans-serif']
    },
    fontSize: {
      header: '2rem',
      date: '1.2rem',
      team: '1rem',
      time: '1.25rem',
      channel: '0.8rem'
    }
  },
  plugins: []
}
