import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        google:{
          "blue":"#4285F4",
          "red":"#EA4336",
          "yellow":"#FAAB00",
          "green":"#34A853",
        }
      },
      fontFamily: {
        sans: ["var(--font-family)", "sans-serif"],
        bold: ["var(--font-family-bold)", "sans-serif"],
        medium: ["var(--font-family-medium)", "sans-serif"],
      },
        animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
