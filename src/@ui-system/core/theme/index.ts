import {
  boxShadow,
  breakPoint,
  device,
  colors,
  font,
  opacity,
  rounded,
  typography,
  transition,
} from 'ui-system/core/base';

import type {
  IBoxShadow,
  IBreakPoint,
  IColors,
  IDevice,
  IFont,
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
    breakPoint: IBreakPoint;
    device: IDevice;
    colors: IColors;
    font: IFont;
    opacity: IOpacity;
    rounded: IRounded;
    typography: ITypography;
    transition: ITransition;
};

const theme: ITheme = {
  boxShadow,
  breakPoint,
  device,
  colors,
  font,
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