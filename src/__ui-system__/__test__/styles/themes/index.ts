import { Theme } from 'ui-system/__test__/core';

const baseTheme = new Theme({
  shadows: {
    values: {
      none: 'none',
      xs: '0 0 45px rgba(0, 0, 0, 0.1)',
      sm: '0 0 45px rgba(0, 0, 0, 0.3)',
      md: '0 0 45px rgba(0, 0, 0, 0.5)',
      lg: '0 0 45px rgba(0, 0, 0, 0.8)',
      xl: '0 0 45px rgba(0, 0, 0, 1)',
    },
  },
  breakPoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  colors: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  radius: {
    values: {
      none: '0px',
      xs: '2px',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '10px',
      xxl: '12px',
      full: '50px',
    },
  },
  fonts: {
    roboto: 'Roboto',
    poppins: 'Poppins',
    montserrat: 'Montserrat',
  },
  opacities: {
    values: {
      hidden: 0,
      xs: 0.15, 
      sm: 0.30,
      md: 0.50,
      lg: 0.70,
      xl: 0.85,
      visible: 1,
      disabled: 0.50,
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '30px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: 1.375,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.625,
    },
    paragraph: {
      fontSize: '15px',
      fontWeight: 300,
      lineHeight: 1.3,
    },
  },
  transitions: {
    duration: {
      slow: '0.7s',
      mid: '0.3s',
      fast: '0.1s',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeInOut: 'ease-in-out',
      easeOut: 'ease-out',
      moment: 'cubic-bezier(0, 1.63, 0.56, 1.85)',
    },
  },
});