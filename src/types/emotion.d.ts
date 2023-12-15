import '@emotion/react';

import { ThemeProperties } from 'ui-system/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeProperties {}
}