'use client';

import { useEffect, useState } from 'react';

import { breakPoint } from 'ui-system/core';

import Container from 'ui-system/components/Container';
import Box from 'ui-system/components/Box';
import Logo from 'ui-system/components/Logo';
import Link from 'ui-system/components/Link';
import Button from 'ui-system/components/Button';
import Icon from 'ui-system/components/Icon';

import { NavbarContainer, NavbarContent, NavbarLinks, MobileMenuContainer } from 'ui-system/components/core/layout/Navbar/root';
import type { NavbarContainerCSSProps, MobileMenuContainerCSSProps, NavbarLinksCSSProps } from 'ui-system/components/core/layout/Navbar/root';
import { useTheme } from 'styled-components';

function NavbarLinksWrapper({ ...rest }: NavbarLinksCSSProps) {
  const links = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Components', href: '/test' },
    { id: 3, name: 'Docs', href: '/' },
  ];  

  return (
    <NavbarLinks {...rest}>
      {links.map(({ id, href, name }) => (
        <Link
          key={id}
          href={href}
          $css="font-weight: 500;"
        >
          {name}
        </Link>
      ))}
    </NavbarLinks>
  );
}

interface MobileMenuProps extends MobileMenuContainerCSSProps {
  readonly setMenuState: (param: boolean) => void;  
};

function MobileMenu({ setMenuState, ...rest }: MobileMenuProps) {
  const { mode } = useTheme(); 

  const handleMenu = () => {
    setMenuState(false);
  };

  return (
    <MobileMenuContainer {...rest}>
      <Button
        $variant="text"
        $size="large"
        $color={mode === 'light' ? 'dark' : 'white'}
        onClick={handleMenu}
        $px={3}
        $py={3}
        $css={`
          position: absolute;
          right: 0;
          top: 0;
        `}
      >
        <Icon name="google_close" $size="large" />
      </Button>
      <Box $mb={4}>
        <Logo />
      </Box>
      <NavbarLinksWrapper
        $flexDirection="column"
        $alignItems="flex-start"
        $css="
          a {
            font-size: 20px;
          }  
        "
      />
    </MobileMenuContainer>
  );
}

interface NavbarProps extends NavbarContainerCSSProps {
  readonly transparent?: boolean;  
}

function Navbar({ transparent = true, ...rest }: NavbarProps) {
  const { mode } = useTheme();

  const [isScroll, setIsScroll] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const defaultOpacity = 0.8;
  const defaultBlur = 'small';
  const opacity = isScroll ? 0 : defaultOpacity;
  const blur = isScroll ? 'none' : defaultBlur;

  // transparent controller
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };

    if (transparent) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [transparent]);

  // mobile view controller
  useEffect(() => {
    const handleMobileView = () => {
      if (window.innerWidth < breakPoint.lg) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener('resize', handleMobileView);

    handleMobileView();

    return () => {
        window.removeEventListener('resize', handleMobileView);
    };
  }, []);

  // scroll controller
  useEffect(() => {
    const disableScroll = () => {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';
    };

    if (mobileMenu) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [mobileMenu]);

  return (
    <>
      <NavbarContainer $opacity={transparent ? opacity : defaultOpacity} $blur={transparent ? blur : defaultBlur} {...rest}>
        <Container>
          <NavbarContent>
            <Box>
                <Logo width={50} />
            </Box>
            {!mobileView ? (
              <NavbarLinksWrapper />
            ) : (
              <Button onClick={() => setMobileMenu(prev => !prev)} $variant="text" $color={mode === 'light' ? 'dark' : 'white'} $iconOnly>
                <Icon name="google_menu" />
              </Button>
            )}
          </NavbarContent>
        </Container>
      </NavbarContainer>
      <MobileMenu
        $isOpen={mobileMenu}
        setMenuState={setMobileMenu}
        $animationDirection="left"
      />
    </>
  );
}

export { Navbar };