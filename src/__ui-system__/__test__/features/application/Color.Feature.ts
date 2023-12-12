import { contrastColor } from 'contrast-color';

type ColorTypes = {
  light?: string;
  dark?: string;
  contrast?: string;
  [key: string]: string | undefined;
};

export class Color<T extends ColorTypes> {
  private color: string;
  private otherColors: T | {};

  constructor(
    mainColor: string,
    otherColors?: T,
  ) {
    this.color = mainColor;
    this.otherColors = otherColors ?? {};
  }

  /* ------ GETTER METHODS ------ */
  public get main() {
    return this.color;
  }

  public get contrast() {
    return Color.toContrast(this.color);
  }
  /* ------ END - GETTER METHODS ------ */

  /* ------ HELPER METHODS ------ */
  /* ------ END - HELPER METHODS ------ */

  /* ------ STATIC HELPER METHODS ------ */
  static toContrast(color: string): string {
    return contrastColor({
      bgColor: color,
    });
  }
  /* ------ END - HELPER METHODS ------ */
}