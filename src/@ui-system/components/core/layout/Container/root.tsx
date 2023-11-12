import styled, { css } from 'styled-components';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

export interface ContainerTemplateCSSProps extends ICSSProps {
  $isDisable?: boolean;
}

const isDisable = css`
  padding-left: 0;
  padding-right: 0;
`;

const ContainerTemplate = styled.div<ContainerTemplateCSSProps>`
  @media ${({ theme }) => theme.device.xxl} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 10rem;
      padding-right: 10rem;
    `}
  }

  @media ${({ theme }) => theme.device.xl} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 5rem;
      padding-right: 5rem;
    `}
  }

  @media ${({ theme }) => theme.device.lg} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 4rem;
      padding-right: 4rem;
    `}
  }

  @media ${({ theme }) => theme.device.md} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 3em;
      padding-right: 3rem;
    `}
  }

  @media ${({ theme }) => theme.device.sm} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 2rem;
      padding-right: 2rem;
    `}
  }

  @media ${({ theme }) => theme.device.xs} {
    ${({ $isDisable }) => $isDisable ? isDisable : `
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `}
  }

  ${props => cssProps(props)}
`;

export { ContainerTemplate };