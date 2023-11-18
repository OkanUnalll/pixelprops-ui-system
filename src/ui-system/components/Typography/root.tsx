import styled from 'styled-components';
import CSS from 'csstype';

import { cssProps } from 'ui-system/core';
import type { ICSSProps, Color, Typography, Font } from 'ui-system/core';

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
  $fontFamily?: Font;
  $textAlign?: CSS.Property.TextAlign;
  $lineHeight?: CSS.Property.LineHeight;
}

const TypographyTemplate = styled.span.attrs<TypographyTemplateCSSProps>(({ theme, $variant, $color }) => ({
    $variant: $variant ?? 'text',
    $color: theme.colors[$color ?? (theme.mode === 'light' ? 'dark' : 'white')].main as Color,
}))`
  display: block;
  font-weight: ${({ $fontWeight }) => $fontWeight ?? '500'};
  color: ${({ $color }) => $color};

  // $textAlign Prop Styles
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}

  // $lineHeight Prop Styles
  ${({ $lineHeight }) => $lineHeight && `line-height: ${$lineHeight};`}

  // $fontSize Prop Styles
  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}

  // $fontFamily Prop Styles
  ${({ $fontFamily }) => $fontFamily && `font-family: ${$fontFamily};`}
  
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
