/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3354ff', // Add your custom color here
      },
      
      fontFamily: {
        thicccboi: ["Thicccboi", "sans-serif"], // Add the font to the config
      },

    },
  },
  plugins: [],
}
