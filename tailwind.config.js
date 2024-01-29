/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },
      width: {
        '85': '25rem'
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
      orange: '#fc1533',
      navy: '#031933',
      white: '#FFFFFF',
      gray: '#f5f5f5',
      green: '#03c2a9'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      header: '1.8rem',
      headerLg: '1.9rem',
      date: '1.2rem',
      dateLg: '1.25rem',
      team: '0.8rem',
      teamLg: '0.85rem',
      time: '1rem',
      timeLg: '1.05rem',
      channel: '0.65rem',
      channelLg: '0.7rem'
    }
  },
  plugins: []
}
