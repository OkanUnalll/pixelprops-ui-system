import styled, { CSSObject } from '@emotion/styled';

import { baseProperties, layoutProperties } from 'ui-system/core';
import { Template } from '../models';
import { BaseContainerProps } from './props.model';
import { devices } from 'ui-system/theme';

export const ContainerTemplate = styled.div<Template<BaseContainerProps>>((props) => {
  /* PROPS */
  const { baseProps, theme } = props;

  /* BASE PROPS */
  const { backgroundColor } = baseProps;

  const backgroundColorStyles = () => {
    return {
      backgroundColor: backgroundColor ? theme.colors[backgroundColor].main : 'transparent',
    } as CSSObject;
  };

  return {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    maxWidth: '100%',
    [devices.sm]: {
      maxWidth: '460px',
      padding: 0,
    },
    [devices.md]: {
      maxWidth: '614px',
      padding: 0,
    },
    [devices.lg]: {
      maxWidth: '793px',
      padding: 0,
    },
    [devices.xl]: {
      maxWidth: '960px',
      padding: 0,
    },
    [devices.xxl]: {
      maxWidth: '1120px',
      padding: 0,
    },
    /* BASE BOX PROPS STYLES */
    ...backgroundColorStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});