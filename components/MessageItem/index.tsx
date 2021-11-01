import React, { useEffect, useState } from 'react';
import { Flex, Heading, Box, Button, useToast, useColorModeValue } from '@chakra-ui/react';
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
  const toast = useToast()
  const reactionUrl = '/reaction';
  const [reaction, setReaction] = useState({
    feedId: messageId,
    like: false,
    love: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const react = async (reactOption: ReactOptions) => {
    setIsLoading(true);
    try {
      await api.post(reactionUrl, reaction);
    } catch {
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    react(reaction);
  }, [reaction]);

  return (
    <Box minWidth='100%' p={6} my={5} background={useColorModeValue('gray.200', 'gray.900')} rounded={30} >
      <Flex alignItems='center' direction='column' >
        <Flex justifyContent='space-between' >
          <Heading mr={20} size='md'>{username}</Heading><p>created at: {date}</p>
        </Flex>

        <Flex direction='column' justifyContent='space-around' alignSelf='center' p={5}>
          <Flex minWidth='100px' minHeight='100px' alignItems='center'  >
            <p>{content}</p>
          </Flex>
        </Flex>
        <Flex mr={0} alignSelf='flex-end' >
          <Button disabled={isLoading} isLoading={isLoading} onClick={(e)=>setReaction({
            feedId: reaction.feedId,
            like: !reaction.like,
            love: reaction.love
          })}>likes: {reaction.like ? likes + 1 : likes}</Button>
          <Button disabled={isLoading} ml={3} isLoading={isLoading} onClick={(e)=>setReaction({
            feedId: reaction.feedId,
            like: reaction.like,
            love: !reaction.love
          })}>loves: {reaction.love ? loves + 1 : loves}</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default MessageItem;