import type { ButtonHTMLAttributes } from 'react';
import type { BaseProperties, Color, Edge } from 'ui-system/core';

export interface BaseButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  color?: Color;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  rounded?: Edge;
}

type MergedHTMLAttributes = BaseButtonProps & React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export interface ButtonProps extends BaseProperties, MergedHTMLAttributes {}