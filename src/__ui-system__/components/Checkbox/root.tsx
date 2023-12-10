import styled from '@emotion/styled';

import { Property, baseProperties } from 'ui-system/core';
import type { Template } from '../models';
import type { CheckboxBaseProps, Color, Rounded, Size } from './props.types';
import { hexToRgba } from 'ui-system/utils';

export const CheckboxRootLabel = styled.label((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
});

export const CheckboxRootInput = styled.input((props) => {
  return {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  };
});

export const CheckboxRootContent = styled.div((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});

export const CheckboxRootCheckbox = styled.div((props) => {
  const { theme } = props;
  
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& > svg': {
      transition: theme.transitions.fast,
    },
  };
});

interface CheckboxRootProps extends Template<CheckboxBaseProps> {
  readonly disabled?: boolean;
}

export const CheckboxRoot = styled.div<CheckboxRootProps>((props) => {
  /* PROPS */
  const { baseProps, theme, disabled } = props;

  /* BASE PROPS */
  const {
    color = 'default',
    size = 'md',
    rounded = theme.defaultRadius,
  } = baseProps;

  /* CHILD COMPONENTS */
  const checkboxRootContent = `${CheckboxRootContent}`;
  const checkboxRootCheckbox = `${CheckboxRootCheckbox}`;
  const checkboxRootInput = `${CheckboxRootInput}`;

  /* COLORS */
  const colorValue = color === 'default' ? theme.bodyColor : color;

  const colorMain = theme.colors[colorValue].main;
  const colorDark = theme.colors[colorValue].dark;
  const colorContrast = theme.colors[colorValue].contrast;

  /* ------ BASE PROPS STYLES ------ */
  /* -- COLOR STYLES -- */
  const colorProperty = new Property<Color>((value) => {
    return {
      [`${checkboxRootContent} > ${checkboxRootCheckbox} `]: {
        backgroundColor: 'transparent',
        '& > svg': {
          fill: colorContrast,
        },
      },
    };
  });
  /* -- END - COLOR STYLES -- */

  /* -- SIZE STYLES -- */
  const sizeProperty = new Property<Size>();

  sizeProperty.if(
    'sm',
    {
      [`${checkboxRootContent} > ${checkboxRootCheckbox}  `]: {
        width: '20px',
        height: '20px',
      }
    },
  );

  sizeProperty.if(
    'md',
    {
      [`${checkboxRootContent} > ${checkboxRootCheckbox}  `]: {
        width: '25px',
        height: '25px',
      }
    },
  );

  sizeProperty.if(
    'lg',
    {
      [`${checkboxRootContent} > ${checkboxRootCheckbox}  `]: {
        width: '30px',
        height: '30px',
      }
    },
  );

  sizeProperty.if(
    'xl',
    {
      [`${checkboxRootContent} > ${checkboxRootCheckbox}  `]: {
        width: '35px',
        height: '35px',
      }
    },
  );
  /* -- END - SIZE STYLES -- */

  /* -- ROUNDED STYLES -- */
  const roundedProperty = new Property<Rounded>((value) => ({
    borderRadius: theme.edges[value],
  }));
  /* -- END - ROUNDED STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */

  return {
    display: 'inline-block',
    position: 'relative',
    opacity: disabled ? theme.opacities.disabled : 1,

    [`${checkboxRootContent} > ${checkboxRootCheckbox}`]: {
      borderRadius: theme.edges[rounded],
      cursor: !disabled && 'pointer',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: hexToRgba(theme.colors[theme.bodyColor].main, 0.5),

      '& > svg': {
        fill: 'transparent',
        opacity: 0,
        transform: 'scale(0.3)',
      },

      '&:hover': {
        backgroundColor: !disabled && hexToRgba(theme.colors[theme.bodyColor].main, 0.1),
      },
    },

    [`& > label > ${checkboxRootInput}:checked ~ ${checkboxRootContent} > ${checkboxRootCheckbox}`]: {
      backgroundColor: color === 'default' ? hexToRgba(colorMain, 0.2) : colorMain,
      borderColor: 'transparent',

      '&:hover': {
        backgroundColor: !disabled && (color === 'default' ? hexToRgba(colorDark, 0.3) : colorDark),
      },

      '& > svg': {
        opacity: 1,
        transform: 'scale(1)',
        fill: color === 'default' ? colorMain : colorContrast,
      },
    },
    /* BASE CHECKBOX PROPS STYLES */
    ...colorProperty.get(color),
    ...sizeProperty.get(size),
    ...roundedProperty.get(rounded),
    /* BASE PROPERTIES */
  };
});
