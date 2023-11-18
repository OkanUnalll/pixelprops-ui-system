export interface TypographyStyles {
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string,
}

export interface Typographies {
    h1: TypographyStyles;
    h2: TypographyStyles;
    h3: TypographyStyles;
    h4: TypographyStyles;
    h5: TypographyStyles;
    h6: TypographyStyles;
    text: TypographyStyles;
};

export type Typography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';

export const typography: Typographies = {
    h1: {
        fontSize: '48px',
        fontWeight: '500',
        lineHeight: '1.25',
    },
    h2: {
        fontSize: '36px',
        fontWeight: '500',
        lineHeight: '1.3',
    },
    h3: {
        fontSize: '30px',
        fontWeight: '500',
        lineHeight: '1.375',
    },
    h4: {
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '1.375',
    },
    h5: {
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '1.375',
    },
    h6: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.625',
    },
    text: {
        fontSize: '13px',
        fontWeight: '300',
        lineHeight: '1.3',
    },
};