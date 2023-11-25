import { ButtonTemplate } from './root';
import type { ButtonProps } from './Button.props';

interface Props extends ButtonProps {
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
  ...attrs
}: Props) {
  return (
    <ButtonTemplate
      baseProps={{
        color,
        variant,
        size,
        iconOnly,
        rounded,
      }}
      {...attrs}
    >
      {children}
    </ButtonTemplate>
  );
};

export { Button };
