import { ChakraProvider, Grid } from '@chakra-ui/react';

import {
  Header,
  Footer,
  Content
} from '@layout';

export function App() {
  return (
    <ChakraProvider>
      <Grid>
        <Header>
          Header
        </Header>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>
      </Grid>
    </ChakraProvider>
  )
}
