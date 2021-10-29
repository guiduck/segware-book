import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from '../services/api';

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
  forgotPassword: (data: string) => Promise<User>
}

export const AuthContext = createContext({ } as AuthContextType);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user; //remember to change this

  const signUp = async ({ username, password }: User) => {
    const signUpUrl = '/sign-up';

    const response = await api.post(signUpUrl, { username, password });
    console.log(response.data);
    return response.data;
  }

  useEffect(() => {
    const { 'auth.token': token } = parseCookies();

    if (token) {

    }
  }, [])

  const forgotPassword = async(username: string) => {
    const forgotPasswordUrl = `/forgot-password/${username}`;

    const response = await api.get(forgotPasswordUrl);
    console.log(response.data);
    return response.data;
  }

  const signIn = async({ username, password }: SignInData) => {
    const signInUrl = '/sign-in';

    const response = await api.post(signInUrl, { username, password });
    const token = response.data;

    setCookie(undefined, 'auth.token', token, {
      maxAge: 60 * 60 * 1, //1 hour cookie
    }) //(ss, name, thing to save, options[had to add @types/cookie - used by nookies])
    console.log(token);

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser({
      username: username,
      password: password
    });

    Router.push('/Feed');
    //return token;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, signUp, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
}