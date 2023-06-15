/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-partner": "url('/hero-partner.jpg')",
      },
      colors: {
        "blue-partner-overlay": "#047AE06B",
        "button-color": "#fa5b2e",
        "button-hover-color": "#ff8a65",
        
        "tertiary": "#1e82c8",

        "btn_floating": "#60c6c8",
      }
    },
  },
  plugins: [],
}

