import {
  boxShadows,
  breakPoints,
  colors,
  edges,
  fonts,
  opacities,
  transitions,
  typography,
} from 'ui-system/core';

import type {
  BoxShadows,
  BreakPoints,
  Colors,
  Edges,
  Fonts,
  Opacities,
  Transitions,
  Typographies,
} from 'ui-system/core';

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