'use client';

import Typography from '@root/elements/Typography';
import Box from '@root/elements/Box';

import PageLayout from '@/layouts/PageLayout';

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
      <PageLayout>
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
      </PageLayout>
    );
  }

export default ComponentTester;