import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        jeju: ["var(--font-jeju)"],
      },
      colors: {
        customColor: {
          background: "#F6F4EF",
          brand: "#99C08E",
          green: {
            facade: "var(--color-custom-color-brand)",
            shadow: "var(--color-custom-color-text-green)",
          },
          darkGray: {
            facade: "var(--color-custom-color-black-300)",
            shadow: "var(--color-custom-color-black-400)",
          },
          gray: {
            facade: "var(--color-custom-color-black-200)",
            shadow: "var(--color-custom-color-black-300)",
          },
          black: {
            400: "#414141",
            300: "#818181",
            200: "#DDDDDD",
            100: "#EEEEEE",
          },
          red: {
            300: "#C41013",
            200: "#F50E0E",
            100: "#FFA3A5",
          },
          card: {
            green: "#E1EDDE",
            yellow: "#FFF1CC",
            blue: "#E0F1F5",
            pink: "#FDE0E9",
          },
          text: {
            green: "#578246",
            yellow: "#C18E1B",
            blue: "#418099",
            pink: "#BC3C6A",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
