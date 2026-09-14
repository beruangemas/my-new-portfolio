/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#131313",
        "surface": "#131313",
        "surface-dim": "#131313",
        "surface-bright": "#3a3939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "on-surface": "#D7B74B",
        "on-surface-variant": "#b9ccb2",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        "outline": "#84967e",
        "outline-variant": "#3b4b37",
        "surface-tint": "#00e639",
        "primary": "#ebffe2",
        "on-primary": "#003907",
        "primary-container": "#00ff41",
        "on-primary-container": "#007117",
        "inverse-primary": "#006e16",
        "secondary": "#FBD028",
        "on-secondary": "#3c2f00",
        "secondary-container": "#af8d11",
        "on-secondary-container": "#342800",
        "tertiary": "#fcf8f8",
        "on-tertiary": "#313030",
        "tertiary-container": "#dfdcdb",
        "on-tertiary-container": "#616060",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        "primary-fixed": "#72ff70",
        "primary-fixed-dim": "#00e639",
        "on-primary-fixed": "#002203",
        "on-primary-fixed-variant": "#00530e",
        "secondary-fixed": "#ffe088",
        "secondary-fixed-dim": "#e9c349",
        "on-secondary-fixed": "#241a00",
        "on-secondary-fixed-variant": "#574500",
        "on-background": "#e5e2e1"
      },

      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Space Mono", "monospace"]
      },

      keyframes: {
        twirl: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      },

      animation: {
        twirl: 'twirl 6s linear infinite',
      }
    },
  },
  plugins: [],
}

