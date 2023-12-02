import type { Icon as TIcon } from 'ui-system/icons';

import { Icon } from '../Icon';

import { ButtonRoot } from './root';
import type { ButtonProps } from './props.types';

interface ButtonComponentProps extends ButtonProps {
  readonly children?: React.ReactNode;
  readonly iconLeft?: TIcon;
  readonly iconRight?: TIcon;
  readonly icon?: TIcon;
}

function Button({
  children,
  iconLeft,
  iconRight,
  icon,
  // Base Props
  color,
  variant,
  size,
  iconOnly,
  rounded,
  fullWidth,
  isUppercase,
  // Other Props
  ...rest
}: ButtonComponentProps) {
  const iconSize = () => {
    switch(size) {
      case 'sm': return 'sm';
      case 'md': return 'md';
      case 'lg': return 'lg';
      case 'xl': return 'xl';
      case 'container': return 'md';
      default: return 'md';
    }
  };

  return (
    <ButtonRoot
      baseProps={{
        color,
        variant,
        size,
        iconOnly,
        rounded,
        fullWidth,
        isUppercase,
      }}
      {...rest}
    >
      {iconLeft && (
        <>
          <Icon name={iconLeft} size={iconSize()} />
          &nbsp;&nbsp;
        </>
      )}
      {children}
      {iconRight && (
        <>
          &nbsp;&nbsp;
          <Icon name={iconRight} size={iconSize()} />
        </>
      )}
      {icon && (
        <>
          {children ? <>&nbsp;&nbsp;</> : null}
          <Icon name={icon} size={iconSize()} />
        </>
      )}
    </ButtonRoot>
  );
};

export { Button };
