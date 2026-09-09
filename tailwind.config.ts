import type { Config } from "tailwindcss";

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
        pms: {
          bg: "#121316",
          card: "#1C1E24",
          border: "#2A2D37",
          gold: "#F5B800",
          "gold-hover": "#E0A700",
          "gold-light": "#FFC82E",
          "gold-dark": "#B88A00",
          dark: "#0C0D0E",
          slate: "#8E95A5",
          lightBg: "#F8FAFC",
          lightCard: "#FFFFFF",
          lightBorder: "#E2E8F0",
          lightText: "#0F172A",
          lightMuted: "#64748B",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(245, 184, 0, 0.25)",
        "gold-glow-lg": "0 0 40px rgba(245, 184, 0, 0.35)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
