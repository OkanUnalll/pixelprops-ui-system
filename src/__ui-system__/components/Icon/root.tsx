import styled, { CSSObject } from '@emotion/styled';

import InlineSVG from 'react-inlinesvg';

import { baseProperties } from 'ui-system/core';

import type { BaseIconProps } from './props.model';
import { Template } from '../models';

export const IconTemplate = styled(InlineSVG)<Template<BaseIconProps>>((props) => {
  /* PROPS */
  const { baseProps } = props;

  /* BASE PROPS */
  const {
    size = 'md',
  } = baseProps;

  /* BASE PROPS STYLES */
  const sizeStyles = () => {
    switch(size) {
      case 'sm': return {
        width: '10px',
        height: '10px',
      } as CSSObject;
      case 'md': return {
        width: '13px',
        height: '13px',
      } as CSSObject;
      case 'lg': return {
        width: '16px',
        height: '16px',
      } as CSSObject;
      case 'xl': return {
        width: '19px',
        height: '19px',
      } as CSSObject;
    }
  };
  /* END -  BASE PROPS STYLES */
  
  return {
    /* DEFAULT STYLES */
    /* BASE BUTTON PROPS STYLES */
    ...sizeStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});