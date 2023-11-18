import { typography } from 'ui-system/core';
import type { ITypographyStyles, Typography } from 'ui-system/core';

function getVariantCSS(variant: Typography): string {
  const selectedVariant: ITypographyStyles = typography[variant]; 

  const css: string = `
    font-size: ${selectedVariant.fontSize};
    font-weight: ${selectedVariant.fontWeight};
    line-height: ${selectedVariant.lineHeight};
  `;

  return css;
}

export { getVariantCSS };