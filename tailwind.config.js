module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary-bg': '#000022',
        'secondary-bg': '#0A2239',
        primary: '#0094C6',
        secondary: '#5DD9C1',
      },
    },
  },
  plugins: [],
};
