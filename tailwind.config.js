/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "staatliches": "'Staatliches', cursive",
      },
      width:{
        "sub-heading": "38rem",
        "quill-editor": "35rem"
      }
    },
  },
  plugins: [],
}

