import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { DateComponent, formatDate } from '../../styles/DateComponent'

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
    ${'' /* min-width: var(--size_thread-minwidth); */}
`

const ThreadContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20em;
    flex-grow: 8;
    align-items: flex-start;
    min-width: 210px;
    padding: 0 20px 10px 3px;
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
    ${'' /* width: 100%;
    text-align: right; */}
    font-size: 0.8em;
    font-weight: var(--fonts-weight-default);
    color: var(--colors-text-contributor);
    word-break: keep-all;
`

const TextAlign = styled.div`
    text-align: left;
`


const AvatarImg = styled.img`
    width: var(--size-thread-avatar);
    height: var(--size-thread-avatar);
    border-radius: 50%;
    `

const HoverImg = styled(AvatarImg)`
    margin-right: 10px;
`

const ThreadStats = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--colors-lightbrown);
    margin: 0 10px;
    font-size: var(--fonts-size-icons);
    `

const Stat = styled.span`
    padding-left: 8px;
    width: 63.5px;

    `

const StyledIcon = styled(FontAwesomeIcon)`
    color: var(--colors-yellow);
    padding-right: 6px;
    `

const Contributor = styled.span`
    font-weight: var(--fonts-weight-semibold);
    position: relative;
    display: inline-block;
    color: var(--colors-yellow);

    &:hover .tooltiptext {
        cursor: pointer;
        visibility: visible;
        opacity: 1;
    }
`
const UserInformation = styled.span`
  visibility: hidden;
  width: auto;
  background-color: var(--colors-inputbrown);
  border: 0.5px solid var(--colors-dullbrown);
  color: white;
  text-align: left;
  padding: 8px 6px 8px 4px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -80px;

  ${'' /* word-break: break-all; */}
  white-space: nowrap;
  line-height: 1.2rem;


  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
    &::after{
        content: "";
    position: absolute;
    top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
    }
`

const UserTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: var(--fonts-weight-default);
    ${'' /* justify-content: flex-start; */}
`

const UserName = styled.div`
    display: flex;
    flex-direction: row;
    ${'' /* justify-content: space-between; */}

`

const DisplayName = styled.div`
    font-weight: var(--fonts-weight-semibold);
    margin-right: 6px;
`

// const RealName = styled.div`
//     font-weight: var(--fonts-weight-default);
// `



const Thread = ({ thread }) => {


    return (
        <ThreadContainer>
            <ThreadContent>
                <Link to={`/questions/${thread.questionId}`}>
                    <ThreadTitle>{thread.title}</ThreadTitle>
                </Link>
                <ThreadContribution>
                    <TextAlign>
                        <Contributor >{thread.member.displayName}
                            <UserInformation className='tooltiptext'>
                                <HoverImg src={thread.member.avatarLink} />
                                <UserTextBlock>
                                    <UserName>
                                        <DisplayName>{thread.member.displayName}</DisplayName>
                                        {thread.member.name}
                                    </UserName>
                                    <div>{thread.member.email}</div>
                                {<DateComponent date={thread.updateDate} />}
                                </UserTextBlock>
                            </UserInformation>
                        </Contributor>
                        <span>님이 {formatDate(thread.updateDate)}에 질문 </span>
                    </TextAlign>
                </ThreadContribution>
            </ThreadContent>
            <AvatarImg src={thread.member.avatarLink} />
            <ThreadStats>
                <Stat>
                    <StyledIcon icon={faBinoculars} />
                    <span>{thread.viewCount}</span>
                </Stat>
                <Stat>
                    <StyledIcon icon={faCommentDots} />
                    <span>{thread.answers.length}</span>
                </Stat>
            </ThreadStats>
        </ThreadContainer>
    )
}

export default Thread;