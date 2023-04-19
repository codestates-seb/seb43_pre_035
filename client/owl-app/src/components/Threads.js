// import {useState} from 'react';
import Thread from './Thread';
import styled from "styled-components";

const ThreadsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 70%;
    flex-grow: 1;
    ${'' /* z-index: 0; */}
`

const Threads = ({threads}) => {
    return (
        <ThreadsContainer>
         {threads.map((thread, idx) => <Thread thread={thread} key={idx}/>)}
        </ThreadsContainer>
    )
}

export default Threads;