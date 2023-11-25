'use client';

import { Box } from 'ui-system/components/Box/root';
import { Grid, GridItem } from 'ui-system/components/Grid';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Grid spacing={5}>
        <GridItem xs={6} md={4}>
          <Box w="100%">
            8
          </Box>
        </GridItem>
        <GridItem xs={6} md={8}>
          <Box css={{ backgroundColor: 'red' }} w="100%">
            4
          </Box>
        </GridItem>
        <GridItem xs={6} md={8}>
          <Box css={{ backgroundColor: 'red' }} w="100%">
            8
          </Box>
        </GridItem>
        <GridItem xs={6} md={4}>
          <Box css={{ backgroundColor: 'red' }} w="100%">
            4
          </Box>
        </GridItem>
      </Grid>
    </UIProvider>
  );
}

export default DashboardView;