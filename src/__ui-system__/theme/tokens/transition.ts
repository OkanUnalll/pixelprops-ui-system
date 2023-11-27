export interface Transitions {
  slow: string;
  mid: string;
  fast: string;
  moment: string;
};

export type Transition = 'slow' | 'mid' | 'fast' | 'moment';

export const transitions: Transitions = {
  slow: 'all .7s ease',
  mid: 'all .3s ease',
  fast: 'all .1s ease',
  moment: 'all .1s cubic-bezier(0, 1.63, 0.56, 1.85)',
};