import type { Config } from "tailwindcss";

const config: Config = {
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
      colors: {
        primary: "#2563eb",
        "primary-content": "#d2e2ff",
        secondary: "#facc15",
        "secondary-content": "#150f00",
        accent: "#fef9c3",
        "accent-content": "#16150e",
        neutral: "#f5f5f4",
        "neutral-content": "#151514",
        "base-100": "#111827",
        "base-200": "#0d1320",
        "base-300": "#090f1a",
        "base-content": "#c9cbcf",
        info: "#a8a29e",
        "info-content": "#0a0a09",
        success: "#22c55e",
        "success-content": "#000e03",
        warning: "#fbbf24",
        "warning-content": "#150d00",
        error: "#dc2626",
        "error-content": "#ffd9d4",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
