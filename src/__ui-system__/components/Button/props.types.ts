import type { ButtonHTMLAttributes } from 'react';
import type { BaseProperties } from 'ui-system/core';
import type { Color, Edge } from 'ui-system/theme';

/* ------ BASE PROPS TYPES ------ */
export type Variant = 'text' | 'contained' | 'outlined' | 'surface' | 'soft' | 'ghost' | 'bootstrap';
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'container';
export type Rounded = Edge;
export type HoverEffect = 'default' | 'droplet';
/* ------------------ */

/* ------ ALL PROPS ------ */
export interface ButtonBaseProps {
  variant?: Variant;
  color?: Color;
  size?: Size;
  iconOnly?: boolean;
  rounded?: Edge;
  fullWidth?: boolean;
  isUppercase?: boolean;
  /**
   * Only valid for certain variants:
   * - 'outlined'
   * - 'surface'
   * - 'soft'
   * - 'ghost'
   * 
   * default value: 'default'
   */
  hoverEffect?: HoverEffect,
}

type HTMLProps = Omit<
  React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'color'
>;
type CoreProps = BaseProperties;
/* ------------------ */

export interface ButtonProps extends CoreProps, HTMLProps, ButtonBaseProps {
  href?: string;
}