import { GridItemProps, GridProps } from './Prop-Model';
import { GridItemTemplate, GridTemplate } from './root';

interface GridComponentProps extends GridProps {
  readonly children?: React.ReactNode;
}

function Grid({
  children,
   // Base Props
   spacing = 0,
   // Other Props
   ...rest
}: GridComponentProps) {
  return (
    <GridTemplate
      baseProps={{ spacing }}
      {...rest}
    >
      {children}  
    </GridTemplate>
  ); 
};

interface GridItemComponentProps extends GridItemProps {
  readonly children?: React.ReactNode;
}

function GridItem({
    children,
     // Base Props
     xs,
     sm,
     md,
     lg,
     xl,
     xxl,
     // Other Props
     ...rest
  }: GridItemComponentProps) {
    return (
      <GridItemTemplate
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
      </GridItemTemplate>
    ); 
};

export { Grid, GridItem };