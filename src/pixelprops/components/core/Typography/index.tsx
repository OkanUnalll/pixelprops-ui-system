import styled from 'styled-components';
import CSS from 'csstype';

import { ICSSProps } from '@/models/theme/cssProps';
import cssProps from '@/assets/theme/functions/cssProps';

import { getVariantCSS } from 'pixelprops/components/core/Typography/helpers';

interface Limit {
  width?: CSS.Property.Width;
  maxWidth?: CSS.Property.MaxWidth;
  lineClamp?: CSS.Property.WebkitLineClamp;
}

interface TypographyProps extends ICSSProps {
  $variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';
  $fontWeight?: CSS.Property.FontWeight;
  $color?: string;
  $limit?: Limit;
}

const Typography = styled.span<TypographyProps>`
  ${
    props => {
      if (props.$limit) {
        return `
          display: -webkit-box;
          -webkit-line-clamp: ${props.$limit.lineClamp ?? 1};
          -webkit-box-orient: vertical;
          overflow: hidden;
          width: ${props.$limit.width ?? '100%'};
          max-width: ${props.$limit.maxWidth ?? '100%'};
        `;
      }
    }
  }

  font-weight: ${props => props.$fontWeight ?? '500'};
  color: ${props => props.$color};
  ${props => getVariantCSS(props.$variant ?? 'text')}
  ${props => cssProps(props)}
`;

export default Typography;
