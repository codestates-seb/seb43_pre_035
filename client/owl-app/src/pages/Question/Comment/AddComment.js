import styled, {css} from "styled-components";
import {useState} from 'react'
import CommentInput from "./CommentInput"
import CommentCreated from "./CommentCreated";

const AddCommentWrap = styled.div`
    padding: 10px;
    width: 750;
    border-bottom : 2px solid #FFFFFF;
    color: #9D5353;
    cursor: pointer;
    .hover {

    }
`


const AddComment = () => {

    const [comment,setComment] = useState(true)
    console.log(comment)

    const commentHandleClick = ()=>{
        setComment(!comment)
    }

    return (
        <>
            <AddCommentWrap onClick={commentHandleClick}>
            {comment ? <div> Add a Comment </div> :<CommentInput/>}
            </AddCommentWrap>
        </>
    )
}

export default AddComment