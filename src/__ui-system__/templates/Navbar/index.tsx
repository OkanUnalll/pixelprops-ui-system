'use client';

import Link from 'next/link';
import { Box, Container, Text } from 'ui-system/components';

const navItems = [
  {
    text: 'Home',
    route: '/',
  },
  {
    text: 'Buttons',
    route: '/components/buttons',
  },
  {
    text: 'Typography',
    route: '/components/typography',
  },
  {
    text: 'Checkbox',
    route: '/components/checkbox',
  },
];

function Navbar() {
  return (
    <Box>
      <Container py={2} _display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text>
            Pixel Props UI System
          </Text>
        </Link>

        <Box _display="flex" gap={1}>
          {navItems.map((item) => (
            <Box key={item.route}>
              <Link href={item.route}>
                <Text>
                  {item.text}
                </Text>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export { Navbar };