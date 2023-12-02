import type { HTMLAttributes } from 'react';
import type { BaseProperties, LayoutProperties } from 'ui-system/core';
import type { Color } from 'ui-system/theme';

/* ------ BASE PROPS TYPES ------ */
export type BackgroundColor = Color | undefined;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface BoxBaseProps {
  backgroundColor?: BackgroundColor;
}
type HTMLProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type CoreProps = BaseProperties & LayoutProperties;
/* ------------------ */

export interface BoxProps extends CoreProps, HTMLProps, BoxBaseProps {
  readonly children: React.ReactNode;
}