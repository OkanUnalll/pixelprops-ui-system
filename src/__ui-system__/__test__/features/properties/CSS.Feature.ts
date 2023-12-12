import { CSSObject } from '@emotion/react';

import type { Device, Devices } from '.';
import { devices } from 'ui-system/theme';

export class CSS {
  public getInProps(props: { css: CSSObject; [key: string]: any }): CSSObject | null {
    if (props.css) {
      return { ...props.css };
    }

    return null;
  }

  public getInPropsResponsive(
    props: {
      responsive: Devices<CSSObject>;
      [key: string]: any
    }
  ): CSSObject | null {
    if (props.responsive) {
      const deviceKeys = Object.keys(props.responsive);
      
      const css: CSSObject = {
        // default properties
        ...props.responsive.default,
      };

      deviceKeys.forEach((deviceKey) => {
        const key = deviceKey as Device;
        if (key !== 'default') {
          /** IMPORTANT WARNING:
           * ? Do not delete the space in the template literals character specified below.
           * ? This space is included to prevent other media query features from conflicting with each other.
           * ! const mediaQuery = `${devices[key]}    `;
           * !                                    ^^^^
          */
          const mediaQuery = `${devices[key]}    `;

          css[mediaQuery] = props.responsive ? props.responsive[key] : null;
        }
      });

      return css;
    }

    return null;
  }
};