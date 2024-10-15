/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        normal: "var(--color-normal)",
        light: "var(--color-light)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warn: "var(--color-warn)",
        danger: "var(--color-danger)"
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        success: "var(--bg-success)",
        info: "var(--bg-info)",
        warn: "var(--bg-warn)",
        danger: "var(--bg-danger)"
      }
    }
  },
  plugins: [],
}

