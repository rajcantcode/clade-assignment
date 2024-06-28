import { plugin } from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC4A2D",
        borderHighlight: "#FCB4A5",
        borderGrey: "#D1D1D1",
      },
    },
    screens: {
      tablet: "600px",
      laptop: "1200px",
      desktop: "1400px",
      // minimum width required to display job preview with the sidebar
      jpm: "960px",
      // after 1400px, the sidebar width should be 20%
      jpmx: "1400px",
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".v-center": {
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".job-preview-wrapper": {
          width: "100%",
          padding: "1rem 0.5rem",
          borderBottom: `1px solid ${theme("colors.borderGrey")}`,
          "@media (min-width: 960px)": {
            padding: "1rem 2.5rem",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
