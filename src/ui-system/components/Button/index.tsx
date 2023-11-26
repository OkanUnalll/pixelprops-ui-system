import { ButtonTemplate } from './root';
import type { ButtonProps } from './props.model';

interface ButtonComponentProps extends ButtonProps {
  readonly children?: React.ReactNode;
}

function Button({
  children,
  // Base Props
  color = 'primary',
  variant = 'contained',
  size = 'md',
  iconOnly = false,
  rounded = 'md',
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
      }}
      {...rest}
    >
      {children}
    </ButtonTemplate>
  );
};

export { Button };
