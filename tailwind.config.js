/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans, sans-serif"],
      },
      colors: {
        primary1: "#003E29",
        primary2: "#E4BBA1",
        primary3: "#D9D9D9",
        bordeColor: "#787878",
        bgColor: "#EDEDED",
        bgGreen: "#023423",
      },
    },
  },
  plugins: [],
};
