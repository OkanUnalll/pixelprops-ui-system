import styled, { CSSObject } from '@emotion/styled';

import { baseProperties } from 'ui-system/core';

import type { BaseButtonProps } from './props.model';
import { Template } from '../models';
import { hexToRgba } from 'ui-system/utils';

export const ButtonTemplate = styled.button<Template<BaseButtonProps>>((props) => {
  /* PROPS */
  const { baseProps, theme, disabled } = props;

  /* BASE PROPS */
  const {
    variant = 'contained',
    color = theme.defaultPrimaryColor,
    size = 'md',
    iconOnly = false,
    rounded = theme.defaultRadius,
    full = false,
    isUppercase = true,
  } = baseProps;

  /* BASE PROPS STYLES */
  const variantStyles = () => {
    const colorValue = theme.colors[color].main;
    const darkColorValue = theme.colors[color].dark;
    const textColorValue = theme.colors[color].contrastText;

    const textVariant: CSSObject = {
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
        opacity: !disabled ? theme.opacities.md : undefined,
      },
    };

    const containedVariant: CSSObject = {
      backgroundColor: colorValue,
      borderColor: colorValue,
      borderWidth: '1px',
      borderStyle: 'solid',
      color: textColorValue,

      'svg': {
        fill: textColorValue,
      },

      '&:hover': {
        opacity: !disabled ? theme.opacities.lg : undefined,
      },
      '&:active': {
        opacity: !disabled ? theme.opacities.md : undefined,
      },
    };

    const outlinedVariant: CSSObject = {
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
        opacity: !disabled ? theme.opacities.md : undefined,
      },
    };

    const ghostVarinat: CSSObject = {
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
        opacity: !disabled ? theme.opacities.md : undefined,
      },
    };

    const bootstrapVarinat: CSSObject = {
      backgroundColor: colorValue,
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: textColorValue,
      position: 'relative',

      'svg': {
        fill: textColorValue,
      },

      '&:hover': {
        backgroundColor: !disabled ? darkColorValue : undefined,
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        borderRadius: `calc(${theme.edges[rounded ?? 'md']} + 4px)`,
        backgroundColor: hexToRgba(colorValue, 0.3),
        zIndex: -1,
        transition: theme.transitions.fast,
        pointerEvents: 'none',
      },

      '&:focus::before': {
        padding: '5.5px',
      },
    };

    switch (variant) {
      case 'text': return textVariant;
      case 'contained': return containedVariant;
      case 'outlined': return outlinedVariant;
      case 'ghost': return ghostVarinat;
      case 'bootstrap': return bootstrapVarinat;
    }
  };

  const sizeStyles = () => {
    if (iconOnly) {
      switch (size) {
        case 'sm': return {
          width: '29px',
          height: '29px',
        } as CSSObject;
        case 'md': return {
          width: '36px',
          height: '36px',
        } as CSSObject;
        case 'lg': return {
          width: '42px',
          height: '42px',
        } as CSSObject;
        case 'xl': return {
          width: '48px',
          height: '48px',
        } as CSSObject;
      }
    }

    switch (size) {
      case 'sm': return {
        height: '29px',
        padding: '0 0.7rem',
        fontSize: '13px',
      } as CSSObject;
      case 'md': return {
        height: '36px',
        padding: '0 0.9rem',
        fontSize: '14px',
      } as CSSObject;
      case 'lg': return {
        height: '42px',
        padding: '0 1rem',
        fontSize: '15px',
      } as CSSObject;
      case 'xl': return {
        height: '48px',
        padding: '0 1.1rem',
        fontSize: '16px',
      } as CSSObject;
    }
  };

  const roundedStyles = () => {
    return {
      borderRadius: theme.edges[rounded],
    } as CSSObject;
  };

  const fullStyles = () => {
    return {
      width: full ? '100%' : 'auto',
    } as CSSObject;
  };

  const isUppercaseStyles = () => {
    return {
      textTransform: isUppercase ? 'uppercase' : 'none',
    } as CSSObject;
  };
  /* END - BASE PROPS STYLES */

  return {
    /* DEFAULT STYLES */
    cursor: 'pointer',
    transition: theme.transitions.mid,
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: `${theme.fonts.roboto}, sans-serif`,
    lineHeight: 0,
    '&:disabled': {
      opacity: theme.opacities.disabled,
      cursor: 'default',
    },
    /* BASE BUTTON PROPS STYLES */
    ...variantStyles(),
    ...sizeStyles(),
    ...roundedStyles(),
    ...fullStyles(),
    ...isUppercaseStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});