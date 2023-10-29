import { IColors } from '@root/models/theme/base/colors';
import { ITypography } from '@root/models/theme/base/typography';

export interface ITheme {
    colors: IColors;
    typography: ITypography;
};

export type {
    IColors,
    ITypography,
};