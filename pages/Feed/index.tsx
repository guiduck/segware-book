import React from 'react';
import MessageList from '../../components/MessageList';
// import { GetServerSideProps } from 'next'
// import { getAPIClient } from '../../services/axios'
// import { parseCookies } from 'nookies';

const Feed: React.FC = () => {
  return (
      <MessageList />
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