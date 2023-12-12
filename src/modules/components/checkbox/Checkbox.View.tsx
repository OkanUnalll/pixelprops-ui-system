'use client';

import { useTheme } from '@emotion/react';
import { Box, Checkbox, Container, Grid } from 'ui-system/components';
import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';
import { hexToRgba } from 'ui-system/utils';

function CheckboxView() {
  return (
    <UIProvider>
      <CheckboxViewUI />
    </UIProvider>
  );
}

function CheckboxViewUI() {
  const theme = useTheme();

  return (
    <>
      <Navbar />
      <Container my={3}>
        <Grid container spacingY={20}>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox defaultChecked>Label</Checkbox>
            <Checkbox defaultChecked />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox>
              Label
            </Checkbox>
            <Checkbox />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox defaultChecked color="default" />
            <Checkbox defaultChecked color="blue" />
            <Checkbox defaultChecked color="green" />
            <Checkbox defaultChecked color="purple" />
            <Checkbox defaultChecked color="red" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox disabled defaultChecked color="default" />
            <Checkbox disabled defaultChecked color="blue" />
            <Checkbox disabled defaultChecked color="green" />
            <Checkbox disabled defaultChecked color="purple" />
            <Checkbox disabled defaultChecked color="red" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox color="default" />
            <Checkbox color="blue" />
            <Checkbox color="green" />
            <Checkbox color="purple" />
            <Checkbox color="red" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox disabled color="default" />
            <Checkbox disabled color="blue" />
            <Checkbox disabled color="green" />
            <Checkbox disabled color="purple" />
            <Checkbox disabled color="red" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox defaultChecked size="sm" />
            <Checkbox defaultChecked size="md" />
            <Checkbox defaultChecked size="lg" />
            <Checkbox defaultChecked size="xl" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox rounded="none" />
            <Checkbox rounded="sm" />
            <Checkbox rounded="md" />
            <Checkbox rounded="lg" />
            <Checkbox rounded="xl" />
            <Checkbox rounded="xxl" />
            <Checkbox rounded="full" />
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox
              color="blue"
              defaultChecked
              css={{
                borderRadius: theme.edges[theme.defaultRadius],
                transition: theme.transitions.fast,
                cursor: 'pointer',

                '&:hover': {
                  backgroundColor: hexToRgba(theme.colors[theme.defaultGrayColor].main, 0.1),
                },
              }}
              px={1}
              py={0.7}
            >
              <Box>
                Label Content
              </Box>
            </Checkbox>
          </Grid>
          <Grid item xs={12} _display="flex" css={{ flexWrap: 'wrap' }} justifyContent="center" w="100%" gap={1}>
            <Checkbox defaultChecked color="blue" icon="google_autorenew" size="xl" />
            <Checkbox defaultChecked color="green" icon="google_home" size="xl" />
            <Checkbox defaultChecked color="orange" icon="google_settings" size="xl" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CheckboxView;