import styled from 'styled-components';
import { useState } from 'react';

import Box from '@root/elements/Box';

interface TooltipBoxProps {
  placement?: 'top' | 'left' | 'bottom' | 'right';
  isShow?: boolean;
}

const TooltipBox = styled.span<TooltipBoxProps>`
  position: absolute;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  transition: ${props => props.theme.transition.fast};
  opacity: ${props => props.theme.opacity.hidden};
  font-size: ${props => props.theme.typography.h5.fontSize};

  // Theme
  ${props => {
    switch (props.theme.mode) {
      case 'light' : return `
        background-color: ${props.theme.colors.dark.main};
        color: ${props.theme.colors.white.main};
      `;
      case 'dark': return `
        background-color: ${props.theme.colors.white.main};
        color: ${props.theme.colors.dark.main};
      `;
    }
  }}

  // Placement & isShow
  ${props => {
    const isShow = props.isShow;

    const DISTANCE = '130%';
    const END_DISTANCE = '110%';

    const getPlacement = () => {
      const placementValue = props.placement;
      
      switch (placementValue) {
        case 'top': return 'bottom';
        case 'bottom': return 'top';
        case 'left': return 'right';
        case 'right': return 'left';
        default: return 'bottom';
      }
    };

    const placement = getPlacement();
    // center alignment for opposite axis
    const alignment = placement === 'bottom' || placement === 'top' ? 'left: 50%; transform: translateX(-50%);' : 'top: 50%; transform: translateY(-50%);';

    if (isShow) return `
        visibility: visible;
        opacity: 1;
        pointer-events: painted;
        ${placement}: ${DISTANCE};
        ${alignment}
    `;

    if (!isShow) return `
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        ${placement}: ${END_DISTANCE};
        ${alignment}
    `;
  }}
`;

interface TooltipTemplateProps {
  children: React.ReactNode;
  title: string;
  placement?: 'top' | 'left' | 'bottom' | 'right';
};

function TooltipTemplate({ children, title, placement }: TooltipTemplateProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      $display="inline-block"
      $css="position: relative;"
    >
      <TooltipBox isShow={isShow} placement={placement} >
        {title}
      </TooltipBox>  
      <Box $width="auto" $display="inline-block">
        {children}
      </Box>  
    </Box>
  );
}

const Tooltip = styled(TooltipTemplate)``;

export default Tooltip;