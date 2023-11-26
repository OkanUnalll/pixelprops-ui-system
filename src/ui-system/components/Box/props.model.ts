import type { HTMLAttributes } from 'react';
import type { BaseProperties, Color } from 'ui-system/core';

export interface BaseBoxProps {
  backgroundColor?: Color;
}

type BoxMergedHTMLAttributes = BaseBoxProps & React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface BoxProps extends BaseProperties, BoxMergedHTMLAttributes {}