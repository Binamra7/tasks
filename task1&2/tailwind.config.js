/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393e46',
        accent: '#00adb5',
        background: '#eeeeee',
      }
    },
  },
  plugins: [],
}

