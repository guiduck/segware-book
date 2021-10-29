import { useEffect, useState } from "react";
import { api } from "../services/api";

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

const useMessages = () => {
  const [data, setData] = useState<Message[]>([]);
  const [error, setError] = useState(null);
  const getMessagesUrl = '/feeds'

  useEffect(() => {

    const loadData = async() => {
      try {
        const response = await api.get(getMessagesUrl)
        if(!response) {
          console.log('could not get data')
        } else {
          return response.data;
        }
      } catch (err) {
        console.log(err);
        setError(err);
      }
    }

    (async()=> {
      const data = await loadData();
      if(data) {
        setData(data);
      }
    }) ()
  }, [])

  return { data, error }
}

export default useMessages;