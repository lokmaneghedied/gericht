/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0C0B08',
        secondary:'#040404',
        tertiary: '#0C0C0C',
        gold:'#DCCA87',
        gray:'#AAAAAA',
        white: '#FFFFFF'
      },
      backgroundImage:{
        site:"url('./assets/bg.png')",
      }
    },
    screens:{
      'xs':'425px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    }
    
  },
  plugins: [],
}

