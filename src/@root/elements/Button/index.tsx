import styled from 'styled-components';

import cssProps from '@root/theme/functions/cssProps';

import { ICSSProps } from '@root/models/theme/cssprops';

interface ButtonProps extends ICSSProps {
    $variant?: 'text' | 'contained' | 'outlined';
    $color?: string;
    $size?: 'small' | 'medium' | 'large';
    $iconOnly?: boolean;
}

const Button = styled.button<ButtonProps>`
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    cursor: pointer;
    transition: all .1s ease;
    text-transform: uppercase;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: .7;
        cursor: no-drop;
    }

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .6;
    }

    // Variant
    ${props => {
      const color = props.$color ?? props.theme.colors.primary.main;
      const variant = props.$variant ?? 'contained';

      if (variant === 'text') return `
          background-color: transparent;
          border-color: transparent;
          color: ${color};
      `;

      if (variant === 'contained') return `
          background-color: ${color};
          border-color: ${color};
          color: #fff;
      `;

      if (variant === 'outlined') return `
          background-color: transparent;
          border-color: ${color};
          color: ${color};
      `;
      
    }}

    // Size
    ${props => {
      if (props.$iconOnly) {
        return `
          width: 45px;
          height: 45px;
        `;
      }  

      const size = props.$size ?? 'medium';

      if (size === 'small') return `
          padding: .4rem .7rem;
          font-size: 12px;
      `;
      
      if (size === 'medium') return `
          padding: .6rem 1rem;
          font-size: 14px;
      `;
      
      if (size === 'large') return `
          padding: .8rem 1.3rem;
          font-size: 17px;
      `;
      
    }}
    ${props => cssProps(props)}
`;

export default Button;