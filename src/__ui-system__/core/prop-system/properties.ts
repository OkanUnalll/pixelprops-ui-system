import CSSType from 'csstype';
import { CSSObject } from '@emotion/styled';

import { CSS, Property } from './system.model';
import { onDevice, breaker, Devices } from './device.controller';

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

interface CustomCSSProperties {
  css?: CSSObject;
  responsive?: Devices<CSSObject>;
}

export interface BaseProperties extends
MarginProperties,
PaddingProperties,
CustomCSSProperties
{}

export const baseProperties = (props: BaseProperties | any) => {
  /* *** PROPERTIES *** */
  /**
   * 
   * You can add a new property or change the CSS equivalents of existing properties.
   * 
   */

  /* -- MARGIN PROPS */
  const mt = new Property(/* PROP KEY: */ 'mt', /* PROP CSS: */ (value) => ({
    marginTop: onDevice(value, { numberToRem: true })  
  }));

  const mr = new Property(/* PROP KEY: */ 'mr', /* PROP CSS: */ (value) => ({
    marginRight: onDevice(value, { numberToRem: true }),  
  }));

  const mb = new Property(/* PROP KEY: */ 'mb', /* PROP CSS: */ (value) => ({
    marginBottom: onDevice(value, { numberToRem: true }),  
  }));

  const ml = new Property(/* PROP KEY: */ 'ml', /* PROP CSS: */ (value) => ({
    marginLeft: onDevice(value, { numberToRem: true }),  
  }));

  const my = new Property(/* PROP KEY: */ 'my', /* PROP CSS: */ (value) => ({
    marginTop: onDevice(value, { numberToRem: true }),  
    marginBottom: onDevice(value, { numberToRem: true })  
  }));

  const mx = new Property(/* PROP KEY: */ 'mx', /* PROP CSS: */ (value) => ({
    marginRight: onDevice(value, { numberToRem: true }),  
    marginLeft: onDevice(value, { numberToRem: true })  
  }));

  /* -- PADDING PROPS */
  const pt = new Property(/* PROP KEY: */ 'pt', /* PROP CSS: */ (value) => ({
    paddingTop: onDevice(value, { numberToRem: true })  
  }));

  const pr = new Property(/* PROP KEY: */ 'pr', /* PROP CSS: */ (value) => ({
    paddingRight: onDevice(value, { numberToRem: true }),  
  }));

  const pb = new Property(/* PROP KEY: */ 'pb', /* PROP CSS: */ (value) => ({
    paddingBottom: onDevice(value, { numberToRem: true }),  
  }));

  const pl = new Property(/* PROP KEY: */ 'pl', /* PROP CSS: */ (value) => ({
    paddingLeft: onDevice(value, { numberToRem: true }),  
  }));

  const py = new Property(/* PROP KEY: */ 'py', /* PROP CSS: */ (value) => ({
    paddingTop: onDevice(value, { numberToRem: true }),  
    paddingBottom: onDevice(value, { numberToRem: true })  
  }));

  const px = new Property(/* PROP KEY: */ 'px', /* PROP CSS: */ (value) => ({
    paddingRight: onDevice(value, { numberToRem: true }),  
    paddingLeft: onDevice(value, { numberToRem: true })  
  }));
  /* END - PROPERTIES */

  /* CUSTOM CSS PROPERTIES */
  const css = new CSS();
  /* END - CUSTOM CSS PROPERTIES */

  return breaker({
    /* -- MARGIN PROPS */
    ...mt.get(props),
    ...mr.get(props),
    ...mb.get(props),
    ...ml.get(props),
    ...my.get(props),
    ...mx.get(props),
    /* -- PADDING PROPS */
    ...pt.get(props),
    ...pr.get(props),
    ...pb.get(props),
    ...pl.get(props),
    ...py.get(props),
    ...px.get(props),
    /* CUSTOM CSS PROPERTIES */
    ...css.get(props),
    ...css.getResponsive(props),
  } as CSSObject);
};

export interface LayoutProperties {
  /**
   * CSS Equivalent: @example
   * {  display: <property-value>;  }
  */
  _display?: CSSType.Property.Display | Devices<CSSType.Property.Display>;
  /**
   * CSS Equivalent: @example
   * {  align-items: <property-value>;  }
  */
  alignItems?: CSSType.Property.AlignItems | Devices<CSSType.Property.AlignItems>;
  /**
   * CSS Equivalent: @example
   * {  align-content: <property-value>;  }
  */
  alignContent?: CSSType.Property.AlignContent | Devices<CSSType.Property.AlignContent>;
  /**
   * CSS Equivalent: @example
   * {  align-self: <property-value>;  }
  */
  alignSelf?: CSSType.Property.AlignSelf | Devices<CSSType.Property.AlignSelf>;
  /**
   * CSS Equivalent: @example
   * {  justify-content: <property-value>;  }
  */
  justifyContent?: CSSType.Property.JustifyContent | Devices<CSSType.Property.JustifyContent>;
  /**
   * CSS Equivalent: @example
   * {  justify-items: <property-value>;  }
  */
  justifyItems?: CSSType.Property.JustifyItems | Devices<CSSType.Property.JustifyItems>;
  /**
   * CSS Equivalent: @example
   * {  justify-self: <property-value>;  }
  */
  justifySelf?: CSSType.Property.JustifySelf | Devices<CSSType.Property.JustifySelf>;
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

export const layoutProperties = (props: LayoutProperties | any) => {
  /* *** PROPERTIES *** */
  /**
   * 
   * You can add a new property or change the CSS equivalents of existing properties.
   * 
   */
  /* -- LAYOUT PROPS */
  const display = new Property(/* PROP KEY: */ '_display' , /* PROP CSS: */ (value) => ({
    display: onDevice(value),
  }));

  const alignItems = new Property(/* PROP KEY: */ 'alignItems', /* PROP CSS: */ (value) => ({
    alignItems: onDevice(value),
  }));

  const alignContent = new Property(/* PROP KEY: */ 'alignContent', /* PROP CSS: */ (value) => ({
    alignContent: onDevice(value),
  }));

  const alignSelf = new Property(/* PROP KEY: */ 'alignSelf', /* PROP CSS: */ (value) => ({
    alignSelf: onDevice(value),
  }));

  const justifyContent = new Property(/* PROP KEY: */ 'justifyContent', /* PROP CSS: */ (value) => ({
    justifyContent: onDevice(value),
  }));

  const justifyItems = new Property(/* PROP KEY: */ 'justifyItems', /* PROP CSS: */ (value) => ({
    justifyItems: onDevice(value),
  }));

  const justifySelf = new Property(/* PROP KEY: */ 'justifySelf', /* PROP CSS: */ (value) => ({
    justifySelf: onDevice(value),
  }));

  const gap = new Property(/* PROP KEY: */ 'gap', /* PROP CSS: */ (value) => ({
    gap: onDevice(value, { numberToRem: true }),
  }));

  const gapX = new Property(/* PROP KEY: */ 'gapX', /* PROP CSS: */ (value) => ({
    columnGap: onDevice(value, { numberToRem: true }),
  }));

  const gapY = new Property(/* PROP KEY: */ 'gapY', /* PROP CSS: */ (value) => ({
    rowGap: onDevice(value, { numberToRem: true }),
  }));

  const w = new Property(/* PROP KEY: */ 'w', /* PROP CSS: */ (value) => ({
    width: onDevice(value, { numberToRem: true }),
  }));

  const minW = new Property(/* PROP KEY: */ 'minW', /* PROP CSS: */ (value) => ({
    minWidth: onDevice(value, { numberToRem: true }),
  }));

  const maxW = new Property(/* PROP KEY: */ 'maxW', /* PROP CSS: */ (value) => ({
    maxWidth: onDevice(value, { numberToRem: true }),
  }));

  const h = new Property(/* PROP KEY: */ 'h', /* PROP CSS: */ (value) => ({
    height: onDevice(value, { numberToRem: true }),
  }));

  const minH = new Property(/* PROP KEY: */ 'minH', /* PROP CSS: */ (value) => ({
    minHeight: onDevice(value, { numberToRem: true })
  }));

  const maxH = new Property(/* PROP KEY: */ 'maxH', /* PROP CSS: */ (value) => ({
    maxHeight: onDevice(value, { numberToRem: true }),
  }));
  /* END - PROPERTIES */

  /* CUSTOM CSS PROPERTIES */
  const css = new CSS();
  /* END - CUSTOM CSS PROPERTIES */

  return breaker({
    /* -- LAYOUT PROPS */
    ...display.get(props),
    ...alignItems.get(props),
    ...alignContent.get(props),
    ...alignSelf.get(props),
    ...justifyContent.get(props),
    ...justifyItems.get(props),
    ...justifySelf.get(props),
    ...gap.get(props),
    ...gapX.get(props),
    ...gapY.get(props),
    ...w.get(props),
    ...minW.get(props),
    ...maxW.get(props),
    ...h.get(props),
    ...minH.get(props),
    ...maxH.get(props),
    /* CUSTOM CSS PROPERTIES */
    ...css.get(props),
    ...css.getResponsive(props),
  } as CSSObject);
};