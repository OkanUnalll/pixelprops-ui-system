import styled from '@emotion/styled';

import InlineSVG from 'react-inlinesvg';

import { Property, baseProperties } from 'ui-system/core';

import type { IconBaseProps, Size } from './props.model';
import type { Template } from '../models';

export const IconRoot = styled(InlineSVG)<Template<IconBaseProps>>((props) => {
  /* PROPS */
  const { baseProps } = props;

  /* BASE PROPS */
  const {
    size = 'md',
  } = baseProps;

  /* ------ BASE PROPS STYLES ------ */
  /* -- SIZE PROPERTY STYLES -- */
  const sizeProperty = new Property<Size>();
  sizeProperty.if(
    'sm',
    {
      width: '11px',
      height: '11px',
    },
  );
  sizeProperty.if(
    'md',
    {
      width: '13px',
      height: '13px',
    },
  );
  sizeProperty.if(
    'lg',
    {
      width: '15px',
      height: '15px',
    },
  );
  sizeProperty.if(
    'xl',
    {
      width: '17px',
      height: '17px',
    },
  );
  /* -- END - SIZE PROPERTY STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */
  
  return {
    /* DEFAULT STYLES */
    /* BASE BUTTON PROPS STYLES */
    ...sizeProperty.get(size),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});