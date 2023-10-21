import styled from 'styled-components';

import cssProps from '@/assets/theme/base/cssProps';

// interfaces
import { ICSSProps } from '@/models/theme/base/cssProps';

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 */
const Box = styled.div.attrs<ICSSProps>((props) => ({
  ...props
}))`
  ${props => cssProps(props)}
  ${props => props.$css}
`;

export default Box;