import { DividerTemplate } from 'ui-system/components/core/base/Divider/root';
import type { DividerTemplateCSSProps } from 'ui-system/components/core/base/Divider/root';

interface DividerProps extends DividerTemplateCSSProps {}

function Divider({ ...rest }: DividerProps) {
  return (
    <DividerTemplate {...rest} />
  );
} 

export { Divider };
