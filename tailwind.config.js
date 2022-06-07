module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main-background': '#F6F1EB',
      'main-color-orange': '#FF7D00',
      'main-color-green': '#4E6E5D',
      'main-color-dark-blue': '#001524',
      'main-color-light-blue': '#7CC6FE',
    },
    fontFamily: {
      mainFontTitle: ['Archivo Black', 'sans-serif'],
      mainFontSubtitle: ['Asap', 'sans-serif'],
      mainFontDefault: ['Lato', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
};
