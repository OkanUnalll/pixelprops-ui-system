export interface Edges {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
}

export type Edge = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

export const edges: Edges = {
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '10px',
  xl: '14px',
  xxl: '18px',
  full: '50px',
};
