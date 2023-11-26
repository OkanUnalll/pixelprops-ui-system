import { ButtonTemplate } from './root';
import type { ButtonProps } from './props.model';
import type { Icon as TIcon } from 'ui-system/icons';
import { Icon } from '../Icon';

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
  return (
    <ButtonTemplate
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
          <Icon name={iconLeft} size={size} />
          &nbsp;&nbsp;
        </>
      )}
      {children}
      {iconRight && (
        <>
          &nbsp;&nbsp;
          <Icon name={iconRight} size={size} />
        </>
      )}
      {icon && (
        <>
          {children ? <>&nbsp;&nbsp;</> : null}
          <Icon name={icon} size={size} />
        </>
      )}
    </ButtonTemplate>
  );
};

export { Button };
