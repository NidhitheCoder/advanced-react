/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-softgreen-softpink":
          "linear-gradient(200deg, var(--very-soft-green) 0%, var(--soft-pink))",
      },
      colors: {
        "very-soft-green":    "var(--very-soft-green)",
        "soft-pink":  "var(--soft-pink)",
        "strong-blue":  "var(--strong-blue)",
        "light-grayish-blue":  "var(--light-grayish-blue)",
        "very-soft-yellow":  "var(--very-soft-yellow)",
        "dark-red":  "var(--dark-red)",
        "very-dark-cyan":   "var(--very-dark-cyan)",
        "darker-cyan":  "var(--darker-cyan)",
        "strong-orange":  "var(--strong-orange)",
      }
    },
  },
  plugins: [],
}