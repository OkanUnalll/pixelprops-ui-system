'use client';

import { Box } from 'ui-system/components/Box/root';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Box
        backgroundColor={{
          default: 'red',
          md: 'blue',
        }}
      >
        Box1
      </Box>
    </UIProvider>
  );
}

export default DashboardView;