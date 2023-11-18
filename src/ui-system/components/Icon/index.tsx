import type { ICSSProps, Color } from 'ui-system/core';

import { IconTemplate } from 'ui-system/components/core/base/Icon/root';
import type { GoogleFontIcons, MeterialUIIcons } from 'ui-system/components/core/base/Icon/icons';

import { icons } from 'ui-system/components/core/base/Icon/icons';

interface IconProps extends ICSSProps {
  readonly name: GoogleFontIcons | MeterialUIIcons;
  readonly $color?: Color;
  readonly $size?: 'small' | 'medium' | 'large';
}

function Icon({ name, $color, $size, ...rest }: IconProps) {
  const icon = icons.find((item) => item.name === name);

  return (
    <IconTemplate
      src={icon?.path as string}
      $color={$color}
      $size={$size}
      {...rest}
    />
  );
}

export { Icon };