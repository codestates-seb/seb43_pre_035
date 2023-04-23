import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {

  const [threads, setThreads] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // fetch(url, {headers: {
    //     'ngrok-skip-browser-warning': '69420'
    // }})
    //     .then(res => {
    //         if(!res.ok){
    //             throw Error('could not fetch the data for that resource');
    //         }
    //         return res.json();
    //     })
    //     .then(data=> {
    //         console.log(data);
    //         setIsPending(false);
    //         setThreads(data);
    //         setError(null);
    //     })
    //     .catch(err => {
    //         setIsPending(false);
    //         setError(err.message);
    //     })
    // }, [url]);

        axios.get(url, {headers : {
            'ngrok-skip-browser-warning': '69420'
        }})
            .then(res => {
                return res.data;
            })
            .then(data => {
                console.log('data fetched!');
                // console.log(data);
                setIsPending(false);
                setThreads(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                // console.log(err.message);
            })
        }, [url]);

  return [threads, isPending, error];
}


export default useFetch;