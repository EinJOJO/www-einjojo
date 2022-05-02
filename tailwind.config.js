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
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    extend: {
      colors: {
        'primary-bg': '#000022',
        'secondary-bg': '#0A2239',
        primary: '#0094C6',
        secondary: '#5DD9C1',
      },
      backgroundImage: {
        'hero-pattern': 'url("/img/moonlight.svg")',
      },
    },
  },
  plugins: [],
};
