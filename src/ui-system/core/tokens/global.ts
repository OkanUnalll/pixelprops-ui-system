import { css } from '@emotion/react';

import { ThemeProperties } from '..';

export const globals = (theme: ThemeProperties) => css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '\'Poppins\', sans-serif',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    backgroundColor: theme.backgroundColor,
    color: theme.textColor,
  },
  a: {
    textDecoration: 'none',
    outline: 'none',
    transition: 'all .3s ease',
  }
});