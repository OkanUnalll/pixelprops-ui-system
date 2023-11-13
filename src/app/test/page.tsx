'use client';

import PageLayout from '@/layouts/PageLayout';

import Box from 'ui-system/components/Box';
import WidgetContainer from 'ui-system/components/WidgetContainer';
import Typography from 'ui-system/components/Typography';
import DataTable from 'ui-system/components/DataTable';
import Checkbox from 'ui-system/components/Checkbox';
import Progress from 'ui-system/components/Progress';
import Tooltip from 'ui-system/components/Tooltip';
import Divider from 'ui-system/components/Divider';
import Button from 'ui-system/components/Button';
import Link from 'ui-system/components/Link';
import Icon from 'ui-system/components/Icon';
import Container from 'ui-system/components/Container';
import Navbar from 'ui-system/components/Navbar';

function ComponentTester() {
  return (
    <ComponentTesterProvider>
      <Box $display="flex" $flexDirection="column" $py={3} $css="position: relative;">
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
            <Box $display="flex" $alignItems="center" $gap={1}>
              <Button $size="small">Small</Button>
              <Button $size="medium">Medium</Button>
              <Button $size="large">Large</Button>
            </Box>
          </Section>
          <Section title="With Icons">
            <Box $display="flex" $alignItems="center" $gap={1}>
              <Button
                $size="small"
                $iconOnly
                $rounded="full"
              >
                <Icon name="google_arrow_right" $size="small" />
              </Button>
              <Button
                $size="medium"
                $iconOnly
                $rounded="full"
              >
                <Icon name="google_arrow_right" $size="medium" />
              </Button>
              <Button
                $size="large"
                $iconOnly
                $rounded="full"
                $mr={1}
              >
                <Icon name="google_arrow_right" $size="large" />
              </Button>



              <Button
                $iconOnly
                $variant="text"
              >
                <Icon name="google_close" />
              </Button>
              <Button
                $iconOnly
                $variant="text"
              >
                <Icon name="google_check" />
              </Button>
              <Button
                $iconOnly
                $variant="text"
                $mr={1}
              >
                <Icon name="google_search" />
              </Button>



              <Button
                iconLeft={<Icon name="google_arrow_right" $size="small" />}
                $size="small"
                $color="secondary"
              >
                Left
              </Button>
              <Button
                iconLeft={<Icon name="google_arrow_right" $size="medium" />}
                $size="medium"
                $color="yellow"
              >
                Left
              </Button>
              <Button
                iconLeft={<Icon name="google_arrow_right" $size="large" />}
                $size="large"
                $color="blue"
                $mr={1}
              >
                Left
              </Button>



              <Button
                iconRight={<Icon name="google_arrow_right" $size="small" />}
                $size="small"
                $color="purple"
              >
                Right
              </Button>
              <Button
                iconRight={<Icon name="google_arrow_right" $size="medium" />}
                $size="medium"
                $color="red"
              >
                Right
              </Button>
              <Button
                iconRight={<Icon name="google_arrow_right" $size="large" />}
                $size="large"
                $color="green"
              >
                Right
              </Button>
            </Box>
          </Section>
        </Section>
        <Divider />
        <Section container title="Progress">
          <Section title="Sizes">
            <Progress $size="small" />
            <Progress $size="medium" />
            <Progress $size="large" />
          </Section>
          <Section title="Colors">
            <Progress $color="primary" />
            <Progress $color="blue" />
            <Progress $color="green" />
            <Progress $color="purple" />
            <Progress $color="red" />
          </Section>
          <Section title="Animations">
            <Progress $timingFunction="linear" />
            <Progress $timingFunction="ease" />
            <Progress $timingFunction="ease-in-out" />
          </Section>
        </Section>
        <Divider />
        <Section container title="Icons">
          <Section title="Sizes">
            <Box $display="flex" $alignItems="center" $gap={1}>
              <Icon name="google_arrow_right" $size="small" />
              <Icon name="google_arrow_right" $size="medium" />
              <Icon name="google_arrow_right" $size="large" />
            </Box>
          </Section>
          <Section title="All Icons">
            <Typography>Google Font Icons</Typography>
            <Icon name="google_arrow_bottom" />
            <Icon name="google_arrow_left" />
            <Icon name="google_arrow_top" />
            <Icon name="google_arrow_right" />
            <Icon name="google_check" />
            <Icon name="google_close" />
            <Icon name="google_search" />
          </Section>
        </Section>
        <Divider />
        <Section container title="Checkbox">
          <Section>
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox defaultChecked disabled />
            <Checkbox disabled />
          </Section>
          <Section>
            <Checkbox label="Label" />
            <Checkbox label="Disabled Label" disabled />
          </Section>
          <Section>
            <Checkbox $size="small" />
            <Checkbox $size="medium" />
            <Checkbox $size="large" />
          </Section>
          <Section>
            <Checkbox label="Small" $size="small" />
            <Checkbox label="Medium" $size="medium" />
            <Checkbox label="Large" $size="large" />
          </Section>
          <Section>
            <Checkbox $color="blue" />
            <Checkbox $checkedColor="blue" defaultChecked />
            <Checkbox $color="primary" />
            <Checkbox $checkedColor="primary" defaultChecked />
            <Checkbox $color="secondary" />
            <Checkbox $checkedColor="secondary" defaultChecked />
          </Section>
        </Section>
        <Divider />
        <Section container title="Tooltip">
          <Box $display="flex" $gap={2}>
            <Tooltip title="Lock" placement="top">
              <Checkbox disabled defaultChecked />
            </Tooltip>
            <Tooltip title="Click Here!">
              <Button>
                Button
              </Button>
            </Tooltip>
            <Tooltip title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit, libero incidunt ex perferendis quidem autem. Quasi id quam, maiores, error placeat, officia doloremque laudantium accusantium ullam possimus vero cupiditate!">
              <Typography $limit={{ maxWidth: '200px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit, libero incidunt ex perferendis quidem autem. Quasi id quam, maiores, error placeat, officia doloremque laudantium accusantium ullam possimus vero cupiditate!
              </Typography>
            </Tooltip>
          </Box>
        </Section>
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
        <Section container title="Typography">
          <Box>
            <Typography $variant="h1">H1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="h2">H2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="h3">H3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="h4">H4: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="h5">H5: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="h6">H6: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            <Typography $variant="text" >TEXT: Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
          </Box>
        </Section>
        <Divider />
      </Box>
    </ComponentTesterProvider>
  );
}

function Section({ title, children, container }: { title?: string; children: React.ReactNode; container?: boolean; }) {
  return (
    <Box $mb={container ? 2 : 0}>
      {title && <Typography $variant={container ? 'h2' : 'h3'} $fontWeight={container ? '600' : '400'} $mb="2em">{title}</Typography>}
      <Box $display="flex" $flexDirection={container ? 'column' : 'row'} $gap={container ? '5rem' : 1}>
        {children}
      </Box>
    </Box>
  );
}

function ComponentTesterProvider({ children }: { readonly children: React.ReactNode }) {
    return (
      <PageLayout>
        <Navbar $variant="none" />
        <Container>
          <Box
            $css="position: relative;"
          >
            {children}
          </Box>
        </Container>
      </PageLayout>
  );
}

export default ComponentTester;