import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-family)", "sans-serif"],
        bold: ["var(--font-family-bold)", "sans-serif"],
        medium: ["var(--font-family-medium)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
