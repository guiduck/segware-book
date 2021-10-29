import React from 'react';

import { Flex } from '@chakra-ui/react';

import AuthForm from '../components/AuthForm';

const Home: React.FC = () => {

  return (
    <Flex>
      <AuthForm hasAccount={true} />
    </Flex>
  )
}

export default Home;