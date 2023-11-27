import styled, { CSSObject } from '@emotion/styled';

import { baseProperties, layoutProperties } from 'ui-system/core';
import { Template } from '../models';
import { BaseBoxProps } from './props.model';

export const BoxTemplate = styled.div<Template<BaseBoxProps>>((props) => {
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
    /* BASE BOX PROPS STYLES */
    ...backgroundColorStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});