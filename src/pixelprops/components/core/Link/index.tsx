import NextLink from 'next/link';
import styled from 'styled-components';

import { ICSSProps } from '@/models/theme/cssProps';

import { colors } from '@/assets/theme';
import cssProps from '@/assets/theme/functions/cssProps';

interface LinkProps extends ICSSProps {
  $underline?: boolean;
  $color?: string;
}

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
 */
const Link = styled(NextLink)<LinkProps>`
  color: ${props => props.$color ?? colors.primary.main};
  text-decoration: ${props => props.$underline ? 'underline' : 'none'};
  &:hover {
    color: ${colors.primary.focus}
  };
  ${props => cssProps(props)}
  ${props => props.$css}
`;

export default Link;
