import Box from 'ui-system/components/Box';
import ThemeProvider from 'ui-system/layouts/ThemeProvider';

interface Props {
  children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <ThemeProvider>
      <Box
        $height="100%"
        $minHeight="100vh"
        $px="5rem"
        $py="3rem"
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default PageLayout;