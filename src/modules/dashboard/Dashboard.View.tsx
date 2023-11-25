'use client';

import { Button } from 'ui-system/components/Button';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </UIProvider>
  );
}

export default DashboardView;