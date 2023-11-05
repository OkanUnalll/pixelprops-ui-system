'use client';

import Box from '@root/elements/Box';

import DataTable from '@root/elements/Tables/DataTable';

import PageLayout from '@/layouts/PageLayout';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
        <Box $display="flex" $css="position: relative;">
          <DataTable $css="width: 800px;" />
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