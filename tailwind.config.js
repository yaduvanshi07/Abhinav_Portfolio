/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        primary: "#09090B",
        secondary: "#EDE8DC", // Dark cream color (more like white, looks elegant on black background)
        cream: "#EDE8DC",
        tertiary: "#18181B",
        "black-100": "#111827",
        "black-200": "#09090B",
        "white-100": "#F8FAFC",
        // Legacy aliases kept for backward compatibility
        saffron: "#3B82F6",
        aqua: "#60A5FA",
        accent: {
          blue: "#3B82F6",
          "blue-hover": "#60A5FA",
          success: "#22C55E",
          violet: "#3B82F6",
          purple: "#60A5FA",
          emerald: "#22C55E",
          amber: "#60A5FA",
          rose: "#3B82F6",
          teal: "#60A5FA",
          cyan: "#3B82F6",
        },
      },
      boxShadow: {
        card: "0px 20px 60px -10px rgba(0,0,0,0.6)",
        "card-blue": "0px 0px 30px rgba(59,130,246,0.12)",
        "glow-blue": "0 0 20px rgba(59,130,246,0.35)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
