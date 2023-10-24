import InlineSVG from 'react-inlinesvg';

interface Props {
    src: string;
    width?: number | string;
    height?: number | string;
};

function SVG({ src, width, height }: Props) {
  return (
    <InlineSVG
      src={src}
      width={width}
      height={height}
    />
  );
}

export default SVG;