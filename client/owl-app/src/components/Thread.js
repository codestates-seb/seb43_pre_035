import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const ThreadContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 0.7px solid var(--colors-border);
    height: 100%;
    width: 100%;
    padding: 10px 10px 10px 0;
    margin: 1px;
`

const ThreadContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 15em;
    flex-grow: 5;
    align-items: flex-start;
    min-width: 210px;
    padding: 0 10px 10px 3px;
    color: var(--colors-text-default);

`

const ThreadTitle = styled.h1`
    padding: 10px 0;
    font-size: 1.2em;
    font-weight: var(--fonts-thread-title-weight);
    line-height: 1.5;
    min-width: 200px;
    color: var(--colors-text-title);
    word-break: break-all;
    opacity: 85%;

    &:hover {
        color: var(--colors-text-bright);
        opacity: 100%;
        cursor: pointer;
    }
`

const ThreadContribution = styled.div`
    display: flex;
    align-self: flex-end;
    font-size: 0.8em;
    font-weight: var(--fonts-weight-default);
    color: var(--colors-text-contributor);
    word-break: keep-all;
`

const Contributor = styled.span`
    ${'' /* color: var(--colors-lightbrown); */}
    font-weight: var(--fonts-weight-semibold);

    &:hover {
        color: var(--colors-yellow);
        cursor: pointer;
    }
`

const AvatarImg = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
`

const ThreadStats = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--colors-lightbrown);
    margin: 0 10px;
    font-size: var(--fonts-size-icons);
`

const Stat = styled.div`
    padding: 0 8px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-yellow);
    padding-right: 6px;
`


const Thread = ({thread}) => {
    return (
        <ThreadContainer>
            <ThreadContent>
                <ThreadTitle>{thread.title}</ThreadTitle>
                <ThreadContribution>
                    <Contributor>{thread.author} </Contributor>님께서 {thread.createdDate}에 질문 </ThreadContribution>
            </ThreadContent>
            <AvatarImg src={thread.avatarUrl} />
            <ThreadStats>
                <Stat>
                    <StyledIcon icon={faBinoculars} />
                    <span>{thread.viewCount}</span>
                </Stat>
                <Stat>
                    <StyledIcon icon={faCommentDots} />
                    <span>{thread.answerCount}</span>
                </Stat>
            </ThreadStats>
        </ThreadContainer>
    )
}

export default Thread;