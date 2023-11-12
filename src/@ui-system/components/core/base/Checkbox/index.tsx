import styled from 'styled-components';

import Svg from '@root/elements/SVG';

import type { ColorKeys } from '@root/models/theme/base/colors';

/**
 * refs: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
*/

interface CheckboxContainerProps {
  readonly disabled?: boolean;
  readonly $size?: 'small' | 'medium' | 'large';
  readonly $checkedColor?: ColorKeys;
};

interface CheckboxTemplateProps {
  readonly className?: string;
  readonly checkedIcon?: any;
  readonly label?: string;
  readonly autoFocus?: boolean;
  readonly checked?: boolean;
  readonly defaultChecked?: boolean;
  readonly defaultValue?: any;
  readonly disabled?: boolean;
  readonly form?: any;
  readonly name?: string;
  readonly required?: boolean;
  readonly $size?: 'small' | 'medium' | 'large';
  readonly $color?: ColorKeys;
  readonly $checkedColor?: ColorKeys;
}

interface CheckboxViewProps {
  readonly $size?: 'small' | 'medium' | 'large';
  readonly $color?: ColorKeys;
}

const CheckboxInput = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: ${props => props.theme.opacity.hidden};

  &:disabled {
    cursor: default;
  }
`;

const CheckboxIcon = styled(Svg)`
  position: absolute;
  pointer-events: none;
  transition: all .2s ease;
  width: 100%;
  height: 100%;
  padding: .2rem .1rem;
  z-index: 2;
  opacity: ${props => props.theme.opacity.hidden};
`;

const CheckboxView = styled.span<CheckboxViewProps>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all .2s ease;
  border-style: solid;
  border-width: 2px;
  border-radius: 6px;
  position: relative;

  // $size Prop Styles
  ${props => {
    const size = props.$size ?? 'medium';

    switch (size) {
      case 'small': return `
        width: 18px;
        height: 18px;
      `;
      case 'medium': return `
        width: 22px;
        height: 22px;
      `;
      case 'large': return `
        width: 30px;
        height: 30px;
      `;
    }
  }}

  // $color Prop Style
  ${props => {
    const color = props.$color ?? 'grey';

    return `
      border-color: ${props.theme.colors[color].main}
    `;
  }}
`;

const CheckboxContainer = styled.label<CheckboxContainerProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    transition: ${props => props.theme.transition.fast};

    // Checkbox Icon Checked Style 
    ${CheckboxInput}:checked ~ ${CheckboxView} ${CheckboxIcon} {
      opacity: ${props => props.theme.opacity.visible};
    }

    // Checkbox View Hover Style
    ${props => {
      if (props.disabled) return;

      return `
        &:hover {
          opacity: ${props.theme.opacity.lg};
        }
      `;
    }}

    // Checkbox View Checked Style
    ${CheckboxInput}:checked ~ ${CheckboxView} {
      // $checkedColor Prop Styles
      ${props => {
        const checkedColor = props.$checkedColor ?? 'primary';

        return `
          background-color: ${props.theme.colors[checkedColor].main};
          border-color: ${props.theme.colors[checkedColor].main};
        `;
      }}
    }

    // disabled Prop Styles
    ${({ disabled, theme }) => disabled && `opacity: ${theme.opacity.disabled};`}

    // $size Prop Styles
    ${props => {
      const size = props.$size ?? 'medium';

      switch (size) {
        case 'small': return `
          font-size: ${props.theme.typography.h6.fontSize};
        `;
        case 'medium': return `
          font-size: ${props.theme.typography.h5.fontSize};
        `;
        case 'large': return `
          font-size: ${props.theme.typography.h4.fontSize};
        `;
      }
    }}
`;

function Checkbox({
  className,
  checkedIcon,
  disabled,
  label,
  $size,
  $color,
  $checkedColor,
  ...rest
}: CheckboxTemplateProps) {
  return (
    <CheckboxContainer
      $checkedColor={$checkedColor}
      $size={$size}
      className={className}
      disabled={disabled}
    >
      <CheckboxInput
        disabled={disabled}
        {...rest}
      />
      <CheckboxView $color={$color} $size={$size}>
        {checkedIcon ?? <CheckboxIcon src='/svg/check.svg' fill="#000" />}
      </CheckboxView>
      {label && (
        <>&nbsp;&nbsp;{label}</>
      )}
    </CheckboxContainer>
  );
}

export default Checkbox;