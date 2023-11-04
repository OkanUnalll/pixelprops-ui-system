import styled from 'styled-components';

import type { ICSSProps } from '@root/models/theme/cssprops';
import type { ColorKeys } from '@root/models/theme/base/colors';

import cssProps from '@root/theme/functions/cssProps';

import { colors } from '@root/theme';

interface DividerProps extends ICSSProps {
  $variant?: 'contained' | 'to-left' | 'to-right' | 'center';
  $weight?: 'mediun' | 'large' | 'xlarge';
  $color?: ColorKeys;
}

const Divider = styled.div<DividerProps>`
  position: relative;
  margin: 1rem 0;
  width: 100%;

  // Weight
  ${props => {
    const weight = props.$weight;

    // Default
    if (weight === 'mediun' || !weight) return `
      height: 1px;
    `;

    if (weight === 'large') return `
      height: 2px;
    `;

    if (weight === 'xlarge') return `
      height: 3px;
    `;
  }}

  // Variant & Color
  ${props => {
    const variant = props.$variant;
    const color = colors[props.$color ?? 'grey2'].main;

    if (variant === 'contained' || !variant) return `
      background: ${color};
    `;

    if (variant === 'center') return `
      background: linear-gradient(transparent, ${color}, transparent);
    `;

    if (variant === 'to-left') return `
      background: linear-gradient(to left, ${color}, transparent);
    `;

    if (variant === 'to-right') return `
      background: linear-gradient(to right, ${color}, transparent);
    `;
  }}

  ${props => cssProps(props)}
`;

export default Divider;
