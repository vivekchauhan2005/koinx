/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A56DB",
        "primary-dark": "#1341b5",
        success: "#0E9F6E",
        danger: "#F05252",
        "bg-main": "#F3F4F6",
        "card-bg": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
