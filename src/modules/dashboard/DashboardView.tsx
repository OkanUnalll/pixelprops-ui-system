'use client';

import PageLayout from '@/layouts/PageLayout';
import Banner from 'ui-system/components/Banner';
import Box from 'ui-system/components/Box';
import Button from 'ui-system/components/Button';
import Icon from 'ui-system/components/Icon';
import Navbar from 'ui-system/components/Navbar';
import Tooltip from 'ui-system/components/Tooltip';
import Typography from 'ui-system/components/Typography';

function DashboardView() {  
  return (
    <PageLayout>
      <Navbar />
      <Banner
        $backgroundColor="transparent"
        $size="full"
        src="/images/light.png"
        alt="Pixel Props UI System"
      >
        <Typography
          $textAlign="center" 
          $px={10} 
          $lineHeight="1.2" 
          $css="font-size: 70px;" 
          $responsive={{
            md: 'font-size: 45px;',
            sm: 'font-size: 30px;',
          }}
          $md={{
            $px: 5,
          }}
          $sm={{
            $px: 2,
          }}
        >
          Develop Customizable and Fast Web Applications
        </Typography>
        <Box $display="flex" $justifyContent="center" $alignItems="center" $gap={0.6} $my={3}>
          <Typography $color="primary" $variant="h1" $fontWeight="600">PIXEL PROPS</Typography>
          <Typography $variant="h1" $fontFamily="montserrat" $fontWeight="300">UI SYSTEM</Typography>
        </Box>
        <Box $display="flex" $justifyContent="center">
          <Tooltip title="View Components">
            <Button
              $size="large"
              iconRight={<Icon name="google_arrow_right" $size="small" />}
              href="/components"
            >
              Get Started
            </Button>
          </Tooltip>
        </Box>
      </Banner>
    </PageLayout>
  );
}

export default DashboardView;