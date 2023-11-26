import type { ButtonHTMLAttributes } from 'react';
import type { BaseProperties, Color, Edge } from 'ui-system/core';

export interface BaseButtonProps {
  variant?: 'text' | 'contained' | 'outlined' | 'ghost' | 'bootstrap';
  color?: Color;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'container';
  iconOnly?: boolean;
  rounded?: Edge;
  fullWidth?: boolean;
  isUppercase?: boolean;
}

type MergedHTMLAttributes = BaseButtonProps & React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export interface ButtonProps extends BaseProperties, MergedHTMLAttributes {}