import {
  boxShadow,
  device,
  colors,
  opacity,
  rounded,
  typography,
  transition,
} from 'ui-system/core/base';

import type {
  IBoxShadow,
  ISize,
  IColors,
  IOpacity,
  IRounded,
  ITypography,
  ITransition,
} from 'ui-system/core/base';

export interface ITheme {
    background?: string;
    text?: string;
    mode?: 'light' | 'dark';
    boxShadow: IBoxShadow;
    device: ISize;
    colors: IColors;
    opacity: IOpacity;
    rounded: IRounded;
    typography: ITypography;
    transition: ITransition;
};

const theme: ITheme = {
  boxShadow,
  device,
  colors,
  opacity,
  rounded,
  typography,
  transition,
};

const darkTheme: ITheme = {
  mode: 'dark',
  background: colors.dark.main,
  text: colors.grey.light,
  ...theme,
};

const lightTheme: ITheme = {
  mode: 'light',
  background: colors.white.main,
  text: colors.dark.main,
  ...theme,
};

export { darkTheme, lightTheme, theme };