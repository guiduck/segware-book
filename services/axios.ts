import axios from "axios";
import { parseCookies } from "nookies";

export const getAPIClient = (ctx?: any) => {
  const { 'auth.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://segware-book-api.segware.io/api'
  });

  api.interceptors.request.use(config => {
    console.log(config);
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}