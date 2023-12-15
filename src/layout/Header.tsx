import { GridItem } from '@chakra-ui/react';

interface HeaderProps {
  children?: React.ReactNode
}

const Header = ({children}: HeaderProps) => {
  return (
    <GridItem>
      {children}
    </GridItem>
  );
}

export default Header;