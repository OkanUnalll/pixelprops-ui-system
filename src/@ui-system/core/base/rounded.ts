export interface IRounded {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
}

export type Rounded = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';

const rounded: IRounded = {
  sm: '2px',
  md: '4px',
  lg: '6px',
  xl: '8px',
  xxl: '10px',
  full: '50px',
};

export { rounded };
