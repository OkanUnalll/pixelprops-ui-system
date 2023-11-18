import { useState } from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

import Box from 'ui-system/components/Box';

interface DropdownWrapperProps extends ICSSProps {}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  transition: all .3s ease;
  border-radius: 6px;
  overflow: hidden;
  ${props => cssProps(props)}
`;

interface DropdownItemProps extends ICSSProps {
  $backgroundColor?: string;
  $color?: string;
}

const DropdownItem = styled(NextLink)<DropdownItemProps>`
  background-color: ${props => props.$backgroundColor ?? '#fff'};
  padding: .3rem .5rem;
  color: ${props => props.$color ?? '#000'};
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    background-color: #d8d8d8;
  }
  ${props => cssProps(props)}
`;

interface DropdownLinkTemplateProps {
  children: React.ReactNode;
  className?: string;
  dropdownItems: {
    name: string;
    route: string;
    key: string | number;
  }[];
}

function DropdownTemplate({ children, dropdownItems, className }: DropdownLinkTemplateProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      className={className}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      {children}
      <DropdownWrapper
        $css={`
          ${isShow ?
            'visibility: visible; opacity: 1; top: 100%; pointer-events: painted;'
            :
            'visibility: hidden; opacity: 0; top: 200%; pointer-events: none;'
          }
        `}
      >
        {dropdownItems.map((item) => (
          <DropdownItem href={item.route} key={item.key}>
            {item.name}
          </DropdownItem>
        ))}
      </DropdownWrapper>
    </Box>
  );
}

interface DropdownLinkProps extends ICSSProps {}

const Dropdown = styled(DropdownTemplate)<DropdownLinkProps>`
  ${props => cssProps(props)}
`;

export { Dropdown };