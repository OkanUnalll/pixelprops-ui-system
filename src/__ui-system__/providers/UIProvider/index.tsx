'use client';

import { ThemeProvider } from 'ui-system/theme';

interface Props {
  readonly children?: React.ReactNode;
}

/**
 * In order to use all the features in the UI System, you must use
 * this wrapper on all your pages with Client Side Render.
*/
function UIProvider({ children }: Props) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export { UIProvider };