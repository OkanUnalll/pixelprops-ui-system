import { typography } from '@/assets/theme/base/typography';
import type { ITypographyValues } from '@/models/theme/base/typography';

function getVariantCSS(variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text'): string {
  const selectedVariant: ITypographyValues = typography[variant]; 
  
  const css: string = `
    font-size: ${selectedVariant.fontSize};
    font-weight: ${selectedVariant.fontWeight};
    line-height: ${selectedVariant.lineHeight};
  `;

  return css;
}

export { getVariantCSS };