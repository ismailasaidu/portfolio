/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class", 
  theme: {

    extend: {},
    plugins: [],
    colors: {
     
      white: "#ffffff",
      grey: "#716B6B",
      blue: "#024E82",
      black: "#1D1D1D",
      dark: "#000000",
      darkGrey: "#444242",
      divider: "#E8E8E8",
      darktext: "#3A3939",
      star: "#D6763C",
      back: "#EBEBEB",
      red:"#ff0000",
      icn:"#818181",
      container:"#1E1E1E",
      view:"#000000",
    },
  
   
    fontFamily: {
      ST: ["Encode Sans Semi Condensed"],
      GV:["Great Vibes"]
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1022px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }

      // 'sm-landscape': {'raw': '(max-width: 639px) and (orientation: landscape)'},
    },

  }


 
}

