/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        1: "0.5rem",
        2: "0.75rem",
        3: "1rem",
        4: "1.5rem",
        5: "1.75rem",
        6: "2rem",
      },
    },
  },
  plugins: [],
};
