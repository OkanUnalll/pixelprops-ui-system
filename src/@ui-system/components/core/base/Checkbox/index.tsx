import { HTMLAttributes } from 'react';

import type { Color } from 'ui-system/core';

import { CheckboxContainer, CheckboxIcon, CheckboxInput, CheckboxView } from 'ui-system/components/core/base/Checkbox/root';

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  readonly className?: string;
  readonly checkedIcon?: any;
  readonly label?: string;
  readonly disabled?: boolean;
  readonly $size?: 'small' | 'medium' | 'large';
  readonly $color?: Color;
  readonly $checkedColor?: Color;
}

function Checkbox({
  className,
  checkedIcon,
  disabled,
  label,
  $size,
  $color,
  $checkedColor,
  ...rest
}: CheckboxProps) {
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

export { Checkbox };