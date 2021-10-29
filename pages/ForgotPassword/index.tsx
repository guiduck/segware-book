import React, { useContext, useState } from 'react';

import {
  Flex,
  Input,
  Heading,
  Button,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';

type User = {
  username: string,
  password: string
}

type getPasswordData = {
  username: string
}

const ForgotPassword = () => {
  const formBackground = useColorModeValue('gray.200', 'gray.700');
  const { register, handleSubmit, formState: { errors } }: any = useForm<getPasswordData>();
  const { forgotPassword } = useContext(AuthContext);
  const [userCredentials, setUserCredentials] = useState<User>({
    username: '',
    password: ''
  });

  const getUserCredentials = async(data: getPasswordData) => {
    const { username } = data;
    const userData = await forgotPassword(username);
    setUserCredentials(userData);
  }

  return (
    <Flex direction='column' background={formBackground} p={12} rounded={6}>
      <Heading mb={6} size='md' >Retrieve credentials</Heading>
      <Flex mb={6}>
        <form onSubmit={handleSubmit(getUserCredentials)}>
          <Input
            name='username'
            type='text'
            placeholder='username'
            {...register('username', { required: true })}
            mb={6}
          />
          { errors.username && errors.username.type === 'required' && (
            <div className='error'>you must enter your username</div>
          )}
          <Button type='submit'>Submit</Button>
        </form>
      </Flex>
      <Flex>
        user password: {userCredentials.password}
      </Flex>
      <Link href='/' mt={6} >Back to Sign In page</Link>
    </Flex>
  );
}

export default ForgotPassword;