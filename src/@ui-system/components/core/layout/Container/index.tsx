import { ContainerTemplate } from 'ui-system/components/core/layout/Container/root';
import type { ContainerTemplateCSSProps } from 'ui-system/components/core/layout/Container/root';

interface ContainerProps extends ContainerTemplateCSSProps{
  readonly children: React.ReactNode;
  readonly className?: string;
}

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <ContainerTemplate { ...rest }>
      {children}
    </ContainerTemplate>
  );
}

export { Container };