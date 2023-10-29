import styled from 'styled-components';

import cssProps from '@/assets/theme/functions/cssProps';

// interfaces
import { ICSSProps } from '@/models/theme/cssProps';

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 *                    https://styled-components.com/docs/basics#adapting-based-on-props
 */
const Box = styled.div<ICSSProps>`
  ${props => cssProps(props)}
`;

export default Box;