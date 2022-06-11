/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            bg_white: '#ecf0f3',
            bg_black: '#1f2937',
            dark_blue: '#5651e5',
            light_blue: '#709dff',
        },
    },
  },
  plugins: [],
}
