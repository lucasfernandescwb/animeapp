/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'default': 'rgb(237, 241, 245)',
        'primary': '#bcbdec',
        'component': '#2b2d42',
        'contrast': '#0a1625',
        'primary-contrast': '#748899'
      },
      screens: {
        'dev': '1200px'
      }
    },
  },
  plugins: [],
}
