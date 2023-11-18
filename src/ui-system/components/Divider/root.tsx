import styled from 'styled-components';

import { cssProps } from 'ui-system/core';
import type { Color, ICSSProps } from 'ui-system/core';

export interface DividerTemplateCSSProps extends ICSSProps {
  $variant?: 'none' | 'to-left' | 'to-right' | 'center';
  $weight?: 'mediun' | 'large' | 'xlarge';
  $spacing?: 'small' | 'medium' | 'large' | 'xlarge';
  $color?: Color;
}

const DividerTemplate = styled.div<DividerTemplateCSSProps>`
  position: relative;
  width: 100%;
  
  // $spacing Prop Styles
  ${({ $spacing }) => {
    const spacing = $spacing ?? 'medium';
    switch(spacing) {
      case 'small': return `
        margin: 1rem 0;
      `;
      case 'medium': return `
        margin: 2.5rem 0;
      `;
      case 'large': return `
        margin: 4rem 0;
      `;
      case 'xlarge': return `
        margin: 7rem 0;
      `;
    }
  }}

  // $weight Prop Style
  ${({ $weight }) => {
    const weight = $weight ?? 'mediun';
    switch(weight) {
      case 'mediun': return `
        height: 1px;  
      `;
      case 'large': return `
        height: 2px;
      `;
      case 'xlarge': return `
        height: 3px;
      `;
    }
  }}

  // $variant & $color Props Types
  ${({ $variant, $color, theme }) => {
    const variant = $variant ?? 'none';
    const themeColor = theme.mode === 'light' ? theme.colors.light.main : theme.colors.grey.dark;
    const color = $color ? theme.colors[$color].main : themeColor;

    switch(variant) {
      case 'none': return `
        background: ${color};
      `;
      case 'center': return `
        background: linear-gradient(to right, transparent, ${color}, transparent);
      `;
      case 'to-left': return `
        background: linear-gradient(to left, ${color}, transparent);
      `;
      case 'to-right': return `
        background: linear-gradient(to right, ${color}, transparent);
      `;
    }
  }}

  ${props => cssProps(props)}
`;

export { DividerTemplate };
