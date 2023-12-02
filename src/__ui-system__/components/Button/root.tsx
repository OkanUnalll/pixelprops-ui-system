import styled from '@emotion/styled';

import { hexToRgba } from 'ui-system/utils';

import { Property, baseProperties } from 'ui-system/core';

import type { ButtonBaseProps, Rounded, Size, Variant } from './props.types';
import { Template } from '../models';

export const ButtonRoot = styled.button<Template<ButtonBaseProps>>((props) => {
  /* PROPS */
  const { baseProps, theme, disabled } = props;

  /* BASE PROPS */
  const {
    variant = 'contained',
    color = theme.defaultPrimaryColor,
    size = 'md',
    iconOnly = false,
    rounded = theme.defaultRadius,
    fullWidth = false,
    isUppercase = true,
  } = baseProps;

  const colorValue = theme.colors[color].main;
  const colorTextValue = theme.colors[color].contrastText;
  const colorDarkValue = theme.colors[color].dark;

  /* ------ BASE PROPS STYLES ------ */
  /* -- VARIANT STYLES -- */
  const variantProperty = new Property<Variant>();

  variantProperty.if(
    'text',
    {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorValue,

      'svg': {
        fill: colorValue,
      },

      '&:hover': {
        opacity: !disabled ? theme.opacities.lg : undefined,
      },
      '&:active': {
        transform: !disabled ? 'scale(0.95)' : undefined,
        opacity: !disabled ? theme.opacities.sm : undefined,
      },
    }
  );

  variantProperty.if(
    'contained',
    {
      backgroundColor: colorValue,
      borderColor: colorValue,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorTextValue,

      'svg': {
        fill: colorTextValue,
      },

      '&:hover': {
        opacity: !disabled ? theme.opacities.lg : undefined,
      },
      '&:active': {
        transform: !disabled ? 'scale(0.95)' : undefined,
        opacity: !disabled ? theme.opacities.sm : undefined,
      },
    },
  );

  variantProperty.if(
    'outlined',
    {
      backgroundColor: 'transparent',
      borderColor: colorValue,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorValue,

      'svg': {
        fill: colorValue,
      },

      '&:hover': {
        opacity: !disabled ? theme.opacities.lg : undefined,
      },
      '&:active': {
        transform: !disabled ? 'scale(0.95)' : undefined,
        opacity: !disabled ? theme.opacities.sm : undefined,
      },
    },
  );

  variantProperty.if(
    'ghost',
    {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorValue,

      'svg': {
        fill: colorValue,
      },

      '&:hover': {
        backgroundColor: !disabled ? hexToRgba(colorValue, 0.1) : undefined,
      },
      '&:active': {
        transform: !disabled ? 'scale(0.95)' : undefined,
        opacity: !disabled ? theme.opacities.md : undefined,
      },
    },
  );

  variantProperty.if(
    'bootstrap',
    {
      backgroundColor: colorValue,
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorTextValue,
      position: 'relative',

      'svg': {
        fill: colorTextValue,
      },

      '&:hover': {
        backgroundColor: !disabled ? colorDarkValue : undefined,
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        borderRadius: `calc(${theme.edges[rounded]} + 4px)`,
        border: `solid 5px ${hexToRgba(colorValue, 0.3)}`,
        backgroundColor: 'transparent',
        transition: theme.transitions.fast,
        pointerEvents: 'none',
        opacity: 0,
      },

      '&:focus::before': {
        opacity: 1,
      },
    },
  );
  /* -- END - VARIANT STYLES -- */

  /* -- SIZE STYLES -- */
  const sizeProperty = new Property<Size>();

  sizeProperty.if(
    'sm',
    () => {
      const css = iconOnly ? {
        width: '27px',
        height: '27px',
      } : {
        height: '27px',
        padding: '0 0.7rem',
        fontSize: '12px',
      };

      return css;
    },
  );

  sizeProperty.if(
    'md',
    () => {
      const css = iconOnly ? {
        width: '32px',
        height: '32px',
      } : {
        height: '32px',
        padding: '0 0.9rem',
        fontSize: '13px',
      };

      return css;
    },
  );

  sizeProperty.if(
    'lg',
    () => {
      const css = iconOnly ? {
        width: '37px',
        height: '37px',
      } : {
        height: '37px',
        padding: '0 1rem',
        fontSize: '14px',
      };

      return css;
    },
  );

  sizeProperty.if(
    'xl',
    () => {
      const css = iconOnly ? {
        width: '42px',
        height: '42px',
      } : {
        height: '42px',
        padding: '0 1.1rem',
        fontSize: '15px',
      };

      return css;
    },
  );

  sizeProperty.if(
    'container',
    {
      width: 'auto',
      height: 'auto',
    },
  );
  /* -- END - SIZE STYLES -- */

  /* -- ROUNDED STYLES -- */
  const roundedProperty = new Property<Rounded>(
    (value) => ({
      borderRadius: theme.edges[value],
    })
  );
  /* -- END - ROUNDED STYLES -- */

  /* -- FULL WIDTH STYLES -- */
  const fullWidthVariant = new Property<boolean>((value) => {    
    return value ? {
      width: '100%',
    } : {};
  });
  /* -- END - FULL WIDTH STYLES -- */

  /* -- IS UPPERCASE STYLES -- */
  const isUppercaseProperty = new Property<boolean>((value) => ({
    textTransform: value ? 'uppercase' : 'none',
  }));
  /* -- END - IS UPPERCASE STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */

  return {
    /* DEFAULT STYLES */
    cursor: 'pointer',
    transition: theme.transitions.mid,
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:disabled': {
      opacity: theme.opacities.disabled,
      cursor: 'default',
    },
    /* BASE BUTTON PROPS STYLES */
    ...variantProperty.get(variant),
    ...sizeProperty.get(size),
    ...roundedProperty.get(rounded),
    ...fullWidthVariant.get(fullWidth),
    ...isUppercaseProperty.get(isUppercase),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});