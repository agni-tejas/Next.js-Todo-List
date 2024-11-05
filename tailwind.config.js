/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        backgroundColor: "hsl(var(--bg))",
        headColor: "hsl(var(--htxt))",
        textColor: "hsl(var(--txt))",
        accent: "hsl(var(--accent))",
        accent1: "hsl(var(--accent1))",
        muted: "hsl(var(--muted))",

        // Dark Mode Colors
      },
      fontSize: {
        customSize: "1.8rem", // Custom size for padding, margins, etc.
      },
      borderRadius: {
        custom: "0.2em", // Custom border radius
      },
      transitionTimingFunction: {
        squish: "cubic-bezier(0.86, -0.1, 0.27, 1.15)", // Custom timing function
      },
      transitionDuration: {
        fast: "180ms", // Fast transition speed
        slow: "300ms", // Slow transition speed
      },
    },
  },
  plugins: [],
};
