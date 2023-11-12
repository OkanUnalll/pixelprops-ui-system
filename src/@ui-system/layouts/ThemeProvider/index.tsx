import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// lib modules
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import GlobalStyle from 'ui-system/layouts/GlobalStyle';

import { darkTheme, lightTheme } from 'ui-system/core';

interface Props {
    readonly children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <StyledThemeProvider theme={darkTheme}>
        <GlobalStyle />
        {children}
    </StyledThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default ThemeProvider;
