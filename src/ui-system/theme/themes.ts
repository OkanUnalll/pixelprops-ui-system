import { Color, Edge } from 'ui-system/core';
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
    backgroundColor: Color;
    defaultPrimaryColor: Color;
    defaultRadius: Edge;
}

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

/* EXAMPLE CUSTOM THEME: */
export const appleTheme: ThemeProperties = {
    ...themeBase,
    mode: 'apple',
    backgroundColor: 'white',
    textColor: 'dark',
    defaultPrimaryColor: 'red',
    defaultRadius: 'full',
};
