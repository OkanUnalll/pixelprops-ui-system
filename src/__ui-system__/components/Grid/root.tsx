import styled from '@emotion/styled';
import type { CSSObject } from '@emotion/react';

import { Property, baseProperties, layoutProperties } from 'ui-system/core';
import { devices } from 'ui-system/theme';

import { Template } from 'ui-system/components/models';
import { GridItemBaseProps, GridContainerBaseProps, Spacing } from './props.model';

const GRID_COLUMN = 12;

export const GridItemRoot = styled.div<Template<GridItemBaseProps>>((props) => {
    /* PROPS */
    const { baseProps } = props;

    /* BASE PROPS */
    const { xs, sm, md, lg, xl, xxl } = baseProps;

    /* ------ BASE PROPS STYLES ------ */
    /* -- GRID RESPONSIVE STYLES -- */
    const gridResponsiveStyles = () => {
      interface Values {
        key: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        value: number;
      }

      const values: Values[] = [
        { key: 'xs', value: xs as number },
        { key: 'sm', value: sm as number},
        { key: 'md', value: md as number},
        { key: 'lg', value: lg as number},
        { key: 'xl', value: xl as number},
        { key: 'xxl', value: xxl as number},
      ];

      let css: CSSObject = {};

      const currentValues: Values[] = [];

      values.forEach((value) => {
        if (value.value) currentValues.push(value);
      });

      currentValues.forEach((value, index) => {
        if (index === 0 || value.key === 'xs') {
          css = {
            ...css,
            width: `calc(100% * ${value.value} / ${GRID_COLUMN})`,
          };
        } else {
          const mediaQuery = devices[value.key];
  
          css[mediaQuery] = {
            width: `calc(100% * ${value.value} / ${GRID_COLUMN})`,
          } as CSSObject;
        }
        
      });

      return css;
    };
    /* -- END - GRID RESPONSIVE STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */
  

    return {
      boxSizing: 'border-box',
      /* BASE GRID ITEM PROPS STYLES */
      // ...gridResponsiveStyles(),
      ...gridResponsiveStyles(),
      /* BASE PROPERTIES */
      ...baseProperties(props),
      ...layoutProperties(props),
    };
});

export const GridContainerRoot = styled.div<Template<GridContainerBaseProps>>((props) => {
  /* PROPS */
  const { baseProps } = props;

  /* BASE PROPS */
  const {
    spacing = 0,
  } = baseProps;

  /* ------ BASE PROPS STYLES ------ */
  /* -- SPACING STYLES -- */
  const spacingProperty = new Property<Spacing>((value) => {
    const gridItem = `${GridItemRoot}`;

    return {
      [gridItem]: {
        padding: value,
      },
    };
  });
  /* -- END - SPACING STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */

  return {
    display: 'flex',
    flexFlow: 'wrap',
    minWidth: '0px',
    /* BASE GRID CONTAINER PROPS STYLES */
    ...spacingProperty.get(spacing),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});