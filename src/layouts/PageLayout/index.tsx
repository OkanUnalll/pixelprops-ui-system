import Box from 'ui-system/components/Box';
import ThemeProvider from 'ui-system/layouts/ThemeProvider';

interface Props {
  readonly children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <Box
        $height="100%"
        $minHeight="100vh"
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default PageLayout;