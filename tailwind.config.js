/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#073B35",
          dark: "#042521",
          light: "#0A4D45",
        },
        brandgreen: {
          DEFAULT: "#078363",
          dark: "#05634B",
          light: "#0AA57D",
        },
        mint: {
          DEFAULT: "#E5FAF1",
          light: "#F2FDF8",
          border: "#D0F2E3",
        },
        lime: {
          DEFAULT: "#C9FF55",
          hover: "#BAF53D",
          light: "#E2FFA8",
        },
        charcoal: {
          DEFAULT: "#111C22",
          muted: "#6B7780",
          subtle: "#9BA5AD",
        },
        surface: {
          border: "#E5EEE9",
          light: "#F9FCFA",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(7, 59, 53, 0.05)",
        card: "0 4px 12px 0 rgba(7, 59, 53, 0.04)",
      },
    },
  },
  plugins: [],
};
