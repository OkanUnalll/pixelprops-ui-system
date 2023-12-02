import type { BaseProperties } from 'ui-system/core';
import type { Color } from 'ui-system/theme';
import type { Icon } from 'ui-system/icons';

/* ------ BASE PROPS TYPES ------ */
export type Size = 'sm' | 'md' | 'lg' | 'xl';
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface IconBaseProps {
  size?: Size;
}
type CoreProps = BaseProperties;
/* ------------------ */

export interface IconProps extends CoreProps, IconBaseProps {
  readonly children?: React.ReactNode;
  readonly color?: Color;
  readonly name: Icon;
}