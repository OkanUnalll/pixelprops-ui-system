export interface IColorsTypes {
    main: string;
    focus?: string;
};

export interface IColors {
    primary: IColorsTypes;
    secondary: IColorsTypes;
    dark: IColorsTypes;
    grey: IColorsTypes;
    grey2: IColorsTypes;
    white: IColorsTypes;
    black: IColorsTypes;
};

export type ColorKeys = 'primary' | 'secondary' | 'dark' | 'grey' | 'grey2' | 'white' | 'black';