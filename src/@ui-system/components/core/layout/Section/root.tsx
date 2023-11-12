import styled from 'styled-components';
import CSS from 'csstype';

import { cssProps } from 'ui-system/core';
import type { ICSSProps, Color } from 'ui-system/core';

export interface SectionTemplateCSSProps extends ICSSProps {
  $backgroundColor?: Color;
  $bgImageSrc?: string;
  $bgImageOpacity?: CSS.Property.Opacity;  
}

const SectionTemplate = styled.div<SectionTemplateCSSProps>`
  overflow: hidden;
  position: relative;
  background-color: ${({ $backgroundColor, theme }) => $backgroundColor ? theme.colors[$backgroundColor].main : 'transparent'};
  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: ${({ $bgImageSrc }) => $bgImageSrc ? `url('${$bgImageSrc}')` : 'none'};
    opacity: ${({ $bgImageOpacity, theme }) => $bgImageOpacity ?? theme.opacity.xs};
  }

  ${props => cssProps(props)}
`;

export { SectionTemplate };