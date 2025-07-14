// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 this tells Tailwind to scan your React files
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#7C3AED',    // violet
        lightPurple: '#E9D5FF',      // soft purple bg
        pinkHighlight: '#F9A8D4',    // hover pink
      },
    },
  },
  plugins: [],
};
