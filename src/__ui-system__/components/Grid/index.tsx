import { GridProps } from './props.model';
import { GridItemRoot, GridContainerRoot } from './root';

function Grid({
  children,
  // Base Props
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  spacing,
  spacingX,
  spacingY,
  ...rest
}: GridProps) {
  const renderGridContainer = () => (
    <GridContainerRoot
      baseProps={{
        spacing,
        spacingX,
        spacingY,
      }}
      {...rest}
    >
      {children}
    </GridContainerRoot>
  );

  const renderGridItem = () => (
    <GridItemRoot
      baseProps={{
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
      }}
      {...rest}
    >
      {children}
    </GridItemRoot>
  );

  const renderComponent = () => {
    if (container) return renderGridContainer();
    if (item) return renderGridItem();

    return renderGridItem();
  };

  return renderComponent();
}

export { Grid };