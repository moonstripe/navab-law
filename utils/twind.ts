import { IS_BROWSER } from "fresh/runtime.ts";
import { Configuration, setup, apply } from "twind";
export * from "twind";
export const config: Configuration = {
  preflight: {
    ul: apply`list-disc list-inside`
  },
  darkMode: "class",
  theme: {
    // fontFamily: {
    //   sans: ["Montserrat"]
    // },
    animation: {
      "down": "down 1s infinite"
    },
    keyframes: {
      "down": {
        "0%, 100%": { transform: 'translateY(0)', animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1);"},
        "50%": { transform: 'translateY(-25%)', animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1);"}
      }
    },
    extend: {
      colors: {
        blue: {
          dark: "#1B264F",
          medium: "#274690",
          light: "#576CA8"
        },
        grey: {
          jet: "#302B27"
        }
      },
    }
  },
  mode: "silent",
};
if (IS_BROWSER) setup(config);
