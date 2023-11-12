import styled, { keyframes } from 'styled-components';
import CSS from 'csstype';

import { cssProps } from 'ui-system/core';

import type { ICSSProps, Color } from 'ui-system/core';

const progressAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
`;

export interface ProgressTemplateCSSProps extends ICSSProps {
  $timingFunction?: CSS.Property.AnimationTimingFunction;
  $size?: 'small' | 'medium' | 'large';
  $color?: Color;
};

const ProgressTemplate = styled.span<ProgressTemplateCSSProps>`
  display: inline-block;
  border-style: solid;
  border-width: 5px;
  border-radius: 50px;
  background-color: transparent;
  border-color: ${({ theme, $color }) => theme.colors[$color ?? 'primary'].main};
  border-top-color: transparent;
  animation: 1s ${progressAnimation} infinite ${({ $timingFunction }) => $timingFunction ?? 'ease'};

  // Size
  ${({ $size }) => {
    const size = $size ?? 'medium';
    switch (size) {
      case 'small': return `
        width: 30px;
        height: 30px;
      `;
      case 'medium': return `
        width: 50px;
        height: 50px;
      `;
      case 'large': return `
        width: 60px;
        height: 60px;
      `;
    }
  }}

  ${props => cssProps(props)}
`;

export { ProgressTemplate };