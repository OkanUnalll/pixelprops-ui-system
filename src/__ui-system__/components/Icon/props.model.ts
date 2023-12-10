import type { BaseProperties } from 'ui-system/core';
import type { Color as TColor } from 'ui-system/theme';
import type { Icon } from 'ui-system/icons';

/* ------ BASE PROPS TYPES ------ */
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Color = TColor | 'default';
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface IconBaseProps {
  size?: Size;
  color?: Color;
}
type CoreProps = BaseProperties;
/* ------------------ */

export interface IconProps extends CoreProps, IconBaseProps {
  readonly children?: React.ReactNode;
  readonly name: Icon;
}