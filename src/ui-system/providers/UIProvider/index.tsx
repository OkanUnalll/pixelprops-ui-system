'use client';

import { ThemeProvider } from '../ThemeProvider';

interface Props {
  readonly children?: React.ReactNode;
}

function UIProvider({ children }: Props) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export { UIProvider };