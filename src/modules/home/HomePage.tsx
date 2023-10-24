import Box from '@/components/Box';
import PageLayout from '@/components/Layout/PageLayout';
import ThemeLayout from '@/components/Layout/ThemeLayout';

function HomePage() {
  return (
    <ThemeLayout>
        <PageLayout>
            <Box>
                Hello World
            </Box>
        </PageLayout>
    </ThemeLayout>
  );  
}

export default HomePage;
