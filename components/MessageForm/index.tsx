import React, { useState } from 'react';

import { Flex, Button, Heading, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

type Message = {
  content: string
}

const MessageForm: React.FC = () => {

  const [message, setMessage] = useState('');

  const { register, handleSubmit, formState: { errors } }: any = useForm<Message>();

  const sendMessageUrl = '/feed';

  const sendMessage = async (data: Message) => {
    const response = await api.post(sendMessageUrl, data);
    console.log(response.data);
  }

  return (
    <Flex>
      <form onSubmit={handleSubmit(sendMessage)}>
        <Flex direction='column'>
          <Heading mb={6} size='md' >New message</Heading>
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
        <Button w='100%' type='submit' colorScheme='red'>Send</Button>
      </form>
    </Flex>
  );
}

export default MessageForm;