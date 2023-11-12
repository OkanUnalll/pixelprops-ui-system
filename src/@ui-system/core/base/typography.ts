export interface ITypographyStyles {
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string,
  }
  
  export interface ITypography {
      h1: ITypographyStyles;
      h2: ITypographyStyles;
      h3: ITypographyStyles;
      h4: ITypographyStyles;
      h5: ITypographyStyles;
      h6: ITypographyStyles;
      text: ITypographyStyles;
  };

export const typography: ITypography = {
    h1: {
        fontSize: '30px',
        fontWeight: '',
        lineHeight: '',
    },
    h2: {
        fontSize: '25px',
        fontWeight: '',
        lineHeight: '',
    },
    h3: {
        fontSize: '20px',
        fontWeight: '',
        lineHeight: '',
    },
    h4: {
        fontSize: '16px',
        fontWeight: '',
        lineHeight: '',
    },
    h5: {
        fontSize: '12px',
        fontWeight: '',
        lineHeight: '',
    },
    h6: {
        fontSize: '9px',
        fontWeight: '',
        lineHeight: '',
    },
    text: {
        fontSize: '14px',
        fontWeight: '',
        lineHeight: '',
    },
};