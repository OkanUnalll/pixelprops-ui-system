import InlineSVG from 'react-inlinesvg';
import styled from 'styled-components';
import type { Props as InlineSVGProps } from 'react-inlinesvg';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

export interface SVGIconCSSProps extends ICSSProps, InlineSVGProps {
    src: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
};

const SVGIcon = styled(InlineSVG)<SVGIconCSSProps>`
  fill: ${({ fill, theme }) => {
    const color = theme.mode === 'light' ? theme.colors.dark.main : theme.colors.white.main;
    return fill ?? color;
  }}
  ${props => cssProps(props)}
`;

export { SVGIcon };