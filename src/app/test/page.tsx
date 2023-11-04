'use client';

import Box from '@root/elements/Box';
import WidgetContainer from '@root/elements/WidgetContainer';
import Typography from '@root/elements/Typography';

import PageLayout from '@/layouts/PageLayout';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
        <Box $display="flex" $css="position: relative;">
          <WidgetContainer $width="500px" title="Title">
            <Typography>
              hello
            </Typography>
          </WidgetContainer>
        </Box>
    </ComponentTesterProvider>
  );
}

function ComponentTesterProvider({ children }: { readonly children: React.ReactNode }) {
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