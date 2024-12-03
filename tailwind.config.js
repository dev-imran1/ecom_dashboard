/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
};
