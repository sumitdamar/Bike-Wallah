/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
    fontFamily: {
      mullish: ["Mulish", "sans-serif"],
      amaranth:["Mandali","Mulish", "sans-serif"],
      logo:["Fira-Sans"],
      screen:{
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
      }
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      normalOran:"#FE6244",
      imageOran:"#f37721"
    },},
  },
  plugins: [],
}
