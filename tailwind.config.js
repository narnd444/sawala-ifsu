/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'], 
      },
      colors: {
        primary: '#007AFF', // Warna utama
        secondary: '#FF9500', // Warna sekunder
      },
    },
  },
  plugins: [],
};