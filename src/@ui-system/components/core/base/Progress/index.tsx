import { ProgressTemplate } from 'ui-system/components/core/base/Progress/root';
import type { ProgressTemplateCSSProps } from 'ui-system/components/core/base/Progress/root';

interface ProgressProps extends ProgressTemplateCSSProps {}

function Progress({ ...rest }: ProgressProps) {
  return (
    <ProgressTemplate {...rest} />
  );
}

export { Progress };