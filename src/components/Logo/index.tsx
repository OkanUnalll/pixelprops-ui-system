import SVG from '@root/elements/SVG';
import Link from '@root/elements/Link';

interface Props {
  width?: number;
  height?: number;
  route?: boolean;
}

function Logo({
  width = 80,
  height,
  route = true,
}: Props) {

  if (route) {
    return (
      <Link href="/">
        <SVG
          src="/svg/logos/primary.svg"
          width={width}
          height={height}
        />
      </Link>
    );
  }

  return (
    <SVG
      src="/svg/logos/primary.svg"
      width={width}
      height={height}
    />
  );
}

export default Logo;
