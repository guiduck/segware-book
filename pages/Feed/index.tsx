import React, { useContext } from 'react';
import MessageList from '../../components/MessageList';
import { Flex, Link } from '@chakra-ui/react';
import MessageForm from '../../components/MessageForm';
import { AuthContext } from '../../context/AuthContext';
// import { GetServerSideProps } from 'next'
// import { getAPIClient } from '../../services/axios'
// import { parseCookies } from 'nookies';

const Feed: React.FC = () => {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Flex width='100%' mb={-50} height='100vh' >
      {isAuthenticated ? <Flex><MessageForm /><MessageList /></Flex> : <Flex><Link href='/'>You must be Authenticated</Link></Flex>}
    </Flex>
  );
}

export default Feed;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apiClient = getAPIClient(ctx);
//   const { ['nextauth.token']: token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       }
//     }
//   }

//   await apiClient.get('/users')

//   return {
//     props: {}
//   }
// }