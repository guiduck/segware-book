import React from 'react';
import useMessages from '../../hooks/useMessages';

import MessageItem from '../MessageItem';

import { Container, Flex, Heading } from '@chakra-ui/react';

type Message = {
  id: number,
  content: string,
  createdAt: string,
  updatedAt: string,
  likes: number,
  loves: number,
  activeUserLikedIt: number,
  activeUserLovedIt: number,
  author: {
    id: number,
    username: string
  }
}

const MessageList: React.FC = () => {

  const {data: messages, error } = useMessages()

  return (
    <Container mt={10}>
      <Heading size='lg' mb={10} >
        Messages
      </Heading>
      {
        messages
        ?
        messages.map((message: Message) => {
          return (
            <MessageItem
              username={message.author.username}
              content={message.content}
              likes={message.likes}
              loves={message.loves}
              date={message.createdAt}
              messageId={message.id}
            />
          );
        })
        :
        <Flex>Loading...</Flex>
      }
    </Container>
  );
}

export default MessageList;