import { Box } from 'pixelprops/components/core';
import PageLayout from '@/components/Layout/PageLayout';
import ThemeLayout from '@/components/Layout/ThemeLayout';
import PageNavbar from '@/components/Navbars/PageNavbar';

function HomePage() {
  return (
    <ThemeLayout>
        <PageLayout>
            <PageNavbar />
            <Box $mt="2rem">
                Hello World
            </Box>
        </PageLayout>
    </ThemeLayout>
  );  
}

export default HomePage;
