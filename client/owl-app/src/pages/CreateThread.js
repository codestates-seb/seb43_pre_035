import styled from 'styled-components';
import AskForm from '../components/ask/AskForm';
// import { ThreadsWrapper } from '../components/home/Threads';

const AskFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    height: 100%;
    width: 90vw;
    flex-basis: 1;
    text-align: left;
    overflow-y: hidden;
`

const Headline = styled.h1`
    font-size: var(--size-text-headline);
    font-weight: var(--fonts-weight-semibold);
    margin-bottom: 30px;
    margin-left: 10px;
    letter-spacing: .1rem;
`

const CreateThread = ({threads, openModal}) => {

    return (
        <AskFormWrapper>
            <Headline>
                똑부러지게 질문하기
            </Headline>
            <AskForm openModal={openModal}/>
        </AskFormWrapper>
    )

}

export default CreateThread;