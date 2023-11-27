import type { ButtonHTMLAttributes } from 'react';
import type { BaseProperties } from 'ui-system/core';
import type { Color, Edge } from 'ui-system/theme';

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