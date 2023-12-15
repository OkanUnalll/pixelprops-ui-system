export interface BreakPoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BreakPoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const breakPoints: BreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const devices = {
  sm: `@media (min-width: ${breakPoints.sm}px)`,
  md: `@media (min-width: ${breakPoints.md}px)`,
  lg: `@media (min-width: ${breakPoints.lg}px)`,
  xl: `@media (min-width: ${breakPoints.xl}px)`,
  xxl: `@media (min-width: ${breakPoints.xxl}px)`,
};
