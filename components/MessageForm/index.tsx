import React, { useState } from 'react';

import {
  Flex,
  Button,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import Router from 'next/router';

type Message = {
  content: string
}

const MessageForm: React.FC = () => {
  const toast = useToast();

  const { register, handleSubmit, formState: { errors } }: any = useForm<Message>();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageUrl = '/feed';

  const sendMessage = async (data: Message) => {
    setIsLoading(true);
    try {
      await api.post(sendMessageUrl, data);
      Router.reload();
    } catch {
      toast({
        title: `Something went wrong...`,
        status: 'error',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex>
      <form onSubmit={handleSubmit(sendMessage)}>
        <Flex direction='column'>
          <Heading mb={6} size='lg' >New message</Heading>
          <Input
            {...register('content', { required: true })}
            name='content'
            placeholder='message'
            variant='filled'
            mb={3}
            type='text'
          />
          { errors.message && errors.message.type === 'required' && (
            <div className='error'>your message body is empty</div>
          )}
        </Flex>
        <Button isLoading={isLoading} disabled={isLoading} w='100%' type='submit' colorScheme='red'>Send</Button>
      </form>
    </Flex>
  );
}

export default MessageForm;