module.exports = {
  content: ['./src/**/*.{js,md,njk,svg,css}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    require("daisyui"),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {},
  },
  daisyui: {
    themes: ["night", "dark", "cmyk"],
  },
}
