/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        logo: ['"PT Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        golos: ['"Golos Text"', 'sans-serif'],
      },
      colors: {
        gold: '#BB9466',
        teal: {
          900: '#152F31',
          800: '#1F3130',
        },
        cream: '#F4EDE7',
        beige: '#F1F0E8',
        mint: '#E9F1F0',
        body: '#666666',
        dark: '#333333',
        darker: '#1C1C1C',
      },
    },
  },
  plugins: [],
};
