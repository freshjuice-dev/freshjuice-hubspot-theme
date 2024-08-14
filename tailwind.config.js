/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

module.exports = {
  prefix: "fj-",
  content: [
    "./theme/**/*.html",
    "./theme/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      "cursive": ["'Caveat', cursive"],
    },
    extend: {
      colors: {
        cursor: {
          500: "#FFFFFF",
          DEFAULT: "#FFFFFF",
        },
        terminal: {
          500: "#000000",
          DEFAULT: "#000000",
        }
      },
      aspectRatio: {
        auto: "auto",
        box: "1",
        landscape: "4/3",
        portrait: "3/4",
        video: "16/9",
        widescreen: "16/9",
        ultrawide: "18/5",
        golden: "1.6180/1",
        macbook: "16/10",
      },
      minHeight: {
        'screenSinNav': 'calc(100vh - 5rem)',
      },
      maxWidth: {
        "copy-xs": "25ch",
        "copy-sm": "45ch",
        "copy-md": "55ch",
        "copy-lg": "65ch",
        "copy-xl": "75ch",
        "copy-2xl": "85ch",
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(.87,0,.13,1)'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-safe-area"),
    require("@xpd/tailwind-3dtransforms"),
    ({ addComponents, theme }) => {
      addComponents({
        // some components?
      });
    },
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
}
