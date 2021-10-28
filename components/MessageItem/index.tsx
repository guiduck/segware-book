import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react';

type Props = {
  content: string,
  username: string,
  likes: number,
  loves: number,
  date: string
}

const MessageItem: React.FC<Props> = ({ content, username, likes, loves, date }) => {
  return (
    <Box w='100%' p={6} >
      <Flex alignItems='center' direction='column' justifyContent='center' >
        <Heading>{username}</Heading><p>created at: {date}</p>
        <Flex direction='column' justifyContent='space-evenly'>
          <Flex>
            <p>{content}</p>
          </Flex>

          <Flex direction='column'>

            <p>likes: {likes}</p>
            <p>loves: {loves}</p>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MessageItem;