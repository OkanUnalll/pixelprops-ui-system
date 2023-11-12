import styled from 'styled-components';
import CSS from 'csstype';

import { cssProps } from 'ui-system/core';
import type { ICSSProps, Color, Typography } from 'ui-system/core';

import { getVariantCSS } from 'ui-system/components/core/base/Typography/helpers';

interface Limit {
  width?: CSS.Property.Width;
  maxWidth?: CSS.Property.MaxWidth;
  lineClamp?: CSS.Property.WebkitLineClamp;
}

export interface TypographyTemplateCSSProps extends ICSSProps {
  $variant?: Typography;
  $color?: Color;
  $limit?: Limit;
  $fontWeight?: CSS.Property.FontWeight;
  $fontSize?: CSS.Property.FontSize;
}

const TypographyTemplate = styled.span.attrs<TypographyTemplateCSSProps>(({ theme, $variant, $color }) => ({
    $variant: $variant ?? 'text',
    $color: theme.colors[$color ?? (theme.mode === 'light' ? 'dark' : 'white')].main as Color,
}))`
  display: block;
  font-weight: ${({ $fontWeight }) => $fontWeight ?? '500'};
  color: ${({ $color }) => $color};

  // $fontSize Prop Styles
  ${({ $fontSize }) => $fontSize ? `font-size: ${$fontSize}` : ''}
  
  // $limit Prop Styles
  ${props => {
    const limit = props.$limit;

    if (limit) {
      // ref: https://css-tricks.com/almanac/properties/l/line-clamp/
      return `
        display: -webkit-box;
        -webkit-line-clamp: ${limit.lineClamp ?? 1};
        -webkit-box-orient: vertical;
        overflow: hidden;
        width: ${limit.width ?? '100%'};
        max-width: ${limit.maxWidth ?? '100%'};
      `;
    }
  }}

  ${({ $variant }) => getVariantCSS($variant as Typography)}
  ${props => cssProps(props)}
`;

export { TypographyTemplate };
