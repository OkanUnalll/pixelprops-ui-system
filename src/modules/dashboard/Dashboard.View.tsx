'use client';

import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';
import { Color } from 'ui-system/__test__/features/application/Color.Feature';
import { ColorHero } from 'ui-system/__test__/features';
import { Box } from 'ui-system/components';

function DashboardView() {
  const blue = new Color('#264dc1');

  console.log('contrast blue : ', blue.contrast);

  const blueHSLCode = ColorHero.hexToHslCodes(blue.main);
  const blueHSL = ColorHero.hexToHsl(blue.main);

  const blueHSLCodeLight = { h: blueHSLCode.h, s: blueHSLCode.s, l: 60 };
  const blueHSLCodeDark = { h: blueHSLCode.h, s: blueHSLCode.s, l: 30 };
  const blueHSLLight = ColorHero.hslToRgb(blueHSLCodeLight.h, blueHSLCodeLight.s, blueHSLCodeLight.l);
  const blueHSLDark = ColorHero.hslToRgb(blueHSLCodeDark.h, blueHSLCodeDark.s, blueHSLCodeDark.l);

  console.log('blue hsl code: ', blueHSLCode);
  console.log('blue hsl: ', blueHSL);

  return (
    <UIProvider>
      <Navbar />
      
      <Box
        css={{
          width: '50px',
          height: '50px',
          backgroundColor: blueHSL,
        }}
      />
      <Box
        css={{
          width: '50px',
          height: '50px',
          backgroundColor: blueHSLDark,
        }}
      />
      <Box
        css={{
          width: '50px',
          height: '50px',
          backgroundColor: blueHSLLight,
        }}
      />
    </UIProvider>
  );
}

export default DashboardView;