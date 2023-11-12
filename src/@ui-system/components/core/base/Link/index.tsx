import NextLink from 'next/link';
import styled from 'styled-components';

import { ICSSProps } from '@root/models/theme/cssprops';

import cssProps from '@root/theme/functions/cssProps';
import type { ColorKeys, ColorTypeKeys } from '@/@root/models/theme/base/colors';

interface LinkProps extends ICSSProps {
  $underline?: boolean;
  $color?: ColorKeys;
  $colorType?: ColorTypeKeys;
}

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
 */
const Link = styled(NextLink)<LinkProps>`
  color: ${props => {
    const theme = props.theme.mode;
    return props.theme.colors[
      props.$color ?? (theme === 'light' ? 'dark' : 'white')
    ][
      props.$colorType ?? 'main'
    ];
  }};
  text-decoration: ${props => props.$underline ? 'underline' : 'none'};
  &:hover {
    opacity: 0.7;
  };
  ${props => cssProps(props)}
`;

export default Link;
