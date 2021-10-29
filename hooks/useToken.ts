import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const useToken = () => {

  const [token, setToken] = useState('');
  const [error, setError] = useState(null)

  useEffect(() => {
    const { 'auth.token': token } = parseCookies();

    if (token) {
      setToken(token);
    } else {
      setError('token is not available')
    }
  }, [])

  return { token, error }
}

export default useToken;

