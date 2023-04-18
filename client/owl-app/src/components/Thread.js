import styled from 'styled-components';


const ThreadStyle = styled.div`
    display: flex;
    justify-content: center;
`

const AvatarStyle = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`


const Thread = ({thread}) => {




    return (
        <ThreadStyle>
            <span>{thread.title} </span>
            <span>{thread.user} </span>
            <span>{thread.createdDate} </span>
            <AvatarStyle src={thread.avatarImg} />
            <span>{thread.viewCount}</span>
            <span>{thread.answerCount}</span>
        </ThreadStyle>
    )
}

export default Thread;