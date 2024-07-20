import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        colorCV: {
          100: "#393F48",
          200: "#EF5DA8",
        },
        text: {
          menu: "#243c5a",
          judulSection: "#edf0f2",
          p: "#94a3b8",
          copyFooter: "#9ca3af",
        },
        btn: {
          100: "#ffde02",
          200: "#f1f5f9",
        },
        btnHover: {
          100: "#fde047",
          200: "#f8fafc",
        },
        100: "#141d22",
      },
    },
  },
  plugins: [],
};
export default config;
