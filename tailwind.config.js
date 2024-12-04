/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
module.exports = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    screens,
    fontSize,
    fontFamily: {
      primary: "var(--font-Sancreek)",
      secondary: "var(--font-dm_sans)",
      zentry: ["zentry", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
      },
      colors: {
        primary: "#FF4D00",
      },
    },
  },
  plugins: [fluid],
};
