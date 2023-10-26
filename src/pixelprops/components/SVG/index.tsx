import InlineSVG from 'react-inlinesvg';

interface Props {
    src: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
};

function SVG({
    src,
    width,
    height,
    fill,
    ...rest
  }: Props) {
  return (
    <InlineSVG
      src={src}
      width={width}
      height={height}
      fill={fill}
      {...rest}
    />
  );
}

export default SVG;