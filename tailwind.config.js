module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: ".7rem",
      },

      backgroundImage: {
        adks: "url('/src/img/adk.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
