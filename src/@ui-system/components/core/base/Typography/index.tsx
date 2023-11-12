import { TypographyTemplate } from 'ui-system/components/core/base/Typography/root';
import type { TypographyTemplateCSSProps } from 'ui-system/components/core/base/Typography/root';

interface TypographyProps extends TypographyTemplateCSSProps {
  readonly children: React.ReactNode;
}

const semantic = {};

function Typography({ children, ...rest }: TypographyProps) {
  return (
    <TypographyTemplate {...rest}>
      {children}
    </TypographyTemplate>
  );
}

export { Typography };
