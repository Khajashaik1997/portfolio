module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')], // Add typography plugin
};
