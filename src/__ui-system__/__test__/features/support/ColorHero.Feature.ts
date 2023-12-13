/*
** ---- COLOR HERO ----
** 
** Sources used as reference in the development of this feature:
** @see https://css-tricks.com/converting-color-spaces-in-javascript/
** hex to rgba: @see https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
** rgb to hsl:  @see https://www.30secondsofcode.org/js/s/rgb-to-hsl/
*/

export class ColorHero {
  /* ------ INDEPENDENT HELPER METHODS ------ */
  /* -- HEX TO RGB CODES -- */
  static hexToRgbCodes(hex: string): { r: number; g: number; b: number } {
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
  static rgbToHslCodes(r: number, g: number, b: number): { h: number, s: number, l: number } {
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

  /* -- RGBA TO HSLA CODES -- */
  // refs: https://www.30secondsofcode.org/js/s/rgb-to-hsl/
  //       https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl
  /**
  * @param r - Red
  * @param g - Green
  * @param b - Blue
  * @param a - Alpha
  */
  static rgbaToHslaCodes(r: number, g: number, b: number, a: number): { h: number, s: number, l: number, a: number } {
    const { h, s, l } = ColorHero.rgbToHslCodes(r, g, b);

    return { h, s, l, a };
  };

  /* -- HEX TO RGB/RGBA CODES -- */
  // refs: https://stackoverflow.com/a/28056903
  /**
  * @param hex
  * @param alpha - value range: [0.0 - 1.0]
  */
  static hexToRgbaCodes(hex: string, alpha?: number): { r: number, g: number, b: number, a?: number } {
    const { r, g, b } = ColorHero.hexToRgbCodes(hex);

    return { r, g, b, a: alpha };
  }

  /* -- HSL TO RGB CODES -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb
  /**
  * @param h - Hue
  * @param s - Saturation
  * @param l - Lightness
  */
  static hslToRgbCodes(h: number, s: number, l: number): { r: number, g: number, b: number} {
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
  /**
  * @param h - Hue
  * @param s - Saturation
  * @param l - Lightness
  * @param a - Alpha
  */
  static hslaToRgbaCodes(h: number, s: number, l: number, a: number): { r: number, g: number, b: number, a: number } {
    const { r, g, b } = ColorHero.hslToRgbCodes(h, s, l);

    return { r, g, b, a };
  }

  /* -- HEX TO HSL CODES -- */
  static hexToHslCodes(hex: string): { h: number, s: number, l: number } {
    const { r, g, b } = ColorHero.hexToRgbCodes(hex);

    return ColorHero.rgbToHslCodes(r, g, b);
  }
  /* ---------- */

  /* -- RGB TO HEX -- */
  // refs: https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hex
  /**
  * @param r - Red
  * @param g - Green
  * @param b - Blue
  * @returns - example return : #000000
  */
  static rgbToHex(r: number, g: number, b: number): string {
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
  /**
  * @param r - Red
  * @param g - Green
  * @param b - Blue
  * @param a - Alpha
  */
  static rgbaToHexa(r: number, g: number, b: number, a: number): string  {
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
  * @returns - return : rgba(r, g, b, alpha)
  */
  static hexToRgba(hex: string, alpha?: number): string {
    const { r, g, b } = ColorHero.hexToRgbCodes(hex);

    if (alpha !== undefined || alpha !== null) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alpha ?? 1) + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  /* -- HEX TO RGB -- */
  // refs: https://stackoverflow.com/a/28056903
  /**
  * @param hex
  * @param alpha - value range: [0.0 - 1.0]
  * @returns - return : rgba(r, g, b)
  */
  static hexToRgb(hex: string): string {
    const { r, g, b } = ColorHero.hexToRgbCodes(hex);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  /* -- RGB TO HSL -- */
  /**
   * @param r - Red
   * @param g - Green
   * @param b - Blue
   * @returns - return : hsl(h, s%, l%)
  */
  static rgbToHsl(r: number, g: number, b: number): string {
    const { h, s, l } = ColorHero.rgbToHslCodes(r, g, b);

    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  };

  /* -- HSL TO RGB -- */
  /**
  * @returns - return : rgba(r, g, b)
  */
  static hslToRgb(h: number, s: number, l: number): string {
    const { r, g, b } = ColorHero.hslToRgbCodes(h, s, l);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  /* -- HSLA TO RGBA -- */
  /**
  * @returns - return : rgba(r, g, b, alpha)
  */
  static hslaToRgba(h: number, s: number, l: number, alpha: number): string {
    const { r, g, b, a } = ColorHero.hslaToRgbaCodes(h, s, l, alpha);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  /* -- HEX TO HSL CODES -- */
  static hexToHsl(hex: string): string {
    const { h, s, l } = ColorHero.hexToHslCodes(hex);

    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  }

  /* -- RGB TO RGB CODES -- */
  // refs: https://stackoverflow.com/a/10971090
  /**
   * Returns the values of an rgb expression of type string.
   * example usage: toRgbCodes('rgb(0, 0, 0)')
   * output: { r: 0, g: 0, b: 0 }
  */
  static rgbToRgbCodes(rgb: string): { r: number; g: number; b: number } {
    const codes = rgb.replace(/[^\d,]/g, '').split(',');

    return {
      r: parseFloat(codes[0]),
      g: parseFloat(codes[1]),
      b: parseFloat(codes[2]),
    };
  }

  /* -- RGBA TO RGBA CODES -- */
  // refs: https://stackoverflow.com/a/10971090
  /**
   * Returns the values of an rgba expression of type string.
   * example usage: toRgbCodes('rgb(0, 0, 0, 1)')
   * output: { r: 0, g: 0, b: 0, a: 1 }
  */
  static rgbaToRgbaCodes(rgba: string): { r: number; g: number; b: number, a: number } {
    const codes = rgba.replace(/[^\d,.]/g, '').split(',');

    return {
      r: parseFloat(codes[0]),
      g: parseInt(codes[1]),
      b: parseInt(codes[2]),
      a: parseFloat(codes[3]),
    };
  }
  /* ------ END - INDEPENDENT HELPER METHODS ------ */
}