/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
          accent: '',
        },
        secondary: {
          50: '',
          100: '',
          200: '',
          300: '',
          400: '',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
          accent: '',
        },
        neutral: {
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#B3B3B3',
          300: '#999999',
          400: '#808080',
          500: '#737373',
          600: '#4D4D4D',
          700: '#404040',
          800: '#191919',
          900: '#0D0D0D',
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
