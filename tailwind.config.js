/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        park: {
          green: {
            DEFAULT: "#1a4d3e",
            dark: "#0f3329",
            light: "#2d6a55",
          },
          cream: "#f4f0e8",
          tan: "#e8e0d4",
          sand: "#d4c9b8",
          brown: "#3d3429",
          "brown-muted": "#5c5246",
          amber: "#b8860b",
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          '"Source Sans 3"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        park: "0 1px 3px rgba(61, 52, 41, 0.08), 0 4px 12px rgba(61, 52, 41, 0.06)",
      },
    },
  },
  plugins: [],
};
