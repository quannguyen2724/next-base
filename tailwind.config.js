/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        main: 'var(--color-primary-main)',
        dark: 'var(--color-primary-dark)',
      },
      secondary: {
        light: 'var(--color-secondary-light)',
        main: 'var(--color-secondary-main)',
        dark: 'var(--color-secondary-dark)',
      },
      paper: {
        main: 'var(--color-paper-main)',
        dark: 'var(--color-paper-dark)',
        grey: 'var(--color-paper-grey)',
      },
      neutral: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        disbled: 'var(--color-text-disabled)',
      },
      border: {
        main: 'var(--color-border-main)',
        dark: 'var(--color-border-dark)',
      },
      transparent: 'rgba(0, 0, 0, 0)',

      white: '#ffffff',
      black: '#000000',
      green: '#008000',
      brown: '#6a0505',
      orange: '#ffc64e',
      purple: '#ff46a5',
    },
    extend: {
      borderRadius: {
        base: '8px',
      },
      boxShadow: {
        sm: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        md: '0px 0px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    screens: {
      mobile: { max: '900px' },
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1400px',
    },
  },
  darkMode: 'class',
  plugins: [],
};
