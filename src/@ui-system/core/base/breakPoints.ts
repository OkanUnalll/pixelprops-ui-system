export interface IBreakPoint {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const breakPoint: IBreakPoint = {
  xs: 400, // small screen mobile
  sm: 600, // mobile screen
  md: 900, // tablets
  lg: 1280, // laptops
  xl: 1440, // desktop / monitors
  xxl: 1920, // big screens
};

export interface IDevice {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

export const device: IDevice = {
  xs: `(max-width: ${breakPoint.xs}px)`,
  sm: `(max-width: ${breakPoint.sm}px)`,
  md: `(max-width: ${breakPoint.md}px)`,
  lg: `(max-width: ${breakPoint.lg}px)`,
  xl: `(max-width: ${breakPoint.xl}px)`,
  xxl: `(max-width: ${breakPoint.xxl}px)`,
};