import React, { useContext, useState } from 'react';
import Router from 'next/router';
import { useForm } from 'react-hook-form';

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext';

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
  const { signIn, signUp, forgotPassword } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } }: any = useForm<User>();

  const signInHandler = async (data: User) => {
    if (!userHasAccount && data) {
      await signUp(data);
    } else if (userHasAccount && data) {
      await signIn(data);
    }
  }

  return (
      <Flex direction='column' background={formBackground} p={12} rounded={6} >

        <Heading mb={6}>
          Login or create an account
        </Heading>
        <form onSubmit={handleSubmit(signInHandler)}>
          <Flex>
            <Input
              {...register('username', { required: true })}
              name='username'
              placeholder='username'
              variant='filled'
              mb={3}
              type='text'
            />
            { errors.username && errors.username.type === 'required' && (
              <div className='error'>you must enter your username</div>
            )}
          </Flex>
          <Flex>
            <Input
              {...register('password', { required: true })}
              name='password'
              placeholder='******'
              variant='filled'
              mb={6}
              type='password'
            />
            { errors.password && errors.password.type === 'required' && (
              <div>you must enter your password</div>
            )}
          </Flex>
          <Flex justifyContent='center' >
            <Button type='submit' colorScheme='teal' >Sign in</Button>
            <Button onClick={()=>setUserHasAccount(false)} type='submit' ml={6} colorScheme='red' >Sign Up</Button>
          </Flex>
        </form>
        {/* <Flex>{JSON.stringify(user)}</Flex> */}
      </Flex>
  )
}

export default AuthForm;