import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '@pixelprops/theme/GlobalStyle';
import theme from '@pixelprops/theme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </StyledThemeProvider>
  );  
}

export default ThemeProvider;
