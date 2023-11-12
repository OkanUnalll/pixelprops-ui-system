export interface ISize {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
};

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const size: ISize = {
  xs: '400px', // small screen mobile
  sm: '600px', // mobile screen
  md: '900px', // tablets
  lg: '1280px', // laptops
  xl: '1440px', // desktop / monitors
  xxl: '1920px', // big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};