/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,hbs,ts}"],
  theme: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Courier', 'monospace'],
        custom: ['Your Custom Font', 'Fallback Font']
        // Puedes definir nombres de fuente y fuentes de respaldo (fallback) aquí
      },
    extend: {},
  },
  plugins: [],
}