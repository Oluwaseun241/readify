/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          text: "#0D0D0D",
          textTint: "#686D76",
          background: "#F5F5F5",
          backgroundHeader: "#FFFFFF",
          icon: "#687076",
          tabIconDefault: "#686D76",
          tabIconSelected: "#0D0D0D",
        },
      },
    },
  },
  plugins: [],
};
