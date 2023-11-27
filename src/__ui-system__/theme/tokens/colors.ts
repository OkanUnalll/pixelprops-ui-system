export interface ColorTypes {
    main: string;
    light: string;
    dark: string;
    contrastText?: string;
};

export interface Colors {
    primary: ColorTypes;
    secondary: ColorTypes;
    dark: ColorTypes;
    light: ColorTypes;
    grey: ColorTypes;
    white: ColorTypes;
    black: ColorTypes;
    blue: ColorTypes;
    purple: ColorTypes;
    red: ColorTypes;
    yellow: ColorTypes;
    green: ColorTypes;
};

export type Color = 'primary' | 'secondary' | 'dark' | 'light' | 'grey' | 'white' | 'black' | 'blue' | 'purple' | 'red' | 'yellow' | 'green';
export type ColorType = 'main' | 'light' | 'dark' | 'contrastText';

export const colors: Colors = {
    primary: {
        main: '#26dbb0',
        light: '#7fc6b3',
        dark: '#2e8c71',
        contrastText: '#0C382D',
    },
    secondary: {
        main: '#27d86e',
        light: '#98cb9c',
        dark: '#2a8536',
        contrastText: '#0A2A17',
    },
    dark: {
        main: '#1c1c1c',
        light: '#252525',
        dark: '',
        contrastText: '#ACACAC',
    },
    light: {
        main: '#e8e8e8',
        light: '',
        dark: '#d1d1d1',
        contrastText: '#000000',
    },
    grey: {
        main: '#9e9e9e',
        light: '#eaeaea',
        dark: '#7f7f7f',
        contrastText: '#111111',
    },
    white: {
        main: '#ffffff',
        light: '',
        dark: '',
        contrastText: '#585858',
    },
    black: {
        main: '#000000',
        light: '',
        dark: '',
        contrastText: '#ffffff',
    },
    blue: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#ffffff',
    },
    purple: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrastText: '#ffffff',
    },
    red: {
        main: '#d32f2f',
        light: '#ef5350',
        dark: '#c62828',
        contrastText: '#ffffff',
    },
    yellow: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrastText: '#000000',
    },
    green: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
        contrastText: '#ffffff',
    }
};