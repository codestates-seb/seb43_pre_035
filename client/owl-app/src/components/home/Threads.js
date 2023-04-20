import { useEffect } from 'react';
import Thread from './Thread';
import styled from 'styled-components';

const ThreadsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 70%;
    flex-grow: 1;
`

const TempContainer = styled(ThreadsContainer)`
    justify-content: flex-start;
    width: ${(props) => props.width}px;
    padding-top: 20px;
`

const Threads = ({threads, dimensionsHandler, refContainer}) => {

    useEffect(() => {
        if (refContainer.current) {
          dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
        }
      }, []);


    return (
        <ThreadsContainer ref={refContainer}>
         {threads.map((thread, idx) => <Thread thread={thread} key={idx}/>)}
        </ThreadsContainer>
    )
}

export {Threads, TempContainer};