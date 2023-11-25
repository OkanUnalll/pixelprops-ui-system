import styled, { CSSObject } from '@emotion/styled';

import { baseProperties, devices } from 'ui-system/core';

import { Template } from '../_props-models_';
import { BaseGridItemProps, BaseGridProps } from './Prop-Model';

const GRID_COLUMN = 12;

export const GridItemTemplate = styled.div<Template<BaseGridItemProps>>((props) => {
    /* PROPS */
    const { baseProps } = props;
    
    /* BASE PROPS */
    const { xs, sm, md, lg, xl, xxl } = baseProps;

    const gridResponsiveStyles = () => {
      const values: {
        key: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        value: any;
      }[] = [
        { key: 'xs', value: xs },
        { key: 'sm', value: sm },
        { key: 'md', value: md },
        { key: 'lg', value: lg },
        { key: 'xl', value: xl },
        { key: 'xxl', value: xxl },
      ];

      let css: CSSObject = {};

      values.forEach((value) => {
        if (value.key !== 'xs') {
          const mediaQuery = devices[value.key];

          css[mediaQuery] = {
            width: `calc(100% * ${value.value} / ${GRID_COLUMN})`,
          } as CSSObject;
        }

        if (value.key === 'xs') {
          css = {
            ...css,
            width: `calc(100% * ${xs} / ${GRID_COLUMN})`,
          };
        }
      });

      return { ...css };
    };

    return {
      boxSizing: 'border-box',
      /* BASE GRID ITEM PROPS STYLES */
      ...gridResponsiveStyles(),
      /* BASE PROPERTIES */
      ...baseProperties(props),
    };
});

export const GridTemplate = styled.div<Template<BaseGridProps>>((props) => {
  /* PROPS */
  const { baseProps } = props;

  /* BASE PROPS */
  const { spacing } = baseProps;

  const spacingStyles = () => {
    const gridItem = `${GridItemTemplate}`;

    return {
      [gridItem]: {
        padding: spacing ?? 0,
      },
    } as CSSObject;
  };

  return {
    display: 'flex',
    flexFlow: 'wrap',
    minWidth: '0px',
    /* BASE GRID PROPS STYLES */
    ...spacingStyles(),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});