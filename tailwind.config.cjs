/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "9/16": "9 / 16",
      },
      boxShadow: {
        nav: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      fontSize: {
        h1: "4.2rem",
        h2: "2rem",
        h3: "1.25rem",
        h4: "1rem",
        h2: "1.5rem",
        h3: "1.5rem",
        h4: "1.25rem",
        "button-1": "18px",
        "button-2": "16px",
        "caption-1": "14px",
        "small-b": "12px",
        "small-r": "12px",
        "body-1": "24px",
        "body-2": "16px",
        "body-3": "14px",
        "body-2": "14px",
        display: "64px",
      },
      lineHeight: {
        h1: "52px",
        h2: "42px",
        h3: "26px",
        h4: "20px",
        h2: "32px",
        h3: "32px",
        h4: "26px",
        "button-1": "24px",
        "button-2": "24px",
        "caption-1": "18px",
        "small-b": "16px",
        "small-r": "16px",
        "body-1": "32px",
        "body-2": "24px",
        "body-3": "18px",
        "body-2": "18px",
        display: "82px",
      },
      colors: {
        main: {
          orange: "#FF7B29",
          dark_blue: "#132742",
          blue: "#263FA4",
          light_blue: "#53C6DD",
          white: "#FFFFFF",
          gray: "#404040",
        },
      },
      fontFamily: {
        primary: "Poppins",
        //secondary: "SVN-Gilroy",
      },
    },
  },
  plugins: [],
};
