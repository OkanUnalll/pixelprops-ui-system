export interface Shadows {
  values: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export interface BreakPoints {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
};

/* - COLORS TYPES - */
export type BaseColors = 'primary' | 'secondary' | 'error' | 'warning' | 'info';

export type ColorsBase = Record<
  BaseColors,
  {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  }
>

export interface Colors {
  common?: {
    black: string;
    white: string;
  };
  base?: ColorsBase;
  grey?: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  text?: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider?: string;
  background?: {
    default: string;
  };
  actions?: {
    disabled: string;
    disabledBackground: string;
  };
}
/* - END - COLORS TYPES - */

export interface Radius {
  values: {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    full: string;
  };
}

export interface Fonts {
  [key: string]: string;
}

export interface Opacities {
  values: {
    hidden: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    visible: number;
    disabled: number;
  };
}

export interface Typographies {
  h1: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  h2: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  h3: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  h4: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  h5: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  h6: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  paragraph: {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
}

export interface Transitions {
  duration: {
    slow: string;
    mid: string;
    fast: string;
  },
  easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    ease: string;
    moment: string;
  },
}

export interface ThemeTokens {
  shadows?: Shadows;
  breakPoints?: BreakPoints;
  colors?: Colors;
  radius?: Radius;
  fonts?: Fonts;
  opacities?: Opacities;
  typography?: Typographies;
  transitions?: Transitions;
};