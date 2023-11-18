import type CSS from 'csstype';

import { responsive, responsiveProps } from 'ui-system/utils';

export interface CSSProps {
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
  $responsive?: any;
  // responsive props
  $xs?: CSSProps,
  $sm?: CSSProps,
  $md?: CSSProps,
  $lg?: CSSProps,
  $xl?: CSSProps,
  $xxl?: CSSProps,
};

/**
 * refs: https://styled-components.com/docs/api#css
 *       
*/
const cssProps = (props: CSSProps): string => {
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
        margin-top: ${typeof $my === 'number' ? `${$my}rem` : $my};
        margin-bottom: ${typeof $my === 'number' ? `${$my}rem` : $my};
      `,
      mx: `
        margin-left: ${typeof $mx === 'number' ? `${$mx}rem` : $mx};
        margin-right: ${typeof $mx === 'number' ? `${$mx}rem` : $mx};
      `,
      mt: `
        margin-top: ${typeof $mt === 'number' ? `${$mt}rem` : $mt};
      `,
      mr: `
        margin-right: ${typeof $mr === 'number' ? `${$mr}rem` : $mr};
      `,
      mb: `
        margin-bottom: ${typeof $mb === 'number' ? `${$mb}rem` : $mb};
      `,
      ml: `
        margin-left: ${typeof $ml === 'number' ? `${$ml}rem` : $ml};
      `,
      py: `
        padding-top: ${typeof $py === 'number' ? `${$py}rem` : $py};
        padding-bottom: ${typeof $py === 'number' ? `${$py}rem` : $py};
      `,
      px: `
        padding-left: ${typeof $px === 'number' ? `${$px}rem` : $px};
        padding-right: ${typeof $px === 'number' ? `${$px}rem` : $px};
      `,
      pt: `
        padding-top: ${typeof $pt === 'number' ? `${$pt}rem` : $pt};
      `,
      pr: `
        padding-right: ${typeof $pr === 'number' ? `${$pr}rem` : $pr};
      `,
      pb: `
        padding-bottom: ${typeof $pb === 'number' ? `${$pb}rem` : $pb};
      `,
      pl: `
      margin-left: ${typeof $pl === 'number' ? `${$pl}rem` : $pl};
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
        gap: ${typeof $gap === 'number' ? `${$gap}rem` : $gap};
      `,
      width: `
        width: ${typeof $width === 'number' ? `${$width}rem` : $width};
      `,
      minWidth: `
        min-width: ${typeof $minWidth === 'number' ? `${$minWidth}rem` : $minWidth};
      `,
      maxWidth: `
        max-width: ${typeof $maxWidth === 'number' ? `${$maxWidth}rem` : $maxWidth};
      `,
      height: `
        height: ${typeof $height === 'number' ? `${$height}rem` : $height};
      `,
      minHeight: `
        min-height: ${typeof $minHeight === 'number' ? `${$minHeight}rem` : $minHeight};
      `,
      maxHeight: `
        max-height: ${typeof $maxHeight === 'number' ? `${$maxHeight}rem` : $maxHeight};
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
      ${$responsive ? responsive($responsive) : ''}

      ${$xxl ? responsiveProps('xxl', $xxl) : ''}
      ${$xl ? responsiveProps('xl', $xl) : ''}
      ${$lg ? responsiveProps('lg', $lg) : ''}
      ${$md ? responsiveProps('md', $md) : ''}
      ${$sm ? responsiveProps('sm', $sm) : ''}
      ${$xs ? responsiveProps('xs', $xs) : ''}
    `;
};

export { cssProps };
