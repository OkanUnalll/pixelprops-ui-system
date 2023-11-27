'use client';

import { Box, Button, Container, Grid, GridItem } from 'ui-system';
import { UIProvider } from 'ui-system/providers';

function DashboardView() {
  return (
    <UIProvider>
      <Container my={3} css={{ border: 'solid 1px #464646', borderRadius: '10px' }}>
        <Box py={4} minH="100vh" w="100%" _display="flex" alignItems="center">
          <Grid spacing={20} w="100%">
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button variant="text">text</Button>
              <Button variant="contained">contained</Button>
              <Button variant="outlined">outlined</Button>
              <Button variant="ghost">ghost</Button>
              <Button variant="bootstrap">bootstrap</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="green" variant="text">button</Button>
              <Button color="green" variant="contained">button</Button>
              <Button color="green" variant="outlined">button</Button>
              <Button color="green" variant="ghost">button</Button>
              <Button color="green" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="grey" variant="text">button</Button>
              <Button color="grey" variant="contained">button</Button>
              <Button color="grey" variant="outlined">button</Button>
              <Button color="grey" variant="ghost">button</Button>
              <Button color="grey" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="light" variant="text">button</Button>
              <Button color="light" variant="contained">button</Button>
              <Button color="light" variant="outlined">button</Button>
              <Button color="light" variant="ghost">button</Button>
              <Button color="light" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="purple" variant="text">button</Button>
              <Button color="purple" variant="contained">button</Button>
              <Button color="purple" variant="outlined">button</Button>
              <Button color="purple" variant="ghost">button</Button>
              <Button color="purple" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="red" variant="text">button</Button>
              <Button color="red" variant="contained">button</Button>
              <Button color="red" variant="outlined">button</Button>
              <Button color="red" variant="ghost">button</Button>
              <Button color="red" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="yellow" variant="text">button</Button>
              <Button color="yellow" variant="contained">button</Button>
              <Button color="yellow" variant="outlined">button</Button>
              <Button color="yellow" variant="ghost">button</Button>
              <Button color="yellow" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} _display="flex" justifyContent="center" w="100%" gap={1}>
              <Button color="secondary" variant="text">button</Button>
              <Button color="secondary" variant="contained">button</Button>
              <Button color="secondary" variant="outlined">button</Button>
              <Button color="secondary" variant="ghost">button</Button>
              <Button color="secondary" variant="bootstrap">button</Button>
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button size="sm" iconRight="google_arrow_right">
                Small
              </Button>
              <Button size="md" iconRight="google_arrow_right">
                Medium
              </Button>
              <Button size="lg" iconRight="google_arrow_right">
                Large
              </Button>
              <Button size="xl" iconRight="google_arrow_right">
                XLarge
              </Button>
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button size="sm" rounded="full" iconOnly icon="google_check" />
              <Button size="md" rounded="full" iconOnly icon="google_check" />
              <Button size="lg" rounded="full" iconOnly icon="google_check" />
              <Button size="xl" rounded="full" iconOnly icon="google_check" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button variant="outlined" rounded="full" size="sm" iconOnly icon="google_check" />
              <Button variant="outlined" rounded="full" size="md" iconOnly icon="google_check" />
              <Button variant="outlined" rounded="full" size="lg" iconOnly icon="google_check" />
              <Button variant="outlined" rounded="full" size="xl" iconOnly icon="google_check" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button variant="ghost" rounded="full" size="sm" iconOnly icon="google_check" />
              <Button variant="ghost" rounded="full" size="md" iconOnly icon="google_check" />
              <Button variant="ghost" rounded="full" size="lg" iconOnly icon="google_check" />
              <Button variant="ghost" rounded="full" size="xl" iconOnly icon="google_check" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button variant="text" rounded="full" size="sm" iconOnly icon="google_check" />
              <Button variant="text" rounded="full" size="md" iconOnly icon="google_check" />
              <Button variant="text" rounded="full" size="lg" iconOnly icon="google_check" />
              <Button variant="text" rounded="full" size="xl" iconOnly icon="google_check" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button color="red" variant="bootstrap" size="sm" iconOnly icon="google_close" />
              <Button color="red" variant="bootstrap" size="md" iconOnly icon="google_close" />
              <Button color="red" variant="bootstrap" size="lg" iconOnly icon="google_close" />
              <Button color="red" variant="bootstrap" size="xl" iconOnly icon="google_close" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button color="blue" size="sm" iconLeft="google_menu">
                Icon
              </Button>
              <Button color="blue" size="sm" iconOnly icon="google_menu" />
              <Button color="blue" size="md" iconLeft="google_menu">
                Icon
              </Button>
              <Button color="blue" size="md" iconOnly icon="google_menu" />
              <Button color="blue" size="lg" iconLeft="google_menu">
                Icon
              </Button>
              <Button color="blue" size="lg" iconOnly icon="google_menu" />
              <Button color="blue" size="xl" iconLeft="google_menu">
                Icon
              </Button>
              <Button color="blue" size="xl" iconOnly icon="google_menu" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button size="md" disabled iconLeft="google_menu">
                Icon
              </Button>
              <Button size="md" disabled iconRight="google_menu">
                Icon
              </Button>
              <Button size="md" disabled iconOnly icon="google_menu" />
            </GridItem>
            <GridItem xs={12} gap={1} _display="flex" justifyContent="center">
              <Button size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </UIProvider>
  );
}

export default DashboardView;