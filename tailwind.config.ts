import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cal: ["var(--font-cal)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".grainy": {
          position: "absolute",
          backgroundImage: "var(--noise-5)",
          filter: "var(--noise-filter-3)",
          inset: "0",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        },
        ".grainy-text": {
          backgroundSize: "220px 220px",
          backgroundRepeat: "repeat",
          backgroundImage: "var(--noise-5)",
          filter: "var(--noise-filter-3)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".dotted-graph": {
          backgroundSize: "40px 40px",
          backgroundRepeat: "repeat",
          backgroundImage: 'radial-gradient(circle, var(--text-1) 1px, var(--surface-1) 1px)',
        }
      });
    }),
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};
export default config;
