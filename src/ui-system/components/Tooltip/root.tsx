import styled from 'styled-components';

interface TooltipBoxCSSProps {
  $placement?: 'top' | 'left' | 'bottom' | 'right';
  $isShow?: boolean;
}

const TooltipBox = styled.span<TooltipBoxCSSProps>`
  text-align: center;
  position: absolute;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  z-index: 3;
  transition: ${({ theme }) => theme.transition.fast};
  opacity: ${({ theme }) => theme.opacity.hidden};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};

  // Theme
  ${({ theme }) => {
    switch (theme.mode) {
      case 'light' : return `
        background-color: ${theme.colors.dark.main};
        color: ${theme.colors.white.main};
      `;
      case 'dark': return `
        background-color: ${theme.colors.white.main};
        color: ${theme.colors.dark.main};
      `;
    }
  }}

  // Placement & isShow
  ${({ $placement, $isShow }) => {
    const DISTANCE = '130%';
    const END_DISTANCE = '110%';

    const getPlacement = () => {
      const placementValue = $placement;
      
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

    if ($isShow) return `
        visibility: visible;
        opacity: 1;
        pointer-events: painted;
        ${placement}: ${DISTANCE};
        ${alignment}
    `;

    if (!$isShow) return `
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        ${placement}: ${END_DISTANCE};
        ${alignment}
    `;
  }}
`;

export { TooltipBox };