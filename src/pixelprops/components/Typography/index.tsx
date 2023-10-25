import styled from 'styled-components';

import { ICSSProps } from '@/models/theme/base/cssProps';
import cssProps from '@/assets/theme/base/cssProps';

interface TypographyAttrs extends ICSSProps {
  $variant?: string;
  $weight?: string;
}

const Typography = styled.span.attrs<TypographyAttrs>(props => ({
  ...props,
  $variant: props.$variant ?? 'p',
  $weight: props.$weight || '500',
  
}))`
  ${props => props.$css}
  ${props => cssProps(props)}
  font-size: ${
    props => props.$variant === 'h1' ? '30px' :
    props.$variant === 'h2' ? '25px' :
    props.$variant === 'h3' ? '20px' :
    props.$variant === 'h4' ? '16px' :
    props.$variant === 'h5' ? '12px' :
    props.$variant === 'h6' ? '9px' :
    props.$variant === 'p' ? '14px' : ''
  };
  font-weight: ${props => props.$weight};
`;

export default Typography;
