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

export class Property<T> {
  private css: ((value: T) => CSSObject) | CSSObject | undefined | null;
  private cssRepo: { [key: string]: CSSObject } = {};

  constructor(css?: ((value: T) => CSSObject) | CSSObject | undefined | null) {
    this.css = css;
  }

  public get(value: T) {
    let cssValue = {
      baseCSS: {},
      repo: {},
    };

    if (typeof this.css === 'function') {
      cssValue.baseCSS = { ...this.css(value) };
    }

    if (typeof this.css === 'object') {
      cssValue.baseCSS = { ...this.css };
    }
    
    if (this.cssRepo[String(value)]) {
      cssValue.repo = { ...this.cssRepo[String(value)] };
    }

    return { ...cssValue.baseCSS, ...cssValue.repo };
  }

  public getInProps(key: string | undefined, props: any) {
    if (key) {
      const propsValue = props[key];
      if (propsValue) {
        return this.get(propsValue);
      }
    }
  }

  public if(condition: T, cssValue: CSSObject | (() => CSSObject)) {
    if (typeof cssValue === 'function') {
      this.cssRepo = {
        ...this.cssRepo,
        [String(condition)]: cssValue(),
      };
    }

    if (typeof cssValue === 'object') {
      this.cssRepo = {
        ...this.cssRepo,
        [String(condition)]: cssValue,
      };
    }
    
  }
}