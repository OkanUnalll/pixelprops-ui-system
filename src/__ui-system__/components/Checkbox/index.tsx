import { Icon } from '..';
import type { CheckboxProps } from './props.types';
import {
  CheckboxRoot,
  CheckboxRootCheckbox,
  CheckboxRootContent,
  CheckboxRootInput,
  CheckboxRootLabel,
} from './root';

export function Checkbox({
  children,
  disabled,
  value,
  required,
  onChange,
  defaultChecked,
  checked,
  icon = 'google_check',
  // Base Props
  color,
  size,
  rounded,
  // Other Props
  ...rest
}: CheckboxProps) {
  const iconSize = () => {
    switch(size) {
      case 'sm': return 'sm';
      case 'md': return 'md';
      case 'lg': return 'lg';
      case 'xl': return 'xl';
      default: return 'md';
    }
  };

  return (
    <CheckboxRoot
      baseProps={{
        color,
        size,
        rounded,
      }}
      disabled={disabled}
    >
      <CheckboxRootLabel>
        <CheckboxRootInput
          type="checkbox"
          disabled={disabled}
          value={value}
          required={required}
          onChange={onChange}
          defaultChecked={defaultChecked}
          checked={checked}
        />
        <CheckboxRootContent {...rest}>
          <CheckboxRootCheckbox>
            <Icon name={icon} size={iconSize()} />
          </CheckboxRootCheckbox>
          {children && (
            <>
              &nbsp;
              &nbsp;
              {children}
            </>
          )}
        </CheckboxRootContent>
      </CheckboxRootLabel>
    </CheckboxRoot>
  );
}