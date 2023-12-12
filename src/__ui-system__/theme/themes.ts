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
    defaultGrayColor: Color;
    backgroundColor: Color;
    defaultPrimaryColor: Color;
    defaultRadius: Edge;
    defaultFont: Font;
    defaultGrayColor2: ColorTypes;
}

export const darkTheme: ThemeProperties = {
    ...themeBase,
    mode: 'dark',
    backgroundColor: 'dark',
    textColor: 'white',
    defaultGrayColor: 'lightGrey',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'sm',
    defaultFont: 'roboto',
    defaultGrayColor2: {
        main: '',
        light: '',
        dark: '',
        contrast: '',
    },
};

export const lightTheme: ThemeProperties = {
    ...themeBase,
    mode: 'light',
    backgroundColor: 'white',
    textColor: 'dark',
    defaultGrayColor: 'darkGrey',
    defaultPrimaryColor: 'primary',
    defaultRadius: 'md',
    defaultFont: 'roboto',
    defaultGrayColor2: {
        main: '#DDDDDD',
        light: '#EBEBEB',
        dark: '#CECECE',
        contrast: '#393939',
    },
};

/* EXAMPLE CUSTOM THEME: */
export const appleTheme: ThemeProperties = {
    ...themeBase,
    mode: 'apple',
    backgroundColor: 'white',
    textColor: 'dark',
    defaultGrayColor: 'darkGrey',
    defaultPrimaryColor: 'red',
    defaultRadius: 'full',
    defaultFont: 'poppins',
    defaultGrayColor2: {
        main: '#DDDDDD',
        light: '#EBEBEB',
        dark: '#CECECE',
        contrast: '#393939',
    },
};
