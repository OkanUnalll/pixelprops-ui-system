import styled from 'styled-components';

import { cssProps } from 'ui-system/core';

import type { ICSSProps, Rounded, Color } from 'ui-system/core';

export interface ButtonWrapperCSSProps extends ICSSProps {
  disabled?: boolean;
  $variant?: 'text' | 'contained' | 'outlined';
  $color?: Color;
  $size?: 'small' | 'medium' | 'large';
  $iconOnly?: boolean;
  $rounded?: Rounded;
}

const ButtonWrapper = styled.button<ButtonWrapperCSSProps>`
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    transition: all .1s ease;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: '${({ theme }) => theme.font.roboto}', sans-serif;
    border-radius: ${({ $rounded, theme }) => theme.rounded[$rounded ?? 'md']};

    &:disabled {
      opacity: ${({ theme }) => theme.opacity.disabled};
      cursor: default;
    }

    ${({ disabled }) => {
      if (disabled) return;

      return `
        &:hover {
          opacity: .8;
        }

        &:active {
          opacity: .6;
        }
      `;  
    }}

    // $variant Prop Styles
    ${({ $variant, $color, theme }) => {
    const color = $color ? theme.colors[$color].main : theme.colors?.primary.main;
    const textColor = $color ? theme.colors[$color].contrastText : theme.colors?.primary.contrastText;
    const variant = $variant ?? 'contained';

    switch (variant) {
      case 'text': return `
        background-color: transparent;
        border-color: transparent;
        color: ${color};

        svg {
          fill: ${color};
        }
      `;
      case 'contained': return `
        background-color: ${color};
        border-color: ${color};
        color: ${textColor};

        svg {
          fill: ${textColor};
        }
      `;
      case 'outlined': return `
        background-color: transparent;
        border-color: ${color};
        color: ${color};

        svg {
          fill: ${color};
        }
      `;
    }
  }}

    // $size Prop Styles
    ${({ $iconOnly, $size }) => {
      const size = $size ?? 'medium';

      if ($iconOnly) {
        switch(size) {
          case 'small': return `
            width: 29px;
            height: 29px;
          `;
          case 'medium': return `
            width: 36px;
            height: 36px;
          `;
          case 'large': return `
            width: 42px;
            height: 42px;
          `;
        };
      }

      switch(size) {
        case 'small': return `
          height: 29px;
          padding: 0 0.7rem;
          font-size: 13px;
        `;  
        case 'medium': return `
          height: 36px;
          padding: 0 0.9rem;
          font-size: 14px;
        `;  
        case 'large': return `
          height: 42px;
          padding: 0 1rem;
          font-size: 15px;
        `;
      };
    }}

    ${props => cssProps(props)}
`;

export { ButtonWrapper };