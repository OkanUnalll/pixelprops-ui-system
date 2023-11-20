import { numberToRem as convertRem } from 'ui-system/utils';

export interface Devices<T> {
  /**
   * The default value is mandatory. Since using a mobile-first design structure, the smallest screen
   * will always use the default value.
   * 
   * Some references about this event:
   * @see https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens
   */
  default: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
}

export type Device = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const deviceListener = (
  value: any,
  config = { numberToRem: false }
): any => {
  const { numberToRem } = config;

  if (typeof value === 'object') {
    /**
     * The first value is accepted as the default value by the 'emotion facepaint' tool. Therefore, the first value must be default.
     * @see https://github.com/emotion-js/facepaint#emotion
    */
    const devices: Device[] = ['default', 'sm', 'md', 'lg', 'xl', 'xxl'];
    /**
     * The reason why properties are array is that the responsive feature works with the 'emotion facepaint' assistant.
     * @see https://emotion.sh/docs/media-queries#facepaint
    */
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
  return numberToRem ? convertRem(value) : value;
};