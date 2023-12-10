import styled from '@emotion/styled';

import { Property, baseProperties, layoutProperties } from 'ui-system/core';
import { devices } from 'ui-system/theme';

import type { BackgroundColor, ContainerBaseProps } from './props.model';
import type { Template } from '../models';

export const ContainerRoot = styled.div<Template<ContainerBaseProps>>((props) => {
  /* PROPS */
  const { baseProps, theme } = props;

  /* BASE PROPS */
  const { backgroundColor } = baseProps;

  const backgroundColorProperty = new Property<BackgroundColor>((value) => ({
    backgroundColor: value ? theme.colors[value].main : 'transparent',
  }));

  return {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    maxWidth: '100%',
    [devices.sm]: {
      maxWidth: '460px',
      paddingRight: 0,
      paddingLeft: 0,
    },
    [devices.md]: {
      maxWidth: '614px',
      paddingRight: 0,
      paddingLeft: 0,
    },
    [devices.lg]: {
      maxWidth: '793px',
      paddingRight: 0,
      paddingLeft: 0,
    },
    [devices.xl]: {
      maxWidth: '960px',
      paddingRight: 0,
      paddingLeft: 0,
    },
    [devices.xxl]: {
      maxWidth: '1120px',
      paddingRight: 0,
      paddingLeft: 0,
    },
    /* BASE CONTAINER PROPS STYLES */
    ...backgroundColorProperty.get(backgroundColor),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});