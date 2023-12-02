import { useTheme } from '@emotion/react';

import { icons } from 'ui-system/icons';

import { IconRoot } from './root';
import type { IconProps } from './props.model';

function Icon({
  children,
  // Base Props
  color,
  size,
  name,
  // Other Props
  ...rest
}: IconProps) {
  const theme = useTheme();

  const icon = icons.find((item) => item.name === name);

  return (
    <IconRoot
      src={icon?.path as string}
      fill={theme.colors[color ?? theme.defaultPrimaryColor].main}
      baseProps={{ size }}
      {...rest}
    />
  );
};

export { Icon };
