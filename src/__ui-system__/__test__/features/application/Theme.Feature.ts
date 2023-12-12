import type { BaseColors, ThemeTokens } from 'ui-system/__test__/styles/types/tokens.types';

export class Theme {
  private themeTokens: ThemeTokens;

  /**
   * @param baseThemeTokens - Represents the theme design tokens that are considered default and primary.
   * @param otherThemeTokens - It is used to define another theme on top of a predefined base token value.
  */
  constructor(baseThemeTokens: ThemeTokens, otherThemeTokens?: ThemeTokens) {
    this.themeTokens = baseThemeTokens;

    if (otherThemeTokens) {
      this.themeTokens = {
        ...this.themeTokens,
        ...otherThemeTokens,
      };
    };
  }

  /* -- PUBLIC METHODS -- */
  public get tokens(): ThemeTokens {
    return this.themeTokens;
  }

  /* -- PRIVATE METHODS -- */
  private checkBaseColorContrast() {
    const tokens = this.themeTokens;

    const baseColorTokens = tokens.colors?.base;

    const baseColorTokensKeys: BaseColors[] = Object.keys(baseColorTokens as any) as any[];

    baseColorTokensKeys.forEach((colorKey) => {
      if (colorKey) {
        
      }
    });
  }
};