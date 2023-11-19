import '@emotion/react';

import { ThemeProperties } from 'ui-system/core';

declare module '@emotion/react' {
  export interface Theme extends ThemeProperties {}
}