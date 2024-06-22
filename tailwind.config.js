/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        rajdhani: ['"Rajdhani"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
