import { SVGIcon } from 'ui-system/components/core/base/Svg/root';
import type { SVGIconCSSProps } from 'ui-system/components/core/base/Svg/root';

export interface SvgProps extends SVGIconCSSProps {}

function Svg({
  ...rest
}: SvgProps) {
  return (
    <SVGIcon {...rest} />
  );
}

export { Svg };