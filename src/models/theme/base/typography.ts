export interface ITypographyValues {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string,
}

export interface ITypography {
    h1: ITypographyValues;
    h2: ITypographyValues;
    h3: ITypographyValues;
    h4: ITypographyValues;
    h5: ITypographyValues;
    h6: ITypographyValues;
    text: ITypographyValues;
};