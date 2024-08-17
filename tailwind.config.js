/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "0%": { transform: "translate(1px, 1px)" },
          "10%": { transform: "rotate(-1deg)" },
          "10%": { transform: "translate(-1px, -2px)" },
          "20%": { transform: "rotate(1deg)" },
          "20%": { transform: "translate(-3px, 0px)" },
          "30%": { transform: "rotate(0deg)" },
          "30%": { transform: "translate(3px, 2px)" },
          "40%": { transform: "rotate(1deg)" },
          "40%": { transform: "translate(1px, -1px)" },
          "50%": { transform: "rotate(-1deg)" },
          "50%": { transform: "translate(-1px, 2px)" },
          "60%": { transform: "rotate(0deg)" },
          "60%": { transform: "translate(-3px, 1px)" },
          "70%": { transform: "rotate(-1deg)" },
          "70%": { transform: "translate(3px, 1px)" },
          "80%": { transform: "rotate(1deg)" },
          "80%": { transform: "translate(-1px, -1px)" },
          "90%": { transform: "rotate(0deg)" },
          "90%": { transform: "translate(1px, 2px)" },
          "100%": { transform: "rotate(-1deg)" },
          "100%": { transform: "translate(1px, -2px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wiggle: "wiggle infinite 0.2s linear",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
