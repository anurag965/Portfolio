/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        Mono: ["'JetBrains Mono'", "monospace"]
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
