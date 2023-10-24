import NextLink from 'next/link';
import styled from 'styled-components';

import { ICSSProps } from '@/models/theme/base/cssProps';

import cssProps from '@/assets/theme/base/cssProps';
import { colors } from '@/assets/theme';

interface ILinkComponentAttrs extends ICSSProps {
    $underline?: boolean;
}

interface Props extends ILinkComponentAttrs {
    children: React.ReactNode;
    href: string;
    target?: '_blank' | '_parent' | '_self' | 'top',
    rel?: string;
};

/**
 * attrs feature ref: https://styled-components.com/docs/basics#attaching-additional-props
 */
const LinkComponent = styled.span.attrs<ILinkComponentAttrs>(props => ({
    ...props,
    $underline: props.$underline,
}))`
    color: ${colors.primary.main};
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
    ...rest
}: Props) {
  return (
    <NextLink
      href={href}
      target={target}
      rel={rel}
    >
      <LinkComponent {...rest}>
        {children}
      </LinkComponent>
    </NextLink>
  );
}

export default Link;
