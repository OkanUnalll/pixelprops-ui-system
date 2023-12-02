import { BoxProps } from './props.types';
import { BoxRoot } from './root';

function Box({
  children,
  // Base Props
  backgroundColor,
  // Other Props
  ...rest
}: BoxProps) {
  return (
    <BoxRoot
      baseProps={{ backgroundColor }}
      {...rest}
    >
      {children}
    </BoxRoot>
  );
}

export { Box };