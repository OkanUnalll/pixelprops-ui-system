'use client';

import { Box, Button, Container, Grid, Icon, Text } from 'ui-system/components';
import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';

function ButtonsView() {
  return (
    <UIProvider>
      <Navbar />
      <Container my={3} css={{ border: 'solid 1px #464646', borderRadius: '10px' }}>
        <Box py={4} minH="100vh" w="100%" _display="flex" alignItems="center">
          <Grid container spacing={20} w="100%">
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" variant="text">text</Button>
              <Button icon="google_arrow_right" variant="contained">contained</Button>
              <Button icon="google_arrow_right" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" variant="surface">surface</Button>
              <Button icon="google_arrow_right" variant="soft">soft</Button>
              <Button icon="google_arrow_right" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" disabled variant="text">text</Button>
              <Button icon="google_arrow_right" disabled variant="contained">contained</Button>
              <Button icon="google_arrow_right" disabled variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" disabled variant="surface">surface</Button>
              <Button icon="google_arrow_right" disabled variant="soft">soft</Button>
              <Button icon="google_arrow_right" disabled variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" disabled variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" color="blue" variant="text">text</Button>
              <Button icon="google_arrow_right" color="blue" variant="contained">contained</Button>
              <Button icon="google_arrow_right" color="blue" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" color="blue" variant="surface">surface</Button>
              <Button icon="google_arrow_right" color="blue" variant="soft">soft</Button>
              <Button icon="google_arrow_right" color="blue" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" color="blue" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" disabled color="blue" variant="text">text</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="contained">contained</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="surface">surface</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="soft">soft</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" disabled color="blue" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" color="green" variant="text">text</Button>
              <Button icon="google_arrow_right" color="green" variant="contained">contained</Button>
              <Button icon="google_arrow_right" color="green" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" color="green" variant="surface">surface</Button>
              <Button icon="google_arrow_right" color="green" variant="soft">soft</Button>
              <Button icon="google_arrow_right" color="green" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" color="green" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" disabled color="green" variant="text">text</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="contained">contained</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="surface">surface</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="soft">soft</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" disabled color="green" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" color="purple" variant="text">text</Button>
              <Button icon="google_arrow_right" color="purple" variant="contained">contained</Button>
              <Button icon="google_arrow_right" color="purple" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" color="purple" variant="surface">surface</Button>
              <Button icon="google_arrow_right" color="purple" variant="soft">soft</Button>
              <Button icon="google_arrow_right" color="purple" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" color="purple" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" disabled color="purple" variant="text">text</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="contained">contained</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="surface">surface</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="soft">soft</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" disabled color="purple" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" color="red" variant="text">text</Button>
              <Button icon="google_arrow_right" color="red" variant="contained">contained</Button>
              <Button icon="google_arrow_right" color="red" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" color="red" variant="surface">surface</Button>
              <Button icon="google_arrow_right" color="red" variant="soft">soft</Button>
              <Button icon="google_arrow_right" color="red" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" color="red" variant="bootstrap">bootstrap</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button icon="google_arrow_right" disabled color="red" variant="text">text</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="contained">contained</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="outlined">outlined</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="surface">surface</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="soft">soft</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="ghost">ghost</Button>
              <Button icon="google_arrow_right" disabled color="red" variant="bootstrap">bootstrap</Button>
            </Grid>

            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="text" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="text" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="text" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="text" icon="google_arrow_right">text</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="contained" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="contained" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="contained" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="contained" icon="google_arrow_right">text</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="outlined" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="outlined" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="outlined" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="outlined" icon="google_arrow_right">text</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="surface" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="surface" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="surface" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="surface" icon="google_arrow_right">text</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="soft" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="soft" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="soft" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="soft" icon="google_arrow_right">text</Button>
            </Grid>
            <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
              <Button size="sm" color="blue" variant="ghost" icon="google_arrow_right">text</Button>
              <Button size="md" color="blue" variant="ghost" icon="google_arrow_right">text</Button>
              <Button size="lg" color="blue" variant="ghost" icon="google_arrow_right">text</Button>
              <Button size="xl" color="blue" variant="ghost" icon="google_arrow_right">text</Button>
            </Grid>

            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="text" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="text" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="text" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="text" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="contained" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="contained" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="contained" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="contained" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="outlined" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="outlined" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="outlined" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="outlined" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="surface" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="surface" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="surface" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="surface" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="soft" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="soft" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="soft" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="soft" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="ghost" color="red" size="sm" rounded="full" iconOnly icon="google_close" />
              <Button variant="ghost" color="red" size="md" rounded="full" iconOnly icon="google_close" />
              <Button variant="ghost" color="red" size="lg" rounded="full" iconOnly icon="google_close" />
              <Button variant="ghost" color="red" size="xl" rounded="full" iconOnly icon="google_close" />
            </Grid>

            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="contained" size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
              <Button variant="outlined" size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
              <Button variant="surface" size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
              <Button variant="soft" size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
              <Button variant="ghost" size="container">
                <Box px={2} py={2}>
                  Container Button
                </Box>
              </Button>
            </Grid>

            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="contained" color="blue" rounded="none">none</Button>
              <Button variant="contained" color="blue" rounded="xs">x small</Button>
              <Button variant="contained" color="blue" rounded="sm">small</Button>
              <Button variant="contained" color="blue" rounded="md">medium</Button>
              <Button variant="contained" color="blue" rounded="lg">large</Button>
              <Button variant="contained" color="blue" rounded="xl">x large</Button>
              <Button variant="contained" color="blue" rounded="xxl">xx large</Button>
              <Button variant="contained" color="blue" rounded="full">full</Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="outlined" color="blue" rounded="none">none</Button>
              <Button variant="outlined" color="blue" rounded="xs">x small</Button>
              <Button variant="outlined" color="blue" rounded="sm">small</Button>
              <Button variant="outlined" color="blue" rounded="md">medium</Button>
              <Button variant="outlined" color="blue" rounded="lg">large</Button>
              <Button variant="outlined" color="blue" rounded="xl">x large</Button>
              <Button variant="outlined" color="blue" rounded="xxl">xx large</Button>
              <Button variant="outlined" color="blue" rounded="full">full</Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="surface" color="blue" rounded="none">none</Button>
              <Button variant="surface" color="blue" rounded="xs">x small</Button>
              <Button variant="surface" color="blue" rounded="sm">small</Button>
              <Button variant="surface" color="blue" rounded="md">medium</Button>
              <Button variant="surface" color="blue" rounded="lg">large</Button>
              <Button variant="surface" color="blue" rounded="xl">x large</Button>
              <Button variant="surface" color="blue" rounded="xxl">xx large</Button>
              <Button variant="surface" color="blue" rounded="full">full</Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="soft" color="blue" rounded="none">none</Button>
              <Button variant="soft" color="blue" rounded="xs">x small</Button>
              <Button variant="soft" color="blue" rounded="sm">small</Button>
              <Button variant="soft" color="blue" rounded="md">medium</Button>
              <Button variant="soft" color="blue" rounded="lg">large</Button>
              <Button variant="soft" color="blue" rounded="xl">x large</Button>
              <Button variant="soft" color="blue" rounded="xxl">xx large</Button>
              <Button variant="soft" color="blue" rounded="full">full</Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="ghost" color="blue" rounded="none">none</Button>
              <Button variant="ghost" color="blue" rounded="xs">x small</Button>
              <Button variant="ghost" color="blue" rounded="sm">small</Button>
              <Button variant="ghost" color="blue" rounded="md">medium</Button>
              <Button variant="ghost" color="blue" rounded="lg">large</Button>
              <Button variant="ghost" color="blue" rounded="xl">x large</Button>
              <Button variant="ghost" color="blue" rounded="xxl">xx large</Button>
              <Button variant="ghost" color="blue" rounded="full">full</Button>
            </Grid>

            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button variant="outlined" size="container" rounded="lg" hoverEffect="droplet">
                <Box _display="flex" alignItems="center" py={0.6} px={1.5} gap="10px">
                  <Icon name="google_call" size="lg" />
                  <Text fontSize="13px" fontWeight="500" variant="paragraph">Call</Text>
                </Box>
              </Button>
              <Button variant="soft" size="container" rounded="lg" hoverEffect="droplet">
                <Box _display="flex" alignItems="center" py={0.6} px={1.5} gap="10px">
                  <Icon name="google_call" size="lg" />
                  <Text fontSize="13px" fontWeight="500" variant="paragraph">Call</Text>
                </Box>
              </Button>
              <Button variant="surface" size="container" rounded="lg" hoverEffect="droplet">
                <Box _display="flex" alignItems="center" py={0.6} px={1.5} gap="10px">
                  <Icon name="google_call" size="lg" />
                  <Text fontSize="13px" fontWeight="500" variant="paragraph">Call</Text>
                </Box>
              </Button>
              <Button variant="ghost" size="container" rounded="lg" hoverEffect="droplet">
                <Box _display="flex" alignItems="center" py={0.6} px={1.5} gap="10px">
                  <Icon name="google_call" size="lg" />
                  <Text fontSize="13px" fontWeight="500" variant="paragraph">Call</Text>
                </Box>
              </Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button color="yellow" variant="outlined" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button color="yellow" variant="soft" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button color="yellow" variant="surface" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button color="yellow" variant="ghost" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
            </Grid>
            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button disabled color="yellow" variant="outlined" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button disabled color="yellow" variant="soft" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button disabled color="yellow" variant="surface" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
              <Button disabled color="yellow" variant="ghost" size="container" rounded="full" hoverEffect="droplet">
                <Icon name="google_call" size="lg" m={1} />
              </Button>
            </Grid>

            <Grid item xs={12} gap={1} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center">
              <Button iconLeft="google_home" href="/">route home</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </UIProvider>
  );
}

export default ButtonsView;