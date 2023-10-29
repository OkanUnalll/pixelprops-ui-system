import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '@/layouts/ThemeLayout/GlobalStyle';
import theme from '@root/theme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </StyledThemeProvider>
  );  
}

export default ThemeProvider;
