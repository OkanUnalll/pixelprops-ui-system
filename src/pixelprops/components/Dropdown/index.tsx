import styled from 'styled-components';

import { ICSSProps } from '@/models/theme/base/cssProps';

import cssProps from '@/assets/theme/base/cssProps';

const DropdownWrapper = styled.span.attrs<ICSSProps>(props => ({ ...props }))`
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 5px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  ${props => cssProps(props)}
  ${props => props.$css}
`;

const DropdownItem = styled.span`
  background-color: #fff;
  color: #000;
`;

export { DropdownWrapper, DropdownItem };