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
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        white: "var(--white-color)",
        blue: "var(--blue-color)",
        dark: "var(--dark-color)",
        black: "var(--black-color)",
        gray: "var(--gray-color)",
        lightBg: "var(--light-bg-color)",
        error: "var(--error-color)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-padding-default)",
          sm: "var(--container-padding-sm)",
          md: "var(--container-padding-md)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
