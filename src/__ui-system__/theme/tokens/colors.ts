export interface ColorTypes {
    main: string;
    light: string;
    dark: string;
    contrast: string;
};

export interface Colors {
    primary: ColorTypes;
    secondary: ColorTypes;
    dark: ColorTypes;
    light: ColorTypes;
    lightGrey: ColorTypes;
    darkGrey: ColorTypes;
    grey: ColorTypes;
    white: ColorTypes;
    black: ColorTypes;
    blue: ColorTypes;
    purple: ColorTypes;
    red: ColorTypes;
    yellow: ColorTypes;
    green: ColorTypes;
};

export type Color = 'primary'
| 'secondary'
| 'dark'
| 'light'
| 'grey'
| 'lightGrey'
| 'darkGrey'
| 'white'
| 'black'
| 'blue'
| 'purple'
| 'red'
| 'yellow'
| 'green';
export type ColorType = 'main' | 'light' | 'dark' | 'contrast';

export const colors: Colors = {
    primary: {
        main: '#26dbb0',
        light: '#7fc6b3',
        dark: '#2e8c71',
        contrast: '#0C382D',
    },
    secondary: {
        main: '#27d86e',
        light: '#98cb9c',
        dark: '#2a8536',
        contrast: '#0A2A17',
    },
    dark: {
        main: '#1c1c1c',
        light: '#252525',
        dark: '',
        contrast: '#ACACAC',
    },
    light: {
        main: '#e8e8e8',
        light: '',
        dark: '#d1d1d1',
        contrast: '#000000',
    },
    grey: {
        main: '#8e8e8e',
        light: '#bfbfbf',
        dark: '#757575',
        contrast: '#111111',
    },
    lightGrey: {
        main: '#DDDDDD',
        light: '#F1F1F1',
        dark: '#BABABA',
        contrast: '#000000',
    },
    darkGrey: {
        main: '#6b6b6b',
        light: '#757575',
        dark: '#444444',
        contrast: '#ffffff',
    },
    white: {
        main: '#ffffff',
        light: '#ffffff',
        dark: '#E7E7E7',
        contrast: '#585858',
    },
    black: {
        main: '#000000',
        light: '#1B1B1B',
        dark: '#000000',
        contrast: '#ffffff',
    },
    blue: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrast: '#ffffff',
    },
    purple: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
        contrast: '#ffffff',
    },
    red: {
        main: '#d32f2f',
        light: '#ef5350',
        dark: '#c62828',
        contrast: '#ffffff',
    },
    yellow: {
        main: '#ed6c02',
        light: '#ff9800',
        dark: '#e65100',
        contrast: '#000000',
    },
    green: {
        main: '#2e7d32',
        light: '#4caf50',
        dark: '#1b5e20',
        contrast: '#ffffff',
    }
};