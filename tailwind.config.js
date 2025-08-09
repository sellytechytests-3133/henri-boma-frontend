/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boma-sky-blue': '#00AEEF',
        'boma-earth-brown': '#8B4513',
        'boma-sunset-orange': '#FF7E5F',
        'boma-sunset-yellow': '#FFD194',
      },
    },
  },
  plugins: [],
}
