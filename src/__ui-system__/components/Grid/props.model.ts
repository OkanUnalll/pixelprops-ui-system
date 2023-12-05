import type { HTMLAttributes } from 'react';
import type { BaseProperties, LayoutProperties } from 'ui-system/core';

/* ------ BASE PROPS TYPES ------ */
export type Spacing = number | string | undefined;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface GridContainerBaseProps {
  spacing?: Spacing;
  spacingX?: Spacing;
  spacingY?: Spacing;
}
export interface GridItemBaseProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}
type HTMLProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type CoreProps = BaseProperties & LayoutProperties;
/* ------------------ */

export interface GridProps extends CoreProps, HTMLProps, GridContainerBaseProps, GridItemBaseProps {
  readonly children: React.ReactNode;
  readonly container?: boolean;
  readonly item?: boolean;
}
