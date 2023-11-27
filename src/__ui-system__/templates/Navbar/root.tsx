import styled from 'styled-components';

import { cssProps, hexToRgba } from 'ui-system/core';
import type { ICSSProps, Color } from 'ui-system/core';

export interface NavbarContainerCSSProps extends ICSSProps {
  $variant?: 'sticky' | 'fixed' | 'absolute' | 'none';
  $opacity?: number,
  $backgroundColor?: Color;
  $blur?: 'small' | 'medium' | 'large' | 'none';
}

const NavbarContainer = styled.nav.attrs<NavbarContainerCSSProps>(
  ({ $variant }) => ({
    $variant: $variant ?? 'fixed',
  })
)`
  width: 100%;
  height: auto;
  top: 0;
  z-index: 5;
  transition: ${({ theme }) => theme.transition.fast};
  position: ${({ $variant }) => $variant};
  background-color: ${({ theme, $backgroundColor, $opacity }) => (
    hexToRgba(theme.colors[$backgroundColor ?? (theme.mode === 'light' ? 'white' : 'dark')].main, ($opacity ?? 0.8))
  )};

  ${({ $blur }) => {
    const blur = $blur ?? 'small';
    switch (blur) {
      case 'none': return '';
      case 'small': return `
        backdrop-filter: blur(10px);
      `;  
      case 'medium': return `
        backdrop-filter: blur(13px);
      `;
      case 'large': return `
        backdrop-filter: blur(18px);
      `;
    }
  }}

  ${props => cssProps(props)}
`;

export interface NavbarContentCSSProps extends ICSSProps {}

const NavbarContent = styled.div<NavbarContentCSSProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => cssProps(props)}
`;

export interface NavbarLinksCSSProps extends ICSSProps {}

const NavbarLinks = styled.div<NavbarLinksCSSProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${props => cssProps(props)}
`;

export interface MobileMenuContainerCSSProps extends ICSSProps {
  $opacity?: number,
  $backgroundColor?: Color;
  $blur?: 'small' | 'medium' | 'large' | 'none';
  $animationDirection?: 'left' | 'right' | 'top' | 'bottom';
  $isOpen?: boolean;
}

const MobileMenuContainer = styled.div.attrs<MobileMenuContainerCSSProps>(({ $animationDirection }) => ({
  $animationDirection: $animationDirection ?? 'left',
}))`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  padding: 7rem 10rem;
  transition: ${({ theme }) => theme.transition.slow};
  background-color: ${({ theme, $backgroundColor, $opacity }) => (
    hexToRgba(theme.colors[$backgroundColor ?? (theme.mode === 'light' ? 'white' : 'dark')].main, ($opacity ?? 0.8))
  )};

  @media ${({ theme }) => theme.device.md} {
    padding: 7rem 5rem;
  }

  ${({ $isOpen, $animationDirection }) => $isOpen ? `
    ${$animationDirection}: 0;
  ` : `
    ${$animationDirection}: -100%;
  `};

  ${({ $blur }) => {
    const blur = $blur ?? 'small';
    switch (blur) {
      case 'none': return '';
      case 'small': return `
        backdrop-filter: blur(10px);
      `;  
      case 'medium': return `
        backdrop-filter: blur(13px);
      `;
      case 'large': return `
        backdrop-filter: blur(18px);
      `;
    }
  }}

  ${props => cssProps(props)}
`;

export { NavbarContainer, NavbarContent, NavbarLinks, MobileMenuContainer };