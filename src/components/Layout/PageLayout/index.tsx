import Box from 'pixelprops/components/Box';

interface Props {
    children: React.ReactNode;
};

function PageLayout({ children }: Props) {
  return (
    <Box
      $width="100vh"
      $height="100%"
      $minHeight="100vh"
      $px="5rem"
      $py="3rem"
    >
        {children}
    </Box>
  );
}

export default PageLayout;