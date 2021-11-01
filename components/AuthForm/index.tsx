import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Link,
  FormErrorMessage,
  FormControl
} from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext';
import Router from 'next/router';

type User = {
  username: string,
  password: string
}

type Props = {
  hasAccount: boolean
}

const AuthForm: React.FC<Props> = ({ hasAccount }) => {

  const [userHasAccount, setUserHasAccount] = useState(hasAccount);

  const formBackground = useColorModeValue('gray.200', 'gray.700');
  const { signIn, signUp, isLoading, isAuthenticated } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } }: any = useForm<User>();

  const signInHandler = async (data: User) => {
    if (!userHasAccount && data) {
      await signUp(data);
    } else if (userHasAccount && data) {
      await signIn(data);
    }
  }

  useEffect(() => {
    if(isAuthenticated) {
      Router.push('/Feed');
    }
  }, [isAuthenticated]);

  return (
      <Flex direction='column' background={formBackground} p={12} rounded={6} >
        <Heading mb={6}>
          Login
        </Heading>
        <form onSubmit={handleSubmit(signInHandler)}>
          <Flex>
          <FormControl mb={3} isInvalid={errors.username && errors.username.type === 'required'}>
            <Input
              {...register('username', { required: true })}
              name='username'
              placeholder='username'
              variant='filled'
              type='text'
            />
            <FormErrorMessage>Username is required</FormErrorMessage>
          </FormControl>
          </Flex>
          <Flex>

          <FormControl mb={4} isInvalid={errors.password && errors.password.type === 'required'}>
            <Input
              {...register('password', { required: true })}
              name='password'
              placeholder='******'
              variant='filled'
              type='password'
            />
            <FormErrorMessage>Password is required</FormErrorMessage>
          </FormControl>

          </Flex>
          <Flex justifyContent='center' >
            <Button disabled={isLoading} isLoading={isLoading} type='submit' colorScheme='teal' >Sign in</Button>
            <Button disabled={isLoading} isLoading={isLoading} onClick={()=>setUserHasAccount(false)} type='submit' ml={6} colorScheme='red' >Sign Up</Button>
          </Flex>
        </form>
        <Link href='/ForgotPassword' mt={6} >Forgot your password?</Link>
        {/* <Flex>{JSON.stringify(user)}</Flex> */}
      </Flex>
  )
}

export default AuthForm;