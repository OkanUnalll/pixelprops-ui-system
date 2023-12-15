'use client';

import { Box, Container, Del, Em, Grid, Ins, Strong, Text } from 'ui-system/components';
import { UIProvider } from 'ui-system/providers';
import { Navbar } from 'ui-system/templates';

function TypographyView() {
  return (
    <UIProvider>
      <Navbar />
      <Container my={3}>
        <Grid container spacingY={20}>
          <Grid item xs={12}>
            <Text variant="h1">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="h2">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="h4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="h5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="h6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text variant="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
          </Grid>
          <Grid item xs={12}>
            <Text color="primary">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="blue">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="green">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="purple">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="red">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text color="light">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
          </Grid>
          <Grid item xs={12}>
            <Text fontWeight={200}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={300}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={500}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={600}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={700}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text fontWeight={800}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
          </Grid>
          <Grid item xs={12}>
            <Text>Lorem ipsum dolor sit <Strong color="primary">amet consectetur</Strong>, adipisicing elit.</Text>
            <Text>Lorem ipsum dolor sit <Em color="primary">amet consectetur</Em>, adipisicing elit.</Text>
            <Text>Lorem ipsum dolor sit <Del color="primary">amet consectetur</Del>, adipisicing elit.</Text>
            <Text>Lorem ipsum dolor sit <Ins color="primary">amet consectetur</Ins>, adipisicing elit.</Text>
          </Grid>
          <Grid item xs={12}>
            <Text textAlign="left">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text textAlign="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
            <Text textAlign="right">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
          </Grid>
          <Grid item xs={12}>
            <Text mb={1} variant="h5">Limit:</Text>
            <Box _display="flex" flexDirection="column" gap={1}>
              <Text limit={{ maxWidth: '100px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur?</Text>
              <Text limit={{ maxWidth: '300px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur?</Text>
              <Text limit={{ maxWidth: '600px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur?</Text>
              <Text limit>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur?</Text>
              <Text limit={{ lineClamp: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur?</Text>
              <Text limit={{ lineClamp: 3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim consequuntur ut eos itaque repudiandae dolorem dolore quidem cumque nemo, veritatis reiciendis, quia in recusandae quos natus ipsam, deleniti consequatur!</Text>
              <Text limit={{ lineClamp: 4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere libero eum doloribus laboriosam maxime dolorum incidunt provident dignissimos neque, cupiditate reprehenderit corporis, obcaecati vero perferendis nostrum vel porro tempore? Consequuntur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo enim consequuntur ut eos itaque repudiandae dolorem dolore quidem cumque nemo, veritatis reiciendis, quia in recusandae quos natus ipsam, deleniti consequatur!</Text>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </UIProvider>
  );
}

export default TypographyView;