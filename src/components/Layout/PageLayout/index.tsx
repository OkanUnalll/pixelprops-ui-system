import Box from '@/components/Box';

interface Props {
    children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <Box
      $width="100vh"
      $height="100%"
      $minHeight="100vh"
    >
        Hello from page layout
        {children}
    </Box>
  );
}

export default PageLayout;