import { css } from '@emotion/react';

import { colors, fonts } from '..';

import { ThemeProperties } from 'ui-system/theme';

export const globals = (theme: ThemeProperties) => css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: `"${fonts[theme.defaultFont]}", sans-serif`,
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