/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#F7B318", textDark: "#111827", textMute: "#9CA3AF" },
    },
  },
  plugins: [],
};
