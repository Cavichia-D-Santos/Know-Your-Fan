/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#494b50",
        tertiary: "#bbbbbb",
        
        gold: {
          100: "#f6c60f",
          200: '#866c0b',
        },
        light: {
          100: "#fefefe",
          200: "#f0f0f0",
        },
        black: "#000000",
      }
    },
  },
  plugins: [],
}

