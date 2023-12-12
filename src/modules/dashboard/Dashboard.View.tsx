'use client';

import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';
import { Color } from 'ui-system/__test__/features/application/Color.Feature';

function DashboardView() {
  const green = new Color({ color: '#264dc1' });

  console.log('contrast green : ', green.toContrast());

  return (
    <UIProvider>
      <Navbar />
      
      
    </UIProvider>
  );
}

export default DashboardView;