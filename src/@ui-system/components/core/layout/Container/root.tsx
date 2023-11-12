import styled from 'styled-components';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

export interface ContainerTemplateCSSProps extends ICSSProps {}

const ContainerTemplate = styled.div<ContainerTemplateCSSProps>`
  @media ${({ theme }) => theme.device.xxl} {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media ${({ theme }) => theme.device.xl} {
      padding-left: 5rem;
      padding-right: 5rem;
    }

    @media ${({ theme }) => theme.device.lg} {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    @media ${({ theme }) => theme.device.md} {
      padding-left: 3em;
      padding-right: 3rem;
    }

    @media ${({ theme }) => theme.device.sm} {
      padding-left: 2rem;
      padding-right: 2rem;
    }

  @media ${({ theme }) => theme.device.xs} {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  ${props => cssProps(props)}
`;

export { ContainerTemplate };