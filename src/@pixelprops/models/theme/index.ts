import { IColors } from '@pixelprops/models/theme/base/colors';
import { ITypography } from '@pixelprops/models/theme/base/typography';

export interface ITheme {
    colors: IColors;
    typography: ITypography;
};

export type {
    IColors,
    ITypography,
};