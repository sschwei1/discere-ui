import { GridItem } from '@chakra-ui/react'

interface ContentProps {
  children?: React.ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <GridItem>
      {children}
    </GridItem>
  );
}

export default Content;