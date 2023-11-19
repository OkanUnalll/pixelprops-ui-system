'use client';

import { Box } from 'ui-system/components/Box/root';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {  
  return (
    <UIProvider>
      <Box>
        Box1
      </Box>
    </UIProvider>
  );
}

export default DashboardView;