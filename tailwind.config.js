/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      card: "var(--color-card)",
      background: "var(--color-background)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      neutral: "var(--color-neutral)",
      success: "var(--color-success)",
      selected: "var(  --color-selected)",
      "color-text-primary": "var(--color-text-primary)",
      "color-text-secondary": "var(--color-text-secondary)",
      "color-text-selected": "var(--color-text-selected)",
    },
  },
  plugins: [],
};
