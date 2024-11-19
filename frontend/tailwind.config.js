/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        background1: "#FAF7F0",
        background2: "#F5EEE6",
        textColor1: "#3C3D37",
        textColor2: "#181C14",
      },
    },
  },
  plugins: [],
};
