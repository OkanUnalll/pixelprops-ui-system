import styled from 'styled-components';
import CSS from 'csstype';

import { ICSSProps } from '@root/models/theme/cssprops';

import cssProps from '@root/theme/functions/cssProps';

import { colors } from '@root/theme';

import { getVariantCSS } from '@root/elements/Typography/helpers';

import type { ColorKeys } from '@root/models/theme/base/colors';

interface Limit {
  width?: CSS.Property.Width;
  maxWidth?: CSS.Property.MaxWidth;
  lineClamp?: CSS.Property.WebkitLineClamp;
}

interface TypographyProps extends ICSSProps {
  $variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';
  $fontWeight?: CSS.Property.FontWeight;
  $fontSize?: CSS.Property.FontSize;
  $color?: ColorKeys;
  $limit?: Limit;
}

const Typography = styled.span<TypographyProps>`
  display: inline-block;
  color: ${props => colors[props.$color ?? 'white'].main};
  font-weight: ${props => props.$fontWeight ?? '500'};
  ${props => props.$fontSize ? `font-size: ${props.$fontSize}` : ''}
  
  // Limit
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

  ${props => getVariantCSS(props.$variant ?? 'text')}
  ${props => cssProps(props)}
`;

export default Typography;
