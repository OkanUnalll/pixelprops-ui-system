// lib modules
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';

import ThemeProvider from '@/layouts/ThemeLayout/ThemeProvider';

interface Props {
    children: React.ReactNode;
};

function ThemeLayout({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default ThemeLayout;