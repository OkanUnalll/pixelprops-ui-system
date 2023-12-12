import { contrastColor } from 'contrast-color';

export class Color {
  private color: string;

  constructor(
      { color }: { color: string }) {
      this.color = color;
  }
  
  /* ------ HELPER METHODS ------ */
  public toContrast(): string {
    const color = contrastColor({
      bgColor: this.color,
    });
  
    return color;
  }
  /* ------ END - HELPER METHODS ------ */
}