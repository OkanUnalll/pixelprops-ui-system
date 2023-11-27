import type { HTMLAttributes } from 'react';
import type { BaseProperties, LayoutProperties } from 'ui-system/core';
import type { Color } from 'ui-system/theme';

export interface BaseContainerProps {
  backgroundColor?: Color;
}

type BoxMergedHTMLAttributes = BaseContainerProps & React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface BoxProps extends BaseProperties, LayoutProperties, BoxMergedHTMLAttributes {}