/**
 * 
 * ABOUT THIS
 *
 * This file contains functions that provide multi-device compatibility to the properties in the component system.
 * There are functions built mostly on emotion's facepaint tool. (about facepaint: @see https://github.com/emotion-js/facepaint)
 * 
 * You can use this controller file when you want to add any functionality for multi-device compatibility.
 * 
*/

import facepaint from 'facepaint';
import { CSSObject } from '@emotion/styled';

import { numberToRem as convertRem } from 'ui-system/utils';
import { devices } from 'ui-system/core/tokens';


export interface Devices<T> {
  /**
   * The default value is mandatory. Since using a mobile-first design structure, the smallest screen
   * will always use the default value.
   * 
   * Some sample references for this event:
   * @see https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens
  */
  default: T;
  /** CSS Equivalent: @example media (min-width: 576px) */
  sm?: T;
  /** CSS Equivalent: @example media (min-width: 768px) */
  md?: T;
  /** CSS Equivalent: @example media (min-width: 992px) */
  lg?: T;
  /** CSS Equivalent: @example media (min-width: 1200px) */
  xl?: T;
  /** CSS Equivalent: @example media (min-width: 1400px) */
  xxl?: T;
}

export type Device = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

/* **** BREAKER **** */
const breakpoints = Object.values(devices);

const breakerFn = facepaint(breakpoints);

/** 
 * ABOUT BREAKER
 * 
 * The working logic of the BREAKER is very simple. It takes an Object Styles
 * value as in the example below and gives media query
 * feature to these object style values:
 * 
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
 * media (min-width: 420px) {
 *   .css-rbuh8g {
 *     color: red;
 *   }
 * }
 *
 * media (min-width: 920px) {
 *   .css-rbuh8g {
 *     color: yellow;
 *   }
 * }
 * 
 * @description
 * 
 * It basically uses emotion's 'facepaint' tool.
 * 
 * To understand how the facepaint tool works, you can visit the following addresses:
 * @see https://emotion.sh/docs/media-queries#facepaint
 * @see https://github.com/emotion-js/facepaint
 * 
*/
export const breaker: <T>(css: CSSObject & T) => { [key: string]: any } = (css) => breakerFn(css)[0];
/* **** END - BREAKER **** */

/* **** ON-DEVICE **** */
/**
 * ABOUT ON-DEVICE
 * 
 * The purpose of the onDevice listener is to convert a
 * css object of type { md: {cssObject}, xl: {cssObject} } into a format
 * that Breaker can understand. In this way, it allows defining a media query
 * more quickly and clearly by using the names of the breakpoints when
 * defining a media query value to the property of any component.
 *
 * Note: The onDevice function is intended to support the Breaker tool and
 * should not be used anywhere else except the Breaker tool unless necessary.
 * 
 * Example uses:
 * 
 * @example
 * 
 * Identify the Component:
 * 
 * const Box = styled('div')<BoxProps>(
 *  (props) => ({
 *    ...baseProperties(props),
 *    ...breaker({
 *       backgroundColor: onDevice(props.backgroundColor),
 *    })
 *  })
 * );
 * 
 * Use Component:
 * 
 * <Box
 *   backgroundColor={{
 *     default: 'red',
 *     md: 'blue', // for md and above screens / devices
 *     lg: 'yellow', // for lg and above screens / devices
 *   }}
 * >
 *   Hello World
 * </Box>
*/
export const onDevice = (
  value: Devices<any> | string | number | undefined,
  config = { numberToRem: false }
): any => {
  const { numberToRem } = config;

  // If the value has responsive property:
  if (typeof value === 'object') {
    /**
     * The first value is accepted as the default value by the 'emotion facepaint' tool. Therefore, the first value must be default.
     * @see https://github.com/emotion-js/facepaint#emotion
    */
    const devices: Device[] = ['default', 'sm', 'md', 'lg', 'xl', 'xxl'];

    const properties: any[] = [];

    devices.forEach((device) => {
      if (value[device]) {
        properties.push(
          numberToRem ? convertRem(value[device]) : value[device]
        );
      } else {
        /**
         * If no value has been entered for the specified device, skip
         * Example Output:
         * 
         * [
         *   'value1', // default
         *   'value2', // sm
         *   'value3', // md
         *   '', // lg (passed value)
         *   'value5', // xl
         *   'value6', // xxl
         * ]
        */
        properties.push('');
      }
    });

    // Example Output: ['defaultValue', 'smValue', 'mdValue', 'lgValue', 'xlValue', 'xxlValue']
    return properties;
  }

  // If the responsive feature is not added to the value, return the value itself.
  if (typeof value === 'string' || typeof value === 'number') {
    return numberToRem ? convertRem(value) : value;
  }

  return null;
};
/* **** END - ON-DEVICE **** */