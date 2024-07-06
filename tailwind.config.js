/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1199px'},
        'md': {'max': '991px'},
        'sm': {'max': '768px'},
      },
      backgroundImage: {
        'banner-img': "url('./assets/banner-img.jpg')"
      },
    },
  },
  plugins: [],
}