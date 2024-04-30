/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'forgetPassword': '#9370DB',
      },
      fontWeight: {
        'custom-bold': '500', 
      },
    },
  },
  plugins: [],
}

