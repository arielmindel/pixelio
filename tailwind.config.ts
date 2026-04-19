import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0E1A",
          900: "#0F1420",
          800: "#1A1F2E",
          700: "#242B3D",
          600: "#2E3650",
        },
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          light: "#60A5FA",
          glow: "rgba(59, 130, 246, 0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      animation: {
        gradient: "gradient 18s ease infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-md": "0 0 40px rgba(59, 130, 246, 0.25)",
        "glow-lg": "0 0 60px rgba(59, 130, 246, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
