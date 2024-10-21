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
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
    },
  },
  plugins: [],
};
export default config;

