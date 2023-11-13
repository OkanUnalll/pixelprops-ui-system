import { cssProps, getResponsive } from 'ui-system/core';
import type { ICSSProps, BreakPoint } from 'ui-system/core';

export const responsiveProps = (size: BreakPoint, props: ICSSProps): string => {
  let css = '';

  if (props) {
    const cssCode = cssProps(props);
    const responsiveCSS = getResponsive({ [size]: cssCode });

    css += responsiveCSS;
  }

  return css;
};
