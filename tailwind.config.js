/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        playfair: ['var(--font-playfair)'],
      },
      animation: {
        'rotated': 'rotated 12s infinite linear',
        'letters-loading': 'letters-loading 4s infinite',
      },
      colors: {
        'prime-ten': 'var(--prime-ten)',
      },
      screens: {
        'xsm': '375px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
