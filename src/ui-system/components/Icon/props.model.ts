import type { BaseProperties } from 'ui-system/core';

export interface BaseIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface IconProps extends BaseProperties, BaseIconProps {}