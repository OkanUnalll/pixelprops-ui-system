import { ButtonTemplate } from './root';
import type { ButtonProps } from './props.model';

interface ButtonComponentProps extends ButtonProps {
  readonly children?: React.ReactNode;
}

function Button({
  children,
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
      {children}
    </ButtonTemplate>
  );
};

export { Button };
