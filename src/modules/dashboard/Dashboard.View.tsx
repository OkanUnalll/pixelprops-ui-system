'use client';

import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';
import { Color } from 'ui-system/__test__/features/application/Color.Feature';
import { Box, Grid, Text } from 'ui-system/components';

function DashboardView() {
  const color = new Color('#ffcccc');
  const color2 = new Color(
    '#ccffd7',
    {
      darkValueLightness: 20,
      lightValueLightness: 5,
    },
  );

  return (
    <UIProvider>
      <Navbar />
      <Box>
        <Box
          css={{ backgroundColor: color.main }}
          _display="flex"
          alignItems="center"
          justifyContent="center"
          py={1}
        >
          <Text css={{ color: color.contrast }}>Main Color</Text>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box
              css={{ backgroundColor: color.dark }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color.contrast }}>Dark Color</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{ backgroundColor: color.light }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color.contrast }}>Light Color</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{
                backgroundColor: color.main,
                '&:hover': {
                  backgroundColor: color.dark,
                },
              }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color.contrast }}>Hover Dark</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{
                backgroundColor: color.main,
                '&:hover': {
                  backgroundColor: color.light,
                },
              }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color.contrast }}>Hover Light</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box
          css={{ backgroundColor: color2.main }}
          _display="flex"
          alignItems="center"
          justifyContent="center"
          py={1}
        >
          <Text css={{ color: color2.contrast }}>Main Color</Text>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box
              css={{ backgroundColor: color2.dark }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color2.contrast }}>Dark Color</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{ backgroundColor: color2.light }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color2.contrast }}>Light Color</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{
                backgroundColor: color2.main,
                '&:hover': {
                  backgroundColor: color2.dark,
                },
              }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color2.contrast }}>Hover Dark</Text>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              css={{
                backgroundColor: color2.main,
                '&:hover': {
                  backgroundColor: color2.light,
                },
              }}
              _display="flex"
              alignItems="center"
              justifyContent="center"
              py={1}
            >
              <Text css={{ color: color2.contrast }}>Hover Light</Text>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </UIProvider>
  );
}

export default DashboardView;