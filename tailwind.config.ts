import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient_color': 'linear-gradient(90deg, rgba(255,181,61,1) 0%, rgba(255,67,170,1) 61%, rgba(76,215,251,1) 100%)'
      },
      colors: {
        orange: "#FF6347",
        light_blue: "#00dfff",
        pink: "#FF30C2",
        yellow: '#FFF700',
        purple: '#8A2BE2',
        white: "#ffffff",
        light_gray: '#D9D9D9',
        off_white: '#fafafa',
        gray: '#818181',
        mid_gray: '#7A7A7A',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
