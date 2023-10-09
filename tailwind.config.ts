import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/*
 CRT effect
 http://aleclownes.com/2017/02/01/crt-display.html
*/

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-contrast": "var(--background-contrast)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-primary-contrast": "var(--text-primary-contrast)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-1": "var(--background-gradient-1)",
      },
      fontFamily: {
        cal: ["var(--font-cal)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "text-glitch": {
          "0%": {
            textShadow:
              "0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "5%": {
            textShadow:
              "2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "10%": {
            textShadow:
              "0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "15%": {
            textShadow:
              "0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "20%": {
            textShadow:
              "3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "25%": {
            textShadow:
              "1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "30%": {
            textShadow:
              "0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "35%": {
            textShadow:
              "3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "40%": {
            textShadow:
              "3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "45%": {
            textShadow:
              "2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "50%": {
            textShadow:
              "0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "55%": {
            textShadow:
              "2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "60%": {
            textShadow:
              "2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "65%": {
            textShadow:
              "2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "70%": {
            textShadow:
              "0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "75%": {
            textShadow:
              "1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "80%": {
            textShadow:
              "0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "85%": {
            textShadow:
              "0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "90%": {
            textShadow:
              "3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "95%": {
            textShadow:
              "2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
          "100%": {
            textShadow:
              "2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px",
          },
        },
        "scan-line": {
          "0%": {
            bottom: "calc(100% + 50px)",
          },
          "100%": {
            bottom: "calc(0% - 100px)",
          },
        },
        crt: {
          "0%": {
            backgroundPosition: "0 0%",
          },
          "100%": {
            backgroundPosition: "0 -50%",
          },
        },
      },
      transitionDelay: {
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        "elastic-out-3": "var(--ease-elastic-out-3)",
        "spring-3": "var(--ease-spring-3)",
      },
      animation: {
        "text-glitch": "text-glitch 4s infinite",
        "scan-line": "scan-line 5s linear infinite",
        crt: "crt 15s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
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
          backgroundImage:
            "radial-gradient(circle, var(--text-1) 1px, transparent 1px)",
        },
        ".crt": {
          background:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 2px, 3px 100%",

          // background: 'linear-gradient(to bottom, rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
          // backgroundSize: "100% 6px, 100px 100px",
          display: "block",
          position: "absolute",
          inset: "0",
          // opacity: "0.5",
          pointerEvents: "none",
          // mixBlendMode: "color-dodge",
        },
        ".scan-line": {
          display: "block",
          position: "absolute",
          background:
            "linear-gradient(0deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)",
          opacity: "0.3",
          bottom: "100%",
          width: "100%",
          height: "100px",
          // "z-index": "2",
          pointerEvents: "none",
          // mixBlendMode: "color-dodge",
        },
      });
    }),
  ],
  // corePlugins: {
  //   preflight: false,
  // },
};
export default config;
