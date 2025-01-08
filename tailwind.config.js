const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure all files are scanned
  theme: {
    extend: {
      boxShadow: {
        'xl-strong': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '2xl-strong': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'playfair': ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
