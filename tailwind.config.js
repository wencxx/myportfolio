/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "mono": "Roboto Mono",
        "ovo": "Ovo"
      },
    },
  },
  plugins: [],
}

