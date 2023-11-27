
/**
 * ref: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
*/

function hexToRgba(hex: string, alpha?: number) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha !== undefined || alpha !== null) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + (alpha ?? 1) + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

export { hexToRgba };