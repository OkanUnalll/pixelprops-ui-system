import styled from 'styled-components';
import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

export interface LogoTemplateCSSProps extends ICSSProps {};

const LogoTemplate = styled.span<LogoTemplateCSSProps>`
  ${props => cssProps(props)}
`;

export { LogoTemplate };