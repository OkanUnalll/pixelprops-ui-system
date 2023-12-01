import styled from '@emotion/styled';

import { Property, baseProperties, layoutProperties } from 'ui-system/core';
import type { Template } from '../models';
import type {
  BoxBaseProps,
  BackgroundColor,
} from './props.types';

export interface BoxRootProps extends Template<BoxBaseProps> {}

export const BoxRoot = styled.div<BoxRootProps>((props) => {
  /* PROPS */
  const { baseProps, theme } = props;

  /* BASE PROPS */
  const { backgroundColor } = baseProps;

  const backgroundColorProp = new Property<BackgroundColor>((value) => ({
    backgroundColor: value ? theme.colors[value].main : 'transparent',
  }));

  return {
    display: 'block',
    /* BASE BOX PROPS STYLES */
    ...backgroundColorProp.get(backgroundColor),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});