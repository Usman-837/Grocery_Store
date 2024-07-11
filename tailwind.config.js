/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': {'max': '1535px'},
        '2xl': {'max': '1199px'},
        'xl': {'max': '1024px'},
        'lg': {'max': '991px'},
        'md': {'max': '768px'},
        'sm': {'max': '480px'},
        'xs':{'max': '320px'}
      },
      backgroundImage: {
        'banner-img': "url('./assets/banner-img.jpg')"
      },
    },
  },
  plugins: [],
}