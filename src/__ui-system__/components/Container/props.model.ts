import type { HTMLAttributes } from 'react';
import type { BaseProperties, LayoutProperties } from 'ui-system/core';
import type { Color } from 'ui-system/theme';

/* ------ BASE PROPS TYPES ------ */
export type BackgroundColor = Color | undefined;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface ContainerBaseProps {
  readonly backgroundColor?: BackgroundColor;
}
type HTMLProps = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;;
type CoreProps = BaseProperties & LayoutProperties;
/* ------------------ */

export interface ContainerProps extends CoreProps, HTMLProps, ContainerBaseProps {
  readonly children: React.ReactNode;
}