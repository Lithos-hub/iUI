/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#e11d48",
        dark: "#101010",
        success: "#3bb273",
        info: "#5438dc",
        warning: "#ef7b45",
        danger: "#ef233c",
      },
    },
  },
  plugins: [],
};
