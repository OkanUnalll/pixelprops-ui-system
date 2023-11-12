import InlineSVG from 'react-inlinesvg';
import styled from 'styled-components';
import type { Props as InlineSVGProps } from 'react-inlinesvg';

import {
  cssProps,
  type Color,
  type ICSSProps
} from 'ui-system/core';

export interface IconTemplateCSSProps extends ICSSProps, InlineSVGProps {
  $color?: Color;
  $size?: 'small' | 'medium' | 'large';
};

const IconTemplate = styled(InlineSVG)<IconTemplateCSSProps>`
  display: inline-block;
  fill: ${({ $color, theme }) => {
    const color = theme.mode === 'light' ? theme.colors.dark.main : theme.colors.white.main;
    return $color ? theme.colors[$color].main : color;
  }};
  
  ${({ $size }) => {
    const size = $size ?? 'medium';

    switch(size) {
      case 'small': return `
        width: 22px;
        height: 22px;
      `;
      case 'medium': return `
        width: 30px;
        height: 30px;
      `;
      case 'large': return `
        width: 37px;
        height: 37px;
      `;
    }
  }}
  ${props => cssProps(props)}
`;

export { IconTemplate };