import type CSS from 'csstype';

import type { ISize } from 'ui-system/core';

import { getResponsive, responsiveProps } from 'ui-system/core';

export interface ICSSProps {
  $mb?: number | string; // margin bottom
  $mt?: number | string; // margin top
  $ml?: number | string; // margin left
  $mr?: number | string; // margin right
  $mx?: number | string; // margin x
  $my?: number | string; // margin y
  $pb?: number | string; // padding bottom
  $pt?: number | string; // padding top
  $pl?: number | string; // padding left
  $pr?: number | string; // padding right
  $px?: number | string; // padding x
  $py?: number | string; // padding y
  $display?: CSS.Property.Display;
  $flexDirection?: CSS.Property.FlexDirection;
  $justifyContent?: CSS.Property.JustifyContent;
  $alignItems?: CSS.Property.AlignItems;
  $gap?: number | string;
  $width?: number | string;
  $minWidth?: number | string;
  $maxWidth?: number | string;
  $height?: number | string;
  $minHeight?: number | string;
  $maxHeight?: number | string;
  $cursor?: CSS.Property.Cursor;
  $position?: CSS.Property.Position;
  $zIndex?: number;
  // custom css props
  $css?: string; 
  $responsive?: ISize;
  // responsive props
  $xs?: ICSSProps,
  $sm?: ICSSProps,
  $md?: ICSSProps,
  $lg?: ICSSProps,
  $xl?: ICSSProps,
  $xxl?: ICSSProps,
};

/**
 * refs: https://styled-components.com/docs/api#css
 *       
*/
const cssProps = (props: ICSSProps): string => {
    const {
      $mb,
      $ml,
      $mr,
      $mt,
      $mx,
      $my,
      $pb,
      $pl,
      $pr,
      $pt,
      $px,
      $py,
      $display,
      $flexDirection,
      $alignItems,
      $justifyContent,
      $gap,
      $width,
      $minWidth,
      $maxWidth, 
      $height,
      $minHeight,
      $maxHeight,
      $cursor,
      $position,
      $zIndex,
      $css,
      $responsive,
      $xs,
      $sm,
      $md,
      $lg,
      $xl,
      $xxl,
    } = props;

    // CSS PROPS
    const templates = {
      my: `
        margin-top: ${typeof $my === 'number' ? `calc(${$my} * 1px)` : $my};
        margin-bottom: ${typeof $my === 'number' ? `calc(${$my} * 1px)` : $my};
      `,
      mx: `
        margin-left: ${typeof $mx === 'number' ? `calc(${$mx} * 1px)` : $mx};
        margin-right: ${typeof $mx === 'number' ? `calc(${$mx} * 1px)` : $mx};
      `,
      mt: `
        margin-top: ${typeof $mt === 'number' ? `calc(${$mt} * 1px)` : $mt};
      `,
      mr: `
        margin-right: ${typeof $mr === 'number' ? `calc(${$mr} * 1px)` : $mr};
      `,
      mb: `
        margin-bottom: ${typeof $mb === 'number' ? `calc(${$mb} * 1px)` : $mb};
      `,
      ml: `
        margin-left: ${typeof $ml === 'number' ? `calc(${$ml} * 1px)` : $ml};
      `,
      py: `
        padding-top: ${typeof $py === 'number' ? `calc(${$py} * 1px)` : $py};
        padding-bottom: ${typeof $py === 'number' ? `calc(${$py} * 1px)` : $py};
      `,
      px: `
        padding-left: ${typeof $px === 'number' ? `calc(${$px} * 1px)` : $px};
        padding-right: ${typeof $px === 'number' ? `calc(${$px} * 1px)` : $px};
      `,
      pt: `
        padding-top: ${typeof $pt === 'number' ? `calc(${$pt} * 1px)` : $pt};
      `,
      pr: `
        padding-right: ${typeof $pr === 'number' ? `calc(${$pr} * 1px)` : $pr};
      `,
      pb: `
        padding-bottom: ${typeof $pb === 'number' ? `calc(${$pb} * 1px)` : $pb};
      `,
      pl: `
      margin-left: ${typeof $pl === 'number' ? `calc(${$pl} * 1px)` : $pl};
      `,
      display: `
        display: ${$display};
      `,
      flexDirection: `
        flex-direction: ${$flexDirection};
      `,
      alignItems: `
        align-items: ${$alignItems};
      `,
      justifyContent: `
        justify-content: ${$justifyContent};
      `,
      gap: `
        gap: ${typeof $gap === 'number' ? `calc(${$gap} * 1px)` : $gap};
      `,
      width: `
        width: ${typeof $width === 'number' ? `calc(${$width} * 1px)` : $width};
      `,
      minWidth: `
        min-width: ${typeof $minWidth === 'number' ? `calc(${$minWidth} * 1px)` : $minWidth};
      `,
      maxWidth: `
        max-width: ${typeof $maxWidth === 'number' ? `calc(${$maxWidth} * 1px)` : $maxWidth};
      `,
      height: `
        height: ${typeof $height === 'number' ? `calc(${$height} * 1px)` : $height};
      `,
      minHeight: `
        min-height: ${typeof $minHeight === 'number' ? `calc(${$minHeight} * 1px)` : $minHeight};
      `,
      maxHeight: `
        max-height: ${typeof $maxHeight === 'number' ? `calc(${$maxHeight} * 1px)` : $maxHeight};
      `,
      cursor: `
        cursor: ${$cursor};
      `,
      position: `
        position: ${$position};
      `,
      zIndex: `
        z-index: ${$zIndex};
      `,
    };

    return `
      ${$my ? templates.my : ''}
      ${$mx ? templates.mx : ''}
      ${$mt ? templates.mt : ''}
      ${$mr ? templates.mr : ''}
      ${$mb ? templates.mb : ''}
      ${$ml ? templates.ml : ''}
      ${$py ? templates.py : ''}
      ${$px ? templates.px : ''}
      ${$pt ? templates.pt : ''}
      ${$pr ? templates.pr : ''}
      ${$pb ? templates.pb : ''}
      ${$pl ? templates.pl : ''}
      ${$display ? templates.display : ''}
      ${$flexDirection ? templates.flexDirection : ''}
      ${$alignItems ? templates.alignItems : ''}
      ${$justifyContent ? templates.justifyContent : ''}
      ${$gap ? templates.gap : ''}
      ${$width ? templates.width : ''}
      ${$minWidth ? templates.minWidth : ''}
      ${$maxWidth ? templates.maxWidth : ''}
      ${$height ? templates.height : ''}
      ${$minHeight ? templates.minHeight : ''}
      ${$maxHeight ? templates.maxHeight : ''}
      ${$cursor ? templates.cursor : ''}
      ${$position ? templates.position : ''}
      ${$zIndex ? templates.zIndex : ''}

      ${$css ?? ''}
      ${$responsive ? getResponsive($responsive) : ''}

      ${$xxl ? responsiveProps('xxl', $xxl) : ''}
      ${$xl ? responsiveProps('xl', $xl) : ''}
      ${$lg ? responsiveProps('lg', $lg) : ''}
      ${$md ? responsiveProps('md', $md) : ''}
      ${$sm ? responsiveProps('sm', $sm) : ''}
      ${$xs ? responsiveProps('xs', $xs) : ''}
    `;
};

export { cssProps };
