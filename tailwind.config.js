/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust the paths based on where your files are located
    "./index.html",
  ],
  plugins: [
    require('daisyui'),  // Add this line to include DaisyUI
  ],
}

