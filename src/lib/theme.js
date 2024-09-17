import defaultTheme from 'tailwindcss/defaultTheme';

export const colors = {
  starstorm: {
    DEFAULT: '#251150',
    dim: {
      DEFAULT: '#442F84',
      50: '#FBFAFC',
      300: '#8451E1',
      500: '#442F84',
      400: '#5337A8'
    },
    bright: {
      DEFAULT: '#6F1FF1',
      alt: '#6D41EE'
    }
  },
  plum: {
    DEFAULT: '#534375',
    50: '#F6F5F7',
    100: '#EFEDF2',
    200: '#9790A8',
    300: '#6C6282',
    400: '#5D5276',
    500: '#534375',
    600: '#433167',
    dim: {
      300: '#413D4C',
      400: '#66626E',
      500: '#A6A3AD'
    }
  },
  skyblue: '4CA9FF'
};

/** @type {import('tailwindcss').Config['theme']} */
export const theme = {
  fontFamily: {
    sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
    heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
    button: ['Space Grotesk', ...defaultTheme.fontFamily.sans]
  },
  extend: {
    borderRadius: {
      xl: '1.125rem'
    },
    ...colors
  }
};
