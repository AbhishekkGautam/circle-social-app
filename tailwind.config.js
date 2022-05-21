module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        colorgray: {
          50: "#f7f9f9",
          100: "#d9d9d9",
          200: "",
          300: "#6e767d",
          500: "#18222f",
          600: "#1E2732",
          800: "#151515",
        },
        colorblue: {
          100: "#1d9bf0",
          200: "#1A8CD8",
          300: "#1a85cd",
        },
        background: "#151F2B",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
