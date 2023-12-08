import styled from '@emotion/styled';
import { CSSObject, keyframes } from '@emotion/react';

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
    color = 'default',
    size = 'md',
    iconOnly = false,
    rounded = theme.defaultRadius,
    fullWidth = false,
    isUppercase = true,
    hoverEffect = 'default',
  } = baseProps;

  const colorValue = color === 'default' ? theme.bodyColor : color;

  const colorMain = theme.colors[colorValue].main;
  const colorContrast = theme.colors[colorValue].contrast;
  const colorDark = theme.colors[colorValue].dark;

  /* ------ BASE PROPS STYLES ------ */
  /* -- EFFECT STYLES -- */
  const dropletHoverEffect = () => {
    const keyframe = keyframes({
      '100%': {
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: 1,
      },
    });

    const BORDER_WIDTH = '3px';
  
    return {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        backgroundColor: hexToRgba(colorMain, 0.1),
        pointerEvents: 'none',
        borderRadius: theme.edges[rounded],
        opacity: 0,
        transform: 'translate(-50%, -50%) scale(0.5)',
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        borderRadius: `calc(${theme.edges[rounded]} + ${BORDER_WIDTH})`,
        border: `solid ${BORDER_WIDTH} ${hexToRgba(colorMain, 0.3)}`,
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      },
  
      '&:hover:before': {
        animation: !disabled ? `${keyframe} 0.25s ease forwards` : undefined,
      },

      '&:focus:after': {
        opacity: 1,
      },
    } as CSSObject;
  };

  /* -- END - EFFECT STYLES -- */

  /* -- VARIANT STYLES -- */
  const variantProperty = new Property<Variant>();

  variantProperty.if(
    'text',
    {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: colorMain,

      'svg': {
        fill: colorMain,
      },

      '&:hover': {
        opacity: !disabled ? theme.opacities.md : undefined,
      },
      '&:active': {
        opacity: !disabled ? theme.opacities.sm : undefined,
      },
    }
  );

  variantProperty.if(
    'contained',
    () => {
      const hoverEffectStyle = () => {
        if (disabled) return undefined;

        return {
          '&:hover': {
            backgroundColor: colorDark,
          }
        };
      };

      return {
        backgroundColor: colorMain,
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: colorContrast,
  
        'svg': {
          fill: colorContrast,
        },
  
        ...hoverEffectStyle(),

        '&:active': {
          backgroundColor: !disabled ? hexToRgba(colorDark, 0.8) : undefined,
        },
      };
    },
  );

  variantProperty.if(
    'outlined',
    () => {
      const hoverEffectStyle = () => {
        if (disabled) return undefined;

        switch (hoverEffect) {
          case 'droplet': return dropletHoverEffect();
          case 'default': return {
            '&:hover': {
              backgroundColor: hexToRgba(colorMain, 0.1),
              borderColor: 'transparent',
            },
          };
        }
      };

      const activeStyle = !disabled ? {
        opacity: theme.opacities.md,
      } : undefined;

      return {
        backgroundColor: 'transparent',
        borderColor: hexToRgba(colorMain, 0.2),
        borderWidth: '1px',
        borderStyle: 'solid',
        color: colorMain,

        'svg': {
          fill: colorMain,
        },

        // '&:hover': hoverStyle,
        '&:active': activeStyle,
        ...hoverEffectStyle(),
      };
    },
  );

  variantProperty.if(
    'surface',
    () => {
      const hoverEffectStyle = () => {
        if (disabled) return undefined;

        switch (hoverEffect) {
          case 'droplet': return dropletHoverEffect();
          case 'default': return {
            '&:hover': {
              backgroundColor: hexToRgba(colorMain, 0.15),
            },
          };
        }
      };

      return {
        backgroundColor: hexToRgba(colorMain, 0.1),
        borderColor: hexToRgba(colorMain, 0.2),
        borderWidth: '1px',
        borderStyle: 'solid',
        color: colorMain,
  
        'svg': {
          fill: colorMain,
        },
  
        '&:active': {
          opacity: !disabled ? theme.opacities.md : undefined,
        },
  
        ...hoverEffectStyle(),
      };
    }
  );

  variantProperty.if(
    'soft',
    () => {
      const hoverEffectStyle = () => {
        if (disabled) return undefined;

        switch (hoverEffect) {
          case 'droplet': return dropletHoverEffect();
          case 'default': return {
            '&:hover': {
              backgroundColor: hexToRgba(colorMain, 0.2),
            },
          };
        }
      };

      return {
        backgroundColor: hexToRgba(colorMain, 0.1),
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: colorMain,
  
        'svg': {
          fill: colorMain,
        },
  
        '&:active': {
          opacity: !disabled ? theme.opacities.md : undefined,
        },
  
        ...hoverEffectStyle(),
      };
    },
  );

  variantProperty.if(
    'ghost',
    () => {
      const hoverEffectStyle = () => {
        if (disabled) return undefined;

        switch (hoverEffect) {
          case 'droplet': return dropletHoverEffect();
          case 'default': return {
            '&:hover': {
              backgroundColor: hexToRgba(colorMain, 0.1),
            },
          };
        }
      };

      return {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        color: colorMain,
  
        'svg': {
          fill: colorMain,
        },
  
        '&:active': {
          opacity: !disabled ? theme.opacities.md : undefined,
        },
  
        ...hoverEffectStyle(),
      };
    },
  );

  variantProperty.if(
    'bootstrap',
    () => {
      const BEFORE_BORDER_WIDTH = '4px';

      return {
        backgroundColor: colorMain,
        borderStyle: 'none',
        color: colorContrast,
        position: 'relative',
        overflow: 'visible',
  
        'svg': {
          fill: colorContrast,
        },
  
        '&:hover': {
          backgroundColor: !disabled ? colorDark : undefined,
        },
  
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          borderRadius: `calc(${theme.edges[rounded]} + ${BEFORE_BORDER_WIDTH})`,
          border: `solid ${BEFORE_BORDER_WIDTH} ${hexToRgba(colorMain, 0.3)}`,
          backgroundColor: 'transparent',
          transition: theme.transitions.fast,
          pointerEvents: 'none',
          opacity: 0,
        },
  
        '&:focus::before': {
          opacity: 1,
        },
      };
    }
  );
  /* -- END - VARIANT STYLES -- */

  /* -- SIZE STYLES -- */
  const sizeProperty = new Property<Size>();

  sizeProperty.if(
    'sm',
    () => iconOnly ? {
      width: '25px',
      height: '25px',
    } : {
      height: '25px',
      padding: '0 0.7rem',
      fontSize: '11px',
    },
  );

  sizeProperty.if(
    'md',
    () => iconOnly ? {
      width: '30px',
      height: '30px',
    } : {
      height: '30px',
      padding: '0 0.9rem',
      fontSize: '12px',
    },
  );

  sizeProperty.if(
    'lg',
    () => iconOnly ? {
      width: '35px',
      height: '35px',
    } : {
      height: '35px',
      padding: '0 1rem',
      fontSize: '13px',
    },
  );

  sizeProperty.if(
    'xl',
    () => iconOnly ? {
      width: '40px',
      height: '40px',
    } : {
      height: '40px',
      padding: '0 1.1rem',
      fontSize: '14px',
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
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '& svg': {
      transition: theme.transitions.mid,
    },
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