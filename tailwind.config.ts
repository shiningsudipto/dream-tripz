import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#657f8e",
          100: "#4d6b7c",
          200: "#36586b",
          300: "#1e455a",
          DEFAULT: "#003349",
          500: "#002b3e",
          600: "#002334",
          700: "#001c2a",
          800: "#001420",
        },
        secondary: {
          300: "#ff4c48",
          DEFAULT: "#FF262F",
          500: "#ff4c48",
        },
        lightBlue: {
          50: "#F9FDFF",
          300: "#AFDADF",
          DEFAULT: "#39EAFF",
          500: "#0DE5FF",
        },
        gray: {
          300: "#919191",
          DEFAULT: "#858585",
          500: "#ACACAC",
        },
        border: {
          DEFAULT: "",
          focused: "",
        },
        text: {
          DEFAULT: "#010101",
          lighter: "#8a8a94",
        },
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        lm: "1366px", // laptop-medium
        // => @media (min-width: 1366px) { ... }

        ls: "1440px", // laptop-standard
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
