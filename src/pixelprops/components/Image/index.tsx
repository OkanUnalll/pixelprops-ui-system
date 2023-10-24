import NextImage, { ImageProps } from 'next/image';

interface Props extends ImageProps {};

function Image({
    ...rest
}: Props) {
    return (
      <NextImage
        {...rest}
      />
    );
}

export default Image;
