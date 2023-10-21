import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '@/assets/theme/GlobalStyle';
import theme from '@/assets/theme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </StyledThemeProvider>
  );  
}

export default ThemeProvider;
