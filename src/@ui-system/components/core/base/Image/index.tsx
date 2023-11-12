import { ImageTemplate } from 'ui-system/components/core/base/Image/root';
import type { ImageTemplateCSSProps } from 'ui-system/components/core/base/Image/root';

interface ImageProps extends ImageTemplateCSSProps {}

function Image({ ...rest }: ImageProps) {
  return (
    <ImageTemplate {...rest} />
  );
}

export { Image };
