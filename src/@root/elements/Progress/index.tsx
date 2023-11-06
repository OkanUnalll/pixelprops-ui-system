import styled, { keyframes } from 'styled-components';
import CSS from 'csstype';

import cssProps from '@root/theme/functions/cssProps';

import type { ICSSProps } from '@root/models/theme/cssprops';
import type { ColorKeys, ColorTypeKeys } from '@root/models/theme/base/colors';

const progressAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
`;

interface ProgressProps extends ICSSProps {
  $timingFunction?: CSS.Property.AnimationTimingFunction;
  $size?: 'small' | 'medium' | 'large';
  $color?: ColorKeys;
  $colorType?: ColorTypeKeys;
};

const Progress = styled.span<ProgressProps>`
  display: inline-block;
  border-style: solid;
  border-width: 5px;
  border-color: ${props => props.theme.colors[props.$color ?? 'primary'][props.$colorType ?? 'main']};
  border-top-color: transparent;
  border-radius: 50%;
  animation: 1s ${progressAnimation} infinite ${props => props.$timingFunction ?? 'ease'};
  background-color: transparent;

  // Size
  ${props => {
    const size = props.$size;

    if (size === 'small') return `
      width: 30px;
      height: 30px;
    `;

    if (size === 'medium' || !size) return `
      width: 50px;
      height: 50px;
    `;

    if (size === 'large') return `
      width: 60px;
      height: 60px;
    `;
  }}

  ${props => cssProps(props)}
`;

export default Progress;