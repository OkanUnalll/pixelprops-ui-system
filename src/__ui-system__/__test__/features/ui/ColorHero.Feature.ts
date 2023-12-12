/**
 * ---- COLOR HERO ----
 * 
 * Sources used as reference in the development of this feature:
 * @see https://css-tricks.com/converting-color-spaces-in-javascript/
 * hex to rgba: @see https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
 * rgb to hsl:  @see https://www.30secondsofcode.org/js/s/rgb-to-hsl/
*/

export class ColorHero {
  private color: string;
  private type: 'hex' | 'rgba' | 'hsl';

  constructor(
    {
      color,
      type
    }: {
      color: string;
      type: 'hex' | 'rgba' | 'hsl';
    }) {
    this.color = color;
    this.type = type;
  }

  /* ------ HELPER METHODS ------ */
  /* -- HEX TO RGB CODES -- */
  public hexToRgbCodes(hex: string): { r: number; g: number; b: number } {
    const r: number = parseInt(hex.slice(1, 3), 16);
    const g: number = parseInt(hex.slice(3, 5), 16);
    const b: number = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  }

  /* -- RGB TO HSL CODES -- */
  // refs: https://www.30secondsofcode.org/js/s/rgb-to-hsl/
  //       https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl
  /**
   * @param r - Red
   * @param g - Green
   * @param b - Blue
  */
  public rgbToHslCodes(r: number, g: number, b: number) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b);
    let cmax = Math.max(r,g,b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    // Calculate hue
    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
  };

  /* -- HEX TO RGB/RGBA CODES -- */
  // refs: https://stackoverflow.com/a/28056903
  /**
  * @param hex
  * @param alpha - value range: [0.0 - 1.0]
  */
  public hexToRgbaCodes(hex: string, alpha?: number) {
    const { r, g, b } = this.hexToRgbCodes(hex);

    return { r, g, b, a: alpha };
  }

  /* -- HSL TO RGB CODES -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb
  public hslToRgbCodes(h: number, s: number, l: number) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;  
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
  }

  /* -- HSLA TO RGBA CODES -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsla-to-rgba
  public hslaToRgbaCodes(h: number, s: number, l: number, a: number) {
    const { r, g, b } = this.hslToRgbCodes(h, s, l);

    return { r, g, b, a };
  }
  /* ---------- */

  /* -- RGB TO HEX -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hex
  public rgbToHex(r: number, g: number, b: number) {
    let _r: string = r.toString(16);
    let _g: string = g.toString(16);
    let _b: string = b.toString(16);

    if (_r.length == 1) _r = '0' + _r;
    if (_g.length == 1) _g = '0' + _g;
    if (_b.length == 1)  _b = '0' + _b;

    return '#' + _r + _g + _b;
  }

  /* -- RGBA TO HEXA -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgba-to-hex-rrggbbaa
  public rgbaToHexA(r: number, g: number, b: number, a: number)  {
    let _r = r.toString(16);
    let _g = g.toString(16);
    let _b = b.toString(16);
    let _a = Math.round(a * 255).toString(16);

    if (_r.length == 1) _r = '0' + _r;
    if (_g.length == 1) _g = '0' + _g;
    if (_b.length == 1) _b = '0' + _b;
    if (_a.length == 1) _a = '0' + _a;
  
    return '#' + _r + _g + _b + _a;
  }

  /* -- HEX TO RGB/RGBA -- */
  // refs: https://stackoverflow.com/a/28056903
  /**
  * @param hex
  * @param alpha - value range: [0.0 - 1.0]
  */
  public hexToRgba(hex: string, alpha?: number) {
    const { r, g, b } = this.hexToRgbCodes(hex);

    if (alpha !== undefined || alpha !== null) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alpha ?? 1) + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  /* -- RGB TO HSL -- */
  /**
   * @param r - Red
   * @param g - Green
   * @param b - Blue
  */
  public rgbToHsl(r: number, g: number, b: number) {
    const { h, s, l } = this.rgbToHslCodes(r, g, b);

    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  };

  /* -- HSL TO RGB -- */
  public hslToRgb(h: number, s: number, l: number) {
    const { r, g, b } = this.hslToRgbCodes(h, s, l);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  /* -- HSLA TO RGBA -- */
  public hslaToRgba(h: number, s: number, l: number, alpha: number) {
    const { r, g, b, a } = this.hslaToRgbaCodes(h, s, l, alpha);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
}