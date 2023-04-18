import styled, {css} from "styled-components";
import {useState} from 'react'
import CommentInput from "./CommentInput"

const AddCommentWrap = styled.div`
    padding: 10px;
    width: 200px;
    height: 20px;
    cursor: pointer;
    .hover {

    }
`


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
    height: 15px;
`

const CommentUser = styled.div`
    padding: 10px;
    width: 60px;
    height: 15px;
`

const CommentDate = styled.div`
    padding: 10px;
    width: 100px;
    height: 15px;
`

const AddComment = () => {

    const [comment,setComment] = useState(true)

    const commentHandleClick = ()=>{
        setComment(!comment)
    }

    return (
        <>
        <AddCommentWrap onClick={commentHandleClick}>{setComment ? <div>Add a Comment </div> :<CommentInput/>}</AddCommentWrap>
            <CommentCreatWrap>
                <CommentDetail>Comment</CommentDetail>
                <CommentUser>닉네임</CommentUser>
                <CommentDate>0분 전 작성</CommentDate>
            </CommentCreatWrap>
        </>
    )
}

export default AddComment