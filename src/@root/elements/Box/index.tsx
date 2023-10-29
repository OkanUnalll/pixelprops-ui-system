import styled from 'styled-components';

import cssProps from '@root/theme/functions/cssProps';

// interfaces
import { ICSSProps } from '@root/models/theme/cssprops';

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
 */
const Box = styled.div<ICSSProps>`
  ${props => cssProps(props)}
`;

export default Box;