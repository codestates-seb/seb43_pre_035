import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import {DateComponent,formatDate} from '../../styles/DateComponent'

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
const UserInfomation = styled.span`
    visibility: hidden;
  width: 120px;
  background-color: #bf8b67;
  color: white;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content :center;
  align-items: center;
  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

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

const convertDate = (string) => {
    return `${string.substring(0, 4)}년 ${String(Number(string.substring(5, 7)))}월 ${String(Number(string.substring(8, 10)))}일`
  }

const Thread = ({thread}) => {
    

    return (
        <ThreadContainer>
            <ThreadContent>
                <Link to={`/questions/${thread.questionId}`}>
                    <ThreadTitle>{thread.title}</ThreadTitle>
                </Link>
                <ThreadContribution>
                    <TextAlign>
                        <Contributor >{thread.member.displayName}
                        <UserInfomation className='tooltiptext'>
                            <AvatarImg src={thread.member.avatarLink}/>
                            <div>{thread.member.displayName}님</div>
                            {<DateComponent date={thread.updateDate}/>}
                            </UserInfomation> 
                        </Contributor>
                                <span>님께서{formatDate(thread.updateDate)}에 질문 </span>
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