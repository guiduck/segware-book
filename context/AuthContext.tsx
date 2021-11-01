import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from '../services/api';
import { useToast } from '@chakra-ui/toast';

type SignInData = {
  username: string,
  password: string
}

type User = {
  username: string,
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User,
  signIn: (data: SignInData) => Promise<void>,
  signUp: (data: User) => Promise<void>,
  forgotPassword: (data: string) => Promise<User>,
  isLoading: boolean
}

export const AuthContext = createContext({ } as AuthContextType);

export const AuthProvider = ({ children }) => {
  const toast = useToast()

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async ({ username, password }: User) => {
    setIsLoading(true);
    try {
      const signUpUrl = '/sign-up';
      const response = await api.post(signUpUrl, { username, password });

      toast({
        title: `Successfully created an account`,
        status: 'success',
        isClosable: true,
      });

      await signIn({username, password});
      return response.data;
    } catch (e) {
      console.log('error', e);
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const { 'auth.token': token } = parseCookies();

    if (token) {
      setIsAuthenticated(true);
    }
  }, [user])

  const forgotPassword = async(username: string) => {
    setIsLoading(true);
    try {
      const forgotPasswordUrl = `/forgot-password/${username}`;

      const response = await api.get(forgotPasswordUrl);
      toast({
        title: `Password retrieved`,
        status: 'success',
        isClosable: true,
      });
      return response.data;
    } catch (err) {
      console.log('error', err);
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  const signIn = async({ username, password }: SignInData) => {
    setIsLoading(true);
    try {
      const signInUrl = '/sign-in';
      const response = await api.post(signInUrl, { username, password });
      const token = response.data;

      setCookie(undefined, 'auth.token', token, {
        maxAge: 60 * 60 * 1, //1 hour cookie
      }) //(ss, name, thing to save, options[had to add @types/cookie -> used by nookies])

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser({
        username: username,
        password: password
      });

      Router.push('/Feed');
    } catch (e) {
      console.log('error', e);
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, signUp, forgotPassword, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}