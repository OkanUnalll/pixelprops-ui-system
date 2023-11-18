import {
    boxShadows,
    breakPoints,
    colors,
    edges,
    fonts,
    opacities,
    transitions,
    typography,
} from '..';

import type {
    BoxShadows,
    BreakPoints,
    Colors,
    Edges,
    Fonts,
    Opacities,
    Transitions,
    Typographies,
} from '..';

export interface BaseThemeProperties {
  boxShadows: BoxShadows;
  breakPoints: BreakPoints;
  colors: Colors;
  edges: Edges;
  fonts: Fonts;
  opacities: Opacities;
  transitions: Transitions;
  typography: Typographies;
};

export const themeBase: BaseThemeProperties = {
    boxShadows,
    breakPoints,
    colors,
    edges,
    fonts,
    opacities,
    transitions,
    typography,
};

export type ThemeMode = 'light' | 'dark';

export interface ThemeProperties extends BaseThemeProperties {
    mode: ThemeMode;
    textColor: string;
    backgroundColor: string;
}