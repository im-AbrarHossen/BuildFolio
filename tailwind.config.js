/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#026C84",   // Example: Indigo
        secondary: "#2c8a9f", // Example: Amber
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

