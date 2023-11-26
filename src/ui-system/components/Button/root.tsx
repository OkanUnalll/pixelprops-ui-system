import styled, { CSSObject } from '@emotion/styled';

import { baseProperties } from 'ui-system/core';

import type { BaseButtonProps } from './props.model';
import { Template } from '../models';

export const ButtonTemplate = styled.button<Template<BaseButtonProps>>((props) => {
  /* PROPS */
  const { baseProps, theme, disabled } = props;

  /* BASE PROPS */
  const { variant, color, size, iconOnly, rounded } = baseProps;

  /* BASE PROPS STYLES */
  const variantStyles = () => {
    const colorStyle = theme.colors[color ?? 'primary'].main;
    const textColorStyle = theme.colors[color ?? 'primary'].contrastText;

    const textVariant: CSSObject = {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: colorStyle,

      'svg': {
        fill: colorStyle,
      },
    };

    const containedVariant: CSSObject = {
      backgroundColor: colorStyle,
      borderColor: colorStyle,
      color: textColorStyle,

      'svg': {
        fill: textColorStyle,
      },
    };

    const outlinedVariant: CSSObject = {
      backgroundColor: 'transparent',
      borderColor: colorStyle,
      color: colorStyle,

      'svg': {
        fill: colorStyle,
      },
    };

    switch (variant) {
      case 'text': return textVariant;
      case 'contained': return containedVariant;
      case 'outlined': return outlinedVariant;
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
    }
  };

  const roundedStyles = () => {
    return {
      borderRadius: theme.edges[rounded ?? 'md'],
    } as CSSObject;
  };
  /* END - BASE PROPS STYLES */

  return {
    /* DEFAULT STYLES */
    borderWidth: '1px',
    borderStyle: 'solid',
    cursor: 'pointer',
    transition: theme.transitions.mid,
    textTransform: 'uppercase',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: `${theme.fonts.roboto}, sans-serif`,
    '&:hover': {
      opacity: !disabled ? theme.opacities.lg : undefined,
    },
    '&:active': {
      opacity: !disabled ? theme.opacities.md : undefined,
    },
    '&:disabled': {
      opacity: theme.opacities.disabled,
      cursor: 'default',
    },
    /* BASE BUTTON PROPS STYLES */
    ...variantStyles(),
    ...sizeStyles(),
    ...roundedStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});