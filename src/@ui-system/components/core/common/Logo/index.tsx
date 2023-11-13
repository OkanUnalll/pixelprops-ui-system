import Link from 'ui-system/components/Link';
import Svg from 'ui-system/components/Svg';

interface Props {
  readonly width?: number;
  readonly height?: number;
  readonly route?: boolean;
}

function Logo({
  width = 80,
  height,
  route = true,
}: Props) {

  if (route) {
    return (
      <Link href="/">
        <Svg
          src="/svg/logos/primary.svg"
          width={width}
          height={height}
        />
      </Link>
    );
  }

  return (
    <Svg
      src="/svg/logos/primary.svg"
      width={width}
      height={height}
    />
  );
}

export { Logo };
