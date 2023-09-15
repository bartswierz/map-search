/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#3b82f6", // text-primary-color #3b82f6
      },
    },
  },
  plugins: [],
};
