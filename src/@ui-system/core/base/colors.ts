export interface IColorTypes {
    main: string;
    light: string;
    dark: string;
    contrastText?: string;
};

export interface IColors {
    primary: IColorTypes;
    secondary: IColorTypes;
    dark: IColorTypes;
    grey: IColorTypes;
    white: IColorTypes;
    black: IColorTypes;
    blue: IColorTypes;
};

export type Color = 'primary' | 'secondary' | 'dark' | 'grey' | 'white' | 'black' | 'blue';
export type ColorType = 'main' | 'light' | 'dark' | 'contrastText';

export const colors: IColors = {
    primary: {
        main: '#26dbb0',
        light: '#7fc6b3',
        dark: '#2e8c71',
    },
    secondary: {
        main: '#27d86e',
        light: '#98cb9c',
        dark: '#2a8536',
    },
    dark: {
        main: '#1c1c1c',
        light: '#252525',
        dark: '',
    },
    grey: {
        main: '#9e9e9e',
        light: '#eaeaea',
        dark: '#323232',
    },
    white: {
        main: '#ffffff',
        light: '',
        dark: '',
    },
    black: {
        main: '#000000',
        light: '',
        dark: '',
    },
    blue: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
    },
};