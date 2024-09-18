import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [
          "Inter", "sans-serif",
        ],
      },
      colors:{
        primary: '#f6b149',
        secondary: '#f8572d',
        tertiary: '#df2a33',
        quaternary: '#a22543',
        quinary: '#6b312d',
      },
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm:'3rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;

