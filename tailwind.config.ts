import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-padding-default)",
          sm: "var(--container-padding-sm)",
          md: "var(--container-padding-md)",
          lg: "var(--container-padding-lg)",
          xl: "var(--container-padding-xl)",
          "2xl": "var(--container-padding-2xl)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
