import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// lib modules
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import GlobalStyle from '@root/theme/layouts/ThemeProvider/GlobalStyle';

import { darkTheme, lightTheme } from '@root/theme';

interface Props {
    children: React.ReactNode;
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
