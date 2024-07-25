/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

