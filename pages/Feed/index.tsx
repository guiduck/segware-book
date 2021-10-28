import React from 'react';
import MessageList from '../../components/MessageList';

import { api } from '../../services/api';

//get user token to make sure its logged in
// export const getStaticProps = async () => {

//   const signUpUrl = '/sign-up'
//   const user = {
//     username: 'guidddduck',
//     password: 'guidddduck'
//   }

//   const response = await api.post(signUpUrl, user);
//   console.log(response.data);
//   const data = response.data;

//   return { token: data }
// }

const Feed: React.FC = () => {
  return (
      <MessageList />
  );
}

export default Feed;