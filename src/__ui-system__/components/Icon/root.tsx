import styled from '@emotion/styled';

import InlineSVG from 'react-inlinesvg';

import { Property, baseProperties } from 'ui-system/core';

import type { Color, IconBaseProps, Size } from './props.model';
import type { Template } from '../models';

export const IconRoot = styled(InlineSVG)<Template<IconBaseProps>>((props) => {
  /* PROPS */
  const { theme, baseProps } = props;

  /* BASE PROPS */
  const {
    size = 'md',
    color = 'default',
  } = baseProps;

  /* ------ BASE PROPS STYLES ------ */
  /* -- COLOR PROPERTY STYLES -- */
  const colorProperty = new Property<Color>((value) => {
    const colorValue = value === 'default' ? theme.bodyColor : theme.colors[value].main;
    
    return {
      fill: colorValue,
    };
  });
  /* -- END - COLOR PROPERTY STYLES -- */

  /* -- SIZE PROPERTY STYLES -- */
  const sizeProperty = new Property<Size>();
  sizeProperty.if(
    'sm',
    {
      width: '10px',
      height: '10px',
    },
  );
  sizeProperty.if(
    'md',
    {
      width: '12px',
      height: '12px',
    },
  );
  sizeProperty.if(
    'lg',
    {
      width: '14px',
      height: '14px',
    },
  );
  sizeProperty.if(
    'xl',
    {
      width: '16px',
      height: '16px',
    },
  );
  /* -- END - SIZE PROPERTY STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */
  
  return {
    /* DEFAULT STYLES */
    /* BASE ICON PROPS STYLES */
    ...colorProperty.get(color),
    ...sizeProperty.get(size),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});