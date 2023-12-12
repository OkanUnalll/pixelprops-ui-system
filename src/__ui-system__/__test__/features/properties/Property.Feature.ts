import { CSSObject } from '@emotion/react';

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