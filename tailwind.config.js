/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      //COLORS FOUND USING ONLINE INSPECT TOOL RESOURCE: https://pickcoloronline.com/
      colors: {
        "primary-color": "#5581f6",
        "primary-color-hover": "#5077E4",
        "secondary-color": "#c4c4c4",
        "name-color": "#494949",
        "search-icon-active": "#2f2f2f",
        "search-icon-inactive": "#9d9d9d",
        "search-input": "#484848",
      },
      backgroundColor: {
        "primary-bg": "#FFFFFF",
      },
      screens: {
        xsm: "468px",
      },
    },
  },
  plugins: [],
};
