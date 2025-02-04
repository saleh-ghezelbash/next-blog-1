const withMT = require("@material-tailwind/react/utils/withMT");
// import {Vazirmatn} from "next/font/google";
// const vazir = Vazirmatn({
//   subsets: ["arabic"],
//   weight: ["100","200","300","400","500","600","700","800","900"]
// });

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // theme: {
    //   fontFamily: {
    //     sans: ["Vazirmatn", "sans-serif"],
    //   },
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
});
