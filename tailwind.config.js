/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "Rossans": ["Rossans"],
        Poppins: ["Poppins"],
        "Open": ["Open Sans"],
        "Garamond": ["Eb Garamond"],
        "Nunito": ["Nunito"],
        "Barlow":["Barlow Condensed"]
      },
      colors: {
        primary: "#1B1B4F",
        secondary: "#FECC09",
      },
      visibility: ["group-hover"],

      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      
    },
  },
  plugins: [],
}
