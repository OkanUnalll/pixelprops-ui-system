export interface IColorsTypes {
    main: string;
    focus?: string;
};

export interface IColors {
    primary: IColorsTypes;
    secondary: IColorsTypes;
    dark: IColorsTypes;
    dark2: IColorsTypes;
    grey: IColorsTypes;
    grey2: IColorsTypes;
    white: IColorsTypes;
    black: IColorsTypes;
};

export type ColorKeys = 'primary' | 'secondary' | 'dark' | 'dark2' | 'grey' | 'grey2' | 'white' | 'black';