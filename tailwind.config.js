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
      orange: '#FC844C',
      bgOrange: '#FD6C28',
      navy: '#031933',
      white: '#FFFFFF',
      gray: '#f0f0f0',
      brightOrange: '#F7B698'
    },
    fontFamily: {
      sans: ['Verdana', 'sans-serif']
    },
    fontSize: {
      header: '1.8rem',
      headerLg: '2rem',
      date: '1.2rem',
      dateLg: '1.4rem',
      team: '0.8rem',
      teamMd: '0.9rem',
      time: '1rem',
      timeMd: '0.9rem',
      channel: '0.6rem',
      channelMd: '0.6rem'
    }
  },
  plugins: []
}
