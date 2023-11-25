import type { HTMLAttributes } from 'react';
import type { BaseProperties } from 'ui-system/core';

export interface BaseGridProps {
  spacing?: number | string;
}

export interface BaseGridItemProps {
  xs: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

type GridMergedHTMLAttributes = BaseGridProps & React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
type GridItemMergedHTMLAttributes = BaseGridItemProps & React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface GridProps extends BaseProperties, GridMergedHTMLAttributes {}
export interface GridItemProps extends BaseProperties, GridItemMergedHTMLAttributes {}