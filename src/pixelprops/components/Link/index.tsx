import NextLink from 'next/link';
import styled from 'styled-components';

import { DropdownItem, DropdownWrapper } from 'pixelprops/components/Dropdown';

import { ICSSProps } from '@/models/theme/base/cssProps';
import { ICollepse } from '@/models/routes';

import { colors } from '@/assets/theme';
import cssProps from '@/assets/theme/base/cssProps';

import SVG from 'pixelprops/components/SVG';
import Box from 'pixelprops/components/Box';

interface ILinkComponentAttrs extends ICSSProps {
    $underline?: boolean;
    $color?: string;
}

interface Props extends ILinkComponentAttrs {
    children: React.ReactNode;
    href: string;
    target?: '_blank' | '_parent' | '_self' | 'top',
    rel?: string;
    withDropdown?: boolean;
    dropdownItems?: ICollepse[];
};

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 */
const LinkComponent = styled.span.attrs<ILinkComponentAttrs>(props => ({
    ...props,
    $underline: props.$underline,
    $color: props.$color,
}))`
    color: ${props => props.$color ?? colors.primary.main};
    transition: all .3s ease;
    text-decoration: ${props => props.$underline ? 'underline' : 'none'};
    &:hover {
        color: ${colors.primary.focus};
    };
    ${props => cssProps(props)}
    ${props => props.$css}
`;

function Link({
    children,
    href,
    target,
    rel,
    dropdownItems = [],
    withDropdown,
    ...rest
}: Props) {
  return (
    <Box $css="position: relative">
      <NextLink
        href={href}
        target={target}
        rel={rel}
      >
        <LinkComponent
          $display="flex"
          $alignItems="center"
          $css="position: relative;"
          {...rest}
        >
          {children}
          {withDropdown && (
            <SVG
              src="/svg/down-arrow.svg"
              width={20}
              fill="white"
            />
          )}
        </LinkComponent>
      </NextLink>
      {withDropdown && (
        <DropdownWrapper $css="top: 50px">
          {dropdownItems.map((item) => (
            <DropdownItem key={item.key}>
              <NextLink href={item.route}>
                <LinkComponent color="#000">
                  {item.name}
                </LinkComponent>
              </NextLink>
            </DropdownItem>
          ))}
        </DropdownWrapper>
      )}
    </Box>
  );
}

export default Link;
