import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

type User = {
  username: string,
  password: string
}

const AuthForm: React.FC = () => {

  const [user, setUser] = useState<User>({
    username: '',
    password: ''
  });

  const formBackground = useColorModeValue('gray.200', 'gray.700');
  const router = useRouter();

  const signIn = () => {
    setTimeout(() => {
      router.push('/Feed');
    }, 3000);
  }

  const signUp = () => {
    setTimeout(() => {
      router.push('/Profile');
    }, 3000);
  }

  return (
      <Flex direction='column' background={formBackground} p={12} rounded={6} >

        <Heading mb={6}>
          Login or create an account
        </Heading>

        <Input
          value={user.username}
          onChange={e => setUser({
            username: e.target.value,
            password: user.password
          })}
          placeholder='username'
          variant='filled'
          mb={3}
          type='text'
        />
        <Input
          value={user.password}
          onChange={e=>setUser({
            username: user.username,
            password: e.target.value
          })}
          placeholder='******'
          variant='filled'
          mb={6}
          type='password'
        />
        <Flex justifyContent='center' >
          <Button onClick={signIn} colorScheme='teal' >Sign in</Button>
          <Button onClick={signUp} ml={6} colorScheme='red' >Sign Up</Button>
        </Flex>
        <Flex>{JSON.stringify(user)}</Flex>
      </Flex>
  )
}

export default AuthForm;