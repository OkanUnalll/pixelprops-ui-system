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

export type ColorKeys = 'primary' | 'secondary' | 'dark' | 'grey' | 'white' | 'black' | 'blue';
export type ColorTypeKeys = 'main' | 'light' | 'dark' | 'contrastText';