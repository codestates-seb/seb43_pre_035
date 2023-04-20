import { Fragment, useEffect } from 'react';
import styled from 'styled-components';

import Thread from './Thread';
import Filters from './Filters';

//change into semantic html later
const ThreadsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 70%;
    flex-grow: 1;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 30px 10px;
`

const AskButton = styled.button`
    outline: none;
    background: var(--colors-button-bg-default);
    color: var(--colors-text-default);
    border-radius: 25px;
    border: 1px solid transparent;
    ${'' /* box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.2); */}
    padding: 10px 15px;
    min-width: 120px;

    font-size: var(--size-text-button);
    font-weight: var(--fonts-weight-bold);
    text-transform: uppercase;

    &:hover {
        background: var(--colors-button-bg-active);
        cursor: pointer;
    }
`


const ThreadsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 90%;
    flex-grow: 1;
`

const TempContainer = styled(ThreadsContainer)`
    justify-content: flex-start;
    width: ${(props) => props.width}px;
    padding-top: 20px;
`

const Threads = ({threads, dimensionsHandler, refContainer}) => {

    //임시로 스레드 컨테이너 크기대로 tags, users 페이지 설정
    useEffect(() => {
        if (refContainer.current) {
          dimensionsHandler(refContainer.current.offsetWidth, refContainer.current.offsetHeight);
        }
      }, []);


    return (
        <ThreadsWrapper>
            <HeaderContainer>
                <Filters />
                <AskButton>Ask Anything</AskButton>
            </HeaderContainer>
            <ThreadsContainer ref={refContainer}>
            {threads.map((thread, idx) => <Thread thread={thread} key={idx}/>)}
            </ThreadsContainer>
        </ThreadsWrapper>
    )
}

export {Threads, TempContainer};