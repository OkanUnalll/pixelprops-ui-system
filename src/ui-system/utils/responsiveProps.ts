import { cssProps, responsive } from 'ui-system/utils';
import type { ICSSProps } from 'ui-system/utils';
import type { BreakPoint } from 'ui-system/theme';

export const responsiveProps = (size: BreakPoint, props: ICSSProps): string => {
  let css = '';

  if (props) {
    const cssCode = cssProps(props);
    const responsiveCSS = responsive({ [size]: cssCode });

    css += responsiveCSS;
  }

  return css;
};
