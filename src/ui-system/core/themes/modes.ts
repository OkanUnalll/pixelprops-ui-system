import { colors } from '..';
import type { ThemeProperties } from './theme-base';
import { themeBase } from './theme-base';

export const darkTheme: ThemeProperties = {
    ...themeBase,
    mode: 'dark',
    backgroundColor: colors.dark.main,
    textColor: colors.grey.light,
};

export const lightTheme: ThemeProperties = {
    ...themeBase,
    mode: 'light',
    backgroundColor: colors.white.main,
    textColor: colors.dark.main,
};
