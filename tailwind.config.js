/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaria: ' #3D94FF',
        secundaria:'#3284FF',
        terciaria:'#202020',
       
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        zalando: ['"Zalando Sans Expanded"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
