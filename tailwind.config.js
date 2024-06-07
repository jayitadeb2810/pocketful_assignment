/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "shutter-open": {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
        },
        "shutter-close": {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
        },
      },
      animation: {
        "shutter-open":
          "shutter-open 0.5s ease-out forwards",
        "shutter-close":
          "shutter-close 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
}
