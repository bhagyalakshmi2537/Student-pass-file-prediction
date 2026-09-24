/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#182436',
        slate: { 925: '#101B29' },
        indigo5: '#3C5FA8',
        gold4: '#C2933D',
        wine3: '#9A3B4A',
        paper: '#F6F7F8',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
    },
  },
  plugins: [],
}
