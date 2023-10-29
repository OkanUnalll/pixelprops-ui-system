import styled from 'styled-components';

import Box from '@pixelprops/elements/Box';
import Link from '@pixelprops/elements/Link';

const DropdownWrapper = styled(Box)`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

const DropdownItem = styled(Link)`
  background-color: #fff;
  padding: .5rem .7rem;
  color: #000;
`;

export { DropdownWrapper, DropdownItem };