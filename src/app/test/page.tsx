'use client';

import Box from 'ui-system/components/Box';

import DataTable from '@root/elements/Tables/DataTable';

import PageLayout from '@/layouts/PageLayout';

import WidgetContainer from '@root/elements/WidgetContainer';
import Typography from '@root/elements/Typography';
import Chechbox from '@root/elements/Checkbox';
import Divider from '@root/elements/Divider';
import Tooltip from '@root/elements/Tooltip';
import Link from '@root/elements/Link';
import Button from 'ui-system/components/Button';
import Icon from 'ui-system/components/Icon';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
      <Box $display="flex" $flexDirection="column" $py={24} $css="position: relative;">
        <Typography $variant="h1" $mb="3rem">Elements</Typography>
        <Section container title="Button">
          <Section title="Variant">
            <Button $variant="text">Text</Button>
            <Button $variant="contained">Contained</Button>
            <Button $variant="outlined">Outlined</Button>
          </Section>
          <Section title="Disabled">
            <Button disabled $variant="text">Disabled</Button>
            <Button disabled $variant="contained">Disabled</Button>
            <Button disabled $variant="outlined">Disabled</Button>
          </Section>
          <Section title="Sizes">
            <Box $display="flex" $alignItems="center" $gap={10}>
              <Button $size="small">Small</Button>
              <Button $size="medium">Medium</Button>
              <Button $size="large">Large</Button>
            </Box>
          </Section>
          <Section title="With Icons">
            <Box $display="flex" $alignItems="center" $gap={10}>
              <Button
                $size="small"
                $iconOnly
                $rounded="full"
              >
                <Icon name="google_font_icons_check" $size="small" />
              </Button>
              <Button
                $size="medium"
                $iconOnly
                $rounded="full"
              >
                <Icon name="google_font_icons_check" $size="medium" />
              </Button>
              <Button
                $size="large"
                $iconOnly
                $rounded="full"
                $mr={10}
              >
                <Icon name="google_font_icons_check" $size="large" />
              </Button>

              <Button
                iconLeft={<Icon name="google_font_icons_check" $size="small" />}
                $size="small"
              >
                Icon
              </Button>
              <Button
                iconLeft={<Icon name="google_font_icons_check" $size="medium" />}
                $size="medium"
              >
                Icon
              </Button>
              <Button
                iconLeft={<Icon name="google_font_icons_check" $size="large" />}
                $size="large"
              >
                Icon
              </Button>
            </Box>
          </Section>
        </Section>
        <Divider />
        <Section container title="Icons">
          <Section>
            <Box $display="flex" $alignItems="center" $gap={20}>
              <Icon name="google_font_icons_check" $size="small" />
              <Icon name="google_font_icons_check" $size="medium" />
              <Icon name="google_font_icons_check" $size="large" />
            </Box>
          </Section>
        </Section>
        <Divider />
        <Section container title="Checkbox">
          <Section>
            <Chechbox />
            <Chechbox defaultChecked />
            <Chechbox defaultChecked disabled />
            <Chechbox disabled />
          </Section>
          <Section>
            <Chechbox label="Label" />
            <Chechbox label="Disabled Label" disabled />
          </Section>
          <Section>
            <Chechbox $size="small" />
            <Chechbox $size="medium" />
            <Chechbox $size="large" />
          </Section>
          <Section>
            <Chechbox label="Small" $size="small" />
            <Chechbox label="Medium" $size="medium" />
            <Chechbox label="Large" $size="large" />
          </Section>
          <Section>
            <Chechbox $color="blue" />
            <Chechbox $checkedColor="blue" defaultChecked />
            <Chechbox $color="primary" />
            <Chechbox $checkedColor="primary" defaultChecked />
            <Chechbox $color="secondary" />
            <Chechbox $checkedColor="secondary" defaultChecked />
          </Section>
        </Section>
        <Divider />
        <Typography $variant="h2" $mb="3rem">Tooltip</Typography>
        <Box>
          <Tooltip title="Lock">
            <Chechbox defaultChecked />
          </Tooltip>
        </Box>
        <Divider />
        <Typography $variant="h2" $mb="3rem">Data Table</Typography>
        <DataTable $css="width: 800px;" />
        <Divider />
        <Typography $variant="h2" $mb="3rem">Widget Container</Typography>
        <WidgetContainer title="Title">
          Hello from Widget Container
        </WidgetContainer>
        <Divider />
        <Typography $variant="h2" $mb="3rem">Link</Typography>
        <Link href="/">
          Example Link
        </Link>
        <Divider />
        <Typography $variant="h2" $mb="3rem">Typography</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur odio tempora pariatur nisi assumenda nemo ea modi ut nulla impedit placeat quam esse architecto, delectus vitae sapiente tempore incidunt.
        </Typography>
        <Divider />
      </Box>
    </ComponentTesterProvider>
  );
}

function Section({ title, children, container }: { title?: string; children: React.ReactNode; container?: boolean; }) {
  return (
    <Box $mb={container ? 24 : 0}>
      {title && <Typography $variant={container ? 'h2' : 'h3'} $fontWeight={container ? '600' : '400'} $mb="2em">{title}</Typography>}
      <Box $display="flex" $flexDirection={container ? 'column' : 'row'} $gap={container ? '5rem' : 12}>
        {children}
      </Box>
    </Box>
  );
}

function ComponentTesterProvider({ children }: { readonly children: React.ReactNode }) {
    return (
      <PageLayout>
        <Box
          $css="position: relative;"
        >
          {children}
        </Box>
      </PageLayout>
  );
}

export default ComponentTester;