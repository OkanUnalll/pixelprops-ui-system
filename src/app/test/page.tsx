'use client';

import Box from '@root/elements/Box';

import PageLayout from '@/layouts/PageLayout';
import Button from '@root/elements/Button';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
        <Box $display="flex" $css="position: relative;">
          <Button>
            Button
          </Button>
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