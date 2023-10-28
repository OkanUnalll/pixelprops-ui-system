import Logo from '@/components/Logo';

import routes from '@/routes';

import Link from 'pixelprops/components/Link';
import Typography from 'pixelprops/components/Typography';
import { Box } from 'pixelprops/components/core';

function PageNavbar() {
  return (
    <Box
      $display="flex"
      $justifyContent="space-between"
      $alignItems="center"
    >
      <Box>
        <Link
          href="/"
          $display="flex"
          $alignItems="center"
          $css="
            color: #fff;
            &:hover {
              color: #fff;
              opacity: .7;
            }
          "
        >
          <Box $mr="1rem">
            <Logo width={60} route={false} />
          </Box>
          <Typography
            $variant="h2"
            $mr=".2rem"
            $weight="600"
          >
            PIXEL
          </Typography>
          <Typography
            $variant="h2"
            $weight="400"
          >
            PROPS
          </Typography>
        </Link>
      </Box>
      <Box $display="flex">
        {routes.map((item) => (
          <Link
            href={item.route}
            key={item.key}
            $mr="1rem"
            $color="#fff"
          >
            {item.name}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default PageNavbar;
