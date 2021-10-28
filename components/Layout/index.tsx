import React from 'react';

import {
  Flex,
  Button,
  useColorMode
} from '@chakra-ui/react';

import NavBar from '../NavBar';

const Layout = ({ children }) => {

  const { toggleColorMode } = useColorMode();

  return (
    <Flex direction='column' width='100%' height='100vh' justifyContent='center' alignItems='center'>
      <NavBar />
      <Button alignSelf='flex-start' onClick={toggleColorMode} >change color mode</Button>
      {children}
    </Flex>
  );
}

export default Layout;