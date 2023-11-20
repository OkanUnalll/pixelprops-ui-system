import facepaint from 'facepaint';
import { CSSObject } from '@emotion/styled';

import { devices } from 'ui-system/core';

const breakpoints = Object.values(devices);

/** To understand how the face painting feature works, you can visit the following addresses:
 * @see https://emotion.sh/docs/media-queries#facepaint
 * @see https://github.com/emotion-js/facepaint
*/
const breakerFn = facepaint(breakpoints);

export const breaker: <T>(css: CSSObject & T) => { [key: string]: any } = (css) => breakerFn(css)[0];