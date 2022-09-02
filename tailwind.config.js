/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: { 'C': 'IBM Plex Sans' }
    },
    backgroundImage: {
      "kabisha": "url(https://ik.imagekit.io/dmydh1fae/bg2_aKEczdfPA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662040055084)"
    },
    keyframes: {
      crossmaker: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-45deg)', transform: 'translate-y-5' },
      },


    },
    animation: {
      crossmaker: 'crossmaker .3s ',
    }
  },
  plugins: [],
}