'use client';

import ThemeLayout from '@/components/Layout/ThemeLayout';

import { DropdownWrapper, DropdownItem } from 'pixelprops/components/Dropdown';
import Box from 'pixelprops/components/core/Box';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
        <Box $css="position: relative;">
            <DropdownWrapper $css="padding: 1rem; background-color: red;">
                <DropdownItem href="/">Link 1</DropdownItem>
            </DropdownWrapper>
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