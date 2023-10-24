import SVG from 'pixelprops/components/SVG';
import Link from 'pixelprops/components/Link';

function Logo() {
  return (
    <Link href="/">
        hello
      <SVG src="/svg/logos/primary.svg" width={70} />
    </Link>
  );
}

export default Logo;
