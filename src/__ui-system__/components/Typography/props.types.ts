import CSSType from 'csstype';

import type { BaseProperties } from 'ui-system/core';
import type { Color, Font, Typography } from 'ui-system/theme';

/* ------ BASE PROPS TYPES ------ */
export type Variant = Typography;
export type TextAlign = CSSType.Property.TextAlign;
export type LineHeight = CSSType.Property.LineHeight | undefined;
export type FontFamily = Font;
export type FontWeight = CSSType.Property.FontWeight | undefined;
export type FontSize = CSSType.Property.FontSize | undefined;
export type Limit = {
  width?: CSSType.Property.Width;
  maxWidth?: CSSType.Property.MaxWidth;
  lineClamp?: CSSType.Property.WebkitLineClamp;
} | undefined;
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface TypographyBaseProps {
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

export interface TypographyProps extends CoreProps, TypographyBaseProps {
  readonly children: React.ReactNode;
  readonly variant?: Variant;
}