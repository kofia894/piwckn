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
        Rossans: ["Rossans"],
        Poppins: ["Poppins"],
        Open: ["Open Sans"],
        Garamond: ["Eb Garamond"],
        Nunito: ["Nunito"],
      },
      colors: {
        primary: "#003560",
        secondary: "#E6F44C",
      },
      visibility: ["group-hover"],
      
    },
  },
  plugins: [],
}
