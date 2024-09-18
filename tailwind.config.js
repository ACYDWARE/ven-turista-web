/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

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
}