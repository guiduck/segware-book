 import { createContext } from 'react';
import { api } from '../services/api';

 type AuthContextType = {
   isAuthenticated: boolean;
 }

 export const AuthContext = createContext({ } as AuthContextType)

 const AuthProvider = ({ children }) => {
   const isAuthenticated = false;

   const signUp = async () => {
    const signUpUrl = '/sign-up'
      const user = {
        username: 'guidddduck',
        password: 'guidddduck'
      }

      const response = await api.post(signUpUrl, user);
      console.log(response.data);
      const data = response.data;
   }

   const signIn = async () => {

   }

   return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
   );
 }