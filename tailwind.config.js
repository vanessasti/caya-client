const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
    },
    colors: {
      'stone':'#a8a29e',
      'midnight': '#121063',
    },
  },
  plugins: [],
};
