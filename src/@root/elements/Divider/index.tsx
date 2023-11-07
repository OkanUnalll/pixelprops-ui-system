import styled from 'styled-components';

import type { ICSSProps } from '@root/models/theme/cssprops';
import type { ColorKeys, ColorTypeKeys } from '@root/models/theme/base/colors';

import cssProps from '@root/theme/functions/cssProps';

interface DividerProps extends ICSSProps {
  $variant?: 'none' | 'to-left' | 'to-right' | 'center';
  $weight?: 'mediun' | 'large' | 'xlarge';
  $spacing?: 'small' | 'medium' | 'large';
  $color?: ColorKeys;
  $colorType?: ColorTypeKeys;
}

const Divider = styled.div<DividerProps>`
  position: relative;
  width: 100%;
  
  // Spacing
  ${props => {
    const spacing = props.$spacing;

    if (spacing === 'small') return `
      margin: 1rem 0;
    `;

    if (spacing === 'medium' || !spacing) return `
      margin: 2.5rem 0;
    `;

    if (spacing === 'large') return `
      margin: 4rem 0;
    `;
  }}

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
    const theme = props.theme.mode;
    const color = props.theme.colors[
      // color name
      props.$color ?? 'grey'
    ][
      // color type
      props.$colorType ?? (theme === 'light' ? 'light' : 'dark')
    ];

    if (variant === 'none' || !variant) return `
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
