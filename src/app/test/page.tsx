'use client';

import Box from '@root/elements/Box';

import DataTable from '@root/elements/Tables/DataTable';

import PageLayout from '@/layouts/PageLayout';

import WidgetContainer from '@root/elements/WidgetContainer';
import Typography from '@root/elements/Typography';
import Chechbox from '@root/elements/Checkbox';
import Divider from '@root/elements/Divider';
import Tooltip from '@root/elements/Tooltip';
import Link from '@root/elements/Link';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
      <Box $display="flex" $flexDirection="column" $py="3rem" $css="position: relative;">
        <Typography $variant="h1" $mb="3rem">Elements</Typography>
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
      </Box>
    </ComponentTesterProvider>
  );
}

function Section({ title, children, container }: { title?: string; children: React.ReactNode; container?: boolean; }) {
  return (
    <Box $mb={container ? '2rem' : '0'}>
      {title && <Typography $variant="h2" $mb="2em">{title}</Typography>}
      <Box $display="flex" $flexDirection={container ? 'column' : 'row'} $gap={container ? '2rem' : '1rem'}>
        {children}
      </Box>
    </Box>
  );
}

function ComponentTesterProvider({ children }: { readonly children: React.ReactNode }) {
    return (
      <PageLayout>
        <Box
          $display="flex"
          $alignItems="center"
          $justifyContent="center"
          $width="100%"
          $css="position: relative;"
        >
          {children}
        </Box>
      </PageLayout>
  );
}

export default ComponentTester;