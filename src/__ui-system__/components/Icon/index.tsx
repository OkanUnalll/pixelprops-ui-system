import { useTheme } from '@emotion/react';

import type { Color } from 'ui-system/theme';
import { Icon, icons } from 'ui-system/icons';

import { IconTemplate } from './root';
import type { IconProps } from './props.model';

interface IconComponentProps extends IconProps {
  readonly children?: React.ReactNode;
  readonly color?: Color;
  readonly name: Icon;
}

function Icon({
  children,
  // Base Props
  color,
  size,
  name,
  // Other Props
  ...rest
}: IconComponentProps) {
  const theme = useTheme();

  const icon = icons.find((item) => item.name === name);

  return (
    <IconTemplate
      src={icon?.path as string}
      fill={theme.colors[color ?? theme.defaultPrimaryColor].main}
      baseProps={{ size }}
      {...rest}
    />
  );
};

export { Icon };
