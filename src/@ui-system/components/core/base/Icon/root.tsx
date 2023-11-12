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

  path {
    width: 100%;
  }
  
  ${({ $size }) => {
    const size = $size ?? 'medium';

    switch(size) {
      case 'small': return `
        width: 13px;
        height: 13px;
      `;
      case 'medium': return `
        width: 18px;
        height: 18px;
      `;
      case 'large': return `
        width: 23px;
        height: 23px;
      `;
    }
  }}
  ${props => cssProps(props)}
`;

export { IconTemplate };