/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "rgb(59 130 246)", // text-primary-color
      },
    },
  },
  plugins: [],
};
