/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        rajdhani: ['"Rajdhani"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // white: "#E5E5F7",
        white: "#FFFFFF",
        black: "#100E1B",
        "custom-yellow": "#FFBF18",
        "custom-violet": "#6F01Ec",
        "dark-blue": "#100E34",
        "light-blue": "#4F48EC",
      },
    },
  },
  plugins: [],
};
