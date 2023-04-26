import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {

  const [threads, setThreads] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

        axios.get(url, {headers : {
            'ngrok-skip-browser-warning': '69420',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization' : `Bearer ${process.env.REACT_APP_NGROK_TOKEN}`
        }})
            .then(res => {
                return res.data;
            })
            .then(data => {
                console.log('data fetched!');
                setIsPending(false);
                setThreads(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, [url]);

  return [threads, isPending, error];
}


export default useFetch;