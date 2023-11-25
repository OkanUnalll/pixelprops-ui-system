import { CSSObject } from '@emotion/styled';

import type { Device, Devices } from '.';
import { devices } from '..';

export class CSS {
  public get(props: { css: CSSObject; [key: string]: any }): CSSObject | null {
    if (props.css) {
      return { ...props.css };
    }

    return null;
  }

  public getResponsive(
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
          const mediaQuery = devices[key];

          css[mediaQuery] = props.responsive ? props.responsive[key] : null;
        }
      });

      return css;
    }

    return null;
  }
};

export class Property {
  private key: string;
  private cssCallback: (value: any) => CSSObject;

  constructor(key: string, cssCallback: (value: any) => CSSObject) {
    this.key = key;
    this.cssCallback = cssCallback;
  }

  public get(props: any) {
    if (props[this.key]) {
      return this.cssCallback(props[this.key]);
    }
  }
}