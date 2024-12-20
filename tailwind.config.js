/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Beige: "#DDD4C2", //Бежевый
        DarkGreen: "#37574C",
        LightGreen: "#5F937C",
        FooterColor1: "#2B3A36" /* Темно-зеленый */,
        FooterColor2: "#333333" /* Темно-серый */,
        FooterColor3: "#4B4036" /* Темно-коричневый */,
      },
      fontFamily: {
        "times-new-roman": ["Times New Roman", "serif"],
        Screpka: ["Screpka", "cursive"],
        Sexsmith: ["Sexsmith", "cursive"],
        Cruinn: ["Cruinn", "serif"],
        Antarctic: ["Antarctic", "cursive"],
        Czizh: ["Czizh", "cursive"],
      },
    },
  },
  plugins: [],
};
