import { CSSObject } from '@emotion/styled';
import CSS from 'csstype';
import { unitDetector } from 'ui-system/utils/unitDetector';

export interface MarginProperties {
  /**
   * CSS Equivalent: @example
   * {
   * margin-right: <css-property>;
   * margin-left: <css-property>;
   * }
  */
  mx?: string | number;
  /**
   * CSS Equivalent: @example
   * {
   *   margin-top: <css-property>;
   *   margin-bottom: <css-property>;
   * }
  */
  my?: string | number;
  /**
   * CSS Equivalent: @example
   * {  margin-top: <css-property>;  }
  */
  mt?: string | number;
  /**
   * CSS Equivalent: @example
   * {  margin-right: <css-property>;  }
  */
  mr?: string | number;
  /**
   * CSS Equivalent: @example
   * {  margin-bottom: <css-property>;  }
  */
  mb?: string | number;
  /**
   * CSS Equivalent: @example
   * {  margin-left: <css-property>;  }
  */
  ml?: string | number;
}

export interface PaddingProperties {
  /**
   * CSS Equivalent: @example
   * {
   *   padding-right: <css-property>;
   *   padding-left: <css-property>;
   * }
  */
  px?: string | number;
  /**
   * CSS Equivalent: @example
   * {
   *   padding-top: <css-property>;
   *   padding-bottom: <css-property>;
   * }
  */
  py?: string | number;
  /**
   * CSS Equivalent: @example
   * {  padding-top: <css-property>;  }
  */
  pt?: string | number;
  /**
   * CSS Equivalent: @example
   * {  padding-right: <css-property>;  }
  */
  pr?: string | number;
  /**
   * CSS Equivalent: @example
   * {  padding-bottom: <css-property>;  }
  */
  pb?: string | number;
  /**
   * CSS Equivalent: @example
   * {  padding-left: <css-property>;  }
  */
  pl?: string | number;
}

export interface LayoutProperties {
  /**
   * CSS Equivalent: @example
   * {  display: block;  }
  */
  block?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: inline-block;  }
  */
  inlineBlock?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: inline;  }
  */
  inline?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: flex;  }
  */
  flex?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: inline-flex;  }
  */
  inlineFlex?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: grid;  }
  */
  grid?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: inline-grid;  }
  */
  inlineGrid?: boolean;
  /**
   * CSS Equivalent: @example
   * {  display: none;  }
  */
  notVisible?: boolean;
  /**
   * CSS Equivalent: @example
   * {  align-items: <css-property>;  }
  */
  alignItems?: CSS.Property.AlignItems;
  /**
   * CSS Equivalent: @example
   * {  align-content: <css-property>;  }
  */
  alignContent?: CSS.Property.AlignContent;
  /**
   * CSS Equivalent: @example
   * {  align-self: <css-property>;  }
  */
  alignSelf?: CSS.Property.AlignSelf;
  /**
   * CSS Equivalent: @example
   * {  justify-content: <css-property>;  }
  */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * CSS Equivalent: @example
   * {  justify-items: <css-property>;  }
  */
  justifyItems?: CSS.Property.JustifyItems;
  /**
   * CSS Equivalent: @example
   * {  justify-self: <css-property>;  }
  */
  justifySelf?: CSS.Property.JustifySelf;
  /**
   * CSS Equivalent: @example
   * {  gap: <css-property>;  }
  */
  gap?: string | number;
  /**
   * CSS Equivalent: @example
   * {  column-gap: <css-property>;  }
  */
  gapX?: string | number;
  /**
   * CSS Equivalent: @example
   * {  row-gap: <css-property>;  }
  */
  gapY?: string | number;
  /**
   * CSS Equivalent: @example
   * {  width: <css-property>;  }
  */
  w?: string | number;
  /**
   * CSS Equivalent: @example
   * {  min-width: <css-property>;  }
  */
  minW?: string | number;
  /**
   * CSS Equivalent: @example
   * {  max-width: <css-property>;  }
  */
  maxW?: string | number;
  /**
   * CSS Equivalent: @example
   * {  height: <css-property>;  }
  */
  h?: string | number;
  /**
   * CSS Equivalent: @example
   * {  min-height: <css-property>;  }
  */
  minH?: string | number;
  /**
   * CSS Equivalent: @example
   * {  max-height: <css-property>;  }
  */
  maxH?: string | number;
}

export interface BaseProperties extends
MarginProperties,
PaddingProperties,
LayoutProperties
{}

export const baseProperties = (props: BaseProperties) => {
  const displayProps = () => {
    switch (true) {
      case props.block: return 'block';
      case props.inlineBlock: return 'inline-block';
      case props.inline: return 'inline';
      case props.flex: return 'flex';
      case props.inlineFlex: return 'inline-flex';
      case props.grid: return 'grid';
      case props.inlineGrid: return 'inline-grid';
      case props.notVisible: return 'none';
      default: return undefined;
    }
  };

  const css: CSSObject = {
    /* MARGIN PROPS */
    marginTop: unitDetector(props.mt ?? props.my),
    marginBottom: unitDetector(props.mb ?? props.my),
    marginRight: unitDetector(props.mr ?? props.mx),
    marginLeft: unitDetector(props.ml ?? props.mx),
    /* PADDING PROPS */
    paddingTop: unitDetector(props.pt ?? props.py),
    paddingBottom: unitDetector(props.pb ?? props.py),
    paddingRight: unitDetector(props.pr ?? props.px),
    paddingLeft: unitDetector(props.pl ?? props.px),
    /* LAYOUT PROPS */
    display: displayProps(),
    alignItems: props.alignItems,
    alignContent: props.alignContent,
    alignSelf: props.alignSelf,
    justifyContent: props.justifyContent,
    justifyItems: props.justifyItems,
    justifySelf: props.justifySelf,
    gap: unitDetector(props.gap),
    rowGap: unitDetector(props.gapY),
    columnGap: unitDetector(props.gapX),
    width: unitDetector(props.w),
    minWidth: unitDetector(props.minW),
    maxWidth: unitDetector(props.maxW),
    height: unitDetector(props.h),
    minHeight: unitDetector(props.minH),
    maxHeight: unitDetector(props.maxH),
    /* OTHER PROPS */
  };

  return css;
};