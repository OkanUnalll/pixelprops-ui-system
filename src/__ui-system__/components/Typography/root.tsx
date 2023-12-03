import styled from '@emotion/styled';

import { Property, baseProperties, layoutProperties } from 'ui-system/core';
import type { Template } from '../models';
import type {
  FontFamily,
  FontSize,
  FontWeight,
  Limit,
  LineHeight,
  TextAlign,
  TypographyBaseProps,
} from './props.types';
import { Color } from 'ui-system/theme';

export interface TypographyRootProps extends Template<TypographyBaseProps> {}

export const TypographyRoot = styled.div<TypographyRootProps>((props) => {
  /* PROPS */
  const { baseProps, theme } = props;

  /* BASE PROPS */
  const {
    color = theme.textColor,
    limit,
    textAlign = 'start',
    fontFamily = theme.defaultFont,
    fontSize,
    fontWeight,
    lineHeight,
  } = baseProps;

  /* ------ BASE PROPS STYLES ------ */
  /* -- COLOR STYLES -- */
  const colorProperty = new Property<Color>((value) => ({
    color: value,
  }));
  /* -- END - COLOR STYLES -- */

  /* -- LIMIT STYLES -- */
  const limitProperty = new Property<Limit>((value) => ({
    display: '-webkit-box',
    WebkitLineClamp: value?.lineClamp ?? 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    width: value?.width ?? '100%',
    maxWidth: value?.maxWidth ?? '100%',
  }));
  /* -- END - LIMIT STYLES -- */

  /* -- COLOR STYLES -- */
  const textAlignProperty = new Property<TextAlign>((value) => ({
    textAlign: value,
  }));
  /* -- END - COLOR STYLES -- */

  /* -- FONT FAMILY STYLES -- */
  const fontFamilyProperty = new Property<FontFamily>((value) => ({
    fontFamily: `${value}, sans-serif`,
  }));
  /* -- END - FONT FAMILY STYLES -- */

  /* -- FONT SIZE STYLES -- */
  const fontSizeProperty = new Property<FontSize>((value) => ({
    fontSize: value,
  }));
  /* -- END - FONT SIZE STYLES -- */

  /* -- FONT WEIGHT STYLES -- */
  const fontWeightProperty = new Property<FontWeight>((value) => ({
    fontWeight: value,
  }));
  /* -- END - FONT WEIGHT STYLES -- */

  /* -- LINE HEIGHT STYLES -- */
  const lineHeightProperty = new Property<LineHeight>((value) => ({
    lineHeight: value,
  }));
  /* -- END - LINE HEIGHT STYLES -- */
  /* ------ END - BASE PROPS STYLES ------ */

  return {
    display: 'block',
    /* BASE BOX PROPS STYLES */
    ...colorProperty.get(color),
    ...limitProperty.get(limit),
    ...textAlignProperty.get(textAlign),
    ...fontFamilyProperty.get(fontFamily),
    ...fontSizeProperty.get(fontSize),
    ...fontWeightProperty.get(fontWeight),
    ...lineHeightProperty.get(lineHeight),
    /* BASE PROPERTIES */
    ...baseProperties(props),
    ...layoutProperties(props),
  };
});

export const H1 = TypographyRoot.withComponent('h1');
export const H2 = TypographyRoot.withComponent('h2');
export const H3 = TypographyRoot.withComponent('h3');
export const H4 = TypographyRoot.withComponent('h4');
export const H5 = TypographyRoot.withComponent('h5');
export const H6 = TypographyRoot.withComponent('h6');
export const P = TypographyRoot.withComponent('p');