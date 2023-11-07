import { IColors } from '@root/models/theme/base/colors';
import { ITypography } from '@root/models/theme/base/typography';
import { IBoxShadow } from '@root/models/theme/base/boxShadow';
import { IOpacity } from '@root/models/theme/base/opacity';
import { ITransition } from '@root/models/theme/base/transition';

export interface ITheme {
    body?: string;
    text?: string;
    mode?: 'light' | 'dark';
    colors: IColors;
    typography: ITypography;
    boxShadows: IBoxShadow;
    opacity: IOpacity;
    transition: ITransition;
};

export type {
    IColors,
    ITypography,
};