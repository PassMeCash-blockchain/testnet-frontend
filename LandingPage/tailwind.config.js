/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#874CF6",
        secondaryColor: "#0B011D",
        inputColor: "#F5F5F5",
        warningColor: "#F3AF0A",
        dangerColor: "#EA4335",
        processingColor: "#4564D6",
        greenColor: "#0AC18E",
      },
      keyframes: {
        moveRTL: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        moveRTL: "moveRTL 6000ms linear infinite",
      },
    },
  },
  plugins: [],
};
