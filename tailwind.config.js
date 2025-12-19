/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-cement': '#1C1A22',
        'text-main': '#FEFDFB',
        'text-secondary': '#F0EFEE',

        'accent-header': '#CEA28A',   // cobre/pessego envelhecido
        'accent-glow': '#DE68FB',     // roxo magenta vibrante
      },
      boxShadow: {
        'glow-purple': '0 0 15px 5px rgba(222, 104, 251, 0.7), 0 0 5px 1px rgba(222, 104, 251, 0.5)',

      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading':['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

