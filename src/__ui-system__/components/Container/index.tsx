import { ContainerProps } from './props.model';
import { ContainerRoot } from './root';

function Container({
  children,
  // Base Props
  backgroundColor,
  // Other Props
  ...rest
}: ContainerProps) {
  return (
    <ContainerRoot
      baseProps={{
        backgroundColor,
      }}
      {...rest}
    >
      {children}
    </ContainerRoot>
  );
}

export { Container };