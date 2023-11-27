import type { HTMLAttributes } from 'react';
import type { BaseProperties } from 'ui-system/core';
import type { Color } from 'ui-system/theme';

export interface BaseBoxProps {
  backgroundColor?: Color;
}

type BoxMergedHTMLAttributes = BaseBoxProps & React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface BoxProps extends BaseProperties, BoxMergedHTMLAttributes {}