/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      white: '#FFFFFF',
      gray: '#64748b',
      navy: '#678eb4',
      red: '#E30000',
      blue: '#E7EAF6'
    },
    fontFamily: {
      sans: ['Verdana', 'sans-serif']
    },
    fontSize: {
      header: '2rem',
      team: '1.1rem',
      time: '1.5rem',
      channel: '0.9rem'
    }
  },
  plugins: []
}
