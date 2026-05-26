import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        canvas: "#F3F7F4",
        surface: "#FFFFFF",
        deep: "#102A2C",
        ink: "#111827",
        muted: "#64736A",
        accent: {
          blue: "#1F5C8B",
          "blue-hover": "#184B72",
          green: "#3F7D5A",
          "green-soft": "#E8F0EB",
        },
        hairline: "rgba(17, 24, 39, 0.08)",
        "hairline-dark": "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "-0.025em",
        tighter: "-0.02em",
        meta: "0.06em",
        marker: "0.08em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        hero: "0 30px 60px -20px rgba(16, 42, 44, 0.18)",
        soft: "0 12px 24px -16px rgba(17, 24, 39, 0.05)",
        "soft-lift": "0 24px 48px -20px rgba(17, 24, 39, 0.08)",
        "card-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
      },
      maxWidth: {
        "65ch": "65ch",
        "60ch": "60ch",
        "52ch": "52ch",
        "45ch": "45ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
