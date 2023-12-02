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
  const mt = new Property((value: any) => ({
    marginTop: onDevice(value, { numberToRem: true })  
  }));

  const mr = new Property((value: any) => ({
    marginRight: onDevice(value, { numberToRem: true }),  
  }));

  const mb = new Property((value: any) => ({
    marginBottom: onDevice(value, { numberToRem: true }),  
  }));

  const ml = new Property((value: any) => ({
    marginLeft: onDevice(value, { numberToRem: true }),  
  }));

  const my = new Property((value: any) => ({
    marginTop: onDevice(value, { numberToRem: true }),  
    marginBottom: onDevice(value, { numberToRem: true })  
  }));

  const mx = new Property((value: any) => ({
    marginRight: onDevice(value, { numberToRem: true }),  
    marginLeft: onDevice(value, { numberToRem: true })  
  }));

  /* -- PADDING PROPS */
  const pt = new Property((value: any) => ({
    paddingTop: onDevice(value, { numberToRem: true })  
  }));

  const pr = new Property((value: any) => ({
    paddingRight: onDevice(value, { numberToRem: true }),  
  }));

  const pb = new Property((value: any) => ({
    paddingBottom: onDevice(value, { numberToRem: true }),  
  }));

  const pl = new Property((value: any) => ({
    paddingLeft: onDevice(value, { numberToRem: true }),  
  }));

  const py = new Property((value: any) => ({
    paddingTop: onDevice(value, { numberToRem: true }),  
    paddingBottom: onDevice(value, { numberToRem: true })  
  }));

  const px = new Property((value: any) => ({
    paddingRight: onDevice(value, { numberToRem: true }),  
    paddingLeft: onDevice(value, { numberToRem: true })  
  }));
  /* END - PROPERTIES */

  /* CUSTOM CSS PROPERTIES */
  const css = new CSS();
  /* END - CUSTOM CSS PROPERTIES */

  return breaker({
    /* -- MARGIN PROPS */
    ...mt.getInProps('mt', props),
    ...mr.getInProps('mr', props),
    ...mb.getInProps('mb', props),
    ...ml.getInProps('ml', props),
    ...my.getInProps('my', props),
    ...mx.getInProps('mx', props),
    /* -- PADDING PROPS */
    ...pt.getInProps('pt', props),
    ...pr.getInProps('pr', props),
    ...pb.getInProps('pb', props),
    ...pl.getInProps('pl', props),
    ...py.getInProps('py', props),
    ...px.getInProps('px', props),
    /* CUSTOM CSS PROPERTIES */
    ...css.getInProps(props),
    ...css.getInPropsResponsive(props),
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
   * {  flex-direction: <property-value>;  }
  */
  flexDirection?: CSSType.Property.FlexDirection | Devices<CSSType.Property.FlexDirection>;
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
   * You can add a new property or change the CSS equivalents of existing properties.
   */
  /* -- LAYOUT PROPS */
  const display = new Property((value: any) => ({
    display: onDevice(value),
  }));

  const flexDirection = new Property((value: any) => ({
    flexDirection: onDevice(value),
  }));

  const alignItems = new Property((value: any) => ({
    alignItems: onDevice(value),
  }));

  const alignContent = new Property((value: any) => ({
    alignContent: onDevice(value),
  }));

  const alignSelf = new Property((value: any) => ({
    alignSelf: onDevice(value),
  }));

  const justifyContent = new Property((value: any) => ({
    justifyContent: onDevice(value),
  }));

  const justifyItems = new Property((value: any) => ({
    justifyItems: onDevice(value),
  }));

  const justifySelf = new Property((value: any) => ({
    justifySelf: onDevice(value),
  }));

  const gap = new Property((value: any) => ({
    gap: onDevice(value, { numberToRem: true }),
  }));

  const gapX = new Property((value: any) => ({
    columnGap: onDevice(value, { numberToRem: true }),
  }));

  const gapY = new Property((value: any) => ({
    rowGap: onDevice(value, { numberToRem: true }),
  }));

  const w = new Property((value: any) => ({
    width: onDevice(value, { numberToRem: true }),
  }));

  const minW = new Property((value: any) => ({
    minWidth: onDevice(value, { numberToRem: true }),
  }));

  const maxW = new Property((value: any) => ({
    maxWidth: onDevice(value, { numberToRem: true }),
  }));

  const h = new Property((value: any) => ({
    height: onDevice(value, { numberToRem: true }),
  }));

  const minH = new Property((value: any) => ({
    minHeight: onDevice(value, { numberToRem: true })
  }));

  const maxH = new Property((value: any) => ({
    maxHeight: onDevice(value, { numberToRem: true }),
  }));
  /* END - PROPERTIES */

  /* CUSTOM CSS PROPERTIES */
  const css = new CSS();
  /* END - CUSTOM CSS PROPERTIES */

  return breaker({
    /* -- LAYOUT PROPS */
    ...display.getInProps('_display', props),
    ...flexDirection.getInProps('flexDirection', props),
    ...alignItems.getInProps('alignItems', props),
    ...alignContent.getInProps('alignContent', props),
    ...alignSelf.getInProps('alignSelf', props),
    ...justifyContent.getInProps('justifyContent', props),
    ...justifyItems.getInProps('justifyItems', props),
    ...justifySelf.getInProps('justifySelf', props),
    ...gap.getInProps('gap', props),
    ...gapX.getInProps('gapX', props),
    ...gapY.getInProps('gapY', props),
    ...w.getInProps('w', props),
    ...minW.getInProps('minW', props),
    ...maxW.getInProps('maxW', props),
    ...h.getInProps('h', props),
    ...minH.getInProps('minH', props),
    ...maxH.getInProps('maxH', props),
    /* CUSTOM CSS PROPERTIES */
    ...css.getInProps(props),
    ...css.getInPropsResponsive(props),
  } as CSSObject);
};