import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

import { cssProps } from 'ui-system/core';

import type { ICSSProps, Color } from 'ui-system/core';

export interface LinkTemplateCSSProps extends ICSSProps, NextLinkProps {
  $underline?: boolean;
  $color?: Color;
}

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
 */
const LinkTemplate = styled(NextLink)<LinkTemplateCSSProps>`
  display: inline-block;
  color: ${({ theme, $color }) => {
    return theme.colors[$color ?? (theme.mode === 'light' ? 'dark' : 'white')].main;
  }};
  text-decoration: ${props => props.$underline ? 'underline' : 'none'};
  &:hover {
    opacity: 0.7;
  };
  ${props => cssProps(props)}
`;

export { LinkTemplate };
