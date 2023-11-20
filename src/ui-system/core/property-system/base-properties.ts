import { CSSObject } from '@emotion/styled';

import CSS from 'csstype';

import { breaker } from './breaker';
import { deviceListener } from './device-listener';
import type { Devices } from './device-listener';

export interface MarginProperties {
  /**
   * CSS Equivalent: @example
   * {
   * margin-right: <property-value>;
   * margin-left: <property-value>;
   * }
  */
  mx?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {
   *   margin-top: <property-value>;
   *   margin-bottom: <property-value>;
   * }
  */
  my?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  margin-top: <property-value>;  }
  */
  mt?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  margin-right: <property-value>;  }
  */
  mr?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  margin-bottom: <property-value>;  }
  */
  mb?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  margin-left: <property-value>;  }
  */
  ml?: string | number | Devices<string | number>;
}

export interface PaddingProperties {
  /**
   * CSS Equivalent: @example
   * {
   *   padding-right: <property-value>;
   *   padding-left: <property-value>;
   * }
  */
  px?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {
   *   padding-top: <property-value>;
   *   padding-bottom: <property-value>;
   * }
  */
  py?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  padding-top: <property-value>;  }
  */
  pt?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  padding-right: <property-value>;  }
  */
  pr?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  padding-bottom: <property-value>;  }
  */
  pb?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  padding-left: <property-value>;  }
  */
  pl?: string | number | Devices<string | number>;
}

export interface LayoutProperties {
  /**
   * CSS Equivalent: @example
   * {  display: <property-value>;  }
  */
  _display?: CSS.Property.Display | Devices<CSS.Property.Display>;
  /**
   * CSS Equivalent: @example
   * {  align-items: <property-value>;  }
  */
  alignItems?: CSS.Property.AlignItems | Devices<CSS.Property.AlignItems>;
  /**
   * CSS Equivalent: @example
   * {  align-content: <property-value>;  }
  */
  alignContent?: CSS.Property.AlignContent | Devices<CSS.Property.AlignContent>;
  /**
   * CSS Equivalent: @example
   * {  align-self: <property-value>;  }
  */
  alignSelf?: CSS.Property.AlignSelf | Devices<CSS.Property.AlignSelf>;
  /**
   * CSS Equivalent: @example
   * {  justify-content: <property-value>;  }
  */
  justifyContent?: CSS.Property.JustifyContent | Devices<CSS.Property.JustifyContent>;
  /**
   * CSS Equivalent: @example
   * {  justify-items: <property-value>;  }
  */
  justifyItems?: CSS.Property.JustifyItems | Devices<CSS.Property.JustifyItems>;
  /**
   * CSS Equivalent: @example
   * {  justify-self: <property-value>;  }
  */
  justifySelf?: CSS.Property.JustifySelf | Devices<CSS.Property.JustifySelf>;
  /**
   * CSS Equivalent: @example
   * {  gap: <property-value>;  }
  */
  gap?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  column-gap: <property-value>;  }
  */
  gapX?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  row-gap: <property-value>;  }
  */
  gapY?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  width: <property-value>;  }
  */
  w?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  min-width: <property-value>;  }
  */
  minW?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  max-width: <property-value>;  }
  */
  maxW?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  height: <property-value>;  }
  */
  h?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  min-height: <property-value>;  }
  */
  minH?: string | number | Devices<string | number>;
  /**
   * CSS Equivalent: @example
   * {  max-height: <property-value>;  }
  */
  maxH?: string | number | Devices<string | number>;
}

interface CustomCSSProperties {
  css?: CSSObject;
}

export interface BaseProperties extends
MarginProperties,
PaddingProperties,
LayoutProperties,
CustomCSSProperties
{}

export const baseProperties = (props: BaseProperties) => {
  const customCSS = (): any => {
    if (props.css) {
      return { ...props.css };
    }

    return undefined;
  };

  const css: CSSObject = {
    /* MARGIN PROPS */
    marginTop: deviceListener(props.mt ?? props.my, { numberToRem: true }),
    marginBottom: deviceListener(props.mb ?? props.my, { numberToRem: true }),
    marginRight: deviceListener(props.mr ?? props.mx, { numberToRem: true }),
    marginLeft: deviceListener(props.ml ?? props.mx, { numberToRem: true }),
    /* PADDING PROPS */
    paddingTop: deviceListener(props.pt ?? props.py, { numberToRem: true }),
    paddingBottom: deviceListener(props.pb ?? props.py, { numberToRem: true }),
    paddingRight: deviceListener(props.pr ?? props.px, { numberToRem: true }),
    paddingLeft: deviceListener(props.pl ?? props.px, { numberToRem: true }),
    /* LAYOUT PROPS */
    display: deviceListener(props._display),
    alignItems: deviceListener(props.alignItems),
    alignContent: deviceListener(props.alignContent),
    alignSelf: deviceListener(props.alignSelf),
    justifyContent: deviceListener(props.justifyContent),
    justifyItems: deviceListener(props.justifyItems),
    justifySelf: deviceListener(props.justifySelf),
    gap: deviceListener(props.gap, { numberToRem: true }),
    rowGap: deviceListener(props.gapY, { numberToRem: true }),
    columnGap: deviceListener(props.gapX, { numberToRem: true }),
    width: deviceListener(props.w, { numberToRem: true }),
    minWidth: deviceListener(props.minW, { numberToRem: true }),
    maxWidth: deviceListener(props.maxW, { numberToRem: true }),
    height: deviceListener(props.h, { numberToRem: true }),
    minHeight: deviceListener(props.minH, { numberToRem: true }),
    maxHeight: deviceListener(props.maxH, { numberToRem: true }),
    /* CUSTOM CSS */
    ...customCSS(),
  };

  /**
   * @example
   * 
   * breaker({
   *   color: [
   *    'red', // mobile large+ screens
   *    'yellow' // mobile small screen
   *   ]
   * })
   * 
   * OUTPUT:
   * @media (min-width: 420px) {
   *   .css-rbuh8g {
   *     color: red;
   *   }
   * }
   *
   * @media (min-width: 920px) {
   *   .css-rbuh8g {
   *     color: yello;
   *   }
   * }
  */
  return breaker(css);
};