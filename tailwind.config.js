/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Asegúrate de que el plugin esté así
  plugins: [
    typography,
  ],
};