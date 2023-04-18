// import {useState} from 'react';
import Thread from './Thread';
import styled from "styled-components";

const ThreadBox = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-basis: 1;
    color: white;
    ${'' /* z-index: 0; */}
`

const Threads = ({threads}) => {



    return (
        <ThreadBox>
         {threads.map((thread, idx) => <Thread thread={thread} key={idx}/>)}
        </ThreadBox>
    )
}

export default Threads;