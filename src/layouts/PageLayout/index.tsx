import Box from '@root/elements/Box';
import ThemeLayout from '@/layouts/ThemeLayout';

interface Props {
    children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <ThemeLayout>
      <Box
        $height="100%"
        $minHeight="100vh"
        $px="5rem"
        $py="3rem"
      >
        {children}
      </Box>
    </ThemeLayout>
  );
}

export default PageLayout;