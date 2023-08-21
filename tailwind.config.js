/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3FB984",
        secondary: "#2391ff",
        dark: "#101010",
      },
    },
  },
  plugins: [],
};
