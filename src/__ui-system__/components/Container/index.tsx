import { BoxProps } from './props.model';
import { ContainerTemplate } from './root';

interface BoxComponentProps extends BoxProps {
  readonly children: React.ReactNode;  
}

function Container({
  children,
  // Base Props
  backgroundColor,
  // Other Props
  ...rest
}: BoxComponentProps) {
  return (
    <ContainerTemplate
      baseProps={{
        backgroundColor,
      }}
      {...rest}
    >
      {children}
    </ContainerTemplate>
  );
}

export { Container };