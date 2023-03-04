module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover", "focus", "active"],
    padding: ["responsive", "hover", "focus", "active"],
    margin: ["responsive", "hover", "focus", "active"],
    align: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
