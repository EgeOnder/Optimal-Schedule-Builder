import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "dusty-pink": "hsl(var(--dusty-pink))",
        "bulldog-red": "hsl(var(--bulldog-red))",
      },
    },
  },
  plugins: [],
} satisfies Config;
