'use client';

import { Box } from 'ui-system/components/Box/root';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Box
        responsive={{
          default: {
            color: 'blue',
          },
          lg: {
            color: 'red',
          }
        }}
      >
        Box1
      </Box>
    </UIProvider>
  );
}

export default DashboardView;