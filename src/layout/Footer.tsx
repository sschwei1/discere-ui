import { GridItem } from '@chakra-ui/react'

interface FooterProps {
  children?: React.ReactNode
}

const Footer = ({children}: FooterProps) => {
  return (
    <GridItem>
      {children}
    </GridItem>
  );
}

export default Footer;