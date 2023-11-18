import '@emotion/react';

import { Theme as AppTheme } from 'ui-system/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}