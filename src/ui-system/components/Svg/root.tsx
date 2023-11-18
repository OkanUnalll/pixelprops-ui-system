import InlineSVG from 'react-inlinesvg';
import styled from 'styled-components';
import type { Props as InlineSVGProps } from 'react-inlinesvg';

import { cssProps } from 'ui-system/core';
import type { ICSSProps, Color } from 'ui-system/core';

export interface SVGIconCSSProps extends ICSSProps, InlineSVGProps {
  $color?: Color;
};

const SVGIcon = styled(InlineSVG)<SVGIconCSSProps>`
  fill: ${({ $color, theme }) => theme.colors[$color ?? (theme.mode === 'light' ? 'dark' : 'white')].main}

  ${props => cssProps(props)}
`;

export { SVGIcon };