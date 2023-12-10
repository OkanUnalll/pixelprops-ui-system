import { Color, ColorTypes, Edge, Font } from './tokens';
import type { BaseThemeProperties } from './theme-base';
import { themeBase } from './theme-base';

/**
 * THEMES
 * 
 * All themes are available here. You can create a new theme or make changes to the existing theme.
 * But remember: when adding a new theme, don't forget to add "themeBase" at the top of the object.
 * Otherwise, the theme will not work properly with other components.
*/

export type ThemeMode = 'light' | 'dark' | 'apple';

export interface ThemeProperties extends BaseThemeProperties {
    mode: ThemeMode;
    textColor: Color;
    bodyColor: Color;
    backgroundColor: Color;
    defaultPrimaryColor: Color;
    defaultRadius: Edge;
    defaultFont: Font;
    defaultColor: ColorTypes;
}

export const darkTheme: ThemeProperties = {
    ...themeBase,
    mode: 'dark',
    backgroundColor: 'dark',
    textColor: 'white',
    bodyColor: 'lightGrey',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'sm',
    defaultFont: 'roboto',
    defaultColor: {
        main: '#424242',
        light: '#5e5e5e',
        dark: '#353535',
        contrast: '#ffffff',
    },
};

export const lightTheme: ThemeProperties = {
    ...themeBase,
    mode: 'light',
    backgroundColor: 'white',
    textColor: 'dark',
    bodyColor: 'darkGrey',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'md',
    defaultFont: 'roboto',
    defaultColor: {
        main: '#e1e1e1',
        light: '#efefef',
        dark: '#cecece',
        contrast: '#141414',
    },
};

/* EXAMPLE CUSTOM THEME: */
export const appleTheme: ThemeProperties = {
    ...themeBase,
    mode: 'apple',
    backgroundColor: 'white',
    textColor: 'dark',
    bodyColor: 'darkGrey',
    defaultPrimaryColor: 'red',
    defaultRadius: 'full',
    defaultFont: 'poppins',
    defaultColor: {
        main: '#e1e1e1',
        light: '#efefef',
        dark: '#cecece',
        contrast: '#141414',
    },
};
