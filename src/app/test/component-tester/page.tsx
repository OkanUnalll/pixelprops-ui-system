'use client';

import ThemeLayout from '@/components/Layout/ThemeLayout';
import Typography from '@/pixelprops/components/core/Typography';

import Box from 'pixelprops/components/core/Box';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
        <Box $css="position: relative;">
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga porro at asperiores. Ut adipisci aperiam veniam perspiciatis laborum sunt,
              exercitationem totam atque numquam? Fugiat in ipsam provident quo dolore enim!
            </Typography>
        </Box>
    </ComponentTesterProvider>
  );
}

function ComponentTesterProvider({ children }: { children: React.ReactNode }) {
    return (
      <ThemeLayout>
          <Box
            $display="flex"
            $alignItems="center"
            $justifyContent="center"
            $width="100%"
            $height="100vh"
            $css="position: relative;"
          >
            {children}
          </Box>
      </ThemeLayout>
    );
  }

export default ComponentTester;