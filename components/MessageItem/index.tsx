import React, { useEffect, useState } from 'react';
import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { api } from '../../services/api';

type Props = {
  messageId: number,
  content: string,
  username: string,
  likes: number,
  loves: number,
  date: string
}

type ReactOptions = {
  feedId: number,
  like: boolean,
  love: boolean
}

const MessageItem: React.FC<Props> = ({ messageId, content, username, likes, loves, date }) => {

  const reactionUrl = '/reaction';
  const [reaction, setReaction] = useState({
    feedId: messageId,
    like: false,
    love: false
  });

  const react = async (reactOption: ReactOptions) => {
    await api.post(reactionUrl, reaction);
  }

  useEffect(() => {
    react(reaction);
  }, [reaction]);

  return (
    <Box width='100%' p={6} >
      <Flex alignItems='center' direction='column' >
        <Heading size='md'>{username}</Heading><p>created at: {date}</p>
        <Flex direction='column' justifyContent='space-evenly'>
          <Flex>
            <p>{content}</p>
          </Flex>

          <Flex direction='column'>
            <Button onClick={(e)=>setReaction({
              feedId: reaction.feedId,
              like: !reaction.like,
              love: reaction.love
            })}>likes: {reaction.like ? likes + 1 : likes}</Button>
            <Button onClick={(e)=>setReaction({
              feedId: reaction.feedId,
              like: reaction.like,
              love: !reaction.love
            })}>loves: {reaction.love ? loves + 1 : loves}</Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MessageItem;