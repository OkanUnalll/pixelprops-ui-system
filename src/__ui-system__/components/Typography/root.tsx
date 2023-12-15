import styled from '@emotion/styled';

import { Property, baseProperties } from 'ui-system/core';
import type { Template } from '../models';
import type {
  FontFamily,
  FontSize,
  FontWeight,
  Limit,
  LineHeight,
  TextAlign,
  TextBaseProps,
} from './props.types';
import { Color } from 'ui-system/theme';

export interface TextRootProps extends Template<TextBaseProps> {}

export const TextRoot = styled.p<TextRootProps>((props) => {
  /* PROPS */
  const { baseProps, theme } = props;

  /* BASE PROPS */
  const {
    color = theme.textColor,
    limit,
    textAlign = 'left',
    fontFamily = theme.defaultFont,
    fontSize,
    fontWeight,
    lineHeight,
  } = baseProps;

  /* ------ BASE PROPS STYLES ------ */
  /* -- COLOR STYLES -- */
  const colorProperty = new Property<Color>((value) => ({
    color: theme.colors[value].main,
  }));
  /* -- END - COLOR STYLES -- */

  /* -- LIMIT STYLES -- */
  const limitProperty = new Property<Limit>((value) => {
    if (typeof value === 'object') return {
      display: '-webkit-box',
      WebkitLineClamp: value?.lineClamp ?? 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      width: value?.width ?? '100%',
      maxWidth: value?.maxWidth ?? '100%',
    };

    if (typeof value === 'boolean' && value === true) return {
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%',
    };

    return {}; 
  });
  /* -- END - LIMIT STYLES -- */

  /* -- COLOR STYLES -- */
  const textAlignProperty = new Property<TextAlign>((value) => ({
    textAlign: value,
  }));
  /* -- END - COLOR STYLES -- */

  /* -- FONT FAMILY STYLES -- */
  const fontFamilyProperty = new Property<FontFamily>((value) => ({
    fontFamily: `${theme.fonts[value]}, sans-serif`,
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
    /* BASE TEXT PROPS STYLES */
    ...colorProperty.get(color),
    ...limitProperty.get(limit),
    ...textAlignProperty.get(textAlign),
    ...fontFamilyProperty.get(fontFamily),
    ...fontSizeProperty.get(fontSize),
    ...fontWeightProperty.get(fontWeight),
    ...lineHeightProperty.get(lineHeight),
    /* BASE PROPERTIES */
    ...baseProperties(props),
  };
});

/* ------ VARIANTS ------ */
/* -- H1 VARIANT -- */
export const H1 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h1.lineHeight,
  };
}).withComponent('h1');

/* -- H2 VARIANT -- */
export const H2 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    lineHeight: theme.typography.h2.lineHeight,
  };
}).withComponent('h2');

/* -- H3 VARIANT -- */
export const H3 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    lineHeight: theme.typography.h3.lineHeight,
  };
}).withComponent('h3');

/* -- H4 VARIANT -- */
export const H4 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h4.fontWeight,
    lineHeight: theme.typography.h4.lineHeight,
  };
}).withComponent('h4');

/* -- H5 VARIANT -- */
export const H5 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    lineHeight: theme.typography.h5.lineHeight,
  };
}).withComponent('h5');

/* -- H6 VARIANT -- */
export const H6 = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    lineHeight: theme.typography.h6.lineHeight,
  };
}).withComponent('h6');

/* -- PARAGRAPH VARIANT -- */
export const Paragraph = styled(TextRoot)((props) => {
  const { theme } = props;

  return {
    fontSize: theme.typography.paragraph.fontSize,
    fontWeight: theme.typography.paragraph.fontWeight,
    lineHeight: theme.typography.paragraph.lineHeight,
  };
}).withComponent('p');

/* -- STRONG VARIANT -- */
export const Strong = TextRoot.withComponent('strong');

/* -- EM VARIANT -- */
export const Em = TextRoot.withComponent('em');

/* -- DEL VARIANT -- */
export const Del = TextRoot.withComponent('del');

/* -- INS VARIANT -- */
export const Ins = TextRoot.withComponent('ins');
/* ------ END - VARIANTS ------ */