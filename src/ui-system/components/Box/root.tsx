import styled from 'styled-components';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
*/

export interface BoxWrapperCSSProps extends ICSSProps {};

const BoxWrapper = styled.div<BoxWrapperCSSProps>`
  ${props => cssProps(props)}
`;

export { BoxWrapper };