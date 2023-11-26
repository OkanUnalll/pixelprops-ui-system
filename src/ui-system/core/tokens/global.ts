import { css } from '@emotion/react';

import { ThemeProperties, colors } from '..';

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
    backgroundColor: colors[theme.backgroundColor].main,
    color: colors[theme.textColor].main,
  },
  a: {
    textDecoration: 'none',
    outline: 'none',
    transition: 'all .3s ease',
  }
});