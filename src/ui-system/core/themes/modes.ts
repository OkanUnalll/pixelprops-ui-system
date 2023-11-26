import type { ThemeProperties } from './theme-base';
import { themeBase } from './theme-base';

export const darkTheme: ThemeProperties = {
    ...themeBase,
    mode: 'dark',
    backgroundColor: 'dark',
    textColor: 'grey',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'md',
};

export const lightTheme: ThemeProperties = {
    ...themeBase,
    mode: 'light',
    backgroundColor: 'white',
    textColor: 'dark',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'md',
};
