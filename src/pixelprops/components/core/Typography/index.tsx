import styled from 'styled-components';

import { ICSSProps } from '@/models/theme/cssProps';
import cssProps from '@/assets/theme/functions/cssProps';

import { getVariantCSS } from 'pixelprops/components/core/Typography/helpers';

interface TypographyProps extends ICSSProps {
  $variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text';
  $fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  $color?: string;
}

const Typography = styled.span<TypographyProps>`
  font-weight: ${props => props.$fontWeight ?? '500'};
  color: ${props => props.$color};
  ${props => getVariantCSS(props.$variant ?? 'text')}
  ${props => cssProps(props)}
  ${props => props.$css}
`;

export default Typography;
