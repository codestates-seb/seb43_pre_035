import styled from "styled-components"


const CommentWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 2px solid white;
`

const CommentDetail = styled.div`
    padding: 10px;
    width: 60vw;
    height: 30px;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 20vw;
    height: 15px;
`

const CommentDate = styled.div`
    padding: 10px;
    width: 20vw;
    height: 15px;
`

const CommentCreated = ({comment})=>{

    return(
        <>
        <CommentWrap>
            <CommentDetail>{comment.content}</CommentDetail>
            <CommentUser>{comment.member}</CommentUser>
            <CommentDate>{comment.updateDate}</CommentDate>
        </CommentWrap>
        </>

    )
}

export default CommentCreated