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
        backgroundColor: "hsl(var(--bg))",
        headColor: "hsl(var(--htxt))",
        textColor: "hsl(var(--txt))",
        accent: "hsl(var(--accent))",
        accent1: "hsl(var(--accent1))",
        muted: "hsl(var(--muted))",
      },
      fontSize: {
        customSize: "1.8rem",
      },
      borderRadius: {
        custom: "0.2em",
      },
      transitionTimingFunction: {
        squish: "cubic-bezier(0.86, -0.1, 0.27, 1.15)",
      },
      transitionDuration: {
        fast: "180ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};
