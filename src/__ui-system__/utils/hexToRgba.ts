
/**
 * ref: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
*/

/**
 * @param {string} hex
 * @param {number} alpha - value range: [0.0 - 1.0]
*/
function hexToRgba(hex: string, alpha?: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha !== undefined || alpha !== null) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alpha ?? 1) + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

export { hexToRgba };