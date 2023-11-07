import Box from '@root/elements/Box';
import ThemeProvier from '@root/theme/layouts/ThemeProvider';

interface Props {
    children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <ThemeProvier>
      <Box
        $height="100%"
        $minHeight="100vh"
        $px="5rem"
        $py="3rem"
      >
        {children}
      </Box>
    </ThemeProvier>
  );
}

export default PageLayout;