import React from 'react';

import {
  Flex,
  Button,
  useColorMode
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon
} from '@chakra-ui/icons';

const Layout = ({ children }) => {

  const { toggleColorMode } = useColorMode();

  return (
    <Flex direction='column' width='100vw' height='100vh' justifyContent='center' alignItems='center'>
      <Flex width='100%' justifyContent='space-between'>
        <Button alignSelf='flex-start' onClick={toggleColorMode} ><SunIcon/><MoonIcon/></Button>
      </Flex>
      <Flex>
        {children}
      </Flex>
    </Flex>
  );
}

export default Layout;