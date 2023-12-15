import CSSType from 'csstype';

import type { BaseProperties } from 'ui-system/core';
import type { Color, Font, Typography } from 'ui-system/theme';

/* ------ COMPONENT PROPS TYPES ------ */
export type Variant = Typography | 'strong' | 'em' | 'del' | 'ins';
/* ------------------ */

/* ------ BASE PROPS TYPES ------ */
export type TextAlign = 'left' | 'center' | 'right';
export type LineHeight = CSSType.Property.LineHeight | undefined;
export type FontFamily = Font;
export type FontWeight = CSSType.Property.FontWeight | undefined;
export type FontSize = CSSType.Property.FontSize | undefined;
export type Limit = {
  width?: CSSType.Property.Width;
  maxWidth?: CSSType.Property.MaxWidth;
  lineClamp?: CSSType.Property.WebkitLineClamp;
} | boolean | undefined;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface TextBaseProps {
  color?: Color;
  textAlign?: TextAlign;
  lineHeight?: LineHeight;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  limit?: Limit;
}
type CoreProps = BaseProperties;
/* ------------------ */

export interface TextProps extends CoreProps, TextBaseProps {
  readonly children: React.ReactNode;
  readonly variant?: Variant;
}