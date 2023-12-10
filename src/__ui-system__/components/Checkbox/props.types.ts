import type { BaseProperties } from 'ui-system/core';
import type { Icon } from 'ui-system/icons';
import type { Edge, Color as TColor } from 'ui-system/theme';

/* ------ COMPONENT PROPS TYPES ------ */
export type Color = TColor | 'default';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Rounded = Edge;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface CheckboxBaseProps {
  color?: Color;
  size?: Size;
  rounded?: Rounded;
}

type CoreProps = BaseProperties;
/* ------------------ */

export interface CheckboxProps extends CoreProps, CheckboxBaseProps {
  readonly children?: React.ReactNode;
  readonly disabled?: boolean;
  readonly value?: any;
  readonly required?: boolean;
  readonly onChange?: (event: React.ChangeEvent) => void;
  readonly defaultChecked?: boolean;
  readonly checked?: boolean;
  readonly icon?: Icon;
}