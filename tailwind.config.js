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
        "hero-homepage": "url('/hero-homepage.jpg')",
        "bg-section-4": "url('/home/bg-section-4.jpg')",
        "bg-insurance": "url('/insurance/bg-insurance.jpg')",
      },
      colors: {
        "blue-partner-overlay": "#047AE06B",
        "button-color": "#fa5b2e",
        "button-hover-color": "#ff8a65",

        "sub-text-color": "#3e4b54",
        
        "tertiary": "#1e82c8",
        "misc-blue": "#0081d2",
        "tertiary-dark-blue": "#0f4164",

        "btn_floating": "#60c6c8",
      }
    },
  },
  plugins: [],
}

