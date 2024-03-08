import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#24e6af",
          light: "#34ffb6",
          dark: "#1faa7e",
          active: "#1bc48f",
        },
        background: {
          DEFAULT: "#1c1c1c",
          light: "#f2f2f2",
        },
      },
      height: {
        header: "70px",
      },
    },
  },
  plugins: [],
} satisfies Config;
