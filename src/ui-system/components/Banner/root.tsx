import styled from '@emotion/styled';
import CSS from 'csstype';
import Image from 'next/image';

import { cssProps } from 'ui-system/utils';
import type { ICSSProps } from 'ui-system/';

export interface BannerWrapperCSSProps extends ICSSProps {
  $size?: 'small' | 'medium' | 'large' | 'full';
  $backgroundColor?: CSS.Property.BackgroundColor,
}

const BannerWrapper = styled.div<BannerWrapperCSSProps>`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${({ $backgroundColor }) => $backgroundColor ?? '#000'};

  height: ${({ $size }) => {
    switch($size) {
      case 'small': return '300px';
      case 'medium': return '500px';
      case 'large': return '700px';
      case 'full': return '100vh';
      default: return '500px';
    }
  }};

  ${props => cssProps(props)}
`;

interface BannerImageCSSProps {
  $opacity?: CSS.Property.Opacity;
};

const BannerImage = styled(Image)<BannerImageCSSProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  opacity: ${({ $opacity }) => $opacity ?? '1'};
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 2;
`;

export { BannerWrapper, BannerImage, BannerContent };