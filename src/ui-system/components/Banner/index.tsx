import CSS from 'csstype';

import { BannerWrapper, BannerImage, type BannerWrapperCSSProps, BannerContent } from 'ui-system/components/core/base/Banner/root';

interface Props extends BannerWrapperCSSProps {
  readonly children?: React.ReactNode;
  readonly src: string;
  readonly alt: string;
  readonly imageOpacity?: CSS.Property.Opacity;
};

function Banner({
  children,
  src,
  alt,
  imageOpacity,
  ...root
}: Props) {
  return (
    <BannerWrapper {...root}>
      {children && (
        <BannerContent>
          {children}
        </BannerContent>
      )}
      <BannerImage
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        $opacity={imageOpacity}
      />
    </BannerWrapper>
  );
}

export { Banner };