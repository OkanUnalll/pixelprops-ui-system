'use client';

import { contrastColor} from 'contrast-color';

import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';
import { hexToRgba } from 'ui-system/utils';

function DashboardView() {
  console.log('color: ', hexToRgba('#d32323'));

  return (
    <UIProvider>
      <Navbar />
      
      
    </UIProvider>
  );
}

export default DashboardView;