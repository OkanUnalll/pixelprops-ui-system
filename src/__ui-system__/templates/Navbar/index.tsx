'use client';

import Link from 'next/link';
import { Box, Container } from 'ui-system/components';

const navItems = [
  {
    text: 'Home',
    route: '/',
  },
  {
    text: 'Buttons',
    route: '/components/buttons',
  },
];

function Navbar() {
  return (
    <Box>
      <Container py={2} _display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          Pixel Props UI System
        </Link>

        <Box _display="flex" gap={1}>
          {navItems.map((item) => (
            <Box key={item.route}>
              <Link href={item.route}>
                {item.text}
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export { Navbar };