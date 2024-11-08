/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hr: "-webkit-linear-gradient(0deg, transparent, #eab308, #ef4444, #ec4899, #a855f7, #3b82f6, transparent)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
