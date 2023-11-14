import Link from 'ui-system/components/Link';
import Svg from 'ui-system/components/Svg';

import { LogoTemplate } from 'ui-system/components/core/common/Logo/root';
import type { LogoTemplateCSSProps } from 'ui-system/components/core/common/Logo/root';

interface LogoProps extends LogoTemplateCSSProps {
  readonly width?: number;
  readonly height?: number;
  readonly route?: boolean;
}

function Logo({
  width = 80,
  height,
  route = true,
  ...rest
}: LogoProps) {

  if (route) {
    return (
      <LogoTemplate {...rest}>
        <Link $display="flex" $alignItems="center" $justifyContent="center" href="/">
          <Svg
            src="/svg/logos/primary.svg"
            width={width}
            height={height}
          />
        </Link>
      </LogoTemplate>
    );
  }

  return (
    <LogoTemplate {...rest}>
      <Svg
        src="/svg/logos/primary.svg"
        width={width}
        height={height}
      />
    </LogoTemplate>
  );
}

export { Logo };
