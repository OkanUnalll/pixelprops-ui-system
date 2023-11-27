import { darkTheme, lightTheme, appleTheme } from '.';
import type { ThemeProperties } from '.';

interface IThemeConfig {
  DEFAULT_THEME: ThemeProperties;
  THEMES: ThemeProperties[];
};

export const themeConfig: IThemeConfig = {
  /**
  * It is the default theme in the application.
  * This theme will be shown by default on first launch or when any theme is corrupted.
  */
  DEFAULT_THEME: darkTheme,
  /* You must enter all existing themes in this section. Otherwise the theme will not appear. */
  THEMES: [darkTheme, lightTheme, appleTheme],
};