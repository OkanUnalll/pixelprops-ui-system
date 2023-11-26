'use client';

import { Box, Button, Grid, GridItem } from 'ui-system';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Box h="100vh" w="100%" _display="flex" alignItems="center">
        <Grid spacing={20} w="100%">
          <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
            <Button variant="text">text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
            <Button variant="ghost">ghost</Button>
            <Button color="blue" variant="bootstrap">bootstrap</Button>
          </GridItem>
          <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">X Large</Button>
          </GridItem>
        </Grid>
      </Box>
    </UIProvider>
  );
}

export default DashboardView;