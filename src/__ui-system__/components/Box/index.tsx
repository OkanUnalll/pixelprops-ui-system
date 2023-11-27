import { BoxProps } from './props.model';
import { BoxTemplate } from './root';

interface BoxComponentProps extends BoxProps {
  readonly children: React.ReactNode;  
}

function Box({
  children,
  // Base Props
  backgroundColor,
  // Other Props
  ...rest
}: BoxComponentProps) {
  return (
    <BoxTemplate
      baseProps={{
        backgroundColor,
      }}
      {...rest}
    >
      {children}
    </BoxTemplate>
  );
}

export { Box };