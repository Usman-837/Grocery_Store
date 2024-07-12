/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3x-large': {'max': '1535px'},
        '2x-large': {'max': '1199px'},
        'x-large': {'max': '1024px'},
        'large': {'max': '991px'},
        'medium': {'max': '768px'},
        'small': {'max': '480px'},
        'x-small': {'max': '320px'}
      },
      backgroundImage: {
        'banner-img': "url('./assets/banner-img.jpg')"
      },
    },
  },
  plugins: [],
}
