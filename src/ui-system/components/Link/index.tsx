import { LinkTemplate } from 'ui-system/components/core/base/Link/root';
import type { LinkTemplateCSSProps } from 'ui-system/components/core/base/Link/root';

interface LinkProps extends LinkTemplateCSSProps {
  readonly children: React.ReactNode;
}

function Link({ children, ...rest }: LinkProps) {
  return (
    <LinkTemplate {...rest}>
      {children}
    </LinkTemplate>
  );
}

export { Link };
