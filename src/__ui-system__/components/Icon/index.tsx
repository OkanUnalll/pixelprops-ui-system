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
  const icon = icons.find((item) => item.name === name);

  return (
    <IconRoot
      src={icon?.path as string}
      baseProps={{
        size,
        color,
      }}
      {...rest}
    />
  );
};

export { Icon };
