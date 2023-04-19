import styled from "styled-components"

const CommentCreatWrap = styled.div`
    padding: 10px;
    width: 750px;
    height: 45px;
    display: flex;
    justify-content: space-around;
`

const CommentDetail = styled.div`
    padding: 10px;
    width: 540px;
    height: 30px;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 100px;
    height: 15px;
`

const CommentDate = styled.div`
    padding: 10px;
    width: 120px;
    height: 15px;
`

const CommentCreated = ()=>{

    return(

            <CommentCreatWrap>
                <CommentDetail>Comment</CommentDetail>
                <CommentUser>닉네임</CommentUser>
                <CommentDate>0분 전 작성</CommentDate>
            </CommentCreatWrap>
    )
}

export default CommentCreated