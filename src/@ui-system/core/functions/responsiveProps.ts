import { cssProps, getResponsive } from 'ui-system/core';
import type { ICSSProps, Size } from 'ui-system/core';

export const responsiveProps = (size: Size, props: ICSSProps): string => {
  let css = '';

  if (props) {
    const cssCode = cssProps(props);
    const responsiveCSS = getResponsive({ [size]: cssCode });

    css += responsiveCSS;
  }

  return css;
};
