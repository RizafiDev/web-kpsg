/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_white: "#FFFFFF",
        custom_black: "#212427",
        custom_purple: "#4e006e",
      },
    },
  },
  plugins: [],
};
